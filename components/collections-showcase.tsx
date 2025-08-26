"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const collections = [
  {
    title: "AYAHS KAFTAN",
    subtitle: "MODERN TRADITION",
    image: "/ayahskaftan/IMG_0948.webp",
    link: "/category/ayahs-kaftan",
  },
  {
    title: "L'DRESS",
    subtitle: "WHERE ELEGANCE MEETS HERITAGE",
    image: "/ldress/IMG_0948.webp",
    link: "/category/ldress",
  },
  {
    title: "JALABAYTI",
    subtitle: "THE SOFTNESS OF TRADITION",
    image: "/jalabayti/IMG_2438.webp",
    link: "/category/jalabayti",
  },
  {
    title: "PERLAGE",
    subtitle: "BECAUSE SOME MOMENTS DESERVE MORE",
    image: "/perlage/GSR55881 2.webp",
    link: "/category/perlage",
  },
];

export default function CollectionsShowcase() {
  const sliderRef = useRef<HTMLDivElement>(null);
  // Simple scroll-to-next/prev for mobile
  const scrollTo = (dir: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const card = container.querySelector('a');
    const cardWidth = card ? (card as HTMLElement).offsetWidth : 0;
    container.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
  };
  return (
  <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="w-full mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-16">
          {/* Heading with full width separators */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-black mx-6 sm:mx-8 md:mx-12"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              COLLECTIONS
            </h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          {/* Description below */}
          <p className="text-xs sm:text-sm text-gray-600 tracking-[0.2em] sm:tracking-[0.25em] px-4 mt-6"
            style={{ fontFamily: "var(--font-body)" }}>
            DISCOVER OUR CURATED CATEGORIES
          </p>
        </div>
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {collections.map((col) => (
            <Link key={col.title} href={col.link} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[9/15] bg-white shadow-sm">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xs font-light tracking-[0.2em] opacity-90 mb-2" style={{ fontFamily: "var(--font-body)" }}>{col.subtitle}</p>
                  <h3 className="text-lg sm:text-xl font-light tracking-[0.2em] mb-1 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>{col.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Mobile Slider */}
        <div className="lg:hidden relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white px-2 py-2 rounded-full"
            style={{ display: 'block' }}
            onClick={() => scrollTo(-1)}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto px-2 pb-2 scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {collections.map((col) => (
              <Link key={col.title} href={col.link} className="min-w-[70vw] max-w-[80vw] sm:min-w-[320px] sm:max-w-[340px] block">
                <div className="relative overflow-hidden aspect-[9/15] bg-white shadow-sm">
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-xs font-light tracking-[0.2em] opacity-90 mb-2" style={{ fontFamily: "var(--font-body)" }}>{col.subtitle}</p>
                    <h3 className="text-lg sm:text-xl font-light tracking-[0.2em] mb-1 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>{col.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white px-2 py-2 rounded-full"
            style={{ display: 'block' }}
            onClick={() => scrollTo(1)}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
