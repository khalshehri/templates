"use client";

/**
 * Service Map Pin Hero
 * Large pulsing map pin dominating center, content radiates outward from pin.
 * Location-focused layout with warm orange palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Find Us Nearby",
    heading: "We're Right",
    headingLine2: "Around the Corner",
    subheading: "Conveniently located in the heart of the city. Easy to find, easier to love.",
    cta: "Get Directions",
    ctaSecondary: "Call Us",
    address: "123 Main Street, Downtown",
    city: "Riyadh, Saudi Arabia",
    distance: "0.5 km away",
    landmarks: [
      { name: "Central Mall", dir: "NW", dist: "200m" },
      { name: "Metro Station", dir: "SE", dist: "150m" },
      { name: "City Park", dir: "NE", dist: "300m" },
      { name: "Main Hospital", dir: "SW", dist: "500m" },
    ],
  },
  ar: {
    badge: "اعثر علينا بالقرب",
    heading: "نحن هنا",
    headingLine2: "قريبون منك",
    subheading: "موقع مميز في قلب المدينة. سهل الوصول، أسهل في الحب.",
    cta: "احصل على الاتجاهات",
    ctaSecondary: "اتصل بنا",
    address: "١٢٣ شارع الرئيسي، وسط المدينة",
    city: "الرياض، المملكة العربية السعودية",
    distance: "٠.٥ كم",
    landmarks: [
      { name: "المول المركزي", dir: "شمال غرب", dist: "٢٠٠م" },
      { name: "محطة المترو", dir: "جنوب شرق", dist: "١٥٠م" },
      { name: "حديقة المدينة", dir: "شمال شرق", dist: "٣٠٠م" },
      { name: "المستشفى الرئيسي", dir: "جنوب غرب", dist: "٥٠٠م" },
    ],
  },
};

export function ServiceMapPin({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes pinBounce {
          0%, 100% { transform: translateY(0); }
          30% { transform: translateY(-20px); }
          50% { transform: translateY(0); }
          70% { transform: translateY(-8px); }
        }
        @keyframes pinShadowPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          30% { transform: scale(0.6); opacity: 0.5; }
          50% { transform: scale(1); opacity: 0.3; }
          70% { transform: scale(0.85); opacity: 0.4; }
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.1; }
        }
        @keyframes landmarkAppear {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes dashFlow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -20; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .landmark-appear { animation: landmarkAppear 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #fffbf5 0%, #fff7ed 60%, #fed7aa 100%)" }}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "gridPulse 4s ease-in-out infinite",
          }}
        />

        {/* Streets overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#f97316" strokeWidth="8" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#f97316" strokeWidth="8" />
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#f97316" strokeWidth="3" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#f97316" strokeWidth="3" />
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#f97316" strokeWidth="3" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#f97316" strokeWidth="3" />
        </svg>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="flex flex-col items-center">
            {/* Map pin center piece */}
            <div className="relative mb-16">
              {/* Ripple rings */}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-orange-400"
                  style={{ animation: `ripple 3s ease-out ${i * 1}s infinite` }}
                />
              ))}

              {/* Pin shadow */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-orange-900/20"
                style={{ filter: "blur(4px)", animation: "pinShadowPulse 2s ease-in-out infinite" }}
              />

              {/* The pin */}
              <div style={{ animation: "pinBounce 2s ease-in-out infinite" }}>
                <div className="relative">
                  {/* Pin body */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #f97316, #ea580c)",
                      boxShadow: "0 12px 40px rgba(249, 115, 22, 0.4)",
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/90" />
                  </div>
                  {/* Pin point */}
                  <div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0"
                    style={{
                      borderLeft: "12px solid transparent",
                      borderRight: "12px solid transparent",
                      borderTop: "20px solid #ea580c",
                    }}
                  />
                </div>
              </div>

              {/* Landmark indicators radiating out */}
              {t.landmarks.map((lm, i) => {
                const positions = [
                  { top: "-60px", left: "-180px" },
                  { top: "-60px", right: "-180px" },
                  { bottom: "-40px", left: "-180px" },
                  { bottom: "-40px", right: "-180px" },
                ];
                const pos = positions[i];
                return (
                  <div
                    key={i}
                    className="landmark-appear absolute hidden sm:flex items-center gap-2"
                    style={{ ...pos, animationDelay: `${0.8 + i * 0.15}s` } as React.CSSProperties}
                  >
                    <div
                      className="px-3 py-2 rounded-xl text-xs whitespace-nowrap"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                        border: "1px solid rgba(249, 115, 22, 0.1)",
                      }}
                    >
                      <span className="font-semibold text-gray-700">{lm.name}</span>
                      <span className="text-gray-400 ml-2">{lm.dist}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Content below pin */}
            <div className="text-center max-w-2xl">
              <div
                className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{
                  animationDelay: "0.3s",
                  background: "rgba(249, 115, 22, 0.1)",
                  color: "#c2410c",
                  border: "1px solid rgba(249, 115, 22, 0.15)",
                }}
              >
                {t.badge}
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]" style={{ animationDelay: "0.4s" }}>
                <span className="block text-gray-900">{t.heading}</span>
                <span
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t.headingLine2}
                </span>
              </h1>

              <p className="fade-up mt-5 text-gray-500 leading-relaxed" style={{ animationDelay: "0.5s" }}>
                {t.subheading}
              </p>

              {/* Address card */}
              <div
                className="fade-up mt-8 inline-block px-6 py-4 rounded-2xl"
                style={{
                  animationDelay: "0.6s",
                  background: "rgba(255,255,255,0.8)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(249, 115, 22, 0.08)",
                }}
              >
                <p className="text-sm font-bold text-gray-800">{t.address}</p>
                <p className="text-xs text-gray-400 mt-1">{t.city}</p>
                <p className="text-xs text-orange-600 font-semibold mt-1">{t.distance}</p>
              </div>

              <div className={`fade-up mt-8 flex gap-4 justify-center ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.7s" }}>
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-2xl transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    boxShadow: "0 8px 24px rgba(249, 115, 22, 0.3)",
                  }}
                >
                  {t.cta}
                  <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-gray-500 rounded-2xl border border-gray-200 bg-white/60 hover:border-gray-400 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
