"use client";

/**
 * Stats Template 06 — Bordered Grid
 * Strong editorial borders between stats with bold values
 */

import type { BlockProps } from "@/types/blocks";
import type { StatsConfig } from "./types";

export function StatsTemplate06({ config, language }: BlockProps) {
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

        {/* Bordered grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {c.items.map((item, i) => (
            <div
              key={i}
              className={`p-8 sm:p-10 text-center ${
                i < c.items.length - 1 ? (isAr ? "border-l-2" : "border-r-2") : ""
              } ${i < c.items.length - 2 ? "max-lg:border-b-2" : ""} border-gray-200`}
              style={{
                borderColor: i % 2 === 0
                  ? "color-mix(in srgb, var(--theme-primary) 20%, transparent)"
                  : undefined,
              }}
            >
              <div
                className="text-4xl sm:text-5xl font-bold tracking-tight mb-3"
                style={{ color: "var(--theme-primary)" }}
              >
                {item.value}{item.suffix || ""}
              </div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                {isAr ? item.labelAr : item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
