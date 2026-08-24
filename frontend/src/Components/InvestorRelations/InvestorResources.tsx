import { investorResources } from "./content";
import ScrollReveal from "./ScrollReveal";

const [featured, ...supporting] = investorResources.items;

function ResourceCard({
  item,
  index,
  featured = false,
}: {
  item: (typeof investorResources.items)[number];
  index: number;
  featured?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className={`ir-resource-card ${featured ? "is-featured" : ""}`}>
      <img src={item.image} alt={item.title} className="ir-resource-media" />
      <div className="ir-resource-wash" aria-hidden="true" />

      <div className="ir-resource-copy">
        <span className="ir-resource-index">{number}</span>
        <h3 className="ir-resource-title">{item.title}</h3>
        <p className="ir-resource-copy-text">{item.description}</p>
      </div>

      <span className="ir-resource-arrow" aria-hidden="true">
        →
      </span>
    </article>
  );
}

export default function InvestorResources() {
  return (
    <section className="ir-resources-section px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="fade">
          <h2 className="text-3xl font-semibold leading-tight text-primary md:text-4xl">
            {investorResources.heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100} variant="fade">
          <p className="mt-3 max-w-2xl text-base leading-8 text-secondary">
            {investorResources.description}
          </p>
        </ScrollReveal>

        <div className="ir-resource-bento mt-12">
          <ResourceCard item={featured} index={0} featured />
          {supporting.map((item, index) => (
            <ResourceCard key={item.title} item={item} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
