"use client";

/**
 * Stats Template 07 — Icon + Number
 * Each stat has a circle icon placeholder, large value, and label in vertical stack
 */

import type { BlockProps } from "@/types/blocks";
import type { StatsConfig } from "./types";

export function StatsTemplate07({ config, language }: BlockProps) {
  const c = config as StatsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
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

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {c.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Icon placeholder circle with index number */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                }}
              >
                <span
                  className="text-xl font-bold"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Value */}
              <div
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: "var(--theme-primary)" }}
              >
                {item.value}{item.suffix || ""}
              </div>

              {/* Label */}
              <div className="text-gray-500 font-medium">
                {isAr ? item.labelAr : item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
