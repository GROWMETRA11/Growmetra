"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

// Demo customer acquisition data
const data = [
  { month: "Jan", customers: 45 },
  { month: "Feb", customers: 52 },
  { month: "Mar", customers: 61 },
  { month: "Apr", customers: 58 },
  { month: "May", customers: 75 },
  { month: "Jun", customers: 87 },
  { month: "Jul", customers: 91 },
  { month: "Aug", customers: 101 },
  { month: "Sep", customers: 110 },
  { month: "Oct", customers: 105 },
  { month: "Nov", customers: 120 },
  { month: "Dec", customers: 132 },
]

export function CustomerAcquisitionChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Tooltip
          formatter={(value) => [`${value} customers`, "New Customers"]}
          contentStyle={{
            backgroundColor: "white",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
          }}
        />
        <Line type="monotone" dataKey="customers" stroke="#4ade80" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
