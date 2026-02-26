"use client";

/**
 * Stats Template 03 — Glass Cards on Gradient Background
 * Glassmorphic stat cards floating over a gradient mesh
 */

import type { BlockProps } from "@/types/blocks";
import type { StatsConfig } from "./types";

export function StatsTemplate03({ config, language }: BlockProps) {
  const c = config as StatsConfig;
  const isAr = language === "ar";

  return (
    <div className="relative py-20 sm:py-28 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, color-mix(in srgb, var(--theme-primary) 90%, #000) 0%, color-mix(in srgb, var(--theme-secondary, var(--theme-primary)) 80%, #000) 100%)`,
        }}
      />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Optional heading */}
        {(c.heading || c.headingAr) && (
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>
            {(c.subheading || c.subheadingAr) && (
              <p className="mt-3 text-white/60 text-lg">
                {isAr ? c.subheadingAr : c.subheading}
              </p>
            )}
          </div>
        )}

        {/* Glass cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {c.items.map((item, i) => (
            <div
              key={i}
              className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/15 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
                {item.value}{item.suffix || ""}
              </div>
              <div className="text-white/50 text-sm font-medium">
                {isAr ? item.labelAr : item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
