"use client";

import { Star } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { TestimonialsConfig } from "./types";

export function TestimonialsTemplate06({ config, language }: BlockProps) {
  const c = config as TestimonialsConfig;
  const isAr = language === "ar";

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
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

        {/* Rating Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Large Stars */}
              <div className={`flex gap-1.5 mb-3 ${isAr ? "justify-end" : ""}`}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={28}
                    style={{
                      color: si < item.rating ? "var(--theme-primary)" : "#e5e7eb",
                      fill: si < item.rating ? "var(--theme-primary)" : "none",
                    }}
                  />
                ))}
              </div>

              {/* Rating Number */}
              <p
                className={`text-4xl font-bold mb-4 ${isAr ? "text-right" : ""}`}
                style={{ color: "var(--theme-primary)" }}
              >
                {item.rating}.0
              </p>

              {/* Text */}
              <p className={`text-gray-600 leading-relaxed mb-6 ${isAr ? "text-right" : ""}`}>
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
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold shrink-0"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--theme-primary) 80%, black)",
                    }}
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
