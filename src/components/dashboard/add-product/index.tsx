"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type ProductFormData = {
  id?: string
  name: string
  category: string
  price: number
  stock: number
  description: string
  status: string
  image?: string
}

const defaultProduct: ProductFormData = {
  name: "",
  category: "",
  price: 0,
  stock: 0,
  description: "",
  status: "In Stock",
}

const categories = [
  "Vegetables",
  "Fruits",
  "Dairy & Eggs",
  "Meat",
  "Honey & Preserves",
  "Herbs & Spices",
  "Grains & Flour",
  "Nuts & Seeds",
]

interface ProductFormModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product?: ProductFormData
  onSubmit: (product: ProductFormData) => void
  mode: "add" | "edit"
}

export function ProductFormModal({
  open,
  onOpenChange,
  product = defaultProduct,
  onSubmit,
  mode,
}: ProductFormModalProps) {
  const [formData, setFormData] = useState<ProductFormData>(product)
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number.parseFloat(value) || 0 : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate form data
      if (!formData.name || !formData.category || formData.price <= 0) {
        // toast({
        //   title: "Validation Error",
        //   description: "Please fill in all required fields.",
        //   variant: "destructive",
        // })

        alert("DONE")
        setIsSubmitting(false)
        return
      }

      // Submit the form data
      onSubmit(formData)

      // Show success message
      // toast({
      //   title: `Product ${mode === "add" ? "Added" : "Updated"}`,
      //   description: `${formData.name} has been successfully ${mode === "add" ? "added" : "updated"}.`,
      // })

      // Close
      // 
      // alert("DONE") the modal
      onOpenChange(false)

      // Reset form if adding a new product
      if (mode === "add") {
        setFormData(defaultProduct)
      }
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: `Failed to ${mode} product. Please try again.`,
      //   variant: "destructive",
      // })

      alert("DONE")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{mode === "add" ? "Add New Product" : "Edit Product"}</DialogTitle>
            <DialogDescription>
              {mode === "add" ? "Add a new product to your inventory." : "Make changes to your product here."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label htmlFor="name" className="text-right">
                  Product Name*
                </Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1" required />
              </div>
              <div className="col-span-1">
                <Label htmlFor="category" className="text-right">
                  Category*
                </Label>
                <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-1">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="In Stock">In Stock</SelectItem>
                    <SelectItem value="Low Stock">Low Stock</SelectItem>
                    <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-1">
                <Label htmlFor="price" className="text-right">
                  Price ($)*
                </Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              <div className="col-span-1">
                <Label htmlFor="stock" className="text-right">
                  Stock Quantity*
                </Label>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  min="0"
                  value={formData.stock}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1"
                  rows={3}
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="image" className="text-right">
                  Product Image
                </Label>
                <div className="mt-1 flex items-center gap-4">
                  {formData.image && (
                    <img
                      src={formData.image || "/placeholder.svg"}
                      alt="Product preview"
                      className="h-16 w-16 rounded-md object-cover"
                    />
                  )}
                  <Input id="image" name="image" type="file" accept="image/*" className="mt-1" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Recommended size: 500x500px. Max file size: 2MB.</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : mode === "add" ? "Add Product" : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
