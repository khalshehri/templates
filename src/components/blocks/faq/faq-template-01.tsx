"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { FaqConfig } from "./types";

export function FaqTemplate01({ config, language }: BlockProps) {
  const c = config as FaqConfig;
  const isAr = language === "ar";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {c.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-gray-200 shadow-sm" : "border-gray-100"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left ${
                    isAr ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <span className={`font-semibold ${isOpen ? "text-gray-900" : "text-gray-700"}`}>
                    {isAr ? item.questionAr : item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={isOpen ? { color: "var(--theme-primary)" } : {}}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className={`px-6 pb-5 text-gray-500 leading-relaxed ${isAr ? "text-right" : ""}`}>
                    {isAr ? item.answerAr : item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
