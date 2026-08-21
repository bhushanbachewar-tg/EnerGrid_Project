import Link from "next/link";

import { investorHeroImage } from "./content";

export default function InvestorHero() {
  return (
    <section
      className="ir-hero-with-image relative overflow-hidden bg-inverse"
      style={{
        backgroundImage: `url("${investorHeroImage}")`,
      }}
    >
      {/* Directional overlay: protect left text, keep right image readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-inverse/92 via-inverse/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />
      <div className="ir-grid-overlay absolute inset-0 opacity-35" />

      <div className="ir-hero-viewport relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-10 sm:py-12">
        <nav className="text-sm text-on-inverse/70" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-on-inverse">Investor Relations</li>
          </ol>
        </nav>

        <div className="ir-hero-fade ir-delay-1 mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-on-inverse/10 bg-on-inverse/5 px-4 py-2 text-sm text-on-inverse/85 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span>Powering India&apos;s Energy Transition</span>
        </div>

        <h1 className="ir-hero-scale ir-delay-2 mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="block text-on-inverse">Investor</span>
          <span className="block text-accent">Relations</span>
        </h1>

        <p className="ir-hero-fade ir-delay-3 mt-6 max-w-2xl text-base leading-relaxed text-on-inverse/80 sm:text-lg">
          Building a strong foundation for India&apos;s energy transition.
        </p>

        <div className="ir-hero-rise ir-delay-4 mt-8 flex flex-wrap gap-3">
          <a
            href="#strategic-partners"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 font-semibold text-on-accent shadow-lg shadow-accent/25 transition hover:opacity-90"
          >
            Our Partners
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-on-inverse/15 bg-on-inverse/5 px-6 py-3 font-semibold text-on-inverse/90 backdrop-blur-sm transition hover:bg-on-inverse/10"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="ir-hero-transition" aria-hidden="true" />
    </section>
  );
}
