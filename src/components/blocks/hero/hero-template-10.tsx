"use client";

/**
 * Hero Template 10 — Oversized Marquee Text
 * Best for: Fashion, editorial, creative studios, agencies
 * Features: Giant text scrolling behind in a marquee loop,
 *           content in foreground, very trendy editorial design
 */

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

export function HeroTemplate10({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  const marqueeItems = isAr
    ? c.marqueeWordsAr || ["إبداع", "تصميم", "ابتكار", "تأثير"]
    : c.marqueeWords || ["CREATE", "DESIGN", "INNOVATE", "IMPACT"];

  const marqueeText = marqueeItems.join(" — ") + " — ";

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[#fafafa]">
      {/* Oversized marquee in background */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none overflow-hidden">
        {/* Top marquee (moves left) */}
        <div className="relative -rotate-3 -mt-8">
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "marqueeLeft 25s linear infinite" }}
          >
            <span
              className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-black leading-none tracking-tighter"
              style={{
                WebkitTextStroke: "2px rgba(0,0,0,0.06)",
                WebkitTextFillColor: "transparent",
              }}
            >
              {marqueeText}
            </span>
            <span
              className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-black leading-none tracking-tighter"
              style={{
                WebkitTextStroke: "2px rgba(0,0,0,0.06)",
                WebkitTextFillColor: "transparent",
              }}
            >
              {marqueeText}
            </span>
          </div>
        </div>

        {/* Bottom marquee (moves right) */}
        <div className="relative rotate-3 -mt-16">
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "marqueeRight 30s linear infinite" }}
          >
            <span
              className="text-[10rem] sm:text-[14rem] lg:text-[18rem] font-black leading-none tracking-tighter opacity-50"
              style={{
                WebkitTextStroke: "1.5px rgba(0,0,0,0.04)",
                WebkitTextFillColor: "transparent",
              }}
            >
              {marqueeText}
            </span>
            <span
              className="text-[10rem] sm:text-[14rem] lg:text-[18rem] font-black leading-none tracking-tighter opacity-50"
              style={{
                WebkitTextStroke: "1.5px rgba(0,0,0,0.04)",
                WebkitTextFillColor: "transparent",
              }}
            >
              {marqueeText}
            </span>
          </div>
        </div>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          {/* Thin line + badge */}
          {c.badge && (
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-12 h-px bg-gray-300" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                {isAr ? c.badge.textAr : c.badge.text}
              </span>
              <div className="w-12 h-px bg-gray-300" />
            </div>
          )}

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            {isAr ? c.headingAr : c.heading}
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>

          {/* CTAs */}
          {(c.ctaPrimary || c.ctaSecondary) && (
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {c.ctaPrimary && (
                <a
                  href={c.ctaPrimary.url || "#"}
                  className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5 ${
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
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-gray-600 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-500 transition-colors"
                >
                  {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
                </a>
              )}
            </div>
          )}

          {/* Stats in a bordered row */}
          {c.stats && c.stats.length > 0 && (
            <div className="mt-20 inline-flex items-center divide-x divide-gray-200 border border-gray-200 rounded-2xl bg-white/80 backdrop-blur-sm">
              {c.stats.map((stat, i) => (
                <div key={i} className="px-8 py-5 text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1 uppercase tracking-wide">
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
