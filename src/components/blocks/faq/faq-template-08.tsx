"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { FaqConfig } from "./types";

export function FaqTemplate08({ config, language }: BlockProps) {
  const c = config as FaqConfig;
  const isAr = language === "ar";
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = c.items.filter((item) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      item.question.toLowerCase().includes(term) ||
      item.questionAr.includes(searchTerm) ||
      item.answer.toLowerCase().includes(term) ||
      item.answerAr.includes(searchTerm)
    );
  });

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-10">
          <Search
            size={20}
            className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${
              isAr ? "right-4" : "left-4"
            }`}
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setOpenIndex(null);
            }}
            placeholder={
              isAr ? "ابحث في الأسئلة الشائعة..." : "Search FAQ..."
            }
            className={`w-full py-4 rounded-2xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
              isAr ? "pr-12 pl-4 text-right" : "pl-12 pr-4"
            }`}
            style={
              {
                "--tw-ring-color": "var(--theme-primary)",
              } as React.CSSProperties
            }
            dir={isAr ? "rtl" : "ltr"}
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredItems.length === 0 ? (
            <p className="text-center text-gray-400 py-8">
              {isAr ? "لا توجد نتائج" : "No results found"}
            </p>
          ) : (
            filteredItems.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-300 ${
                    isOpen ? "border-gray-200 shadow-sm" : "border-gray-100"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left ${
                      isAr ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <span
                      className={`font-semibold ${
                        isOpen ? "text-gray-900" : "text-gray-700"
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
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`px-6 pb-5 text-gray-500 leading-relaxed ${
                        isAr ? "text-right" : ""
                      }`}
                    >
                      {isAr ? item.answerAr : item.answer}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
