"use client"

import { useState } from "react"
import { Heart, Eye, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Product {
  id: number
  name: string
  price: number
  image: string
  href: string
  isExclusive?: boolean
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay buttons */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-2 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <Button size="sm" variant="secondary" className="bg-white text-black hover:bg-gray-100">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" className="bg-white text-black hover:bg-gray-100">
            <Eye className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" className="bg-white text-black hover:bg-gray-100">
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>

        {product.isExclusive && (
          <div className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">EXCLUSIVE</div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-xl font-bold">${product.price}.00</p>
      </div>
    </div>
  )
}
