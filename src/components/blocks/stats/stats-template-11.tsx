"use client";

/**
 * Stats Template 11 — Dark Mode
 * Dark background with light text and subtle glow on values
 */

import type { BlockProps } from "@/types/blocks";
import type { StatsConfig } from "./types";

export function StatsTemplate11({ config, language }: BlockProps) {
  const c = config as StatsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Optional heading */}
        {(c.heading || c.headingAr) && (
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>
            {(c.subheading || c.subheadingAr) && (
              <p className="mt-4 text-lg text-gray-500">
                {isAr ? c.subheadingAr : c.subheading}
              </p>
            )}
          </div>
        )}

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {c.items.map((item, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/5"
            >
              <div
                className="text-4xl sm:text-5xl font-bold mb-3"
                style={{
                  color: "var(--theme-primary)",
                  textShadow: "0 0 40px color-mix(in srgb, var(--theme-primary) 30%, transparent)",
                }}
              >
                {item.value}{item.suffix || ""}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {isAr ? item.labelAr : item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
