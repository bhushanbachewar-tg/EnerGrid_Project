"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { strategicPartners } from "./content";

function partnerMark(name: string, shortName: string) {
  if (shortName !== name) return shortName;
  const caps = name.replace(/[^A-Z]/g, "");
  if (caps.length >= 2) return caps.slice(0, 3);
  return name.slice(0, 2).toUpperCase();
}

export default function PartnerShowcase() {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState(0);
  const [preview, setPreview] = useState<number | null>(null);
  const active = preview ?? selected;
  const partner = strategicPartners[active];

  return (
    <>
      <div
        className="ir-partner-nav"
        onMouseLeave={() => setPreview(null)}
        role="tablist"
        aria-label="Strategic partners"
      >
        {strategicPartners.map((item, index) => {
          const isActive = index === active;
          const isSelected = index === selected;

          return (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`ir-partner-option ${isActive ? "is-active" : ""}`}
              onClick={() => setSelected(index)}
              onMouseEnter={() => setPreview(index)}
              onFocus={() => setPreview(index)}
            >
              <span className="ir-partner-option-index">
                0{index + 1}
              </span>
              <span className="ir-partner-option-name">{item.name}</span>
              {isActive ? (
                <span className="ir-partner-option-arrow" aria-hidden="true">
                  →
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="ir-partner-panel">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={partner.name}
            initial={
              reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
            className="ir-partner-panel-inner"
          >
            <div className="ir-partner-mark" aria-hidden="true">
              {partnerMark(partner.name, partner.shortName)}
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {partner.tags[0]}
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-primary sm:text-3xl">
              {partner.name}
            </h3>
            {partner.shortName !== partner.name ? (
              <p className="mt-1 text-sm font-semibold text-primary/50">
                {partner.shortName}
              </p>
            ) : null}
            <p className="mt-4 text-sm leading-7 text-primary/70 sm:text-base">
              {partner.summary}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-primary/70">
              {partner.facts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
