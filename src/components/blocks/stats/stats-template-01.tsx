"use client";

import type { BlockProps } from "@/types/blocks";
import type { StatsConfig } from "./types";

export function StatsTemplate01({ config, language }: BlockProps) {
  const c = config as StatsConfig;
  const isAr = language === "ar";

  return (
    <div
      className="py-16 sm:py-20"
      style={{ backgroundColor: "var(--theme-primary)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Optional heading */}
        {(c.heading || c.headingAr) && (
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {isAr ? c.headingAr : c.heading}
            </h2>
            {(c.subheading || c.subheadingAr) && (
              <p className="mt-2 text-white/70">
                {isAr ? c.subheadingAr : c.subheading}
              </p>
            )}
          </div>
        )}

        {/* Stats row */}
        <div className={`grid grid-cols-2 lg:grid-cols-${Math.min(c.items.length, 4)} gap-8`}>
          {c.items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {item.value}{item.suffix || ""}
              </div>
              <div className="text-white/70 text-sm sm:text-base font-medium">
                {isAr ? item.labelAr : item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
