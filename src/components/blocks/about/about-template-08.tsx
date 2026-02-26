"use client";

/**
 * About Template 08 — Cards Grid
 * Mission, vision, and values displayed as cards with accent top border
 */

import { Target, Eye, Heart, type LucideIcon } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { AboutConfig } from "./types";

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  eye: Eye,
  heart: Heart,
};

export function AboutTemplate08({ config, language }: BlockProps) {
  const c = config as AboutConfig;
  const isAr = language === "ar";

  const hasMissionVision = c.mission || c.vision;

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`text-center max-w-3xl mx-auto mb-16`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          {(c.subheading || c.subheadingAr) && (
            <p className="mt-4 text-lg text-gray-500">
              {isAr ? c.subheadingAr : c.subheading}
            </p>
          )}
        </div>

        {hasMissionVision ? (
          <>
            {/* Mission & Vision cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {c.mission && (
                <div
                  className={`bg-white rounded-2xl p-8 border-t-4 ${isAr ? "text-right" : ""}`}
                  style={{ borderTopColor: "var(--theme-primary)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)" }}
                  >
                    <Target size={20} style={{ color: "var(--theme-primary)" }} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {isAr ? "رسالتنا" : "Our Mission"}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {isAr ? c.missionAr || c.mission : c.mission}
                  </p>
                </div>
              )}
              {c.vision && (
                <div
                  className={`bg-white rounded-2xl p-8 border-t-4 ${isAr ? "text-right" : ""}`}
                  style={{ borderTopColor: "var(--theme-secondary, var(--theme-primary))" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "color-mix(in srgb, var(--theme-secondary, var(--theme-primary)) 10%, transparent)" }}
                  >
                    <Eye size={20} style={{ color: "var(--theme-secondary, var(--theme-primary))" }} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {isAr ? "رؤيتنا" : "Our Vision"}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {isAr ? c.visionAr || c.vision : c.vision}
                  </p>
                </div>
              )}
            </div>

            {/* Values cards */}
            {c.values && c.values.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {c.values.map((value, i) => {
                  const Icon = value.icon ? iconMap[value.icon] || Heart : Heart;
                  return (
                    <div
                      key={i}
                      className={`bg-white rounded-2xl p-8 border-t-4 ${isAr ? "text-right" : ""}`}
                      style={{ borderTopColor: "var(--theme-primary)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)" }}
                      >
                        <Icon size={20} style={{ color: "var(--theme-primary)" }} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {isAr ? value.titleAr : value.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {isAr ? value.descriptionAr : value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <>
            {/* Fallback: content and stats */}
            <div className={`max-w-3xl mx-auto text-center mb-16`}>
              <p className="text-gray-600 leading-relaxed text-lg">
                {isAr ? c.contentAr : c.content}
              </p>
            </div>

            {c.stats && c.stats.length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {c.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-8 text-center border-t-4"
                    style={{ borderTopColor: "var(--theme-primary)" }}
                  >
                    <div
                      className="text-3xl font-bold mb-2"
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
          </>
        )}
      </div>
    </div>
  );
}
