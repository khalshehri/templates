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

export function ServicesTemplate09({ config, language }: BlockProps) {
  const c = config as ServicesConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-2xl mb-12 ${isAr ? "text-right" : "text-left"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Horizontal Scroll on lg+, stacked on mobile */}
        <div className="relative">
          {/* Gradient Fades */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex flex-col sm:flex-row lg:overflow-x-auto lg:snap-x lg:snap-mandatory gap-6 lg:gap-0 lg:space-x-6 pb-4 lg:px-4">
            {c.items.map((item, i) => {
              const Icon = iconMap[item.icon] || Briefcase;
              return (
                <div
                  key={i}
                  className="w-full sm:w-auto lg:w-72 lg:min-w-[18rem] lg:snap-start shrink-0 p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    {isAr ? item.titleAr : item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {isAr ? item.descriptionAr : item.description}
                  </p>
                  {item.price && (
                    <p
                      className="mt-4 text-base font-semibold"
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
    </div>
  );
}
