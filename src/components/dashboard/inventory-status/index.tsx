"use client"

import { Progress } from "@/components/ui/progress"

// Demo inventory data
const inventoryItems = [
  {
    name: "Organic Tomatoes",
    stock: 120,
    maxStock: 150,
    percentage: 80,
  },
  {
    name: "Fresh Strawberries",
    stock: 85,
    maxStock: 100,
    percentage: 85,
  },
  {
    name: "Organic Lettuce",
    stock: 65,
    maxStock: 100,
    percentage: 65,
  },
  {
    name: "Free-Range Eggs",
    stock: 48,
    maxStock: 100,
    percentage: 48,
  },
  {
    name: "Honey Jar",
    stock: 32,
    maxStock: 50,
    percentage: 64,
  },
  {
    name: "Organic Carrots",
    stock: 10,
    maxStock: 100,
    percentage: 10,
  },
]

export function InventoryStatus() {
  return (
    <div className="space-y-4">
      {inventoryItems.map((item) => (
        <div key={item.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-sm text-muted-foreground">
              {item.stock}/{item.maxStock}
            </span>
          </div>
          <Progress
            value={item.percentage}
            className={item.percentage < 20 ? "bg-red-100" : item.percentage < 50 ? "bg-yellow-100" : "bg-green-100"}
          />
        </div>
      ))}
    </div>
  )
}
