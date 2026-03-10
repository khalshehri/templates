"use client";

/**
 * Brick Oven Hero
 * Brick oven with warm glow emanating. Pizzeria/bakery warmth.
 * Rustic feel with flickering firelight and artisan baking aesthetic.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Wood-Fired",
    heading: "Baked with",
    headingHighlight: "Soul & Fire",
    subheading:
      "Handcrafted in our 900°F brick oven. Neapolitan traditions meet modern artistry. Every pizza, a masterpiece.",
    ctaPrimary: "Order Now",
    ctaSecondary: "Our Story",
    menu: [
      { name: "Margherita", desc: "San Marzano, Fior di Latte, Basil", price: "$18" },
      { name: "Diavola", desc: "Spicy Salami, Chili, Honey", price: "$22" },
      { name: "Truffle Bianca", desc: "Truffle Cream, Mushroom, Pecorino", price: "$28" },
    ],
    temp: "900°F",
    tempLabel: "Oven Temperature",
    features: ["Hand-Stretched Dough", "48hr Fermentation", "Imported Ingredients", "90-Second Cook"],
  },
  ar: {
    badge: "حطب طبيعي",
    heading: "مخبوز",
    headingHighlight: "بالروح والنار",
    subheading:
      "مصنوع يدوياً في فرننا الحجري بدرجة 900°F. تقاليد نابولي تلتقي بالفن الحديث. كل بيتزا، تحفة فنية.",
    ctaPrimary: "اطلب الآن",
    ctaSecondary: "قصتنا",
    menu: [
      { name: "مارغريتا", desc: "سان مارزانو، فيور دي لاتيه، ريحان", price: "$18" },
      { name: "ديافولا", desc: "سلامي حار، فلفل، عسل", price: "$22" },
      { name: "بيانكا بالكمأة", desc: "كريمة كمأة، فطر، بيكورينو", price: "$28" },
    ],
    temp: "°900F",
    tempLabel: "حرارة الفرن",
    features: ["عجينة يدوية", "تخمير 48 ساعة", "مكونات مستوردة", "طهي 90 ثانية"],
  },
};

export function RestaurantOven({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fireFlicker {
          0%, 100% { opacity: 0.4; transform: scaleY(1) scaleX(1); }
          25% { opacity: 0.7; transform: scaleY(1.1) scaleX(0.95); }
          50% { opacity: 0.5; transform: scaleY(0.95) scaleX(1.05); }
          75% { opacity: 0.8; transform: scaleY(1.05) scaleX(0.98); }
        }
        @keyframes ovenGlow {
          0%, 100% { box-shadow: 0 0 60px rgba(234,88,12,0.1), inset 0 0 40px rgba(234,88,12,0.05); }
          50% { box-shadow: 0 0 80px rgba(234,88,12,0.2), inset 0 0 60px rgba(234,88,12,0.1); }
        }
        @keyframes heatWave {
          0% { transform: translateY(0) scaleX(1); opacity: 0.1; }
          50% { transform: translateY(-10px) scaleX(1.1); opacity: 0.05; }
          100% { transform: translateY(-20px) scaleX(0.9); opacity: 0; }
        }
        @keyframes tempPulse {
          0%, 100% { text-shadow: 0 0 10px rgba(234,88,12,0.3); }
          50% { text-shadow: 0 0 20px rgba(234,88,12,0.6); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0806]">
        {/* Warm radial glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse at bottom, rgba(234,88,12,0.2) 0%, rgba(245,158,11,0.05) 50%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
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

          {/* Oven visualization */}
          <div className="fade-up flex justify-center mb-10" style={{ animationDelay: "0.6s" }}>
            <div className="relative w-72 sm:w-80">
              {/* Heat waves above oven */}
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="absolute -top-4 rounded-full bg-orange-500/5"
                  style={{
                    left: `${25 + i * 15}%`,
                    width: "30px",
                    height: "8px",
                    animation: `heatWave ${2 + i * 0.3}s ease-out ${i * 0.4}s infinite`,
                  }} />
              ))}

              {/* Oven arch */}
              <div className="relative rounded-t-[50%] overflow-hidden border-t-2 border-l-2 border-r-2 border-orange-900/30"
                style={{ animation: "ovenGlow 3s ease-in-out infinite" }}>
                {/* Brick pattern */}
                <div className="absolute inset-0 opacity-[0.1]" style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(120,53,15,0.3) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(120,53,15,0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 12px",
                }} />

                {/* Oven interior */}
                <div className="relative bg-gradient-to-b from-orange-950/40 via-red-950/30 to-orange-950/50 py-16 sm:py-20 px-8">
                  {/* Fire flames */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end gap-1">
                    {Array.from({ length: 7 }).map((_, i) => {
                      const heights = [30, 45, 25, 50, 35, 40, 28];
                      return (
                        <div key={i} className="rounded-t-full"
                          style={{
                            width: `${8 + (i % 3) * 3}px`,
                            height: `${heights[i]}px`,
                            background: `linear-gradient(to top, rgba(234,88,12,0.4), rgba(245,158,11,0.2), transparent)`,
                            transformOrigin: "bottom center",
                            animation: `fireFlicker ${0.8 + i * 0.2}s ease-in-out ${i * 0.1}s infinite`,
                          }} />
                      );
                    })}
                  </div>

                  {/* Temperature display */}
                  <div className="relative text-center">
                    <div className="text-5xl sm:text-6xl font-black text-orange-400/60"
                      style={{ animation: "tempPulse 2s ease-in-out infinite" }}>
                      {t.temp}
                    </div>
                    <div className="text-[10px] text-orange-300/30 uppercase tracking-widest mt-1">{t.tempLabel}</div>
                  </div>
                </div>
              </div>

              {/* Oven base */}
              <div className="h-4 bg-gradient-to-b from-orange-900/20 to-orange-950/30 border-x-2 border-b-2 border-orange-900/30 rounded-b-lg" />
              {/* Oven shelf */}
              <div className="h-2 bg-orange-900/15 rounded-b-sm mx-4" />
            </div>
          </div>

          {/* Menu items */}
          <div className="fade-up grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto"
            style={{ animationDelay: "0.8s" }}>
            {t.menu.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-orange-500/10 text-center">
                <div className="text-sm font-semibold text-white/60 mb-1">{item.name}</div>
                <div className="text-[10px] text-white/20 mb-2">{item.desc}</div>
                <div className="text-lg font-bold text-orange-400/60">{item.price}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="fade-up mt-8 flex items-center justify-center gap-6 flex-wrap"
            style={{ animationDelay: "1s" }}>
            {t.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/20">
                <span className="w-1 h-1 rounded-full bg-orange-500/40" />
                {feat}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
