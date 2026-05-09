"use client";

import { Star } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { TestimonialsConfig } from "./types";

export function TestimonialsTemplate02({ config, language }: BlockProps) {
  const c = config as TestimonialsConfig;
  const isAr = language === "ar";

  return (
    <div className="py-20 sm:py-28" style={{ backgroundColor: "var(--theme-background, #fff)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
              color: "var(--theme-primary)",
            }}
          >
            {isAr ? "آراء العملاء" : "Testimonials"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Large single + side stack */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Featured testimonial */}
          {c.items?.[0] && (
            <div
              className="lg:col-span-3 p-10 rounded-3xl text-white relative overflow-hidden"
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 bg-white -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      size={20}
                      className={si < c.items?.[0]?.rating ? "fill-yellow-300 text-yellow-300" : "text-white/30"}
                    />
                  ))}
                </div>

                <p className="text-xl leading-relaxed opacity-95 mb-8">
                  &ldquo;{isAr ? c.items?.[0]?.textAr : c.items?.[0]?.text}&rdquo;
                </p>

                <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                    {(isAr ? c.items?.[0]?.nameAr : c.items?.[0]?.name)?.charAt(0)}
                  </div>
                  <div className={isAr ? "text-right" : ""}>
                    <p className="font-semibold text-lg">{isAr ? c.items?.[0]?.nameAr : c.items?.[0]?.name}</p>
                    <p className="text-white/70">{isAr ? c.items?.[0]?.roleAr : c.items?.[0]?.role}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Side stack */}
          <div className="lg:col-span-2 space-y-4">
            {c.items?.slice(1)?.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className={si < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  &ldquo;{isAr ? item.textAr : item.text}&rdquo;
                </p>
                <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm shrink-0"
                    style={{ backgroundColor: "var(--theme-primary)" }}
                  >
                    {(isAr ? item.nameAr : item.name).charAt(0)}
                  </div>
                  <div className={isAr ? "text-right" : ""}>
                    <p className="font-medium text-sm text-gray-900">{isAr ? item.nameAr : item.name}</p>
                    <p className="text-xs text-gray-500">{isAr ? item.roleAr : item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
