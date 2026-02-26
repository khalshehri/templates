"use client";

/**
 * Hero Template 04 — Full Image Background + Cinematic Overlay
 * Best for: Restaurant, Event, Photography, Wedding, Hotel
 * Features: Full-screen background image, dark gradient overlay,
 *           elegant serif-style heading, minimal centered layout
 */

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

export function HeroTemplate04({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      {c.backgroundImage ? (
        <img
          src={c.backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)`,
          }}
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,${c.overlayOpacity / 100 * 0.8}), rgba(0,0,0,${c.overlayOpacity / 100}))`,
        }}
      />

      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: "var(--theme-primary)" }} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        {c.badge && (
          <div className="inline-flex items-center gap-3 mb-10">
            <div className="w-12 h-px bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              {isAr ? c.badge.textAr : c.badge.text}
            </span>
            <div className="w-12 h-px bg-white/30" />
          </div>
        )}

        {/* Heading — elegant style */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
          {isAr ? c.headingAr : c.heading}
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mt-8 mb-8">
          <div className="w-16 h-px bg-white/20" />
          <div
            className="w-3 h-3 rotate-45 border-2"
            style={{ borderColor: "var(--theme-primary)" }}
          />
          <div className="w-16 h-px bg-white/20" />
        </div>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          {isAr ? c.subheadingAr : c.subheading}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={c.ctaPrimary.url}
            className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-none border-2 transition-all hover:shadow-2xl ${
              isAr ? "flex-row-reverse" : ""
            }`}
            style={{
              borderColor: "var(--theme-primary)",
              backgroundColor: "var(--theme-primary)",
            }}
          >
            {isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}
            <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
          </a>
          {c.ctaSecondary && (
            <a
              href={c.ctaSecondary.url}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-none border-2 border-white/30 hover:border-white/60 transition-all"
            >
              {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
            </a>
          )}
        </div>

        {/* Stats - minimal row */}
        {c.stats && c.stats.length > 0 && (
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {c.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/40 mt-2">
                  {isAr ? stat.labelAr : stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] uppercase tracking-[0.2em]">{isAr ? "مرر للأسفل" : "Scroll"}</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </div>
  );
}
