"use client";

/**
 * CTA Template 06 — Gradient Wave
 * Background with CSS gradient waves using SVG. Primary to secondary gradient.
 * White text. Buttons in white. Decorative wave shapes.
 */

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { CtaConfig } from "./types";

export function CtaTemplate06({ config, language }: BlockProps) {
  const c = config as CtaConfig;
  const isAr = language === "ar";

  return (
    <div className="relative overflow-hidden py-20 sm:py-28">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))",
        }}
      />

      {/* Top Wave */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: "60px" }}
      >
        <path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,40 L1440,0 L0,0 Z"
          fill="white"
          fillOpacity="0.1"
        />
      </svg>

      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: "80px" }}
      >
        <path
          d="M0,40 C360,0 720,100 1080,40 C1260,10 1380,50 1440,80 L1440,120 L0,120 Z"
          fill="white"
          fillOpacity="0.08"
        />
        <path
          d="M0,80 C480,40 960,100 1440,60 L1440,120 L0,120 Z"
          fill="white"
          fillOpacity="0.05"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          {isAr ? c.headingAr : c.heading}
        </h2>
        <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          {isAr ? c.descriptionAr : c.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={c.buttonUrl}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white font-semibold text-lg hover:shadow-xl hover:shadow-black/10 transition-all duration-200 ${
              isAr ? "flex-row-reverse" : ""
            }`}
            style={{ color: "var(--theme-primary)" }}
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-200"
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
