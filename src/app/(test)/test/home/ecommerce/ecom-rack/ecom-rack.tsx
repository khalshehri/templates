"use client";

/**
 * Display Rack Hero
 * Clothing rack / display shelf with product placeholders.
 * Store display feel with hanging items on a rail, shelved products.
 * Clean retail visual with category labels.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "In-Store Experience",
    heading: "Browse Our",
    headingHighlight: "Collection",
    subheading:
      "Step into our virtual showroom. Each piece is carefully curated and ready to be yours. Premium quality, effortless style.",
    ctaPrimary: "Shop Collection",
    ctaSecondary: "New Arrivals",
    rackItems: [
      { height: 140, width: 45, label: "Blazer", price: "$189" },
      { height: 160, width: 40, label: "Dress", price: "$129" },
      { height: 120, width: 50, label: "Jacket", price: "$219" },
      { height: 150, width: 42, label: "Coat", price: "$249" },
      { height: 130, width: 48, label: "Shirt", price: "$79" },
    ],
    shelfItems: [
      { label: "Shoes", count: "24 styles" },
      { label: "Bags", count: "18 styles" },
      { label: "Accessories", count: "36 styles" },
    ],
    categories: ["Women", "Men", "Kids", "Accessories"],
  },
  ar: {
    badge: "تجربة المتجر",
    heading: "تصفح",
    headingHighlight: "مجموعتنا",
    subheading:
      "ادخل صالة العرض الافتراضية. كل قطعة مختارة بعناية وجاهزة لتكون ملكك. جودة عالية، أناقة بلا مجهود.",
    ctaPrimary: "تسوق المجموعة",
    ctaSecondary: "وصل حديثاً",
    rackItems: [
      { height: 140, width: 45, label: "بليزر", price: "$189" },
      { height: 160, width: 40, label: "فستان", price: "$129" },
      { height: 120, width: 50, label: "جاكيت", price: "$219" },
      { height: 150, width: 42, label: "معطف", price: "$249" },
      { height: 130, width: 48, label: "قميص", price: "$79" },
    ],
    shelfItems: [
      { label: "أحذية", count: "24 نمط" },
      { label: "حقائب", count: "18 نمط" },
      { label: "إكسسوارات", count: "36 نمط" },
    ],
    categories: ["نساء", "رجال", "أطفال", "إكسسوارات"],
  },
};

export function EcomRack({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hangDrop {
          0% { opacity: 0; transform: translateY(-30px) scaleY(0.5); }
          60% { transform: translateY(5px) scaleY(1.02); }
          100% { opacity: 1; transform: translateY(0) scaleY(1); }
        }
        @keyframes swayLight {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        @keyframes shelfSlide {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#071209]">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "radial-gradient(rgba(16,185,129,0.5) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
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

              {/* Category pills */}
              <div className={`fade-up mt-10 flex items-center gap-3 flex-wrap ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.5s" }}>
                {t.categories.map((cat, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full border border-emerald-500/15 bg-emerald-500/5 text-xs text-emerald-300/60 hover:border-emerald-500/30 transition-colors cursor-pointer">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Rack visualization */}
            <div className={`relative ${isAr ? "lg:order-1" : "lg:order-2"}`}>
              <div className="relative mx-auto max-w-sm">
                {/* Rack rail */}
                <div className="relative">
                  <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent rounded-full mb-0" />
                  {/* Support posts */}
                  <div className="absolute -top-16 left-4 w-0.5 h-16 bg-emerald-500/20" />
                  <div className="absolute -top-16 right-4 w-0.5 h-16 bg-emerald-500/20" />
                </div>

                {/* Hanging items */}
                <div className="flex items-start justify-center gap-3 mt-1">
                  {t.rackItems.map((item, i) => (
                    <div key={i} className="flex flex-col items-center"
                      style={{
                        animation: `hangDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.5 + i * 0.12}s both, swayLight ${3 + i * 0.5}s ease-in-out ${1 + i * 0.2}s infinite`,
                        transformOrigin: "top center",
                      }}>
                      {/* Hanger hook */}
                      <div className="w-4 h-4 border-t-2 border-l-2 border-r-2 border-emerald-500/20 rounded-t-full" />
                      {/* Garment silhouette */}
                      <div className="rounded-b-lg bg-gradient-to-b from-emerald-500/[0.08] to-transparent border border-emerald-500/10 border-t-0 flex flex-col items-center justify-end p-2"
                        style={{ width: `${item.width}px`, height: `${item.height}px` }}>
                        <span className="text-[9px] text-white/30 font-medium">{item.label}</span>
                        <span className="text-[10px] text-emerald-400/60 font-bold">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shelf below */}
                <div className="mt-10 border-t border-emerald-500/15 pt-4">
                  <div className="grid grid-cols-3 gap-3">
                    {t.shelfItems.map((shelf, i) => (
                      <div key={i} className="bg-white/[0.02] border border-emerald-500/10 rounded-lg p-3 text-center"
                        style={{ animation: `shelfSlide 0.5s ease-out ${0.9 + i * 0.15}s both` }}>
                        {/* Box silhouette */}
                        <div className="w-10 h-8 mx-auto mb-2 rounded bg-emerald-500/[0.06] border border-emerald-500/10" />
                        <div className="text-[10px] text-white/40 font-medium">{shelf.label}</div>
                        <div className="text-[9px] text-emerald-400/40">{shelf.count}</div>
                      </div>
                    ))}
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
