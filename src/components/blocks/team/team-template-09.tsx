"use client";

import type { BlockProps } from "@/types/blocks";
import type { TeamConfig } from "./types";

export function TeamTemplate09({ config, language }: BlockProps) {
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

        {/* Magazine Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((member, i) => {
            const isFirst = i === 0;

            return (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden group ${
                  isFirst ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                {/* Photo */}
                <div className={`${isFirst ? "aspect-[4/3] sm:aspect-auto sm:h-full" : "aspect-[4/3]"}`}>
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={isAr ? member.nameAr : member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-white font-bold"
                      style={{
                        background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))`,
                        fontSize: isFirst ? "6rem" : "3rem",
                      }}
                    >
                      {(isAr ? member.nameAr : member.name).charAt(0)}
                    </div>
                  )}
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 pt-20">
                  <h3 className={`text-white font-bold ${isFirst ? "text-2xl" : "text-lg"}`}>
                    {isAr ? member.nameAr : member.name}
                  </h3>
                  <p
                    className={`mt-1 ${isFirst ? "text-base" : "text-sm"}`}
                    style={{ color: "color-mix(in srgb, var(--theme-primary) 80%, white)" }}
                  >
                    {isAr ? member.roleAr : member.role}
                  </p>
                  {isFirst && member.bio && (
                    <p className="mt-2 text-white/80 text-sm line-clamp-2">
                      {isAr ? member.bioAr || member.bio : member.bio}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
