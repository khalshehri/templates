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

export function ServicesTemplate12({ config, language }: BlockProps) {
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

        {/* Masonry Grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Briefcase;
            const isTall = i % 3 === 0;

            return (
              <div
                key={i}
                className="break-inside-avoid p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`${isAr ? "text-right" : "text-left"}`}>
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
                  <p
                    className={`mt-3 text-gray-500 leading-relaxed ${
                      isTall ? "" : "line-clamp-3"
                    }`}
                  >
                    {isAr ? item.descriptionAr : item.description}
                  </p>
                  {isTall && (
                    <p className="mt-3 text-gray-500 leading-relaxed">
                      {isAr ? item.descriptionAr : item.description}
                    </p>
                  )}
                  {item.price && (
                    <p
                      className="mt-4 text-lg font-semibold"
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
