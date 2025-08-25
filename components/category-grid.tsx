import { Button } from "@/components/ui/button"

import Image from "next/image"

const categories = [
  {
    name: "KAFTAN",
    image: "/elegant-kaftan-dress.png",
    href: "#",
  },
  {
    name: "LEBSA",
    image: "/traditional-lebsa.png",
    href: "#",
  },
  {
    name: "JELLABA",
    image: "/moroccan-jellaba-robe.png",
    href: "#",
  },
  {
    name: "BRIDAL",
    image: "/elegant-bridal-kaftan.png",
    href: "#",
  },
  {
    name: "EXCLUSIVE COLLECTION",
    image: "/luxury-exclusive-kaftan.png",
    href: "#",
  },
  {
    name: "ACCESSORIES",
    image: "/traditional-jewelry-accessories.png",
    href: "#",
  },
  {
    name: "MEN'S COLLECTION",
    image: "/mens-traditional-kaftan.png",
    href: "#",
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/5] relative">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-3">{category.name}</h3>
                  <Button variant="outline" className="bg-white text-black hover:bg-gray-100 border-white">
                    Shop now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
