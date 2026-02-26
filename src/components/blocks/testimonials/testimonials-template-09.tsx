"use client";

import { Star } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { TestimonialsConfig } from "./types";

export function TestimonialsTemplate09({ config, language }: BlockProps) {
  const c = config as TestimonialsConfig;
  const isAr = language === "ar";

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Chat Bubbles */}
        <div className="space-y-8">
          {c.items.map((item, i) => {
            const isLeft = i % 2 === 0;
            const alignment = isAr ? !isLeft : isLeft;

            return (
              <div
                key={i}
                className={`flex flex-col ${alignment ? "items-start" : "items-end"}`}
              >
                {/* Bubble */}
                <div
                  className={`relative max-w-[85%] sm:max-w-[75%] rounded-2xl p-5 ${
                    alignment
                      ? "rounded-bl-sm"
                      : "rounded-br-sm"
                  }`}
                  style={{
                    backgroundColor: alignment
                      ? "white"
                      : "color-mix(in srgb, var(--theme-primary) 10%, white)",
                    border: alignment ? "1px solid #e5e7eb" : "none",
                  }}
                >
                  {/* Triangle pointer */}
                  <div
                    className={`absolute bottom-0 w-0 h-0 ${
                      alignment ? "-left-2" : "-right-2"
                    }`}
                    style={{
                      borderTop: "8px solid transparent",
                      borderBottom: "0px solid transparent",
                      ...(alignment
                        ? { borderRight: "8px solid white" }
                        : { borderLeft: `8px solid color-mix(in srgb, var(--theme-primary) 10%, white)` }),
                    }}
                  />

                  {/* Stars */}
                  <div className={`flex gap-1 mb-2 ${isAr ? "justify-end" : ""}`}>
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        size={12}
                        className={si < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className={`text-gray-700 leading-relaxed text-sm ${isAr ? "text-right" : ""}`}>
                    {isAr ? item.textAr : item.text}
                  </p>
                </div>

                {/* Name below bubble */}
                <div
                  className={`flex items-center gap-2 mt-2 px-2 ${
                    alignment ? "" : "flex-row-reverse"
                  }`}
                >
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={isAr ? item.nameAr : item.name}
                      className="w-7 h-7 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white font-semibold text-xs shrink-0"
                      style={{ backgroundColor: "var(--theme-primary)" }}
                    >
                      {(isAr ? item.nameAr : item.name).charAt(0)}
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-800">
                    {isAr ? item.nameAr : item.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {isAr ? item.roleAr : item.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
