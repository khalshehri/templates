"use client";

/**
 * CTA Template 03 — Dark with Gradient Glow
 * Dark background with animated gradient glow border and bold text
 */

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { CtaConfig } from "./types";

export function CtaTemplate03({ config, language }: BlockProps) {
  const c = config as CtaConfig;
  const isAr = language === "ar";

  return (
    <div className="py-20 sm:py-28 bg-gray-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient glow border */}
          <div
            className="absolute -inset-0.5 rounded-3xl opacity-60 blur-sm"
            style={{
              backgroundImage: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, #7C3AED), var(--theme-accent, #F59E0B))`,
            }}
          />

          <div className="relative bg-gray-950 rounded-3xl px-8 py-16 sm:px-16 sm:py-20">
            {/* Ambient glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] opacity-10"
              style={{ backgroundColor: "var(--theme-primary)" }}
            />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {isAr ? c.headingAr : c.heading}
              </h2>
              <p className="mt-5 text-lg text-white/50 leading-relaxed">
                {isAr ? c.descriptionAr : c.description}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                {c.buttonUrl && (
                  <a
                    href={c.buttonUrl || "#"}
                    className={`group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:shadow-2xl hover:-translate-y-0.5 text-white ${
                      isAr ? "flex-row-reverse" : ""
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))`,
                    }}
                  >
                    {isAr ? c.buttonTextAr : c.buttonText}
                    <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                  </a>
                )}

                {c.secondaryButtonText && (
                  <a
                    href={c.secondaryButtonUrl || "#"}
                    className="px-8 py-4 rounded-xl text-sm font-semibold text-white/60 border border-white/10 hover:bg-white/5 transition-all"
                  >
                    {isAr ? c.secondaryButtonTextAr || c.secondaryButtonText : c.secondaryButtonText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
