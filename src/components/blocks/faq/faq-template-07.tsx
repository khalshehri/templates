"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { FaqConfig } from "./types";

export function FaqTemplate07({ config, language }: BlockProps) {
  const c = config as FaqConfig;
  const isAr = language === "ar";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mb-20 ${isAr ? "text-right" : ""}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Minimal Accordion */}
        <div>
          {c.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-gray-100">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between gap-4 py-6 text-left ${
                    isAr ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <span
                    className={`font-medium transition-colors ${
                      isOpen ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {isAr ? item.questionAr : item.question}
                  </span>
                  {isOpen ? (
                    <Minus
                      size={18}
                      className="shrink-0"
                      style={{ color: "var(--theme-primary)" }}
                    />
                  ) : (
                    <Plus size={18} className="shrink-0 text-gray-300" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className={`text-gray-400 leading-relaxed text-sm ${
                      isAr ? "text-right" : ""
                    }`}
                  >
                    {isAr ? item.answerAr : item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
