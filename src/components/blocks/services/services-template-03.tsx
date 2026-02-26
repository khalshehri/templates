"use client";

/**
 * Services Template 03 — Bento Grid
 * Modern asymmetric bento-box grid with varying card sizes
 */

import {
  Code, Smartphone, Palette, BarChart3, Shield, Cloud, Briefcase, Rocket,
  type LucideIcon,
} from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { ServicesConfig } from "./types";

const iconMap: Record<string, LucideIcon> = {
  code: Code, smartphone: Smartphone, palette: Palette,
  "bar-chart": BarChart3, shield: Shield, cloud: Cloud,
  briefcase: Briefcase, rocket: Rocket,
};

export function ServicesTemplate03({ config, language }: BlockProps) {
  const c = config as ServicesConfig;
  const isAr = language === "ar";

  // Bento layout: first item is large, rest are small
  const featured = c.items[0];
  const rest = c.items.slice(1);

  return (
    <div className="bg-gray-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-2xl mb-14 ${isAr ? "text-right ml-auto" : ""}`}>
          <div
            className="w-10 h-1 rounded-full mb-6"
            style={{ backgroundColor: "var(--theme-primary)" }}
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-white/50 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large featured card */}
          {featured && (() => {
            const Icon = iconMap[featured.icon] || Briefcase;
            return (
              <div
                className={`md:col-span-2 lg:col-span-2 lg:row-span-2 relative p-10 rounded-3xl overflow-hidden group ${
                  isAr ? "text-right" : ""
                }`}
                style={{
                  background: `linear-gradient(135deg, var(--theme-primary), color-mix(in srgb, var(--theme-primary) 70%, #000))`,
                }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {isAr ? featured.titleAr : featured.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed max-w-md">
                    {isAr ? featured.descriptionAr : featured.description}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* Smaller cards */}
          {rest.map((item, i) => {
            const Icon = iconMap[item.icon] || Briefcase;
            return (
              <div
                key={i}
                className={`p-7 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group ${
                  isAr ? "text-right" : ""
                }`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 15%, transparent)" }}
                >
                  <Icon size={20} style={{ color: "var(--theme-primary)" }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {isAr ? item.titleAr : item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
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
