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

export function ServicesTemplate06({ config, language }: BlockProps) {
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

        {/* Alternating Rows */}
        <div className="divide-y divide-gray-200">
          {c.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Briefcase;
            const isEven = i % 2 === 1;

            return (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-12 lg:py-16 ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div
                  className={`flex-1 ${
                    isAr ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`flex items-center gap-4 mb-4 ${
                      isAr ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
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
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      {isAr ? item.titleAr : item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed max-w-lg">
                    {isAr ? item.descriptionAr : item.description}
                  </p>
                  {item.price && (
                    <p
                      className="mt-4 text-lg font-semibold"
                      style={{ color: "var(--theme-primary)" }}
                    >
                      {isAr ? item.priceAr || item.price : item.price}
                    </p>
                  )}
                </div>

                {/* Image / Placeholder Side */}
                <div className="flex-1 w-full max-w-md">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={isAr ? item.titleAr : item.title}
                      className="w-full rounded-2xl object-cover aspect-[4/3]"
                    />
                  ) : (
                    <div
                      className="w-full aspect-[4/3] rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--theme-primary) 5%, transparent)",
                      }}
                    >
                      <Icon size={48} className="text-gray-300" />
                    </div>
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
