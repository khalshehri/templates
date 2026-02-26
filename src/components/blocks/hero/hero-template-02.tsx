"use client";

import { ArrowRight, Play } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

export function HeroTemplate02({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className={isAr ? "lg:order-2" : ""}>
            {c.badge && (
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
                style={{
                  backgroundColor: "var(--theme-primary)",
                  color: "#fff",
                  opacity: 0.9,
                }}
              >
                {isAr ? c.badge.textAr : c.badge.text}
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              {isAr ? c.headingAr : c.heading}
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
              {isAr ? c.subheadingAr : c.subheading}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <a
                href={c.ctaPrimary.url}
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              {c.ctaSecondary && (
                <a
                  href={c.ctaSecondary.url}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Play
                    size={16}
                    className="fill-current"
                    style={{ color: "var(--theme-primary)" }}
                  />
                  {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
                </a>
              )}
            </div>

            {c.stats && c.stats.length > 0 && (
              <div className="mt-12 flex items-center gap-8 pt-8 border-t border-gray-100">
                {c.stats.map((stat, i) => (
                  <div key={i}>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "var(--theme-primary)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-0.5">
                      {isAr ? stat.labelAr : stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image Placeholder */}
          <div className={isAr ? "lg:order-1" : ""}>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-20"
                style={{ backgroundColor: "var(--theme-primary)" }}
              />
              <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden shadow-2xl">
                {c.backgroundImage ? (
                  <img
                    src={c.backgroundImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                        style={{
                          backgroundColor: "var(--theme-primary)",
                          opacity: 0.1,
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg"
                          style={{
                            backgroundColor: "var(--theme-primary)",
                          }}
                        />
                      </div>
                      <p className="text-sm text-gray-400">Your image here</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
