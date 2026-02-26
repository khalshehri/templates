"use client";

/**
 * About Template 03 — Minimal Split with Accent Line
 * Clean two-column: large quote/text left, key numbers right
 */

import type { BlockProps } from "@/types/blocks";
import type { AboutConfig } from "./types";

export function AboutTemplate03({ config, language }: BlockProps) {
  const c = config as AboutConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 ${isAr ? "" : ""}`}>
          {/* Left — big text */}
          <div className={`${isAr ? "lg:order-2 text-right" : ""}`}>
            <div
              className={`w-12 h-1.5 rounded-full mb-8`}
              style={{ backgroundColor: "var(--theme-primary)" }}
            />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>
            <p className="mt-8 text-lg text-gray-500 leading-relaxed">
              {isAr ? c.contentAr : c.content}
            </p>

            {c.mission && (
              <blockquote
                className={`mt-10 border-gray-200 py-4 ${isAr ? "border-r-4 pr-6" : "border-l-4 pl-6"}`}
                style={{ borderColor: "var(--theme-primary)" }}
              >
                <p className="text-gray-700 italic leading-relaxed">
                  &ldquo;{isAr ? c.missionAr || c.mission : c.mission}&rdquo;
                </p>
              </blockquote>
            )}
          </div>

          {/* Right — numbers / highlights */}
          <div className={`flex flex-col justify-center ${isAr ? "lg:order-1" : ""}`}>
            {c.stats && c.stats.length > 0 ? (
              <div className="space-y-8">
                {c.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-6 ${isAr ? "flex-row-reverse text-right" : ""}`}
                  >
                    <div
                      className="text-5xl sm:text-6xl font-bold shrink-0 w-28"
                      style={{ color: "var(--theme-primary)" }}
                    >
                      {stat.value}
                    </div>
                    <div>
                      <div className="w-full h-px bg-gray-100 mb-3" />
                      <p className="text-gray-500 font-medium">
                        {isAr ? stat.labelAr : stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="aspect-square rounded-3xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, var(--theme-primary) 6%, white), color-mix(in srgb, var(--theme-secondary, var(--theme-primary)) 6%, white))`,
                }}
              >
                <p className="text-gray-400 text-sm">{isAr ? "صورة أو إحصائيات" : "Image or stats"}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
