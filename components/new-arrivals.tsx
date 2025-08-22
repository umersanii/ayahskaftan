import ProductCard from "@/components/product-card"

const newArrivals = [
  {
    id: 1,
    name: "Lebsa Afnan",
    price: 368,
    image: "/elegant-lebsa-afnan-dress.png",
    href: "#",
  },
  {
    id: 2,
    name: "Kaftan Isabella",
    price: 163,
    image: "/kaftan-isabella-dress.png",
    href: "#",
  },
  {
    id: 3,
    name: "Kaftan Oumaima",
    price: 164,
    image: "/elegant-kaftan-dress.png",
    href: "#",
  },
]

export default function NewArrivals() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
