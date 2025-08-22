"use client"

import { useState, useEffect } from "react"
import { ShoppingBag, Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    "KAFTAN",
    "LEBSA",
    "JELLABA",
    "BRIDAL",
    "EXCLUSIVE COLLECTION",
    "ACCESSORIES",
    "MEN'S COLLECTION",
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#f5f1eb]/80 backdrop-blur-md" : "bg-[#f5f1eb]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(true)} className="hover:bg-transparent">
              <Menu className="h-6 w-6 text-[#8b7355]" />
            </Button>

            <div className="flex-1 flex justify-center">
              <h1 className="font-serif text-2xl md:text-3xl font-normal tracking-[0.2em] text-[#8b7355]">KAFTAN</h1>
              <div className="mx-2 text-[#8b7355] font-serif text-2xl md:text-3xl">·</div>
              <h1 className="font-serif text-2xl md:text-3xl font-normal tracking-[0.2em] text-[#8b7355]">ELEGANCE</h1>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hover:bg-transparent">
                <Search className="h-6 w-6 text-[#8b7355]" />
              </Button>
              <Button variant="ghost" size="sm" className="relative hover:bg-transparent">
                <ShoppingBag className="h-6 w-6 text-[#8b7355]" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-80 bg-[#f5f1eb] shadow-xl">
            <div className="p-6 border-b border-[#8b7355]/20">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg text-[#8b7355] tracking-wider">MENU</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-5 w-5 text-[#8b7355]" />
                </Button>
              </div>
            </div>
            <nav className="p-6 space-y-6">
              <a
                href="#"
                className="block font-serif text-sm text-[#8b7355] tracking-wider hover:opacity-70 transition-opacity"
              >
                HOME
              </a>
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block font-serif text-sm text-[#8b7355] tracking-wider hover:opacity-70 transition-opacity"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
