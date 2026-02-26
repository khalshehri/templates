"use client";

import {
  Code,
  Smartphone,
  Palette,
  BarChart3,
  Shield,
  Cloud,
  Briefcase,
  Rocket,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { ServicesConfig } from "./types";

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  smartphone: Smartphone,
  palette: Palette,
  "bar-chart": BarChart3,
  shield: Shield,
  cloud: Cloud,
  briefcase: Briefcase,
  rocket: Rocket,
};

export function ServicesTemplate02({ config, language }: BlockProps) {
  const c = config as ServicesConfig;
  const isAr = language === "ar";

  return (
    <div className="py-20 sm:py-28" style={{ backgroundColor: "var(--theme-background, #fff)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-2xl mb-16 ${isAr ? "text-right" : "text-left"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Stacked cards */}
        <div className="space-y-4">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Briefcase;
            return (
              <div
                key={i}
                className={`group flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-300 ${
                  isAr ? "sm:flex-row-reverse text-right" : ""
                }`}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                  }}
                >
                  <Icon size={28} style={{ color: "var(--theme-primary)" }} />
                </div>

                <div className="flex-1">
                  <div className={`flex items-start justify-between gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {isAr ? item.titleAr : item.title}
                      </h3>
                      <p className="mt-2 text-gray-500 leading-relaxed max-w-2xl">
                        {isAr ? item.descriptionAr : item.description}
                      </p>
                    </div>
                    {item.price && (
                      <span
                        className="text-lg font-bold shrink-0"
                        style={{ color: "var(--theme-primary)" }}
                      >
                        {isAr ? item.priceAr || item.price : item.price}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`hidden sm:flex items-center self-center opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    isAr ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"
                  }`}
                >
                  <ArrowRight
                    size={20}
                    style={{ color: "var(--theme-primary)" }}
                    className={isAr ? "rotate-180" : ""}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
