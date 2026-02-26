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

export function ServicesTemplate08({ config, language }: BlockProps) {
  const c = config as ServicesConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Gradient Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Briefcase;
            return (
              <div
                key={i}
                className="group relative p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--theme-primary) 5%, transparent), transparent)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--theme-primary) 15%, transparent)",
                  }}
                >
                  <Icon
                    size={24}
                    style={{ color: "var(--theme-primary)" }}
                  />
                </div>

                <h3
                  className={`text-xl font-semibold text-gray-900 ${
                    isAr ? "text-right" : "text-left"
                  }`}
                >
                  {isAr ? item.titleAr : item.title}
                </h3>
                <p
                  className={`mt-3 text-gray-500 leading-relaxed ${
                    isAr ? "text-right" : "text-left"
                  }`}
                >
                  {isAr ? item.descriptionAr : item.description}
                </p>

                {item.price && (
                  <p
                    className={`mt-4 text-lg font-semibold ${
                      isAr ? "text-right" : "text-left"
                    }`}
                    style={{ color: "var(--theme-primary)" }}
                  >
                    {isAr ? item.priceAr || item.price : item.price}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
