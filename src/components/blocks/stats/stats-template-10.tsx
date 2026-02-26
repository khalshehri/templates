"use client";

/**
 * Stats Template 10 — Circle Numbers
 * Each value inside a large circle with primary border, label below
 */

import type { BlockProps } from "@/types/blocks";
import type { StatsConfig } from "./types";

export function StatsTemplate10({ config, language }: BlockProps) {
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

        {/* Circle stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {c.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Circle */}
              <div
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 flex items-center justify-center mb-5"
                style={{ borderColor: "var(--theme-primary)" }}
              >
                <span
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {item.value}{item.suffix || ""}
                </span>
              </div>

              {/* Label */}
              <div className="text-gray-600 font-medium">
                {isAr ? item.labelAr : item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
