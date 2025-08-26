"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Grid2X2, Grid3X3, LayoutGrid } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Sample product data - replace with actual data from your API
const allProducts = [
  {
    id: 1,
    name: "EXCLUSIVE TRADITIONAL TAKCHITA LARA",
    image: "/ayahskaftan/IMG_0948.webp",
    price: "€575,00",
    category: "ayahs-kaftan"
  },
  {
    id: 2,
    name: "DAHAB",
    image: "/ayahskaftan/IMG_1005.webp",
    price: "€299,00",
    category: "ayahs-kaftan"
  },
  {
    id: 3,
    name: "EXCLUSIVE TAKCHITA ANA",
    image: "/ayahskaftan/IMG_1078.webp",
    price: "€635,00",
    category: "ayahs-kaftan"
  },
  {
    id: 4,
    name: "EXCLUSIVE TAKCHITA YUSRA",
    image: "/ayahskaftan/IMG_1127.webp",
    price: "€699,00",
    category: "ayahs-kaftan"
  },
  {
    id: 5,
    name: "KAFTAN ZAHRA",
    image: "/ayahskaftan/IMG_0948.webp",
    price: "€445,00",
    category: "ayahs-kaftan"
  },
  {
    id: 6,
    name: "TAKCHITA AMINA",
    image: "/ayahskaftan/IMG_1005.webp",
    price: "€520,00",
    category: "ayahs-kaftan"
  },
  {
    id: 7,
    name: "LEBSA FATIMA",
    image: "/ayahskaftan/IMG_1078.webp",
    price: "€380,00",
    category: "ayahs-kaftan"
  },
  {
    id: 8,
    name: "KAFTAN MARYAM",
    image: "/ayahskaftan/IMG_1127.webp",
    price: "€465,00",
    category: "ayahs-kaftan"
  },
  {
    id: 9,
    name: "EXCLUSIVE KAFTAN NOUR",
    image: "/ayahskaftan/IMG_0948.webp",
    price: "€590,00",
    category: "ayahs-kaftan"
  },
  {
    id: 10,
    name: "TAKCHITA LAYLA",
    image: "/ayahskaftan/IMG_1005.webp",
    price: "€615,00",
    category: "ayahs-kaftan"
  },
  {
    id: 11,
    name: "KAFTAN SARA",
    image: "/ayahskaftan/IMG_1078.webp",
    price: "€425,00",
    category: "ayahs-kaftan"
  },
  {
    id: 12,
    name: "LEBSA HANAN",
    image: "/ayahskaftan/IMG_1127.webp",
    price: "€355,00",
    category: "ayahs-kaftan"
  },
];

const ITEMS_PER_PAGE = 12;

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const [currentPage, setCurrentPage] = useState(1);
  const [gridCols, setGridCols] = useState(3); // 2, 3, or 4 columns
  
  const categorySlug = resolvedParams.slug;
  const categoryProducts = allProducts.filter(product => product.category === categorySlug);
  
  const totalPages = Math.ceil(categoryProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = categoryProducts.slice(startIndex, endIndex);

  const getCategoryTitle = (slug: string) => {
    switch (slug) {
      case 'ayahs-kaftan':
        return 'AYAHS KAFTAN';
      case 'jalabayti':
        return 'JALABAYTI';
      case 'perlage':
        return 'PERLAGE';
      case 'lderss':
        return "L'DERSS";
      case 'sales':
        return 'SUMMER SALES';
      default:
        return 'COLLECTION';
    }
  };

  const getCategorySubtitle = (slug: string) => {
    switch (slug) {
      case 'ayahs-kaftan':
        return 'FLOWING ELEGANCE, EFFORTLESS GRACE';
      case 'jalabayti':
        return 'EVERYDAY LUXURY, TIMELESS COMFORT';
      case 'perlage':
        return 'REFINED SOPHISTICATION, MODERN BEAUTY';
      case 'lderss':
        return 'CONTEMPORARY TRADITION, EXQUISITE CRAFT';
      case 'sales':
        return 'UP TO 50% OFF SELECTED PIECES';
      default:
        return 'DISCOVER OUR CURATED SELECTION';
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                HOME
              </span>
              <span>/</span>
              <span 
                className="text-black"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {getCategoryTitle(categorySlug)}
              </span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="pb-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="space-y-6">
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.2em] text-black leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {getCategoryTitle(categorySlug)}
              </h1>
              <p 
                className="text-sm text-gray-600 tracking-[0.25em] max-w-2xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {getCategorySubtitle(categorySlug)}
              </p>
              <div className="w-16 h-px bg-black"></div>
            </div>
          </div>
        </section>      {/* Products Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Results Info */}
          <div className="flex justify-between items-center mb-12">
            <p 
              className="text-sm text-gray-600 tracking-wider"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Showing {startIndex + 1}-{Math.min(endIndex, categoryProducts.length)} of {categoryProducts.length} items
            </p>
            
            {/* Grid Toggle Button */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-none">
                <Button
                  onClick={() => setGridCols(2)}
                  className={`p-2 rounded-none border-none ${
                    gridCols === 2 
                      ? 'bg-black text-white' 
                      : 'bg-transparent text-gray-600 hover:bg-gray-50'
                  }`}
                  title="2 columns"
                >
                  <Grid2X2 className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => setGridCols(3)}
                  className={`p-2 rounded-none border-none ${
                    gridCols === 3 
                      ? 'bg-black text-white' 
                      : 'bg-transparent text-gray-600 hover:bg-gray-50'
                  }`}
                  title="3 columns"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => setGridCols(4)}
                  className={`p-2 rounded-none border-none ${
                    gridCols === 4 
                      ? 'bg-black text-white' 
                      : 'bg-transparent text-gray-600 hover:bg-gray-50'
                  }`}
                  title="4 columns"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
              
              <p 
                className="text-sm text-gray-600 tracking-wider"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Page {currentPage} of {totalPages}
              </p>
            </div>
          </div>          {/* Product Grid */}
          <div className={`grid gap-6 lg:gap-8 xl:gap-10 ${
            gridCols === 2 
              ? 'grid-cols-1 sm:grid-cols-2' 
              : gridCols === 3 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}>
            {currentProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/product/${product.id}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-white shadow-sm">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                <div className="text-center space-y-3">
                  <h3
                    className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] leading-tight text-gray-600 px-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {product.name}
                  </h3>
                  <p 
                    className="text-xs sm:text-sm font-medium text-black tracking-[0.1em] sm:tracking-[0.15em]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-16 pt-12 border-t border-gray-200">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center space-x-2 bg-transparent text-black border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="text-sm tracking-[0.1em]">PREVIOUS</span>
              </Button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-12 h-12 rounded-none text-sm tracking-[0.1em] transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-black text-white'
                        : 'bg-transparent text-black border border-gray-300 hover:bg-gray-50'
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center space-x-2 bg-transparent text-black border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="text-sm tracking-[0.1em]">NEXT</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Back to Collections */}
          <div className="text-center mt-16">
            <Button
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-transparent text-black border border-black hover:bg-black hover:text-white text-sm font-medium tracking-[0.2em] transition-all duration-300 rounded-none"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ← BACK TO COLLECTIONS
            </Button>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
