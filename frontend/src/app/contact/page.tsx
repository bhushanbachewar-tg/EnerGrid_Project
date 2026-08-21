"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Link2,
  Mail,
  MapPin,
  Navigation,
  type LucideIcon,
} from "lucide-react";

/**
 * Source: https://www.energrid.in/energrid-contact-us/
 * Registered office (MCA / company filings) matches this Windsor address.
 */
const OFFICE = {
  city: "Mumbai",
  company: "Enerica Regrid Infra Private Ltd.",
  lines: [
    "Unit No. 101, First Floor, Windsor,",
    "Village KoleKalyan, Off CST Road,",
    "Vidyanagari Marg, Kalina,",
    "Santacruz (East), Mumbai – 400 098",
  ],
  fullAddress:
    "Unit No. 101, First Floor, Windsor, Village KoleKalyan, Off CST Road, Vidyanagari Marg, Kalina, Santacruz East, Mumbai 400098",
  email: "info@energrid.in",
  linkedin:
    "https://www.linkedin.com/company/energrid-enerica-regrid-infra-private-limited",
  // Windsor, Off CST Road, Kalina (near BKC) — Plus Code area 3V96+PP
  lat: 19.072996,
  lng: 72.861296,
} as const;

const MAP_QUERY = encodeURIComponent(OFFICE.fullAddress);
const MAP_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&hl=en&z=17&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
const DIRECTIONS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
};

function LazyMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[340px] overflow-hidden rounded-[1.5rem] border border-primary/10 bg-surface shadow-[0_20px_50px_-28px_rgba(15,23,42,0.35)] sm:h-[460px]"
    >
      {/* Soft map frame gradient */}
      <div className="pointer-events-none absolute inset-0 z-[1] rounded-[1.5rem] ring-1 ring-inset ring-black/5" />

      {isVisible ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center gap-3 bg-surface">
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { scale: [1, 1.15, 1], opacity: [0.55, 1, 0.55] }
                }
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent"
              >
                <MapPin size={22} />
              </motion.div>
              <p className="text-sm text-secondary">Loading map…</p>
            </div>
          )}
          <iframe
            title="EnerGrid office — Windsor, Kalina, Mumbai"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsLoaded(true)}
            className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            allowFullScreen
          />
        </>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 text-secondary">
          <MapPin className="h-8 w-8 text-accent/50" />
          <p className="text-sm">Map loads when in view</p>
        </div>
      )}

      {/* Floating pin chip */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="absolute bottom-4 left-4 right-4 z-[3] flex items-start gap-3 rounded-2xl border border-primary/10 bg-surface/95 p-3.5 shadow-lg backdrop-blur-md sm:right-auto sm:max-w-xs"
      >
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-on-accent shadow-md shadow-accent/30">
          <MapPin size={16} />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-primary">EnerGrid</p>
          <p className="mt-0.5 text-xs leading-5 text-secondary">
            Windsor · Unit 101 · Kalina, Mumbai 400 098
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  children,
  href,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
  href?: string;
}) {
  const reduceMotion = useReducedMotion();
  const Wrapper = href ? motion.a : motion.div;
  const linkProps = href
    ? {
        href,
        ...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {}),
      }
    : {};

  return (
    <Wrapper
      {...linkProps}
      variants={cardVariant}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -4, transition: { type: "spring", stiffness: 380, damping: 24 } }
      }
      className="group flex gap-4 rounded-2xl border border-primary/10 bg-surface p-5 shadow-sm transition-shadow hover:border-accent hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">
        <Icon size={20} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
          {label}
        </p>
        <div className="mt-2 text-sm leading-6 text-secondary">{children}</div>
      </div>
      {href && (
        <ArrowUpRight
          size={16}
          className="mt-1 shrink-0 text-secondary transition-colors group-hover:text-accent"
        />
      )}
    </Wrapper>
  );
}

function ContactHero() {
  return (
    <section className="relative min-h-[640px] overflow-hidden bg-inverse">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-banner.jpg"
          alt="EnerGrid office"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-inverse/90 via-inverse/55 to-inverse/20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl items-center px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            EnerGrid
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-on-inverse sm:text-6xl lg:text-7xl">
            Contact Us
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-on-inverse sm:text-xl">
            Reach our Mumbai office for enquiries, partnerships and media.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Page() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <ContactHero />

      <main className="overflow-hidden bg-background text-primary">
        {/* Intro + contact grid */}
        <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="relative mb-12 max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Get in touch
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Our office
            </h2>
            <p className="mt-4 text-base leading-7 text-secondary">
              Visit or write to EnerGrid at Windsor, Kalina. For general
              enquiries, investor relations or media requests, use the channels
              below.
            </p>
          </motion.div>

          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="space-y-3.5"
            >
              <ContactCard icon={MapPin} label={OFFICE.city}>
                <p className="font-semibold text-primary">{OFFICE.company}</p>
                <address className="mt-1.5 not-italic leading-6">
                  {OFFICE.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </ContactCard>

              <ContactCard
                icon={Mail}
                label="Email"
                href={`mailto:${OFFICE.email}`}
              >
                <span className="font-medium text-primary">{OFFICE.email}</span>
              </ContactCard>

              <ContactCard icon={Link2} label="LinkedIn" href={OFFICE.linkedin}>
                <span className="font-medium text-primary">
                  EnerGrid on LinkedIn
                </span>
              </ContactCard>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="lg:sticky lg:top-24"
            >
              <LazyMap />

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <motion.a
                  href={DIRECTIONS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={
                    reduceMotion ? undefined : { y: -2, scale: 1.02 }
                  }
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent shadow-lg shadow-accent/25 transition hover:opacity-90"
                >
                  <Navigation size={15} />
                  Get directions
                </motion.a>

                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-surface px-4 py-2.5 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent"
                >
                  Open in Google Maps
                  <ExternalLink size={13} />
                </a>
              </div>

              <p className="mt-3 text-xs leading-5 text-secondary">
                Pin resolved from the official Windsor office address on CST /
                Vidyanagari Marg, Kalina.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-primary/10 bg-surface px-6 py-16 lg:px-8 lg:py-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 rounded-[1.75rem] bg-inverse px-8 py-10 text-on-inverse sm:px-12 lg:flex-row lg:items-center lg:py-12"
          >
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Prefer email?
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Write to us and our team will respond promptly.
              </h3>
              <p className="mt-3 text-sm leading-6 text-secondary">
                Share your query with{" "}
                <span className="text-on-inverse">{OFFICE.email}</span> — we typically
                reply within one business day.
              </p>
            </div>

            <motion.a
              href={`mailto:${OFFICE.email}`}
              whileHover={reduceMotion ? undefined : { scale: 1.04, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-on-accent shadow-lg shadow-accent/30 transition hover:opacity-90"
            >
              Email EnerGrid
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>
        </section>
      </main>
    </>
  );
}
