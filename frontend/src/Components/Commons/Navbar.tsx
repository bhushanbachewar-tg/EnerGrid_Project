// import Link from "next/link";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About Us" },
//   { href: "/investor-relations", label: "Investor Relations" },
//   { href: "/media", label: "Media" },
//   { href: "/contact", label: "Contact Us" },
// ] as const;

// export default function Navbar() {
//   return (
//     <header className="fixed left-0 top-0 z-50 w-full sticky top-0 border-b border-white/20 bg-white/80 backdrop-blur-md">
//       <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
//         <Link
//           href="/"
//           className="flex items-center gap-2 text-[#0B192C]"
//           aria-label="EnerGrid Home"
//         >
//           <span className="text-lg font-extrabold tracking-tight">
//             Ener<span className="text-ener-green">Grid</span>
//           </span>
//         </Link>

//         {/* Desktop nav */}
//         <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
//           {navLinks.map((l) => (
//             <Link
//               key={l.href}
//               href={l.href}
//               className="group relative whitespace-nowrap px-1 py-2 text-sm font-semibold text-[#0B192C]/70 transition-colors hover:text-ener-green after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-ener-green after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100"
//             >
//               {l.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile nav (no hooks; uses <details>) */}
//         <div className="md:hidden">
//           <details className="relative">
//             <summary className="list-none cursor-pointer rounded-xl border border-[#0B192C]/10 bg-white/60 p-2 text-[#0B192C] shadow-sm">
//               <span className="sr-only">Open menu</span>
//               <svg
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 aria-hidden="true"
//               >
//                 <path
//                   d="M4 7H20"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//                 <path
//                   d="M4 12H20"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//                 <path
//                   d="M4 17H20"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </summary>

//             <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-[#0B192C]/10 bg-white/95 p-3 shadow-lg backdrop-blur-md">
//               <nav className="flex flex-col gap-1" aria-label="Mobile primary">
//                 {navLinks.map((l) => (
//                   <Link
//                     key={l.href}
//                     href={l.href}
//                     className="rounded-xl px-3 py-2 text-sm font-semibold text-[#0B192C]/70 transition-colors hover:text-ener-green hover:bg-ener-green/5"
//                   >
//                     {l.label}
//                   </Link>
//                 ))}
//               </nav>
//             </div>
//           </details>
//         </div>
//       </div>
//     </header>
//   );
// }



"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/investor-relations", label: "Investor Relations" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact Us" },
] as const;

export default function Navbar() {
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
      {/* Top energy line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="h-[3px] w-full origin-left bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500"
      />

      {/* Main Navbar */}
      <div className="border-b border-white/10 bg-[#071A2B]/95 shadow-lg backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="EnerGrid Home"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-emerald-600" />

              <motion.svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 text-[#071A2B]"
                aria-hidden="true"
                whileHover={{
                  scale: 1.15,
                }}
              >
                <path
                  d="M13.5 2L4 13H11L10.5 22L20 10.5H13L13.5 2Z"
                  fill="currentColor"
                />
              </motion.svg>
            </motion.div>

            {/* Brand */}
            <div className="leading-none">
              <motion.span
                whileHover={{ letterSpacing: "-0.02em" }}
                className="block text-[20px] font-extrabold tracking-[-0.04em] text-white"
              >
                Ener<span className="text-emerald-400">Grid</span>
              </motion.span>

              <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.25em] text-slate-400">
                Energy Infrastructure
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((l, index) => (
              <motion.div
                key={l.href}
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.35 + index * 0.08,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={l.href}
                  className="group relative block rounded-lg px-4 py-2.5 text-[14px] font-medium text-slate-300 transition-colors duration-300 hover:bg-white/5 hover:text-white"
                >
                  <span className="relative z-10">
                    {l.label}
                  </span>

                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-1 left-4 right-4 h-[2px] origin-left rounded-full bg-emerald-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  />

                  {/* Hover glow */}
                  <motion.span
                    className="absolute inset-0 rounded-lg bg-emerald-400/5"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}

            {/* ================= CTA ================= */}

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
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-[#071A2B] shadow-lg shadow-emerald-500/10 transition-shadow duration-300 hover:shadow-emerald-500/30"
              >
                {/* Button hover background */}
                <motion.span
                  className="absolute inset-0 bg-emerald-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                />

                <span className="relative z-10">
                  Let's Connect
                </span>

                <motion.svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="relative z-10"
                  whileHover={{ x: 4 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </nav>

          {/* ================= MOBILE NAV ================= */}

          <div className="md:hidden">
            <details className="relative">
              <summary
                className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 shadow-sm transition-all hover:border-emerald-400/30 hover:bg-white/10 hover:text-emerald-400"
                aria-label="Open menu"
              >
                <span className="sr-only">
                  Open menu
                </span>

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M4 12H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </summary>

              {/* Mobile dropdown */}
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
                className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#071A2B]/98 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl"
              >
                {/* Mobile header */}
                <div className="border-b border-white/10 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    Navigation
                  </p>
                </div>

                <nav
                  className="flex flex-col gap-1 py-2"
                  aria-label="Mobile primary"
                >
                  {navLinks.map((l, index) => (
                    <motion.div
                      key={l.href}
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
                        href={l.href}
                        className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-emerald-500/10 hover:text-emerald-400"
                      >
                        <span>{l.label}</span>

                        <motion.svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="text-slate-600"
                          whileHover={{
                            x: 4,
                          }}
                        >
                          <path
                            d="M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />

                          <path
                            d="M13 6L19 12L13 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="border-t border-white/10 p-2">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-[#071A2B] transition hover:bg-emerald-400"
                  >
                    Let's Connect
                  </Link>
                </div>
              </motion.div>
            </details>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
