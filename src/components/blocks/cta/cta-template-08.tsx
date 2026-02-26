"use client";

/**
 * CTA Template 08 — Minimal Banner
 * Thin, compact banner. Single row: heading left, button right.
 * No description. Clean, minimal. Good as a quick call-to-action strip.
 */

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { CtaConfig } from "./types";

export function CtaTemplate08({ config, language }: BlockProps) {
  const c = config as CtaConfig;
  const isAr = language === "ar";

  return (
    <div
      className="py-6 sm:py-8"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--theme-primary) 6%, transparent)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isAr ? "sm:flex-row-reverse" : ""
          }`}
        >
          <h2
            className={`text-lg sm:text-xl font-bold text-gray-900 ${
              isAr ? "text-right" : ""
            }`}
          >
            {isAr ? c.headingAr : c.heading}
          </h2>

          <div className={`flex items-center gap-3 shrink-0 ${isAr ? "flex-row-reverse" : ""}`}>
            <a
              href={c.buttonUrl}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-all duration-200 ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              {isAr ? c.buttonTextAr : c.buttonText}
              <ArrowRight
                size={16}
                className={isAr ? "rotate-180" : ""}
              />
            </a>

            {c.secondaryButtonText && (
              <a
                href={c.secondaryButtonUrl || "#"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold hover:underline transition-all duration-200"
                style={{ color: "var(--theme-primary)" }}
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
