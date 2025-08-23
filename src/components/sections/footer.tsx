import Link from 'next/link';

const navLinks = [
  { name: 'Inquire', href: '/inquire' },
  { name: 'Galleries', href: '/galleries' },
  { name: 'Offerings', href: '/offerings' },
  { name: 'About', href: '/about' },
  { name: 'Home', href: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-ivory text-charcoal font-lora">
      <div className="container mx-auto px-5 sm:px-10 pt-32 pb-12 text-center">

        <div className="mb-12">
          <h2 className="font-playfair-display text-[42px] sm:text-5xl md:text-6xl tracking-tight text-charcoal leading-none">
            Wedding Goosebumps
          </h2>
          <p className="mt-4 text-[9px] sm:text-xs uppercase tracking-[0.3em] font-light">
            Planning + Design
          </p>
        </div>

        <p className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Wedding Goosebumps is a{' '}
          <em className="font-serif">full service destination wedding planning and design agency</em>{' '}
          that specializes in creating elegant and exclusive weddings across France.
        </p>

        <div className="mt-12">
          <Link href="/inquire" className="inline-block bg-[#dedad3] hover:bg-[#d4cdc4] transition-colors duration-300 px-10 py-5 text-charcoal text-xs font-normal uppercase tracking-[0.2em]">
            Inquire to begin your experience
          </Link>
        </div>

        <div className="mt-32 max-w-[1240px] mx-auto">
          <nav className="mb-8">
            <ul className="flex items-center justify-center gap-x-6 md:gap-x-10 flex-wrap gap-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="text-right my-8">
             <a href="#" className="text-xs uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors duration-300">
                Back to the top
             </a>
          </div>

          <div className="w-full h-px bg-charcoal/20 my-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs uppercase tracking-[0.1em]">
            <p className="mb-2 md:mb-0">
              copyright 2025 wedding goosebumps
            </p>
            <p>
              <a href="https://withgraceandgold.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">
                brand and web design by with grace and gold
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
