"use client";

import { useState, useEffect } from "react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "FlashSale",
    links: ["All Deals", "Electronics", "Fashion", "Home"],
    saleText: "MEGA SALE ENDS IN:",
    cartCount: 6,
  },
  ar: {
    brand: "تخفيضات",
    links: ["كل العروض", "إلكترونيات", "أزياء", "منزل"],
    saleText: "ينتهي العرض خلال:",
    cartCount: 6,
  },
};

export function NavEcomSale({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [time, setTime] = useState({ h: 23, m: 45, s: 30 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      <style>{`
        @keyframes urgentPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .urgent-pulse { animation: urgentPulse 1.5s ease infinite; }
      `}</style>
      {/* Sale countdown strip */}
      <div className="bg-red-600 text-white urgent-pulse">
        <div className={`max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-xs font-bold tracking-wider uppercase">{t.saleText}</span>
          <div className={`flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            <span className="bg-white/20 px-2 py-0.5 rounded text-sm font-mono font-bold">{pad(time.h)}</span>
            <span className="font-bold">:</span>
            <span className="bg-white/20 px-2 py-0.5 rounded text-sm font-mono font-bold">{pad(time.m)}</span>
            <span className="font-bold">:</span>
            <span className="bg-white/20 px-2 py-0.5 rounded text-sm font-mono font-bold">{pad(time.s)}</span>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className={`max-w-7xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="font-extrabold text-red-600 text-xl">{t.brand}</span>
          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-gray-600 hover:text-red-600 text-sm font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>
          <button className="relative text-gray-600 hover:text-red-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">{t.cartCount}</span>
          </button>
        </div>
      </nav>
    </>
  );
}
