"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

export function HeroTemplate13({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  const heading = isAr ? c.headingAr : c.heading;
  const sub = isAr ? c.subheadingAr : c.subheading;
  const highlighted = isAr ? c.highlightedWordAr : c.highlightedWord;

  const renderHeading = () => {
    if (!highlighted || !heading.includes(highlighted)) {
      return heading;
    }
    const parts = heading.split(highlighted);
    return (
      <>
        {parts[0]}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)), var(--theme-accent, var(--theme-primary)))`,
          }}
        >
          {highlighted}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <>
      <style>{`
        @keyframes bentoPop {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes ringPulse {
          0%   { transform: scale(0.8); opacity: 0.3; }
          50%  { transform: scale(1.2); opacity: 0.08; }
          100% { transform: scale(0.8); opacity: 0.3; }
        }
        @keyframes dotFade {
          0%, 100% { opacity: 0.3; }
          50%      { opacity: 0.6; }
        }
        .bento-card {
          animation: bentoPop 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      <section
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={{ backgroundColor: "#fafafa" }}
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--theme-primary) 0.8px, transparent 0.8px)`,
            backgroundSize: "28px 28px",
            animation: "dotFade 6s ease-in-out infinite",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {/* Card 1 — Hero Heading (large, spans 2 cols + 2 rows) */}
            <div
              className="bento-card md:col-span-2 md:row-span-2 relative bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-14 shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-center"
              style={{ animationDelay: "0s" }}
            >
              {/* Decorative rings */}
              <div className="absolute -top-10 -right-10 w-48 h-48 pointer-events-none">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border"
                    style={{
                      borderColor: `var(--theme-primary)`,
                      opacity: 0.12,
                      animation: `ringPulse ${3 + i * 0.8}s ease-in-out infinite`,
                      animationDelay: `${i * 0.4}s`,
                      transform: `scale(${0.5 + i * 0.25})`,
                    }}
                  />
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                {renderHeading()}
              </h1>
            </div>

            {/* Card 2 — Badge (small) */}
            {c.badge && (
              <div
                className="bento-card bg-white rounded-2xl sm:rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-3"
                style={{ animationDelay: "0.08s" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `color-mix(in srgb, var(--theme-primary) 10%, transparent)` }}
                >
                  <Sparkles size={18} style={{ color: "var(--theme-primary)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {isAr ? c.badge.textAr : c.badge.text}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: "var(--theme-primary)" }}
                    />
                    <span className="text-[10px] text-gray-400 font-medium">LIVE</span>
                  </div>
                </div>
              </div>
            )}

            {/* Card 3 — Stats (tall, right column) */}
            {c.stats && c.stats.length > 0 && (
              <div
                className="bento-card bg-white rounded-2xl sm:rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between"
                style={{ animationDelay: "0.16s" }}
              >
                {c.stats.slice(0, 4).map((stat, i) => (
                  <div
                    key={i}
                    className={`${i > 0 ? "border-t border-gray-50 pt-3 mt-3" : ""}`}
                  >
                    <p
                      className="text-2xl sm:text-3xl font-bold"
                      style={{ color: "var(--theme-primary)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      {isAr ? stat.labelAr : stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Card 4 — Subheading / Description */}
            <div
              className="bento-card bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex items-center"
              style={{ animationDelay: "0.24s" }}
            >
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {sub}
              </p>
            </div>

            {/* Card 5 — CTA Buttons */}
            <div
              className="bento-card bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-center gap-3"
              style={{ animationDelay: "0.32s" }}
            >
              <a
                href={c.ctaPrimary.url}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm hover:opacity-90 hover:shadow-lg transition-all ${
                  isAr ? "flex-row-reverse" : ""
                }`}
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}
                <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
              </a>
              {c.ctaSecondary && (
                <a
                  href={c.ctaSecondary.url}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-all"
                >
                  {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
