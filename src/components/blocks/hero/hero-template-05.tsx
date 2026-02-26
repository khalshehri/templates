"use client";

/**
 * Hero Template 05 — Glassmorphism + Floating Cards
 * Best for: Modern tech, AI/ML, Fintech, Design agencies
 * Features: Glass-morphic card, animated gradient border,
 *           floating metric cards, modern minimal aesthetic
 */

import { ArrowRight, Sparkles, TrendingUp, Users, Zap, type LucideIcon } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  "trending-up": TrendingUp,
  users: Users,
  zap: Zap,
};

export function HeroTemplate05({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
          style={{ backgroundColor: "var(--theme-primary)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15"
          style={{ backgroundColor: "var(--theme-secondary, #7C3AED)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className={isAr ? "lg:order-2 text-right" : ""}>
            {c.badge && (
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/70 mb-8 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
              >
                <Sparkles size={14} style={{ color: "var(--theme-primary)" }} />
                {isAr ? c.badge.textAr : c.badge.text}
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              {isAr ? c.headingAr : c.heading}
            </h1>

            <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-lg">
              {isAr ? c.subheadingAr : c.subheading}
            </p>

            <div className={`mt-10 flex flex-col sm:flex-row gap-4 ${isAr ? "sm:flex-row-reverse items-end" : "items-start"}`}>
              <a
                href={c.ctaPrimary.url}
                className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl transition-all hover:shadow-2xl hover:-translate-y-0.5 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              {c.ctaSecondary && (
                <a
                  href={c.ctaSecondary.url}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white/60 rounded-xl border border-white/10 hover:bg-white/5 transition-all"
                >
                  {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
                </a>
              )}
            </div>

            {/* Stats row */}
            {c.stats && c.stats.length > 0 && (
              <div className={`mt-14 flex gap-10 pt-8 border-t border-white/10 ${isAr ? "flex-row-reverse" : ""}`}>
                {c.stats.map((stat, i) => (
                  <div key={i} className={isAr ? "text-right" : ""}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/40 mt-0.5">{isAr ? stat.labelAr : stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Floating cards side */}
          <div className={`relative ${isAr ? "lg:order-1" : ""}`}>
            {/* Main glass card */}
            <div className="relative">
              {/* Animated gradient border */}
              <div
                className="absolute -inset-0.5 rounded-3xl opacity-50 blur-sm"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, #7C3AED), var(--theme-accent, #F59E0B), var(--theme-primary))`,
                  backgroundSize: "300% 300%",
                }}
              />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10">
                {/* Dashboard-like content */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--theme-primary)" }}>
                        <Zap size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Dashboard</p>
                        <p className="text-white/40 text-xs">{isAr ? "لوحة التحكم" : "Live overview"}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-green-400 text-xs font-medium">{isAr ? "نشط" : "Live"}</span>
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="h-32 rounded-xl bg-white/5 border border-white/5 flex items-end justify-around px-4 pb-3 gap-1.5">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm transition-all"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i >= 10
                            ? "var(--theme-primary)"
                            : `color-mix(in srgb, var(--theme-primary) ${30 + i * 6}%, transparent)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Floating metric cards */}
                  {c.floatingCards && c.floatingCards.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3">
                      {c.floatingCards.map((card, i) => {
                        const Icon = card.icon ? iconMap[card.icon] || Zap : Zap;
                        return (
                          <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Icon size={14} style={{ color: "var(--theme-primary)" }} />
                              <span className="text-white/50 text-xs">{isAr ? card.titleAr : card.title}</span>
                            </div>
                            {card.value && (
                              <p className="text-white text-xl font-bold">{card.value}</p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: isAr ? "الزوار" : "Visitors", value: "12.5K", icon: Users },
                        { label: isAr ? "التحويل" : "Conversion", value: "8.2%", icon: TrendingUp },
                      ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <item.icon size={14} style={{ color: "var(--theme-primary)" }} />
                            <span className="text-white/50 text-xs">{item.label}</span>
                          </div>
                          <p className="text-white text-xl font-bold">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Small floating card — top right */}
            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <TrendingUp size={14} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">+32%</p>
                  <p className="text-white/40 text-[10px]">{isAr ? "هذا الشهر" : "This month"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
