import type React from "react"
import type { Metadata } from "next"
import { fontConfig } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "AYAHS KAFTAN",
  description: "Elegant Traditional Clothing & Kaftans",
  generator: "v0.app",
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
      <body className="font-body">{children}</body>
    </html>
  )
}
