"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export type RevealVariant =
  | "fade"
  | "left"
  | "right"
  | "scale"
  | "scale-soft"
  | "stat"
  | "focus"
  | "up"
  | "ph-fade"
  | "ph-left"
  | "ph-number"
  | "ph-caption";

const VARIANT_CLASS: Record<RevealVariant, string> = {
  fade: "ir-reveal-fade",
  left: "ir-reveal-left",
  right: "ir-reveal-right",
  scale: "ir-reveal-scale",
  "scale-soft": "ir-reveal-scale-soft",
  stat: "ir-reveal-stat",
  focus: "ir-reveal-focus",
  up: "ir-reveal-up",
  "ph-fade": "ir-ph-fade",
  "ph-left": "ir-ph-left",
  "ph-number": "ir-ph-number",
  "ph-caption": "ir-ph-caption",
};

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  variant?: RevealVariant;
  style?: CSSProperties;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  variant = "fade",
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = [
    "ir-reveal",
    VARIANT_CLASS[variant],
    visible ? "ir-reveal-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
