"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Check, Moon, Palette, Sun, Zap } from "lucide-react";

const themes = [
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
  { id: "solar", label: "Solar", icon: Palette },
  { id: "electric", label: "Electric", icon: Zap },
] as const;

type ThemeSwitcherProps = {
  glassMode?: "dark" | "light";
  compact?: boolean;
};

export default function ThemeSwitcher({
  glassMode = "dark",
  compact = false,
}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const isLightGlass = glassMode === "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const active = themes.find((t) => t.id === theme) ?? themes[0];
  const TriggerIcon = active.icon;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Switch theme"
        className={`inline-flex items-center gap-2 rounded-full border font-semibold shadow-sm backdrop-blur-2xl transition hover:border-accent/40 hover:text-accent ${
          compact ? "px-4 py-1.5 text-xs" : "px-6 py-2 text-sm"
        } ${
          isLightGlass
            ? "border-primary/10 bg-white/55 text-primary hover:bg-accent/10"
            : "border-white/25 bg-white/[0.14] text-on-inverse hover:bg-white/25"
        }`}
      >
        {mounted ? (
          <TriggerIcon size={16} className="text-accent" aria-hidden="true" />
        ) : (
          <Palette size={16} className="text-accent" aria-hidden="true" />
        )}
        <span>{mounted ? active.label : "Theme"}</span>
      </button>

      {open && mounted ? (
        <div
          role="listbox"
          aria-label="Themes"
          className={`absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-2xl border p-1.5 shadow-xl shadow-primary/10 backdrop-blur-2xl ${
            isLightGlass
              ? "border-primary/10 bg-white/85"
              : "border-white/25 bg-white/[0.16]"
          }`}
        >
          {themes.map(({ id, label, icon: Icon }) => {
            const isActive = theme === id;
            return (
              <button
                key={id}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setTheme(id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                  isActive && isLightGlass
                    ? "bg-accent/15 text-primary"
                    : isActive
                      ? "bg-accent/20 text-on-inverse"
                      : isLightGlass
                        ? "text-primary/70 hover:bg-accent/10 hover:text-primary"
                        : "text-on-inverse/72 hover:bg-white/15 hover:text-on-inverse"
                }`}
              >
                <Icon size={15} aria-hidden="true" />
                <span className="flex-1">{label}</span>
                {isActive ? <Check size={14} aria-hidden="true" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
