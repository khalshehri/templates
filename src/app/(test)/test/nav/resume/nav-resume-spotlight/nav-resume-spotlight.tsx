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

export function NavResumeSpotlight({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [active, setActive] = useState(0);

  // Compute spotlight position based on active index
  const spotPositions = ["25%", "42%", "58%", "75%"];

  return (
    <>
      <style>{`
        .nav-spotlight-bg {
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }
        .nav-spotlight-glow {
          position: absolute;
          top: -30px;
          width: 120px;
          height: 80px;
          background: radial-gradient(ellipse at center, rgba(251,191,36,0.25) 0%, transparent 70%);
          transition: left 0.3s ease;
          pointer-events: none;
        }
      `}</style>
      <nav className="nav-spotlight-bg border-b border-gray-800">
        <div className="nav-spotlight-glow" style={{ left: `calc(${spotPositions[active]} - 60px)` }} />
        <div className={`max-w-5xl mx-auto px-6 py-4 flex items-center justify-between relative z-10 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-white font-bold text-lg">{t.name}</span>

          <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <button
                key={link}
                onClick={() => setActive(i)}
                className={`text-sm font-medium px-4 py-2 rounded-md transition-all ${
                  active === i
                    ? "text-amber-400 bg-amber-400/10"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          <button className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold px-5 py-2 rounded-md transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
