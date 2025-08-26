import type React from "react"
import type { Metadata } from "next"
import { fontConfig } from "@/lib/fonts"
import "./globals.css"
import Script from "next/script"

export const metadata: Metadata = {
  title: "AYAHS KAFTAN",
  description: "Elegant Traditional Clothing & Kaftans",
  generator: "v0.app",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const primaryFont = fontConfig.primary;
  const secondaryFont = fontConfig.secondary;

  return (
    <html lang="en" className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}>
      <head>
        {/* Safari-specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AYAHS KAFTAN" />
        
        {/* Preload critical fonts for Safari */}
        <link
          rel="preload"
          href="/fonts/Jost-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Jost-Light.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-body">
        {children}
        
        {/* Safari optimization script */}
        <Script id="safari-optimizations" strategy="afterInteractive">
          {`
            // Safari detection and video optimization
            if (typeof window !== 'undefined') {
              const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
              
              if (isSafari) {
                // Add Safari class to body
                document.body.classList.add('safari-browser');
                
                // Optimize videos for Safari
                document.addEventListener('DOMContentLoaded', () => {
                  const videos = document.querySelectorAll('video');
                  videos.forEach(video => {
                    video.setAttribute('webkit-playsinline', 'true');
                    video.load();
                  });
                });
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}
