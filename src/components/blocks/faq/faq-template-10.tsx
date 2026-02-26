"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { FaqConfig } from "./types";

export function FaqTemplate10({ config, language }: BlockProps) {
  const c = config as FaqConfig;
  const isAr = language === "ar";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white py-20 sm:py-28">
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

        {/* Toggle Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {c.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-gray-200 shadow-lg"
                    : "border-gray-100 hover:border-gray-200 hover:shadow-sm"
                }`}
                style={
                  isOpen
                    ? {
                        borderTopColor: "var(--theme-primary)",
                        borderTopWidth: "3px",
                      }
                    : {}
                }
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between gap-4 p-5 text-left ${
                    isAr ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <span
                    className={`font-semibold transition-colors ${
                      isOpen ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {isAr ? item.questionAr : item.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "text-white" : "bg-gray-100 text-gray-400"
                    }`}
                    style={
                      isOpen
                        ? { backgroundColor: "var(--theme-primary)" }
                        : {}
                    }
                  >
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                      } ${isAr && !isOpen ? "rotate-180" : ""} ${
                        isAr && isOpen ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`px-5 pb-5 text-gray-500 leading-relaxed ${
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
