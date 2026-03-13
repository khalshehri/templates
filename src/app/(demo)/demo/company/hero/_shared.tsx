"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Globe } from "lucide-react";

export type HeroLang = "en" | "ar";

export function useHeroLocale(initial: HeroLang = "en") {
  const [language, setLanguage] = useState<HeroLang>(initial);
  const dir = language === "ar" ? "rtl" : "ltr";
  const headingFont =
    language === "ar" ? "var(--font-changa)" : "var(--font-inter)";
  const bodyFont =
    language === "ar" ? "var(--font-tajawal)" : "var(--font-inter)";

  return {
    language,
    setLanguage,
    dir,
    headingFont,
    bodyFont,
  };
}

export function LocaleToggle({
  language,
  setLanguage,
  inverse = false,
}: {
  language: HeroLang;
  setLanguage: (language: HeroLang) => void;
  inverse?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className={`group inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] transition-all duration-300 ${
        inverse
          ? "border-white/20 bg-white/10 text-white hover:bg-white/16"
          : "border-black/10 bg-white/85 text-black hover:bg-white"
      }`}
    >
      <Globe className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
      {language === "en" ? "AR" : "EN"}
    </button>
  );
}

export function HeroLabel({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.34em] ${
        tone === "light"
          ? "border-white/15 text-white/70"
          : "border-black/10 text-black/55"
      }`}
    >
      {children}
    </div>
  );
}

export function MetricChip({
  value,
  label,
  tone = "dark",
}: {
  value: string;
  label: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={`rounded-2xl border px-4 py-3 ${
        tone === "light"
          ? "border-white/12 bg-white/5 text-white"
          : "border-black/10 bg-white/80 text-black"
      }`}
    >
      <div className="text-lg font-semibold">{value}</div>
      <div
        className={`mt-1 text-xs ${
          tone === "light" ? "text-white/60" : "text-black/50"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

export function LogoStrip({
  items,
  tone = "dark",
}: {
  items: string[];
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {items.map((item) => (
        <div
          key={item}
          className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] ${
            tone === "light"
              ? "border-white/12 text-white/58"
              : "border-black/10 text-black/45"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
