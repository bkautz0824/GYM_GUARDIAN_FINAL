import React, { PureComponent } from 'react';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';



const renderCustomActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"white"}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={-10} textAnchor={cos >= 0 ? 'start' : 'end'} fill="white">
        {`${payload.value}`}
      </text>
    </g>
  );
};

const data1 = [
    { name: 'A', value: 400 },
    { name: 'B', value: 300 },
    { name: 'C', value: 300 },
    { name: 'D', value: 200 },
  ];




const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d'];


export const CustomActiveShapePieChart1 = () => {

    const [activeIndex, setActiveIndex] = React.useState(0);
  
    const handlePieEnter = (_, index) => {
        console.log(index)
      setActiveIndex(index);
    };
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            onMouseEnter={handlePieEnter}
            activeShape={renderCustomActiveShape}
            data={data1}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"

          >
            {data1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend />
          {/* <Tooltip /> */}
        </PieChart>
      </ResponsiveContainer>
    );
  };
  

  const data2 = [
    { name: 'Back', value: 800 },
    { name: 'Abs', value: 100 },
    { name: 'Cardio', value: 500 },
    { name: 'Arms', value: 200 },
    { name: 'Legs', value: 155 },
    { name: 'Chest', value: 90 },
  ];



  
export const CustomActiveShapePieChart2 = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
  
    const handlePieEnter = (_, index) => {
        console.log(index)
      setActiveIndex(index);
    };
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            onMouseEnter={handlePieEnter}
            activeShape={renderCustomActiveShape}
            data={data2}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"

          >
            {data2.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend />
          {/* <Tooltip /> */}
        </PieChart>
      </ResponsiveContainer>
    );
  };
  