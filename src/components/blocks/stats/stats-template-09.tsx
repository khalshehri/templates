"use client";

/**
 * Stats Template 09 — Minimal Inline
 * All stats in a single horizontal line separated by vertical thin bars
 */

import type { BlockProps } from "@/types/blocks";
import type { StatsConfig } from "./types";

export function StatsTemplate09({ config, language }: BlockProps) {
  const c = config as StatsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Optional heading */}
        {(c.heading || c.headingAr) && (
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>
            {(c.subheading || c.subheadingAr) && (
              <p className="mt-3 text-gray-500">
                {isAr ? c.subheadingAr : c.subheading}
              </p>
            )}
          </div>
        )}

        {/* Inline stats */}
        <div className={`flex flex-wrap justify-center items-center gap-y-4 ${isAr ? "flex-row-reverse" : ""}`}>
          {c.items.map((item, i) => (
            <div key={i} className={`flex items-center ${isAr ? "flex-row-reverse" : ""}`}>
              <div className={`flex items-baseline gap-2 px-5 sm:px-8 ${isAr ? "flex-row-reverse" : ""}`}>
                <span
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {item.value}{item.suffix || ""}
                </span>
                <span className="text-gray-400 text-sm">
                  {isAr ? item.labelAr : item.label}
                </span>
              </div>
              {/* Vertical bar separator */}
              {i < c.items.length - 1 && (
                <div
                  className="w-px h-8 hidden sm:block"
                  style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 20%, transparent)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
