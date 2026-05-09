"use client";

/**
 * CTA Template 09 — Full Screen
 * Full viewport height (min-h-[60vh]). Content centered vertically and horizontally.
 * Large heading, description below, buttons. Dramatic, impactful.
 */

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { CtaConfig } from "./types";

export function CtaTemplate09({ config, language }: BlockProps) {
  const c = config as CtaConfig;
  const isAr = language === "ar";

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center bg-white">
      {/* Subtle decorative background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--theme-primary) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, var(--theme-primary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
          {isAr ? c.headingAr : c.heading}
        </h2>
        <p className="mt-6 text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
          {isAr ? c.descriptionAr : c.description}
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          {c.buttonUrl && (
            <a
              href={c.buttonUrl || "#"}
              className={`inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-lg hover:opacity-90 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              {isAr ? c.buttonTextAr : c.buttonText}
              <ArrowRight
                size={22}
                className={isAr ? "rotate-180" : ""}
              />
            </a>
          )}

          {c.secondaryButtonText && (
            <a
              href={c.secondaryButtonUrl || "#"}
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl border-2 font-bold text-lg hover:shadow-lg transition-all duration-300"
              style={{
                borderColor: "var(--theme-primary)",
                color: "var(--theme-primary)",
              }}
            >
              {isAr
                ? c.secondaryButtonTextAr || c.secondaryButtonText
                : c.secondaryButtonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
