"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SummerSales() {
  const saleProducts = [
    {
      id: 1,
      name: "KAFTAN NAJLAE",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0c4b2666d5c?w=400&h=600&fit=crop&crop=center",
      salePrice: "€79,00",
      originalPrice: "€139,00",
      discount: "43%",
    },
    {
      id: 2,
      name: "KAFTAN ISABEL",
      image:
        "https://images.unsplash.com/photo-1583207892309-35734014e164?w=400&h=600&fit=crop&crop=center",
      salePrice: "€69,00",
      originalPrice: "€119,00",
      discount: "42%",
    },
    {
      id: 3,
      name: "LEBSA SUMER",
      image:
        "https://images.unsplash.com/photo-1564563651044-ad06beacdadf?w=400&h=600&fit=crop&crop=center",
      salePrice: "€89,00",
      originalPrice: "€149,00",
      discount: "40%",
    },
    {
      id: 4,
      name: "JELLABA AMIRA",
      image:
        "https://images.unsplash.com/photo-1617922001808-4d2c7e4b7734?w=400&h=600&fit=crop&crop=center",
      salePrice: "€99,00",
      originalPrice: "€179,00",
      discount: "45%",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-rose-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light tracking-[0.2em] text-black mb-4">
            UP TO 50%
          </h2>
          <p className="text-lg text-gray-600 tracking-wider">SUMMER SALES</p>
          <div className="w-24 h-px bg-black mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {saleProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-white rounded-lg shadow-sm">
                <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  SAVE {product.discount}
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
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
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg font-medium text-black">
                    {product.salePrice}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
