"use client";

import type { BlockProps } from "@/types/blocks";
import type { TeamConfig } from "./types";

export function TeamTemplate04({ config, language }: BlockProps) {
  const c = config as TeamConfig;
  const isAr = language === "ar";

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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {c.items.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Circular Photo */}
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={isAr ? member.nameAr : member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
              ) : (
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {(isAr ? member.nameAr : member.name).charAt(0)}
                </div>
              )}

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-900">
                {isAr ? member.nameAr : member.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-500 mt-1">
                {isAr ? member.roleAr : member.role}
              </p>

              {/* Bio */}
              {member.bio && (
                <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                  {isAr ? member.bioAr || member.bio : member.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
