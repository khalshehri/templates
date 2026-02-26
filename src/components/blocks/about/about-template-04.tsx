"use client";

/**
 * About Template 04 — Timeline Story
 * Vertical timeline with milestone dots and story paragraphs
 */

import type { BlockProps } from "@/types/blocks";
import type { AboutConfig } from "./types";

export function AboutTemplate04({ config, language }: BlockProps) {
  const c = config as AboutConfig;
  const isAr = language === "ar";

  const paragraphs = (isAr ? c.contentAr : c.content)
    .split("\n")
    .filter((p) => p.trim());

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`max-w-3xl mb-16 ${isAr ? "text-right mr-0 ml-auto" : ""}`}>
          <div
            className="w-12 h-1.5 rounded-full mb-6"
            style={{ backgroundColor: "var(--theme-primary)" }}
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          {(c.subheading || c.subheadingAr) && (
            <p className="mt-4 text-lg text-gray-500">
              {isAr ? c.subheadingAr : c.subheading}
            </p>
          )}
        </div>

        {/* Timeline */}
        <div className={`relative ${isAr ? "pr-8 sm:pr-12" : "pl-8 sm:pl-12"}`}>
          {/* Timeline line */}
          <div
            className={`absolute top-0 bottom-0 w-0.5 ${isAr ? "right-0" : "left-0"}`}
            style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 20%, transparent)" }}
          />

          {/* Story paragraphs as timeline items */}
          <div className="space-y-12">
            {paragraphs.length > 1 ? (
              paragraphs.map((paragraph, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div
                    className={`absolute top-1.5 w-4 h-4 rounded-full border-4 border-white ${
                      isAr ? "-right-10 sm:-right-14" : "-left-10 sm:-left-14"
                    }`}
                    style={{ backgroundColor: "var(--theme-primary)" }}
                  />
                  <p className={`text-gray-600 leading-relaxed text-lg ${isAr ? "text-right" : ""}`}>
                    {paragraph}
                  </p>
                </div>
              ))
            ) : (
              <div className="relative">
                <div
                  className={`absolute top-1.5 w-4 h-4 rounded-full border-4 border-white ${
                    isAr ? "-right-10 sm:-right-14" : "-left-10 sm:-left-14"
                  }`}
                  style={{ backgroundColor: "var(--theme-primary)" }}
                />
                <p className={`text-gray-600 leading-relaxed text-lg ${isAr ? "text-right" : ""}`}>
                  {isAr ? c.contentAr : c.content}
                </p>
              </div>
            )}

            {/* Mission milestone */}
            {c.mission && (
              <div className="relative">
                <div
                  className={`absolute top-1.5 w-4 h-4 rounded-full border-4 border-white ${
                    isAr ? "-right-10 sm:-right-14" : "-left-10 sm:-left-14"
                  }`}
                  style={{ backgroundColor: "var(--theme-secondary, var(--theme-primary))" }}
                />
                <div className={isAr ? "text-right" : ""}>
                  <h3
                    className="text-sm font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    {isAr ? "رسالتنا" : "Our Mission"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {isAr ? c.missionAr || c.mission : c.mission}
                  </p>
                </div>
              </div>
            )}

            {/* Vision milestone */}
            {c.vision && (
              <div className="relative">
                <div
                  className={`absolute top-1.5 w-4 h-4 rounded-full border-4 border-white ${
                    isAr ? "-right-10 sm:-right-14" : "-left-10 sm:-left-14"
                  }`}
                  style={{ backgroundColor: "var(--theme-secondary, var(--theme-primary))" }}
                />
                <div className={isAr ? "text-right" : ""}>
                  <h3
                    className="text-sm font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    {isAr ? "رؤيتنا" : "Our Vision"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {isAr ? c.visionAr || c.vision : c.vision}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats at bottom */}
        {c.stats && c.stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 pt-12 border-t border-gray-100">
            {c.stats.map((stat, i) => (
              <div key={i} className={`${isAr ? "text-right" : ""}`}>
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
