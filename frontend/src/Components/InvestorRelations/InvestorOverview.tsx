import { investorOverview } from "./content";
import ScrollReveal from "./ScrollReveal";

export default function InvestorOverview() {
  return (
    <section className="ir-section-white px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal variant="left">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-ener-green">
              {investorOverview.label}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B192C] sm:text-4xl">
              {investorOverview.heading}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120} variant="scale-soft">
          <div>
            <p className="text-base leading-relaxed text-[#0B192C]/75">
              {investorOverview.lead}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#0B192C]/70">
              {investorOverview.support}
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
        {investorOverview.pillars.map((pillar, index) => (
          <ScrollReveal
            key={pillar.title}
            as="article"
            delay={200 + index * 100}
            variant="scale"
            className="ir-light-card h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-ener-green/30"
          >
            <div className="mb-4 h-1.5 w-10 rounded-full bg-ener-green" />
            <h3 className="text-lg font-bold text-[#0B192C]">{pillar.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0B192C]/70">
              {pillar.text}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
