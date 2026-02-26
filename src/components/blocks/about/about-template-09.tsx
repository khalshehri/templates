"use client";

/**
 * About Template 09 — Centered Narrative
 * Ultra-clean centered layout with decorative accent and generous whitespace
 */

import type { BlockProps } from "@/types/blocks";
import type { AboutConfig } from "./types";

export function AboutTemplate09({ config, language }: BlockProps) {
  const c = config as AboutConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative accent line */}
          <div className="flex justify-center mb-10">
            <div
              className="w-16 h-1 rounded-full"
              style={{ backgroundColor: "var(--theme-primary)" }}
            />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>

          {(c.subheading || c.subheadingAr) && (
            <p className="mt-4 text-lg text-gray-400 font-light">
              {isAr ? c.subheadingAr : c.subheading}
            </p>
          )}

          {/* Content */}
          <p className="mt-10 text-gray-600 leading-relaxed text-lg">
            {isAr ? c.contentAr : c.content}
          </p>

          {/* Decorative quote for mission */}
          {c.mission && (
            <div className="mt-12 relative">
              <div
                className="text-6xl font-serif leading-none opacity-20 mb-2"
                style={{ color: "var(--theme-primary)" }}
              >
                &ldquo;
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed -mt-4">
                {isAr ? c.missionAr || c.mission : c.mission}
              </p>
              <div
                className="text-6xl font-serif leading-none opacity-20 mt-2"
                style={{ color: "var(--theme-primary)" }}
              >
                &rdquo;
              </div>
            </div>
          )}

          {c.vision && (
            <div className="mt-10 pt-10 border-t border-gray-100">
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-3"
                style={{ color: "var(--theme-primary)" }}
              >
                {isAr ? "رؤيتنا" : "Our Vision"}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {isAr ? c.visionAr || c.vision : c.vision}
              </p>
            </div>
          )}
        </div>

        {/* Stats row */}
        {c.stats && c.stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-10 sm:gap-16 mt-20 pt-12 border-t border-gray-100 max-w-4xl mx-auto">
            {c.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {isAr ? stat.labelAr : stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
