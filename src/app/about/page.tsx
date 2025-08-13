"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";

const LOGO_URL = "/logo/logo.svg";

function Slide({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Normal page sections (no snap / full-screen locking)
  return (
    <section className={`py-24 lg:py-32 bg-ivory text-charcoal ${className}`}>
      <div className="mx-auto w-full max-w-[1200px] px-6">{children}</div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-ivory text-charcoal">
      {/* Navbar (on top) */}
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Slide 1: full‑bleed image on the left (kept as-is) */}
      <section className="pt-0 pb-16 lg:pt-0 lg:pb-24 bg-ivory text-charcoal">
        {/* Full‑bleed wrapper that ignores the usual max‑width and padding */}
        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <div className="grid gap-8 lg:grid-cols-[600px_1fr] 2xl:grid-cols-[640px_1fr] items-start">
            {/* LEFT: big image, touches the viewport's left edge */}
            <div className="relative h-[100vh] lg:h-[105vh] bg-[#efe9df]">
              <Image
                src="/about-page/slide1/main.jpg"
                alt="Wedding Goosebumps"
                fill
                className="object-cover object-[50%_1%]"
                priority
              />
            </div>

            {/* RIGHT: content stays on your normal grid/measure */}
            <div className="px-6 lg:px-0 pr-6">
              {/* Optional wordmark area (centered, like your reference) */}
              <div className="text-center mb-8">
                <h2 className="font-commuter-sans text-[13px] tracking-[0.3em] uppercase pt-4">
                  WEDDING GOOSEBUMPS
                </h2>
              </div>

              {/* Four images row */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 pr-6">
  {[
    "/about-page/slide1/1.jpg",
    "/about-page/slide1/2.jpg",
    "/about-page/slide1/4.jpg",
    "/about-page/slide1/3.jpg",
  ].map((src, i) => (
    <div
      key={i}
      className="relative aspect-[3/4] bg-[#efe9df] p-2" // portrait ratio + padding
    >
      <Image
        src={src}
        alt={`Gallery ${i + 1}`}
        fill
        className="object-cover"
      />
    </div>
  ))}
</div>


              {/* Headline + subcopy */}
              <div className="max-w-[680px]">
                <h1 className="font-epicene-display font-light uppercase leading-[1.08] text-[36px] md:text-[48px] lg:text-[56px]">
                  WEDDING <br /> GOOSEBUMPS
                </h1>
                <p className="mt-4 font-commuter-sans text-[12px] md:text-[13px] uppercase tracking-[0.3em] text-charcoal/85">
                  FULL SERVICE DESTINATION WEDDING AND <br />
                  DESIGN BOUTIQUE 
                </p>
                <div className="mt-6 h-[2px] w-16 bg-[#D9D5CF]" />
                <p className="mt-6 font-newsreader text-[16.5px] leading-[1.95] text-charcoal/90">
                  We serve a discerning global clientele who seek more than just a wedding
                  <i>— they seek an unforgettable experience.</i> From first vision to final toast,
                  we navigate cultures, traditions, and trends with ease, creating
                  celebrations that are seamless, soulful, and spectacular in every detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2 */}
      <Slide>
      <div className="grid gap-10 lg:grid-cols-[520px_1fr] items-center">
  <div className="relative aspect-[3/4] bg-[#efe9df]">
    <Image src="/about-page/slide2/Photo.jpg" alt="Ali Waris Khan" fill className="object-cover" />
  </div>
  <div>
    <h3 className="font-newsreader text-[18px] md:text-[20px] italic text-charcoal/80 mb-8">
      Ali has been creating luxury weddings and events since 2010
    </h3>
    <h2 className="font-epicene-display font-light uppercase text-[32px] md:text-[42px] leading-[1.1] mb-8">
      His approach to wedding planning and design
    </h2>
    <p className="font-newsreader text-[16.5px] leading-[1.95] text-charcoal/90 mb-8">
      With over 15 years in the luxury wedding world, Ali Waris Khan has become one of the most
      trusted names in destination wedding planning and design across India and beyond. His approach
      is rooted in a deep respect for each couple’s story, blending meticulous planning with an
      intuitive sense of style and emotion. Over the years, he has built strong relationships with
      the finest venues, artisans, and creative collaborators, ensuring every celebration is not only
      flawlessly executed but also a true reflection of the couple’s personality, heritage, and
      dreams. He offers a truly hands‑on experience, accepting a limited number of weddings per year
      to give 100% attention to each couple.
    </p>
  </div>
</div>
      </Slide>

{/* Slide 3 — Framed statement panel (smaller version) */}
<Slide>
  <div className="w-full">
    <div className="mx-auto max-w-4xl bg-white border border-charcoal/10 shadow-sm px-6 md:px-10 py-10 md:py-14">

      {/* top divider with monogram */}
      <div className="flex items-center gap-6 mb-6">
        <div className="h-px flex-1 bg-charcoal/20" />
        <span className="font-epicene-display italic text-2xl md:text-3xl text-[#B5A484]"><Image
                src={LOGO_URL}
                alt="Jennifer Fox logo"
                fill
                className="object-contain"
                priority
              /></span>
        <div className="h-px flex-1 bg-charcoal/20" />
      </div>

      {/* small uppercase kicker */}
      <p className="text-center font-commuter-sans text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-charcoal/70 mb-4">
        WE OFFER BESPOKE EVENT PLANNING SERVICES
      </p>

      {/* big centered headline (reduced size) */}
      <h3 className="text-center font-newsreader uppercase text-charcoal leading-[1.6] tracking-[0.08em] text-[15px] md:text-[18px] lg:text-[20px] max-w-3xl mx-auto">
        TAILORED TO FIT THE NEEDS OF HIS CLIENTS AND GOES ABOVE AND
        BEYOND TO CRAFT A SEAMLESSLY EXECUTED WEDDING PLANNING AND
        DESIGN EXPERIENCE FOR HIS COUPLES AND THEIR GUESTS.
      </h3>

      {/* button (kept your styling) */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/inquire"
          className="inline-flex items-center justify-center px-10 py-3 bg-[#C2A770] hover:bg-[#B79A63] transition-colors text-white tracking-[0.18em] uppercase text-xs md:text-sm font-lora"
        >
          GET IN TOUCH
        </Link>
      </div>
    </div>
  </div>
</Slide>

{/* Slide 4 — edge‑to‑edge images, centered copy */}
<Slide className="py-20 lg:py-28">
  {/* full-bleed so edge images can hit margins */}
  <div className="w-screen relative left-1/2 -translate-x-1/2">
    {/* 3 cols: [slim left image] [text (with label pinned)] [right image] */}
    <div className="grid items-start gap-y-10 gap-x-8 lg:grid-cols-[minmax(260px,200px)_minmax(640px,1fr)_minmax(420px,560px)]">
      {/* LEFT IMAGE (slimmer) */}
      <div className="relative h-[44vh] md:h-[50vh] lg:h-[56vh] bg-[#efe9df]">
        <Image
          src="/about-page/slide4/1.jpg"
          alt="Earlier work"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* TEXT BLOCK (label is pinned to its left) */}
      <div className="relative px-6 lg:px-8">
        {/* Pinned vertical label + underline */}
        {/* Pinned vertical label + underline */}
{/* Pinned vertical label with full underline */}
<div className="pointer-events-none absolute -left-2 lg:-left-3 top-1">
  <span
    className="block text-[11px] tracking-[0.35em] uppercase text-charcoal/60 border-b border-charcoal/40 pb-1"
    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
  >
    HOW IT ALL STARTED
  </span>
</div>



        <h3 className="font-epicene-display font-light uppercase text-[28px] md:text-[34px] leading-[1.15] mb-5">
          Prior to starting his own business,
        </h3>

        <p className="font-newsreader text-[16.5px] leading-[1.95] text-charcoal/90">
          Before founding Wedding Goosebumps, Ali spent years as the Director of a
          leading events and entertainment company, delivering spectacular celebrations
          across India and abroad. This role refined his <em>expertise in managing large-scale,
          high-profile events with precision, creativity, and cultural sensitivity.</em> His ability
          to remain calm under pressure, think strategically, and adapt seamlessly to
          diverse settings ensures every wedding — whether in a royal palace, a serene
          beach resort, or an international destination — is flawlessly executed. Paired with
          his innate design sensibility and passion for storytelling, Ali offers couples a
          world-class, five-star experience that transcends borders.
        </p>

        <div className="mt-8">
          <Link
            href="/inquire"
            className="inline-flex items-center justify-center px-8 py-3 border border-[#C2A770] text-[#C2A770] hover:bg-[#C2A770] hover:text-white transition-colors tracking-[0.2em] uppercase text-xs font-lora"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE (tall, flush right) */}
      <div className="relative h-[64vh] md:h-[100vh] lg:h-[100vh] bg-[#efe9df]">
        <Image
          src="/about-page/slide4/2.jpg"
          alt="Events"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</Slide>


      {/* Slide 5 */}
      <Slide className="p-0 m-0">
  <div className="w-screen h-screen relative left-1/2 -translate-x-1/2">
    <video
      src="https://www.dailymotion.com/embed/video/x8iwzz4?autoplay=1&mute=1&quality=1080"
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    />
  </div>
</Slide>

      {/* Slide 6 — Kind words: edge-to-edge images + centered testimonial */}
<Slide className="py-20 lg:py-28">
  {/* full-bleed wrapper so left/right images can touch the page edges */}
  <div className="w-screen relative left-1/2 -translate-x-1/2">
    {/* [left image] [center text] [right image] with equal inner gaps */}
    <div className="grid items-center gap-y-12 gap-x-12 lg:grid-cols-[minmax(280px,200px)_minmax(640px,1fr)_minmax(420px,560px)]">
      {/* LEFT IMAGE — flush to left margin */}
      <div className="relative h-[42vh] md:h-[48vh] lg:h-[60vh] bg-[#efe9df]">
        <Image
          src="/about-page/slide6/1.jpg"      // left image
          alt="Detail A"
          fill
          className="object-cover"
        />
      </div>

      {/* CENTER: testimonial block */}
      <div className="relative">
        {/* vertical label + thin rule on the right side */}
        <div className="hidden md:flex absolute right-0 top-8 bottom-8 items-center">
          <div className="h-full w-px bg-charcoal/15" />
          <span
            className="ml-3 text-[11px] tracking-[0.35em] uppercase text-charcoal/50"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            KIND WORDS
          </span>
        </div>

        {/* content */}
          <div className="px-6 sm:px-10 lg:px-14 py-10 lg:py-14">
            <div className="max-w-3xl ml-auto text-right">
              <blockquote className="font-epicene-display text-charcoal text-[28px] md:text-[36px] lg:text-[42px] leading-tight mb-8">
                “Ali is truly a one-of-a-kind planner.”
              </blockquote>
              <p className="font-newsreader text-[16.5px] leading-[1.95] text-charcoal/90">
              It would be an understatement to say he was instrumental in bringing our wedding vision to
              life. Our planning journey with him was effortless, enjoyable, and completely stress-free.
              Thank you, Ali, for turning our special day into an unforgettable celebration.
              </p>
            </div>
          </div>
        </div>

      {/* RIGHT IMAGE — flush to right margin */}
      <div className="relative h-[64vh] md:h-[72vh] lg:h-[100vh] bg-[#efe9df]">
        <Image
          src="/about-page/slide6/main.jpg"   // right image
          alt="Testimonial main"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </div>
</Slide>


      {/* Slide 7 */}
      {/* Slide — Two Images */}
<Slide className="!py-0">
  <div className="grid gap-8 lg:grid-cols-2">
    <div className="relative aspect-[3/4] bg-[#efe9df]">
      <Image src="/about-page/slide7/1.jpg" alt="Gallery Left" fill className="object-cover" />
    </div>
    <div className="relative aspect-[3/4] bg-[#efe9df]">
      <Image src="/about-page/slide7/2.jpg" alt="Gallery Right" fill className="object-cover" />
    </div>
  </div>

  {/* Text section */}
  <div className="relative py-12 lg:py-16 px-6 sm:px-10 lg:px-20 flex flex-col items-start">
    

    {/* Vertical right label */}
    <div className="absolute right-0 top-0 bottom-0 flex items-center">
      <div className="h-full w-px bg-charcoal/15" />
      <span
        className="ml-3 text-[11px] tracking-[0.35em] uppercase text-charcoal/50"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        of
      </span>
    </div>

    {/* Main text */}
    <p className="uppercase tracking-[0.25em] text-[12px] text-charcoal/70 font-commuter-sans mb-3">
      WE BELIEVE IN
    </p>
    <h2 className="font-epicene-display text-[38px] md:text-[48px] leading-tight text-charcoal mb-4">
      APPROACHABILITY
    </h2>
    <p className="font-newsreader text-[16.5px] leading-[1.95] text-charcoal/90 max-w-3xl">
      Our goal is to provide our clients with the utmost level of service throughout the planning
      and design process as there is never a question too big or too small.
    </p>

    {/* Link */}
    <Link
      href="#"
      className="mt-8 text-[12px] uppercase tracking-[0.25em] border-b border-charcoal/50 pb-1 hover:border-charcoal transition-colors"
    >
      See next value
    </Link>
  </div>
</Slide>


{/* Slide 8 — centered overlay on full image */}
<Slide className="relative !py-0 w-screen left-1/2 -translate-x-1/2 h-[90vh] overflow-hidden">
  {/* Full background image */}
  <Image
    src="/about-page/slide8/main.jpg"
    alt="Inquire Background"
    fill
    className="object-cover object-[50%_35%]" /* adjust focal point as needed */
    priority
  />

  {/* Centered overlay – styled like your reference */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white [&_*]:!text-white">
  <h2
    className="
      font-epicene-display font-light uppercase
      tracking-[0.08em] leading-[1.06]
      text-[28px] md:text-[40px] lg:text-[48px]
      drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
    "
  >
    Inquire to begin
  </h2>

  <Link
    href="/inquire"
    className="
      relative mt-3 inline-block
      font-commuter-sans uppercase tracking-[0.28em]
      text-[10px] md:text-[11px]
      after:content-[''] after:block after:h-[1px] after:bg-white/90
      after:mt-2 after:w-[110%] after:mx-auto after:translate-x-[-5%]
      hover:after:bg-white transition
    "
  >
    Work with Jennifer
  </Link>
</div>


</Slide>


    </main>
  );
}
