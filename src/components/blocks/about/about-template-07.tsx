"use client";

/**
 * About Template 07 — Magazine Two-Column
 * Editorial magazine layout with drop cap and clean typography
 */

import type { BlockProps } from "@/types/blocks";
import type { AboutConfig } from "./types";

export function AboutTemplate07({ config, language }: BlockProps) {
  const c = config as AboutConfig;
  const isAr = language === "ar";

  const fullContent = isAr ? c.contentAr : c.content;
  const paragraphs = fullContent.split("\n").filter((p) => p.trim());
  const firstParagraph = paragraphs[0] || fullContent;
  const remainingParagraphs = paragraphs.slice(1);

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`max-w-4xl mb-16 ${isAr ? "text-right mr-0 ml-auto" : ""}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          {(c.subheading || c.subheadingAr) && (
            <p className="mt-4 text-lg text-gray-400 font-light">
              {isAr ? c.subheadingAr : c.subheading}
            </p>
          )}
        </div>

        {/* Decorative line */}
        <div
          className="w-full h-px mb-12"
          style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 20%, transparent)" }}
        />

        {/* Two-column editorial layout */}
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 ${isAr ? "" : ""}`}>
          {/* Left column — first paragraph with drop cap */}
          <div className={`${isAr ? "text-right" : ""}`}>
            <p className="text-gray-700 leading-relaxed text-lg">
              <span
                className={`text-5xl sm:text-6xl font-bold leading-none ${
                  isAr ? "float-right ml-3 mt-1" : "float-left mr-3 mt-1"
                }`}
                style={{ color: "var(--theme-primary)" }}
              >
                {firstParagraph.charAt(0)}
              </span>
              {firstParagraph.slice(1)}
            </p>

            {c.mission && (
              <blockquote
                className={`mt-10 py-4 ${isAr ? "border-r-2 pr-6" : "border-l-2 pl-6"}`}
                style={{ borderColor: "var(--theme-primary)" }}
              >
                <p className="text-gray-500 italic leading-relaxed">
                  {isAr ? c.missionAr || c.mission : c.mission}
                </p>
              </blockquote>
            )}
          </div>

          {/* Right column — remaining content */}
          <div className={`space-y-6 ${isAr ? "text-right" : ""}`}>
            {remainingParagraphs.length > 0 ? (
              remainingParagraphs.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-lg">
                  {p}
                </p>
              ))
            ) : (
              <p className="text-gray-600 leading-relaxed text-lg">
                {isAr ? c.contentAr : c.content}
              </p>
            )}

            {c.vision && (
              <div className="mt-8 pt-8 border-t border-gray-100">
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
        </div>

        {/* Stats row */}
        {c.stats && c.stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-12 mt-20 pt-12 border-t border-gray-100">
            {c.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl font-bold"
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
