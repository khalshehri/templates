"use client";

import {
  Users,
  Briefcase,
  Award,
  Clock,
  TrendingUp,
  Globe,
  type LucideIcon,
} from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { StatsConfig } from "./types";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  briefcase: Briefcase,
  award: Award,
  clock: Clock,
  "trending-up": TrendingUp,
  globe: Globe,
};

export function StatsTemplate02({ config, language }: BlockProps) {
  const c = config as StatsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Optional heading */}
        {(c.heading || c.headingAr) && (
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>
            {(c.subheading || c.subheadingAr) && (
              <p className="mt-4 text-lg text-gray-500">
                {isAr ? c.subheadingAr : c.subheading}
              </p>
            )}
          </div>
        )}

        {/* Stats cards */}
        <div className={`grid grid-cols-2 lg:grid-cols-${Math.min(c.items.length, 4)} gap-6`}>
          {c.items.map((item, i) => {
            const Icon = item.icon ? iconMap[item.icon] || TrendingUp : null;
            return (
              <div
                key={i}
                className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
              >
                {Icon && (
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                    }}
                  >
                    <Icon size={22} style={{ color: "var(--theme-primary)" }} />
                  </div>
                )}
                <div
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {item.value}{item.suffix || ""}
                </div>
                <div className="text-gray-500 font-medium">
                  {isAr ? item.labelAr : item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
