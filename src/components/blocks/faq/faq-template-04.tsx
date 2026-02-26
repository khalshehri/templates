"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { FaqConfig } from "./types";

export function FaqTemplate04({ config, language }: BlockProps) {
  const c = config as FaqConfig;
  const isAr = language === "ar";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const oddItems = c.items.filter((_, i) => i % 2 === 0);
  const evenItems = c.items.filter((_, i) => i % 2 === 1);

  const renderItem = (
    item: FaqConfig["items"][number],
    originalIndex: number
  ) => {
    const isOpen = openIndex === originalIndex;
    return (
      <div
        key={originalIndex}
        className={`rounded-xl border transition-all duration-300 ${
          isOpen
            ? "border-gray-200 shadow-sm"
            : "border-gray-100 hover:border-gray-200"
        }`}
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : originalIndex)}
          className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left ${
            isAr ? "flex-row-reverse text-right" : ""
          }`}
        >
          <span
            className={`font-medium text-sm ${
              isOpen ? "text-gray-900" : "text-gray-700"
            }`}
          >
            {isAr ? item.questionAr : item.question}
          </span>
          <ChevronDown
            size={18}
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
          <div
            className={`px-5 pb-4 text-gray-500 text-sm leading-relaxed ${
              isAr ? "text-right" : ""
            }`}
          >
            {isAr ? item.answerAr : item.answer}
          </div>
        </div>
      </div>
    );
  };

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

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Left column — odd-numbered (0, 2, 4...) */}
          <div className="space-y-4">
            {oddItems.map((item, i) => renderItem(item, i * 2))}
          </div>

          {/* Right column — even-numbered (1, 3, 5...) */}
          <div className="space-y-4">
            {evenItems.map((item, i) => renderItem(item, i * 2 + 1))}
          </div>
        </div>
      </div>
    </div>
  );
}
