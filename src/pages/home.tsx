import { lazy, Suspense } from "react";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import OrganizerCards from "@/components/OrganizerCards";
import Slider from "@/components/Slider";
import GallerySection from "@/components/GallerySection";

const ParticleField = lazy(() => import("@/components/ParticleField"));

const Home = () => {
  const handleSpeedUp = () => {
    // @ts-ignore
    window.__setParticleSpeed?.(true);
  };
  const handleSlowDown = () => {
    // @ts-ignore
    window.__setParticleSpeed?.(false);
  };

  const logoImages = [
    'https://picsum.photos/id/100/100/100',
    'https://picsum.photos/id/101/100/100',
    'https://picsum.photos/id/104/100/100',
    'https://picsum.photos/id/107/100/100',
    'https://picsum.photos/id/116/100/100',
    'https://picsum.photos/id/119/100/100',
    'https://picsum.photos/id/120/100/100',
    'https://picsum.photos/id/155/100/100',
    'https://picsum.photos/id/169/100/100',
    'https://picsum.photos/id/176/100/100',
  ];

  return (
    <div className="bg-black">
      {/* Hero section with particles */}
      <section
        id="Hero"
        className="relative h-screen w-full overflow-hidden scroll-mt-20 md:scroll-mt-24"
      >
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>

        <div className="relative z-10 flex h-full flex-col pt-28 md:pt-32 lg:pt-36">
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <h1
              className="text-white font-extrabold text-center tracking-tight font-['Plus_Jakarta_Sans'] leading-[0.9]
                         text-[15vw] md:text-[18vw] lg:text-[20vw] xl:text-[16rem] transition-colors duration-300"
              onMouseEnter={handleSpeedUp}
              onMouseLeave={handleSlowDown}
            >
              NCAT
            </h1>
            <p className="text-white/70 text-center text-sm md:text-lg lg:text-xl font-light tracking-widest uppercase">
              Next‑Gen Creative Agency & Technology
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="relative z-10 bg-black">
        <HeroSection />
        <OrganizerCards />

        <div className="text-center mb-10">
          <h2 className="text-[#f0abfc] text-3xl md:text-4xl font-bold drop-shadow-md">Our Speakers</h2>
          <p className="text-white/80 mt-2 drop-shadow-sm">Learn from industry-leading experts</p>
        </div>

        {/* Gallery Section – uses default portrait photos (no imageIds prop needed) */}
        <GallerySection />

        <div className="text-center mb-10">
          <h2 className="text-[#f0abfc] text-3xl md:text-4xl font-bold drop-shadow-md">
            Our Partners
          </h2>
          <p className="text-white/80 mt-2 drop-shadow-sm">
            Learn from industry-leading experts
          </p>
        </div>

        <Slider
          images={logoImages.slice(0, 9)}
          width={230}
          height={230}
          reverse={true}
          quantity={9}
        />

        {/* CTA SECTION ABOVE FOOTER */}
        <section className="py-20 md:py-28 px-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <a
              href="mailto:hi@filip.fyi"
              className="text-[#f0abfc] hover:text-[#e879f9] text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider transition-colors"
            >
              GET IN TOUCH
            </a>
            <a
              href="mailto:hi@filip.fyi"
              className="text-gray-300 hover:text-white text-lg md:text-xl transition-colors"
            >
              hi@filip.fyi
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;