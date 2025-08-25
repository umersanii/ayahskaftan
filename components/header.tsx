"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Menu, Search, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 50);
      
      // Handle navbar visibility based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2 text-sm tracking-wider">
        SUMMER SALES - UP TO 50%
      </div>

      <header
        className={`fixed top-8 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md shadow-sm"
            : "bg-black/90"
        } ${
          isVisible ? "translate-y-0" : "-translate-y-[calc(100%+2rem)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(true)}
              className="hover:bg-white/10"
            >
              <Menu className="h-5 w-5 text-white" />
            </Button>

            <div className="flex-1 flex justify-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <h1 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white">
                  AYAHS KAFTAN
                </h1>
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-white/10"
              >
                <Search className="h-5 w-5 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-white/10"
              >
                <User className="h-5 w-5 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-white/10"
              >
                <ShoppingBag className="h-5 w-5 text-white" />
                <span className="absolute -top-1 -right-1 bg-white text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-80 bg-black shadow-xl">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg text-white tracking-wider">
                  MENU
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:bg-white/10"
                >
                  <X className="h-5 w-5 text-white" />
                </Button>
              </div>
            </div>
            <nav className="p-6 space-y-6">
              <Link
                href="/"
                className="block font-serif text-sm text-white tracking-wider hover:opacity-70 transition-opacity"
              >
                HOME
              </Link>
              <Link
                href="/category/ayahs-kaftan"
                className="block font-serif text-sm text-white tracking-wider hover:opacity-70 transition-opacity"
              >
                AYAHS KAFTAN
              </Link>
              <Link
                href="/category/jalabayti"
                className="block font-serif text-sm text-white tracking-wider hover:opacity-70 transition-opacity"
              >
                JALABAYTI
              </Link>
              <Link
                href="/category/perlage"
                className="block font-serif text-sm text-white tracking-wider hover:opacity-70 transition-opacity"
              >
                PERLAGE
              </Link>
              <Link
                href="/category/lderss"
                className="block font-serif text-sm text-white tracking-wider hover:opacity-70 transition-opacity"
              >
                L&apos;DERSS
              </Link>
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="#about"
                  className="block font-serif text-sm text-gray-300 tracking-wider hover:opacity-70 transition-opacity"
                >
                  ABOUT US
                </a>
                <a
                  href="#contact"
                  className="block font-serif text-sm text-gray-300 tracking-wider hover:opacity-70 transition-opacity mt-4"
                >
                  CONTACT
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
