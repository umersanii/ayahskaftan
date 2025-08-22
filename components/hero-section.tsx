import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] bg-gradient-to-r from-amber-50 to-orange-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-10" />
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">SUMMER COLLECTION '24</h2>
        <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
          Shop now
        </Button>
      </div>
    </section>
  )
}
