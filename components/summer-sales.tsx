"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";

export default function SummerSales() {
  const saleProducts = [
    {
      id: 1,
      name: "EXCLUSIVE TRADITIONAL TAKCHITA LARA",
      image: "/ldress/IMG_0948.webp",
      salePrice: "€403,00",
      originalPrice: "€575,00",
      discount: "30%",
    },
    {
      id: 2,
      name: "DAHAB",
      image: "/ldress/IMG_1005.webp",
      salePrice: "€224,00",
      originalPrice: "€299,00",
      discount: "25%",
    },
    {
      id: 3,
      name: "EXCLUSIVE TAKCHITA ANA",
      image: "/ldress/IMG_1078.webp",
      salePrice: "€540,00",
      originalPrice: "€635,00",
      discount: "15%",
    },
    {
      id: 4,
      name: "EXCLUSIVE TAKCHITA YUSRA",
      image: "/ldress/IMG_1127.webp",
      salePrice: "€699,00",
      originalPrice: "€899,00",
      discount: "22%",
    },
    {
      id: 5,
      name: "LEBSA AHLAM",
      image: "/perlage/GSR55881 2.webp",
      salePrice: "€202,00",
      originalPrice: "€289,00",
      discount: "30%",
    },
    {
      id: 6,
      name: "ELYANA",
      image: "/perlage/GSR55915.webp",
      salePrice: "€276,00",
      originalPrice: "€345,00",
      discount: "20%",
    },
    {
      id: 7,
      name: "AÏCHA",
      image: "/perlage/GSR56030.webp",
      salePrice: "FROM €199,00",
      originalPrice: "FROM €279,00",
      discount: "29%",
    },
    {
      id: 8,
      name: "RAYA",
      image: "/perlage/GSR56502.webp",
      salePrice: "€246,00",
      originalPrice: "€289,00",
      discount: "15%",
    },
  ];

  return (
  <section className="py-12 lg:py-12 bg-gradient-to-b from-gray-200 to-white">
      <div className="w-full mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4 lg:mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-black mx-6 sm:mx-8 md:mx-12"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              UP TO 50% OFF
            </h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <p 
            className="text-xs sm:text-sm text-gray-600 tracking-[0.3em] sm:tracking-[0.25em] px-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            SUMMER SALE
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {saleProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[9/15] bg-white shadow-sm">
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 bg-red-500 text-white text-xs sm:text-sm font-medium px-2 py-1 sm:px-3 sm:py-2 rounded tracking-[0.1em] sm:tracking-[0.15em]">
                  SAVE {product.discount}
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>

              <div className="text-center">
                <h3
                  className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] mb-2 leading-tight text-gray-600 px-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {product.name}
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  <span 
                    className="text-xs sm:text-sm font-normal text-black tracking-[0.1em] sm:tracking-[0.15em]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {product.salePrice}
                  </span>
                  <span 
                    className="text-xs text-gray-500 line-through tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            className="px-8 py-3 bg-black text-white hover:bg-gray-800 text-sm font-semibold tracking-widest transition-all duration-300 rounded-none"
            onClick={() => (window.location.href = "/category/sales")}
          >
            VIEW ALL
          </Button>
        </div>
      </div>
    </section>
  );
}
