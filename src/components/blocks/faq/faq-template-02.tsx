"use client";

import { MessageCircle } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { FaqConfig } from "./types";

export function FaqTemplate02({ config, language }: BlockProps) {
  const c = config as FaqConfig;
  const isAr = language === "ar";

  const midpoint = Math.ceil(c.items.length / 2);
  const leftColumn = c.items.slice(0, midpoint);
  const rightColumn = c.items.slice(midpoint);

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
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
            <MessageCircle size={14} />
            {isAr ? "أسئلة وأجوبة" : "FAQ"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {[leftColumn, rightColumn].map((column, ci) => (
            <div key={ci} className="space-y-6">
              {column.map((item, i) => (
                <div key={i} className={`bg-white p-6 rounded-2xl border border-gray-100 ${isAr ? "text-right" : ""}`}>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {isAr ? item.questionAr : item.question}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {isAr ? item.answerAr : item.answer}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
