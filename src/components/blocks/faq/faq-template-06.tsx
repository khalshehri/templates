"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { FaqConfig } from "./types";

export function FaqTemplate06({ config, language }: BlockProps) {
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

        {/* Numbered List */}
        <div className="space-y-4">
          {c.items.map((item, i) => {
            const isOpen = openIndex === i;
            const number = String(i + 1).padStart(2, "0");
            return (
              <div
                key={i}
                className="border-b border-gray-100 pb-4 last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center gap-5 text-left group ${
                    isAr ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <span
                    className="text-2xl sm:text-3xl font-bold shrink-0 tabular-nums"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    {number}
                  </span>
                  <span
                    className={`flex-1 font-semibold text-lg transition-colors ${
                      isOpen
                        ? "text-gray-900"
                        : "text-gray-700 group-hover:text-gray-900"
                    }`}
                  >
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
                    isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`text-gray-500 leading-relaxed ${
                      isAr ? "text-right pr-0 pl-9" : "pl-14 sm:pl-16"
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
