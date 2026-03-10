"use client";

/**
 * Price Tag Hero
 * Oversized price tag with string/ribbon, product details printed on tag.
 * Price-forward design with the tag as the central visual element.
 * Subtle swing animation and shadow effects.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Best Value",
    heading: "Prices That",
    headingHighlight: "Make You Smile",
    subheading:
      "Transparent pricing on every product. No markups, no games. Just honest prices for quality goods.",
    ctaPrimary: "Shop Deals",
    ctaSecondary: "Price Match",
    tag: {
      productName: "Premium Wireless Headphones",
      originalPrice: "$349.99",
      salePrice: "$149.99",
      savings: "Save $200",
      sku: "SKU: WH-PRO-2025",
      rating: "4.8",
      reviews: "2,340 reviews",
    },
    features: ["Free Returns", "Price Match Guarantee", "2-Year Warranty", "Free Shipping"],
    promoCode: "Use code SAVE50 for extra 10% off",
  },
  ar: {
    badge: "أفضل قيمة",
    heading: "أسعار",
    headingHighlight: "تُسعدك",
    subheading:
      "أسعار شفافة على كل منتج. بدون زيادات، بدون ألعاب. أسعار صادقة لمنتجات عالية الجودة.",
    ctaPrimary: "تسوق العروض",
    ctaSecondary: "مطابقة الأسعار",
    tag: {
      productName: "سماعات لاسلكية بريميوم",
      originalPrice: "$349.99",
      salePrice: "$149.99",
      savings: "وفّر $200",
      sku: "SKU: WH-PRO-2025",
      rating: "4.8",
      reviews: "2,340 تقييم",
    },
    features: ["إرجاع مجاني", "ضمان مطابقة السعر", "ضمان سنتين", "شحن مجاني"],
    promoCode: "استخدم كود SAVE50 لخصم إضافي 10%",
  },
};

export function EcomTag({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tagSwing {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes tagDrop {
          0% { opacity: 0; transform: translateY(-60px) rotate(-15deg); }
          60% { transform: translateY(10px) rotate(2deg); }
          100% { opacity: 1; transform: translateY(0) rotate(-3deg); }
        }
        @keyframes stringDangle {
          0%, 100% { d: path("M50,0 Q55,30 50,60"); }
          50% { d: path("M50,0 Q45,30 50,60"); }
        }
        @keyframes priceFlash {
          0%, 100% { text-shadow: 0 0 10px rgba(16,185,129,0); }
          50% { text-shadow: 0 0 20px rgba(16,185,129,0.3); }
        }
        @keyframes savingsBounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#071209]">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div className={isAr ? "lg:order-2 text-right" : "lg:order-1"}>
              <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 text-sm font-medium mb-8"
                style={{ animationDelay: "0.1s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.badge}
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s" }}>
                {t.heading}
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                  {t.headingHighlight}
                </span>
              </h1>

              <p className="fade-up mt-6 text-lg text-white/35 max-w-md leading-relaxed"
                style={{ animationDelay: "0.3s" }}>
                {t.subheading}
              </p>

              <div className={`fade-up mt-8 flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.4s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-emerald-400 to-green-400 rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Features */}
              <div className={`fade-up mt-10 grid grid-cols-2 gap-3 ${isAr ? "text-right" : ""}`}
                style={{ animationDelay: "0.5s" }}>
                {t.features.map((feat, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm text-white/25 ${isAr ? "flex-row-reverse" : ""}`}>
                    <span className="w-1 h-1 rounded-full bg-emerald-500/50" />
                    {feat}
                  </div>
                ))}
              </div>

              {/* Promo code */}
              <div className="fade-up mt-6 px-4 py-2.5 rounded-lg border border-emerald-500/10 bg-emerald-500/5 inline-block"
                style={{ animationDelay: "0.6s" }}>
                <span className="text-xs text-emerald-300/60">{t.promoCode}</span>
              </div>
            </div>

            {/* Giant price tag */}
            <div className={`relative flex justify-center ${isAr ? "lg:order-1" : "lg:order-2"}`}>
              {/* String/ribbon from top */}
              <svg className="absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-16 z-10" viewBox="0 0 100 80">
                <path d="M50,0 Q55,30 50,60" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="3" />
                <circle cx="50" cy="0" r="5" fill="rgba(16,185,129,0.2)" />
              </svg>

              <div className="relative"
                style={{
                  animation: "tagDrop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both",
                }}>
                <div style={{
                  transformOrigin: "top center",
                  animation: "tagSwing 5s ease-in-out infinite",
                }}>
                  {/* Tag shape */}
                  <div className="relative w-64 sm:w-72 bg-white/[0.04] border-2 border-emerald-500/20 rounded-2xl overflow-hidden"
                    style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
                    {/* Hole at top */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-emerald-500/20 bg-[#071209]" />

                    {/* Tag content */}
                    <div className="pt-14 pb-8 px-6 text-center">
                      <div className="text-xs text-white/20 uppercase tracking-wider mb-2">{t.tag.sku}</div>
                      <div className="text-base font-semibold text-white/70 mb-4">{t.tag.productName}</div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mb-4" />

                      {/* Original price (struck through) */}
                      <div className="text-lg text-white/20 line-through mb-1">{t.tag.originalPrice}</div>

                      {/* Sale price */}
                      <div className="text-5xl font-black text-emerald-400 mb-2"
                        style={{ animation: "priceFlash 3s ease-in-out infinite" }}>
                        {t.tag.salePrice}
                      </div>

                      {/* Savings badge */}
                      <div className="inline-flex px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-sm font-bold text-emerald-300 mb-4"
                        style={{ animation: "savingsBounce 2s ease-in-out infinite" }}>
                        {t.tag.savings}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center justify-center gap-2 text-xs text-white/30">
                        <span className="text-yellow-400">{"*".repeat(5)}</span>
                        <span>{t.tag.rating}</span>
                        <span className="text-white/15">({t.tag.reviews})</span>
                      </div>
                    </div>

                    {/* Perforated tear line */}
                    <div className="border-t-2 border-dashed border-white/[0.08] mx-4" />
                    <div className="py-3 text-center">
                      <span className="text-[9px] text-white/15 uppercase tracking-widest">Tear Here</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
