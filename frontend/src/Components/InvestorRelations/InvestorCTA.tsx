import Link from "next/link";

import { investorCta } from "./content";
import ScrollReveal from "./ScrollReveal";

export default function InvestorCTA() {
  return (
    <section className="ir-section-navy px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal variant="scale">
          <h2 className="text-3xl font-semibold leading-tight text-on-inverse md:text-4xl">
            {investorCta.heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={120} variant="fade">
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-on-inverse/80">
            {investorCta.text}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={220} variant="up">
          <Link
            href={investorCta.buttonHref}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 font-semibold text-on-accent transition hover:opacity-90"
          >
            {investorCta.buttonLabel}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
