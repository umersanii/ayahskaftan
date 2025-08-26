export default function AboutUs() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              {/* Section Header with Full Width Separator */}
              <div className="text-left mb-8">
                <div className="flex items-center mb-4">
                  <h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] text-black mr-6"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    OUR STORY
                  </h2>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p 
                className="text-gray-700 text-base md:text-lg leading-relaxed tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
              >
                From the heart of Doha, Ayahs Kaftan celebrates the timeless beauty 
                of traditional craftsmanship. We honor the rich heritage of Moroccan 
                caftans while creating contemporary pieces for the modern woman.
              </p>
              
              <p 
                className="text-gray-700 text-base md:text-lg leading-relaxed tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Each piece in our collection reflects a perfect fusion of modesty 
                and luxury, designed for both everyday elegance and special occasions. 
                Our jalabiyat and kaftans are crafted with attention to detail, 
                ensuring comfort and sophistication in every stitch.
              </p>
              
              <p 
                className="text-gray-700 text-base md:text-lg leading-relaxed tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We believe in fashion that transcends seasons while honoring 
                cultural traditions, creating pieces that empower women to 
                express their authentic selves with confidence and grace.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
              {/* Placeholder for image - replace with actual brand image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div 
                    className="text-6xl md:text-7xl font-light tracking-[0.5em] text-gray-400"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    A K
                  </div>
                  <p 
                    className="text-gray-500 text-sm tracking-[0.3em]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    SINCE 2020
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative border */}
            <div className="absolute -inset-4 border border-gray-200 -z-10"></div>
          </div>
        </div>

        {/* Brand Values */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

            {/* Heritage */}
            <div className="text-center space-y-4">
              <h3 
                className="text-lg font-semibold tracking-[0.25em] text-black mb-0.5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                HERITAGE
              </h3>
          <div className="w-6 h-px bg-black mx-auto mt-2"></div>

              <p 
                className="text-gray-500 text-sm leading-relaxed tracking-wide max-w-xs mx-auto"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Rooted in traditional Moroccan craftsmanship, 
                preserving cultural artistry for generations.
              </p>
            </div>

            {/* Quality */}
            <div className="text-center space-y-4">
              <h3 
                className="text-lg font-semibold tracking-[0.25em] text-black mb-0.5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                QUALITY
              </h3>
          <div className="w-6 h-px bg-black mx-auto mt-2"></div>

              <p 
                className="text-gray-500 text-sm leading-relaxed tracking-wide max-w-xs mx-auto"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Meticulous attention to detail in every piece, 
                ensuring lasting beauty and comfort.
              </p>
            </div>

            {/* Elegance */}
            <div className="text-center space-y-4">
              <h3 
                className="text-lg font-semibold tracking-[0.25em] text-black mb-0.5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                ELEGANCE
              </h3>
          <div className="w-6 h-px bg-black mx-auto mt-2"></div>

              <p 
                className="text-gray-500 text-sm leading-relaxed tracking-wide max-w-xs mx-auto"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Modern sophistication meets timeless modesty, 
                creating effortless grace for every woman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
