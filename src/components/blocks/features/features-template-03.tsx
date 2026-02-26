"use client";

/**
 * Features Template 03 — Numbered Steps with Accent Border
 * Clean modern cards with large step numbers and left accent border
 */

import {
  Zap, Shield, Globe, Palette, Smartphone, Headphones, type LucideIcon,
} from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { FeaturesConfig } from "./types";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap, shield: Shield, globe: Globe,
  palette: Palette, smartphone: Smartphone, headphones: Headphones,
};

export function FeaturesTemplate03({ config, language }: BlockProps) {
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

        {/* Two-column numbered cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div
                key={i}
                className={`group relative flex gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg hover:shadow-gray-100/80 border border-transparent hover:border-gray-100 transition-all duration-300 ${
                  isAr ? "flex-row-reverse text-right" : ""
                }`}
              >
                {/* Number */}
                <div className="shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: "var(--theme-primary)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className={`flex items-center gap-2 mb-2 ${isAr ? "flex-row-reverse" : ""}`}>
                    <h3 className="text-base font-semibold text-gray-900">
                      {isAr ? item.titleAr : item.title}
                    </h3>
                    <Icon
                      size={16}
                      className="text-gray-300 shrink-0"
                    />
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
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
