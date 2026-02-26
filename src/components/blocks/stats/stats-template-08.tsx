"use client";

/**
 * Stats Template 08 — Full Width Banner
 * Single row spanning full width with dark background and vertical dividers
 */

import type { BlockProps } from "@/types/blocks";
import type { StatsConfig } from "./types";

export function StatsTemplate08({ config, language }: BlockProps) {
  const c = config as StatsConfig;
  const isAr = language === "ar";

  return (
    <div
      className="py-16 sm:py-20"
      style={{ backgroundColor: "var(--theme-foreground, #111827)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Optional heading */}
        {(c.heading || c.headingAr) && (
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {isAr ? c.headingAr : c.heading}
            </h2>
            {(c.subheading || c.subheadingAr) && (
              <p className="mt-2 text-white/50">
                {isAr ? c.subheadingAr : c.subheading}
              </p>
            )}
          </div>
        )}

        {/* Stats row with dividers */}
        <div className={`flex flex-wrap justify-center items-center ${isAr ? "flex-row-reverse" : ""}`}>
          {c.items.map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="text-center px-6 sm:px-10 py-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1">
                  {item.value}{item.suffix || ""}
                </div>
                <div className="text-white/50 text-sm font-medium">
                  {isAr ? item.labelAr : item.label}
                </div>
              </div>
              {/* Vertical divider */}
              {i < c.items.length - 1 && (
                <div className="w-px h-16 bg-white/10 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
