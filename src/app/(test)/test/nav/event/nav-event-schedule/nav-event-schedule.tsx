"use client";

import { useState } from "react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Summit 2026",
    links: ["Overview", "Speakers", "Venue"],
    days: ["Day 1", "Day 2", "Day 3"],
    cta: "Register",
  },
  ar: {
    brand: "قمة ٢٠٢٦",
    links: ["نظرة عامة", "المتحدثون", "المكان"],
    days: ["اليوم ١", "اليوم ٢", "اليوم ٣"],
    cta: "سجل",
  },
};

export function NavEventSchedule({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [activeDay, setActiveDay] = useState(0);

  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Main nav */}
      <div className={`max-w-7xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="font-bold text-gray-900 text-lg">{t.brand}</span>
        <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors">
          {t.cta}
        </button>
      </div>
      {/* Day tabs */}
      <div className="border-t border-gray-100">
        <div className={`max-w-7xl mx-auto px-6 flex items-center ${isAr ? "flex-row-reverse" : ""}`}>
          {t.days.map((day, i) => (
            <button
              key={day}
              onClick={() => setActiveDay(i)}
              className={`px-6 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                activeDay === i
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
