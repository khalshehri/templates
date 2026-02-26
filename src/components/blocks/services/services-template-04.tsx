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

export function ServicesTemplate04({ config, language }: BlockProps) {
  const c = config as ServicesConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
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

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Briefcase;
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {isAr ? item.titleAr : item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-500 leading-relaxed">
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
