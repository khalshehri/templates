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

export function ServicesTemplate05({ config, language }: BlockProps) {
  const c = config as ServicesConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
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

        {/* Numbered List */}
        <div className="space-y-12 lg:space-y-16">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Briefcase;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={i}
                className={`flex flex-col sm:flex-row items-start gap-6 ${
                  isAr ? "sm:flex-row-reverse text-right" : ""
                }`}
              >
                <span
                  className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-none shrink-0 select-none"
                  style={{
                    color: "var(--theme-primary)",
                    opacity: 0.15,
                  }}
                >
                  {num}
                </span>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon
                      size={20}
                      style={{ color: "var(--theme-primary)" }}
                    />
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      {isAr ? item.titleAr : item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed max-w-2xl">
                    {isAr ? item.descriptionAr : item.description}
                  </p>
                  {item.price && (
                    <p
                      className="mt-3 text-lg font-semibold"
                      style={{ color: "var(--theme-primary)" }}
                    >
                      {isAr ? item.priceAr || item.price : item.price}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
