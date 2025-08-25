"use client";

import { useState, use } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Minus, Plus, ShoppingBag, ArrowLeft, Ruler, Package, Shield, Truck } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Sample product data - replace with actual data from your API
const productData = {
  1: {
    id: 1,
    name: "EXCLUSIVE TRADITIONAL TAKCHITA LARA",
    price: "€575,00",
    originalPrice: "€750,00",
    category: "ayahs-kaftan",
    sku: "AK-LARA-001",
    description: "An exquisite piece that embodies the timeless elegance of Moroccan craftsmanship. The TAKCHITA LARA features intricate traditional embroidery and flowing silhouettes that celebrate feminine grace.",
    details: "Meticulously crafted with premium fabrics and adorned with traditional Moroccan embroidery. This takchita represents the perfect fusion of heritage artistry and contemporary sophistication.",
    fabric: "100% Premium Silk with Gold Thread Embroidery",
    care: "Dry clean only. Store in breathable garment bag.",
    sizing: "Available in sizes XS to XL. Model is wearing size M.",
    delivery: "Free worldwide shipping on orders over €200",
    images: [
      "/ayahskaftan/IMG_0948.webp",
      "/ayahskaftan/IMG_1005.webp",
      "/ayahskaftan/IMG_1078.webp",
      "/ayahskaftan/IMG_1127.webp",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Gold", "Rose Gold"],
    inStock: true,
    features: [
      "Traditional Moroccan embroidery",
      "Premium silk fabric",
      "Flowing, elegant silhouette",
      "Hand-finished details",
      "Adjustable belt included"
    ]
  }
};

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id);
  const product = productData[productId as keyof typeof productData];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-light tracking-[0.2em] text-black mb-4">
              Product Not Found
            </h1>
            <Button
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-transparent text-black border border-black hover:bg-black hover:text-white text-sm font-medium tracking-[0.2em] transition-all duration-300 rounded-none"
            >
              ← GO BACK
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <section className="pt-32 pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center space-x-2 text-sm text-gray-600 tracking-wider">
              <span 
                className="hover:text-black cursor-pointer transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
                onClick={() => window.history.back()}
              >
                COLLECTIONS
              </span>
              <span>/</span>
              <span 
                className="hover:text-black cursor-pointer transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {product.category.toUpperCase().replace('-', ' ')}
              </span>
              <span>/</span>
              <span 
                className="text-black"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {product.name}
              </span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
              
              {/* Product Images */}
              <div className="space-y-6">
                {/* Main Image */}
                <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Image Navigation */}
                  <div className="absolute top-6 right-6 flex flex-col space-y-4">
                    <Button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`p-3 rounded-full transition-all duration-300 ${
                        isWishlisted 
                          ? 'bg-black text-white' 
                          : 'bg-white/90 backdrop-blur-sm text-black hover:bg-white'
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                    </Button>
                    <Button className="p-3 bg-white/90 backdrop-blur-sm text-black hover:bg-white rounded-full transition-all duration-300">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative aspect-[3/4] cursor-pointer overflow-hidden transition-all duration-300 ${
                        selectedImage === index 
                          ? 'ring-2 ring-black' 
                          : 'hover:opacity-80'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                {/* Product Title & Price */}
                <div className="space-y-6">
                  <div>
                    <h1 
                      className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.2em] text-black leading-tight mb-4"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {product.name}
                    </h1>
                    <p 
                      className="text-sm text-gray-600 tracking-[0.25em] mb-6"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      SKU: {product.sku}
                    </p>
                  </div>

                  <div className="flex items-baseline space-x-4">
                    <span 
                      className="text-2xl lg:text-3xl font-medium text-black tracking-[0.15em]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span 
                        className="text-lg text-gray-500 line-through tracking-[0.15em]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="w-16 h-px bg-black"></div>
                </div>

                {/* Product Options */}
                <div className="space-y-8">
                  {/* Color Selection */}
                  <div>
                    <h3 
                      className="text-sm font-medium tracking-[0.2em] text-black mb-4"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      COLOR: {selectedColor && <span className="font-normal text-gray-600">{selectedColor}</span>}
                    </h3>
                    <div className="flex space-x-3">
                      {product.colors.map((color) => (
                        <Button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-6 py-3 text-sm tracking-[0.1em] transition-all duration-300 rounded-none ${
                            selectedColor === color
                              ? 'bg-black text-white'
                              : 'bg-transparent text-black border border-gray-300 hover:bg-gray-50'
                          }`}
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {color}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 
                        className="text-sm font-medium tracking-[0.2em] text-black"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        SIZE: {selectedSize && <span className="font-normal text-gray-600">{selectedSize}</span>}
                      </h3>
                      <Button 
                        className="text-xs text-gray-600 hover:text-black tracking-[0.1em] underline bg-transparent p-0"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <Ruler className="h-3 w-3 mr-1" />
                        SIZE GUIDE
                      </Button>
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                      {product.sizes.map((size) => (
                        <Button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`aspect-square text-sm tracking-[0.1em] transition-all duration-300 rounded-none ${
                            selectedSize === size
                              ? 'bg-black text-white'
                              : 'bg-transparent text-black border border-gray-300 hover:bg-gray-50'
                          }`}
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <h3 
                      className="text-sm font-medium tracking-[0.2em] text-black mb-4"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      QUANTITY
                    </h3>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border border-gray-300">
                        <Button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-3 bg-transparent text-black hover:bg-gray-50 rounded-none border-none"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span 
                          className="px-6 py-3 text-sm tracking-[0.1em] border-x border-gray-300"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {quantity}
                        </span>
                        <Button
                          onClick={() => setQuantity(quantity + 1)}
                          className="p-3 bg-transparent text-black hover:bg-gray-50 rounded-none border-none"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="space-y-4">
                  <Button
                    disabled={!selectedSize || !selectedColor}
                    className="w-full py-4 bg-black text-white hover:bg-gray-900 text-sm font-medium tracking-[0.2em] transition-all duration-300 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <ShoppingBag className="h-5 w-5 mr-3" />
                    ADD TO CART
                  </Button>
                  
                  {(!selectedSize || !selectedColor) && (
                    <p 
                      className="text-xs text-gray-500 text-center tracking-[0.1em]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Please select size and color
                    </p>
                  )}
                </div>

                {/* Product Features */}
                <div className="space-y-4 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3 text-xs tracking-[0.1em] text-gray-600">
                      <Package className="h-4 w-4" />
                      <span style={{ fontFamily: "var(--font-body)" }}>FREE SHIPPING</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs tracking-[0.1em] text-gray-600">
                      <Shield className="h-4 w-4" />
                      <span style={{ fontFamily: "var(--font-body)" }}>AUTHENTIC</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs tracking-[0.1em] text-gray-600">
                      <Truck className="h-4 w-4" />
                      <span style={{ fontFamily: "var(--font-body)" }}>EXPRESS DELIVERY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details Tabs */}
            <div className="mt-20 pt-16 border-t border-gray-200">
              <div className="flex space-x-8 mb-12">
                {['description', 'details', 'care'].map((tab) => (
                  <Button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm tracking-[0.2em] transition-all duration-300 rounded-none border-none ${
                      activeTab === tab
                        ? 'text-black border-b-2 border-black bg-transparent'
                        : 'text-gray-600 hover:text-black bg-transparent'
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {tab.toUpperCase()}
                  </Button>
                ))}
              </div>

              <div className="max-w-4xl">
                {activeTab === 'description' && (
                  <div className="space-y-6">
                    <p 
                      className="text-base leading-relaxed text-gray-700 tracking-wide"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {product.description}
                    </p>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li 
                          key={index}
                          className="flex items-center space-x-3 text-sm text-gray-600 tracking-wide"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div className="space-y-6">
                    <p 
                      className="text-base leading-relaxed text-gray-700 tracking-wide"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {product.details}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 
                          className="text-sm font-medium tracking-[0.2em] text-black mb-3"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          FABRIC
                        </h4>
                        <p 
                          className="text-sm text-gray-600 tracking-wide"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {product.fabric}
                        </p>
                      </div>
                      <div>
                        <h4 
                          className="text-sm font-medium tracking-[0.2em] text-black mb-3"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          SIZING
                        </h4>
                        <p 
                          className="text-sm text-gray-600 tracking-wide"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {product.sizing}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'care' && (
                  <div className="space-y-6">
                    <p 
                      className="text-base leading-relaxed text-gray-700 tracking-wide"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {product.care}
                    </p>
                    <div>
                      <h4 
                        className="text-sm font-medium tracking-[0.2em] text-black mb-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        DELIVERY
                      </h4>
                      <p 
                        className="text-sm text-gray-600 tracking-wide"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {product.delivery}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <Button
                onClick={() => window.history.back()}
                className="flex items-center space-x-3 px-8 py-3 bg-transparent text-black border border-black hover:bg-black hover:text-white text-sm font-medium tracking-[0.2em] transition-all duration-300 rounded-none"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <ArrowLeft className="h-4 w-4" />
                <span>BACK TO COLLECTION</span>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
