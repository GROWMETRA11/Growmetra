"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

// Demo product performance data
const data = [
  { name: "Organic Tomatoes", sales: 1245, profit: 623 },
  { name: "Fresh Strawberries", sales: 1120, profit: 560 },
  { name: "Free-Range Eggs", sales: 980, profit: 490 },
  { name: "Honey Jar", sales: 865, profit: 520 },
  { name: "Organic Lettuce", sales: 740, profit: 370 },
  { name: "Artisan Cheese", sales: 650, profit: 390 },
  { name: "Organic Carrots", sales: 540, profit: 270 },
]

export function ProductPerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical">
        <XAxis type="number" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          dataKey="name"
          type="category"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          width={120}
        />
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <Tooltip
          formatter={(value, name) => [`$${value}`, name === "sales" ? "Sales" : "Profit"]}
          contentStyle={{
            backgroundColor: "white",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
          }}
        />
        <Bar dataKey="sales" fill="#4ade80" radius={[0, 4, 4, 0]} />
        <Bar dataKey="profit" fill="#22c55e" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
