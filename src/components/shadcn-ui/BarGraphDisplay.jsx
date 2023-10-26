"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const barData = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 30) + 1,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 30) + 1,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 30) + 1,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 30) + 1,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 30) + 1,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 30) + 1,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 30) + 1,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 30) + 1,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 30) + 1,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 30) + 1,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 30) + 1,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 30) + 1,
  },
];

export function BarGraphDisplay() {
  return (
    <ResponsiveContainer width="50%" height={350}>
    <BarChart data={barData}>
      <XAxis
        dataKey="name"
        stroke="white"
        fontSize={12}
        tickLine={false}
        axisLine={true}
      />
      <YAxis
        tickMargin={5}
        stroke="white"
        fontSize={12}
        tickLine={false}
        axisLine={true}
        dataKey="total"
        // ticks={[
        //   { value: 10, label: "10" },
        //   { value: 20, label: "20" },
        //   { value: 30, label: "30" },
        // ]}
        // tickFormatter={(value) => `$${value}`}
      />
      <Bar dataKey="total" fill="##3f3f46" radius={[4, 4, 0, 0]} />
    </BarChart>
</ResponsiveContainer>
  )
}