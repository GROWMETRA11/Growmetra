"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

// Demo seasonal trends data
const data = [
  { month: "Jan", vegetables: 420, fruits: 240, dairy: 380 },
  { month: "Feb", vegetables: 460, fruits: 280, dairy: 390 },
  { month: "Mar", vegetables: 520, fruits: 350, dairy: 400 },
  { month: "Apr", vegetables: 580, fruits: 480, dairy: 410 },
  { month: "May", vegetables: 620, fruits: 580, dairy: 420 },
  { month: "Jun", vegetables: 680, fruits: 680, dairy: 430 },
  { month: "Jul", vegetables: 720, fruits: 780, dairy: 440 },
  { month: "Aug", vegetables: 760, fruits: 820, dairy: 450 },
  { month: "Sep", vegetables: 680, fruits: 680, dairy: 460 },
  { month: "Oct", vegetables: 620, fruits: 520, dairy: 470 },
  { month: "Nov", vegetables: 580, fruits: 380, dairy: 480 },
  { month: "Dec", vegetables: 540, fruits: 320, dairy: 490 },
]

export function SeasonalTrendsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Tooltip
          formatter={(value) => [`$${value}`, "Revenue"]}
          contentStyle={{
            backgroundColor: "white",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
          }}
        />
        <Area type="monotone" dataKey="vegetables" stackId="1" stroke="#4ade80" fill="#4ade80" fillOpacity={0.6} />
        <Area type="monotone" dataKey="fruits" stackId="1" stroke="#fb923c" fill="#fb923c" fillOpacity={0.6} />
        <Area type="monotone" dataKey="dairy" stackId="1" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.6} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

