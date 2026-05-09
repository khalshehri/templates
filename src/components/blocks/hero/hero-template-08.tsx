"use client";

/**
 * Hero Template 08 — Aurora Borealis
 * Best for: Creative agencies, modern brands, design studios
 * Features: Flowing aurora color bands on dark background,
 *           centered text with glow effect, animated color shifts
 */

import { ArrowRight, Sparkles } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

export function HeroTemplate08({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
      {/* Aurora bands */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary aurora band */}
        <div
          className="absolute -top-[40%] left-[10%] w-[80%] h-[70%] rounded-full blur-[120px] opacity-30"
          style={{
            background: `linear-gradient(135deg, var(--theme-primary), transparent 60%)`,
            animation: "aurora1 8s ease-in-out infinite alternate",
          }}
        />
        {/* Secondary aurora band */}
        <div
          className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full blur-[100px] opacity-25"
          style={{
            background: `linear-gradient(225deg, var(--theme-secondary, #7C3AED), transparent 60%)`,
            animation: "aurora2 10s ease-in-out infinite alternate",
          }}
        />
        {/* Accent aurora band */}
        <div
          className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full blur-[100px] opacity-20"
          style={{
            background: `linear-gradient(45deg, var(--theme-accent, #06B6D4), transparent 60%)`,
            animation: "aurora3 12s ease-in-out infinite alternate",
          }}
        />
        {/* Subtle star dots */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 20px 30px, white, transparent),
              radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.6), transparent),
              radial-gradient(1px 1px at 130px 80px, white, transparent),
              radial-gradient(1px 1px at 160px 30px, rgba(255,255,255,0.7), transparent)`,
            backgroundSize: "200px 100px",
          }}
        />
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes aurora1 {
          0% { transform: translateX(0) translateY(0) rotate(0deg); }
          100% { transform: translateX(5%) translateY(3%) rotate(3deg); }
        }
        @keyframes aurora2 {
          0% { transform: translateX(0) translateY(0) rotate(0deg); }
          100% { transform: translateX(-4%) translateY(-5%) rotate(-2deg); }
        }
        @keyframes aurora3 {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(6%) translateY(-3%); }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          {c.badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white/80 mb-10">
              <Sparkles size={14} style={{ color: "var(--theme-accent, #06B6D4)" }} />
              {isAr ? c.badge.textAr : c.badge.text}
            </div>
          )}

          {/* Heading with subtle glow */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.05]">
            <span
              className="relative"
              style={{
                textShadow: `0 0 80px color-mix(in srgb, var(--theme-primary) 30%, transparent)`,
              }}
            >
              {isAr ? c.headingAr : c.heading}
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-lg sm:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>

          {/* CTAs */}
          {(c.ctaPrimary || c.ctaSecondary) && (
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              {c.ctaPrimary && (
                <a
                  href={c.ctaPrimary.url || "#"}
                  className={`group relative inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white rounded-full transition-all hover:-translate-y-0.5 overflow-hidden ${
                    isAr ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Button gradient bg */}
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))`,
                    }}
                  />
                  {/* Button glow */}
                  <span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                    style={{
                      background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))`,
                    }}
                  />
                  <span className="relative">{isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}</span>
                  <ArrowRight
                    size={16}
                    className={`relative transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`}
                  />
                </a>
              )}
              {c.ctaSecondary && (
                <a
                  href={c.ctaSecondary.url || "#"}
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white/60 rounded-full border border-white/10 hover:bg-white/5 hover:text-white/80 transition-all"
                >
                  {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
                </a>
              )}
            </div>
          )}

          {/* Stats row */}
          {c.stats && c.stats.length > 0 && (
            <div className="mt-20 flex items-center justify-center gap-12 sm:gap-16">
              {c.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(135deg, var(--theme-primary), var(--theme-accent, var(--theme-primary)))`,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/30 mt-1.5">
                    {isAr ? stat.labelAr : stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
