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
        {/* Section Header with Full Width Separators */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <h2 
              className="text-2xl sm:text-3xl font-light tracking-[0.2em] text-gray-900 mx-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              EXCLUSIVE COLLECTION
            </h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <p 
            className="text-sm text-gray-600 tracking-[0.15em] max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            HANDCRAFTED LUXURY • LIMITED EDITIONS
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exclusiveProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
