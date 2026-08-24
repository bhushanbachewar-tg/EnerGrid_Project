import { investorResources } from "./content";
import ScrollReveal from "./ScrollReveal";

export default function InvestorResources() {
  return (
    <section className="ir-section-white px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="fade">
          <h2 className="text-3xl font-semibold leading-tight text-primary md:text-4xl">
            {investorResources.heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100} variant="fade">
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-primary/70">
            {investorResources.description}
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {investorResources.items.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={160 + index * 100}
              variant={index % 2 === 0 ? "left" : "right"}
            >
              <div className="ir-light-card flex min-h-[7.5rem] flex-col justify-between rounded-2xl p-5 transition duration-300 hover:border-accent/30">
                <h3 className="text-base font-semibold text-primary">{item.title}</h3>
                <span className="mt-5 inline-flex w-fit rounded-full border border-primary/10 px-3 py-1 text-xs font-semibold text-primary/60">
                  {item.note}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
