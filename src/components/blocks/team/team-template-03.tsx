"use client";

/**
 * Team Template 03 — Compact Card with Hover Reveal
 * Clean minimal cards that reveal bio on hover
 */

import type { BlockProps } from "@/types/blocks";
import type { TeamConfig } from "./types";

export function TeamTemplate03({ config, language }: BlockProps) {
  const c = config as TeamConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 ${isAr ? "sm:flex-row-reverse text-right" : ""}`}>
          <div className="max-w-lg">
            <div className="w-10 h-1 rounded-full mb-6" style={{ backgroundColor: "var(--theme-primary)" }} />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm shrink-0">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {c.items.map((member, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-[3/4] cursor-pointer"
            >
              {/* Photo / placeholder */}
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={isAr ? member.nameAr : member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--theme-primary) 15%, #f1f5f9), color-mix(in srgb, var(--theme-secondary, var(--theme-primary)) 10%, #f1f5f9))`,
                  }}
                >
                  <span className="text-6xl font-bold text-gray-300">
                    {(isAr ? member.nameAr : member.name).charAt(0)}
                  </span>
                </div>
              )}

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Always visible name bar at bottom */}
              <div className={`absolute bottom-0 left-0 right-0 p-5 ${isAr ? "text-right" : ""}`}>
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-white drop-shadow-md">
                    {isAr ? member.nameAr : member.name}
                  </h3>
                  <p className="text-sm text-white/70 drop-shadow-md" style={{ color: "var(--theme-primary)" }}>
                    {isAr ? member.roleAr : member.role}
                  </p>
                </div>
                {/* Bio — hidden until hover */}
                {member.bio && (
                  <p className="text-xs text-white/60 mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {isAr ? member.bioAr || member.bio : member.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
