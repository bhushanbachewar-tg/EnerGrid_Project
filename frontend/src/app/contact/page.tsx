"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Link2,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Send,
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
  phone: "+91 00000 00000",
  linkedin:
    "https://www.linkedin.com/company/energrid-enerica-regrid-infra-private-limited",
} as const;

const HERO_IMAGE = "/images/contact-banner.jpg";

const MAP_QUERY = encodeURIComponent(OFFICE.fullAddress);
const MAP_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&hl=en&z=17&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
const DIRECTIONS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.3 } as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.12 },
  },
};

const cardIn = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease },
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
      className="relative h-full min-h-[520px] overflow-hidden rounded-[1.5rem] border border-primary/10 bg-surface lg:min-h-0"
    >
      <div className="pointer-events-none absolute inset-0 z-[1] rounded-[1.5rem] ring-1 ring-inset ring-black/5" />

      {isVisible ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center gap-3 bg-surface">
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { scale: [1, 1.08, 1], opacity: [0.55, 1, 0.55] }
                }
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent"
              >
                <MapPin size={22} />
              </motion.div>
              <p className="text-sm text-secondary">Loading map</p>
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
        <div className="flex h-full min-h-[520px] flex-col items-center justify-center gap-3 text-secondary lg:min-h-0">
          <MapPin className="h-8 w-8 text-accent/50" />
          <p className="text-sm">Map loads when in view</p>
        </div>
      )}

      <div className="absolute bottom-5 left-5 right-5 z-[3] flex flex-wrap items-center gap-3">
        <a
          href={DIRECTIONS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-inverse px-5 py-2.5 text-sm font-semibold text-on-inverse shadow-lg shadow-primary/15 transition-all duration-300 ease-in-out hover:opacity-90"
        >
          <Navigation size={15} />
          Directions
        </a>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-surface/90 px-5 py-2.5 text-sm font-semibold text-primary backdrop-blur-md transition-all duration-300 ease-in-out hover:border-accent hover:text-accent"
        >
          Open map
          <ArrowUpRight size={14} />
        </a>
      </div>
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
      variants={cardIn}
      className="group flex h-auto w-full items-start gap-4 overflow-hidden rounded-[1.35rem] border border-primary/10 bg-surface/90 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 ease-in-out hover:border-accent hover:shadow-lg hover:shadow-accent/15 sm:gap-5 sm:p-6 lg:p-7"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/5 text-accent">
        <Icon size={20} />
      </div>
      <div className="min-w-0 flex-1 overflow-hidden">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
          {label}
        </p>
        <div className="mt-2 break-words whitespace-normal text-base leading-7 text-primary">
          {children}
        </div>
      </div>
      {href ? (
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-secondary transition-colors duration-300 ease-in-out group-hover:text-accent"
        />
      ) : null}
    </Wrapper>
  );
}

const fieldClass =
  "w-full rounded-xl border border-primary/10 bg-background px-5 py-4 text-base text-primary placeholder:text-lg placeholder:text-secondary/70 transition-all duration-300 ease-in-out focus:border-accent focus:bg-surface focus:outline-none focus:shadow-[0_0_0_4px_rgb(var(--color-accent)/0.16)]";

function ContactForm({ reduceMotion: _reduceMotion }: { reduceMotion: boolean }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${OFFICE.email}?subject=${encodeURIComponent(subject || "EnerGrid enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
      className="grid items-stretch gap-x-10 gap-y-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:grid-rows-[auto_minmax(280px,1fr)] lg:gap-x-16 lg:gap-y-4"
    >
      <div>
        <motion.p
          variants={fadeUp}
          className="text-sm font-semibold uppercase tracking-[0.18em] text-accent"
        >
          Message
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-primary md:text-4xl"
        >
          Have an enquiry
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-4 max-w-sm text-base leading-8 text-secondary">
          Share a few details and our team will get back to you
        </motion.p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="sr-only">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="sr-only">Subject</span>
          <input
            name="subject"
            type="text"
            required
            placeholder="Subject"
            className={fieldClass}
          />
        </label>
      </div>

      <motion.div
        variants={fadeUp}
        className="flex min-h-[280px] items-center justify-center self-stretch bg-transparent lg:min-h-0"
      >
        <img
          src="/images/message.png"
          alt="Send us a message"
          width={640}
          height={480}
          className="h-full w-auto max-w-full bg-transparent object-contain mix-blend-multiply dark:mix-blend-normal [.theme-electric_&]:mix-blend-normal"
        />
      </motion.div>

      <div className="flex min-h-[280px] flex-col self-stretch">
        <label className="block min-h-0 flex-1">
          <span className="sr-only">Message</span>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Message"
            className={`${fieldClass} h-full min-h-[160px] resize-none`}
          />
        </label>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-on-accent shadow-lg shadow-accent/25 transition-all duration-300 ease-in-out hover:opacity-90"
          >
            Send Message
            <Send size={16} />
          </button>
          {sent ? (
            <p className="text-sm text-secondary">Opening your email client</p>
          ) : null}
        </div>
      </div>
    </motion.form>
  );
}

export default function Page() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-background text-primary">
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-inverse">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-inverse/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-inverse via-inverse/75 to-inverse/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-28 lg:px-8 lg:pb-20 lg:pt-32">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease }}
            className="text-sm font-semibold uppercase tracking-[0.18em] text-accent"
          >
            EnerGrid
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.12, ease }}
            className="mt-4 max-w-[16ch] text-4xl font-semibold leading-tight tracking-tight text-on-inverse md:text-5xl lg:text-6xl"
          >
            Contact us for enquiries
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15, delay: 0.22, ease }}
            className="mt-6 max-w-lg text-base leading-8 text-on-inverse/80 md:text-lg"
          >
            Reach our Mumbai office for partnerships, media and general enquiries
          </motion.p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase text-accent">Our office</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-primary md:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-base leading-8 text-secondary">
              Visit Windsor in Kalina, or write to us — we respond promptly
            </p>
          </motion.div>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
            className="flex h-auto min-h-0 w-full flex-col gap-4"
          >
            <ContactCard icon={MapPin} label={OFFICE.city}>
              <p className="break-words text-lg font-semibold leading-snug">
                {OFFICE.company}
              </p>
              <address className="mt-2 break-words whitespace-normal not-italic text-[15px] leading-7 text-primary/80">
                {OFFICE.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </ContactCard>

            <ContactCard icon={Phone} label="Phone" href={`tel:${OFFICE.phone.replace(/\s/g, "")}`}>
              <span className="text-lg font-medium">{OFFICE.phone}</span>
            </ContactCard>

            <ContactCard icon={Mail} label="Email" href={`mailto:${OFFICE.email}`}>
              <span className="text-lg font-medium">{OFFICE.email}</span>
            </ContactCard>

            <ContactCard icon={Link2} label="LinkedIn" href={OFFICE.linkedin}>
              <span className="text-lg font-medium">Follow EnerGrid</span>
            </ContactCard>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="h-full min-h-[520px] lg:min-h-0"
          >
            <LazyMap />
          </motion.div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-surface">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <ContactForm reduceMotion={!!reduceMotion} />
        </div>
      </section>
    </main>
  );
}
