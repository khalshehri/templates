"use client";

/**
 * Chef Hero
 * Chef hat silhouette with steam rising. Culinary expertise focus.
 * Professional kitchen feel with warm tones and chef-centered design.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Master Chef",
    heading: "Crafted by",
    headingHighlight: "Expert Hands",
    subheading:
      "Award-winning Chef Ahmad brings 20 years of culinary mastery to every dish. A symphony of flavors, crafted with passion.",
    ctaPrimary: "View Menu",
    ctaSecondary: "Chef's Table",
    chefName: "Chef Ahmad Khalil",
    chefTitle: "Executive Chef",
    awards: ["Michelin Star 2024", "Best New Restaurant", "Chef of the Year"],
    specialties: [
      { dish: "Wagyu Tartare", price: "$45" },
      { dish: "Truffle Risotto", price: "$38" },
      { dish: "Lobster Thermidor", price: "$62" },
    ],
    signatureLabel: "Chef's Signature Dishes",
  },
  ar: {
    badge: "الشيف الماهر",
    heading: "صُنع بأيدي",
    headingHighlight: "خبيرة",
    subheading:
      "الشيف الحائز على جوائز أحمد خليل يقدم 20 عاماً من الإتقان في كل طبق. سيمفونية من النكهات، مصنوعة بشغف.",
    ctaPrimary: "عرض القائمة",
    ctaSecondary: "طاولة الشيف",
    chefName: "الشيف أحمد خليل",
    chefTitle: "الشيف التنفيذي",
    awards: ["نجمة ميشلان 2024", "أفضل مطعم جديد", "شيف العام"],
    specialties: [
      { dish: "تارتار واغيو", price: "$45" },
      { dish: "ريزوتو الكمأة", price: "$38" },
      { dish: "لوبستر ثيرميدور", price: "$62" },
    ],
    signatureLabel: "أطباق الشيف المميزة",
  },
};

export function RestaurantChef({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes steamRise {
          0% { opacity: 0; transform: translateY(0) scaleX(1); }
          50% { opacity: 0.3; transform: translateY(-20px) scaleX(1.2); }
          100% { opacity: 0; transform: translateY(-40px) scaleX(0.8); }
        }
        @keyframes hatFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes dishReveal {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0806]">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, rgba(234,88,12,0.15) 0%, rgba(245,158,11,0.05) 50%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className={isAr ? "lg:order-2 text-right" : "lg:order-1"}>
              <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-sm font-medium mb-8"
                style={{ animationDelay: "0.1s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                {t.badge}
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s" }}>
                {t.heading}
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  {t.headingHighlight}
                </span>
              </h1>

              <p className="fade-up mt-6 text-lg text-white/35 max-w-md leading-relaxed"
                style={{ animationDelay: "0.3s" }}>
                {t.subheading}
              </p>

              <div className={`fade-up mt-8 flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.4s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Awards */}
              <div className={`fade-up mt-10 flex items-center gap-3 flex-wrap ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.5s" }}>
                {t.awards.map((award, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full border border-orange-500/15 bg-orange-500/5 text-[10px] text-orange-300/60 font-medium">
                    {award}
                  </span>
                ))}
              </div>
            </div>

            {/* Chef visualization */}
            <div className={`relative flex justify-center ${isAr ? "lg:order-1" : "lg:order-2"}`}>
              <div className="relative" style={{ animation: "hatFloat 4s ease-in-out infinite" }}>
                {/* Steam wisps */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="absolute"
                    style={{
                      left: `${35 + i * 8}%`,
                      top: "5%",
                      width: "8px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.03)",
                      animation: `steamRise ${2 + i * 0.3}s ease-out ${i * 0.5}s infinite`,
                    }} />
                ))}

                <svg viewBox="0 0 200 280" className="w-52 sm:w-64" style={{ filter: "drop-shadow(0 20px 40px rgba(234,88,12,0.1))" }}>
                  {/* Chef hat */}
                  <ellipse cx="100" cy="60" rx="50" ry="45" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  {/* Hat puffs */}
                  <circle cx="70" cy="35" r="20" fill="rgba(255,255,255,0.04)" />
                  <circle cx="100" cy="25" r="22" fill="rgba(255,255,255,0.05)" />
                  <circle cx="130" cy="35" r="20" fill="rgba(255,255,255,0.04)" />
                  {/* Hat band */}
                  <rect x="55" y="80" width="90" height="10" rx="2" fill="rgba(234,88,12,0.15)" stroke="rgba(234,88,12,0.2)" strokeWidth="0.5" />

                  {/* Head silhouette */}
                  <ellipse cx="100" cy="115" rx="32" ry="30" fill="rgba(234,88,12,0.06)" />

                  {/* Body/jacket */}
                  <path d="M60,145 Q60,140 70,135 L100,130 L130,135 Q140,140 140,145 L145,220 L55,220 Z"
                    fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

                  {/* Jacket buttons */}
                  <circle cx="100" cy="160" r="2" fill="rgba(255,255,255,0.1)" />
                  <circle cx="100" cy="175" r="2" fill="rgba(255,255,255,0.1)" />
                  <circle cx="100" cy="190" r="2" fill="rgba(255,255,255,0.1)" />

                  {/* Chef name plate */}
                  <rect x="65" y="240" width="70" height="20" rx="4" fill="rgba(234,88,12,0.08)" stroke="rgba(234,88,12,0.15)" strokeWidth="0.5" />
                  <text x="100" y="253" textAnchor="middle" fill="rgba(234,88,12,0.4)" fontSize="6" fontWeight="bold">{t.chefTitle}</text>
                </svg>

                {/* Chef name below */}
                <div className="text-center mt-4">
                  <div className="text-lg font-bold text-white/60">{t.chefName}</div>
                  <div className="text-xs text-orange-400/40">{t.chefTitle}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Signature dishes */}
          <div className="fade-up mt-14 max-w-2xl mx-auto" style={{ animationDelay: "0.7s" }}>
            <div className="text-[10px] text-orange-400/30 uppercase tracking-widest text-center mb-4">{t.signatureLabel}</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {t.specialties.map((dish, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-orange-500/10"
                  style={{ animation: `dishReveal 0.5s ease-out ${0.8 + i * 0.15}s both` }}>
                  <span className="text-sm text-white/50">{dish.dish}</span>
                  <span className="text-sm font-bold text-orange-400/60">{dish.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
