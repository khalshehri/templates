"use client";

/**
 * Shopping Bag Hero
 * Oversized shopping bag illustration with product tags/labels spilling out.
 * Retail excitement feel with floating discount badges and brand tags.
 * Animated items popping out of the bag with bounce effects.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "New Collection",
    heading: "Fill Your Bag",
    headingHighlight: "With Joy",
    subheading:
      "Discover thousands of products from top brands. Free shipping on orders over $50. Shop the latest trends today.",
    ctaPrimary: "Shop Now",
    ctaSecondary: "View Deals",
    tags: [
      { label: "Summer '25", color: "emerald", x: 15, y: 20, rotate: -12 },
      { label: "-40% OFF", color: "red", x: 78, y: 15, rotate: 8 },
      { label: "Best Seller", color: "amber", x: 10, y: 65, rotate: -5 },
      { label: "New Arrival", color: "blue", x: 82, y: 60, rotate: 10 },
      { label: "Limited", color: "pink", x: 25, y: 85, rotate: -8 },
      { label: "Trending", color: "purple", x: 70, y: 80, rotate: 6 },
    ],
    stats: [
      { value: "10K+", label: "Products" },
      { value: "500+", label: "Brands" },
      { value: "Free", label: "Shipping" },
    ],
  },
  ar: {
    badge: "مجموعة جديدة",
    heading: "املأ حقيبتك",
    headingHighlight: "بالفرح",
    subheading:
      "اكتشف آلاف المنتجات من أفضل العلامات التجارية. شحن مجاني للطلبات فوق $50. تسوق أحدث الصيحات اليوم.",
    ctaPrimary: "تسوق الآن",
    ctaSecondary: "عرض العروض",
    tags: [
      { label: "صيف 2025", color: "emerald", x: 15, y: 20, rotate: -12 },
      { label: "خصم 40%-", color: "red", x: 78, y: 15, rotate: 8 },
      { label: "الأكثر مبيعاً", color: "amber", x: 10, y: 65, rotate: -5 },
      { label: "وصل حديثاً", color: "blue", x: 82, y: 60, rotate: 10 },
      { label: "محدود", color: "pink", x: 25, y: 85, rotate: -8 },
      { label: "رائج", color: "purple", x: 70, y: 80, rotate: 6 },
    ],
    stats: [
      { value: "+10K", label: "منتج" },
      { value: "+500", label: "علامة تجارية" },
      { value: "مجاني", label: "شحن" },
    ],
  },
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: "rgba(16,185,129,0.1)", text: "rgb(52,211,153)", border: "rgba(16,185,129,0.3)" },
  red: { bg: "rgba(239,68,68,0.1)", text: "rgb(248,113,113)", border: "rgba(239,68,68,0.3)" },
  amber: { bg: "rgba(245,158,11,0.1)", text: "rgb(251,191,36)", border: "rgba(245,158,11,0.3)" },
  blue: { bg: "rgba(59,130,246,0.1)", text: "rgb(96,165,250)", border: "rgba(59,130,246,0.3)" },
  pink: { bg: "rgba(236,72,153,0.1)", text: "rgb(244,114,182)", border: "rgba(236,72,153,0.3)" },
  purple: { bg: "rgba(168,85,247,0.1)", text: "rgb(192,132,252)", border: "rgba(168,85,247,0.3)" },
};

export function EcomBag({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tagPop {
          0% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--rotate)) scale(0); }
          60% { transform: translate(-50%, -50%) rotate(var(--rotate)) scale(1.15); }
          100% { opacity: 1; transform: translate(-50%, -50%) rotate(var(--rotate)) scale(1); }
        }
        @keyframes tagFloat {
          0%, 100% { transform: translate(-50%, -50%) rotate(var(--rotate)) translateY(0px); }
          50% { transform: translate(-50%, -50%) rotate(var(--rotate)) translateY(-8px); }
        }
        @keyframes bagBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes handleSwing {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#071209]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(rgba(16,185,129,0.6) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[700px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div className={`${isAr ? "lg:order-2 text-right" : "lg:order-1"}`}>
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

              {/* Stats */}
              <div className={`fade-up mt-10 flex items-center gap-8 ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.5s" }}>
                {t.stats.map((stat, i) => (
                  <div key={i} className={isAr ? "text-right" : ""}>
                    <div className="text-xl font-bold text-emerald-300">{stat.value}</div>
                    <div className="text-xs text-white/20">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bag illustration side */}
            <div className={`relative ${isAr ? "lg:order-1" : "lg:order-2"}`}>
              <div className="relative mx-auto w-72 sm:w-80" style={{ animation: "bagBounce 4s ease-in-out infinite" }}>
                {/* Bag SVG */}
                <svg viewBox="0 0 240 300" className="w-full" style={{ filter: "drop-shadow(0 20px 40px rgba(16,185,129,0.1))" }}>
                  {/* Handle */}
                  <path d="M80 80 Q80 30 120 30 Q160 30 160 80" fill="none"
                    stroke="rgba(16,185,129,0.3)" strokeWidth="6" strokeLinecap="round"
                    style={{ transformOrigin: "120px 55px", animation: "handleSwing 3s ease-in-out infinite" }} />
                  {/* Bag body */}
                  <rect x="40" y="80" width="160" height="200" rx="12"
                    fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)" strokeWidth="2" />
                  {/* Bag fold line */}
                  <line x1="40" y1="110" x2="200" y2="110" stroke="rgba(16,185,129,0.1)" strokeWidth="1" />
                  {/* Brand logo circle */}
                  <circle cx="120" cy="180" r="25" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="1.5" />
                  <text x="120" y="184" textAnchor="middle" fill="rgba(16,185,129,0.3)" fontSize="10" fontWeight="bold">SHOP</text>
                </svg>

                {/* Floating tags */}
                {t.tags.map((tag, i) => {
                  const c = colorMap[tag.color];
                  return (
                    <div key={i} className="absolute"
                      style={{
                        left: `${tag.x}%`,
                        top: `${tag.y}%`,
                        // @ts-expect-error CSS custom property
                        "--rotate": `${tag.rotate}deg`,
                        animation: `tagPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.6 + i * 0.12}s both, tagFloat ${3 + i * 0.5}s ease-in-out ${1.2 + i * 0.2}s infinite`,
                        transform: `translate(-50%, -50%) rotate(${tag.rotate}deg)`,
                      }}>
                      <div className="px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-bold whitespace-nowrap"
                        style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                        {tag.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
