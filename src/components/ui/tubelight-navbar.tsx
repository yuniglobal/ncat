import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Photo from "../../assets/img/myProfilePhoto.jpeg";
import { ArrowUpIcon } from "./arrow-icon";
import { Menu, X } from "lucide-react";

const fullName = "bilalaniq";
const profilePhoto = Photo;

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  firstName: string;
}

export function TubeLightNavBar({ items, className, firstName }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.id;
            const matchingItem = items.find(
              (item) => item.url.substring(2) === sectionName
            );
            if (matchingItem) setActiveTab(matchingItem.name);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px 0px -50px 0px" }
    );

    items.forEach((item) => {
      const section = document.getElementById(item.url.substring(2));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [items]);

  // Colors from particle scheme
  const colors = {
    bgDark: "#00076f",      // deep navy
    purpleDeep: "#44008b",  // deep purple
    magenta: "#9f45b0",     // vibrant magenta
    pink: "#e54ed0",        // bright pink
    lightPink: "#ffe4f2",   // soft pink
  };

  return (
    <div>
      {/* Desktop */}
      <div
        className={cn(
          "hidden lg:block fixed z-[50] top-0 left-1/2 -translate-x-1/2 mb-6 md:pt-8 pt-4",
          className
        )}
      >
        <div
          className="flex items-center gap-3 border backdrop-blur-sm py-2.5 px-3.5 rounded-full shadow-lg"
          style={{
            borderColor: colors.pink,
            backgroundColor: "rgba(0, 7, 111, 0.3)", // #00076f with opacity
          }}
        >
          <a href="/#Hero" className="flex items-center gap-2 mr-14">
            <img
              className="w-11 aspect-square object-cover object-[center_9%] rounded-full mt-1 border-2"
              style={{ borderColor: colors.lightPink }}
              src={profilePhoto}
              alt={`${fullName} Profile Photo`}
            />
            <p className="font-myNameFont text-xl" style={{ color: colors.lightPink }}>
              {firstName}
            </p>
          </a>
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative text-base font-myMainFont font-semibold px-4.5 py-2.5 rounded-full transition-all duration-300",
                  isActive
                    ? "text-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
                style={{
                  backgroundColor: isActive ? colors.magenta : "transparent",
                }}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full rounded-full -z-10"
                    style={{ backgroundColor: colors.magenta }}
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full"
                      style={{ backgroundColor: colors.magenta }}
                    >
                      <div
                        className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2"
                        style={{ backgroundColor: colors.pink + "40" }} // 25% opacity
                      />
                      <div
                        className="absolute w-8 h-6 rounded-full blur-sm -top-1"
                        style={{ backgroundColor: colors.pink + "40" }}
                      />
                      <div
                        className="absolute w-4 h-4 rounded-full blur-sm top-0 left-2"
                        style={{ backgroundColor: colors.pink + "40" }}
                      />
                    </div>
                  </motion.div>
                )}
              </a>
            );
          })}
          <a
            href="https://wa.me/+923056303037?text=Hello, How can I help you?"
            target="_blank"
            className="ml-14"
          >
            <ArrowUpIcon color={colors.lightPink} />
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={cn(
          "block lg:hidden fixed z-[50] top-0 left-4 right-4 md:left-20 md:right-20 mb-6 md:pt-8 pt-4",
          className
        )}
      >
        <div
          className="w-full flex justify-between items-center gap-3 border backdrop-blur-sm py-2.5 px-3.5 rounded-full shadow-lg"
          style={{
            borderColor: colors.pink,
            backgroundColor: "rgba(0, 7, 111, 0.3)",
          }}
        >
          <a href="/#Hero" className="flex items-center gap-2 mr-14">
            <img
              className="w-10 md:w-12 aspect-square object-cover object-[center_30%] rounded-full border-2"
              style={{ borderColor: colors.lightPink }}
              src={profilePhoto}
              alt={`${fullName} Profile Photo`}
            />
            <p className="font-myNameFont text-lg md:text-xl" style={{ color: colors.lightPink }}>
              {firstName}
            </p>
          </a>
          <div className="flex flex-row items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="px-2 py-2 mr-1 md:mr-2 rounded-full"
              style={{ backgroundColor: colors.magenta }}
            >
              {isMenuOpen ? (
                <X size={22} className="text-white" />
              ) : (
                <Menu size={22} className="text-white" />
              )}
            </button>
            <a
              href="https://wa.me/+92344603782?text=Hello, How can I help you?"
              target="_blank"
            >
              <ArrowUpIcon color={colors.lightPink} />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 w-full"
          >
            <div
              className="p-2.5 flex flex-col border backdrop-blur-sm rounded-2xl gap-2"
              style={{
                borderColor: colors.pink,
                backgroundColor: "rgba(0, 7, 111, 0.5)",
              }}
            >
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;

                return (
                  <a
                    key={item.name}
                    href={item.url}
                    onClick={() => {
                      setActiveTab(item.name);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      "relative text-sm md:text-base font-myMainFont font-semibold px-4.5 py-2.5 rounded-full transition-all flex items-center gap-2",
                      isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                    style={{
                      backgroundColor: isActive ? colors.magenta : "transparent",
                    }}
                  >
                    <Icon size={18} strokeWidth={2.5} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}