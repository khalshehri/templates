"use client";

import { useState, useEffect } from "react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "StickyShop",
    links: ["Home", "Products", "Categories", "About"],
    cartCount: 2,
    searchPlaceholder: "Search products...",
  },
  ar: {
    brand: "ستيكي شوب",
    links: ["الرئيسية", "المنتجات", "الأقسام", "من نحن"],
    cartCount: 2,
    searchPlaceholder: "ابحث عن المنتجات...",
  },
};

export function NavEcomSticky({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => setCompact(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-sticky {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-full { padding-top: 1rem; padding-bottom: 1rem; }
        .nav-compact { padding-top: 0.5rem; padding-bottom: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
      `}</style>
      <nav className={`nav-sticky sticky top-12 z-40 bg-white border-b border-gray-200 ${compact ? "nav-compact" : "nav-full"}`}>
        <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className={`font-extrabold text-indigo-600 transition-all ${compact ? "text-lg" : "text-2xl"}`}>{t.brand}</span>

          {!compact && (
            <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
              {t.links.map((link) => (
                <a key={link} href="#" className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors">
                  {link}
                </a>
              ))}
            </div>
          )}

          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            {compact && (
              <div className={`hidden md:flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.links.map((link) => (
                  <a key={link} href="#" className="text-gray-500 hover:text-indigo-600 text-xs font-medium transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            )}
            <button className="text-gray-500 hover:text-indigo-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="relative text-gray-500 hover:text-indigo-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{t.cartCount}</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
