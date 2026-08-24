"use client";

import type { ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BatteryCharging,
  CircuitBoard,
  Gem,
  Handshake,
  Landmark,
  Leaf,
  Network,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const viewportOnce = { once: true, amount: 0.25 };

const reveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const focusAreas = [
  {
    icon: Network,
    title: "Transmission",
    badge: "Grid Backbone",
    description:
      "Reliable transmission infrastructure designed for long-term availability, expansion, and operational resilience.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85",
    alt: "High-voltage transmission infrastructure at sunset",
  },
  {
    icon: BatteryCharging,
    title: "Battery Storage",
    badge: "Balancing Layer",
    description:
      "Utility-scale storage that supports peak demand, renewable integration, and a more flexible power system.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
    alt: "Solar panels supporting clean energy storage",
  },
  {
    icon: Leaf,
    title: "Renewables",
    badge: "Clean Growth",
    description:
      "Scalable clean energy assets aligned with India's transition toward dependable, decarbonized power.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=85",
    alt: "Wind turbines generating renewable power",
  },
];

const operatingPrinciples = [
  {
    icon: ShieldCheck,
    title: "Institutional discipline",
    copy: "Governance-led execution with careful capital allocation.",
    label: "Governance",
    metric: "01",
  },
  {
    icon: CircuitBoard,
    title: "Technology-ready assets",
    copy: "Infrastructure planned for smarter, more responsive networks.",
    label: "Readiness",
    metric: "02",
  },
  {
    icon: Handshake,
    title: "Partnership mindset",
    copy: "Built with investors, communities, and sector specialists.",
    label: "Alignment",
    metric: "03",
  },
];

const platformSteps = [
  {
    icon: Network,
    eyebrow: "Transmission",
    title: "Build a stronger grid backbone.",
    copy: "Transmission-led planning supports dependable evacuation, long-life network availability, and the movement of clean power from generation centers to demand hubs.",
    stat: "Grid backbone",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85",
    alt: "High-voltage transmission tower at sunset",
  },
  {
    icon: BatteryCharging,
    eyebrow: "Storage",
    title: "Add flexibility where the system needs it.",
    copy: "Storage-ready infrastructure helps smooth renewable intermittency, improve dispatchability, and support peak-demand windows with a more responsive asset base.",
    stat: "24/7 mindset",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85",
    alt: "Solar panels across a renewable energy field",
  },
  {
    icon: BarChart3,
    eyebrow: "Renewables",
    title: "Scale clean energy with delivery discipline.",
    copy: "EnerGrid aligns renewable growth with technical readiness, disciplined capital planning, and operating partnerships built for India's next power cycle.",
    stat: "India focused",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=85",
    alt: "Wind turbines generating renewable energy",
  },
];

const partners = [
  {
    name: "IndiGrid",
    icon: Landmark,
    label: "Infrastructure InvIT",
  },
  {
    name: "BII",
    icon: Sprout,
    label: "Development capital",
  },
  {
    name: "KNI",
    icon: Gem,
    label: "Strategic investor",
  },
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="max-w-3xl"
    >
      <p className="text-sm font-semibold uppercase text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-primary md:text-4xl">
        {title}
      </h2>
      {copy && <p className="mt-4 text-base leading-8 text-secondary">{copy}</p>}
    </motion.div>
  );
}

