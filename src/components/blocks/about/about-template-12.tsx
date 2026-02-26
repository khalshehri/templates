"use client";

/**
 * About Template 12 — Gradient Banner
 * Top gradient section with heading, clean content below, gradient stat cards
 */

import type { BlockProps } from "@/types/blocks";
import type { AboutConfig } from "./types";

export function AboutTemplate12({ config, language }: BlockProps) {
  const c = config as AboutConfig;
  const isAr = language === "ar";

  return (
    <div>
      {/* Gradient banner top */}
      <div
        className="py-20 sm:py-28"
        style={{
          background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))`,
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>
            {(c.subheading || c.subheadingAr) && (
              <p className="mt-4 text-lg text-white/70">
                {isAr ? c.subheadingAr : c.subheading}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl mx-auto ${isAr ? "text-right" : ""}`}>
            <p className="text-gray-600 leading-relaxed text-lg">
              {isAr ? c.contentAr : c.content}
            </p>

            {c.mission && (
              <div className="mt-10">
                <h3
                  className="text-sm font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {isAr ? "رسالتنا" : "Our Mission"}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {isAr ? c.missionAr || c.mission : c.mission}
                </p>
              </div>
            )}

            {c.vision && (
              <div className="mt-8">
                <h3
                  className="text-sm font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {isAr ? "رؤيتنا" : "Our Vision"}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {isAr ? c.visionAr || c.vision : c.vision}
                </p>
              </div>
            )}

            {/* Values */}
            {c.values && c.values.length > 0 && (
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {c.values.map((value, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--theme-primary) 5%, transparent)",
                    }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {isAr ? value.titleAr : value.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {isAr ? value.descriptionAr : value.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Stats in gradient cards */}
          {c.stats && c.stats.length > 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
              {c.stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 text-center text-white"
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))`,
                  }}
                >
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm">
                    {isAr ? stat.labelAr : stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
