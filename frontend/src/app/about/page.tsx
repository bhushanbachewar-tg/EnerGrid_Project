
"use client";

import { motion } from "framer-motion";
import Header from "../../Components/Commons/Header";
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
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  },
];

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
    y: 50,
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

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -70,
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
    x: 70,
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

export default function About() {
  return (
    <>
<Header
  title="About Us"
  subtitle="Learn more about our company and our mission"
  image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
/>
    <main className="overflow-hidden bg-background text-primary">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[720px] overflow-hidden bg-inverse">

        {/* Background image */}
        <motion.img
          src="https://www.downtoearth.org.in/wp-content/uploads/2021/08/solar-wind-energy.jpg"
          alt="Renewable energy infrastructure"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-inverse/70"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-inverse via-inverse/75 to-inverse/20" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 lg:px-8">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >

            {/* Badge */}

            <motion.div
              variants={fadeUp}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-on-inverse/20 bg-on-inverse/10 px-4 py-2 text-sm font-medium text-on-inverse backdrop-blur-md"
            >
              <motion.span
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-accent"
              />

              Powering India's Energy Transition
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-on-inverse sm:text-6xl lg:text-7xl"
            >
              Building the infrastructure for a{" "}
              <span className="text-accent">
                cleaner energy future.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg leading-8 text-on-inverse/80 sm:text-xl"
            >
              EnerGrid is committed to leading India's energy transition by
              developing critical infrastructure across power transmission,
              battery energy storage and renewable energy.
            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
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
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-on-accent transition hover:opacity-90"
              >
                Explore our focus

                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>

              <motion.a
                href="#our-story"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center rounded-full border border-on-inverse/30 bg-on-inverse/10 px-6 py-3.5 font-semibold text-on-inverse backdrop-blur-md transition hover:bg-on-inverse/20"
              >
                Our story
              </motion.a>

            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>


      {/* =====================================================
          INTRO / OUR STORY
      ===================================================== */}

      <motion.section
        id="our-story"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
      >

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          <motion.div variants={slideLeft}>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Who we are
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              Infrastructure that enables India's energy transition.
            </h2>

          </motion.div>

          <motion.div
            variants={slideRight}
            className="space-y-6 text-lg leading-8 text-secondary"
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

      <section className="bg-surface py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="grid overflow-hidden rounded-[2rem] bg-inverse lg:grid-cols-2"
          >

            {/* Image */}

            <motion.div
              variants={slideLeft}
              className="relative min-h-[450px]"
            >

              <motion.img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                alt="Large scale solar energy project"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-inverse/70 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8"
              >

                <div className="inline-flex items-center gap-2 rounded-full border border-on-inverse/20 bg-on-inverse/10 px-4 py-2 text-sm text-on-inverse backdrop-blur-md">
                  <Sun size={16} />
                  Renewable Energy
                </div>

              </motion.div>

            </motion.div>


            {/* Mission content */}

            <motion.div
              variants={slideRight}
              className="flex items-center p-10 sm:p-14 lg:p-16"
            >

              <div>

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent"
                >
                  <Leaf size={25} />
                </motion.div>

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Our mission
                </p>

                <h2 className="text-3xl font-semibold leading-tight text-on-inverse sm:text-4xl">
                  Enabling a resilient, reliable and sustainable energy system.
                </h2>

                <p className="mt-6 text-lg leading-8 text-secondary">
                  We are committed to enhancing India's power evacuation
                  capacity, facilitating renewable integration and supporting
                  grid reliability while contributing to sustainable economic
                  growth.
                </p>

                <motion.div
                  variants={staggerContainer}
                  className="mt-8 space-y-4"
                >

                  {missionPoints.map((item) => (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      className="flex items-start gap-3 text-on-inverse/80"
                    >

                      <CheckCircle2
                        size={20}
                        className="mt-1 shrink-0 text-accent"
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
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
      >

        <motion.div
          variants={fadeUp}
          className="max-w-3xl"
        >

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            What we do
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Three pillars powering the transition.
          </h2>

          <p className="mt-6 text-lg leading-8 text-secondary">
            EnerGrid is building across the critical infrastructure required
            to connect, store and generate clean energy at scale.
          </p>

        </motion.div>


        <motion.div
          variants={staggerContainer}
          className="mt-14 grid gap-7 md:grid-cols-3"
        >

          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="group overflow-hidden rounded-3xl border border-primary/10 bg-surface shadow-sm transition-shadow duration-300 hover:shadow-2xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <motion.img
                    src={area.image}
                    alt={area.title}
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-inverse/70 to-transparent" />

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
                    className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-primary shadow-lg"
                  >
                    <Icon size={21} />
                  </motion.div>

                </div>

                <div className="p-7">

                  <h3 className="text-xl font-semibold text-primary">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 text-secondary">
                    {area.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent"
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

      <section className="bg-accent/10 py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              The opportunity
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              A country entering a new energy era.
            </h2>

            <p className="mt-6 text-lg leading-8 text-secondary">
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
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >

            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className="rounded-3xl border border-accent/20 bg-surface p-7 shadow-sm"
              >

                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-semibold tracking-tight text-primary"
                >
                  {stat.value}
                </motion.p>

                <p className="mt-3 font-semibold text-accent">
                  {stat.label}
                </p>

                <p className="mt-3 text-sm leading-6 text-secondary">
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

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

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
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-inverse text-on-inverse"
            >
              <Globe2 size={26} />
            </motion.div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Our sponsors
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-primary">
              Backed by strong global partners.
            </h2>

            <p className="mt-6 text-lg leading-8 text-secondary">
              EnerGrid draws strength from its co-sponsors, combining
              operational expertise, financial strength, governance and a
              strong ESG focus.
            </p>

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="mt-8 rounded-2xl bg-inverse p-6 text-on-inverse"
            >

              <p className="text-3xl font-semibold">
                $300M
              </p>

              <p className="mt-2 text-sm leading-6 text-secondary">
                Equity capital committed by EnerGrid's three sponsors.
              </p>

            </motion.div>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="space-y-4"
          >

            {partners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                variants={slideRight}
                whileHover={{
                  x: 8,
                  scale: 1.01,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className="group flex items-center justify-between rounded-3xl border border-primary/10 bg-surface p-6 hover:border-accent hover:shadow-lg"
              >

                <div className="flex items-center gap-5">

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                    }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface text-lg font-bold text-primary"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>

                  <div>

                    <h3 className="text-lg font-semibold text-primary">
                      {partner.name}
                    </h3>

                    <p className="mt-1 max-w-xl text-sm leading-6 text-secondary">
                      {partner.description}
                    </p>

                  </div>
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="shrink-0 text-secondary group-hover:text-accent"
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

      <section className="relative overflow-hidden bg-inverse py-24 lg:py-32">

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

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
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent"
              >
                <ShieldCheck size={28} />
              </motion.div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Built for reliability
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-on-inverse sm:text-5xl">
                Connecting renewable generation to the grid.
              </h2>

              <p className="mt-6 text-lg leading-8 text-secondary">
                Renewable energy is only as powerful as the infrastructure
                that enables it to reach consumers. EnerGrid is focused on
                strengthening transmission, deploying storage and developing
                generation assets that work together as one integrated energy
                system.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <motion.div
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(52, 211, 153, 0.3)",
                  }}
                  className="rounded-2xl border border-on-inverse/10 bg-on-inverse/5 p-5"
                >

                  <Zap
                    className="text-accent"
                    size={23}
                  />

                  <p className="mt-4 font-semibold text-on-inverse">
                    Grid reliability
                  </p>

                  <p className="mt-2 text-sm leading-6 text-secondary">
                    Supporting a stronger and more resilient power network.
                  </p>

                </motion.div>


                <motion.div
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(52, 211, 153, 0.3)",
                  }}
                  className="rounded-2xl border border-on-inverse/10 bg-on-inverse/5 p-5"
                >

                  <Wind
                    className="text-accent"
                    size={23}
                  />

                  <p className="mt-4 font-semibold text-on-inverse">
                    Renewable integration
                  </p>

                  <p className="mt-2 text-sm leading-6 text-secondary">
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
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-inverse/60 to-transparent" />

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
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
                className="absolute bottom-7 left-7 right-7 rounded-2xl border border-on-inverse/20 bg-on-inverse/10 p-5 backdrop-blur-xl"
              >

                <p className="text-sm font-medium text-on-inverse">
                  Transmission + Storage + Renewable Generation
                </p>

                <p className="mt-2 text-sm leading-6 text-secondary">
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

      <section className="px-6 py-24 lg:px-8 lg:py-32">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.96,
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
          className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-accent px-8 py-16 text-center text-on-accent sm:px-16 lg:py-20"
        >

          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-on-accent/20 text-on-accent"
          >
            <Leaf size={28} />
          </motion.div>

          <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-semibold tracking-tight text-on-accent sm:text-5xl">
            Accelerating India's journey towards a cleaner energy future.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-on-accent">
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
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-inverse px-7 py-3.5 font-semibold text-on-inverse transition hover:opacity-90"
          >
            Get in touch

            <motion.span
              whileHover={{ x: 4 }}
            >
              <ArrowRight size={18} />
            </motion.span>

          </motion.a>

        </motion.div>

      </section>

    </main>
    </>
  );
}
