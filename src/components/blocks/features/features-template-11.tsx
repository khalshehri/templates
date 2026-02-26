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

export function FeaturesTemplate11({ config, language }: BlockProps) {
  const c = config as FeaturesConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Bordered Sections */}
        <div className="space-y-6">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div
                key={i}
                className="py-6 px-8"
                style={{
                  borderLeft: isAr ? "none" : "4px solid var(--theme-primary)",
                  borderRight: isAr
                    ? "4px solid var(--theme-primary)"
                    : "none",
                }}
              >
                <div
                  className={`flex items-center gap-3 mb-3 ${
                    isAr ? "flex-row-reverse" : ""
                  }`}
                >
                  <Icon
                    size={22}
                    style={{ color: "var(--theme-primary)" }}
                  />
                  <h3
                    className={`text-lg font-semibold text-gray-900 ${
                      isAr ? "text-right" : "text-left"
                    }`}
                  >
                    {isAr ? item.titleAr : item.title}
                  </h3>
                </div>
                <p
                  className={`text-gray-500 leading-relaxed ${
                    isAr ? "text-right" : "text-left"
                  }`}
                >
                  {isAr ? item.descriptionAr : item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
