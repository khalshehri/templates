"use client";

/**
 * CTA Template 12 — Bordered Box
 * No fill background. Strong border (2-3px) in primary color.
 * Content inside the bordered box. Clean, modern, outlined style.
 */

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { CtaConfig } from "./types";

export function CtaTemplate12({ config, language }: BlockProps) {
  const c = config as CtaConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl border-[3px] px-8 py-14 sm:px-16 sm:py-20 text-center"
          style={{ borderColor: "var(--theme-primary)" }}
        >
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
