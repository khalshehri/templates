"use client";

/**
 * About Template 10 — Numbered Sections
 * Content broken into sections with large numbers (01, 02, 03...)
 */

import type { BlockProps } from "@/types/blocks";
import type { AboutConfig } from "./types";

export function AboutTemplate10({ config, language }: BlockProps) {
  const c = config as AboutConfig;
  const isAr = language === "ar";

  // Build numbered sections from mission, vision, values
  const sections: { number: string; title: string; content: string }[] = [];

  if (c.mission) {
    sections.push({
      number: "01",
      title: isAr ? "رسالتنا" : "Our Mission",
      content: isAr ? c.missionAr || c.mission : c.mission,
    });
  }

  if (c.vision) {
    sections.push({
      number: String(sections.length + 1).padStart(2, "0"),
      title: isAr ? "رؤيتنا" : "Our Vision",
      content: isAr ? c.visionAr || c.vision : c.vision,
    });
  }

  if (c.values && c.values.length > 0) {
    sections.push({
      number: String(sections.length + 1).padStart(2, "0"),
      title: isAr ? "قيمنا" : "Our Values",
      content: c.values
        .map((v) => (isAr ? `${v.titleAr}: ${v.descriptionAr}` : `${v.title}: ${v.description}`))
        .join(". "),
    });
  }

  // Fallback: if no mission/vision/values, use content
  if (sections.length === 0) {
    const content = isAr ? c.contentAr : c.content;
    const paragraphs = content.split("\n").filter((p) => p.trim());
    paragraphs.forEach((p, i) => {
      sections.push({
        number: String(i + 1).padStart(2, "0"),
        title: i === 0 ? (isAr ? "قصتنا" : "Our Story") : "",
        content: p,
      });
    });
    if (sections.length === 0) {
      sections.push({
        number: "01",
        title: isAr ? "قصتنا" : "Our Story",
        content,
      });
    }
  }

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`max-w-3xl mb-16 ${isAr ? "text-right mr-0 ml-auto" : ""}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          {(c.subheading || c.subheadingAr) && (
            <p className="mt-4 text-lg text-gray-500">
              {isAr ? c.subheadingAr : c.subheading}
            </p>
          )}
          <p className="mt-6 text-gray-600 leading-relaxed">
            {isAr ? c.contentAr : c.content}
          </p>
        </div>

        {/* Numbered sections */}
        <div className="space-y-12">
          {sections.map((section, i) => (
            <div
              key={i}
              className={`flex gap-8 sm:gap-12 items-start ${
                isAr ? "flex-row-reverse text-right" : ""
              }`}
            >
              {/* Large number */}
              <div
                className="text-5xl sm:text-7xl font-bold shrink-0 opacity-80 leading-none"
                style={{ color: "var(--theme-primary)" }}
              >
                {section.number}
              </div>

              {/* Content */}
              <div className="pt-2">
                {section.title && (
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                )}
                <p className="text-gray-500 leading-relaxed text-lg">
                  {section.content}
                </p>
                {i < sections.length - 1 && (
                  <div className="mt-12 h-px bg-gray-100" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        {c.stats && c.stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-100">
            {c.stats.map((stat, i) => (
              <div key={i} className={`${isAr ? "text-right" : ""}`}>
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
