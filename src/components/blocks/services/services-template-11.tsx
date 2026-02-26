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

export function ServicesTemplate11({ config, language }: BlockProps) {
  const c = config as ServicesConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Sticky Header */}
          <div
            className={`lg:w-2/5 lg:sticky lg:top-24 lg:self-start ${
              isAr ? "text-right" : "text-left"
            }`}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                color: "var(--theme-primary)",
              }}
            >
              {isAr ? "خدماتنا" : "Our Services"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              {isAr ? c.subheadingAr : c.subheading}
            </p>
          </div>

          {/* Right: Scrollable Service List */}
          <div className="lg:w-3/5 space-y-4">
            {c.items.map((item, i) => {
              const Icon = iconMap[item.icon] || Briefcase;
              return (
                <div
                  key={i}
                  className="group p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className={`flex items-start gap-4 ${
                      isAr ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: "var(--theme-primary)" }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {isAr ? item.titleAr : item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                        {isAr ? item.descriptionAr : item.description}
                      </p>
                      {item.price && (
                        <p
                          className="mt-2 text-base font-semibold"
                          style={{ color: "var(--theme-primary)" }}
                        >
                          {isAr ? item.priceAr || item.price : item.price}
                        </p>
                      )}
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
