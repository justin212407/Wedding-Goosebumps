"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

const HERO = {
  src: "/about-page/slide1/1.jpg", // keep as-is (add extension if needed)
  width: 1200,
  height: 1400,
  alt: "Elegant outdoor table setting",
};

export default function GalleriesPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Navigation />

      {/* ────────────────────────────── SLIDE 1 — Triple-image hero */}
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

      {/* ────────────────────────────── SLIDE 2 — Two cards */}
      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-[900px] px-6 grid gap-16 md:gap-10 md:grid-cols-2">
          <GalleryCard
            img="/galleries-page/headers/tanya.jpg"
            heading="Crafted with love "
            subheading="Tanya and Aayush"
            slug="1"
          />
          <GalleryCard
            img="/galleries-page/headers/tatsav.jpg"
            heading="Timeless modern traditions"
            subheading="Tatsav & Vidhi"
            slug="2"
          />
          <GalleryCard
            img="/galleries-page/headers/ashish.jpg"
            heading="Ethereal floral elegance"
            subheading="Ashish and Juhi"
            slug="3"
          />
          <GalleryCard
            img="/galleries-page/headers/harshil.jpg"
            heading="Vibrant wedding luxury"
            subheading="Shashank & Muskan"
            slug="4"
          />
        </div>
      </section>

      {/* ────────────────────────────── SLIDE 3 — Full-bleed video */}
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

      {/* ────────────────────────────── SLIDE 2 — Two cards */}
      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-[900px] px-6 grid gap-16 md:gap-10 md:grid-cols-2">
          <GalleryCard
            img="/galleries-page/headers/mohit.jpg"
            heading="Culture meets joy"
            subheading="Mohit & Hitika"
            slug="5"
          />
          <GalleryCard
            img="/galleries-page/headers/dharam.jpg"
            heading="A majestic romance"
            subheading="Harshil & Akanksha"
            slug="6"
          />
          <GalleryCard
            img="/galleries-page/headers/saval.jpg"
            heading="Royal timeless luxury"
            subheading="Dharam & Rajivi "
            slug="7"
          />
          <GalleryCard
            img="/galleries-page/headers/mukesh.jpg"
            heading="Love through laughter"
            subheading="Saval & Romil "
            slug="8"
          />
          <GalleryCard
            img="/galleries-page/headers/ivan.jpg"
            heading="A global love"
            subheading="Ivan & Maria"
            slug="9"
          />
          <GalleryCard
            img="/galleries-page/headers/riya.jpg"
            heading="Heritage in elegance"
            subheading="Mukesh and Yamini"
            slug="10"
          />
        </div>
      </section>

      <section className="bg-ivory pt-24 lg:pt-32 pb-16">
        {/* — Heading & intro copy */}
        <div className="container mx-auto px-6 lg:px-8 text-center mb-2">
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
        <div className="mx-auto max-w-[1200px] px-3 lg:px-5">
          <figure className="relative w-full">
            <Image
              src={HERO.src}
              alt={HERO.alt}
              width={HERO.width}
              height={HERO.height}
              className="w-full h-auto max-h-[60vh] object-contain"
              priority
            />
          </figure>
        </div>
      </section>

      <section className="bg-ivory text-charcoal py-13 sm:py-23">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-commuter-sans text-[13px] uppercase tracking-[0.3em] text-charcoal/80">
            ABOUT WEDDING GOOSEBUMPS
          </h2>
          <div className="h-[2.5px] w-30 bg-[#D9D5CF]" />

          <p className="mt-6 font-lora text-[18px] md:text-[19px] leading-[1.9]">
            Wedding Goosebump is a premier wedding designing and planning studio
            based in India, specializing in crafting soul-stirring luxury
            destination weddings across Europe, the Middle East, and India. From
            the shores of Lake Como to the royal palaces of Rajasthan,&nbsp;
            <em className="italic">
              we turn once-in-a-lifetime moments into emotionally immersive
              celebrations.
            </em>{" "}
            We take the stress out of planning a wedding away from home. Our expert
            team bridges cultures, languages, and local nuances — handling
            everything from logistics to luxury detailing with precision and heart.
            Whether you dream of a cliffside vow in Santorini or a regal baraat in
            Jaipur, we’re here to turn your vision into goosebump-worthy reality.
          </p>

          <Link href="/offerings" className="inline-block mt-2">
            <span className="font-commuter-sans text-[12px] uppercase tracking-[0.3em] text-gold border-b-[1.5px] border-gold pb-1">
              OUR OFFERINGS
            </span>
          </Link>
        </div>
      </section>

      {/* ────────────────────────────── SLIDE 3 — Full-bleed video */}
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
  slug, // ← use slug instead of href
}: {
  img: string;
  heading: string;
  subheading: string;
  slug: string;
}) {
  return (
    <article>
      <Link href={`/galleries/${slug}`} className="group block">
        <div className="relative w-full aspect-[3/4] bg-[#efe9df] overflow-hidden">
          {/* Keep object-cover here for thumbnail styling */}
          <Image src={img} alt={heading} fill className="object-cover group-hover:scale-[1.01] transition-transform" />
        </div>

        <h3 className="mt-6 font-epicene-display uppercase text-[20px] md:text-[22px] tracking-[0.02em]">
          {heading}
        </h3>

        <div className="mt-3 h-[2px] w-16 bg-charcoal/15" />

        <p className="mt-3 text-[12px] tracking-[0.25em] uppercase text-charcoal/70">
          {subheading}
        </p>
      </Link>
    </article>
  );
}
