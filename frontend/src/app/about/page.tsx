"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  Globe2,
  Leaf,
  Network,
  ShieldCheck,
  Sun,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";

type FocusArea = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
};

type Stat = {
  value: string;
  label: string;
  description: string;
};

type Partner = {
  name: string;
  description: string;
  url: string;
};

/* =========================================================
   FOCUS AREAS
========================================================= */

const focusAreas: FocusArea[] = [
  {
    icon: Network,
    title: "Power Transmission",
    description:
      "Developing modern transmission infrastructure to strengthen India's grid and enable reliable evacuation of renewable power.",
    image:
      "https://www.constructionworld.in/assets/uploads/img_34043_1776321903.webp",
  },
  {
    icon: BatteryCharging,
    title: "Battery Energy Storage",
    description:
      "Deploying utility-scale Battery Energy Storage Systems to improve grid flexibility, reliability and renewable energy integration.",
    image:
      "https://www.constructionworld.in/assets/uploads/img_33079_1774672617.webp",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description:
      "Building large-scale renewable energy projects that help accelerate India's transition towards a cleaner energy future.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
  },
];

/* =========================================================
   STATS
========================================================= */

const stats: Stat[] = [
  {
    value: "500 GW",
    label: "RE capacity target",
    description: "Supporting India's ambitious renewable energy goals.",
  },
  {
    value: "₹9.15L Cr",
    label: "Expected investment",
    description: "Estimated infrastructure investment opportunity.",
  },
  {
    value: "458 GW",
    label: "Projected demand",
    description: "Projected electricity demand by 2032.",
  },
  {
    value: "$300M",
    label: "Committed equity",
    description: "Equity capital committed by EnerGrid's sponsors.",
  },
];

/* =========================================================
   PARTNERS
========================================================= */

const partners: Partner[] = [
  {
    name: "IndiGrid",
    description:
      "Operational expertise and deep experience in power transmission infrastructure.",
    url: "https://www.indigrid.co.in/",
  },
  {
    name: "British International Investment",
    description:
      "Strong financial backing, governance and long-term investment expertise.",
    url: "https://www.bii.co.uk/en/",
  },
  {
    name: "Norfund",
    description:
      "Climate-focused investment and a strong commitment to sustainable development.",
    url: "https://www.norfund.no/",
  },
];

/* =========================================================
   MISSION POINTS
========================================================= */

