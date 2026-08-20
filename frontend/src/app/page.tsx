"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Battery,
  Leaf,
  TrendingUp,
  Zap,
  Globe,
  BarChart3,
} from "lucide-react";

/* ─── Animation presets ─── */
const viewportOnce = { once: true, amount: 0.25 };

const reveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65 },
  },
};

const revealShort = {
  hidden: { opacity: 0, y: 20, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

/* ─── Data ─── */
const stats = [
  { icon: TrendingUp, value: "₹10,000 Cr+", label: "Pipeline Value" },
  { icon: Zap, value: "5+ GW", label: "Sustainable Capacity" },
  { icon: Globe, value: "Pan-India", label: "Geographic Reach" },
  { icon: BarChart3, value: "3 Sectors", label: "Core Verticals" },
];

const focusAreas = [
  {
    icon: Zap,
    title: "Transmission",
    badge: "Stability Layer",
    description:
      "Building the backbone for reliable power delivery—designed for scalability and long-term grid resilience.",
  },
  {
    icon: Battery,
    title: "BESS",
    badge: "Reliability Engine",
    description:
      "Grid-ready battery storage that smooths intermittency and supports peak demand with unwavering confidence.",
  },
  {
    icon: Leaf,
    title: "Renewables",
    badge: "Clean Generation",
    description:
      "Accelerating adoption of renewable generation aligned to a modern, flexible, and decarbonized grid.",
  },
];

const partners = ["IndiGrid", "BII", "KNI"];

/* ─── Sub-components ─── */
function FocusCard({
  icon: Icon,
  title,
  badge,
  description,
}: {
  icon: React.ElementType;
  title: string;
  badge: string;
  description: string;
}) {
  return (
    <motion.div
      variants={revealShort}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      whileHover={{ y: -10 }}
      className="group rounded-2xl border border-slate-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-md transition-shadow hover:shadow-xl hover:shadow-ener-green/10"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-ener-green/10 px-3 py-1 text-xs font-semibold text-ener-green">
          {badge}
        </span>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ener-green/10 text-ener-green transition-colors group-hover:bg-ener-green group-hover:text-white">
          <Icon size={22} />
        </div>
      </div>
      <h3 className="mt-5 text-xl font-bold text-ener-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </motion.div>
  );
}

/* ─── Page ─── */
export default function Page() {
  return (
    <main className="bg-white">
      {/* ── Section 1: Hero ── */}
      <section className="relative overflow-hidden bg-white">
        {/* Animated gradient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-ener-green/10 via-emerald-50 to-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-ener-green/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 md:pt-28">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-ener-green/20 bg-ener-green/5 px-4 py-1.5 text-sm font-medium text-ener-green">
              <span className="h-2 w-2 animate-pulse rounded-full bg-ener-green" />
              India&apos;s Green Infrastructure Platform
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ener-navy sm:text-5xl md:text-6xl">
              Accelerating the{" "}
              <span className="bg-gradient-to-r from-ener-green to-emerald-400 bg-clip-text text-transparent">
                Green Energy Transition
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              EnerGrid is building the next wave of India&apos;s power ecosystem
              through resilient transmission, BESS-backed reliability, and
              renewables at scale.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#core-focus"
                className="inline-flex items-center gap-2 rounded-xl bg-ener-green px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-ener-green/25 transition hover:bg-emerald-500"
              >
                Explore EnerGrid
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/investor-relations"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-ener-navy/15 px-7 py-3.5 text-sm font-semibold text-ener-navy transition hover:border-ener-green hover:text-ener-green"
              >
                View Pipeline
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: About Snapshot ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-ener-navy">
              Powering India&apos;s Sustainable Future
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              EnerGrid is a next-generation green infrastructure platform
              backed by IndiGrid — India&apos;s first power sector InvIT. We
              combine deep sector expertise with institutional capital to
              accelerate the deployment of transmission, storage, and renewable
              energy assets across the country.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Our vision is to be the most trusted partner in India&apos;s
              energy transition — delivering reliable, scalable, and sustainable
              infrastructure for generations to come.
            </p>
          </motion.div>

          <motion.div
            variants={revealShort}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-ener-navy/5 to-ener-green/10 shadow-lg"
          >
            <div className="text-center">
              <Globe size={48} className="mx-auto text-ener-green/40" />
              <p className="mt-3 text-sm font-medium text-slate-400">
                Image placeholder
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Impact / Stats ── */}
      <section className="bg-ener-navy py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={revealShort}
                className="text-center"
              >
                <s.icon size={28} className="mx-auto text-ener-green" />
                <p className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-slate-300">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Core Focus Areas ── */}
      <section id="core-focus" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-ener-navy">
              Core Focus Areas
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              A concentrated strategy across the backbone, storage reliability,
              and the renewables-led future.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {focusAreas.map((area) => (
              <FocusCard key={area.title} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Partners ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-ener-navy">
              Strategic Partners
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
              Backed by leading institutional investors and infrastructure
              pioneers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-10"
          >
            {partners.map((name) => (
              <motion.div
                key={name}
                variants={revealShort}
                className="flex h-20 w-44 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-lg font-bold tracking-wide text-ener-navy shadow-sm"
              >
                {name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 6: CTA ── */}
      <section className="bg-gradient-to-r from-ener-green/10 via-emerald-50 to-ener-green/5 py-20">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl px-4 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-ener-navy md:text-4xl">
            Build the Future With Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Join EnerGrid in accelerating India&apos;s green energy transition.
            Whether you&apos;re an investor, partner, or stakeholder — let&apos;s
            create sustainable infrastructure together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-ener-green px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-ener-green/25 transition hover:bg-emerald-500"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
