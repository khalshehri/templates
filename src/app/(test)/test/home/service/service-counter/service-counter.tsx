"use client";

/**
 * Service Counter Hero
 * Service counter/desk illustration at bottom, content above like a sign/menu board.
 * Hospitality feel with warm orange palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Welcome In",
    heading: "How Can We",
    headingLine2: "Help You Today?",
    subheading: "Step right up to our service counter. Friendly faces, quick service, and a smile — always.",
    cta: "Take a Number",
    ctaSecondary: "View Menu",
    menuItems: [
      { name: "Haircut & Style", price: "$35", popular: true },
      { name: "Beard Trim", price: "$15", popular: false },
      { name: "Hot Towel Shave", price: "$25", popular: false },
      { name: "Full Package", price: "$60", popular: true },
    ],
    nowServing: "Now Serving",
    ticketNum: "#042",
    waitTime: "~5 min wait",
  },
  ar: {
    badge: "أهلاً وسهلاً",
    heading: "كيف يمكننا",
    headingLine2: "مساعدتك اليوم؟",
    subheading: "تفضل إلى كاونتر الخدمة. وجوه ودودة، خدمة سريعة، وابتسامة — دائماً.",
    cta: "خذ رقمك",
    ctaSecondary: "عرض القائمة",
    menuItems: [
      { name: "قص وتصفيف", price: "٣٥ ر.س", popular: true },
      { name: "تهذيب اللحية", price: "١٥ ر.س", popular: false },
      { name: "حلاقة بالمنشفة الساخنة", price: "٢٥ ر.س", popular: false },
      { name: "الباقة الكاملة", price: "٦٠ ر.س", popular: true },
    ],
    nowServing: "يتم الخدمة الآن",
    ticketNum: "#٠٤٢",
    waitTime: "~٥ دقائق انتظار",
  },
};

export function ServiceCounter({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ticketPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes bellRing {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-15deg); }
          30% { transform: rotate(10deg); }
          40% { transform: rotate(-10deg); }
          50% { transform: rotate(0deg); }
        }
        @keyframes menuItemSlide {
          from { opacity: 0; transform: translateX(${isAr ? "20px" : "-20px"}); }
          to { opacity: 1; transform: translateX(0); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .slide-up { animation: slideUp 1s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .menu-item-slide { animation: menuItemSlide 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ background: "linear-gradient(180deg, #1c1207 0%, #2a1a0a 40%, #3d2614 70%, #4a2e18 100%)" }}
      >
        {/* Warm ambient light from top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-30"
          style={{ background: "radial-gradient(ellipse, rgba(251, 146, 60, 0.3), transparent 70%)" }}
        />

        {/* Content area (menu board) */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          {/* Menu board frame */}
          <div
            className="fade-up w-full max-w-3xl rounded-3xl overflow-hidden"
            style={{
              animationDelay: "0.1s",
              background: "linear-gradient(180deg, #1a1a1a, #111111)",
              boxShadow: "0 0 0 3px rgba(251, 146, 60, 0.15), 0 20px 60px rgba(0,0,0,0.5)",
              border: "2px solid rgba(251, 146, 60, 0.1)",
            }}
          >
            {/* Board header with lights */}
            <div className="relative px-8 pt-8 pb-4 text-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              {/* Decorative bulb lights */}
              <div className="absolute top-3 left-0 right-0 flex justify-center gap-6">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: i % 2 === 0 ? "#f97316" : "#fbbf24",
                      boxShadow: `0 0 8px ${i % 2 === 0 ? "rgba(249, 115, 22, 0.5)" : "rgba(251, 191, 36, 0.5)"}`,
                    }}
                  />
                ))}
              </div>

              <div
                className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
                style={{ animationDelay: "0.2s", background: "rgba(249, 115, 22, 0.15)", color: "#fdba74" }}
              >
                {t.badge}
              </div>

              <h1 className="fade-up text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]" style={{ animationDelay: "0.3s" }}>
                <span className="block text-white">{t.heading}</span>
                <span style={{ color: "#fdba74" }}>{t.headingLine2}</span>
              </h1>

              <p className="fade-up mt-4 text-sm text-gray-500 max-w-md mx-auto" style={{ animationDelay: "0.4s" }}>
                {t.subheading}
              </p>
            </div>

            {/* Menu items */}
            <div className="px-6 sm:px-8 py-6 space-y-3">
              {t.menuItems.map((item, i) => (
                <div
                  key={i}
                  className={`menu-item-slide flex items-center justify-between px-5 py-4 rounded-2xl ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    animationDelay: `${0.5 + i * 0.1}s`,
                    background: item.popular ? "rgba(249, 115, 22, 0.08)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${item.popular ? "rgba(249, 115, 22, 0.15)" : "rgba(255,255,255,0.04)"}`,
                  }}
                >
                  <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                    {item.popular && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400">
                        {isAr ? "مميز" : "Popular"}
                      </span>
                    )}
                    <span className={`font-semibold ${item.popular ? "text-orange-200" : "text-gray-400"}`}>{item.name}</span>
                  </div>
                  <span className="font-bold text-white">{item.price}</span>
                </div>
              ))}
            </div>

            {/* Now serving + CTA */}
            <div className="px-6 sm:px-8 pb-8 flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div
                className="flex items-center gap-3"
                style={{ animation: "ticketPulse 3s ease-in-out infinite" }}
              >
                <span className="text-xs text-gray-500 uppercase tracking-wider">{t.nowServing}</span>
                <span className="text-2xl font-black text-orange-400">{t.ticketNum}</span>
                <span className="text-xs text-gray-600">{t.waitTime}</span>
              </div>

              <div className={`flex gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    boxShadow: "0 6px 20px rgba(249, 115, 22, 0.3)",
                  }}
                >
                  {t.cta}
                  <ArrowRight size={14} className={isAr ? "rotate-180" : ""} />
                </a>
                <a href="#" className="px-6 py-3 text-sm font-semibold text-gray-400 rounded-xl border border-gray-700 hover:border-gray-500 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Counter desk at bottom */}
        <div className="slide-up relative" style={{ animationDelay: "0.6s" }}>
          {/* Counter surface */}
          <div
            className="h-24 sm:h-32 w-full"
            style={{
              background: "linear-gradient(180deg, #8B6914 0%, #7A5C12 30%, #6B4F0F 100%)",
              borderTop: "4px solid #A07D1A",
              boxShadow: "0 -10px 30px rgba(0,0,0,0.3)",
            }}
          >
            {/* Wood grain texture lines */}
            {[15, 30, 50, 70, 85].map((left, i) => (
              <div
                key={i}
                className="absolute h-full w-px opacity-10"
                style={{ left: `${left}%`, background: "linear-gradient(180deg, #A07D1A, transparent)" }}
              />
            ))}

            {/* Counter edge highlight */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent" />

            {/* Bell on counter */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 -translate-y-full">
              <div style={{ animation: "bellRing 4s ease-in-out infinite" }}>
                <div className="w-10 h-8 rounded-t-full bg-gradient-to-b from-amber-300 to-amber-500" style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }} />
                <div className="w-12 h-2 rounded-b-sm bg-amber-600 -mx-1" />
                <div className="w-3 h-3 rounded-full bg-amber-700 mx-auto -mt-5" />
              </div>
            </div>
          </div>

          {/* Counter base */}
          <div
            className="h-12 w-full"
            style={{ background: "linear-gradient(180deg, #5a3e0a, #4a3008)" }}
          />
        </div>
      </section>
    </>
  );
}
