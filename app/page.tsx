import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import SummerSales from "@/components/summer-sales";
import Ldress from "@/components/ldress";
import Perlage from "@/components/perlage";
import AyahsKaftan from "@/components/ayahskaftan";
import Jalabayti from "@/components/jalabayti";
import CuratedForYou from "@/components/curated-for-you";
import Footer from "@/components/footer";
import AboutUs from "@/components/about-us";
import CollectionsShowcase from "@/components/collections-showcase";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CollectionsShowcase />
      <SummerSales />
      {/* <CuratedForYou /> */}
      <AyahsKaftan />
      <Ldress />
      <Perlage />
      <Jalabayti />
      <AboutUs />
      <Footer />
    </main>
  );
}
