import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Brand & Contact */}
          <div className="text-center md:text-left space-y-6">
            <h4 
              className="text-2xl font-light tracking-[0.3em] text-white mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              AYAHS KAFTAN
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:Ayahskaftan@gmail.com"
                className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span 
                  className="text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Ayahskaftan@gmail.com
                </span>
              </a>
              <a
                href="https://wa.me/97455300502"
                className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span 
                  className="text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  +974 553 005 02
                </span>
              </a>
            </div>
          </div>

          {/* Collections */}
          <div className="text-center space-y-6">
            <h4 
              className="text-lg font-light tracking-[0.25em] text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              COLLECTIONS
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Ayahs Kaftan
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Jalabayti
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Perlage
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  L&apos;Derss
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Support */}
          <div className="text-center md:text-right space-y-6">
            <h4 
              className="text-lg font-light tracking-[0.25em] text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              CONNECT
            </h4>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/ayahskaftan/"
                className="flex items-center justify-center md:justify-end space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <span 
                  className="text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Follow on Instagram
                </span>
                <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
              <div className="pt-4 space-y-3">
                <a 
                  href="#" 
                  className="block text-gray-400 hover:text-white transition-colors text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="block text-gray-400 hover:text-white transition-colors text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p 
            className="text-gray-500 text-xs tracking-[0.2em]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © 2025 AYAHS KAFTAN. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
