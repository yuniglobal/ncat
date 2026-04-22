import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";
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

  const colors = {
    bgDark: "#00076f",
    purpleDeep: "#44008b",
    magenta: "#9f45b0",
    pink: "#e54ed0",
    lightPink: "#ffe4f2",
  };

  return (
    <div>
      {/* ----- DESKTOP NAVIGATION ----- */}
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
            backgroundColor: "rgba(0, 7, 111, 0.3)",
          }}
        >
          {/* Profile / Logo */}
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

          {/* Navigation Items */}
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
                        style={{ backgroundColor: colors.pink + "40" }}
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

          {/* Register Button (ArrowUpIcon as navigation only) */}
          <Link to="/register" className="ml-4">
            <ArrowUpIcon className="hover:opacity-80 transition-opacity" />
          </Link>
        </div>
      </div>

      {/* ----- MOBILE NAVIGATION ----- */}
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
          {/* Profile */}
          <a href="/#Hero" className="flex items-center gap-2">
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

          {/* Menu Toggle Only (WhatsApp removed) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="px-2 py-2 rounded-full"
            style={{ backgroundColor: colors.magenta }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={22} className="text-white" />
            ) : (
              <Menu size={22} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
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

              {/* Register Link inside Mobile Menu */}
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="w-full"
              >
                <ArrowUpIcon className="w-full justify-center" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}