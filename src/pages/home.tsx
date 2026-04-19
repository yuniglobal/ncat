import { lazy, Suspense } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ImagesSliderSection from "@/components/images-slider-section";
import ProjectsSection from "@/components/projects-section";
import TestimonialsSection from "@/components/testimonials-section";
import ExperienceSection from "@/components/experience-section";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";



const ParticleField = lazy(() => import("@/components/ParticleField"));

const Home = () => {
  const handleRandomColors = () => {
    // @ts-ignore
    window.__updateParticleColors?.();
  };
  const handleSpeedUp = () => {
    // @ts-ignore
    window.__setParticleSpeed?.(true);
  };
  const handleSlowDown = () => {
    // @ts-ignore
    window.__setParticleSpeed?.(false);
  };

  return (
    <div className="bg-black">
      {/* Full‑screen particle section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
        {/* Navbar over the particles */}
        <Navbar />
      </section>

      {/* Rest of the page (scrolls below the particle section) */}
      <div className="relative z-10 bg-black">
        <HeroSection />
        <ImagesSliderSection />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
        <TestimonialsSection />
        <Footer />
      </div>

      {/* Fixed button (stays on screen) */}
      <button
        onClick={handleRandomColors}
        onMouseEnter={handleSpeedUp}
        onMouseLeave={handleSlowDown}
        className="fixed bottom-4 right-4 z-30 rounded-full border border-white bg-black/50 px-6 py-2 font-montserrat text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
      >
        Random Colors
      </button>
    </div>
  );
};

export default Home;