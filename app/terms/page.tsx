"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-100 to-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gray-300 max-w-32"></div>
            <h1 
              className="text-xl sm:text-2xl lg:text-3xl font-light tracking-[0.2em] text-black mx-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              TERMS & CONDITIONS
            </h1>
            <div className="flex-1 h-px bg-gray-300 max-w-32"></div>
          </div>
          <p 
            className="text-sm text-gray-600 tracking-[0.15em]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            EFFECTIVE DATE: JANUARY 1, 2025
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
        <div className="prose prose-gray max-w-none">
          
          {/* Introduction */}
          <div className="mb-12">
            <p 
              className="text-base leading-relaxed text-gray-700 mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Welcome to <strong>AYAHS KAFTAN</strong>. By accessing and using our website (www.ayahskaftan.com), you agree to the following Terms & Conditions. Please read them carefully before placing an order.
            </p>
          </div>

          {/* Company Information */}
          <section className="mb-10">
            <h2 
              className="text-xl font-light tracking-[0.1em] text-black mb-4 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              COMPANY INFORMATION
            </h2>
            <p 
              className="text-base leading-relaxed text-gray-700 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              AYAHS KAFTAN is a registered business located in Doha, Qatar. You can contact us at info@ayahskaftan.com.
            </p>
          </section>

          {/* Products and Availability */}
          <section className="mb-10">
            <h2 
              className="text-xl font-light tracking-[0.1em] text-black mb-4 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              PRODUCTS AND AVAILABILITY
            </h2>
            <div className="space-y-4">
              <p 
                className="text-base leading-relaxed text-gray-700"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We sell traditional and contemporary Moroccan clothing, including handmade kaftans and jalabiyat. Items that are in stock are processed and shipped within 3 to 5 working days. All product images and descriptions are provided to the best of our ability, but minor variations may occur due to the handcrafted nature of the items.
              </p>
            </div>
          </section>

          {/* Orders and Cancellations */}
          <section className="mb-10">
            <h2 
              className="text-xl font-light tracking-[0.1em] text-black mb-4 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ORDERS AND CANCELLATIONS
            </h2>
            <div className="space-y-4">
              <p 
                className="text-base leading-relaxed text-gray-700"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Once an order has been placed, it cannot be cancelled. We begin processing immediately to ensure timely delivery, so please make sure all details are correct before confirming your order.
              </p>
            </div>
          </section>

          {/* Shipping and Delivery */}
          <section className="mb-10">
            <h2 
              className="text-xl font-light tracking-[0.1em] text-black mb-4 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              SHIPPING AND DELIVERY
            </h2>
            <div className="space-y-4">
              <p 
                className="text-base leading-relaxed text-gray-700"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Shipping costs are calculated at checkout. We are not responsible for delays caused by shipping carriers. Customers are responsible for both standard shipping and return shipping costs.
              </p>
            </div>
          </section>

          {/* Returns and Refunds */}
          <section className="mb-10">
            <h2 
              className="text-xl font-light tracking-[0.1em] text-black mb-4 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              RETURNS AND REFUNDS
            </h2>
            <div className="space-y-4">
              <p 
                className="text-base leading-relaxed text-gray-700"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We accept return on the same day of delivery. Items must be returned unused, in their original packaging, and free from stains, perfumes, or signs of wear. If a return is approved, the refund will be issued to the original payment method. Customers are responsible for the cost of return shipping. To request a return, please contact us at info@ayahskaftan.com.
              </p>
            </div>
          </section>

          {/* Payments */}
          <section className="mb-10">
            <h2 
              className="text-xl font-light tracking-[0.1em] text-black mb-4 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              PAYMENTS
            </h2>
            <p 
              className="text-base leading-relaxed text-gray-700"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We accept all major payment methods. All prices are listed in Euros (€) and include VAT where applicable. Payments are processed securely through our website.
            </p>
          </section>

          {/* Privacy and Data Protection */}
          <section className="mb-10">
            <h2 
              className="text-xl font-light tracking-[0.1em] text-black mb-4 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              PRIVACY AND DATA PROTECTION
            </h2>
            <p 
              className="text-base leading-relaxed text-gray-700"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We only collect the personal data necessary to process your order. Data is only used for marketing purposes if you give explicit consent. We may share information with trusted third-party services, such as Shopify apps, to support our business operations. We comply with applicable data protection regulations. For full details, please refer to our Privacy Policy.
            </p>
          </section>

          {/* Liability */}
          <section className="mb-10">
            <h2 
              className="text-xl font-light tracking-[0.1em] text-black mb-4 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              LIABILITY
            </h2>
            <p 
              className="text-base leading-relaxed text-gray-700"
              style={{ fontFamily: "var(--font-body)" }}
            >
              AYAHS KAFTAN is not responsible for delays caused by third-party carriers such as FedEx or DHL. We are also not liable for minor differences in color or detail due to the handmade nature of the products or differences in screen displays.
            </p>
          </section>

          {/* Changes to These Terms */}
          <section className="mb-12">
            <h2 
              className="text-xl font-light tracking-[0.1em] text-black mb-4 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              CHANGES TO THESE TERMS
            </h2>
            <div className="space-y-3">
              <p 
                className="text-base leading-relaxed text-gray-700"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We reserve the right to update or modify these Terms & Conditions at any time. The most current version will always be available on our website.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-2 text-gray-700" style={{ fontFamily: "var(--font-body)" }}>
                  <p><strong>Email:</strong> info@ayahskaftan.com</p>
                  <p><strong>Website:</strong> www.ayahskaftan.com</p>
                  <p><strong>Location:</strong> Doha, Qatar</p>
                  <p><strong>Business Hours:</strong> Sunday - Thursday, 9:00 AM - 6:00 PM (GST)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Home Button */}
          <div className="text-center pt-8 border-t border-gray-200">
            <Link href="/">
              <Button 
                className="px-8 py-3 bg-black text-white hover:bg-gray-800 text-sm font-medium tracking-[0.2em] transition-all duration-300 rounded-none"
                style={{ fontFamily: "var(--font-body)" }}
              >
                BACK TO HOME
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
