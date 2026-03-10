"use client";

/**
 * Search Discovery Hero
 * Giant search bar as the hero element with product category tags below.
 * Discovery-focused layout emphasizing exploration. Typing animation
 * in the search bar with auto-complete suggestions.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Discover More",
    heading: "Find Exactly",
    headingHighlight: "What You Want",
    subheading:
      "Search through millions of products. Smart filters, instant results, and personalized recommendations.",
    ctaPrimary: "Start Shopping",
    ctaSecondary: "Browse Categories",
    searchPlaceholder: "Search for anything...",
    typingText: "summer dresses",
    suggestions: [
      { text: "summer dresses", count: "2,340 results" },
      { text: "summer dress floral", count: "856 results" },
      { text: "summer dress midi", count: "1,204 results" },
      { text: "summer dress cotton", count: "672 results" },
    ],
    categories: [
      { name: "Fashion", count: "12K+", icon: "F" },
      { name: "Electronics", count: "8K+", icon: "E" },
      { name: "Home", count: "15K+", icon: "H" },
      { name: "Beauty", count: "6K+", icon: "B" },
      { name: "Sports", count: "4K+", icon: "S" },
      { name: "Books", count: "20K+", icon: "B" },
      { name: "Toys", count: "3K+", icon: "T" },
      { name: "Food", count: "9K+", icon: "F" },
    ],
    trending: "Trending:",
    trendingItems: ["Wireless earbuds", "Yoga mat", "Coffee maker", "Skincare set"],
  },
  ar: {
    badge: "اكتشف المزيد",
    heading: "جد بالضبط",
    headingHighlight: "ما تريده",
    subheading:
      "ابحث في ملايين المنتجات. فلاتر ذكية، نتائج فورية، وتوصيات مخصصة.",
    ctaPrimary: "ابدأ التسوق",
    ctaSecondary: "تصفح الفئات",
    searchPlaceholder: "ابحث عن أي شيء...",
    typingText: "فساتين صيفية",
    suggestions: [
      { text: "فساتين صيفية", count: "2,340 نتيجة" },
      { text: "فساتين صيفية زهرية", count: "856 نتيجة" },
      { text: "فساتين صيفية ميدي", count: "1,204 نتيجة" },
      { text: "فساتين صيفية قطنية", count: "672 نتيجة" },
    ],
    categories: [
      { name: "أزياء", count: "+12K", icon: "أ" },
      { name: "إلكترونيات", count: "+8K", icon: "إ" },
      { name: "منزل", count: "+15K", icon: "م" },
      { name: "جمال", count: "+6K", icon: "ج" },
      { name: "رياضة", count: "+4K", icon: "ر" },
      { name: "كتب", count: "+20K", icon: "ك" },
      { name: "ألعاب", count: "+3K", icon: "أ" },
      { name: "طعام", count: "+9K", icon: "ط" },
    ],
    trending: "رائج:",
    trendingItems: ["سماعات لاسلكية", "سجادة يوغا", "صانعة قهوة", "مجموعة عناية"],
  },
};

export function EcomSearch({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes typing {
          0%, 100% { width: 0; }
          30%, 70% { width: 100%; }
        }
        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes suggestFade {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes catPop {
          0% { opacity: 0; transform: scale(0.8); }
          60% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes searchGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
          50% { box-shadow: 0 0 0 4px rgba(16,185,129,0.1); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#071209]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[700px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="text-center">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t.badge}
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}>
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            <p className="fade-up mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.3s" }}>
              {t.subheading}
            </p>

            {/* Giant search bar */}
            <div className="fade-up mt-10 relative max-w-2xl mx-auto" style={{ animationDelay: "0.4s" }}>
              <div className="relative rounded-2xl border border-emerald-500/20 bg-white/[0.04] backdrop-blur-sm overflow-hidden"
                style={{ animation: "searchGlow 3s ease-in-out infinite" }}>
                <div className="flex items-center px-5 py-4 sm:px-6 sm:py-5 gap-3">
                  {/* Search icon */}
                  <svg className="w-5 h-5 text-emerald-400/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                  </svg>
                  {/* Typing text */}
                  <div className="relative flex-1 text-left overflow-hidden">
                    <span className="text-white/20 text-sm sm:text-base">{t.searchPlaceholder}</span>
                    <div className="absolute inset-0 flex items-center">
                      <span className="text-white/60 text-sm sm:text-base overflow-hidden whitespace-nowrap"
                        style={{ animation: "typing 6s ease-in-out infinite" }}>
                        {t.typingText}
                      </span>
                      <span className="w-0.5 h-5 bg-emerald-400 ml-0.5"
                        style={{ animation: "cursorBlink 1s step-end infinite" }} />
                    </div>
                  </div>
                  <a href="#" className={`group flex-shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-black bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl hover:shadow-lg transition-all ${isAr ? "flex-row-reverse" : ""}`}>
                    {t.ctaPrimary}
                    <ArrowRight size={14} className={isAr ? "rotate-180" : ""} />
                  </a>
                </div>

                {/* Auto-complete dropdown */}
                <div className="border-t border-white/[0.04] px-5 py-3">
                  {t.suggestions.map((sug, i) => (
                    <div key={i} className={`flex items-center justify-between py-2 px-2 rounded-lg hover:bg-white/[0.03] cursor-pointer transition-colors ${isAr ? "flex-row-reverse" : ""}`}
                      style={{ animation: `suggestFade 0.4s ease-out ${0.6 + i * 0.1}s both` }}>
                      <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                        <svg className="w-3.5 h-3.5 text-white/10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                        </svg>
                        <span className="text-sm text-white/40">{sug.text}</span>
                      </div>
                      <span className="text-[10px] text-emerald-400/40">{sug.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Category grid */}
            <div className="fade-up mt-10 grid grid-cols-4 gap-3 max-w-lg mx-auto" style={{ animationDelay: "0.7s" }}>
              {t.categories.map((cat, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-emerald-500/20 cursor-pointer transition-all"
                  style={{ animation: `catPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.8 + i * 0.08}s both` }}>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/10 flex items-center justify-center text-sm font-bold text-emerald-400/60">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] text-white/40 font-medium">{cat.name}</span>
                  <span className="text-[9px] text-emerald-400/30">{cat.count}</span>
                </div>
              ))}
            </div>

            {/* Trending */}
            <div className="fade-up mt-8 flex items-center justify-center gap-3 flex-wrap" style={{ animationDelay: "1s" }}>
              <span className="text-xs text-white/20">{t.trending}</span>
              {t.trendingItems.map((item, i) => (
                <span key={i} className="px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] text-[11px] text-white/25 hover:text-emerald-300/50 hover:border-emerald-500/20 cursor-pointer transition-all">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
