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

export function FeaturesTemplate07({ config, language }: BlockProps) {
  const c = config as FeaturesConfig;
  const isAr = language === "ar";

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

        {/* Floating Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                style={{
                  transform: "perspective(1000px) rotateY(2deg) rotateX(1deg)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "perspective(1000px) rotateY(0deg) rotateX(0deg)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "perspective(1000px) rotateY(2deg) rotateX(1deg)";
                }}
              >
                <div className={`${isAr ? "text-right" : "text-left"}`}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--theme-primary) 12%, transparent)",
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
