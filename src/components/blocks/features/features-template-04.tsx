"use client";

import {
  Zap,
  Shield,
  Globe,
  Palette,
  Smartphone,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { FeaturesConfig } from "./types";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  shield: Shield,
  globe: Globe,
  palette: Palette,
  smartphone: Smartphone,
  headphones: Headphones,
};

export function FeaturesTemplate04({ config, language }: BlockProps) {
  const c = config as FeaturesConfig;
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

        {/* Zigzag Layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Connecting Line */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--theme-primary) 20%, transparent)",
            }}
          />

          <div className="space-y-12 lg:space-y-16">
            {c.items.map((item, i) => {
              const Icon = iconMap[item.icon] || Zap;
              const isOdd = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isOdd ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      isOdd
                        ? isAr
                          ? "lg:text-left"
                          : "lg:text-right"
                        : isAr
                          ? "lg:text-right"
                          : "lg:text-left"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      {isAr ? item.titleAr : item.title}
                    </h3>
                    <p className="mt-2 text-gray-500 leading-relaxed">
                      {isAr ? item.descriptionAr : item.description}
                    </p>
                  </div>

                  {/* Icon Circle (center on desktop) */}
                  <div
                    className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--theme-primary) 12%, transparent)",
                    }}
                  >
                    <Icon
                      size={24}
                      style={{ color: "var(--theme-primary)" }}
                    />
                  </div>

                  {/* Empty spacer for alignment */}
                  <div className="hidden lg:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
