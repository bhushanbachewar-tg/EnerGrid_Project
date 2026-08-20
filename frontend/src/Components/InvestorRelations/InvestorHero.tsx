import Link from "next/link";

export default function InvestorHero() {
  return (
    <section className="relative overflow-hidden bg-ener-navy">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.16),transparent_55%)]" />
      <div className="ir-grid-overlay absolute inset-0" />

      <svg
        className="pointer-events-none absolute bottom-8 right-0 hidden h-[62%] w-[42%] text-ener-green/20 lg:block"
        viewBox="0 0 480 420"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M40 380 L140 220 L180 220 L240 90 L280 90"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M140 220 L140 380" stroke="currentColor" strokeWidth="1.5" />
        <path d="M240 90 L240 380" stroke="currentColor" strokeWidth="1.5" />
        <path d="M110 250 H170 M210 130 H270" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="280" cy="90" r="6" className="fill-ener-green/50" />
        <circle cx="140" cy="220" r="4" className="fill-ener-green/40" />
      </svg>

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

        <div className="ir-fade-up ir-delay-1 mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85">
          <span className="h-2 w-2 rounded-full bg-ener-green" />
          <span>Powering India&apos;s Energy Transition</span>
        </div>

        <h1 className="ir-fade-up ir-delay-2 mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="block text-white">Investor</span>
          <span className="block text-ener-green">Relations</span>
        </h1>

        <p className="ir-fade-up ir-delay-3 mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Building a strong foundation for India&apos;s energy transition.
        </p>

        <div className="ir-fade-up ir-delay-4 mt-8 flex flex-wrap gap-3">
          <a
            href="#strategic-partners"
            className="inline-flex items-center justify-center rounded-xl bg-ener-green px-6 py-3 font-semibold text-black shadow-lg shadow-ener-green/25 transition hover:bg-emerald-300"
          >
            Our Partners
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="ir-hero-transition" aria-hidden="true" />
    </section>
  );
}
