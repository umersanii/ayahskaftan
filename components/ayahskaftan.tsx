"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LigneeOr() {
  const products = [
    {
      id: 1,
      name: "EXCLUSIVE TRADITIONAL TAKCHITA LARA",
      image:
        "/ayahskaftan/IMG_0948.webp",
      price: "€575,00",
    },
    {
      id: 2,
      name: "DAHAB",
      image:
        "/ayahskaftan/IMG_1005.webp",
      price: "€299,00",
    },
    {
      id: 3,
      name: "EXCLUSIVE TAKCHITA ANA",
      image:
        "/ayahskaftan/IMG_1078.webp",
      price: "€635,00",
    },
    {
      id: 4,
      name: "EXCLUSIVE TAKCHITA YUSRA",
      image:
        "/ayahskaftan/IMG_1127.webp",
      price: "€699,00",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-gray-200">

      <div className="w-full mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light tracking-[0.2em] text-black mb-4">
            AYAHS KAFTAN
          </h2>
          <p className="text-lg text-gray-600 tracking-wider">
            FLOWING ELEGANCE, EFFORTLESS GRACE
          </p>
          <div className="w-4 h-px bg-black mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[9/15] bg-white rounded-lg shadow-sm">
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
                <h3 className="font-serif text-sm tracking-[0.15em] text-black mb-2 leading-tight">
                  {product.name}
                </h3>
                <div className="text-lg font-medium text-black">
                  SALE PRICE {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
