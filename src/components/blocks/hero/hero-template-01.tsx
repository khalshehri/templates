"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

export function HeroTemplate01({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "var(--theme-primary)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "var(--theme-secondary)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          {c.badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-sm font-medium text-gray-600 mb-8 shadow-sm">
              <Sparkles
                size={14}
                style={{ color: "var(--theme-primary)" }}
              />
              {isAr ? c.badge.textAr : c.badge.text}
            </div>
          )}

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            {isAr ? c.headingAr : c.heading}
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>

          {/* CTAs */}
          {(c.ctaPrimary || c.ctaSecondary) && (
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {c.ctaPrimary && (
                <a
                  href={c.ctaPrimary.url || "#"}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-full transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              )}
              {c.ctaSecondary && (
                <a
                  href={c.ctaSecondary.url || "#"}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-gray-700 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
                </a>
              )}
            </div>
          )}

          {/* Stats */}
          {c.stats && c.stats.length > 0 && (
            <div className="mt-16 flex items-center justify-center gap-8 sm:gap-16">
              {c.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
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
