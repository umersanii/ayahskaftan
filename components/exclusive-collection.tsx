import ProductCard from "@/components/product-card"

const exclusiveProducts = [
  {
    id: 4,
    name: "Lebsa Idalha",
    price: 640,
    image: "/luxury-lebsa-idalha-dress.png",
    href: "#",
    isExclusive: true,
  },
  {
    id: 5,
    name: "Lebsa Salma",
    price: 640,
    image: "/luxury-lebsa-salma-dress.png",
    href: "#",
    isExclusive: true,
  },
  {
    id: 6,
    name: "Lebsa Hanen",
    price: 640,
    image: "/luxury-lebsa-hanen-dress.png",
    href: "#",
    isExclusive: true,
  },
]

export default function ExclusiveCollection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">EXCLUSIVE COLLECTION</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exclusiveProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
