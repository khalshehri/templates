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

export function FeaturesTemplate08({ config, language }: BlockProps) {
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

        {/* Minimal List */}
        <div className="divide-y divide-gray-200">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div
                key={i}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 py-6 ${
                  isAr ? "sm:flex-row-reverse text-right" : ""
                }`}
              >
                {/* Icon */}
                <div className="shrink-0">
                  <Icon
                    size={22}
                    style={{ color: "var(--theme-primary)" }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 sm:w-48 shrink-0">
                  {isAr ? item.titleAr : item.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-sm text-gray-500 leading-relaxed">
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
