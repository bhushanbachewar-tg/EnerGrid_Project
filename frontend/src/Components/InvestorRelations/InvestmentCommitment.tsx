import { investmentCommitment } from "./content";
import ScrollReveal from "./ScrollReveal";

export default function InvestmentCommitment() {
  return (
    <section className="ir-section-navy px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal variant="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {investmentCommitment.label}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={140} variant="focus">
          <p className="mt-5 text-4xl font-extrabold tracking-tight text-on-inverse sm:text-5xl md:text-6xl">
            {investmentCommitment.amount}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={320} variant="fade">
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-on-inverse/85 sm:text-base">
            {investmentCommitment.text}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
