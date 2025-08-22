"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Lumara() {
  const products = [
    {
      id: 1,
      name: "LEBSA AHLAM",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0c4b2666d5c?w=400&h=600&fit=crop&crop=center",
      price: "€289,00",
    },
    {
      id: 2,
      name: "ELYANA",
      image:
        "https://images.unsplash.com/photo-1583207892309-35734014e164?w=400&h=600&fit=crop&crop=center",
      price: "€345,00",
    },
    {
      id: 3,
      name: "AÏCHA",
      image:
        "https://images.unsplash.com/photo-1564563651044-ad06beacdadf?w=400&h=600&fit=crop&crop=center",
      price: "FROM €279,00",
    },
    {
      id: 4,
      name: "RAYA",
      image:
        "https://images.unsplash.com/photo-1617922001808-4d2c7e4b7734?w=400&h=600&fit=crop&crop=center",
      price: "€289,00",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light tracking-[0.2em] text-black mb-4">
            LUMARA
          </h2>
          <p className="text-lg text-gray-600 tracking-wider">
            WHERE LIGHT BECOMES STYLE
          </p>
          <div className="w-24 h-px bg-black mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-gray-50 rounded-lg shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button className="w-full bg-white text-black hover:bg-gray-100 border border-gray-200">
                    Choose options
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-sm tracking-[0.2em] text-black mb-2">
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
