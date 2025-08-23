"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { useEffect, useRef, useState } from "react";

/**
 * NOTE ABOUT ASSETS
 * Put your images in /public/offerings/...
 * Replace the placeholder filenames below with your real assets when ready.
 *
 * Examples used here:
 * /public/offerings/hero.jpg
 * /public/offerings/gallery-01.jpg ... gallery-10.jpg
 * /public/offerings/approach.jpg
 * /public/offerings/destination.jpg
 * /public/offerings/collateral.jpg
 * /public/offerings/decor.jpg
 * /public/offerings/moments.jpg
 * /public/offerings/culinary.jpg
 * /public/offerings/cta-1.jpg
 * /public/offerings/cta-2.jpg
 */

const gallery = Array.from({ length: 10 }).map((_, i) => ({
  src: `/offerings/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Gallery ${i + 1}`,
}));

function TextSlideshow() {
  const slides = [
    {
      heading: "DESTINATION WEDDINGS",
      paras: [
        `At Wedding Goosebumps, we specialize in curating unforgettable destination weddings across India and abroad. Whether you envision a royal celebration in a grand palace, a charming affair in a heritage haveli, or a serene escape in a luxury resort—our team ensures the perfect venue that matches your dream. We offer expert guidance in selecting the finest hotels and properties across India, from the regal elegance of Jaipur, Udaipur in Rajasthan to the coastal charm of Goa and the tranquil hills of the Himalayas. Our curated destinations are known for their exceptional hospitality, ambience, and picturesque backdrops.`,
        `For those seeking an international flair, we also organize exquisite weddings at handpicked global destinations. Be it a beachside celebration in Bali or Phuket, a romantic Tuscan countryside wedding, or a chic ceremony in Dubai or the Maldives—we bring your vision to life with elegance and ease. With Wedding Goosebumps, your wedding becomes more than an event—it becomes a destination experience.`
      ]
    },
    {
      heading: "Bespoke Wedding Collateral Design",
      paras: [
        `At Wedding Goosebump, our bespoke wedding collateral design service is a rare, highly exclusive offering crafted for couples who want every detail of their celebration to speak only of them. We translate your journey into a signature visual identity — designing bespoke couple monograms, customised illustrations, and themed artwork that flow seamlessly across every element.`,
        `From animated e-invites, handcrafted wedding cards, and save-the-dates to welcome boards, floral cones, return gift tags, wedding bells, menu cards, favour labels, and seating charts — every piece is curated to match your colours, mood board, and décor. This is not just collateral; it’s an immersive extension of your story, ensuring your guests experience your personality and style at every touchpoint, down to the very last detail.`
      ]
    },
    {
      heading: "DESIGN & DECOR",
      paras: [
        `At Wedding Goosebump, design and décor aren’t just elements of your celebration — they are the very soul of it. We specialize in creating complete, immersive themes, where every detail, from the grandest installation to the smallest accent, is meticulously curated to reflect your personality, heritage, and vision.`,
        `Our team of creative designers, stylists, and visual artists blends the latest global trends, rich cultural aesthetics, and innovative concepts to deliver décor that is not only stunning but deeply personal. From opulent floral canopies and majestic entrances to sleek, modern setups and custom-built installations, every element is thoughtfully planned to create a seamless visual narrative.`,
        `Whether you dream of a royal celebration in a palace or a boho-chic beachfront affair, we ensure every texture, color, prop, and placement works in harmony — crafting a unique theme that is both awe-inspiring and emotionally resonant. With Wedding Goosebump, your décor doesn’t just set the tone for your wedding — it tells your story in the most breathtaking way`
      ]
    },
    {
      heading: "CAPTURING MOMENTS",
      paras: [
        `We believe the best moments are the ones you don’t have to stage. We won’t ask you to pose, laugh, or smile for the camera — instead, we quietly capture every genuine laugh, every tear, every embrace, exactly as it unfolds. Our lens becomes a silent witness, allowing you to live fully in your celebration without interruption.`,
        `Partnering with some of the finest photography and cinematography talents from across India and around the world, we bring a storytelling approach that blends artistry with emotion. From the sparkle in your eyes to the intricate details of your décor, every nuance of your big day is documented with precision and heart.`,
        `Whether it’s candid moments, cinematic films, traditional portraits, or pre-wedding shoots, we deliver timeless, soul-stirring visuals that will give you goosebumps for a lifetime. With Wedding Goosebump, your memories aren’t just captured — they are preserved in their purest, most beautiful form`
      ]
    },
    {
      heading: "CULINARY JOURNEYS, CRAFTED FOR YOU",
      paras: [
        `We understand that exceptional cuisine is at the heart of every memorable celebration. That’s why we collaborate with top culinary experts and renowned chefs to curate bespoke menus that delight every palate. From traditional Indian delicacies to global gourmet experiences, our food offerings are crafted with precision, creativity, and a flair for presentation.`,
        `Be it a Indian cuisine, or anything abroad, or a vibrant fusion buffet—we ensure every dish is a celebration in itself. With a focus on taste, quality, and seamless service, Wedding Goosebumps turns every meal into a gastronomic journey that your guests will savour long after the event is over.`
      ]
    }
  ];

  const [index, setIndex] = useState(0);
  const total = slides.length;

  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + total) % total);
  };

  return (
    <div className="lg:col-span-3">
      <p className="tracking-[0.25em] text-[12px] uppercase text-neutral-500">
        Our offerings
      </p>

      <h1 className="mt-3 font-playfair-display uppercase leading-[0.95] text-4xl md:text-5xl xl:text-[56px] text-neutral-900">
        From Vision to Vows — <br />
        DESIGN <span className="italic normal-case font-light">and</span> PLANNING
      </h1>

      <div className="mt-6 h-[2px] w-16 bg-neutral-300" />

      <p className="mt-6 max-w-2xl text-[15px] leading-7 text-neutral-700">
        To ensure our couples receive the finest planning experience and the dedicated attention they
        deserve, Wedding Goosebump offers full-service luxury wedding planning &amp; design.{" "}
        <span className="italic">
          This comprehensive approach covers every stage — from envisioning the concept to executing it
          flawlessly — allowing you to enjoy a truly seamless, stress-free, and unforgettable celebration.
        </span>{" "}
        Our full-service offering includes:
      </p>
{/* heading row with counter + arrows */}
<div className="mt-10">
  <div className="flex items-center gap-4">
    {/* left hairline (desktop like the ref) */}
    <span className="hidden lg:block h-px w-16 bg-neutral-300" />

    {/* counter */}
    <div className="tracking-[0.35em] text-[12px] uppercase text-neutral-500 whitespace-nowrap">
      {String(index + 1).padStart(2, "0")}{" "}
      <span className="mx-1 lowercase tracking-normal">of</span>{" "}
      {String(total).padStart(2, "0")}
    </div>

    {/* heading (takes remaining space so arrows sit at far right) */}
    <h3 className="flex-1 font-playfair-display uppercase text-[20px] md:text-[22px] leading-tight text-neutral-900 pl-2">
      {slides[index].heading}
    </h3>

    {/* arrows */}
    <div className="flex items-center gap-2">
      <button
        onClick={() => go(-1)}
        aria-label="Previous"
        className="h-8 w-8 rounded-full border border-neutral-300 grid place-items-center hover:bg-neutral-100"
      >
        ←
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next"
        className="h-8 w-8 rounded-full border border-neutral-300 grid place-items-center hover:bg-neutral-100"
      >
        →
      </button>
    </div>
  </div>

  {/* body copy (starts under the heading) */}
  <div className="mt-6 space-y-4 text-[15px] leading-7 text-neutral-700 max-w-2xl">
    {slides[index].paras.map((p: string, i: number) => (
      <p key={i}>{p}</p>
    ))}
  </div>

  {/* italic note */}
  <p className="mt-6 italic text-[13px] leading-6 text-neutral-600 max-w-2xl">
    As we are lovers of lists, we provide you with a customized planning
    checklist to keep you organized from the beginning of planning up until your
    wedding day. We create and manage your budget, payment schedules and
    timelines so you can enjoy a once-in-a-lifetime experience with your guests!
  </p>

  {/* link */}
  <Link
    href="#"
    className="mt-8 inline-block text-[12px] tracking-[0.25em] uppercase text-neutral-800 underline underline-offset-4"
  >
    Next offering
  </Link>
</div>


</div>
  );
}

