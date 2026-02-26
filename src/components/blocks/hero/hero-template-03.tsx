"use client";

/**
 * Hero Template 03 — Gradient Mesh + Bold Typography
 * Best for: SaaS, Startup, Tech companies
 * Features: Animated gradient mesh background, gradient text highlight,
 *           oversized bold typography, floating metric pills
 */

import { ArrowRight, CheckCircle } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

export function HeroTemplate03({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  const heading = isAr ? c.headingAr : c.heading;
  const highlightWord = isAr ? c.highlightedWordAr : c.highlightedWord;

  // Split heading to apply gradient to highlighted word
  const renderHeading = () => {
    if (!highlightWord || !heading.includes(highlightWord)) {
      return <>{heading}</>;
    }
    const parts = heading.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)), var(--theme-accent, var(--theme-primary)))`,
          }}
        >
          {highlightWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
          style={{ backgroundColor: "var(--theme-primary)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ backgroundColor: "var(--theme-secondary, #7C3AED)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
          style={{ backgroundColor: "var(--theme-accent, #F59E0B)" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          {c.badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/70 mb-8">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--theme-accent, #22C55E)" }}
              />
              {isAr ? c.badge.textAr : c.badge.text}
            </div>
          )}

          {/* Oversized heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.05]">
            {renderHeading()}
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={c.ctaPrimary.url}
              className={`group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white rounded-full transition-all hover:shadow-2xl hover:-translate-y-0.5 ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{
                backgroundImage: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))`,
              }}
            >
              {isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}
              <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
            </a>
            {c.ctaSecondary && (
              <a
                href={c.ctaSecondary.url}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white/70 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all"
              >
                {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
              </a>
            )}
          </div>

          {/* Stats as floating pills */}
          {c.stats && c.stats.length > 0 && (
            <div className="mt-20 flex flex-wrap items-center justify-center gap-4">
              {c.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <CheckCircle size={16} style={{ color: "var(--theme-accent, #22C55E)" }} />
                  <span className="text-white font-bold">{stat.value}</span>
                  <span className="text-white/50 text-sm">{isAr ? stat.labelAr : stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
