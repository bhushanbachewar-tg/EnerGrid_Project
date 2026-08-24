"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import type { IconType } from "react-icons";
import {
  HiOutlineBars3,
  HiOutlineBuildingOffice2,
  HiOutlineChartBarSquare,
  HiOutlineChevronRight,
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlineXMark,
} from "react-icons/hi2";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  { href: "/", label: "Home", icon: HiOutlineHome },
  { href: "/about", label: "About Us", icon: HiOutlineBuildingOffice2 },
  {
    href: "/investor-relations",
    label: "Investor Relations",
    icon: HiOutlineChartBarSquare,
  },
  //{ href: "/media", label: "Media", icon: HiOutlineNewspaper },
  { href: "/contact", label: "Contact Us", icon: HiOutlineEnvelope },
] satisfies ReadonlyArray<{
  href: string;
  label: string;
  icon: IconType;
}>;

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 16);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div
        className={`w-full border-b transition-all duration-500 ${
          isScrolled
            ? "border-white/20 bg-slate-500/45 shadow-lg shadow-black/15 backdrop-blur-2xl"
            : "border-transparent bg-transparent shadow-none backdrop-blur-0"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-8 ${
            isScrolled ? "h-12" : "h-16"
          }`}
        >
          <Link
            href="/"
            className="group flex items-center"
            aria-label="EnerGrid Home"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              className={`relative transition-all duration-500 ${
                isScrolled
                  ? "h-7 w-[104px] sm:w-[118px]"
                  : "h-9 w-[128px] sm:w-[146px]"
              }`}
            >
              <Image
                src="/images/logo.png"
                alt="EnerGrid"
                fill
                priority
                className="object-contain object-left"
                sizes="160px"
              />
            </motion.div>
          </Link>

          <nav
            className={`hidden items-center gap-1 rounded-full border backdrop-blur-2xl md:flex ${
              isScrolled
                ? "border-white/20 bg-transparent shadow-inner shadow-white/10"
                : "border-white/15 bg-transparent shadow-sm shadow-black/10"
            } ${isScrolled ? "p-1" : "p-1.5"}`}
            aria-label="Primary"
          >
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <motion.div
                  key={link.href}
                  initial={{ y: -15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.35 + index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    className={`group relative isolate flex items-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold transition-all duration-300 hover:border-white/55 hover:bg-white/70 hover:text-black hover:shadow-lg hover:shadow-white/10 hover:backdrop-blur-xl ${
                      isScrolled ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-[13px]"
                    } ${
                      isActive && isScrolled
                        ? "bg-emerald-500/90 text-white shadow-sm shadow-black/10"
                        : isActive
                          ? "bg-emerald-500/90 text-white shadow-sm shadow-black/10"
                          : "text-white"
                    }`}
                  >
                    <Icon
                      className={`relative z-10 text-[17px] transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-white"
                      } group-hover:text-black`}
                      aria-hidden="true"
                    />
                    <span className="relative z-10 whitespace-nowrap">
                      {link.label}
                    </span>
                    {isActive ? (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className={`absolute inset-0 z-0 rounded-full border ${
                          isScrolled ? "border-white/25" : "border-white/20"
                        }`}
                        transition={{
                          type: "spring",
                          stiffness: 360,
                          damping: 32,
                        }}
                      />
                    ) : null}
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.8,
                type: "spring",
                stiffness: 200,
              }}
              className="ml-4"
            >
              <ThemeSwitcher glassMode="dark" compact={isScrolled} />
            </motion.div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeSwitcher glassMode="dark" compact={isScrolled} />
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                className={`flex items-center justify-center rounded-full border shadow-sm backdrop-blur-2xl transition-all hover:border-accent/30 ${
                  isScrolled ? "h-10 w-10" : "h-11 w-11"
                } ${
                  isScrolled
                    ? "border-white/20 bg-slate-900/20 text-white hover:bg-white/15"
                    : "border-white/20 bg-slate-950/30 text-white hover:border-white/40 hover:bg-slate-950/45"
                }`}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <HiOutlineXMark className="text-2xl" aria-hidden="true" />
                ) : (
                  <HiOutlineBars3 className="text-2xl" aria-hidden="true" />
                )}
              </button>

              <AnimatePresence>
                {isMenuOpen ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -10,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                      scale: 0.98,
                    }}
                    className={`absolute right-0 mt-3 w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border p-2 shadow-2xl shadow-black/25 backdrop-blur-2xl ${
                      isScrolled
                        ? "border-white/20 bg-slate-500/85"
                        : "border-white/20 bg-slate-950/85"
                    }`}
                  >
                    <div
                      className={`border-b px-4 py-3 ${
                        isScrolled ? "border-white/15" : "border-white/15"
                      }`}
                    >
                      <p
                        className={`text-xs font-bold uppercase tracking-[0.22em] ${
                          isScrolled ? "text-white/75" : "text-white/70"
                        }`}
                      >
                        Navigation
                      </p>
                    </div>

                    <nav
                      className="flex flex-col gap-1 py-2"
                      aria-label="Mobile primary"
                    >
                      {navLinks.map((link, index) => {
                        const Icon = link.icon;
                        const isActive =
                          pathname === link.href ||
                          (link.href !== "/" &&
                            pathname.startsWith(link.href));

                        return (
                          <motion.div
                            key={link.href}
                            initial={{
                              opacity: 0,
                              x: -10,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              delay: index * 0.05,
                            }}
                          >
                            <Link
                              href={link.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`group flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-sm font-semibold transition-all duration-200 hover:border-white/55 hover:bg-white/70 hover:text-black hover:shadow-lg hover:shadow-white/10 hover:backdrop-blur-xl ${
                                isActive && isScrolled
                                  ? "bg-emerald-500/90 text-white"
                                  : isActive
                                    ? "bg-emerald-500/90 text-white"
                                    : "text-white"
                              }`}
                            >
                              <span className="flex min-w-0 items-center gap-3">
                                <Icon
                                  className="shrink-0 text-lg"
                                  aria-hidden="true"
                                />
                                <span className="truncate">{link.label}</span>
                              </span>
                              <HiOutlineChevronRight
                                className="shrink-0 text-lg text-white transition-transform group-hover:translate-x-1 group-hover:text-black"
                                aria-hidden="true"
                              />
                            </Link>
                          </motion.div>
                        );
                      })}
                    </nav>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
