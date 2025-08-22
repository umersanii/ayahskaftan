import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-light tracking-[0.2em] mb-4">
              WELCOME TO THE KAFTAN ELEGANCE COMMUNITY
            </h3>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full md:w-auto flex-1 px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none"
            />
            <Button className="w-full md:w-auto bg-white text-black hover:bg-gray-100 px-8 py-3 tracking-wider">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Showroom Address */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider">
              Showroom Address:
            </h4>
            <div className="text-gray-300 space-y-2">
              <p>Carrer de la Mare de Déu de Sales, 6</p>
              <p>08840 Viladecans, Barcelona</p>
              <div className="flex items-center space-x-2 mt-4">
                <Phone className="h-4 w-4" />
                <a href="tel:+34662096055" className="hover:text-white">
                  +34 662 09 60 55
                </a>
              </div>
              <a
                href="https://www.google.com/maps?q=Carrer+de+la+Mare+de+D%C3%A9u+de+Sales,+6,+08840+Viladecans,+Barcelona"
                className="inline-block mt-2 text-white hover:underline"
              >
                📍 Get Directions
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider">
              Customer Service
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shipping & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider">Collections</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Kaftan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Lebsa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Jellaba
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Exclusive Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Lignée d'Or
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Lumara
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider">Follow Us</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/kaftanelegance/"
                className="flex items-center space-x-3 text-gray-300 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span>Follow on Instagram</span>
              </a>
              <a
                href="https://pin.it/1v79d1n91"
                className="flex items-center space-x-3 text-gray-300 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.999-5.373 11.999-12C24 5.372 18.625.001 12.001.001z" />
                </svg>
                <span>Follow on Pinterest</span>
              </a>
              <a
                href="https://www.tiktok.com/@kaftan_elegance"
                className="flex items-center space-x-3 text-gray-300 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span>Follow on TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm">© 2025 - KAFTAN ELEGANCE</div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            PAKISTAN (EUR €) ENGLISH
          </div>
        </div>
      </div>
    </footer>
  );
}
