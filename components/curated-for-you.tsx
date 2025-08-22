"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CuratedForYou() {
  const products = [
    {
      id: 1,
      name: "LEBSA SAMIA",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0c4b2666d5c?w=400&h=600&fit=crop&crop=center",
      price: "€289,00",
      soldOut: true,
    },
    {
      id: 2,
      name: "KAFTAN SAIDA",
      image:
        "https://images.unsplash.com/photo-1583207892309-35734014e164?w=400&h=600&fit=crop&crop=center",
      salePrice: "€115,00",
      originalPrice: "€139,00",
      discount: "17%",
    },
    {
      id: 3,
      name: "KAFTAN AISHA",
      image:
        "https://images.unsplash.com/photo-1564563651044-ad06beacdadf?w=400&h=600&fit=crop&crop=center",
      price: "FROM €259,00",
    },
    {
      id: 4,
      name: "DAUR",
      image:
        "https://images.unsplash.com/photo-1617922001808-4d2c7e4b7734?w=400&h=600&fit=crop&crop=center",
      price: "€199,00",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light tracking-[0.2em] text-black mb-8">
            CURATED FOR YOU
          </h2>
          <div className="w-24 h-px bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-white rounded-lg shadow-sm">
                {product.soldOut && (
                  <div className="absolute top-4 left-4 z-10 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    SOLD OUT
                  </div>
                )}
                {product.discount && (
                  <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    SAVE {product.discount}
                  </div>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                    product.soldOut ? "grayscale" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                {!product.soldOut && (
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button className="w-full bg-white text-black hover:bg-gray-100 border border-gray-200">
                      Choose options
                    </Button>
                  </div>
                )}
              </div>

              <div className="text-center">
                <h3 className="font-serif text-sm tracking-[0.2em] text-black mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  {product.salePrice ? (
                    <>
                      <span className="text-lg font-medium text-black">
                        SALE PRICE {product.salePrice}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        REGULAR PRICE {product.originalPrice}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-medium text-black">
                      SALE PRICE {product.price}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
