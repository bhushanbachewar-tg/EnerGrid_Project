"use client";

import { motion, useReducedMotion } from "framer-motion";

import { investorHeroImage } from "./content";

export default function InvestorIntroHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative h-[calc(100svh-4rem)] min-h-[640px] overflow-hidden bg-inverse">
      <motion.img
        src={investorHeroImage}
        alt="High-voltage transmission infrastructure across India's energy grid"
        initial={reduceMotion ? false : { scale: 1.03, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-[72%_center]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-inverse/90 via-inverse/55 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 0.25,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            EnerGrid
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-on-inverse sm:text-6xl lg:text-7xl">
            Investor Relations
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-on-inverse sm:text-xl">
            Building a strong foundation for India&apos;s energy transition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