const missionPoints: string[] = [
  "Strengthen India's power transmission infrastructure",
  "Enable large-scale renewable energy integration",
  "Deploy advanced battery energy storage solutions",
  "Support a resilient and reliable national grid",
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const viewport = {
  once: true,
  amount: 0.2,
};

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[500px] overflow-hidden bg-slate-950">

        {/* Background image */}

        <motion.img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=85"
          alt="Power transmission infrastructure at sunset"
          initial={{
            scale: 1.08,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Simple dark overlay - NO GRADIENT */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-slate-950/62"
        />

        {/* Hero content */}

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:px-8">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >

            {/* Badge */}

            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              Powering India's Energy Transition
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Infrastructure for India's clean energy future.
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg"
            >
              Developing transmission, storage and renewable energy assets for
              a stronger, more reliable grid.
            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap gap-4"
            >

              <motion.a
                href="#our-focus"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-400"
              >
                Explore our focus

                <ArrowRight size={18} />
              </motion.a>

            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <motion.section
        id="our-story"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20"
      >

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Left */}

          <motion.div variants={slideLeft}>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Who we are
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Infrastructure that enables India's energy transition.
            </h2>

          </motion.div>

          {/* Right */}

          <motion.div
            variants={slideRight}
            className="space-y-5 text-lg leading-8 text-slate-600"
          >

            <p>
              EnerGrid is focused on developing critical infrastructure that
              will play a crucial role in India's renewable energy and net-zero
              ambitions.
            </p>

            <p>
              From modern transmission networks to utility-scale battery
              storage and renewable generation projects, we are building the
              infrastructure needed to strengthen the national grid and enable
              greater integration of solar, wind and other renewable energy
              sources.
            </p>

            <p>
              Our approach combines long-term infrastructure development with
              operational excellence, strong governance and a clear commitment
              to sustainability.
            </p>

          </motion.div>

        </div>
      </motion.section>


      {/* =====================================================
          MISSION
      ===================================================== */}

      <section className="bg-slate-50 py-16 lg:py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="grid overflow-hidden rounded-[2rem] bg-slate-950 lg:grid-cols-2"
          >

            {/* Mission Image */}

            <motion.div
              variants={slideLeft}
              className="relative min-h-[400px]"
            >

              <motion.img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85"
                alt="Large scale solar energy project"
                initial={{
                  scale: 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />

            </motion.div>


            {/* Mission Content */}

            <motion.div
              variants={slideRight}
              className="flex items-center p-8 sm:p-10 lg:p-12"
            >

              <div>

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400"
                >
                  <Leaf size={25} />
                </motion.div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Our mission
                </p>

                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Enabling a resilient, reliable and sustainable energy
                  system.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  We are committed to enhancing India's power evacuation
                  capacity, facilitating renewable integration and supporting
                  grid reliability while contributing to sustainable economic
                  growth.
                </p>

                <motion.div
                  variants={staggerContainer}
                  className="mt-7 space-y-3"
                >

                  {missionPoints.map((item) => (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      className="flex items-start gap-3 text-slate-200"
                    >

                      <CheckCircle2
                        size={20}
                        className="mt-1 shrink-0 text-emerald-400"
                      />

                      <span>{item}</span>

                    </motion.div>
                  ))}

                </motion.div>

              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* =====================================================
          FOCUS AREAS
      ===================================================== */}

      <motion.section
        id="our-focus"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20"
      >

        {/* Section Heading */}

        <motion.div
          variants={fadeUp}
          className="max-w-3xl"
        >

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            What we do
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Three pillars powering the transition.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            EnerGrid is building across the critical infrastructure required
            to connect, store and generate clean energy at scale.
          </p>

        </motion.div>


        {/* Cards */}

        <motion.div
          variants={staggerContainer}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >

          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >

                {/* Image */}

                <div className="relative h-60 overflow-hidden">

                  <motion.img
                    src={area.image}
                    alt={area.title}
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="h-full w-full object-cover"
                  />

                  {/* No gradient */}

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-900 shadow-lg"
                  >
                    <Icon size={21} />
                  </motion.div>

                </div>

                {/* Card Content */}

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-slate-950">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {area.description}
                  </p>

                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-600"
                  >
                    Learn more

                    <ArrowRight size={16} />
                  </motion.div>

                </div>

              </motion.article>
            );
          })}

        </motion.div>
      </motion.section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="bg-emerald-50 py-16 lg:py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              The opportunity
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              A country entering a new energy era.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              India's growing energy demand and renewable ambitions are
              creating a significant opportunity for modern energy
              infrastructure.
            </p>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >

            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
              >

                <motion.p
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="text-4xl font-semibold tracking-tight text-slate-950"
                >
                  {stat.value}
                </motion.p>

                <p className="mt-2 font-semibold text-emerald-700">
                  {stat.label}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {stat.description}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          PARTNERS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideLeft}
          >

            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: -3,
              }}
              className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white"
            >
              <Globe2 size={26} />
            </motion.div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Our sponsors
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
              Backed by strong global partners.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              EnerGrid draws strength from its co-sponsors, combining
              operational expertise, financial strength, governance and a
              strong ESG focus.
            </p>

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="mt-6 rounded-2xl bg-slate-950 p-5 text-white"
            >

              <p className="text-3xl font-bold">
                $300M
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Equity capital committed by EnerGrid's three sponsors.
              </p>

            </motion.div>

          </motion.div>


          {/* Right */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="space-y-3"
          >

            {partners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                variants={slideRight}
                whileHover={{
                  x: 6,
                  scale: 1.01,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className="group flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-5 hover:border-emerald-300 hover:shadow-lg"
              >

                <div className="flex items-center gap-4">

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-lg font-bold text-slate-900"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>

                  <div>

                    <h3 className="text-lg font-semibold text-slate-950">
                      {partner.name}
                    </h3>

                    <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">
                      {partner.description}
                    </p>

                  </div>

                </div>

                <motion.div
                  whileHover={{
                    x: 5,
                  }}
                  className="shrink-0 text-slate-400 group-hover:text-emerald-600"
                >
                  <ArrowRight size={20} />
                </motion.div>

              </motion.a>
            ))}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          GRID RELIABILITY
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-20">

        {/* Decorative circles - no gradients */}

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Content */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideLeft}
            >

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                }}
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400"
              >
                <ShieldCheck size={28} />
              </motion.div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Built for reliability
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Connecting renewable generation to the grid.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Renewable energy is only as powerful as the infrastructure
                that enables it to reach consumers. EnerGrid is focused on
                strengthening transmission, deploying storage and developing
                generation assets that work together as one integrated energy
                system.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <motion.div
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(52, 211, 153, 0.3)",
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >

                  <Zap
                    className="text-emerald-400"
                    size={23}
                  />

                  <p className="mt-3 font-semibold text-white">
                    Grid reliability
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Supporting a stronger and more resilient power network.
                  </p>

                </motion.div>


                <motion.div
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(52, 211, 153, 0.3)",
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >

                  <Wind
                    className="text-emerald-400"
                    size={23}
                  />

                  <p className="mt-3 font-semibold text-white">
                    Renewable integration
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Enabling more solar and wind power to flow into the grid.
                  </p>

                </motion.div>

              </div>

            </motion.div>


            {/* Image */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideRight}
              className="relative overflow-hidden rounded-[2rem]"
            >

              <motion.img
                src="https://www.constructionworld.in/assets/uploads/img_34043_1776321903.webp"
                alt="Transmission infrastructure"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="h-[460px] w-full object-cover"
              />

              {/* No gradient */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={viewport}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                }}
                className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-slate-950/80 p-5 backdrop-blur-xl"
              >

                <p className="text-sm font-medium text-white">
                  Transmission + Storage + Renewable Generation
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Building the infrastructure ecosystem required for India's
                  next generation of energy.
                </p>

              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CLOSING CTA
      ===================================================== */}

      <section className="px-6 py-16 lg:px-8 lg:py-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-emerald-500 px-8 py-12 text-center sm:px-16 lg:py-16"
        >

          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white"
          >
            <Leaf size={28} />
          </motion.div>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Accelerating India's journey towards a cleaner energy future.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            EnerGrid is dedicated to building the infrastructure that will
            make India's energy system cleaner, more resilient and ready for
            the future.
          </p>

          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 font-semibold text-white transition hover:bg-slate-800"
          >
            Get in touch

            <ArrowRight size={18} />
          </motion.a>

        </motion.div>

      </section>

    </main>
  );
}
