"use client";

/**
 * About Template 06 — Stats Focus
 * Stats displayed huge and prominently at top, content below in two columns
 */

import type { BlockProps } from "@/types/blocks";
import type { AboutConfig } from "./types";

export function AboutTemplate06({ config, language }: BlockProps) {
  const c = config as AboutConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats — huge and prominent */}
        {c.stats && c.stats.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {c.stats.map((stat, i) => (
              <div key={i} className={`${isAr ? "text-right" : ""}`}>
                <div
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-500 mt-2 font-medium">
                  {isAr ? stat.labelAr : stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Divider */}
        <div
          className="w-full h-px mb-16"
          style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 15%, transparent)" }}
        />

        {/* Heading and content in two columns */}
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 ${isAr ? "" : ""}`}>
          <div className={`${isAr ? "text-right" : ""}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>
            {(c.subheading || c.subheadingAr) && (
              <p className="mt-4 text-lg text-gray-500">
                {isAr ? c.subheadingAr : c.subheading}
              </p>
            )}
          </div>

          <div className={`${isAr ? "text-right" : ""}`}>
            <p className="text-gray-600 leading-relaxed text-lg">
              {isAr ? c.contentAr : c.content}
            </p>

            {c.mission && (
              <div className="mt-8">
                <h3
                  className="text-sm font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {isAr ? "رسالتنا" : "Mission"}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {isAr ? c.missionAr || c.mission : c.mission}
                </p>
              </div>
            )}

            {c.vision && (
              <div className="mt-6">
                <h3
                  className="text-sm font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {isAr ? "رؤيتنا" : "Vision"}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {isAr ? c.visionAr || c.vision : c.vision}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
