"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { CtaConfig } from "./types";

export function CtaTemplate02({ config, language }: BlockProps) {
  const c = config as CtaConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isAr ? "lg:flex-row-reverse" : ""}`}>
          {/* Text side */}
          <div className={`${isAr ? "text-right lg:order-2" : ""}`}>
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{
                backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                color: "var(--theme-primary)",
              }}
            >
              <Sparkles size={14} />
              {isAr ? "ابدأ اليوم" : "Start Today"}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              {isAr ? c.descriptionAr : c.description}
            </p>

            <div className={`mt-8 flex flex-wrap gap-4 ${isAr ? "justify-end" : ""}`}>
              {c.buttonUrl && (
                <a
                  href={c.buttonUrl || "#"}
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold hover:opacity-90 transition-all duration-200 ${
                    isAr ? "flex-row-reverse" : ""
                  }`}
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {isAr ? c.buttonTextAr : c.buttonText}
                  <ArrowRight size={18} className={isAr ? "rotate-180" : ""} />
                </a>
              )}

              {c.secondaryButtonText && (
                <a
                  href={c.secondaryButtonUrl || "#"}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 font-semibold hover:shadow-md transition-all duration-200"
                  style={{ borderColor: "var(--theme-primary)", color: "var(--theme-primary)" }}
                >
                  {isAr ? c.secondaryButtonTextAr || c.secondaryButtonText : c.secondaryButtonText}
                </a>
              )}
            </div>
          </div>

          {/* Image side */}
          <div className={`${isAr ? "lg:order-1" : ""}`}>
            {c.image ? (
              <img
                src={c.image}
                alt=""
                className="rounded-3xl shadow-2xl w-full"
              />
            ) : (
              <div
                className="rounded-3xl aspect-[4/3] flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))`,
                }}
              >
                <div className="text-center text-white/80">
                  <Sparkles size={48} className="mx-auto mb-3 opacity-60" />
                  <p className="text-sm font-medium">{isAr ? "صورة مخصصة" : "Your Image Here"}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
