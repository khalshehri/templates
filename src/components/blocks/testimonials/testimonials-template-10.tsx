"use client";

import { Quote } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { TestimonialsConfig } from "./types";

export function TestimonialsTemplate10({ config, language }: BlockProps) {
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

        {/* Minimal Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.items.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-8 flex flex-col justify-between hover:border-gray-300 transition-colors duration-200"
            >
              {/* Quote Icon */}
              <div className={`mb-6 ${isAr ? "text-right" : ""}`}>
                <Quote
                  size={24}
                  style={{ color: "var(--theme-primary)" }}
                />
              </div>

              {/* Text */}
              <p className={`text-gray-600 leading-relaxed flex-1 mb-8 ${isAr ? "text-right" : ""}`}>
                {isAr ? item.textAr : item.text}
              </p>

              {/* Author at bottom */}
              <div className={`pt-6 border-t border-gray-100 ${isAr ? "text-right" : ""}`}>
                <p className="font-semibold text-gray-900">
                  {isAr ? item.nameAr : item.name}
                </p>
                <p className="text-sm text-gray-500 mt-0.5">
                  {isAr ? item.roleAr : item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
