import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts"

const data = [
  {
    subject: 'Back',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chest',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Legs',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Core',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Arms',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Shoulders',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function RadarChartDisplay() {
  return (
    <div width="50%" height="100%">
    <RadarChart height={350} width={500} outerRadius="70%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      {/* <PolarRadiusAxis /> */}
      <Radar name="Mike" dataKey="A" stroke="#16a34a" fill="#16a34a" fillOpacity={0.6} />
    </RadarChart>
</div>
  )
}
