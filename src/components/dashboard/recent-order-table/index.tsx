import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

// Demo recent orders data
const recentOrders = [
  {
    id: "ORD-7652",
    customer: "Sarah Johnson",
    date: "2023-05-02",
    total: 45.8,
    status: "Delivered",
  },
  {
    id: "ORD-7651",
    customer: "Michael Chen",
    date: "2023-05-02",
    total: 32.5,
    status: "Processing",
  },
  {
    id: "ORD-7650",
    customer: "Emily Rodriguez",
    date: "2023-05-01",
    total: 78.25,
    status: "Shipped",
  },
  {
    id: "ORD-7649",
    customer: "David Kim",
    date: "2023-05-01",
    total: 24.99,
    status: "Delivered",
  },
  {
    id: "ORD-7648",
    customer: "Jessica Taylor",
    date: "2023-04-30",
    total: 56.75,
    status: "Delivered",
  },
]

export function RecentOrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>${order.total.toFixed(2)}</TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === "Delivered" ? "default" : order.status === "Processing" ? "outline" : "secondary"
                }
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="outline">
                <Eye className="mr-2 h-4 w-4" /> View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
