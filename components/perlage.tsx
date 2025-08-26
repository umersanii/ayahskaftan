"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Lumara() {
  const products = [
    {
      id: 1,
      name: "LEBSA AHLAM",
      image:
        "/perlage/GSR55881 2.webp",
      price: "€289,00",
    },
    {
      id: 2,
      name: "ELYANA",
      image:
        "/perlage/GSR55915.webp",
      price: "€345,00",
    },
    {
      id: 3,
      name: "AÏCHA",
      image:
        "/perlage/GSR56030.webp",
      price: "FROM €279,00",
    },
    {
      id: 4,
      name: "RAYA",
      image:
        "/perlage/GSR56502.webp",
      price: "€289,00",
    },
  ];

  return (
  <section className="py-24 bg-gradient-to-b from-gray-200 to-gray-100">


      <div className="w-full mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
  <div className="text-center mb-16">
            <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin tracking-[0.15em] sm:tracking-[0.2em] text-black mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
            >
            PERLAGE
            </h2>
          <p className="text-xs sm:text-sm text-gray-600 tracking-[0.3em] sm:tracking-[0.25em] px-4"
            style={{ fontFamily: "var(--font-body)" }}>
            SUBTLE SPARKLE, LASTING CHARM
          </p>
          <div className="w-4 h-px bg-black/60 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[9/15] bg-white shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                </div>
              </div>

              <div className="text-center">
                <h3
                  className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] mb-2 leading-tight text-gray-600 px-1"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  {product.name}
                </h3>
                <div className="text-xs sm:text-sm font-normal text-black tracking-[0.1em] sm:tracking-[0.15em] text-gray-600"
                style={{ fontFamily: "var(--font-secondary)" } }>

                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
         <div className="text-center mt-12">
          <Button
            className="px-8 py-3 bg-black text-white hover:bg-gray-800 text-sm font-semibold tracking-widest transition-all duration-300 rounded-none"
            onClick={() => (window.location.href = "/category/perlage")}
          >
            VIEW ALL
          </Button>
        </div>
      </div>
    </section>
  );
}
