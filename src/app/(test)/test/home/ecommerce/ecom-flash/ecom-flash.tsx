"use client";

/**
 * Flash Sale Hero
 * Urgent flash sale countdown with large percentage off display.
 * Red/yellow urgency colors, pulsing borders, countdown timer,
 * and FOMO-inducing limited stock indicators.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "FLASH SALE",
    heading: "Up to",
    discount: "70%",
    headingEnd: "OFF",
    subheading:
      "Limited time only. Thousands of items at unbeatable prices. Don't miss out — when it's gone, it's gone.",
    ctaPrimary: "Shop the Sale",
    ctaSecondary: "View All Deals",
    countdown: { hours: "04", minutes: "23", seconds: "47", label: "Ends In" },
    urgencyItems: [
      { name: "Premium Headphones", original: "$299", sale: "$89", left: "3 left" },
      { name: "Smart Watch Pro", original: "$449", sale: "$179", left: "7 left" },
      { name: "Wireless Earbuds", original: "$199", sale: "$59", left: "12 left" },
    ],
    limitedBadge: "LIMITED STOCK",
  },
  ar: {
    badge: "تخفيضات سريعة",
    heading: "خصم حتى",
    discount: "70%",
    headingEnd: "",
    subheading:
      "لفترة محدودة فقط. آلاف المنتجات بأسعار لا تُقاوم. لا تفوّت الفرصة — عندما تنتهي، تنتهي.",
    ctaPrimary: "تسوق التخفيضات",
    ctaSecondary: "جميع العروض",
    countdown: { hours: "04", minutes: "23", seconds: "47", label: "ينتهي في" },
    urgencyItems: [
      { name: "سماعات بريميوم", original: "$299", sale: "$89", left: "3 متبقي" },
      { name: "ساعة ذكية برو", original: "$449", sale: "$179", left: "7 متبقي" },
      { name: "سماعات لاسلكية", original: "$199", sale: "$59", left: "12 متبقي" },
    ],
    limitedBadge: "كمية محدودة",
  },
};

export function EcomFlash({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes urgentPulse {
          0%, 100% { border-color: rgba(239,68,68,0.3); box-shadow: 0 0 20px rgba(239,68,68,0.05); }
          50% { border-color: rgba(239,68,68,0.6); box-shadow: 0 0 40px rgba(239,68,68,0.15); }
        }
        @keyframes discountPop {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes countTick {
          0%, 90% { transform: translateY(0); }
          95% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
        @keyframes flashBg {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }
        @keyframes stockShrink {
          from { width: 100%; }
          to { width: 15%; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0704]">
        {/* Diagonal stripes background */}
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(239,68,68,0.02) 40px, rgba(239,68,68,0.02) 42px)",
          animation: "flashBg 2s ease-in-out infinite",
        }} />

        {/* Red glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(239,68,68,0.15) 0%, rgba(245,158,11,0.05) 50%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="text-center max-w-4xl mx-auto">
            {/* Flash badge */}
            <div className="fade-up inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-bold mb-8 uppercase tracking-wider"
              style={{ animationDelay: "0.1s", animation: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s both, urgentPulse 2s ease-in-out infinite" }}>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              {t.badge}
            </div>

            {/* Giant discount */}
            <div className="fade-up mb-6" style={{ animationDelay: "0.2s" }}>
              <span className="text-2xl sm:text-3xl font-bold text-white/60">{t.heading}</span>
              <div style={{ animation: "discountPop 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.4s both" }}>
                <span className="text-8xl sm:text-9xl lg:text-[10rem] font-black bg-gradient-to-b from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent leading-none">
                  {t.discount}
                </span>
              </div>
              {t.headingEnd && <span className="text-3xl sm:text-4xl font-bold text-white/60">{t.headingEnd}</span>}
            </div>

            <p className="fade-up text-lg text-white/35 max-w-xl mx-auto leading-relaxed mb-8"
              style={{ animationDelay: "0.3s" }}>
              {t.subheading}
            </p>

            {/* Countdown timer */}
            <div className="fade-up inline-flex items-center gap-4 mb-10"
              style={{ animationDelay: "0.4s" }}>
              <span className="text-xs text-white/30 uppercase tracking-wider">{t.countdown.label}</span>
              <div className="flex items-center gap-2">
                {[t.countdown.hours, t.countdown.minutes, t.countdown.seconds].map((unit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-white/[0.05] border border-red-500/20 flex items-center justify-center"
                      style={{ animation: i === 2 ? "countTick 1s ease-in-out infinite" : "none" }}>
                      <span className="text-xl sm:text-2xl font-bold font-mono text-white">{unit}</span>
                    </div>
                    {i < 2 && <span className="text-xl text-red-400/50 font-bold">:</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="fade-up flex items-center justify-center gap-4 mb-14"
              style={{ animationDelay: "0.5s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                {t.ctaSecondary}
              </a>
            </div>

            {/* Urgency product strips */}
            <div className="fade-up grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto"
              style={{ animationDelay: "0.7s" }}>
              {t.urgencyItems.map((item, i) => (
                <div key={i} className="relative bg-white/[0.03] border border-red-500/10 rounded-xl p-4 text-left"
                  style={{ direction: isAr ? "rtl" : "ltr" }}>
                  <div className="text-[9px] font-bold text-red-400 uppercase tracking-wider mb-2">{t.limitedBadge}</div>
                  <div className="text-sm font-semibold text-white/70 mb-1">{item.name}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-emerald-400">{item.sale}</span>
                    <span className="text-sm text-white/20 line-through">{item.original}</span>
                  </div>
                  {/* Stock bar */}
                  <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-500"
                      style={{
                        animation: `stockShrink 3s ease-out ${0.8 + i * 0.3}s both`,
                      }} />
                  </div>
                  <div className="text-[10px] text-red-400/60 mt-1.5">{item.left}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
