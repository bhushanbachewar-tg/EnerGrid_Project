"use client";

import Link from "next/link";
import Image from "next/image";
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
      <section className="relative min-h-screen overflow-hidden bg-white">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="EnerGrid background"
            fill
            priority
            className="object-cover object-right"
          />
          {/* Readability overlay (darker on left for text readability) */}
          <div className="absolute inset-0 bg-gradient-to-r from-ener-navy/90 via-ener-navy/50 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-24 pt-20 md:px-12 md:pt-28 lg:px-20">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            <motion.p
              variants={revealShort}
              className="text-xs font-medium uppercase tracking-[0.2em] text-ener-green sm:text-sm"
            >
              India&apos;s Green Infrastructure Platform
            </motion.p>

            <motion.h1
              variants={reveal}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Accelerating the Green Energy Transition
            </motion.h1>

            <motion.div variants={revealShort} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#core-focus"
                className="inline-flex items-center gap-2 rounded-lg bg-ener-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                Explore EnerGrid
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/investor-relations"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-ener-green hover:text-ener-green"
              >
                View Pipeline
              </Link>
            </motion.div>
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
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src="/images/about-snapshot.jpg"
              alt="EnerGrid sustainable energy infrastructure"
              fill
              className="object-cover"
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
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
