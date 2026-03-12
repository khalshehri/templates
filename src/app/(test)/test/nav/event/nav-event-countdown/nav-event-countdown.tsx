"use client";

import { useState, useEffect } from "react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "TechSummit 2026",
    links: ["Speakers", "Schedule", "Venue", "Sponsors"],
    cta: "Register",
    countdownLabel: "Event starts in:",
  },
  ar: {
    brand: "قمة التقنية ٢٠٢٦",
    links: ["المتحدثون", "الجدول", "المكان", "الرعاة"],
    cta: "سجل الآن",
    countdownLabel: "يبدأ الحدث خلال:",
  },
};

export function NavEventCountdown({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [time, setTime] = useState({ d: 12, h: 8, m: 45, s: 30 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { d, h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        if (d < 0) { d = 0; h = 0; m = 0; s = 0; }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const units = isAr
    ? [{ v: time.s, l: "ثانية" }, { v: time.m, l: "دقيقة" }, { v: time.h, l: "ساعة" }, { v: time.d, l: "يوم" }]
    : [{ v: time.d, l: "Days" }, { v: time.h, l: "Hrs" }, { v: time.m, l: "Min" }, { v: time.s, l: "Sec" }];

  return (
    <nav className="bg-gray-950 border-b border-gray-800">
      <div className={`max-w-7xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="font-bold text-white text-lg">{t.brand}</span>

        <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`hidden sm:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {units.map((unit, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="bg-gray-800 text-cyan-400 px-2.5 py-1 rounded text-sm font-mono font-bold min-w-[2.5rem] text-center">
                  {pad(unit.v)}
                </span>
                <span className="text-gray-600 text-[9px] mt-0.5 uppercase">{unit.l}</span>
              </div>
            ))}
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors">
            {t.cta}
          </button>
        </div>
      </div>
    </nav>
  );
}
