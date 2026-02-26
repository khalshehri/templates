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

export function FeaturesTemplate02({ config, language }: BlockProps) {
  const c = config as FeaturesConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            style={{
              backgroundColor: "var(--theme-primary)",
              color: "#fff",
              opacity: 0.9,
            }}
          >
            {isAr ? "المميزات" : "Features"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Alternating Layout */}
        <div className="space-y-16">
          {c.items.slice(0, 3).map((item, i) => {
            const Icon = iconMap[item.icon] || Zap;
            const isReversed = i % 2 === 1;

            return (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 max-w-lg">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--theme-primary) 12%, transparent)",
                    }}
                  >
                    <Icon
                      size={22}
                      style={{ color: "var(--theme-primary)" }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {isAr ? item.titleAr : item.title}
                  </h3>
                  <p className="mt-3 text-gray-500 leading-relaxed">
                    {isAr ? item.descriptionAr : item.description}
                  </p>
                </div>

                {/* Visual Placeholder */}
                <div className="flex-1 w-full max-w-lg">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon
                        size={48}
                        className="text-gray-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom features grid (remaining items) */}
        {c.items.length > 3 && (
          <div className="mt-20 grid sm:grid-cols-3 gap-8">
            {c.items.slice(3).map((item, i) => {
              const Icon = iconMap[item.icon] || Zap;
              return (
                <div key={i} className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--theme-primary) 12%, transparent)",
                    }}
                  >
                    <Icon
                      size={22}
                      style={{ color: "var(--theme-primary)" }}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {isAr ? item.titleAr : item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {isAr ? item.descriptionAr : item.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
