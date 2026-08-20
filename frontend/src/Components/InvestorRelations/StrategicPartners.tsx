import { strategicPartners, strategicPartnersIntro } from "./content";
import ScrollReveal from "./ScrollReveal";

export default function StrategicPartners() {
  return (
    <section id="strategic-partners" className="ir-section-white px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="max-w-3xl" variant="fade">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B192C] sm:text-4xl">
            Strategic Partners
          </h2>
        </ScrollReveal>

        <ScrollReveal className="max-w-3xl" delay={100} variant="fade">
          <p className="mt-4 text-base leading-relaxed text-[#0B192C]/70">
            {strategicPartnersIntro}
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {strategicPartners.map((partner, index) => (
            <ScrollReveal
              key={partner.name}
              as="article"
              delay={180 + index * 120}
              variant="scale"
              className="ir-light-card flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-ener-green/30 md:p-7"
            >
              <div className="border-b border-[#0B192C]/10 pb-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-ener-green">
                  {partner.shortName}
                </p>
                <h3 className="mt-1 text-xl font-bold text-[#0B192C]">
                  {partner.name}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {partner.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ener-green/20 bg-ener-green/5 px-3 py-1 text-xs font-semibold text-[#0B192C]/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#0B192C]/70">
                {partner.summary}
              </p>

              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {partner.facts.map((fact) => (
                  <li
                    key={fact}
                    className="flex items-start gap-2 text-sm text-[#0B192C]/70"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ener-green" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
