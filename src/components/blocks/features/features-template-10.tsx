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

export function FeaturesTemplate10({ config, language }: BlockProps) {
  const c = config as FeaturesConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-2xl mb-12 ${isAr ? "text-right" : "text-left"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div className="relative">
          {/* Gradient Fades */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:overflow-x-auto sm:snap-x sm:snap-mandatory gap-4 sm:gap-0 sm:space-x-5 pb-4 sm:px-2">
            {c.items.map((item, i) => {
              const Icon = iconMap[item.icon] || Zap;
              return (
                <div
                  key={i}
                  className="w-full sm:w-72 sm:min-w-[18rem] sm:snap-start shrink-0 rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Top Accent Bar */}
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: "var(--theme-primary)" }}
                  />
                  <div className={`p-6 ${isAr ? "text-right" : "text-left"}`}>
                    <Icon
                      size={24}
                      className="mb-4"
                      style={{ color: "var(--theme-primary)" }}
                    />
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
    </div>
  );
}
