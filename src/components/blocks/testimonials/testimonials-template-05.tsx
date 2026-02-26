"use client";

import { useState } from "react";
import { Star, Quote } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { TestimonialsConfig } from "./types";

export function TestimonialsTemplate05({ config, language }: BlockProps) {
  const c = config as TestimonialsConfig;
  const isAr = language === "ar";
  const [activeIndex, setActiveIndex] = useState(0);

  if (c.items.length === 0) return null;
  const item = c.items[activeIndex];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Large Quote */}
        <div className="text-center">
          <Quote
            size={48}
            className="mx-auto mb-6 opacity-20"
            style={{ color: "var(--theme-primary)" }}
          />

          <p className="text-2xl sm:text-3xl font-medium text-gray-800 leading-relaxed mb-8">
            &ldquo;{isAr ? item.textAr : item.text}&rdquo;
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, si) => (
              <Star
                key={si}
                size={20}
                className={si < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}
              />
            ))}
          </div>

          {/* Author */}
          <div className="flex flex-col items-center gap-2">
            {item.avatar ? (
              <img
                src={item.avatar}
                alt={isAr ? item.nameAr : item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
            ) : (
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {(isAr ? item.nameAr : item.name).charAt(0)}
              </div>
            )}
            <div className="text-center">
              <p className="font-semibold text-gray-900">
                {isAr ? item.nameAr : item.name}
              </p>
              <p className="text-sm text-gray-500">
                {isAr ? item.roleAr : item.role}
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {c.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    i === activeIndex
                      ? "var(--theme-primary)"
                      : "#d1d5db",
                  transform: i === activeIndex ? "scale(1.3)" : "scale(1)",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
