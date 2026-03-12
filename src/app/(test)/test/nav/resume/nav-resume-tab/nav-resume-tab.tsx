"use client";

import { useState } from "react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Alex Morgan",
    links: ["Experience", "Skills", "Education", "Projects"],
    cta: "Contact",
  },
  ar: {
    name: "أليكس مورغان",
    links: ["الخبرة", "المهارات", "التعليم", "المشاريع"],
    cta: "تواصل",
  },
};

export function NavResumeTab({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [active, setActive] = useState(0);

  return (
    <nav className="bg-white shadow-sm">
      <div className={`max-w-5xl mx-auto px-6 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="font-bold text-gray-900 text-lg py-4">{t.name}</span>

        {/* Tabs */}
        <div className={`hidden md:flex items-center ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <button
              key={link}
              onClick={() => setActive(i)}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
                active === i
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
