"use client";

/**
 * Stats Template 12 — Animated Counter Style
 * Monospace digital counter/odometer aesthetic with industrial modern feel
 */

import type { BlockProps } from "@/types/blocks";
import type { StatsConfig } from "./types";

export function StatsTemplate12({ config, language }: BlockProps) {
  const c = config as StatsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-100 py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle line pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, var(--theme-primary) 39px, var(--theme-primary) 40px)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Optional heading */}
        {(c.heading || c.headingAr) && (
          <div className={`mb-16 ${isAr ? "text-right" : ""}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>
            {(c.subheading || c.subheadingAr) && (
              <p className="mt-4 text-lg text-gray-500">
                {isAr ? c.subheadingAr : c.subheading}
              </p>
            )}
          </div>
        )}

        {/* Counter cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {c.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 sm:p-8 text-center border border-gray-200"
            >
              {/* Counter-style value */}
              <div
                className="text-4xl sm:text-5xl font-bold tracking-wider mb-3"
                style={{
                  fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace",
                  color: "var(--theme-primary)",
                  letterSpacing: "0.1em",
                }}
              >
                {item.value}{item.suffix || ""}
              </div>

              {/* Decorative line */}
              <div
                className="w-8 h-0.5 mx-auto mb-3 rounded-full"
                style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 30%, transparent)" }}
              />

              {/* Label */}
              <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                {isAr ? item.labelAr : item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
