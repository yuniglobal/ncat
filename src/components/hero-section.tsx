import { LinkedInProfile } from "@/lib/constants";
import MaxWidthWrapper from "./max-width-wrapper";
import { MyWorkBtn } from "./ui/my-work-btn";
import { LetsConnectBtn } from "./ui/lets-connect-btn";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section id="Intro" className="z-[2] flex w-full items-center py-12 md:py-16">
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Section heading */}
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Plus_Jakarta_Sans'] mb-6 tracking-tight">
            About <span className="text-[#f0abfc]">NCAT</span>
          </h2>

          {/* Big explanation */}
          <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed">
            <p>
              <strong className="text-white font-semibold">NCAT</strong> isn’t just another creative studio—we’re a 
              collective of forward‑thinking designers, developers, and strategists who believe in building digital 
              experiences that matter. Our name stands for{" "}
              <span className="text-[#f0abfc] font-medium">Next‑Gen Creative Agency & Technology</span>, and 
              that’s exactly what we deliver.
            </p>
            <p>
              We partner with ambitious brands to craft immersive websites, powerful web applications, and 
              unforgettable brand identities. From pixel‑perfect frontends to scalable backends, every project is 
              a blend of artistry and engineering.
            </p>
            <p>
              Whether you’re launching a new product or reimagining an existing one, NCAT brings the technical 
              depth and creative vision to make your digital presence impossible to ignore.
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mt-10">
            <Link target="_blank" to={LinkedInProfile}>
              <LetsConnectBtn />
            </Link>
            <a href="/#Work">
              <MyWorkBtn />
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;