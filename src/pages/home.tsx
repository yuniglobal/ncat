// src/pages/Home.tsx
import { lazy, Suspense } from "react";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import GuestGrid from "@/components/GuestGrid";
import SpeakerGrid from "@/components/SpeakersGrid";
import OrganizerCards from "@/components/OrganizerCards";
import Slider from "@/components/Slider";

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

        <div className="relative z-10 flex h-full flex-col pt-20 md:pt-24">
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <h1
              className="text-white font-extrabold text-center tracking-tight font-['Plus_Jakarta_Sans'] leading-none 
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

        {/* ----- EVENT GUESTS & SPEAKERS ----- */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <GuestGrid />
          <SpeakerGrid />
        </section>

        {/* ----- SPONSORS SCROLL CAROUSEL ----- */}
        <Slider
          images={logoImages.slice(0, 9)}
          width={230}
          height={230}
          reverse={true}
          quantity={9}
        />

        <Footer />
      </div>
    </div>
  );
};

export default Home;