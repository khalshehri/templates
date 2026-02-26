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

export function FeaturesTemplate09({ config, language }: BlockProps) {
  const c = config as FeaturesConfig;
  const isAr = language === "ar";

  const midpoint = Math.ceil(c.items.length / 2);
  const leftItems = c.items.slice(0, midpoint);
  const rightItems = c.items.slice(midpoint);

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
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

        {/* Two-Column Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {leftItems.map((item, i) => {
              const Icon = iconMap[item.icon] || Zap;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
                >
                  <div
                    className={`flex items-start gap-4 w-full ${
                      isAr ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                      }}
                    >
                      <Icon
                        size={18}
                        style={{ color: "var(--theme-primary)" }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900">
                        {isAr ? item.titleAr : item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                        {isAr ? item.descriptionAr : item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightItems.map((item, i) => {
              const Icon = iconMap[item.icon] || Zap;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
                >
                  <div
                    className={`flex items-start gap-4 w-full ${
                      isAr ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                      }}
                    >
                      <Icon
                        size={18}
                        style={{ color: "var(--theme-primary)" }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900">
                        {isAr ? item.titleAr : item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                        {isAr ? item.descriptionAr : item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
