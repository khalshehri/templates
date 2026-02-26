"use client";

/**
 * FAQ Template 03 — Side Heading + Clean List
 * Heading pinned on left, questions on right, clean expandable
 */

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { FaqConfig } from "./types";

export function FaqTemplate03({ config, language }: BlockProps) {
  const c = config as FaqConfig;
  const isAr = language === "ar";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-5 gap-12 lg:gap-20 ${isAr ? "" : ""}`}>
          {/* Left — sticky heading */}
          <div className={`lg:col-span-2 ${isAr ? "lg:order-2 text-right" : ""}`}>
            <div className="lg:sticky lg:top-32">
              <div
                className="w-10 h-1 rounded-full mb-6"
                style={{ backgroundColor: "var(--theme-primary)" }}
              />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                {isAr ? c.headingAr : c.heading}
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                {isAr ? c.subheadingAr : c.subheading}
              </p>
            </div>
          </div>

          {/* Right — questions */}
          <div className={`lg:col-span-3 ${isAr ? "lg:order-1" : ""}`}>
            <div className="divide-y divide-gray-100">
              {c.items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className="py-5">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className={`w-full flex items-start justify-between gap-4 text-left group ${
                        isAr ? "flex-row-reverse text-right" : ""
                      }`}
                    >
                      <span className={`text-base font-medium transition-colors ${isOpen ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"}`}>
                        {isAr ? item.questionAr : item.question}
                      </span>
                      <div
                        className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                          isOpen ? "text-white" : "bg-gray-100 text-gray-400"
                        }`}
                        style={isOpen ? { backgroundColor: "var(--theme-primary)" } : {}}
                      >
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className={`text-gray-500 leading-relaxed text-sm pr-11 ${isAr ? "text-right pl-11 pr-0" : ""}`}>
                        {isAr ? item.answerAr : item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
