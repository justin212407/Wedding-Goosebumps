// src/app/offerings/page.tsx
"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export default function OfferingsPage() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="font-commuter-sans text-[12px] md:text-[13px] uppercase tracking-[0.3em] text-charcoal/70 mb-3">
            WHAT WE DO
          </p>
          <h1 className="font-epicene-display font-light uppercase leading-[1.08] text-[40px] md:text-[54px] lg:text-[64px]">
            Our Offerings
          </h1>
          <div className="mt-4 h-px w-14 bg-[#D9D5CF]" />
          <p className="mt-6 max-w-3xl font-newsreader text-[16.5px] leading-[1.9] text-charcoal/85">
            From creative direction to full‑service planning, we craft
            emotionally immersive weddings across iconic destinations—shaping
            every moment with intention, artistry, and care.
          </p>
        </div>
      </section>

      {/* Offerings grid */}
      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <OfferingCard
              title="Full‑Service Planning"
              blurb="Concept to celebration. Venue search, budget, timeline, vendor curation, and complete production management."
            />
            <OfferingCard
              title="Design & Styling"
              blurb="A cohesive visual language—florals, stationery, textiles, lighting, tablescapes, and spatial composition."
            />
            <OfferingCard
              title="Destination Logistics"
              blurb="Travel, hotels, guest comms, gifting, welcome events, transfers—meticulously coordinated door‑to‑door."
            />
            <OfferingCard
              title="Multi‑Day Experiences"
              blurb="Welcome parties, rehearsal dinners, day‑after brunches—curated sequences that feel effortless and intentional."
            />
            <OfferingCard
              title="Production & Vendor Management"
              blurb="We assemble and direct a world‑class team, ensuring timing, quality, and harmony from setup to strike."
            />
            <OfferingCard
              title="On‑Site Coordination"
              blurb="White‑glove execution with a calm, present team—so you can simply be with your people."
            />
          </div>

          {/* CTA */}
          <div className="mt-16 flex items-center justify-between gap-6 flex-wrap">
            <p className="font-newsreader text-[16.5px] text-charcoal/85">
              Ready to begin? Share your story and we’ll craft a tailored plan.
            </p>
            <Link
              href="/inquire"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#C2A770] hover:bg-[#B79A63] transition-colors text-white tracking-[0.2em] uppercase text-sm font-lora"
            >
              Start Your Inquiry
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function OfferingCard({ title, blurb }: { title: string; blurb: string }) {
  return (
    <div className="group rounded-none border border-[#E6E1D9] bg-ivory p-6 md:p-8 hover:shadow-sm transition">
      <h3 className="font-playfair-display text-2xl md:text-[28px] leading-snug mb-3">
        {title}
      </h3>
      <p className="font-lora text-[15.5px] leading-[1.9] text-charcoal/80">
        {blurb}
      </p>
      <div className="mt-5 h-px w-10 bg-[#D9D5CF]" />
    </div>
  );
}
