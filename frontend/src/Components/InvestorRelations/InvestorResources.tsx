import { investorResources } from "./content";
import ScrollReveal from "./ScrollReveal";

export default function InvestorResources() {
  return (
    <section className="ir-section-white px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B192C] sm:text-4xl">
            {investorResources.heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#0B192C]/70">
            {investorResources.description}
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {investorResources.items.map((item, index) => (
            <ScrollReveal key={item.title} delay={160 + index * 80}>
              <div className="ir-light-card flex min-h-[7.5rem] flex-col justify-between rounded-2xl p-5 transition duration-300 hover:border-ener-green/30">
                <h3 className="text-base font-bold text-[#0B192C]">{item.title}</h3>
                <span className="mt-5 inline-flex w-fit rounded-full border border-[#0B192C]/10 px-3 py-1 text-xs font-semibold text-[#0B192C]/60">
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
