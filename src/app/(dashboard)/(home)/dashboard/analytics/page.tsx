"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SalesChart } from "@/components/dashboard/sales-chart"
import { ProductPerformanceChart } from "@/components/dashboard/product-performance"
import { CustomerAcquisitionChart } from "@/components/dashboard/customer-acquisition"
import { SeasonalTrendsChart } from "@/components/dashboard/seasonal-trend"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("year")

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
            <p className="text-muted-foreground">Track your farm business performance</p>
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last 7 days</SelectItem>
              <SelectItem value="month">Last 30 days</SelectItem>
              <SelectItem value="quarter">Last 90 days</SelectItem>
              <SelectItem value="year">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="sales">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
          </TabsList>
          <TabsContent value="sales" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>Your sales performance over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <SalesChart />
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$42.50</div>
                  <p className="text-xs text-muted-foreground">+8.2% from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2%</div>
                  <p className="text-xs text-muted-foreground">+0.5% from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">512</div>
                  <p className="text-xs text-muted-foreground">+12.3% from previous period</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Performance</CardTitle>
                <CardDescription>Your best and worst performing products</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ProductPerformanceChart />
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Top Selling Products</CardTitle>
                  <CardDescription>Products with the highest sales volume</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Organic Tomatoes", sales: 1245, growth: "+12%" },
                      { name: "Fresh Strawberries", sales: 1120, growth: "+8%" },
                      { name: "Free-Range Eggs", sales: 980, growth: "+15%" },
                      { name: "Honey Jar", sales: 865, growth: "+5%" },
                      { name: "Organic Lettuce", sales: 740, growth: "+3%" },
                    ].map((product, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium leading-none">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.sales} units sold</p>
                        </div>
                        <div className="text-sm text-green-600 font-medium">{product.growth}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Alerts</CardTitle>
                  <CardDescription>Products that need attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Organic Carrots", stock: 10, status: "Low Stock" },
                      { name: "Artisan Cheese", stock: 0, status: "Out of Stock" },
                      { name: "Fresh Apples", stock: 15, status: "Low Stock" },
                      { name: "Organic Milk", stock: 8, status: "Low Stock" },
                      { name: "Homemade Jam", stock: 5, status: "Low Stock" },
                    ].map((product, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium leading-none">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.stock} units remaining</p>
                        </div>
                        <div
                          className={`text-sm font-medium ${
                            product.status === "Out of Stock" ? "text-red-600" : "text-amber-600"
                          }`}
                        >
                          {product.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="customers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Customer Acquisition</CardTitle>
                <CardDescription>New customers over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <CustomerAcquisitionChart />
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-xs text-muted-foreground">+18.2% from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Repeat Purchase Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42.8%</div>
                  <p className="text-xs text-muted-foreground">+5.3% from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Customer Lifetime Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$235.42</div>
                  <p className="text-xs text-muted-foreground">+12.5% from previous period</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Customer Demographics</CardTitle>
                <CardDescription>Where your customers are located</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Customer map visualization will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="seasonal" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Seasonal Trends</CardTitle>
                <CardDescription>How your sales vary throughout the year</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <SeasonalTrendsChart />
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Seasonal Products</CardTitle>
                  <CardDescription>Products that perform well by season</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Spring (Mar-May)</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Fresh Strawberries</span>
                          <span className="text-green-600">+45% sales</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Organic Lettuce</span>
                          <span className="text-green-600">+32% sales</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Summer (Jun-Aug)</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Organic Tomatoes</span>
                          <span className="text-green-600">+58% sales</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fresh Berries</span>
                          <span className="text-green-600">+41% sales</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Fall (Sep-Nov)</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Pumpkins</span>
                          <span className="text-green-600">+120% sales</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Apples</span>
                          <span className="text-green-600">+35% sales</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Planning Recommendations</CardTitle>
                  <CardDescription>Suggestions based on seasonal trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md bg-muted p-4">
                      <h4 className="font-semibold mb-2">Upcoming Season: Summer</h4>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Increase tomato production by 20%</li>
                        <li>Prepare berry promotions for June</li>
                        <li>Stock up on packaging for summer fruits</li>
                        <li>Plan for increased irrigation needs</li>
                      </ul>
                    </div>
                    <div className="rounded-md bg-muted p-4">
                      <h4 className="font-semibold mb-2">Long-term Planning</h4>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Consider greenhouse expansion for year-round production</li>
                        <li>Develop value-added products for off-season revenue</li>
                        <li>Plan crop rotation for sustainable soil health</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
