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

export function FeaturesTemplate12({ config, language }: BlockProps) {
  const c = config as FeaturesConfig;
  const isAr = language === "ar";

  return (
    <div
      className="py-20 sm:py-28"
      style={{ backgroundColor: "var(--theme-foreground, #111827)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Dark Contrast Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <div className={`${isAr ? "text-right" : "text-left"}`}>
                  <Icon
                    size={28}
                    className="mb-5"
                    style={{ color: "var(--theme-primary)" }}
                  />
                  <h3 className="text-lg font-semibold text-white">
                    {isAr ? item.titleAr : item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {isAr ? item.descriptionAr : item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
