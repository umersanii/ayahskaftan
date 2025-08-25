"use client"

import { useEffect } from "react"
import { X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CartModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function CartModal({ isOpen, setIsOpen }: CartModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
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
          <p className="text-gray-600 mb-4">Add some beautiful kaftans to get started!</p>
          <Button onClick={() => setIsOpen(false)} className="bg-rose-600 hover:bg-rose-700">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  )
}
