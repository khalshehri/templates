"use client";

import { useState, useEffect } from "react";
import { Scale } from "lucide-react";

interface Hero08Props {
  language: "en" | "ar";
}

const content = {
  en: {
    label: "EST. 1987",
    heading: "Justice. Integrity. Results.",
    sub: "Riyadh's premier law firm — 35 years of courtroom excellence and unwavering commitment to our clients.",
    cta: "Discuss Your Case →",
    practiceAreas: [
      "Corporate & Commercial",
      "Litigation & Arbitration",
      "Real Estate & Development",
      "Intellectual Property",
      "Banking & Finance",
    ],
  },
  ar: {
    label: "تأسست 1987",
    heading: "عدالة. نزاهة. نتائج.",
    sub: "شركة المحاماة الرائدة في الرياض — 35 عاماً من التميز القضائي والالتزام الراسخ بعملائنا.",
    cta: "ناقش قضيتك →",
    practiceAreas: [
      "الشركات والتجارة",
      "التقاضي والتحكيم",
      "العقارات والتطوير",
      "الملكية الفكرية",
      "البنوك والتمويل",
    ],
  },
};

export function Hero08({ language }: Hero08Props) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hero08-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes hero08-lineGrow {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes hero08-fadeUp {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero08-shimmer, .hero08-line, .hero08-fade {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="relative overflow-hidden"
        style={{
          background: "#faf9f6",
          minHeight: "80vh",
          fontFamily: isAr ? "var(--font-almarai)" : "var(--font-inter)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div
            className={`flex flex-col gap-12 lg:gap-20 ${
              isAr
                ? "lg:flex-row-reverse"
                : "lg:flex-row"
            }`}
          >
            {/* Left — Photo rectangle (40%) */}
            <div className="w-full lg:w-[40%] flex-shrink-0">
              <div
                className="hero08-shimmer w-full rounded-xl"
                style={{
                  aspectRatio: "3 / 4",
                  background:
                    "linear-gradient(135deg, #d4c5a9 0%, #c4b396 25%, #b8a88a 50%, #a69880 75%, #c4b396 100%)",
                  backgroundSize: "200% 100%",
                  animation: "hero08-shimmer 6s ease-in-out infinite",
                }}
              />
            </div>

            {/* Right — Text content (60%) */}
            <div className="w-full lg:w-[60%] flex flex-col justify-center space-y-8">
              {/* Label */}
              <div
                className="hero08-fade flex items-center gap-3"
                style={{
                  opacity: mounted ? 1 : 0,
                  animation: mounted
                    ? "hero08-fadeUp 0.6s ease-out forwards"
                    : "none",
                }}
              >
                <Scale className="w-4 h-4" style={{ color: "#b8860b" }} />
                <span
                  className="text-xs font-medium tracking-[0.2em] uppercase"
                  style={{ color: "#b8860b" }}
                >
                  {t.label}
                </span>
              </div>

              {/* Heading */}
              <h1
                className="hero08-fade leading-[1.1]"
                style={{
                  fontFamily: "var(--font-el-messiri)",
                  fontWeight: 400,
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  color: "#111111",
                  opacity: mounted ? 1 : 0,
                  animation: mounted
                    ? "hero08-fadeUp 0.6s ease-out 0.15s forwards"
                    : "none",
                  animationFillMode: "backwards",
                }}
              >
                {t.heading}
              </h1>

              {/* Gold line */}
              <div
                className="hero08-line"
                style={{
                  width: "100px",
                  height: "2px",
                  background: "#b8860b",
                  transformOrigin: isAr ? "right" : "left",
                  transform: mounted ? "scaleX(1)" : "scaleX(0)",
                  animation: mounted
                    ? "hero08-lineGrow 0.8s ease-out 0.3s forwards"
                    : "none",
                  animationFillMode: "backwards",
                }}
              />

              {/* Subtitle */}
              <p
                className="hero08-fade text-base lg:text-lg max-w-md leading-relaxed"
                style={{
                  color: "#8b8680",
                  opacity: mounted ? 1 : 0,
                  animation: mounted
                    ? "hero08-fadeUp 0.6s ease-out 0.4s forwards"
                    : "none",
                  animationFillMode: "backwards",
                }}
              >
                {t.sub}
              </p>

              {/* CTA — text link style */}
              <div
                className="hero08-fade"
                style={{
                  opacity: mounted ? 1 : 0,
                  animation: mounted
                    ? "hero08-fadeUp 0.6s ease-out 0.5s forwards"
                    : "none",
                  animationFillMode: "backwards",
                }}
              >
                <button
                  className="cursor-pointer text-base font-medium transition-all hover:underline underline-offset-4"
                  style={{
                    color: "#b8860b",
                    background: "none",
                    border: "none",
                    padding: 0,
                  }}
                >
                  {t.cta}
                </button>
              </div>

              {/* Practice areas */}
              <div
                className="hero08-fade space-y-3 pt-4"
                style={{
                  opacity: mounted ? 1 : 0,
                  animation: mounted
                    ? "hero08-fadeUp 0.6s ease-out 0.6s forwards"
                    : "none",
                  animationFillMode: "backwards",
                }}
              >
                {t.practiceAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "#b8860b" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "#111111" }}
                    >
                      {area}
                    </span>
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
