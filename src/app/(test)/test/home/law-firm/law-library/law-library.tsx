/**
 * LawLibrary — Law Firm hero template
 *
 * Library bookshelf rows with books in perspective depth.
 * Dark wood tones, cream/parchment highlights, scholarly atmosphere.
 *
 * @module law-library
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Knowledge Is Power",
    name: "Al-Hakim Legal Group",
    tagline: "Decades of Precedent. Centuries of Wisdom.",
    description:
      "Our legal library runs deep — from corporate governance to intellectual property, we bring scholarly rigor and real-world results to every engagement.",
    cta: "Explore Our Expertise",
    secondary: "Legal Resources",
  },
  ar: {
    badge: "المعرفة قوة",
    name: "مجموعة الحكيم القانونية",
    tagline: "عقود من السوابق. قرون من الحكمة.",
    description:
      "مكتبتنا القانونية عميقة — من حوكمة الشركات إلى الملكية الفكرية، نقدّم دقة علمية ونتائج واقعية في كل التزام.",
    cta: "استكشف خبراتنا",
    secondary: "الموارد القانونية",
  },
};

const bookColors = [
  "#6b1c23", "#1a3a5c", "#3d2b1a", "#1a4a3a", "#4a2040",
  "#8a6a2e", "#2a3a1a", "#5c1a1a", "#1a2a4a", "#3a2a1a",
  "#7a3030", "#2a4a5a", "#4a3a20", "#1a3a2a", "#5a2a4a",
];

export function LawLibrary({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #1a1208 0%, #0f0d08 50%, #1a1208 100%)" }}
    >
      {/* Bookshelf rows — perspective depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: "800px" }}>
        {/* Back shelf row */}
        <div
          className="absolute w-full flex items-end justify-center gap-[3px] px-8"
          style={{
            bottom: "55%",
            transform: "rotateX(5deg) scale(0.7)",
            opacity: 0.25,
            filter: "blur(1px)",
          }}
        >
          {Array.from({ length: 30 }).map((_, i) => {
            const h = 50 + Math.random() * 30;
            const w = 14 + Math.random() * 10;
            return (
              <div
                key={`back-${i}`}
                style={{
                  width: w,
                  height: h,
                  background: bookColors[i % bookColors.length],
                  borderRadius: "2px 2px 0 0",
                  boxShadow: "inset -2px 0 4px rgba(0,0,0,0.3)",
                }}
              />
            );
          })}
        </div>
        {/* Shelf plank back */}
        <div
          className="absolute w-full"
          style={{
            bottom: "53%",
            height: 8,
            background: "linear-gradient(to bottom, #3d2b1a, #2a1d10)",
            transform: "rotateX(5deg) scale(0.7)",
            opacity: 0.25,
          }}
        />

        {/* Middle shelf row */}
        <div
          className="absolute w-full flex items-end justify-center gap-[3px] px-4"
          style={{
            bottom: "30%",
            transform: "rotateX(3deg) scale(0.85)",
            opacity: 0.45,
          }}
        >
          {Array.from({ length: 35 }).map((_, i) => {
            const h = 55 + Math.random() * 35;
            const w = 16 + Math.random() * 12;
            return (
              <div
                key={`mid-${i}`}
                style={{
                  width: w,
                  height: h,
                  background: bookColors[(i + 5) % bookColors.length],
                  borderRadius: "2px 2px 0 0",
                  boxShadow: "inset -2px 0 6px rgba(0,0,0,0.3), 0 -1px 0 rgba(180,140,60,0.1)",
                }}
              />
            );
          })}
        </div>
        {/* Shelf plank middle */}
        <div
          className="absolute w-full"
          style={{
            bottom: "28%",
            height: 10,
            background: "linear-gradient(to bottom, #4a3520, #2a1d10)",
            transform: "rotateX(3deg) scale(0.85)",
            opacity: 0.45,
          }}
        />

        {/* Front shelf row */}
        <div
          className="absolute w-full flex items-end justify-center gap-[4px]"
          style={{ bottom: "5%", opacity: 0.6 }}
        >
          {Array.from({ length: 40 }).map((_, i) => {
            const h = 60 + Math.random() * 40;
            const w = 18 + Math.random() * 14;
            const hasGoldText = Math.random() > 0.6;
            return (
              <div
                key={`front-${i}`}
                className="relative"
                style={{
                  width: w,
                  height: h,
                  background: bookColors[(i + 3) % bookColors.length],
                  borderRadius: "2px 2px 0 0",
                  boxShadow: "inset -3px 0 8px rgba(0,0,0,0.35), 0 -1px 0 rgba(180,140,60,0.15)",
                }}
              >
                {hasGoldText && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{
                      top: "20%",
                      width: 2,
                      height: "40%",
                      background: "rgba(180,140,60,0.3)",
                      borderRadius: 1,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
        {/* Front shelf plank */}
        <div
          className="absolute w-full"
          style={{
            bottom: "3%",
            height: 12,
            background: "linear-gradient(to bottom, #5a4028, #3d2b1a)",
          }}
        />
      </div>

      {/* Warm light overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(180,140,60,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Dust particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              width: 2,
              height: 2,
              background: "rgba(180,140,60,0.2)",
              animation: `dust-float ${6 + Math.random() * 6}s ease-in-out ${Math.random() * 4}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div
          className="inline-block px-4 py-1.5 rounded-full mb-6 text-sm font-medium"
          style={{
            background: "rgba(180,140,60,0.1)",
            border: "1px solid rgba(180,140,60,0.25)",
            color: "#b48c3c",
          }}
        >
          {t.badge}
        </div>

        <h1
          className="font-bold mb-4 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#f5f0e8",
          }}
        >
          {t.name}
        </h1>

        <p className="text-xl md:text-2xl mb-3 font-semibold" style={{ color: "#b48c3c" }}>
          {t.tagline}
        </p>

        <p className="text-lg mb-10 mx-auto max-w-xl leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #b48c3c, #8a6a2e)",
              color: "#1a1208",
              boxShadow: "0 0 25px rgba(180,140,60,0.2)",
            }}
          >
            {isAr ? (
              <>
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                {t.cta}
              </>
            ) : (
              <>
                {t.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          <button
            className="px-8 py-3.5 rounded font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(180,140,60,0.3)",
              color: "#b48c3c",
              background: "rgba(180,140,60,0.05)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes dust-float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.15; }
          25% { transform: translateY(-25px) translateX(8px); opacity: 0.4; }
          50% { transform: translateY(-40px) translateX(-5px); opacity: 0.2; }
          75% { transform: translateY(-20px) translateX(6px); opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}
