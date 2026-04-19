// PeopleSlider.tsx
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

export interface PersonSlide {
  id: string | number;
  image: string;
  name: string;
  designation: string;
  description: string;
  badge?: string;
  link?: string;
}

interface PeopleSliderProps {
  title: string;
  subtitle?: string;
  slides: PersonSlide[];
}

const PeopleSlider = ({ title, subtitle, slides }: PeopleSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Classes for navigation and pagination
  const prevNavClass = "people-slider-prev";
  const nextNavClass = "people-slider-next";
  const paginationClass = "people-slider-pagination";

  return (
    <section className="w-full py-12 md:py-16">
      <div className="w-full px-5 md:px-8">
        <h1 className="text-4xl md:text-5xl font-semibold text-white text-center mb-4">
          {title}
        </h1>
        {subtitle && (
          <div className="text-center text-gray-300 text-lg leading-relaxed mb-10 md:mb-16 max-w-3xl mx-auto">
            {subtitle}
          </div>
        )}

        {/* Slider container - full width, no side padding for arrows */}
        <div className="relative w-full">
          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView="auto"
            spaceBetween={20}
            speed={600}
            centeredSlides
            initialSlide={1}
            watchOverflow
            watchSlidesProgress
            navigation={{
              prevEl: `.${prevNavClass}`,
              nextEl: `.${nextNavClass}`,
              disabledClass: "opacity-30 cursor-default pointer-events-none",
            }}
            pagination={{
              el: `.${paginationClass}`,
              type: "bullets",
              bulletClass:
                "inline-block w-2 h-2 rounded-full bg-white opacity-20 transition-all duration-300 mx-1",
              bulletActiveClass: "!w-8 !opacity-100",
              clickable: true,
            }}
            breakpoints={{
              768: { spaceBetween: 40 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="!overflow-visible"
          >
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="!w-auto !h-auto flex items-center min-h-[550px] group"
              >
                <div className="relative w-[calc(100dvw-60px)] max-w-[400px] bg-[#1e1e1e] rounded-[10px] overflow-hidden transition-all duration-300">
                  {slide.badge && (
                    <div className="absolute top-0 left-0 z-10 flex items-center gap-1 px-2.5 py-1 pl-1.5 bg-black/40 rounded-br-[10px] text-sm text-white">
                      <span className="block w-[18px] aspect-square bg-[url('https://bato-web-agency.github.io/bato-shared/img/slider-1/icon-star.svg')] bg-center bg-no-repeat bg-contain" />
                      {slide.badge}
                    </div>
                  )}

                  <div className="aspect-[400/270] overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col gap-7 p-8 px-5">
                    {/* Header - hidden on non-active slides */}
                    <div className="max-h-[50px] overflow-hidden transition-[max-height] duration-600 ease-in group-[.swiper-slide-active]:max-h-[50px] group-[:not(.swiper-slide-active)]:max-h-0">
                      <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="font-semibold text-lg text-white">
                          {slide.designation}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src={slide.image}
                              alt={slide.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-[#818181] text-base">
                            {slide.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div>
                      <h2 className="font-semibold text-xl leading-tight text-white mb-2">
                        {slide.name}
                      </h2>
                      <p className="font-light text-base leading-relaxed text-white/70">
                        {slide.description}
                      </p>
                    </div>

                    {/* Footer - hidden on non-active slides */}
                    <div className="max-h-[50px] overflow-hidden transition-[max-height] duration-600 ease-in group-[.swiper-slide-active]:max-h-[50px] group-[:not(.swiper-slide-active)]:max-h-0">
                      {slide.link && (
                        <a
                          href={slide.link}
                          className="inline-flex items-center gap-1 font-medium text-lg text-white no-underline group/btn"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span>View more</span>
                          <span className="relative block w-6 aspect-square overflow-hidden">
                            <span className="absolute inset-0 block bg-[url('https://bato-web-agency.github.io/bato-shared/img/slider-1/icon-btn-arrow.svg')] bg-center bg-no-repeat bg-contain group-hover/btn:animate-[btnArrowMove_0.4s_ease_forwards]" />
                            <span className="absolute top-full right-full block w-full h-full bg-[url('https://bato-web-agency.github.io/bato-shared/img/slider-1/icon-btn-arrow.svg')] bg-center bg-no-repeat bg-contain group-hover/btn:animate-[btnArrowMove_0.4s_ease_forwards]" />
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls Container - Arrows + Pagination below slider */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Previous Arrow */}
            <button
              className={`${prevNavClass} flex items-center justify-center w-10 h-10 rounded-full bg-[#1e1e1e] text-white transition-all duration-300 hover:bg-[#2a2a2a] disabled:opacity-30 disabled:cursor-default`}
              aria-label="Previous slide"
            >
              <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
                <path
                  d="M14 26L2 14L14 2"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Pagination Container */}
            <div className={`${paginationClass} flex items-center gap-2`} />

            {/* Next Arrow */}
            <button
              className={`${nextNavClass} flex items-center justify-center w-10 h-10 rounded-full bg-[#1e1e1e] text-white transition-all duration-300 hover:bg-[#2a2a2a] disabled:opacity-30 disabled:cursor-default`}
              aria-label="Next slide"
            >
              <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
                <path
                  d="M2 26L14 14L2 2"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes btnArrowMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100%, -100%); }
        }
      `}</style>
    </section>
  );
};

export default PeopleSlider;