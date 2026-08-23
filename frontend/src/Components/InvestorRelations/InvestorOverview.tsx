"use client";

import { BatteryCharging, Leaf, Network } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { investorOverview } from "./content";
import ScrollReveal from "./ScrollReveal";

const pillarIcons = [Network, BatteryCharging, Leaf] as const;

export default function InvestorOverview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="ir-section-white px-4 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="left">
            <div>
              <p className="text-sm font-semibold uppercase text-accent">
                {investorOverview.label}
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-primary md:text-4xl">
                {investorOverview.heading}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} variant="scale-soft">
            <div>
              <p className="text-base leading-8 text-secondary">
                {investorOverview.lead}
              </p>
              <p className="mt-4 text-base leading-8 text-secondary">
                {investorOverview.support}
              </p>
            </div>
          </ScrollReveal>
        </div>

        <p className="mt-14 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          What we are building
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-12">
          {investorOverview.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index];

            return (
              <article key={pillar.title} className="ir-pillar-card">
                <motion.div
                  initial={
                    reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: reduceMotion ? 0 : index * 0.1,
                  }}
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent">
                    0{index + 1}
                  </span>
                  <div className="ir-pillar-icon mt-5 text-accent">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-primary">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-secondary">
                    {pillar.text}
                  </p>
                </motion.div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
