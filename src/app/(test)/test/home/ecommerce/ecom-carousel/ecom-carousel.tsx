"use client";

/**
 * Product Carousel Hero
 * Central product cards in a carousel/slider layout with navigation dots.
 * Stacked card design with the active card elevated, side cards peeking.
 * Browsing experience feel with swipe indicators.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Curated For You",
    heading: "Discover",
    headingHighlight: "What's New",
    subheading:
      "Hand-picked products updated daily. Swipe through our latest collection and find your next favorite item.",
    ctaPrimary: "Explore All",
    ctaSecondary: "Categories",
    products: [
      { name: "Minimal Watch", price: "$249", category: "Accessories", color: "from-emerald-600/20 to-emerald-800/10" },
      { name: "Canvas Sneakers", price: "$129", category: "Footwear", color: "from-green-600/20 to-green-800/10" },
      { name: "Leather Bag", price: "$189", category: "Bags", color: "from-teal-600/20 to-teal-800/10" },
      { name: "Silk Scarf", price: "$79", category: "Fashion", color: "from-emerald-500/20 to-emerald-700/10" },
      { name: "Sunglasses", price: "$159", category: "Eyewear", color: "from-green-500/20 to-green-700/10" },
    ],
    swipeHint: "Swipe to explore",
    newBadge: "NEW",
  },
  ar: {
    badge: "مختارة لك",
    heading: "اكتشف",
    headingHighlight: "الجديد",
    subheading:
      "منتجات مختارة بعناية يومياً. تصفح مجموعتنا الأحدث واعثر على قطعتك المفضلة القادمة.",
    ctaPrimary: "استكشف الكل",
    ctaSecondary: "الفئات",
    products: [
      { name: "ساعة بسيطة", price: "$249", category: "إكسسوارات", color: "from-emerald-600/20 to-emerald-800/10" },
      { name: "حذاء قماشي", price: "$129", category: "أحذية", color: "from-green-600/20 to-green-800/10" },
      { name: "حقيبة جلدية", price: "$189", category: "حقائب", color: "from-teal-600/20 to-teal-800/10" },
      { name: "وشاح حريري", price: "$79", category: "أزياء", color: "from-emerald-500/20 to-emerald-700/10" },
      { name: "نظارة شمسية", price: "$159", category: "نظارات", color: "from-green-500/20 to-green-700/10" },
    ],
    swipeHint: "اسحب للاستكشاف",
    newBadge: "جديد",
  },
};

export function EcomCarousel({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardStack {
          from { opacity: 0; transform: translateX(var(--offset)) scale(var(--from-scale)); }
          to { opacity: 1; transform: translateX(0) scale(var(--to-scale)); }
        }
        @keyframes slideHint {
          0%, 100% { transform: translateX(0); opacity: 0.5; }
          50% { transform: translateX(10px); opacity: 1; }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#071209]">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-emerald-950/20 to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
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

            <div className="fade-up mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.4s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-emerald-400 to-green-400 rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Carousel cards */}
          <div className="fade-up relative flex items-center justify-center gap-4 sm:gap-6 overflow-hidden py-8" style={{ animationDelay: "0.6s" }}>
            {t.products.map((product, i) => {
              const isCenter = i === 2;
              const distance = Math.abs(i - 2);
              const scale = isCenter ? 1 : 1 - distance * 0.08;
              const opacity = isCenter ? 1 : 1 - distance * 0.25;
              const zIndex = 5 - distance;

              return (
                <div key={i}
                  className={`relative flex-shrink-0 w-48 sm:w-56 rounded-2xl border overflow-hidden transition-all ${
                    isCenter ? "border-emerald-500/30" : "border-white/[0.06]"
                  }`}
                  style={{
                    // @ts-expect-error CSS custom properties
                    "--offset": `${(i - 2) * 20}px`,
                    "--from-scale": `${scale - 0.1}`,
                    "--to-scale": `${scale}`,
                    transform: `scale(${scale})`,
                    opacity,
                    zIndex,
                    animation: `cardStack 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${0.5 + i * 0.1}s both`,
                    boxShadow: isCenter ? "0 20px 60px rgba(16,185,129,0.15)" : "none",
                  }}>
                  {/* Product image placeholder */}
                  <div className={`h-48 sm:h-56 bg-gradient-to-br ${product.color} relative`}>
                    {/* Product silhouette circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/[0.05] border border-white/[0.08]" />
                    </div>
                    {isCenter && (
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-500/30 text-emerald-300 border border-emerald-500/20">
                        {t.newBadge}
                      </div>
                    )}
                  </div>
                  {/* Product info */}
                  <div className="p-4 bg-white/[0.02]">
                    <div className="text-[10px] text-emerald-400/50 uppercase tracking-wider mb-1">{product.category}</div>
                    <div className="text-sm font-semibold text-white/80">{product.name}</div>
                    <div className="text-lg font-bold text-emerald-300 mt-1">{product.price}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation dots */}
          <div className="fade-up flex items-center justify-center gap-2 mt-6" style={{ animationDelay: "0.9s" }}>
            {t.products.map((_, i) => (
              <div key={i}
                className={`rounded-full transition-all ${i === 2 ? "w-6 h-2 bg-emerald-400" : "w-2 h-2 bg-white/15"}`}
                style={i === 2 ? { animation: "dotPulse 2s ease-in-out infinite" } : {}} />
            ))}
          </div>

          {/* Swipe hint */}
          <div className="fade-up flex items-center justify-center gap-2 mt-4" style={{ animationDelay: "1s" }}>
            <span className="text-xs text-white/15">{t.swipeHint}</span>
            <span style={{ animation: "slideHint 2s ease-in-out infinite" }} className="text-white/15">→</span>
          </div>
        </div>
      </section>
    </>
  );
}
