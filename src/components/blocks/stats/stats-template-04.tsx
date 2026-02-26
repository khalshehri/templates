"use client";

/**
 * Stats Template 04 — Progress Bars
 * Each stat displayed as a horizontal progress bar with value and label
 */

import type { BlockProps } from "@/types/blocks";
import type { StatsConfig } from "./types";

export function StatsTemplate04({ config, language }: BlockProps) {
  const c = config as StatsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        {/* Progress bars */}
        <div className="max-w-3xl mx-auto space-y-8">
          {c.items.map((item, i) => {
            // Extract numeric value for bar width (fallback to percentage based on index)
            const numericMatch = item.value.match(/(\d+)/);
            const numericValue = numericMatch ? Math.min(parseInt(numericMatch[1], 10), 100) : ((i + 1) / c.items.length) * 100;
            const barWidth = `${Math.max(numericValue, 15)}%`;

            return (
              <div key={i}>
                <div className={`flex justify-between items-baseline mb-3 ${isAr ? "flex-row-reverse" : ""}`}>
                  <span
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    {item.value}{item.suffix || ""}
                  </span>
                  <span className="text-gray-500 font-medium">
                    {isAr ? item.labelAr : item.label}
                  </span>
                </div>
                <div
                  className="w-full h-2.5 rounded-full overflow-hidden"
                  style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: barWidth,
                      backgroundColor: "var(--theme-primary)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
