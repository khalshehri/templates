"use client";

import { Star } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { TestimonialsConfig } from "./types";

export function TestimonialsTemplate08({ config, language }: BlockProps) {
  const c = config as TestimonialsConfig;
  const isAr = language === "ar";

  const colors = [
    "color-mix(in srgb, var(--theme-primary) 8%, white)",
    "color-mix(in srgb, var(--theme-secondary, var(--theme-primary)) 8%, white)",
    "color-mix(in srgb, var(--theme-accent, var(--theme-primary)) 8%, white)",
    "color-mix(in srgb, var(--theme-primary) 12%, white)",
  ];

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

        {/* Masonry Grid using CSS columns */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6"
          style={{ columnFill: "balance" }}
        >
          {c.items.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-6 rounded-xl p-6 border border-gray-100"
              style={{ backgroundColor: colors[i % colors.length] }}
            >
              {/* Stars */}
              <div className={`flex gap-1 mb-3 ${isAr ? "justify-end" : ""}`}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className={si < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>

              {/* Text */}
              <p className={`text-gray-700 leading-relaxed mb-4 ${isAr ? "text-right" : ""}`}>
                &ldquo;{isAr ? item.textAr : item.text}&rdquo;
              </p>

              {/* Author */}
              <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    alt={isAr ? item.nameAr : item.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0"
                    style={{ backgroundColor: "var(--theme-primary)" }}
                  >
                    {(isAr ? item.nameAr : item.name).charAt(0)}
                  </div>
                )}
                <div className={isAr ? "text-right" : ""}>
                  <p className="font-semibold text-gray-900 text-sm">
                    {isAr ? item.nameAr : item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {isAr ? item.roleAr : item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
