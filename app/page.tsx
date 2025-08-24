import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import CollectionShowcase from "@/components/collection-showcase";
import SummerSales from "@/components/summer-sales";
import Ldress from "@/components/ldress";
import Perlage from "@/components/perlage";
import AyahsKaftan from "@/components/ayahskaftan";
import Jalabayti from "@/components/Jalabayti";

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
      <CuratedForYou />
      <AyahsKaftan />
      <Ldress />
      <Perlage />
      <Jalabayti />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
