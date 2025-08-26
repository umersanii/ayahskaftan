"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden white bg-gradient-to-b from-white to-gray-100">
      {/* Desktop Layout */}
      <div className="hidden md:flex h-screen">
        {/* Left Content Area - 55% */}
        <div className="w-[55%] flex items-center justify-end px-8 pr-4 lg:px-16 lg:pr-8">
          <div className="text-left text-black max-w-2xl">
            <h1 
              className="font-serif text-4xl lg:text-6xl xl:text-6xl font-medium tracking-[0.2em] mb-8 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              AYAHS KAFTAN
            </h1>
            <p className="text-lg lg:text-xl font-extralight tracking-wider mb-12 text-gray-600"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Timeless tradition reimagined for the modern woman. Explore our exclusive collection of handcrafted kaftans, designed to bring elegance, comfort, and sophistication to every occasion.
            </p>
            <Button
              size="lg"
              className="bg-black text-white hover:bg-white hover:text-black px-12 py-4 text-sm tracking-widest font-medium transition-all duration-300 rounded-none border border-black"
            >
              EXPLORE COLLECTIONS
            </Button>
          </div>
        </div>

        {/* Right Video Area - 45% */}
        <div className="w-[45%] flex items-center justify-center p-8">
          <div className="relative w-full max-w-md">
            {/* 9:16 Aspect Ratio Container for Portrait Video */}
            <div className="aspect-[9/16] w-full relative overflow-hidden rounded-lg shadow-2xl bg-gray-200">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-contain"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                {/* Fallback content when video is not available */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                  <span className="text-gray-600 text-center text-sm">Video Loading...</span>
                </div>
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative min-h-screen overflow-hidden">
        {/* Full-screen Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Text Overlay */}
        <div className="relative z-10 flex flex-col justify-end min-h-screen px-6 py-8">
          <div className="text-left text-white max-w-sm">
            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-[0.15em] mb-4 leading-tight drop-shadow-lg">
              AYAHS
              <br />
              KAFTAN
            </h1>
            <p className="text-base sm:text-lg font-light tracking-wide mb-6 drop-shadow-md leading-relaxed">
              Where tradition meets contemporary elegance. Discover our curated
              collection of handcrafted kaftans.
            </p>
            <Button
              size="default"
              className="bg-white text-black hover:bg-white hover:text-black px-6 py-2 text-xs tracking-widest font-medium transition-all duration-300 rounded-none"
            >
              EXPLORE COLLECTIONS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
