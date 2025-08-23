"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import InquiryForm from "./inquire-form";
import Link from "next/link";

/* ── CTA section (sits below the video) ───────────────────────────── */
function WeddingGoosebumpsSection() {
  return (
    <section className="relative">
      {/* Hero band with background image */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // TODO: replace with your asset
            backgroundImage: "url('/images/wedding-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative container mx-auto px-10 py-60 text-center text-white">
          <p className="italic font-lora tracking-wide mb-3">
            let’s celebrate your<span className="italic font-light">Special Day</span> together
          </p>
          <h2 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            Contact Us 
          </h2>

          <Link
            href="/inquire"
            className="inline-block bg-white text-black px-8 py-4 tracking-wide hover:bg-white/90 transition"
          >
            SEND US AN INQUIRY
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function InquirePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Split screen layout */}
      <div className="min-h-screen flex">
        {/* Left side - Large romantic photo */}
        <div className="w-1/2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-gray-300"
            style={{
              backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/719d37fe-897e-47a7-947a-3db0f4cae8a6/generated_images/luxurious-punjabi-bride-in-traditional-r-771e21b2-20250801201413.jpg')`,
            }}
          />
        </div>

        {/* Right side - Contact content */}
        <div className="w-1/2 bg-[#F8F5F0] flex flex-col">
          <div className="text-center pt-16 pb-8" />

          {/* Main content area */}
          <div className="flex-1 px-16 py-8">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60 font-lora mb-4">
                GET IN TOUCH
              </p>
              <h2 className="font-epicene-display text-4xl text-charcoal leading-tight mb-6">
                Lets create a goosebump <br /> moment together
              </h2>
              <p className="text-charcoal/70 leading-relaxed font-lora mb-8">
                Please fill out our contact form or send us an email.
              </p>

              <div className="mt-6 max-w-lg">
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <WeddingGoosebumpsSection />

      {/* Video Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="sticky top-0 h-screen">
          <div className="relative w-full h-full">
            <div className="absolute inset-0">
              <iframe
                className="absolute inset-0 w-full h-full object-cover"
                src="https://www.dailymotion.com/embed/video/x8iwzz4?autoplay=1&mute=1&quality=1080"
                title="Jennifer Fox Weddings Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-8">
                <h2 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4">
                  TIMELESS ELEGANCE
                </h2>
                <p className="font-lora text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                  Where luxury meets tradition in the most beautiful celebration of love
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-10" />
      </section>
      <Footer/>
    </main>
  );
}
