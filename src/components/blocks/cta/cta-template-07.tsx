"use client";

/**
 * CTA Template 07 — Floating Card
 * White card floating over a colored background section.
 * Card has shadow-2xl, centered content. Background is primary color, card is white.
 */

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { CtaConfig } from "./types";

export function CtaTemplate07({ config, language }: BlockProps) {
  const c = config as CtaConfig;
  const isAr = language === "ar";

  return (
    <div className="relative py-20 sm:py-28">
      {/* Colored Background (top half) */}
      <div
        className="absolute inset-0 bottom-1/2"
        style={{ backgroundColor: "var(--theme-primary)" }}
      />
      {/* Light Background (bottom half) */}
      <div className="absolute inset-0 top-1/2 bg-gray-50" />

      {/* Floating Card */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-10 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            {isAr ? c.descriptionAr : c.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={c.buttonUrl}
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

            {c.secondaryButtonText && (
              <a
                href={c.secondaryButtonUrl || "#"}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 font-semibold text-lg hover:shadow-md transition-all duration-200"
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
    </div>
  );
}
