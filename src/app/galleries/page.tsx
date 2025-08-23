"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

const HERO = {
  src: "/galleries-page/slide1/main", // change to your preferred image
  width: 600,                  // use the image's real dimensions if you can
  height: 800,
  alt: "Elegant outdoor table setting",
};

/**
 * ASSETS
 * Place files in /public/galleries/…  (or change the paths below)
 *
 * /public/galleries/hero-1.jpg
 * /public/galleries/hero-2.jpg
 * /public/galleries/hero-3.jpg
 *
 * /public/galleries/pair-1a.jpg
 * /public/galleries/pair-1b.jpg
 * /public/galleries/pair-2a.jpg
 * /public/galleries/pair-2b.jpg
 *
 * /public/galleries/kind-left-a.jpg
 * /public/galleries/kind-left-b.jpg
 * /public/galleries/kind-right-tall.jpg
 *
 * /public/videos/galleries-hero.mp4
 */

export default function GalleriesPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Navigation />

      {/* ────────────────────────────── SLIDE 1 — Triple‑image hero */}
      <section className="relative w-screen h-[85vh] lg:h-[100vh] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
          <div className="relative">
            <Image src="/galleries-page/slide1/1.jpg" alt="Gallery hero 1" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/15" />
          </div>
          <div className="relative hidden md:block">
            <Image src="/galleries-page/slide1/2.jpg" alt="Gallery hero 2" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/15" />
          </div>
          <div className="relative hidden md:block">
            <Image src="/galleries-page/slide1/3.jpg" alt="Gallery hero 3" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="uppercase tracking-[0.35em] text-[11px] text-white/85 mb-3">Explore the</p>
            <h1 className="font-epicene-display text-white/95 uppercase leading-tight text-[34px] sm:text-[44px] md:text-[56px]">
              Galleries
            </h1>
          </div>
        </div>
      </section>

      {/* ────────────────────────────── SLIDE 2 — Two cards (like reference) */}
      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-[900px] px-6 grid gap-16 md:gap-10 md:grid-cols-2">
          <GalleryCard
            img="/galleries-page/headers/tanya.jpg"
            heading="Crafted with love "
            subheading="Tanya and Aayush"
            href=""
          />
          <GalleryCard
            img="/galleries-page/headers/tatsav.jpg"
            heading="Timeless modern traditions"
            subheading="Tatsav & Vidhi"
            href="/gallery/elopement-greece"
          />
          <GalleryCard
            img="/galleries-page/headers/ashish.jpg"
            heading="Ethereal floral elegance"
            subheading="Shashank & Muskan"
            href="/gallery/destination-languedoc"
          />
          <GalleryCard
            img="/galleries-page/headers/harshil.jpg"
            heading="Vibrant wedding luxury"
            subheading="Harshil & Akanksha"
            href="/gallery/elopement-greece"
          />
        </div>
      </section>

      {/* ────────────────────────────── SLIDE 3 — Full‑bleed video */}
      <section className="relative w-screen h-[70vh] md:h-[100vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/galleries-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* ────────────────────────────── SLIDE 2 — Two cards (like reference) */}
      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-[900px] px-6 grid gap-16 md:gap-10 md:grid-cols-2">
        <GalleryCard
            img="/galleries-page/headers/mohit.jpg"
            heading="Culture meets joy"
            subheading="Mohit & Hitika"
            href="/gallery/elopement-greece"
          />
          <GalleryCard
            img="/galleries-page/headers/dharam.jpg"
            heading="A majestic romance"
            subheading="Dharam & Rajivi"
            href="/gallery/elopement-greece"
          />
          <GalleryCard
            img="/galleries-page/headers/saval.jpg"
            heading="Royal timeless luxury"
            subheading="Saval & Romil"
            href="/gallery/elopement-greece"
          />
          <GalleryCard
            img="/galleries-page/headers/mukesh.jpg"
            heading="Love through laughter"
            subheading="Mukesh & Yamini"
            href="/gallery/elopement-greece"
          />
          <GalleryCard
            img="/galleries-page/headers/ivan.jpg"
            heading="A global love"
            subheading="Ivan & Maria"
            href="/gallery/elopement-greece"
          />
          <GalleryCard
            img="/galleries-page/headers/riya.jpg"
            heading="Heritage in elegance"
            subheading=" Riya & Shivam"
            href="/gallery/elopement-greece"
          />
        </div>
      </section>

  return (
    <section className="bg-ivory pt-24 lg:pt-32 pb-16">
      {/* — Heading & intro copy */}
      <div className="container mx-auto px-6 lg:px-8 text-center mb-6">
        <h3 className="font-commuter-sans font-normal text-sm uppercase tracking-[0.3em] text-charcoal mb-1">
          WE CREATE
        </h3>

        <h2 className="font-[Epicene_Display] font-light uppercase text-charcoal text-4xl lg:text-5xl xl:text-6xl mb-2 leading-tight tracking-tight">
          <span className="font-cormorant" style={{ fontWeight: 60 }}>
            unforgettable
          </span>{" "}
          <span className="font-cormorant" style={{ fontWeight: 60 }}>
            experiences
          </span>
        </h2>

        <p className="mx-auto max-w-2xl font-lora text-lg leading-relaxed text-charcoal">
          Wedding Goosebumps is a full-service{" "}
          <em className="italic">luxury wedding design and planning studio,</em>{" "}
          crafting emotionally immersive, couture destination weddings across
          the world’s most iconic locations.
        </p>
      </div>

      {/* — Single image, centered, responsive, no cropping */}
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <figure className="relative w-full">
          <Image
            src={HERO.src}
            alt={HERO.alt}
            width={HERO.width}
            height={HERO.height}
            // No cropping: keep natural aspect ratio
            className="w-full h-auto max-h-[60vh] object-contain" 
            priority
          />
        </figure>
      </div>
      </section>
    );

      {/* ────────────────────────────── SLIDE 3 — Full‑bleed video */}
      <section className="relative w-screen h-[70vh] md:h-[100vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/galleries-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>


      <Footer />
    </main>
  );
}

/* One gallery card resembling the reference layout */
function GalleryCard({
  img,
  heading,
  subheading,
  href,
}: {
  img: string;
  heading: string;
  subheading: string;
  href: string;
}) {
  return (
    <article>
      <Link href={href} className="group block">
        <div className="relative w-full aspect-[3/4] bg-[#efe9df] overflow-hidden">
          {/* Use object-contain so images don’t get cropped; change to object-cover if you prefer */}
          <Image src={img} alt={heading} fill className="object-cover group-hover:scale-[1.01] transition-transform" />
        </div>

        <h3 className="mt-6 font-epicene-display uppercase text-[20px] md:text-[22px] tracking-[0.02em]">
          {heading}
        </h3>

        {/* thin underline */}
        <div className="mt-3 h-[2px] w-16 bg-charcoal/15" />

        <p className="mt-3 text-[12px] tracking-[0.25em] uppercase text-charcoal/70">
          {subheading}
        </p>
      </Link>
    </article>
  );
}
