"use client"

import { useState } from "react"
import { X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CartModal() {
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart
          </h2>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4 flex-1 flex flex-col items-center justify-center text-center">
          <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium mb-2">Your shopping bag is empty</h3>
          <Button onClick={() => setIsOpen(false)}>Go to the shop</Button>
        </div>
      </div>
    </div>
  )
}
