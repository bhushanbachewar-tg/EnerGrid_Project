import { investmentCommitment } from "./content";
import ScrollReveal from "./ScrollReveal";

export default function InvestmentCommitment() {
  return (
    <section className="ir-section-navy px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ener-green">
            {investmentCommitment.label}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120} scale>
          <p className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {investmentCommitment.amount}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            {investmentCommitment.text}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
