
"use client";

import { motion } from "framer-motion";

type HeaderProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export default function Header({
  title,
  subtitle,
  image,
}: HeaderProps) {
  return (
    <section
      className="relative min-h-[640px] overflow-hidden bg-slate-950"
      style={{
        backgroundImage: image ? `url("${image}")` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl items-center px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          {/* Small heading */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            EnerGrid
          </p>

          {/* Main heading */}
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white sm:text-xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}