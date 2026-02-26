"use client";

import { Star } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { TestimonialsConfig } from "./types";

export function TestimonialsTemplate04({ config, language }: BlockProps) {
  const c = config as TestimonialsConfig;
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

        {/* Social Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {c.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              {/* Author Row */}
              <div className={`flex items-center gap-3 mb-4 ${isAr ? "flex-row-reverse" : ""}`}>
                {/* Avatar */}
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    alt={isAr ? item.nameAr : item.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
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

              {/* Text */}
              <p className={`text-gray-600 leading-relaxed text-sm mb-4 ${isAr ? "text-right" : ""}`}>
                {isAr ? item.textAr : item.text}
              </p>

              {/* Stars */}
              <div className={`flex gap-1 ${isAr ? "justify-end" : ""}`}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className={si < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
