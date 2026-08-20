import Link from "next/link";

import { investorHeroImage } from "./content";

export default function InvestorHero() {
  return (
    <section
      className="ir-hero-with-image relative overflow-hidden bg-ener-navy"
      style={{
        backgroundImage: `url("${investorHeroImage}")`,
      }}
    >
      {/* Directional overlay: protect left text, keep right image readable */}
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,26,55,0.92)_0%,rgba(6,26,55,0.78)_35%,rgba(6,26,55,0.30)_65%,rgba(6,26,55,0.0)_100%)]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.09),transparent_55%)]" />
      <div className="ir-grid-overlay absolute inset-0 opacity-35" />

      <div className="ir-hero-viewport relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-10 sm:py-12">
        <nav className="text-sm text-white/70" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-ener-green">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white">Investor Relations</li>
          </ol>
        </nav>

        <div className="ir-hero-fade ir-delay-1 mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-ener-green" />
          <span>Powering India&apos;s Energy Transition</span>
        </div>

        <h1 className="ir-hero-scale ir-delay-2 mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="block text-white">Investor</span>
          <span className="block text-ener-green">Relations</span>
        </h1>

        <p className="ir-hero-fade ir-delay-3 mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Building a strong foundation for India&apos;s energy transition.
        </p>

        <div className="ir-hero-rise ir-delay-4 mt-8 flex flex-wrap gap-3">
          <a
            href="#strategic-partners"
            className="inline-flex items-center justify-center rounded-xl bg-ener-green px-6 py-3 font-semibold text-black shadow-lg shadow-ener-green/25 transition hover:bg-emerald-300"
          >
            Our Partners
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="ir-hero-transition" aria-hidden="true" />
    </section>
  );
}
