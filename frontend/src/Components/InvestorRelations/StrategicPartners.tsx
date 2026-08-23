import { strategicPartnersIntro } from "./content";
import PartnerShowcase from "./PartnerShowcase";
import ScrollReveal from "./ScrollReveal";

export default function StrategicPartners() {
  return (
    <section
      id="strategic-partners"
      className="ir-section-partners px-4 py-16 sm:py-20 lg:py-24"
    >
      <div className="ir-partners-layout mx-auto max-w-6xl">
        <ScrollReveal className="ir-partners-heading" variant="fade">
          <h2 className="text-3xl font-semibold leading-tight text-primary md:text-4xl">
            Strategic Partners
          </h2>
        </ScrollReveal>

        <ScrollReveal className="ir-partners-intro" delay={100} variant="fade">
          <p className="mt-4 text-base leading-relaxed text-primary/70">
            {strategicPartnersIntro}
          </p>
        </ScrollReveal>

        <PartnerShowcase />
      </div>
    </section>
  );
}
