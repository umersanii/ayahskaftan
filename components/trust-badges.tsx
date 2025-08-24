"use client";

import { Truck, RotateCcw, Star } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <Truck className="w-8 h-8 text-gray-700" />,
      title: "WORLDWIDE DELIVERY",
      description: "Free shipping on orders over €50"
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-gray-700" />,
      title: "14 DAYS RETURN",
      description: "Easy returns within 14 days"
    },
    {
      icon: <Star className="w-8 h-8 text-gray-700" />,
      title: "5-STAR CUSTOMER CARE",
      description: "Exceptional customer service"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {badge.icon}
              </div>
              <h3 className="font-semibold text-sm tracking-[0.15em] text-gray-900 mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-gray-600">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
