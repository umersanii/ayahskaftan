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
        {/* Section Header with Full Width Separators */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <h2 
              className="text-2xl sm:text-3xl font-light tracking-[0.2em] text-gray-900 mx-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              NEW ARRIVALS
            </h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <p 
            className="text-sm text-gray-600 tracking-[0.15em] max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            FRESH DESIGNS • LATEST COLLECTIONS
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
