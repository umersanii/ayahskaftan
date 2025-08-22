"use client";

import { Star } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Barcelona",
      rating: 5,
      text: "Absolutely stunning quality! The craftsmanship is exceptional and the fit is perfect. I've received so many compliments wearing my kaftan.",
      product: "Kaftan Najlae",
    },
    {
      id: 2,
      name: "Amira K.",
      location: "Madrid",
      rating: 5,
      text: "The most beautiful lebsa I've ever owned. The fabric is luxurious and the details are exquisite. Perfect for special occasions.",
      product: "Lebsa Ahlam",
    },
    {
      id: 3,
      name: "Isabella R.",
      location: "Valencia",
      rating: 5,
      text: "Exceptional service and incredible quality. The takchita exceeded my expectations. I feel like royalty when I wear it.",
      product: "Exclusive Takchita Lara",
    },
    {
      id: 4,
      name: "Fatima L.",
      location: "Seville",
      rating: 5,
      text: "Beautiful traditional pieces with a modern touch. The attention to detail is remarkable. Highly recommend!",
      product: "Jellaba Amira",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-amber-25 to-rose-25">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light tracking-[0.2em] text-black mb-4">
            OUR CLIENTS
          </h2>
          <p className="text-lg text-gray-600 tracking-wider">
            YOU ARE ELEGANCE
          </p>
          <div className="w-24 h-px bg-black mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-serif text-sm tracking-wider text-black font-medium mb-1">
                  {review.name}
                </p>
                <p className="text-xs text-gray-500 mb-2">{review.location}</p>
                <p className="text-xs text-gray-600 tracking-wider">
                  Purchased: {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl md:text-2xl font-serif font-light tracking-wider text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Across cities and cultures, women who choose Kaftan Elegance are not
            just dressing — they are expressing identity, beauty, and strength.
            This is your place. Your elegance. Your story.
          </p>
        </div>
      </div>
    </section>
  );
}
