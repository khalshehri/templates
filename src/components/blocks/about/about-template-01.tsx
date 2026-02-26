"use client";

import { Award, Users, Target, type LucideIcon } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { AboutConfig } from "./types";

export function AboutTemplate01({ config, language }: BlockProps) {
  const c = config as AboutConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isAr ? "" : ""}`}>
          {/* Image side */}
          <div className={`${isAr ? "lg:order-2" : ""}`}>
            {c.image ? (
              <img
                src={c.image}
                alt={isAr ? c.headingAr : c.heading}
                className="rounded-3xl shadow-xl w-full"
              />
            ) : (
              <div className="relative">
                <div
                  className="rounded-3xl aspect-[4/3] flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--theme-primary) 8%, white), color-mix(in srgb, var(--theme-secondary, var(--theme-primary)) 8%, white))`,
                  }}
                >
                  <div className="text-center opacity-40">
                    <Users size={64} style={{ color: "var(--theme-primary)" }} className="mx-auto mb-3" />
                    <p className="text-sm font-medium text-gray-400">{isAr ? "صورة الفريق" : "Team Photo"}</p>
                  </div>
                </div>
                {/* Decorative element */}
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                  style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 20%, transparent)" }}
                />
              </div>
            )}
          </div>

          {/* Text side */}
          <div className={`${isAr ? "lg:order-1 text-right" : ""}`}>
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{
                backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                color: "var(--theme-primary)",
              }}
            >
              {isAr ? "تعرّف علينا" : "About Us"}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>

            <p className="mt-6 text-gray-500 leading-relaxed text-lg">
              {isAr ? c.contentAr : c.content}
            </p>

            {/* Stats */}
            {c.stats && c.stats.length > 0 && (
              <div className={`grid grid-cols-3 gap-6 mt-10 ${isAr ? "" : ""}`}>
                {c.stats.map((stat, i) => (
                  <div key={i} className={isAr ? "text-right" : ""}>
                    <div
                      className="text-3xl font-bold"
                      style={{ color: "var(--theme-primary)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {isAr ? stat.labelAr : stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
