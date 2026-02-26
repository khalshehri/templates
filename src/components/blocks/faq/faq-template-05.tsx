"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { FaqConfig } from "./types";

export function FaqTemplate05({ config, language }: BlockProps) {
  const c = config as FaqConfig;
  const isAr = language === "ar";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {c.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 ${
                  isOpen ? "shadow-md" : "hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between gap-4 p-6 text-left ${
                    isAr ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <span className="font-semibold text-gray-900">
                    {isAr ? item.questionAr : item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: "var(--theme-primary)" }}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`px-6 pb-6 text-gray-500 leading-relaxed ${
                      isAr ? "text-right" : ""
                    }`}
                  >
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
