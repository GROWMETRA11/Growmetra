"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Home,
  Package,
  Settings,
  ShoppingCart,
  Users,
  Wallet,
  Leaf,
  Bell,
  Calendar,
  HelpCircle,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import Logo from "@/components/scaffold/logo"

const navigationItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Products",
    icon: Package,
    href: "/dashboard/products",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    href: "/dashboard/orders",
    badge: "12",
  },
  {
    title: "Customers",
    icon: Users,
    href: "/dashboard/customers",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    title: "Payments",
    icon: Wallet,
    href: "/dashboard/payments",
  },
//   {
//     title: "Calendar",
//     icon: Calendar,
//     href: "/dashboard/calendar",
//   },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
]

const resourceItems = [
  {
    title: "Growing Tips",
    icon: Leaf,
    href: "/dashboard/resources/growing-tips",
  },
  {
    title: "Help Center",
    icon: HelpCircle,
    href: "/dashboard/resources/help",
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [notifications, setNotifications] = useState(3)

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <Logo/>
            {/* <div className="flex items-center gap-2 px-4 py-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold">GrowMetra</span>
            </div> */}
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={pathname === item.href}>
                        <Link href={item.href}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                      {item.badge && <Badge className="ml-auto">{item.badge}</Badge>}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Resources</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {resourceItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={pathname === item.href}>
                        <Link href={item.href}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Farmer profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">Green Acres Farm</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-4 w-4" />
                    {notifications > 0 && (
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                        {notifications}
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>New order received</DropdownMenuItem>
                  <DropdownMenuItem>Payment processed</DropdownMenuItem>
                  <DropdownMenuItem>Inventory low alert</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="flex h-16 items-center border-b px-6">
            <SidebarTrigger />
            <div className="ml-4 text-lg font-semibold">
              {pathname === "/dashboard" && "Dashboard Overview"}
              {pathname === "/dashboard/products" && "Products Management"}
              {pathname === "/dashboard/orders" && "Orders"}
              {pathname === "/dashboard/customers" && "Customers"}
              {pathname === "/dashboard/analytics" && "Analytics"}
              {pathname === "/dashboard/payments" && "Payments"}
              {pathname === "/dashboard/calendar" && "Calendar"}
              {pathname === "/dashboard/settings" && "Settings"}
            </div>
          </div>
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

// npx shadcn@latest add sidebar avatar button dropdown-menu badge
