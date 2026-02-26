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

export function ServicesTemplate01({ config, language }: BlockProps) {
  const c = config as ServicesConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
              color: "var(--theme-primary)",
            }}
          >
            {isAr ? "ماذا نقدم" : "What We Offer"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Briefcase;
            return (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--theme-primary) 12%, transparent)",
                  }}
                >
                  <Icon
                    size={24}
                    style={{ color: "var(--theme-primary)" }}
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {isAr ? item.titleAr : item.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">
                  {isAr ? item.descriptionAr : item.description}
                </p>

                {item.price && (
                  <p className="mt-4 text-lg font-semibold" style={{ color: "var(--theme-primary)" }}>
                    {isAr ? item.priceAr || item.price : item.price}
                  </p>
                )}

                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
