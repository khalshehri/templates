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

export function FeaturesTemplate01({ config, language }: BlockProps) {
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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div
                key={i}
                className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: "var(--theme-primary)",
                    opacity: 0.1,
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: "var(--theme-primary)" }}
                    className="relative"
                  />
                </div>
                {/* Separate overlay for icon background */}
                <div
                  className="absolute top-8 left-8 w-12 h-12 rounded-xl flex items-center justify-center"
                >
                  <Icon
                    size={22}
                    style={{ color: "var(--theme-primary)" }}
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mt-0">
                  {isAr ? item.titleAr : item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
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
