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
      className="relative min-h-[640px] overflow-hidden bg-inverse"
      style={{
        backgroundImage: image ? `url("${image}")` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-inverse/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-inverse via-inverse/75 to-inverse/20" />

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
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            EnerGrid
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-on-inverse sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-on-inverse/90 sm:text-xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
