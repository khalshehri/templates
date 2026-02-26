"use client";

import { useState } from "react";
import type { BlockProps } from "@/types/blocks";
import type { TeamConfig } from "./types";

export function TeamTemplate12({ config, language }: BlockProps) {
  const c = config as TeamConfig;
  const isAr = language === "ar";
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 sm:py-28">
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

        {/* Compact Grid - 4 cols desktop, 2 cols mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {c.items.map((member, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <div
                key={i}
                className="relative bg-gray-50 rounded-xl p-4 text-center border border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-md"
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
              >
                {/* Photo */}
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={isAr ? member.nameAr : member.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
                  />
                ) : (
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3"
                    style={{ backgroundColor: "var(--theme-primary)" }}
                  >
                    {(isAr ? member.nameAr : member.name).charAt(0)}
                  </div>
                )}

                {/* Name */}
                <h3 className="text-sm font-semibold text-gray-900 truncate">
                  {isAr ? member.nameAr : member.name}
                </h3>

                {/* Role */}
                <p className="text-xs text-gray-500 mt-0.5 truncate">
                  {isAr ? member.roleAr : member.role}
                </p>

                {/* Expanded Bio */}
                {isExpanded && member.bio && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {isAr ? member.bioAr || member.bio : member.bio}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
