"use client";

import { Star, Quote } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { TestimonialsConfig } from "./types";

export function TestimonialsTemplate11({ config, language }: BlockProps) {
  const c = config as TestimonialsConfig;
  const isAr = language === "ar";

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 ${isAr ? "lg:flex-row-reverse" : ""}`}>
          {/* Left Column - Heading (Sticky) */}
          <div className="lg:w-2/5 lg:sticky lg:top-24 lg:self-start">
            <Quote
              size={40}
              className="mb-4 opacity-20"
              style={{ color: "var(--theme-primary)" }}
            />
            <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight ${isAr ? "text-right" : ""}`}>
              {isAr ? c.headingAr : c.heading}
            </h2>
            <p className={`mt-4 text-lg text-gray-500 leading-relaxed ${isAr ? "text-right" : ""}`}>
              {isAr ? c.subheadingAr : c.subheading}
            </p>
            <div
              className="mt-6 w-16 h-1 rounded-full"
              style={{ backgroundColor: "var(--theme-primary)" }}
            />
          </div>

          {/* Right Column - Testimonials Stack */}
          <div className="lg:w-3/5 space-y-6">
            {c.items.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100"
              >
                {/* Quote */}
                <p className={`text-gray-700 leading-relaxed mb-5 ${isAr ? "text-right" : ""}`}>
                  &ldquo;{isAr ? item.textAr : item.text}&rdquo;
                </p>

                {/* Bottom row: author + stars */}
                <div className={`flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
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

                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        size={14}
                        className={si < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
