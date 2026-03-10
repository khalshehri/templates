"use client";

/**
 * Paper Layers Hero
 * Layered paper-cut mountains/waves creating depth.
 * Each layer has a different shade. Content sits on
 * the topmost layer. Warm sunset palette.
 */

import { ArrowRight, Sun } from "lucide-react";

const content = {
  en: {
    heading: ["Layers of", "Imagination"],
    sub: "We peel back complexity to reveal the beauty beneath. Every layer matters. Every detail counts.",
    cta: "Peel It Open",
    cta2: "Our Process",
  },
  ar: {
    heading: ["طبقات من", "الخيال"],
    sub: "نكشف التعقيد لنظهر الجمال الكامن تحته. كل طبقة مهمة. كل تفصيل يُحسب.",
    cta: "اكشف الطبقات",
    cta2: "عمليتنا",
  },
};

const layers = [
  { color: "#1e1b4b", y: "75%", height: "30%" },
  { color: "#312e81", y: "68%", height: "35%" },
  { color: "#3730a3", y: "62%", height: "40%" },
  { color: "#4338ca", y: "57%", height: "45%" },
  { color: "#4f46e5", y: "53%", height: "50%" },
  { color: "#6366f1", y: "50%", height: "55%" },
];

export function PaperLayers({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes layerSlide {
          from { transform: translateY(60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes sunRise {
          from { transform: translate(-50%, 30px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sunPulse {
          0%, 100% { box-shadow: 0 0 60px #fbbf24, 0 0 120px #f59e0b80; }
          50% { box-shadow: 0 0 80px #fbbf24, 0 0 160px #f59e0b80, 0 0 200px #f59e0b40; }
        }
        .layer-slide { animation: layerSlide 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .sun-rise { animation: sunRise 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both; }
        .fade-in { animation: fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden" style={{ background: "linear-gradient(180deg, #fef3c7 0%, #fde68a 30%, #f59e0b 60%, #d97706 80%, #92400e 100%)" }}>
        {/* Sun */}
        <div
          className="sun-rise absolute top-[25%] left-1/2 w-32 h-32 rounded-full"
          style={{
            background: "radial-gradient(circle, #fef3c7, #fbbf24, #f59e0b)",
            animation: "sunRise 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both, sunPulse 4s ease-in-out infinite 1.5s",
          }}
        />

        {/* Mountain layers */}
        {layers.map((layer, i) => (
          <div
            key={i}
            className="layer-slide absolute left-0 right-0"
            style={{
              top: layer.y,
              height: layer.height,
              animationDelay: `${0.2 + i * 0.1}s`,
              zIndex: i + 1,
            }}
          >
            <svg viewBox="0 0 1440 320" className="absolute top-0 w-full" preserveAspectRatio="none" style={{ height: "100px" }}>
              <path
                d={i % 2 === 0
                  ? `M0,${80 + i * 10} C${240 + i * 30},${40 - i * 5} ${480 - i * 20},${100 + i * 8} 720,${60 + i * 12} C${960 + i * 15},${20 + i * 10} ${1200 - i * 10},${90 - i * 5} 1440,${50 + i * 15} L1440,320 L0,320 Z`
                  : `M0,${60 + i * 8} C${300 - i * 20},${90 + i * 5} ${600 + i * 10},${30 - i * 3} 900,${70 + i * 10} C${1100 - i * 15},${100 - i * 8} ${1300 + i * 5},${40 + i * 12} 1440,${60 + i * 7} L1440,320 L0,320 Z`
                }
                fill={layer.color}
              />
            </svg>
            <div className="absolute top-[100px] left-0 right-0 bottom-0" style={{ backgroundColor: layer.color }} />
          </div>
        ))}

        {/* Content — on top of all layers */}
        <div className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-60 text-center">
          <div className="fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-800 text-sm font-medium mb-8 backdrop-blur-sm" style={{ animationDelay: "0.6s" }}>
            <Sun size={14} />
            {isAr ? "صُنع بطبقات" : "Crafted in Layers"}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95]">
            {t.heading.map((line, i) => (
              <span
                key={i}
                className={`fade-in block ${i === 1 ? "text-indigo-200" : "text-white"}`}
                style={{ animationDelay: `${0.7 + i * 0.15}s`, textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="fade-in mt-6 text-lg text-white/60 max-w-md mx-auto" style={{ animationDelay: "1s", textShadow: "0 1px 10px rgba(0,0,0,0.2)" }}>
            {t.sub}
          </p>

          <div className="fade-in mt-8 flex items-center justify-center gap-4" style={{ animationDelay: "1.1s" }}>
            <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-indigo-950 bg-white rounded-2xl hover:bg-amber-50 transition-all hover:-translate-y-1 shadow-xl ${isAr ? "flex-row-reverse" : ""}`}>
              {t.cta}
              <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
            </a>
            <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/70 border border-white/30 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm">
              {t.cta2}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
