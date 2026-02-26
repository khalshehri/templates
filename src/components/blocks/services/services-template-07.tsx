"use client";

import {
  Code,
  Smartphone,
  Palette,
  BarChart3,
  Shield,
  Cloud,
  Briefcase,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { ServicesConfig } from "./types";

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  smartphone: Smartphone,
  palette: Palette,
  "bar-chart": BarChart3,
  shield: Shield,
  cloud: Cloud,
  briefcase: Briefcase,
  rocket: Rocket,
};

export function ServicesTemplate07({ config, language }: BlockProps) {
  const c = config as ServicesConfig;
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

        {/* Minimal Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Briefcase;
            return (
              <div
                key={i}
                className="group p-8 lg:p-10 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300"
                style={{
                  borderColor: undefined,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--theme-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#e5e7eb";
                }}
              >
                <div className={`${isAr ? "text-right" : "text-left"}`}>
                  <Icon
                    size={20}
                    className="mb-6"
                    style={{ color: "var(--theme-primary)" }}
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {isAr ? item.titleAr : item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {isAr ? item.descriptionAr : item.description}
                  </p>
                  {item.price && (
                    <p
                      className="mt-4 text-base font-semibold"
                      style={{ color: "var(--theme-primary)" }}
                    >
                      {isAr ? item.priceAr || item.price : item.price}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
