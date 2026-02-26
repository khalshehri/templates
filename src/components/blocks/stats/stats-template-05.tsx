"use client";

/**
 * Stats Template 05 — Gradient Cards
 * Each stat in a card with gradient background at low opacity
 */

import type { BlockProps } from "@/types/blocks";
import type { StatsConfig } from "./types";

export function StatsTemplate05({ config, language }: BlockProps) {
  const c = config as StatsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Optional heading */}
        {(c.heading || c.headingAr) && (
          <div className="text-center mb-16">
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

        {/* Gradient cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {c.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{
                background: `linear-gradient(135deg, color-mix(in srgb, var(--theme-primary) 10%, white), color-mix(in srgb, var(--theme-secondary, var(--theme-primary)) 10%, white))`,
              }}
            >
              <div
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: "var(--theme-primary)" }}
              >
                {item.value}{item.suffix || ""}
              </div>
              <div className="text-gray-500 text-sm font-medium">
                {isAr ? item.labelAr : item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
