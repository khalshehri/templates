"use client";

import { useState } from "react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Alex Morgan",
    links: ["Experience", "Skills", "Education", "Projects"],
    cta: "Download CV",
  },
  ar: {
    name: "أليكس مورغان",
    links: ["الخبرة", "المهارات", "التعليم", "المشاريع"],
    cta: "تحميل السيرة",
  },
};

export function NavResumeTimeline({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [active, setActive] = useState(0);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className={`max-w-5xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="font-bold text-gray-900 text-lg">{t.name}</span>

        {/* Timeline nav */}
        <div className={`hidden md:flex items-center ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <div key={link} className={`flex items-center ${isAr ? "flex-row-reverse" : ""}`}>
              <button
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-1 group relative"
              >
                <span className={`text-xs font-medium transition-colors ${active === i ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}`}>
                  {link}
                </span>
                <div className={`w-3.5 h-3.5 rounded-full border-2 transition-colors ${active === i ? "bg-blue-600 border-blue-600" : "bg-white border-gray-300 group-hover:border-blue-400"}`} />
              </button>
              {i < t.links.length - 1 && (
                <div className={`w-12 h-0.5 mt-4 ${i < active ? "bg-blue-600" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>

        <button className={`flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-medium px-4 py-2 rounded-md transition-colors ${isAr ? "flex-row-reverse" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v9M4 7l3 3 3-3M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
