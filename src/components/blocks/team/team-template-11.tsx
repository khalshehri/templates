"use client";

import type { BlockProps } from "@/types/blocks";
import type { TeamConfig } from "./types";

const platformColors: Record<string, string> = {
  twitter: "#1DA1F2",
  linkedin: "#0A66C2",
  github: "#333333",
  instagram: "#E4405F",
  facebook: "#1877F2",
  youtube: "#FF0000",
  dribbble: "#EA4C89",
  behance: "#1769FF",
};

export function TeamTemplate11({ config, language }: BlockProps) {
  const c = config as TeamConfig;
  const isAr = language === "ar";

  return (
    <section
      className="py-20 sm:py-28"
      style={{
        backgroundColor: "color-mix(in srgb, var(--theme-primary) 3%, white)",
      }}
    >
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.items.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm"
            >
              {/* Photo */}
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={isAr ? member.nameAr : member.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
              ) : (
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {(isAr ? member.nameAr : member.name).charAt(0)}
                </div>
              )}

              {/* Name */}
              <h3 className="text-lg font-bold text-gray-900">
                {isAr ? member.nameAr : member.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-500 mt-1 mb-4">
                {isAr ? member.roleAr : member.role}
              </p>

              {/* Social Links as Pill Buttons */}
              {member.socials && member.socials.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  {member.socials.map((social, si) => (
                    social && (
                    <a
                      key={si}
                      href={social.url || "#"}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-medium transition-opacity hover:opacity-80 capitalize"
                      style={{
                        backgroundColor: platformColors[social.platform] || "var(--theme-primary)",
                      }}
                    >
                      {social.platform}
                    </a>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
