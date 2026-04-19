// src/pages/Home.tsx
import { lazy, Suspense } from "react";
import HeroSection from "@/components/hero-section";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import PeopleSlider, { type PersonSlide } from "@/components/PeopleSlider";

const ParticleField = lazy(() => import("@/components/ParticleField"));

// Sample people data – replace with your actual data
const peopleData: PersonSlide[] = [
  {
    id: 1,
    image: "https://bato-web-agency.github.io/bato-shared/img/slider-1/author-1.jpg",
    name: "Andrew Kelman",
    designation: "Creative Director",
    description: "Brings bold ideas to life with over a decade of visual storytelling.",
    badge: "Lead",
    link: "/team/andrew",
  },
  {
    id: 2,
    image: "https://bato-web-agency.github.io/bato-shared/img/slider-1/author-2.jpg",
    name: "Alex Bilyk",
    designation: "Tech Lead",
    description: "Architects scalable solutions and loves turning complex problems into elegant code.",
    badge: "Core",
    link: "/team/alex",
  },
  {
    id: 3,
    image: "https://bato-web-agency.github.io/bato-shared/img/slider-1/author-3.jpg",
    name: "Inna Grande",
    designation: "Product Designer",
    description: "Crafts intuitive interfaces with a deep focus on user empathy and aesthetics.",
    link: "/team/inna",
  },
  {
    id: 4,
    image: "https://bato-web-agency.github.io/bato-shared/img/slider-1/author-1.jpg",
    name: "Sarah Chen",
    designation: "Motion Artist",
    description: "Adds life and motion to brands through fluid animations and visual effects.",
    badge: "New",
    link: "/team/sarah",
  },
  {
    id: 5,
    image: "https://bato-web-agency.github.io/bato-shared/img/slider-1/author-2.jpg",
    name: "Marcus Rivera",
    designation: "Strategy Lead",
    description: "Connects dots between business goals and creative execution.",
    link: "/team/marcus",
  },
];

const Home = () => {
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
      <section
        id="Hero"
        className="relative h-screen w-full overflow-hidden scroll-mt-20 md:scroll-mt-24"
      >
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>

        {/* Overlay content – added top padding so it clears the fixed navbar */}
        <div className="relative z-10 flex h-full flex-col pt-20 md:pt-24">
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            {/* Hover triggers particle speed effect */}
            <h1
              className="text-[#f0abfc] font-extrabold text-center tracking-tight font-['Plus_Jakarta_Sans'] leading-none 
                         text-[15vw] md:text-[18vw] lg:text-[20vw] xl:text-[16rem] transition-colors duration-300"
              style={{ textShadow: '0 0 30px rgba(240, 171, 252, 0.5)' }}
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

      {/* Rest of the page */}
      <div className="relative z-10 bg-black">
        <HeroSection />
        <ExperienceSection />

        {/* People Slider Section */}
        <PeopleSlider
          title="Meet the Visionaries"
          subtitle="The creative minds and technical wizards behind NCAT's boldest projects."
          slides={peopleData}
        />

        <Footer />
      </div>
    </div>
  );
};

export default Home;