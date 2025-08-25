"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const collections = [
  {
    id: 1,
    title: "KAFTAN",
    subtitle: "MODERN TRADITION",
    image: "/elegant-woman-floral-kaftan.png",
    description:
      "Discover our exquisite collection of modern kaftans that blend traditional craftsmanship with contemporary elegance.",
  },
  {
    id: 2,
    title: "LEBSA",
    subtitle: "WHERE ELEGANCE MEETS HERITAGE",
    image: "/elegant-woman-lebsa.png",
    description: "Experience the timeless beauty of our lebsa collection, where heritage meets modern sophistication.",
  },
  {
    id: 3,
    title: "JELLABA",
    subtitle: "TIMELESS SOPHISTICATION",
    image: "/elegant-woman-jellaba.png",
    description: "Embrace the classic elegance of our jellaba collection, perfect for any occasion.",
  },
  {
    id: 4,
    title: "TAKCHITA",
    subtitle: "ROYAL ELEGANCE",
    image: "/elegant-woman-takchita.png",
    description: "Step into luxury with our takchita collection, designed for the most special occasions.",
  },
]

export default function CollectionShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const scrollAmount = e.deltaY > 0 ? 300 : -300
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    return () => container.removeEventListener("wheel", handleWheel)
  }, [])

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.clientWidth / 2 // Show 2 cards at a time
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - 1)
    scrollToIndex(newIndex)
  }

  const scrollRight = () => {
    const maxIndex = collections.length - 2 // Show 2 cards at a time
    const newIndex = Math.min(maxIndex, currentIndex + 1)
    scrollToIndex(newIndex)
  }

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="relative">
        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {collections.map((collection) => (
            <div key={collection.id} className="flex-none w-1/2 snap-start relative group cursor-pointer">
              <div className="relative h-[600px] overflow-hidden mx-1">
                {/* Background Image */}
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  fill
                  className="object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/70 group-hover:via-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="space-y-2 transform transition-all duration-300 group-hover:translate-y-[-8px]">
                    <p className="text-sm font-light tracking-[0.2em] opacity-90 font-serif transition-opacity duration-300 group-hover:opacity-100">
                      {collection.subtitle}
                    </p>
                    <h3 className="text-4xl font-light tracking-[0.3em] font-serif transition-all duration-300 group-hover:text-5xl group-hover:tracking-[0.4em]">
                      {collection.title}
                    </h3>
                    <p className="text-sm font-light opacity-80 max-w-md leading-relaxed mt-4 transition-all duration-300 group-hover:opacity-100 group-hover:text-base">
                      {collection.description}
                    </p>
                  </div>
                </div>

                {/* Enhanced Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8b7355]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-[#8b7355] rounded-full shadow-xl z-10 h-14 w-14 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          onClick={scrollLeft}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-7 w-7" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-[#8b7355] rounded-full shadow-xl z-10 h-14 w-14 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          onClick={scrollRight}
          disabled={currentIndex >= collections.length - 2}
        >
          <ChevronRight className="h-7 w-7" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {Array.from({ length: collections.length - 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex ? "bg-white shadow-lg" : "bg-white/60 hover:bg-white/80"
              }`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
