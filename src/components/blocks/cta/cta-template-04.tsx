"use client";

/**
 * CTA Template 04 — Split Image
 * Two halves: left has text (heading, description, buttons), right has image.
 * If no image, right side has decorative gradient. Responsive stacking.
 */

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { CtaConfig } from "./types";

export function CtaTemplate04({ config, language }: BlockProps) {
  const c = config as CtaConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            isAr ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Side */}
          <div className={`${isAr ? "text-right lg:order-2" : ""}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              {isAr ? c.descriptionAr : c.description}
            </p>

            <div
              className={`mt-8 flex flex-wrap gap-4 ${
                isAr ? "justify-end" : ""
              }`}
            >
              {c.buttonUrl && (
                <a
                  href={c.buttonUrl || "#"}
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold hover:opacity-90 hover:shadow-lg transition-all duration-200 ${
                    isAr ? "flex-row-reverse" : ""
                  }`}
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {isAr ? c.buttonTextAr : c.buttonText}
                  <ArrowRight
                    size={18}
                    className={isAr ? "rotate-180" : ""}
                  />
                </a>
              )}

              {c.secondaryButtonText && (
                <a
                  href={c.secondaryButtonUrl || "#"}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 font-semibold hover:shadow-md transition-all duration-200"
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

          {/* Image Side */}
          <div className={`${isAr ? "lg:order-1" : ""}`}>
            {c.image ? (
              <img
                src={c.image}
                alt=""
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            ) : (
              <div
                className="rounded-2xl aspect-[4/3] relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))",
                }}
              >
                {/* Decorative circles */}
                <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute bottom-12 left-12 w-48 h-48 bg-white/10 rounded-full" />
                <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/5 rounded-full" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
