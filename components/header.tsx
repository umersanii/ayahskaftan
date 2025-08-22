"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Menu, Search, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    "KAFTAN",
    "LEBSA",
    "JELLABA",
    "EXCLUSIVE COLLECTION",
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2 text-sm tracking-wider">
        SUMMER SALES - UP TO 50%
      </div>

      <header
        className={`fixed top-8 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(true)}
              className="hover:bg-transparent"
            >
              <Menu className="h-5 w-5 text-black" />
            </Button>

            <div className="flex-1 flex justify-center">
              <h1 className="font-serif text-2xl md:text-3xl font-light tracking-[0.3em] text-black">
                KAFTAN ELEGANCE
              </h1>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-transparent"
              >
                <Search className="h-5 w-5 text-black" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-transparent"
              >
                <User className="h-5 w-5 text-black" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-transparent"
              >
                <ShoppingBag className="h-5 w-5 text-black" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
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
          <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg text-black tracking-wider">
                  MENU
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-5 w-5 text-black" />
                </Button>
              </div>
            </div>
            <nav className="p-6 space-y-6">
              <a
                href="#"
                className="block font-serif text-sm text-black tracking-wider hover:opacity-70 transition-opacity"
              >
                HOME
              </a>
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block font-serif text-sm text-black tracking-wider hover:opacity-70 transition-opacity"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="#"
                  className="block font-serif text-sm text-gray-600 tracking-wider hover:opacity-70 transition-opacity"
                >
                  ABOUT US
                </a>
                <a
                  href="#"
                  className="block font-serif text-sm text-gray-600 tracking-wider hover:opacity-70 transition-opacity mt-4"
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
