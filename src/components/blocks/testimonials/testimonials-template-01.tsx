"use client";

import { Star, Quote } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { TestimonialsConfig } from "./types";

export function TestimonialsTemplate01({ config, language }: BlockProps) {
  const c = config as TestimonialsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
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
        <div className="grid md:grid-cols-2 gap-8">
          {c.items.map((item, i) => (
            <div
              key={i}
              className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote
                size={32}
                className="absolute top-6 right-6 opacity-10"
                style={{ color: "var(--theme-primary)" }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={16}
                    className={si < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-6">
                &ldquo;{isAr ? item.textAr : item.text}&rdquo;
              </p>

              {/* Author */}
              <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg shrink-0"
                  style={{
                    backgroundColor: "var(--theme-primary)",
                  }}
                >
                  {(isAr ? item.nameAr : item.name).charAt(0)}
                </div>
                <div className={isAr ? "text-right" : ""}>
                  <p className="font-semibold text-gray-900">
                    {isAr ? item.nameAr : item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {isAr ? item.roleAr : item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
