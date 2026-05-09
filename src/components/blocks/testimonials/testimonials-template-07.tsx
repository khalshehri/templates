"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { TestimonialsConfig } from "./types";

export function TestimonialsTemplate07({ config, language }: BlockProps) {
  const c = config as TestimonialsConfig;
  const isAr = language === "ar";
  const [index, setIndex] = useState(0);

  if (!c.items?.length) return null;
  const item = c.items[index];

  const prev = () => setIndex((i) => (i === 0 ? c.items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === c.items.length - 1 ? 0 : i + 1));

  return (
    <section
      className="py-20 sm:py-28"
      style={{
        backgroundColor: "color-mix(in srgb, var(--theme-primary) 5%, white)",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Arrow Buttons */}
          <button
            onClick={isAr ? next : prev}
            className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 sm:-ml-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={isAr ? prev : next}
            className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 sm:-mr-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mx-8 sm:mx-10 text-center">
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

            {/* Quote */}
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              &ldquo;{isAr ? item.textAr : item.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex flex-col items-center gap-3">
              {item.avatar ? (
                <img
                  src={item.avatar}
                  alt={isAr ? item.nameAr : item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {(isAr ? item.nameAr : item.name).charAt(0)}
                </div>
              )}
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  {isAr ? item.nameAr : item.name}
                </p>
                <p className="text-sm text-gray-500">
                  {isAr ? item.roleAr : item.role}
                </p>
              </div>
            </div>

            {/* Counter */}
            <p className="mt-6 text-sm text-gray-400">
              {index + 1} / {c.items.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
