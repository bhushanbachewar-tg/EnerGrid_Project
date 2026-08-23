import { partnerHighlights } from "./content";
import ScrollReveal from "./ScrollReveal";

function valueClass(value: string) {
  if (value.length > 22) {
    return "text-xl font-bold tracking-tight text-primary sm:text-2xl";
  }
  if (value.length > 12) {
    return "text-2xl font-bold tracking-tight text-primary sm:text-3xl";
  }
  return "text-3xl font-bold tracking-tight text-primary sm:text-[2.15rem]";
}

function metricGridClass(count: number) {
  if (count === 4) {
    return "mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4";
  }
  if (count === 2) {
    return "mt-6 grid max-w-3xl gap-x-10 gap-y-8 sm:grid-cols-2";
  }
  return "mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3";
}

export default function PartnerHighlights() {
  let statIndex = 0;

  return (
    <section className="ir-section-white px-4 pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <ScrollReveal variant="ph-fade">
            <p className="text-xs font-semibold tracking-[0.22em] text-accent">
              PARTNER HIGHLIGHTS
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} variant="ph-fade">
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Scale at a Glance
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} variant="ph-fade">
            <p className="mt-3 text-base leading-relaxed text-primary/70">
              Selected scale indicators from EnerGrid&apos;s institutional partners.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12">
          {partnerHighlights.map((group, groupIndex) => {
            const firstRow =
              group.stats.length === 5 ? group.stats.slice(0, 3) : group.stats;
            const secondRow =
              group.stats.length === 5 ? group.stats.slice(3) : [];

            return (
              <div
                key={group.partner}
                className={
                  groupIndex > 0 ? "mt-10 border-t border-primary/10 pt-10" : ""
                }
              >
                <ScrollReveal delay={60} variant="ph-fade">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {group.partner}
                  </p>
                  <span className="mt-2 block h-0.5 w-10 bg-accent" />
                </ScrollReveal>

                <div className={metricGridClass(firstRow.length)}>
                  {firstRow.map((stat) => {
                    const numberDelay = 80 + statIndex * 70;
                    const captionDelay = numberDelay + 90;
                    statIndex += 1;

                    return (
                      <Metric
                        key={`${group.partner}-${stat.label}`}
                        value={stat.value}
                        label={stat.label}
                        valueClassName={valueClass(stat.value)}
                        numberDelay={numberDelay}
                        captionDelay={captionDelay}
                      />
                    );
                  })}
                </div>

                {secondRow.length > 0 && (
                  <div className="mt-8 grid max-w-3xl gap-x-10 gap-y-8 sm:grid-cols-2">
                    {secondRow.map((stat) => {
                      const numberDelay = 80 + statIndex * 70;
                      const captionDelay = numberDelay + 90;
                      statIndex += 1;

                      return (
                        <Metric
                          key={`${group.partner}-${stat.label}`}
                          value={stat.value}
                          label={stat.label}
                          valueClassName={valueClass(stat.value)}
                          numberDelay={numberDelay}
                          captionDelay={captionDelay}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Metric({
  value,
  label,
  valueClassName,
  numberDelay,
  captionDelay,
}: {
  value: string;
  label: string;
  valueClassName: string;
  numberDelay: number;
  captionDelay: number;
}) {
  return (
    <article className="min-w-0">
      <ScrollReveal variant="ph-number" delay={numberDelay}>
        <p className={valueClassName}>{value}</p>
      </ScrollReveal>
      <span className="mt-2.5 block h-px w-10 bg-accent" />
      <ScrollReveal variant="ph-caption" delay={captionDelay}>
        <p className="mt-2 max-w-[16rem] text-sm font-medium leading-6 text-primary/60">
          {label}
        </p>
      </ScrollReveal>
    </article>
  );
}
