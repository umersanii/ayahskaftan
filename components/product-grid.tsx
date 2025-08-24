import ProductCard from "./product-card"
import { Button } from "@/components/ui/button"

const products = [
  // Row 1
  { id: 1, name: "Burgundy Velvet Kaftan", price: "$189", image: "/burgundy-velvet-kaftan.png", sale: true },
  { id: 2, name: "Golden Embroidered Lebsa", price: "$245", image: "/golden-embroidered-dress.png" },
  { id: 3, name: "Cream Silk Kaftan", price: "$199", image: "/cream-silk-kaftan.png" },

  // Row 2
  { id: 4, name: "Navy Blue Jellaba", price: "$165", image: "/navy-blue-jellaba.png" },
  { id: 5, name: "Rose Gold Kaftan", price: "$225", image: "/rose-gold-kaftan-dress-elegant.png" },
  { id: 6, name: "Emerald Green Lebsa", price: "$210", image: "/emerald-green-lebsa.png" },

  // Row 3
  { id: 7, name: "Beige Linen Kaftan", price: "$155", image: "/beige-linen-kaftan.png" },
  { id: 8, name: "Purple Velvet Jellaba", price: "$195", image: "/purple-velvet-jellaba.png" },
  { id: 9, name: "White Cotton Kaftan", price: "$135", image: "/white-cotton-kaftan-casual-dress.png" },

  // Row 4
  { id: 10, name: "Teal Embroidered Kaftan", price: "$235", image: "/teal-embroidered-kaftan.png" },
  { id: 11, name: "Coral Pink Lebsa", price: "$185", image: "/coral-pink-lebsa.png" },
  { id: 12, name: "Black Velvet Kaftan", price: "$215", image: "/black-velvet-kaftan-evening-dress.png" },

  // Row 5
  { id: 13, name: "Sky Blue Kaftan", price: "$175", image: "/sky-blue-kaftan-summer-dress.png" },
  { id: 14, name: "Dusty Rose Jellaba", price: "$165", image: "/dusty-rose-jellaba.png" },
  { id: 15, name: "Mint Green Kaftan", price: "$155", image: "/placeholder.svg?height=400&width=300" },

  // Row 6
  { id: 16, name: "Champagne Silk Lebsa", price: "$265", image: "/placeholder.svg?height=400&width=300" },
  { id: 17, name: "Deep Purple Kaftan", price: "$195", image: "/placeholder.svg?height=400&width=300" },
  { id: 18, name: "Ivory Lace Kaftan", price: "$225", image: "/placeholder.svg?height=400&width=300" },
  { id: 1, name: "Burgundy Velvet Kaftan", price: 189, image: "/burgundy-velvet-kaftan.png", href: "#", sale: true },
  { id: 2, name: "Golden Embroidered Lebsa", price: 245, image: "/golden-embroidered-dress.png", href: "#" },
  { id: 3, name: "Cream Silk Kaftan", price: 199, image: "/cream-silk-kaftan.png", href: "#" },
  // Row 2
  { id: 4, name: "Navy Blue Jellaba", price: 165, image: "/navy-blue-jellaba.png", href: "#" },
  { id: 5, name: "Rose Gold Kaftan", price: 225, image: "/rose-gold-kaftan-dress-elegant.png", href: "#" },
  { id: 6, name: "Emerald Green Lebsa", price: 210, image: "/emerald-green-lebsa.png", href: "#" },
  // Row 3
  { id: 7, name: "Beige Linen Kaftan", price: 155, image: "/beige-linen-kaftan.png", href: "#" },
  { id: 8, name: "Purple Velvet Jellaba", price: 195, image: "/purple-velvet-jellaba.png", href: "#" },
  { id: 9, name: "White Cotton Kaftan", price: 135, image: "/white-cotton-kaftan-casual-dress.png", href: "#" },
  // Row 4
  { id: 10, name: "Teal Embroidered Kaftan", price: 235, image: "/teal-embroidered-kaftan.png", href: "#" },
  { id: 11, name: "Coral Pink Lebsa", price: 185, image: "/coral-pink-lebsa.png", href: "#" },
  { id: 12, name: "Black Velvet Kaftan", price: 215, image: "/black-velvet-kaftan-evening-dress.png", href: "#" },
  // Row 5
  { id: 13, name: "Sky Blue Kaftan", price: 175, image: "/sky-blue-kaftan-summer-dress.png", href: "#" },
  { id: 14, name: "Dusty Rose Jellaba", price: 165, image: "/dusty-rose-jellaba.png", href: "#" },
  { id: 15, name: "Mint Green Kaftan", price: 155, image: "/placeholder.svg?height=400&width=300", href: "#" },
  // Row 6
  { id: 16, name: "Champagne Silk Lebsa", price: 265, image: "/placeholder.svg?height=400&width=300", href: "#" },
  { id: 17, name: "Deep Purple Kaftan", price: 195, image: "/placeholder.svg?height=400&width=300", href: "#" },
  { id: 18, name: "Ivory Lace Kaftan", price: 225, image: "/placeholder.svg?height=400&width=300", href: "#" },
]

export default function ProductGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked selection of the finest traditional garments, crafted with attention to detail and timeless elegance.
          </p>
          <Button className="mt-6 px-8 py-3 bg-black text-white hover:bg-gray-800 rounded-full text-sm font-semibold tracking-widest">See All</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {/* {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))} */}
        </div>
      </div>
    </section>
  )
}
