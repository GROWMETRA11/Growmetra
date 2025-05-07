"use client";

import { TableCell } from "@/components/ui/table";

import { TableBody } from "@/components/ui/table";

import { TableHead } from "@/components/ui/table";

import { TableRow } from "@/components/ui/table";

import { TableHeader } from "@/components/ui/table";

import { Table } from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SettingsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  //   const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      //   toast({
      //     title: "Settings Updated",
      //     description: "Your settings have been updated successfully.",
      //   })
      alert("Settings Updated");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account and farm settings
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="farm">Farm Details</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                  <CardDescription>
                    Update your personal information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="Profile picture"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" size="sm">
                        Change Avatar
                      </Button>
                      <p className="text-xs text-muted-foreground mt-1">
                        JPG, GIF or PNG. Max size 2MB.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      defaultValue="I'm a passionate farmer with over 15 years of experience growing organic vegetables and fruits."
                      rows={4}
                    />
                    <p className="text-xs text-muted-foreground">
                      Brief description for your profile. This will be displayed
                      on your public profile.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="farm">
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Farm Details</CardTitle>
                  <CardDescription>
                    Update information about your farm
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="farmName">Farm Name</Label>
                    <Input id="farmName" defaultValue="Green Acres Farm" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="farmType">Farm Type</Label>
                      <Select defaultValue="organic">
                        <SelectTrigger>
                          <SelectValue placeholder="Select farm type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="organic">Organic Farm</SelectItem>
                          <SelectItem value="conventional">
                            Conventional Farm
                          </SelectItem>
                          <SelectItem value="hydroponic">
                            Hydroponic Farm
                          </SelectItem>
                          <SelectItem value="livestock">
                            Livestock Farm
                          </SelectItem>
                          <SelectItem value="mixed">Mixed Farm</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farmSize">Farm Size (acres)</Label>
                      <Input id="farmSize" type="number" defaultValue="25" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farmAddress">Farm Address</Label>
                    <Input id="farmAddress" defaultValue="1234 Rural Road" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="farmCity">City</Label>
                      <Input id="farmCity" defaultValue="Farmville" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farmState">State</Label>
                      <Input id="farmState" defaultValue="CA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farmZip">ZIP Code</Label>
                      <Input id="farmZip" defaultValue="12345" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farmDescription">Farm Description</Label>
                    <Textarea
                      id="farmDescription"
                      defaultValue="Green Acres Farm is a family-owned organic farm specializing in heirloom vegetables, berries, and free-range eggs. We've been farming sustainably since 2005."
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Certifications</Label>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="certOrganic" defaultChecked />
                        <Label htmlFor="certOrganic">USDA Organic</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="certNonGMO" defaultChecked />
                        <Label htmlFor="certNonGMO">
                          Non-GMO Project Verified
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="certHumane" />
                        <Label htmlFor="certHumane">Certified Humane</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="certRegen" />
                        <Label htmlFor="certRegen">Regenerative Organic</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Choose how you want to be notified
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailOrders">New Orders</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when you get a new order
                        </p>
                      </div>
                      <Switch id="emailOrders" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailInventory">Inventory Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified when products are low in stock
                        </p>
                      </div>
                      <Switch id="emailInventory" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailPayments">
                          Payment Confirmations
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive emails for payment confirmations
                        </p>
                      </div>
                      <Switch id="emailPayments" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailMarketing">
                          Marketing Updates
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive tips, product updates and offers
                        </p>
                      </div>
                      <Switch id="emailMarketing" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">SMS Notifications</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="smsOrders">New Orders</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive SMS notifications for new orders
                        </p>
                      </div>
                      <Switch id="smsOrders" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="smsInventory">Inventory Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Get SMS alerts for low inventory
                        </p>
                      </div>
                      <Switch id="smsInventory" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Save Preferences"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
                <CardDescription>
                  Manage your billing details and payment methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Current Plan</h3>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Farmer Pro Plan</p>
                        <p className="text-sm text-muted-foreground">
                          ₦29/month
                        </p>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                    <div className="mt-4 text-sm">
                      <p>Features included:</p>
                      <ul className="mt-2 list-disc pl-5 space-y-1">
                        <li>Unlimited product listings</li>
                        <li>Advanced analytics</li>
                        <li>Priority customer support</li>
                        <li>Custom branding</li>
                        <li>0% transaction fee</li>
                      </ul>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">
                        Change Plan
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive"
                      >
                        Cancel Subscription
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Payment Methods</h3>
                    <Button variant="outline" size="sm">
                      Add Payment Method
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-muted p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <line x1="2" x2="22" y1="10" y2="10" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-muted-foreground">
                            Expires 12/2025
                          </p>
                        </div>
                      </div>
                      <Badge>Default</Badge>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Billing History</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Invoice</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>May 1, 2023</TableCell>
                        <TableCell>Farmer Pro Plan - Monthly</TableCell>
                        <TableCell>₦29.00</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="link"
                            size="sm"
                            className="h-auto p-0"
                          >
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Apr 1, 2023</TableCell>
                        <TableCell>Farmer Pro Plan - Monthly</TableCell>
                        <TableCell>₦29.00</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="link"
                            size="sm"
                            className="h-auto p-0"
                          >
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Mar 1, 2023</TableCell>
                        <TableCell>Farmer Pro Plan - Monthly</TableCell>
                        <TableCell>₦29.00</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="link"
                            size="sm"
                            className="h-auto p-0"
                          >
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
