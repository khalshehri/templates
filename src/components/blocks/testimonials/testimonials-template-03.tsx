"use client";

/**
 * Testimonials Template 03 — Large Single Rotating Quote
 * One big centered testimonial with subtle navigation dots
 */

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { TestimonialsConfig } from "./types";

export function TestimonialsTemplate03({ config, language }: BlockProps) {
  const c = config as TestimonialsConfig;
  const isAr = language === "ar";
  const [current, setCurrent] = useState(0);

  const item = c.items[current];
  if (!item) return null;

  const prev = () => setCurrent((current - 1 + c.items.length) % c.items.length);
  const next = () => setCurrent((current + 1) % c.items.length);

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
        </div>

        {/* Single large testimonial */}
        <div className="text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: 5 }).map((_, si) => (
              <Star
                key={si}
                size={20}
                className={si < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 leading-relaxed max-w-3xl mx-auto">
            &ldquo;{isAr ? item.textAr : item.text}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold"
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              {(isAr ? item.nameAr : item.name).charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{isAr ? item.nameAr : item.name}</p>
              <p className="text-sm text-gray-500">{isAr ? item.roleAr : item.role}</p>
            </div>
          </div>

          {/* Navigation */}
          {c.items.length > 1 && (
            <div className="mt-12 flex items-center justify-center gap-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {c.items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-8" : "w-2 bg-gray-200 hover:bg-gray-300"
                    }`}
                    style={i === current ? { backgroundColor: "var(--theme-primary)" } : {}}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
