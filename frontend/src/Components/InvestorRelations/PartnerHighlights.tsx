import { partnerHighlights } from "./content";
import ScrollReveal from "./ScrollReveal";

export default function PartnerHighlights() {
  let statIndex = 0;

  return (
    <section className="ir-section-mint px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="max-w-3xl" variant="fade">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0B192C] sm:text-4xl">
            Partner Highlights
          </h2>
        </ScrollReveal>

        <div className="mt-10 space-y-10">
          {partnerHighlights.map((group) => (
            <div key={group.partner}>
              <ScrollReveal variant="fade">
                <h3 className="text-lg font-semibold text-[#0B192C]">{group.partner}</h3>
              </ScrollReveal>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.stats.map((stat) => {
                  const delay = 120 + statIndex * 90;
                  statIndex += 1;

                  return (
                    <ScrollReveal
                      key={`${group.partner}-${stat.label}`}
                      as="article"
                      delay={delay}
                      variant="stat"
                      className="ir-light-card rounded-2xl p-5"
                    >
                      <p className="text-xl font-bold tracking-tight text-[#0B192C] sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#0B192C]/65">
                        {stat.label}
                      </p>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
