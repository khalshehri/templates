"use client";

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { CtaConfig } from "./types";

export function CtaTemplate01({ config, language }: BlockProps) {
  const c = config as CtaConfig;
  const isAr = language === "ar";

  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-16 sm:px-16 sm:py-24 text-center"
          style={{ backgroundColor: "var(--theme-primary)" }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>
            <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              {isAr ? c.descriptionAr : c.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {c.buttonUrl && (
                <a
                  href={c.buttonUrl || "#"}
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white font-semibold text-lg hover:shadow-xl hover:shadow-black/10 transition-all duration-200 ${
                    isAr ? "flex-row-reverse" : ""
                  }`}
                  style={{ color: "var(--theme-primary)" }}
                >
                  {isAr ? c.buttonTextAr : c.buttonText}
                  <ArrowRight size={20} className={isAr ? "rotate-180" : ""} />
                </a>
              )}

              {c.secondaryButtonText && (
                <a
                  href={c.secondaryButtonUrl || "#"}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-200"
                >
                  {isAr ? c.secondaryButtonTextAr || c.secondaryButtonText : c.secondaryButtonText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
