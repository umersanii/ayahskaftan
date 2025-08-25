import { Button } from "@/components/ui/button"

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
          {/* Products will be added later */}
        </div>
      </div>
    </section>
  )
}
