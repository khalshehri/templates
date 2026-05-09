"use client";

/**
 * Hero Template 11 — Layered Glass Cards
 * Best for: Fintech, apps, product showcases, dashboards
 * Features: Multiple glass cards layered at different depths with 3D perspective,
 *           dark gradient background, content left, cards right
 */

import { ArrowRight, Zap } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

export function HeroTemplate11({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  const cards = c.floatingCards || [
    { icon: "trending-up", title: "Revenue Growth", titleAr: "نمو الإيرادات", value: "+42%" },
    { icon: "users", title: "Active Users", titleAr: "المستخدمون", value: "28.5K" },
    { icon: "zap", title: "Performance", titleAr: "الأداء", value: "99.9%" },
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Background gradient spots */}
      <div
        className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full blur-[150px] opacity-15"
        style={{ backgroundColor: "var(--theme-primary)" }}
      />
      <div
        className="absolute bottom-0 left-[20%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-10"
        style={{ backgroundColor: "var(--theme-secondary, #7C3AED)" }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center ${isAr ? "direction-rtl" : ""}`}>
          {/* Left: Text content */}
          <div className={isAr ? "text-right" : ""}>
            {/* Badge */}
            {c.badge && (
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/70 mb-8 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
              >
                <Zap size={14} style={{ color: "var(--theme-accent, #F59E0B)" }} />
                {isAr ? c.badge.textAr : c.badge.text}
              </div>
            )}

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              {isAr ? c.headingAr : c.heading}
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg text-white/40 leading-relaxed max-w-lg">
              {isAr ? c.subheadingAr : c.subheading}
            </p>

            {/* CTAs */}
            {(c.ctaPrimary || c.ctaSecondary) && (
              <div className={`mt-10 flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
                {c.ctaPrimary && (
                  <a
                    href={c.ctaPrimary.url || "#"}
                    className={`group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white rounded-xl transition-all hover:shadow-2xl hover:-translate-y-0.5 ${
                      isAr ? "flex-row-reverse" : ""
                    }`}
                    style={{
                      background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))`,
                    }}
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
                    className="px-7 py-3.5 text-sm font-semibold text-white/60 rounded-xl border border-white/10 hover:bg-white/5 transition-all"
                  >
                    {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
                  </a>
                )}
              </div>
            )}

            {/* Stats */}
            {c.stats && c.stats.length > 0 && (
              <div className={`mt-14 flex gap-10 ${isAr ? "flex-row-reverse" : ""}`}>
                {c.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/30 mt-1">
                      {isAr ? stat.labelAr : stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Layered glass cards */}
          <div className="relative hidden lg:block" style={{ perspective: "1200px" }}>
            <div className="relative w-full h-[500px]">
              {cards.map((card, i) => {
                const isRtl = isAr;
                const offsets = [
                  { top: "5%", x: isRtl ? "-5%" : "5%", rotate: -6, z: 3 },
                  { top: "25%", x: isRtl ? "5%" : "15%", rotate: -3, z: 2 },
                  { top: "48%", x: isRtl ? "-8%" : "0%", rotate: 2, z: 1 },
                ];
                const offset = offsets[i] || offsets[0];

                return (
                  <div
                    key={i}
                    className="absolute w-[85%] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl transition-transform duration-500 hover:translate-y-[-4px]"
                    style={{
                      top: offset.top,
                      left: `50%`,
                      transform: `translateX(calc(-50% + ${offset.x})) rotateY(${isRtl ? 8 : -8}deg) rotateX(4deg) rotateZ(${offset.rotate}deg)`,
                      zIndex: offset.z,
                    }}
                  >
                    <div className={`flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
                      <div className={isAr ? "text-right" : ""}>
                        <div className="text-white/40 text-sm">
                          {isAr ? card.titleAr : card.title}
                        </div>
                        <div className="text-white text-2xl font-bold mt-1">
                          {card.value || "—"}
                        </div>
                      </div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `color-mix(in srgb, var(--theme-primary) 20%, transparent)`,
                        }}
                      >
                        <Zap size={20} style={{ color: "var(--theme-primary)" }} />
                      </div>
                    </div>
                    {/* Fake chart line */}
                    <div className="mt-4 h-12 flex items-end gap-1">
                      {Array.from({ length: 12 }).map((_, j) => (
                        <div
                          key={j}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${20 + Math.sin((j + i * 4) * 0.8) * 60 + 20}%`,
                            backgroundColor: `color-mix(in srgb, var(--theme-primary) ${30 + j * 5}%, transparent)`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
