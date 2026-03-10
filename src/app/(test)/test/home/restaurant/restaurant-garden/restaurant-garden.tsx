"use client";

/**
 * Outdoor Garden Dining Hero
 * Al fresco dining setting with string lights (CSS dots).
 * Warm evening ambiance with table settings and garden atmosphere.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Al Fresco",
    heading: "Dine Under",
    headingHighlight: "The Stars",
    subheading:
      "Our enchanted garden transforms dining into an experience. Twinkling lights, gentle breeze, and extraordinary cuisine.",
    ctaPrimary: "Reserve Garden Table",
    ctaSecondary: "See Gallery",
    tables: [
      { name: "Garden Suite", seats: "2-4 guests", price: "No minimum" },
      { name: "Terrace Lounge", seats: "4-8 guests", price: "$200 min" },
      { name: "Private Gazebo", seats: "8-12 guests", price: "$500 min" },
    ],
    ambiance: ["String Lights", "Live Acoustic", "Herb Garden", "Fountain View"],
  },
  ar: {
    badge: "في الهواء الطلق",
    heading: "تناول العشاء",
    headingHighlight: "تحت النجوم",
    subheading:
      "حديقتنا الساحرة تحول تناول الطعام إلى تجربة. أضواء متلألئة، نسيم لطيف، ومأكولات استثنائية.",
    ctaPrimary: "حجز طاولة الحديقة",
    ctaSecondary: "معرض الصور",
    tables: [
      { name: "جناح الحديقة", seats: "2-4 ضيوف", price: "بدون حد أدنى" },
      { name: "صالة الشرفة", seats: "4-8 ضيوف", price: "حد أدنى $200" },
      { name: "جازيبو خاص", seats: "8-12 ضيف", price: "حد أدنى $500" },
    ],
    ambiance: ["أضواء معلقة", "موسيقى حية", "حديقة أعشاب", "إطلالة النافورة"],
  },
};

export function RestaurantGarden({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lightTwinkle {
          0%, 100% { opacity: 0.3; filter: blur(0px); }
          50% { opacity: 1; filter: blur(1px); }
        }
        @keyframes lightGlow {
          0%, 100% { box-shadow: 0 0 4px rgba(245,158,11,0.3); }
          50% { box-shadow: 0 0 10px rgba(245,158,11,0.6); }
        }
        @keyframes sway {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(2px) rotate(0.5deg); }
          75% { transform: translateX(-2px) rotate(-0.5deg); }
        }
        @keyframes leafRustle {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080d08]">
        {/* Night sky stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="absolute w-0.5 h-0.5 rounded-full bg-white/20"
            style={{
              left: `${5 + (i * 47) % 90}%`,
              top: `${3 + (i * 31) % 25}%`,
              animation: `lightTwinkle ${3 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`,
            }} />
        ))}

        {/* Warm ambient from below */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-amber-950/10 via-orange-950/5 to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              {t.badge}
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}>
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            <p className="fade-up mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.3s" }}>
              {t.subheading}
            </p>

            <div className="fade-up mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.4s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* String lights scene */}
          <div className="fade-up relative max-w-3xl mx-auto mb-10" style={{ animationDelay: "0.6s" }}>
            <div className="relative rounded-2xl border border-orange-500/10 overflow-hidden bg-gradient-to-b from-[#0a1008] to-[#0d150a] p-8 sm:p-12"
              style={{ minHeight: "220px" }}>
              {/* String light wires */}
              <svg className="absolute top-0 left-0 right-0 h-full w-full" viewBox="0 0 600 200" preserveAspectRatio="none"
                style={{ animation: "sway 6s ease-in-out infinite" }}>
                {/* Wire 1 */}
                <path d="M0,30 Q100,50 200,35 Q300,20 400,40 Q500,55 600,30" fill="none" stroke="rgba(245,158,11,0.1)" strokeWidth="1" />
                {/* Wire 2 */}
                <path d="M0,80 Q150,100 300,75 Q450,55 600,85" fill="none" stroke="rgba(245,158,11,0.08)" strokeWidth="1" />
              </svg>

              {/* String lights (dots) */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="absolute w-2 h-2 rounded-full bg-amber-400/50"
                  style={{
                    left: `${5 + i * 8.3}%`,
                    top: `${15 + Math.sin(i * 0.8) * 10}%`,
                    animation: `lightTwinkle ${2 + (i % 4) * 0.5}s ease-in-out ${i * 0.3}s infinite, lightGlow ${2 + (i % 3) * 0.4}s ease-in-out ${i * 0.2}s infinite`,
                  }} />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={`r2-${i}`} className="absolute w-1.5 h-1.5 rounded-full bg-amber-300/30"
                  style={{
                    left: `${8 + i * 9.5}%`,
                    top: `${38 + Math.sin(i * 0.6) * 8}%`,
                    animation: `lightTwinkle ${2.5 + (i % 3) * 0.4}s ease-in-out ${0.5 + i * 0.25}s infinite`,
                  }} />
              ))}

              {/* Garden table silhouette */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="flex items-end gap-8">
                  {/* Table */}
                  <div className="relative">
                    <div className="w-32 h-2 bg-orange-900/15 rounded-sm" />
                    <div className="w-1 h-12 bg-orange-900/10 mx-auto" />
                    <div className="w-16 h-1 bg-orange-900/10 mx-auto rounded" />
                    {/* Candle on table */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="w-1 h-4 bg-amber-100/10" />
                      <div className="w-2 h-3 rounded-t-full bg-amber-400/20 -mt-1 -ml-0.5"
                        style={{ animation: "lightTwinkle 1.5s ease-in-out infinite" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Foliage edges */}
              <div className="absolute top-0 left-0 w-24 h-32 opacity-20"
                style={{ animation: "leafRustle 5s ease-in-out infinite" }}>
                <svg viewBox="0 0 100 130" className="w-full h-full">
                  <ellipse cx="20" cy="30" rx="25" ry="20" fill="rgba(34,197,94,0.3)" />
                  <ellipse cx="15" cy="60" rx="20" ry="15" fill="rgba(22,163,74,0.2)" />
                  <ellipse cx="25" cy="90" rx="22" ry="18" fill="rgba(34,197,94,0.25)" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-20 h-28 opacity-15"
                style={{ animation: "leafRustle 4s ease-in-out 0.5s infinite" }}>
                <svg viewBox="0 0 80 110" className="w-full h-full">
                  <ellipse cx="60" cy="25" rx="22" ry="18" fill="rgba(34,197,94,0.3)" />
                  <ellipse cx="55" cy="55" rx="18" ry="15" fill="rgba(22,163,74,0.25)" />
                  <ellipse cx="60" cy="85" rx="20" ry="16" fill="rgba(34,197,94,0.2)" />
                </svg>
              </div>
            </div>
          </div>

          {/* Table options */}
          <div className="fade-up grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto"
            style={{ animationDelay: "0.8s" }}>
            {t.tables.map((table, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-orange-500/10 text-center">
                <div className="text-sm font-semibold text-white/60 mb-1">{table.name}</div>
                <div className="text-[10px] text-white/20 mb-1">{table.seats}</div>
                <div className="text-xs text-orange-400/50 font-medium">{table.price}</div>
              </div>
            ))}
          </div>

          {/* Ambiance tags */}
          <div className="fade-up mt-8 flex items-center justify-center gap-6 flex-wrap"
            style={{ animationDelay: "1s" }}>
            {t.ambiance.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/20">
                <span className="w-1 h-1 rounded-full bg-amber-500/40" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
