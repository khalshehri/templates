"use client";

import {
  Zap,
  Shield,
  Globe,
  Palette,
  Smartphone,
  Headphones,
  Check,
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

export function FeaturesTemplate05({ config, language }: BlockProps) {
  const c = config as FeaturesConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-2xl mb-16 ${isAr ? "text-right" : "text-left"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Checklist */}
        <div className="space-y-8">
          {c.items.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-5 ${
                isAr ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                <Check size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {isAr ? item.titleAr : item.title}
                </h3>
                <p className="mt-1.5 text-gray-500 leading-relaxed">
                  {isAr ? item.descriptionAr : item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