function FocusCard({
  title,
  badge,
  description,
  image,
  alt,
  index,
}: {
  icon: ElementType;
  title: string;
  badge: string;
  description: string;
  image: string;
  alt: string;
  index: number;
}) {
  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      whileHover={{ y: -10 }}
      className="group relative min-h-[470px] overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-primary/12 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20 dark:hover:border-accent/45 dark:hover:shadow-black/35"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-inverse/24" />
        <span className="absolute right-5 top-5 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-secondary shadow-sm backdrop-blur">
          {badge}
        </span>
        <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase text-on-inverse/80">
          0{index + 1} / Core Vertical
        </span>
      </div>

      <div className="relative p-7">
        <div className="absolute -top-4 left-7 h-8 w-8 rotate-45 rounded-sm bg-white dark:bg-slate-900" />
        <h3 className="relative text-xl font-semibold text-primary">{title}</h3>
        <p className="relative mt-3 text-sm leading-7 text-secondary">
          {description}
        </p>
        <div className="relative mt-8 flex items-center justify-between border-t border-primary/10 pt-5">
          <span className="text-xs font-semibold uppercase text-accent">
            Explore layer
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-on-accent">
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Page() {
  return (
    <main className="overflow-hidden bg-background">
      <section className="relative min-h-screen overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover object-center"
            src="/videos/0_Bulgaria_Europe_1920x1080.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Renewable energy landscape background video"
          />
        </div>
        <motion.div
          aria-hidden="true"
          initial={{ x: "-12%" }}
          animate={{ x: "112%" }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute bottom-0 top-0 z-[1] w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
        <div className="absolute inset-0 bg-slate-950/24" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/74 via-slate-950/34 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-6 pb-20 pt-16 lg:px-8">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="show"
            className="w-full"
          >
            <div className="max-w-2xl">
              <motion.h1
                variants={reveal}
                className="max-w-2xl text-4xl font-semibold leading-[1.06] text-on-inverse sm:text-5xl lg:text-7xl"
              >
                Powering India's clean energy backbone.
              </motion.h1>

              <motion.div variants={reveal} className="mt-8">
                <Link
                  href="#core-focus"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent shadow-xl shadow-black/25 ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-2xl hover:shadow-black/35"
                >
                  <span className="absolute inset-y-0 -left-8 w-8 skew-x-[-18deg] bg-white/25 transition-transform duration-700 group-hover:translate-x-56" />
                  <span className="relative">Explore the Platform</span>
                  <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-on-accent/16 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Platform Snapshot"
              title="A focused infrastructure platform for India's next power cycle."
              copy="EnerGrid combines transmission, storage, and renewable energy development into a disciplined platform for dependable clean power infrastructure."
            />
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative mt-16 space-y-12"
          >
            <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-primary/10 lg:block" />

            {platformSteps.map((step, index) => {
              const isReversed = index % 2 === 1;

              return (
                <motion.article
                  key={step.title}
                  variants={reveal}
                  className="group relative grid items-center gap-6 lg:grid-cols-2 lg:gap-16"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 180, damping: 22 }}
                    className={`relative min-h-[300px] overflow-hidden rounded-xl shadow-xl shadow-primary/10 lg:min-h-[360px] ${
                      isReversed ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 46vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse/76 via-inverse/16 to-transparent" />
                    <motion.div
                      aria-hidden="true"
                      initial={{ x: "-120%" }}
                      whileInView={{ x: "135%" }}
                      viewport={viewportOnce}
                      transition={{
                        duration: 1,
                        delay: 0.12 * index,
                        ease: "easeOut",
                      }}
                      className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/22 to-transparent"
                    />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 text-on-inverse">
                      <span className="rounded-full border border-white/20 bg-inverse/55 px-4 py-2 text-xs font-semibold uppercase backdrop-blur">
                        {step.stat}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-on-accent shadow-lg shadow-black/20">
                        <step.icon size={20} />
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: isReversed ? -5 : 5 }}
                    transition={{ type: "spring", stiffness: 170, damping: 24 }}
                    className={`relative rounded-xl border border-primary/10 bg-surface/80 p-7 shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:border-accent/30 group-hover:bg-surface group-hover:shadow-xl group-hover:shadow-primary/8 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20 dark:group-hover:bg-slate-900 dark:group-hover:shadow-black/30 lg:p-9 ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div
                      className={`absolute top-10 hidden h-px w-8 bg-accent lg:block ${
                        isReversed ? "-right-8" : "-left-8"
                      }`}
                    />
                    <div
                      className={`absolute top-[34px] hidden h-4 w-4 rounded-full border-4 border-surface bg-accent lg:block ${
                        isReversed ? "-right-10" : "-left-10"
                      }`}
                    />
                    <p className="text-sm font-semibold uppercase text-accent">
                      {step.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-primary md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 overflow-hidden text-base leading-8 text-secondary transition-all duration-500 ease-out lg:mt-0 lg:max-h-0 lg:opacity-0 lg:group-hover:mt-4 lg:group-hover:max-h-40 lg:group-hover:opacity-100">
                      {step.copy}
                    </p>
                    <span className="mt-5 hidden max-h-8 overflow-hidden text-sm font-semibold text-accent opacity-100 transition-all duration-300 group-hover:mt-0 group-hover:max-h-0 group-hover:opacity-0 lg:inline-flex">
                      Hover to view details
                    </span>
                  </motion.div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section
        id="core-focus"
        className="relative overflow-hidden border-y border-primary/10 bg-[#f8fbfa] py-24 dark:border-white/10 dark:bg-slate-950"
      >
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-1 w-28 bg-accent"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionHeading
                eyebrow="Core Focus"
                title="Three connected verticals, one reliable energy platform."
                copy="The strategy concentrates on the infrastructure layers that keep clean power available, dispatchable, and investable."
              />
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mt-6 h-1 w-24 rounded-full bg-accent"
              />
            </div>
            <Link
              href="/about"
              className="group relative inline-flex w-fit items-center gap-3 overflow-hidden rounded-lg border border-accent/25 bg-white px-4 py-2.5 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-xl hover:shadow-primary/10 dark:border-white/10 dark:bg-slate-900/80 dark:hover:border-accent/50 dark:hover:shadow-black/30"
            >
              <span className="absolute inset-y-0 left-0 w-1 bg-accent transition-all duration-300 group-hover:w-full group-hover:opacity-10" />
              <span className="relative">See How We Build</span>
              <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:bg-accent group-hover:text-on-accent">
                <ArrowRight size={15} />
              </span>
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <FocusCard key={area.title} index={index} {...area} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#12304a] text-on-inverse">
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-px bg-accent/40"
        />
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <p className="text-sm font-semibold uppercase text-accent">
                Operating Model
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-on-inverse md:text-4xl">
                Built to move from strategy to execution.
              </h2>
            </motion.div>
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="max-w-2xl text-base leading-8 text-on-inverse/78 lg:justify-self-end"
            >
              EnerGrid keeps its platform disciplined through governance,
              technology readiness, and partnership alignment across every
              infrastructure layer.
            </motion.p>
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 grid gap-5 md:grid-cols-3"
          >
            {operatingPrinciples.map((item) => (
              <motion.article
                key={item.title}
                variants={reveal}
                whileHover={{ y: -8 }}
                className="group relative min-h-[250px] overflow-hidden rounded-xl border border-white/28 bg-white/8 p-6 shadow-lg shadow-black/10 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-accent/70 hover:bg-white/12 hover:shadow-2xl hover:shadow-black/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/12 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-on-accent">
                    <item.icon size={23} />
                  </div>
                  <span className="text-sm font-semibold text-on-inverse/55">
                    {item.metric}
                  </span>
                </div>

                <div className="mt-9">
                  <p className="text-xs font-semibold uppercase text-accent">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-on-inverse">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-on-inverse/78">
                    {item.copy}
                  </p>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-px bg-white/24">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="h-px origin-left bg-accent"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Strategic Partners"
              title="Backed by infrastructure investors and sector pioneers."
              copy="EnerGrid is positioned to bring together long-term capital, operating experience, and focused development capability."
            />

            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid gap-4 sm:grid-cols-3"
            >
              {partners.map((partner) => (
                <motion.div
                  key={partner.name}
                  variants={reveal}
                  whileHover={{ y: -7 }}
                  className="group relative flex min-h-40 flex-col justify-between overflow-hidden rounded-xl border border-primary/10 bg-background p-6 text-primary shadow-sm transition-all duration-500 hover:border-accent/35 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 dark:border-white/10 dark:bg-slate-900/75 dark:shadow-black/20 dark:hover:border-accent/45 dark:hover:bg-slate-900 dark:hover:shadow-black/35"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-on-accent">
                      <partner.icon size={26} />
                    </div>
                    <span className="text-xs font-semibold uppercase text-secondary/60">
                      Partner
                    </span>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">{partner.name}</p>
                    <p className="mt-2 text-sm leading-6 text-secondary">
                      {partner.label}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8fbfa] py-24 dark:bg-slate-950">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-primary/10"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-24 w-24 border-l border-t border-accent/20"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-24 w-24 border-b border-r border-accent/20"
        />
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mx-auto max-w-5xl px-6 text-center lg:px-8"
        >
          <div className="rounded-2xl border border-primary/10 bg-white px-6 py-12 shadow-2xl shadow-primary/8 dark:border-white/10 dark:bg-slate-900/85 dark:shadow-black/35 md:px-12">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/8 px-4 py-2">
              <Leaf size={15} className="text-accent" />
              <p className="text-sm font-semibold uppercase text-accent">
                Build With EnerGrid
              </p>
            </div>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary md:text-4xl">
              Create sustainable energy infrastructure with a platform built for
              scale.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-secondary">
              Partner with EnerGrid to develop dependable transmission, storage,
              and renewable energy assets for India's evolving power needs.
            </p>
            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-3"
            >
              {["Transmission", "Storage", "Renewables"].map((item) => (
                <motion.span
                  key={item}
                  variants={reveal}
                  className="rounded-full border border-primary/10 bg-[#f8fbfa] px-4 py-2 text-xs font-semibold uppercase text-secondary dark:border-white/10 dark:bg-slate-950/70"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-on-accent shadow-xl shadow-accent/25 ring-1 ring-accent/25 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-2xl hover:shadow-accent/35"
              >
                <span className="absolute inset-y-0 -left-8 w-8 skew-x-[-18deg] bg-white/25 transition-transform duration-700 group-hover:translate-x-64" />
                <span className="relative">Start a Conversation</span>
                <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-on-accent/16 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
