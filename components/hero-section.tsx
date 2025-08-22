"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background - Fallback to image background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-rose-50 to-orange-100" />
      <video
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-75"
        poster="/hero-image.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Video controls */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-6 right-6 z-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-opacity-30 transition-all"
      >
        {isMuted ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.784L4.6 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.6l3.783-3.784a1 1 0 011.617.784zM14.657 2.929a1 1 0 010 1.414L13.414 5.586a1 1 0 01-1.414-1.414L13.243 2.93a1 1 0 011.414 0zM17.071 5.343a1 1 0 010 1.414L15.828 7.999l1.243 1.242a1 1 0 01-1.414 1.414L14.414 9.413l-1.243 1.242a1 1 0 01-1.414-1.414L13 8l-1.243-1.242a1 1 0 011.414-1.414L14.414 6.587l1.243-1.244a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.784L4.6 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.6l3.783-3.784a1 1 0 011.617.784zM12 8a1 1 0 011-1 4 4 0 010 8 1 1 0 01-1-1V8z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] mb-8 leading-tight">
            KAFTAN
            <br />
            ELEGANCE
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wider mb-12 max-w-2xl mx-auto">
            Where tradition meets contemporary elegance. Discover our curated
            collection of handcrafted kaftans.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 px-12 py-4 text-sm tracking-widest font-medium transition-all duration-300"
          >
            EXPLORE COLLECTIONS
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
