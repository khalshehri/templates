"use client";

import type { BlockProps } from "@/types/blocks";
import type { TeamConfig } from "./types";

export function TeamTemplate02({ config, language }: BlockProps) {
  const c = config as TeamConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
              color: "var(--theme-primary)",
            }}
          >
            {isAr ? "فريقنا" : "Our Team"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Horizontal scroll cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {c.items.map((member, i) => (
            <div
              key={i}
              className="flex-none w-72 snap-center bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Photo area */}
              <div className="h-56 relative">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={isAr ? member.nameAr : member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-white text-6xl font-bold"
                    style={{
                      background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))`,
                    }}
                  >
                    {(isAr ? member.nameAr : member.name).charAt(0)}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className={`p-6 ${isAr ? "text-right" : ""}`}>
                <h3 className="text-lg font-semibold text-gray-900">
                  {isAr ? member.nameAr : member.name}
                </h3>
                <p className="text-sm mt-0.5" style={{ color: "var(--theme-primary)" }}>
                  {isAr ? member.roleAr : member.role}
                </p>
                {member.bio && (
                  <p className="mt-3 text-sm text-gray-500 line-clamp-2">
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
