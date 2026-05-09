"use client";

/**
 * CTA Template 10 — Dark Overlay
 * Dark background with pattern/texture using CSS background patterns.
 * White text. Primary-colored CTA button. Secondary button in outline.
 */

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { CtaConfig } from "./types";

export function CtaTemplate10({ config, language }: BlockProps) {
  const c = config as CtaConfig;
  const isAr = language === "ar";

  return (
    <div className="relative py-20 sm:py-28 bg-gray-950 overflow-hidden">
      {/* CSS Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff),
                           linear-gradient(150deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff),
                           linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff),
                           linear-gradient(150deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff),
                           linear-gradient(60deg, rgba(255,255,255,.3) 25%, transparent 25.5%, transparent 75%, rgba(255,255,255,.3) 75%, rgba(255,255,255,.3)),
                           linear-gradient(60deg, rgba(255,255,255,.3) 25%, transparent 25.5%, transparent 75%, rgba(255,255,255,.3) 75%, rgba(255,255,255,.3))`,
          backgroundSize: "80px 140px",
          backgroundPosition:
            "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
        style={{ backgroundColor: "var(--theme-primary)" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          {isAr ? c.headingAr : c.heading}
        </h2>
        <p className="mt-5 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
          {isAr ? c.descriptionAr : c.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {c.buttonUrl && (
            <a
              href={c.buttonUrl || "#"}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg hover:opacity-90 hover:shadow-lg transition-all duration-200 ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              {isAr ? c.buttonTextAr : c.buttonText}
              <ArrowRight
                size={20}
                className={isAr ? "rotate-180" : ""}
              />
            </a>
          )}

          {c.secondaryButtonText && (
            <a
              href={c.secondaryButtonUrl || "#"}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all duration-200"
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
