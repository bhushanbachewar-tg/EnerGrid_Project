function FocusCard({
  title,
  description,
  badge,
}: {
  title: string;
  description: string;
  badge: string;
}) {
  return (
    <div
      className="glass-effect group rounded-2xl border border-ener-green/20 p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(34,197,94,0.18)]"
      role="article"
      aria-label={title}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
          {badge}
        </span>
        <div className="h-10 w-10 rounded-xl bg-ener-green/15 ring-1 ring-ener-green/30 transition-colors group-hover:bg-ener-green/25" />
      </div>

      <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>

      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white/90">
        <span className="h-1.5 w-1.5 rounded-full bg-ener-green" />
        <span>Learn more</span>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.18),transparent_60%),linear-gradient(180deg,#061A37,#020617_55%,#000_100%)]">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ener-navy/70 via-black/40 to-black" />

        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-ener-green/10 blur-3xl" />
        <div className="absolute right-[-5rem] top-32 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-2 w-2 animate-pulse rounded-full bg-ener-green" />
              <span>Built for scalable green infrastructure</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Accelerating the</span>
              <span className="block bg-gradient-to-r from-ener-green via-emerald-300 to-cyan-200 bg-clip-text text-transparent animate-pulse">
                Green Energy Transition
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              EnerGrid drives the next wave of India’s power ecosystem through
              resilient transmission, BESS-backed reliability, and renewables
              at scale.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#core-focus"
                className="inline-flex items-center justify-center rounded-xl bg-ener-green px-6 py-3 font-semibold text-black shadow-lg shadow-ener-green/25 transition hover:bg-emerald-300"
              >
                Explore EnerGrid
              </a>
              <a
                href="#quick-stats"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/10"
              >
                View Pipeline
              </a>
            </div>
          </div>
        </div>

        {/* QuickStats - overlapping card */}
        <div className="relative mx-auto max-w-6xl px-4" id="quick-stats">
          <div className="glass-effect -mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur md:p-6">
            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
              <div className="text-sm text-white/70">Backed by</div>
              <div className="text-lg font-bold text-white">
                IndiGrid, BII, KNI
              </div>
              <div className="hidden text-sm text-white/60 sm:block">|</div>
              <div className="text-lg font-bold text-white">
                ₹10,000 Cr+ Pipeline
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="px-4 pb-16 pt-10" id="core-focus">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Core Focus Areas
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                A concentrated strategy across the backbone, storage
                reliability, and the renewables-led future.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
              Transmission • BESS • Renewables
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <FocusCard
              title="Transmission"
              badge="Stability Layer"
              description="Builds the backbone for reliable power delivery—designed for scalability and long-term resilience."
            />
            <FocusCard
              title="BESS"
              badge="Reliability Engine"
              description="Grid-ready storage that smooths intermittency and supports peak demand with confidence."
            />
            <FocusCard
              title="Renewables"
              badge="Clean Generation"
              description="Accelerates adoption with renewable generation aligned to a modern, flexible grid."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

