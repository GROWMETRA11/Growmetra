"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ProductFormData, ProductFormModal } from "@/components/dashboard/add-product"

// Demo product data
const initialProducts = [
  {
    id: "PRD001",
    name: "Organic Tomatoes",
    category: "Vegetables",
    price: 3.99,
    stock: 120,
    status: "In Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "Fresh organic tomatoes grown without pesticides.",
  },
  {
    id: "PRD002",
    name: "Fresh Strawberries",
    category: "Fruits",
    price: 4.5,
    stock: 85,
    status: "In Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "Sweet and juicy strawberries picked at peak ripeness.",
  },
  {
    id: "PRD003",
    name: "Organic Lettuce",
    category: "Vegetables",
    price: 2.25,
    stock: 65,
    status: "In Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "Crisp and fresh organic lettuce.",
  },
  {
    id: "PRD004",
    name: "Free-Range Eggs",
    category: "Dairy & Eggs",
    price: 5.99,
    stock: 48,
    status: "In Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "Eggs from free-range chickens fed with organic feed.",
  },
  {
    id: "PRD005",
    name: "Honey Jar",
    category: "Honey & Preserves",
    price: 8.75,
    stock: 32,
    status: "In Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "Pure, raw honey harvested from local beehives.",
  },
  {
    id: "PRD006",
    name: "Organic Carrots",
    category: "Vegetables",
    price: 2.99,
    stock: 10,
    status: "Low Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "Organic carrots rich in vitamins and minerals.",
  },
  {
    id: "PRD007",
    name: "Artisan Cheese",
    category: "Dairy & Eggs",
    price: 12.5,
    stock: 0,
    status: "Out of Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "Handcrafted artisan cheese made with traditional methods.",
  },
]

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState<ProductFormData | undefined>(undefined)
  const [searchQuery, setSearchQuery] = useState("")
//   const { toast } = useToast()

  const handleAddProduct = (newProduct: ProductFormData) => {
    // Generate a new ID for the product
    const newId = `PRD${String(products.length + 1).padStart(3, "0")}`

    // Add the new product to the list
    setProducts([
      ...products,
      {
        ...newProduct,
        id: newId,
        image: newProduct.image || "/placeholder.svg?height=40&width=40",
      },
    ])
  }

  const handleEditProduct = (updatedProduct: ProductFormData) => {
    // @ts-ignore
    setProducts(products.map((product) => (product.id === updatedProduct.id ? { ...updatedProduct } : product)))
  }

  const handleDeleteProduct = (productId: string) => {
    // Show confirmation dialog
    if (window.confirm("Are you sure you want to delete this product?")) {
      // Remove the product from the list
      setProducts(products.filter((product) => product.id !== productId))

      // Show success message
    //   toast({
    //     title: "Product Deleted",
    //     description: "The product has been successfully deleted.",
    //   })

    alert("Product Created")
    }
  }

  const openEditModal = (product: ProductFormData) => {
    setCurrentProduct(product)
    setIsEditModalOpen(true)
  }

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Products</h2>
            <p className="text-muted-foreground">Manage your farm products and inventory</p>
          </div>
          <Button onClick={() => setIsAddModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 w-full md:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <Card>
          <CardHeader className="p-4">
            <CardTitle>Product Inventory</CardTitle>
            <CardDescription>
              You have {products.filter((p) => p.status === "In Stock").length} products in stock
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-10 w-10 rounded-md object-cover"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>${product.price.toFixed(2)}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            product.status === "In Stock"
                              ? "default"
                              : product.status === "Low Stock"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => openEditModal(product)}>Edit Product</DropdownMenuItem>
                            <DropdownMenuItem>Update Stock</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-destructive"
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              Delete Product
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      No products found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Add Product Modal */}
      <ProductFormModal open={isAddModalOpen} onOpenChange={setIsAddModalOpen} onSubmit={handleAddProduct} mode="add" />

      {/* Edit Product Modal */}
      {currentProduct && (
        <ProductFormModal
          open={isEditModalOpen}
          onOpenChange={setIsEditModalOpen}
          product={currentProduct}
          onSubmit={handleEditProduct}
          mode="edit"
        />
      )}
    </>
  )
}
