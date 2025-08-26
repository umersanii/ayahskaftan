"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Crown, Sparkles, Star } from "lucide-react";

export default function CuratedForYou() {
  const curatedProducts = [
    {
      id: 1,
      name: "EXCLUSIVE TRADITIONAL TAKCHITA LARA",
      image: "/ayahskaftan/IMG_0948.webp",
      price: "€575,00",
      originalPrice: "€750,00",
      category: "ayahs-kaftan",
      badge: "EDITOR'S CHOICE",
      description: "Exquisite traditional embroidery meets contemporary elegance",
      isNew: false,
      isBestseller: true
    },
    {
      id: 3,
      name: "EXCLUSIVE TAKCHITA ANA",
      image: "/ayahskaftan/IMG_1078.webp",
      price: "€635,00",
      category: "ayahs-kaftan",
      badge: "SIGNATURE PIECE",
      description: "Handcrafted details in premium silk",
      isNew: true,
      isBestseller: false
    },
    {
      id: 5,
      name: "LEBSA ELEGANTE",
      image: "/perlage/GSR55881 2.webp",
      price: "€445,00",
      originalPrice: "€520,00",
      category: "perlage",
      badge: "CURATOR'S PICK",
      description: "Modern sophistication in timeless design",
      isNew: false,
      isBestseller: true
    },
    {
      id: 7,
      name: "KAFTAN ROYALE",
      image: "/perlage/GSR56030.webp",
      price: "€380,00",
      category: "perlage",
      badge: "ARTISAN MADE",
      description: "Crafted by master artisans with intricate details",
      isNew: true,
      isBestseller: false
    },
    {
      id: 9,
      name: "JALABAYTI LUXE",
      image: "/jalabayti/IMG_2438.webp",
      price: "€299,00",
      originalPrice: "€399,00",
      category: "jalabayti",
      badge: "LIMITED EDITION",
      description: "Comfort meets luxury in everyday elegance",
      isNew: false,
      isBestseller: true
    }
  ];

  // Split products for layout
  const featuredProduct = curatedProducts[0]; // First product as featured
  const sideProducts = curatedProducts.slice(1, 3); // Next 2 for side
  const bottomProducts = curatedProducts.slice(3); // Last 2 for bottom

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-100 to-white-100">
      <div className="max-w-[1800px] mx-auto px-3 lg:px-4 xl:px-6">
        {/* Section Header */}
  <div className="text-center mb-12 lg:mb-20 bg-black py-8 rounded-xl">

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.2em] lg:tracking-[0.3em] text-white mb-4 lg:mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CURATED SELECTION
          </h2>
          <p
            className="text-xs lg:text-sm text-gray-200 tracking-[0.2em] lg:tracking-[0.25em] max-w-2xl mx-auto mb-6 lg:mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            HANDPICKED BY OUR DESIGNERS • EACH PIECE TELLS A STORY
          </p>
          <div className="w-16 lg:w-20 h-px bg-white/60 mx-auto"></div>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mb-2">

          {/* Featured Large Item */}
          <div className="lg:col-span-7">
            <Link
              href={`/product/${featuredProduct.id}`}
              className="group block relative"
            >
              <div className="relative overflow-hidden aspect-[4/5] lg:aspect-[4/5] bg-white ">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500" />

                {/* Badge */}
                <div className="absolute top-4 lg:top-6 left-4 lg:left-6">
                  <div className="flex items-center space-x-2 bg-black/80 backdrop-blur-sm text-white px-3 lg:px-4 py-2 text-xs tracking-[0.15em]">
                    <Sparkles className="h-3 w-3" />
                    <span style={{ fontFamily: "var(--font-body)" }}>{featuredProduct.badge}</span>
                  </div>
                </div>

                {/* Status Badges */}
                <div className="absolute top-4 lg:top-6 right-4 lg:right-6 flex flex-col space-y-2">
                  {featuredProduct.isBestseller && (
                    <div className="bg-white/90 backdrop-blur-sm text-black px-2 lg:px-3 py-1 text-xs tracking-[0.1em] flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span style={{ fontFamily: "var(--font-body)" }} className="hidden sm:inline">BESTSELLER</span>
                      <span style={{ fontFamily: "var(--font-body)" }} className="sm:hidden">★</span>
                    </div>
                  )}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-8 text-white">
                  <h3
                    className="text-lg sm:text-xl lg:text-3xl font-light tracking-[0.15em] lg:tracking-[0.2em] mb-1 lg:mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {featuredProduct.name}
                  </h3>
                  <p
                    className="text-xs lg:text-xs font-light opacity-90 tracking-wide mb-1.5 lg:mb-2 max-w-md hidden sm:block"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {featuredProduct.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 lg:space-x-3">
                      <span
                        className="text-xs lg:text-xs font-medium tracking-[0.15em]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {featuredProduct.price}
                      </span>
                      {featuredProduct.originalPrice && (
                        <span
                          className="text-xs lg:text-sm opacity-75 line-through"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {featuredProduct.originalPrice}
                        </span>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Side Grid */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {sideProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group block relative flex-1"
              >
                <div className="relative overflow-hidden h-full bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Badge */}
                  <div className="absolute top-3 lg:top-4 left-3 lg:left-4">
                    <div className="bg-black/70 backdrop-blur-sm text-white px-2 lg:px-3 py-1 text-xs tracking-[0.1em]">
                      <span style={{ fontFamily: "var(--font-body)" }}>{product.badge}</span>
                    </div>
                  </div>

                  {/* Status Badges */}
                  <div className="absolute top-3 lg:top-4 right-3 lg:right-4 flex flex-col space-y-1">
                    {product.isBestseller && (
                      <div className="bg-white/90 text-black px-2 py-1 text-xs flex items-center space-x-1">
                        <Star className="h-2.5 w-2.5 fill-current" />
                        <span style={{ fontFamily: "var(--font-body)" }} className="hidden sm:inline">BESTSELLER</span>
                        <span style={{ fontFamily: "var(--font-body)" }} className="sm:hidden">★</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <h3
                      className="text-sm lg:text-lg font-light tracking-[0.15em] lg:tracking-[0.2em] mb-1 lg:mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-xs font-light opacity-90 tracking-wide mb-1.5 lg:mb-2 hidden lg:block"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span
                          className="text-xs lg:text-xs font-medium tracking-[0.15em]"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span
                            className="text-xs opacity-75 line-through"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Row - Horizontal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {bottomProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group block relative"
            >
              <div className="relative overflow-hidden aspect-[16/10] lg:aspect-[16/9] bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-4 lg:p-8 flex flex-col justify-center text-white">
                  <div className="flex items-center space-x-2 lg:space-x-3 mb-3 lg:mb-4">
                    <div className="bg-white/20 backdrop-blur-sm px-2 lg:px-3 py-1 text-xs tracking-[0.1em]">
                      <span style={{ fontFamily: "var(--font-body)" }}>{product.badge}</span>
                    </div>
                    {product.isBestseller && (
                      <div className="bg-white/90 text-black px-2 py-1 text-xs flex items-center space-x-1">
                        <Star className="h-2.5 w-2.5 fill-current" />
                        <span style={{ fontFamily: "var(--font-body)" }} className="hidden sm:inline">BESTSELLER</span>
                        <span style={{ fontFamily: "var(--font-body)" }} className="sm:hidden">★</span>
                      </div>
                    )}
                  </div>

                  <h3
                    className="text-lg sm:text-xl lg:text-3xl font-light tracking-[0.15em] lg:tracking-[0.2em] mb-1 lg:mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-xs lg:text-xs font-light opacity-90 tracking-wide mb-1.5 lg:mb-2 max-w-sm hidden sm:block"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 lg:space-x-3">
                      <span
                        className="text-xs lg:text-xs  font-medium tracking-[0.15em]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span
                          className="text-xs lg:text-sm opacity-75 line-through"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 lg:mt-16 pt-8 lg:pt-12 border-t border-gray-200">
          <Button
            className="px-8 lg:px-12 py-3 lg:py-4 bg-black text-white hover:bg-gray-900 text-xs lg:text-sm font-medium tracking-[0.2em] lg:tracking-[0.25em] transition-all duration-300 rounded-none"
            style={{ fontFamily: "var(--font-body)" }}
            onClick={() => (window.location.href = "/category/ayahs-kaftan")}
          >
            EXPLORE ALL COLLECTIONS
          </Button>
        </div>
      </div>
    </section>
  );
}
