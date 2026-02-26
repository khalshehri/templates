"use client";

/**
 * About Template 05 — Full Image Background
 * Large background image with dark overlay and centered white text
 */

import { Users } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { AboutConfig } from "./types";

export function AboutTemplate05({ config, language }: BlockProps) {
  const c = config as AboutConfig;
  const isAr = language === "ar";

  return (
    <div className="relative min-h-[600px] sm:min-h-[700px] flex items-center overflow-hidden">
      {/* Background image or fallback */}
      {c.image ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${c.image})` }}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, color-mix(in srgb, var(--theme-primary) 90%, #000), color-mix(in srgb, var(--theme-secondary, var(--theme-primary)) 70%, #000))`,
          }}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-20">
        {/* Centered text content */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          {(c.subheading || c.subheadingAr) && (
            <p className="mt-4 text-lg text-white/70">
              {isAr ? c.subheadingAr : c.subheading}
            </p>
          )}
          <p className="mt-8 text-white/80 text-lg leading-relaxed">
            {isAr ? c.contentAr : c.content}
          </p>

          {c.mission && (
            <p className="mt-6 text-white/60 italic">
              &ldquo;{isAr ? c.missionAr || c.mission : c.mission}&rdquo;
            </p>
          )}
        </div>

        {/* Stats in glass cards at bottom */}
        {c.stats && c.stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
            {c.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm font-medium">
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
