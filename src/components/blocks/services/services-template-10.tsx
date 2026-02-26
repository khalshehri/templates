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

export function ServicesTemplate10({ config, language }: BlockProps) {
  const c = config as ServicesConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Overlapping Cards */}
        <div className="relative">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Briefcase;
            return (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                  i > 0 ? "-mt-4" : ""
                }`}
                style={{
                  borderLeft: isAr ? "none" : "4px solid var(--theme-primary)",
                  borderRight: isAr ? "4px solid var(--theme-primary)" : "none",
                  zIndex: c.items.length - i,
                }}
              >
                <div
                  className={`flex items-start gap-5 ${
                    isAr ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                    }}
                  >
                    <Icon
                      size={22}
                      style={{ color: "var(--theme-primary)" }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {isAr ? item.titleAr : item.title}
                    </h3>
                    <p className="mt-2 text-gray-500 leading-relaxed">
                      {isAr ? item.descriptionAr : item.description}
                    </p>
                    {item.price && (
                      <p
                        className="mt-3 text-base font-semibold"
                        style={{ color: "var(--theme-primary)" }}
                      >
                        {isAr ? item.priceAr || item.price : item.price}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
