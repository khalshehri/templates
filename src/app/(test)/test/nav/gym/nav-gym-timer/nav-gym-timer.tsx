"use client";

import { useState, useEffect } from "react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "FITCLOCK",
    links: ["Classes", "Trainers", "Membership", "Contact"],
    cta: "BOOK CLASS",
    nextClass: "Next Class",
    minutes: "min",
  },
  ar: {
    brand: "فيت كلوك",
    links: ["الحصص", "المدربون", "العضوية", "اتصل بنا"],
    cta: "احجز حصة",
    nextClass: "الحصة التالية",
    minutes: "دقيقة",
  },
};

export function NavGymTimer({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [seconds, setSeconds] = useState(1800);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 1800));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <>
      <style>{`
        .timer-display {
          font-family: 'Courier New', monospace;
          font-variant-numeric: tabular-nums;
          background: #1a1a1a;
          border: 1px solid #333;
          padding: 4px 12px;
          border-radius: 4px;
          color: #22c55e;
          font-size: 14px;
          letter-spacing: 2px;
        }
        .timer-link {
          transition: all 0.2s ease;
        }
        .timer-link:hover {
          color: #22c55e;
        }
      `}</style>
      <nav className="bg-[#0d0d0d] px-6 py-4 border-b border-gray-800">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white font-black text-lg tracking-widest">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="timer-link text-gray-500 text-sm font-semibold uppercase tracking-wider">
                {link}
              </a>
            ))}
          </div>

          <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
              <span className="text-gray-500 text-xs uppercase tracking-wider">{t.nextClass}:</span>
              <span className="timer-display">
                {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
              </span>
            </div>
            <button className="bg-green-600 hover:bg-green-500 text-white font-bold px-5 py-2 text-sm uppercase tracking-wider transition-colors">
              {t.cta}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
