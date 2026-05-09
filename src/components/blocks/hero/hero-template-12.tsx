"use client";

/**
 * Hero Template 12 — Minimal Editorial
 * Best for: Luxury brands, studios, minimalist brands, consulting
 * Features: Ultra-clean layout, generous whitespace, thin decorative lines,
 *           large serif-style heading, subtle monochrome with one accent color
 */

import { ArrowUpRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

export function HeroTemplate12({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  return (
    <div className="relative min-h-screen flex items-center bg-[#fefefe]">
      {/* Vertical accent line */}
      <div
        className={`absolute top-0 bottom-0 w-px ${isAr ? "right-[8%] sm:right-[12%]" : "left-[8%] sm:left-[12%]"}`}
        style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 15%, transparent)" }}
      />

      {/* Small accent dot on the line */}
      <div
        className={`absolute top-[30%] w-3 h-3 rounded-full ${isAr ? "right-[8%] sm:right-[12%] translate-x-1/2" : "left-[8%] sm:left-[12%] -translate-x-1/2"}`}
        style={{ backgroundColor: "var(--theme-primary)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className={`${isAr ? "pr-[15%] sm:pr-[18%] text-right" : "pl-[15%] sm:pl-[18%]"}`}>
          {/* Top label */}
          {c.badge && (
            <div className="mb-12">
              <span
                className="text-xs font-medium tracking-[0.25em] uppercase"
                style={{ color: "var(--theme-primary)" }}
              >
                {isAr ? c.badge.textAr : c.badge.text}
              </span>
              <div
                className="w-8 h-px mt-3"
                style={{ backgroundColor: "var(--theme-primary)" }}
              />
            </div>
          )}

          {/* Heading — large, light weight for editorial feel */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light tracking-tight text-gray-900 leading-[1.08]">
            {(() => {
              const heading = isAr ? c.headingAr : c.heading;
              const highlight = isAr ? c.highlightedWordAr : c.highlightedWord;
              if (!highlight || !heading.includes(highlight)) {
                return heading;
              }
              const parts = heading.split(highlight);
              return (
                <>
                  {parts[0]}
                  <em
                    className="not-italic font-normal"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    {highlight}
                  </em>
                  {parts[1]}
                </>
              );
            })()}
          </h1>

          {/* Thin separator */}
          <div className="w-16 h-px bg-gray-200 my-8" />

          {/* Subheading */}
          <p className={`text-lg text-gray-400 leading-relaxed max-w-lg ${isAr ? "ml-auto" : ""}`}>
            {isAr ? c.subheadingAr : c.subheading}
          </p>

          {/* CTAs */}
          {(c.ctaPrimary || c.ctaSecondary) && (
            <div className={`mt-12 flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
              {c.ctaPrimary && (
                <a
                  href={c.ctaPrimary.url || "#"}
                  className={`group inline-flex items-center gap-3 text-sm font-semibold transition-colors ${
                    isAr ? "flex-row-reverse" : ""
                  }`}
                  style={{ color: "var(--theme-primary)" }}
                >
                  <span
                    className="flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all group-hover:scale-110"
                    style={{ borderColor: "var(--theme-primary)" }}
                  >
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                  {isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}
                </a>
              )}
              {c.ctaSecondary && (
                <a
                  href={c.ctaSecondary.url || "#"}
                  className="text-sm font-medium text-gray-400 hover:text-gray-600 underline underline-offset-4 decoration-gray-200 hover:decoration-gray-400 transition-colors"
                >
                  {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
                </a>
              )}
            </div>
          )}

          {/* Stats — minimal inline */}
          {c.stats && c.stats.length > 0 && (
            <div className={`mt-24 flex items-end gap-16 ${isAr ? "flex-row-reverse" : ""}`}>
              {c.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl sm:text-5xl font-light text-gray-900 tabular-nums">
                    {stat.value}
                  </div>
                  <div
                    className="text-xs tracking-[0.15em] uppercase mt-2"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    {isAr ? stat.labelAr : stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom horizontal line */}
      <div className="absolute bottom-16 left-[8%] right-[8%] sm:left-[12%] sm:right-[12%] h-px bg-gray-100" />
    </div>
  );
}
