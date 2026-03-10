"use client";

import { ArrowRight, ShoppingBag, Star, Truck, Shield } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "New Collection 2026",
    heading: "Discover Your",
    headingHighlight: "Perfect Style",
    subheading: "Curated collections that define modern elegance. Free shipping on orders over $99.",
    ctaPrimary: "Shop Now",
    ctaSecondary: "View Lookbook",
    product: {
      name: "Premium Leather Bag",
      price: "$249",
      originalPrice: "$349",
      rating: "4.9",
      reviews: "2.3K",
      tag: "Bestseller",
    },
    perks: [
      { icon: "truck", label: "Free Shipping" },
      { icon: "shield", label: "2-Year Warranty" },
    ],
    brands: ["Zara", "H&M", "Nike", "Adidas", "Gucci"],
  },
  ar: {
    badge: "مجموعة جديدة 2026",
    heading: "اكتشف",
    headingHighlight: "أسلوبك المثالي",
    subheading: "مجموعات منتقاة تحدد الأناقة العصرية. شحن مجاني للطلبات فوق 99$.",
    ctaPrimary: "تسوق الآن",
    ctaSecondary: "تصفح المجموعة",
    product: {
      name: "حقيبة جلدية فاخرة",
      price: "$249",
      originalPrice: "$349",
      rating: "4.9",
      reviews: "2.3K",
      tag: "الأكثر مبيعاً",
    },
    perks: [
      { icon: "truck", label: "شحن مجاني" },
      { icon: "shield", label: "ضمان سنتين" },
    ],
    brands: ["زارا", "اتش اند ام", "نايك", "أديداس", "غوتشي"],
  },
};

const perkIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  truck: Truck,
  shield: Shield,
};

export function EcommerceShowcase({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .float { animation: float 4s ease-in-out infinite; }
        .scroll-x { animation: scrollX 20s linear infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            {/* Text side */}
            <div className={isAr ? "lg:order-2 text-right" : ""}>
              <div
                className={`fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-8 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                <ShoppingBag size={14} />
                {t.badge}
              </div>

              <h1
                className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s" }}
              >
                {t.heading}
                <br />
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  {t.headingHighlight}
                </span>
              </h1>

              <p
                className="fade-up mt-6 text-lg text-gray-500 leading-relaxed max-w-md"
                style={{ animationDelay: "0.3s" }}
              >
                {t.subheading}
              </p>

              <div
                className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
                >
                  <ShoppingBag size={16} />
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:border-gray-400 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Perks */}
              <div
                className={`fade-up mt-8 flex gap-6 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.5s" }}
              >
                {t.perks.map((perk, i) => {
                  const Icon = perkIcons[perk.icon] || Truck;
                  return (
                    <div key={i} className={`flex items-center gap-2 text-sm text-gray-500 ${isAr ? "flex-row-reverse" : ""}`}>
                      <Icon size={16} className="text-emerald-500" />
                      {perk.label}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Product card side */}
            <div className={`relative flex items-center justify-center ${isAr ? "lg:order-1" : ""}`}>
              <div className="fade-up float relative" style={{ animationDelay: "0.3s" }}>
                {/* Product image placeholder */}
                <div className="w-72 h-80 sm:w-80 sm:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <ShoppingBag size={48} className="text-gray-300" />
                </div>

                {/* Price badge */}
                <div className="absolute -top-3 -right-3 bg-white shadow-lg rounded-xl px-4 py-2 border border-gray-100">
                  <span className="text-lg font-bold text-gray-900">{t.product.price}</span>
                  <span className="ml-2 text-sm text-gray-400 line-through">{t.product.originalPrice}</span>
                </div>

                {/* Rating badge */}
                <div className={`absolute -bottom-3 ${isAr ? "-right-3" : "-left-3"} bg-white shadow-lg rounded-xl px-4 py-2 border border-gray-100 flex items-center gap-1.5`}>
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-bold text-gray-900">{t.product.rating}</span>
                  <span className="text-xs text-gray-400">({t.product.reviews})</span>
                </div>

                {/* Bestseller tag */}
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {t.product.tag}
                </div>
              </div>
            </div>
          </div>

          {/* Brand logos scroll */}
          <div className="fade-up mt-16 overflow-hidden" style={{ animationDelay: "0.6s" }}>
            <p className="text-xs text-gray-400 text-center uppercase tracking-widest mb-4">
              {isAr ? "علامات تجارية مميزة" : "Featured Brands"}
            </p>
            <div className="overflow-hidden">
              <div className="scroll-x flex gap-12 w-max">
                {[...t.brands, ...t.brands].map((brand, i) => (
                  <div key={i} className="text-lg font-bold text-gray-200 whitespace-nowrap">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