export default function OfferingsPage() {
  // ── Slideshow state (for the centered slideshow above “Our approach”)
  const SLIDES = [
    "/offerings-page/slide-section/main.jpg",
    "/offerings-page/slide-section/1.jpg",
    "/offerings-page/slide-section/2.jpg",
    "/offerings-page/slide-section/3.jpg",
    "/offerings-page/slide-section/4.jpg",
  ];
  const [current, setCurrent] = useState(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (SLIDES.length <= 1) return;
    const id = setInterval(() => {
      if (!hoverRef.current) {
        setCurrent((i) => (i + 1) % SLIDES.length);
      }
    }, 3500);
    return () => clearInterval(id);
  }, [SLIDES.length]);

  return (
    <main className="bg-ivory text-charcoal">
      <Navigation />

      {/* ────────────────────────────── SLIDE 1 — HERO (1 pic) */}
      <section className="relative w-full h-[80vh] lg:h-[100vh] overflow-hidden">
        <Image
          src="/offerings-page/hero.jpg"
          alt="Full Service Luxury Wedding Design and Planning"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-center">
            <h1 className="font-epicene-display text-white/95 uppercase leading-tight text-[30px] sm:text-[40px] md:text-[52px] drop-shadow">
              FULL SERVICE<br />
              LUXURY WEDDING DESIGN AND PLANNING
            </h1>
            <p className="mt-4 font-lora tracking-[0.20em] text-white/90 uppercase text-xs">
              BY WEDDING GOOSEBUMPS
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: copy */}
          <div className="px-6 lg:pl-0 lg:pr-6">
            {/* Headline */}
            <h2 className="font-epicene-display uppercase leading-[1.08] text-[40px] md:text-[56px] lg:text-[64px] tracking-[0.01em] text-charcoal">
              Signature White glove
              <br />
              SERVICE <span className="italic normal-case font-epicene-display lowercase">for you</span>
            </h2>

            {/* Small uppercase line */}
            <p className="mt-1 text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-charcoal/70">
              BECAUSE WE ARE OBSESSIVELY DETAIL-DRIVEN AND METICULOUSLY ORGANIZED,{" "}
              <br className="hidden md:inline" />
              WE STAY TWO STEPS AHEAD AT EVERY MOMENT..
            </p>

            {/* thin rule */}
            <div className="mt-6 h-[2px] w-16 bg-charcoal/15" />

            {/* Body copy */}
            <p className="mt-8 font-lora text-[16.5px] leading-[1.95] text-charcoal/90 max-w-[56ch]">
              We design a<em>one of a kind concept and a flawless production plan,</em> ensuring we are present on the day to
              make every element come to life seamlessly. At Wedding Goosebump, we take pride in delivering a
              perfectly executed wedding planning and design experience <em>for you and your guests</em> — one that blends
              creativity with precision. With equal mastery in planning and design <em>we deeply value the significance of
              both,</em> ensuring every moment is handled with care, foresight, and unmatched attention to detail.
            </p>

            {/* CTA: underlined text link */}
            <Link
              href="/inquire"
              className="mt-8 inline-block text-[12px] tracking-[0.28em] uppercase text-charcoal"
            >
              WORK WITH US
              <span className="block h-[1px] w-40 bg-charcoal/30 mt-2 group-hover:bg-charcoal transition-colors" />
            </Link>
          </div>

          {/* RIGHT: image */}
          <div className="relative bg-[#efe9df] h-[100vh] md:h-[100vh] lg:h-[100vh]">
            <Image
              src="/offerings-page/2.jpg"
              alt="High touch service dining room"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ────────────────────────────── SLIDE 4 — Our Approach + CTA (with centered slideshow) */}
      <section className="py-20 md:py-24">
        {/* Centered slideshow container (shorter height, auto-advance) */}
        <div
          className="
          bg-grey/5
            mx-auto w-full max-w-[900px]
            mb-14
            relative overflow-hidden
            h-[600px] md:h-[680px] lg:h-[700px]
          "
          onMouseEnter={() => (hoverRef.current = true)}
          onMouseLeave={() => (hoverRef.current = false)}
        >
          {/* Slide track */}
          <div
            className="
              flex h-full
              transition-transform duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
            "
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {SLIDES.map((src, i) => (
              <div key={i} className="relative shrink-0 grow-0 basis-full h-full">
                <Image
                  src={src}
                  alt={`Wedding Detail ${i + 1}`}
                  fill
                  priority={i === 0}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
            {SLIDES.map((_, i) => {
              const active = i === current;
              return (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  
                  onClick={() => setCurrent(i)}
                />
              );
            })}
          </div>
        </div>

        {/* Text content */}
        <div className="mx-auto w-full max-w-[1050px] px-6 text-center">
          {/* small overline */}
          <p className="uppercase tracking-[0.35em] text-[11px] text-charcoal/60 mb-4">
            Our approach
          </p>

          {/* big headline */}
          <h2 className="font-epicene-display uppercase leading-[1.08] text-[34px] md:text-[48px] lg:text-[56px] text-charcoal">
            to flawless wedding celebrations
          </h2>

          {/* italic sub-headline */}
          <p className="mt-4 font-cormorant italic text-[18px] md:text-[20px] text-charcoal/85">
            Our Full-Service Luxury Wedding Planning approach ensures we handle every detail from the
            first idea to the final farewell.
          </p>

          {/* divider with monogram */}
          <div className="mt-8 flex items-center justify-center">
            <span className="block h-[1px] w-40 bg-charcoal/15" />
            <span className="block h-[1px] w-40 bg-charcoal/15" />
          </div>

          {/* body paragraph */}
          <p className="mt-8 font-lora text-[16.5px] leading-[1.95] text-charcoal/90 max-w-[920px] mx-auto">
            We take the time to understand you both — your personalities, your vision, and your story — and
            then craft a bespoke design concept that is a true reflection of who you are. With a handpicked
            team of world-class vendors, we bring that vision to life with precision and artistry. Your comfort,
            along with that of your guests, is our highest priority, and we go above and beyond to make sure
            your wedding is not only spectacular but also stress-free and flawlessly executed.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/inquire"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#C2A770] hover:bg-[#B79A63] transition-colors text-white tracking-[0.2em] uppercase text-xs font-lora"
            >
              Work with us
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────────────── SLIDE 6 — VIDEO (full‑bleed) */}
      <section className="relative w-full h-[70vh] md:h-[100vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/offerings-video.mp4" // place your mp4 in /public/videos
          autoPlay
          muted 
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/25" />
      </section>

      {/* ────────────────────────────── SLIDE 7 — 1 pic (or make it a simple gallery) */}
{/* ────────────────────────────── SLIDE 7 — 1 pic + TEXT SLIDESHOW */}
<section className="bg-white py-20 md:py-28">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">


      {/* LEFT: Text Slideshow */}
      <TextSlideshow />

      {/* RIGHT: Tall image */}
      <div className="lg:col-span-2">
        <div className="relative h-[1250px] md:h-[1250px] lg:h-[1250px] w-full">
          <Image
            src="/offerings-page/cta.jpg"
            alt="Outdoor reception table"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</section>


{/* ────────────────────────────── OUR PROCESS (filled layout, flush-left image) */}
<section className="bg-white">
  {/* Full-width grid so the left image can touch the viewport edge */}
  <div className="grid lg:grid-cols-[4fr_1fr]">
    {/* LEFT — Big image (flush left, fills height) */}
    <div className="relative h-[100vh] md:h-[130vh]">
      <Image
        src="/offerings-page/images-sec/main.jpg"   // ← your big image
        alt="Bridal party with bouquets"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* RIGHT — Content column */}
    <div className="px-6 md:px-10 lg:px-16 py-16">
      {/* Top thumbnails — larger, even sizing; scrolls on small screens */}
      <div className="-mx-1 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-12">
        <div className="min-w-[900px] grid grid-cols-5 gap-6 px-1">
          {[
            "/offerings-page/images-sec/1.jpg",
            "/offerings-page/images-sec/2.jpg",
            "/offerings-page/images-sec/3.jpg",
            "/offerings-page/images-sec/4.jpg",
            "/offerings-page/images-sec/5.jpg",
          ].map((src, i) => (
            <div key={i} className="relative aspect-[3/4] bg-[#efe9df] overflow-hidden">
              <Image src={src} alt={`Process detail ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Heading */}
      <h2 className="font-epicene-display uppercase leading-tight text-[32px] md:text-[44px] lg:text-[52px] text-charcoal">
        Our Process
      </h2>

      {/* Steps — full width, subtle separators to “fill” the column visually */}
      <ol className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10">
        {[
          "Reach out to Us",
          "Schedule a meeting",
          "Tell us your requirements",
          "Get a quote",
          "Finalize, sit back and relax",
        ].map((step, i) => (
          <li
            key={i}
            className="grid grid-cols-[120px_1fr] gap-6 py-5"
          >
            <span
  className="
    relative inline-flex items-center
    text-[12px] uppercase tracking-[0.45em]
    text-[#b6a78f]   /* soft taupe/greige */
    tabular-nums
    after:absolute after:left-0 after:-bottom-1
    after:h-px after:w-full after:bg-[#e9e2d8]  /* hairline under */
  "
>
  STEP&nbsp;{String(i + 1).padStart(2, "0")}
</span>


            <span className="font-lora text-[16.5px] leading-[1.9] text-charcoal/90">
              {step}
            </span>
          </li>
        ))}
      </ol>

      {/* CTA */}
      <div className="mt-10">
        <Link
          href="/inquire"
          className="inline-flex items-center justify-center px-10 py-4 bg-[#C2A770] hover:bg-[#B79A63] transition-colors text-white tracking-[0.2em] uppercase text-xs font-lora"
        >
          Work with Us
        </Link>
      </div>
    </div>
  </div>
</section>


{/* ────────────────────────────── SLIDE 9 — 2 tall pics + stacked heading + copy */}
<section className="py-20 md:py-28 bg-white">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Top row: two images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative h-[520px] md:h-[560px] lg:h-[830px] bg-[#efe9df]">
        {/* swap to your left photo */}
        <Image
          src="/offerings-page/pre-footer/1.jpg"
          alt="Celebration portrait"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative h-[520px] md:h-[560px] lg:h-[830px] bg-[#efe9df]">
        {/* you already have this one; keep or swap */}
        <Image
          src="/offerings-page/pre-footer/2.jpg"
          alt="Detail 1"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Bottom row: heading + copy */}
    {/* Bottom row: stacked display heading + refined body + skinny underline CTA */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
  {/* LEFT — stacked headline */}
  <div className="text-left">
    <h2
      className="
        font-epicene-display uppercase
        text-[34px] md:text-[52px] lg:text-[48px]
        leading-[1.04] tracking-[0.02em]
        text-neutral-900
      "
    >
      EXCEPTIONAL,<br />
      PERSONALIZED<br />
      ATTENTIVENESS
    </h2>

    {/* hairline divider under heading */}
    <div className="mt-4 h-px w-[340px] max-w-full bg-neutral-300/60" />
  </div>

  {/* RIGHT — body copy + cta */}
  <div className="max-w-[560px]">
    <p className="text-[18  px] leading-[2.0] text-neutral-800 font-lora">
      We accept a limited amount of select weddings per year, and offer tailor-made
      wedding planning and design services for an exclusive clientele. We&apos;ve
      designed, planned and produced every size of celebration from luxury elopements
      for 2 to large scale weddings for 200.
    </p>

    <Link
      href="/inquire"
      className="
        mt-4 inline-block text-[14px] tracking-[0.28em] uppercase
        text-neutral-900
        underline underline-offset-[6px] decoration-[1px]
        hover:opacity-80 transition-opacity
      "
    >
      Work with us
    </Link>
  </div>
</div>

  </div>
</section>

      {/* ────────────────────────────── SLIDE 10 — (Optional) video again */}
      { <section className="relative w-full h-[100vh] overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" src="/videos/offerings-outro.mp4" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-black/25" />
      </section> }

      <Footer />
    </main>
  );
}

/** One service row (image + copy) */
function ServiceBlock({
  title,
  copy,
  img,
  reverse,
}: {
  title: string;
  copy: string;
  img: string;
  reverse?: boolean;
}) {
  return (
    <div className={`container grid gap-10 lg:grid-cols-2 items-center ${reverse ? "lg:grid-flow-dense" : ""}`}>
      {/* image */}
      <div className={`relative h-[54vh] bg-[#efe9df] ${reverse ? "lg:order-2" : ""}`}>
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      {/* text */}
      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <h3 className="font-epicene-display uppercase text-[26px] md:text-[32px] leading-tight mb-4">
          {title}
        </h3>
        <p className="font-lora text-[16.5px] leading-[1.95] text-charcoal/90">
          {copy}
        </p>
      </div>
    </div>
  );
}
