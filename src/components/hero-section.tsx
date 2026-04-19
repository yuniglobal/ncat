import { HeroSectionSubHeading, LinkedInProfile } from "@/lib/constants";
import MaxWidthWrapper from "./max-width-wrapper";
import { MyWorkBtn } from "./ui/my-work-btn";
import { LetsConnectBtn } from "./ui/lets-connect-btn";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div id="Hero" className="z-[2] flex h-screen w-full justify-center items-center">
      <MaxWidthWrapper>
        <div className="mt-10 md:mt-10 mb-10">
          {/* MASSIVE heading – scales fluidly from 6rem to 20rem */}
          <h1 className="text-white font-extrabold text-center tracking-tight font-['Plus_Jakarta_Sans'] leading-none 
                         text-[15vw] md:text-[18vw] lg:text-[20vw] xl:text-[16rem]">
            NCAT
          </h1>

          <p className="text-white text-base md:text-xl font-medium text-center font-myMainFont my-6 md:my-8 max-w-2xl mx-auto">
            {HeroSectionSubHeading}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <Link target="_blank" to={LinkedInProfile}>
              <LetsConnectBtn />
            </Link>
            <a href="/#Work">
              <MyWorkBtn />
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;