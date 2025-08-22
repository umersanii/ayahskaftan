import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CollectionShowcase from "@/components/collection-showcase"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CollectionShowcase />
      <ProductGrid />
      <Footer />
    </main>
  )
}
