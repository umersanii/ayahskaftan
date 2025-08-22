import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import CollectionShowcase from "@/components/collection-showcase";
import SummerSales from "@/components/summer-sales";
import LigneeOr from "@/components/lignee-or";
import Lumara from "@/components/lumara";
import CuratedForYou from "@/components/curated-for-you";
import ReviewsSection from "@/components/reviews-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CollectionShowcase />
      <SummerSales />
      <LigneeOr />
      <Lumara />
      <CuratedForYou />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
