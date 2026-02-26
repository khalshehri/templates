"use client";

/**
 * About Template 11 — Side Image
 * Image on the right (40%), text content on the left (60%), stats as badges
 */

import { Users } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { AboutConfig } from "./types";

export function AboutTemplate11({ config, language }: BlockProps) {
  const c = config as AboutConfig;
  const isAr = language === "ar";

  const hasImage = !!c.image;

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid ${hasImage ? "lg:grid-cols-5" : "lg:grid-cols-1"} gap-12 lg:gap-16 items-center`}
        >
          {/* Text side — 60% (3/5) */}
          <div
            className={`${hasImage ? "lg:col-span-3" : "max-w-3xl mx-auto"} ${
              isAr ? "text-right" : ""
            } ${isAr && hasImage ? "lg:order-2" : ""}`}
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{
                backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                color: "var(--theme-primary)",
              }}
            >
              {isAr ? "من نحن" : "About Us"}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              {isAr ? c.headingAr : c.heading}
            </h2>

            {(c.subheading || c.subheadingAr) && (
              <p className="mt-3 text-lg text-gray-400">
                {isAr ? c.subheadingAr : c.subheading}
              </p>
            )}

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              {isAr ? c.contentAr : c.content}
            </p>

            {c.mission && (
              <div className="mt-8">
                <h3
                  className="text-sm font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {isAr ? "رسالتنا" : "Mission"}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {isAr ? c.missionAr || c.mission : c.mission}
                </p>
              </div>
            )}

            {/* Stats as badges */}
            {c.stats && c.stats.length > 0 && (
              <div className={`flex flex-wrap gap-3 mt-10 ${isAr ? "justify-end" : ""}`}>
                {c.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl ${
                      isAr ? "flex-row-reverse" : ""
                    }`}
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--theme-primary) 8%, transparent)",
                    }}
                  >
                    <span
                      className="text-lg font-bold"
                      style={{ color: "var(--theme-primary)" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-sm text-gray-500">
                      {isAr ? stat.labelAr : stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image side — 40% (2/5) */}
          {hasImage && (
            <div
              className={`lg:col-span-2 ${isAr ? "lg:order-1" : ""}`}
            >
              <img
                src={c.image}
                alt={isAr ? c.headingAr : c.heading}
                className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
