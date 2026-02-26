"use client";

import { Target, Eye, Heart, type LucideIcon } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { AboutConfig } from "./types";

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  eye: Eye,
  heart: Heart,
};

export function AboutTemplate02({ config, language }: BlockProps) {
  const c = config as AboutConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.contentAr : c.content}
          </p>
        </div>

        {/* Mission / Vision / Values cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mission */}
          {c.mission && (
            <div className={`bg-white p-8 rounded-2xl border border-gray-100 ${isAr ? "text-right" : ""}`}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)" }}
              >
                <Target size={22} style={{ color: "var(--theme-primary)" }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {isAr ? "رسالتنا" : "Our Mission"}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {isAr ? c.missionAr || c.mission : c.mission}
              </p>
            </div>
          )}

          {/* Vision */}
          {c.vision && (
            <div className={`bg-white p-8 rounded-2xl border border-gray-100 ${isAr ? "text-right" : ""}`}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "color-mix(in srgb, var(--theme-secondary, var(--theme-primary)) 10%, transparent)" }}
              >
                <Eye size={22} style={{ color: "var(--theme-secondary, var(--theme-primary))" }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {isAr ? "رؤيتنا" : "Our Vision"}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {isAr ? c.visionAr || c.vision : c.vision}
              </p>
            </div>
          )}

          {/* Values */}
          {c.values && c.values.length > 0 ? (
            c.values.map((value, i) => {
              const Icon = value.icon ? iconMap[value.icon] || Heart : Heart;
              return (
                <div key={i} className={`bg-white p-8 rounded-2xl border border-gray-100 ${isAr ? "text-right" : ""}`}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "color-mix(in srgb, var(--theme-accent, #F59E0B) 10%, transparent)" }}
                  >
                    <Icon size={22} style={{ color: "var(--theme-accent, #F59E0B)" }} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {isAr ? value.titleAr : value.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {isAr ? value.descriptionAr : value.description}
                  </p>
                </div>
              );
            })
          ) : (
            /* Default values card if no mission/vision/values set */
            !c.mission && !c.vision && (
              <div className="md:col-span-2 lg:col-span-3 text-center py-12">
                <p className="text-gray-400">
                  {isAr
                    ? "أضف الرسالة والرؤية والقيم من لوحة التحكم"
                    : "Add mission, vision, and values from the dashboard"}
                </p>
              </div>
            )
          )}
        </div>

        {/* Stats row */}
        {c.stats && c.stats.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {c.stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl border border-gray-100">
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">
                  {isAr ? stat.labelAr : stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
