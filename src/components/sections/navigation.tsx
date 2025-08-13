"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "OFFERINGS", href: "/offerings" },
  { name: "GALLERIES", href: "/galleries" },
  { name: "JOURNAL", href: "/journal" },
  { name: "INQUIRE", href: "/inquire" },
];

const LOGO_URL = "/logo/logo.svg";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        } ${isMenuOpen ? '!opacity-100 !translate-y-0 !pointer-events-auto' : ''}`}
      >
        <div className={`transition-colors duration-300 ${isMenuOpen ? 'bg-ivory' : 'bg-ivory/90 backdrop-blur-md'}`}>
          <div className="mx-auto flex h-[88px] max-w-[1700px] items-center justify-between px-6 sm:px-10 lg:px-16">
            <Link href="/" className="
     relative z-50 
     h-24 md:h-30  
     w-60 md:w-60   
     shrink-0
   ">
              <Image
                src={LOGO_URL}
                alt="Jennifer Fox logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-10">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-lora text-[11px] font-normal tracking-[0.2em] text-charcoal transition-colors duration-300 hover:text-gold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-50 text-charcoal lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 bg-ivory transition-opacity duration-500 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center pt-[88px]">
          <ul className="flex flex-col items-center gap-y-8">
            {navLinks.map((link) => (
              <li key={`${link.name}-mobile`}>
                <Link
                  href={link.href}
                  className="font-lora text-sm tracking-[0.2em] text-charcoal"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}