import HeroVideo from '@/components/sections/hero-video';
import Navigation from '@/components/sections/navigation';
import OfferingsSection from '@/components/sections/offerings';
import GallerySection from '@/components/sections/gallery';
import ScrollVideo1 from '@/components/sections/scroll-video-1';
import AboutSection from '@/components/sections/about';
import ImageSection2025 from '@/components/sections/image-section-2025';
import ServiceLevelSection from '@/components/sections/service-level';
import ScrollVideo3 from '@/components/sections/scroll-video-3';
import KindWords from '@/components/sections/kind-words';
import JournalSection from '@/components/sections/journal';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroVideo />
      <GallerySection />
      <OfferingsSection />
      <ScrollVideo1 />
      <ImageSection2025 />
      <ServiceLevelSection />
      <KindWords />
      <JournalSection />
      <ScrollVideo3 />
      <Footer />
    </main>
  );
}