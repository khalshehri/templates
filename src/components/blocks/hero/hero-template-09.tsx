"use client";

/**
 * Hero Template 09 — Split with Morphing Blob
 * Best for: Creative agencies, portfolios, design studios
 * Features: Left-aligned text, right side has a large animated gradient blob,
 *           modern asymmetric layout with clean typography
 */

import { ArrowRight, Play } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

export function HeroTemplate09({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Morphing blob on the right */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-[55%] h-[90%] ${isAr ? "left-0 -translate-x-[10%]" : "right-0 translate-x-[10%]"}`}>
        <div
          className="absolute inset-0"
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            background: `linear-gradient(135deg,
              var(--theme-primary),
              var(--theme-secondary, var(--theme-primary)),
              var(--theme-accent, var(--theme-primary)))`,
            animation: "morphBlob 15s ease-in-out infinite",
            opacity: 0.9,
          }}
        />
        {/* Blob overlay pattern */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            animation: "morphBlob 15s ease-in-out infinite",
            backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(255,255,255,0.1) 0%, transparent 40%)`,
          }}
        />
        {/* Background image inside blob if provided */}
        {c.backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
            style={{
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              animation: "morphBlob 15s ease-in-out infinite",
              backgroundImage: `url(${c.backgroundImage})`,
            }}
          />
        )}
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes morphBlob {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 58% 42% 35% 65% / 45% 55% 45% 55%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 35% 65% 45%; }
          75% { border-radius: 33% 67% 58% 42% / 63% 37% 63% 37%; }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className={`max-w-xl ${isAr ? "mr-0 ml-auto text-right" : ""}`}>
          {/* Badge */}
          {c.badge && (
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-white mb-8"
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              {isAr ? c.badge.textAr : c.badge.text}
            </div>
          )}

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.08]">
            {isAr ? c.headingAr : c.heading}
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-md">
            {isAr ? c.subheadingAr : c.subheading}
          </p>

          {/* CTAs */}
          {(c.ctaPrimary || c.ctaSecondary) && (
            <div className={`mt-10 flex items-center gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
              {c.ctaPrimary && (
                <a
                  href={c.ctaPrimary.url || "#"}
                  className={`group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5 ${
                    isAr ? "flex-row-reverse" : ""
                  }`}
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}
                  <ArrowRight
                    size={16}
                    className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`}
                  />
                </a>
              )}
              {c.ctaSecondary && (
                <a
                  href={c.ctaSecondary.url || "#"}
                  className={`group inline-flex items-center gap-2.5 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors ${
                    isAr ? "flex-row-reverse" : ""
                  }`}
                >
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-200 group-hover:border-gray-400 transition-colors"
                  >
                    <Play size={14} className="text-gray-500" />
                  </span>
                  {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
                </a>
              )}
            </div>
          )}

          {/* Stats */}
          {c.stats && c.stats.length > 0 && (
            <div className={`mt-16 flex gap-10 ${isAr ? "flex-row-reverse" : ""}`}>
              {c.stats.map((stat, i) => (
                <div key={i}>
                  <div
                    className="text-3xl font-bold"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
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
