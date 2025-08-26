import { Button } from "@/components/ui/button"

export default function ProductGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header with Full Width Separators */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.2em] text-gray-900 mx-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              OUR COLLECTION
            </h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <p 
            className="text-sm lg:text-lg text-gray-600 tracking-[0.15em] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Handpicked selection of the finest traditional garments, crafted with attention to detail and timeless elegance.
          </p>
          <Button className="mt-6 px-8 py-3 bg-black text-white hover:bg-gray-800 rounded-full text-sm font-semibold tracking-widest">See All</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {/* Products will be added later */}
        </div>
      </div>
    </section>
  )
}
