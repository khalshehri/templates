"use client";

import { useState, useEffect, useRef } from "react";
import { Scale, ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "EST. 1987",
    heading: "Justice. Integrity.",
    accent: "Results.",
    sub: "Riyadh's premier law firm — 35+ years of courtroom excellence.",
    cta: "Discuss Your Case",
    areas: ["Corporate Law", "Litigation", "Real Estate", "Arbitration", "IP Law"],
  },
  ar: {
    badge: "تأسست 1987",
    heading: "عدالة. نزاهة.",
    accent: "نتائج.",
    sub: "شركة المحاماة الرائدة في الرياض — خبرة تزيد عن 35 عاماً.",
    cta: "ناقش قضيتك",
    areas: ["قانون الشركات", "التقاضي", "العقارات", "التحكيم", "الملكية الفكرية"],
  },
};

export function Hero09({ language }: { language: "en" | "ar" }) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hero09FadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero09UnderlineIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes hero09LineExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes hero09FadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero09-animate { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#111115" }}
      >
        {/* Subtle ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 40% 35% at 50% 50%, rgba(226, 184, 87, 0.03) 0%, transparent 70%)",
          }}
        />

        <div className="relative w-full max-w-6xl mx-auto px-6 py-24 sm:py-32 lg:py-40">
          {/* Est badge — positioned top corner */}
          <div
            className={`hero09-animate absolute top-8 ${isAr ? "left-8" : "right-8"}`}
            style={{
              animation: mounted ? "hero09FadeIn 600ms cubic-bezier(0.16,1,0.3,1) 200ms both" : "none",
              opacity: mounted ? undefined : 0,
            }}
          >
            <span
              className={`text-xs tracking-[0.25em] font-light ${isAr ? "font-[family-name:var(--font-almarai)]" : "font-[family-name:var(--font-inter)]"}`}
              style={{ color: "#6b6b6b", letterSpacing: isAr ? "0.08em" : "0.25em" }}
            >
              {t.badge}
            </span>
          </div>

          {/* Scale icon */}
          <div
            className="hero09-animate flex justify-center mb-10"
            style={{
              animation: mounted ? "hero09FadeUp 600ms cubic-bezier(0.16,1,0.3,1) forwards" : "none",
              opacity: mounted ? undefined : 0,
            }}
          >
            <Scale size={32} strokeWidth={1} style={{ color: "#e2b857" }} />
          </div>

          {/* Main heading */}
          <div className="text-center">
            <h1
              className="hero09-animate"
              style={{
                animation: mounted ? "hero09FadeUp 600ms cubic-bezier(0.16,1,0.3,1) 200ms both" : "none",
                opacity: mounted ? undefined : 0,
                fontSize: "clamp(2.5rem, 8vw, 7rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#e8e8e8",
                fontFamily: isAr ? "var(--font-el-messiri)" : "var(--font-inter)",
              }}
            >
              {t.heading}
            </h1>

            {/* Accent word with gold underline */}
            <h1
              className="hero09-animate relative inline-block"
              style={{
                animation: mounted ? "hero09FadeUp 600ms cubic-bezier(0.16,1,0.3,1) 400ms both" : "none",
                opacity: mounted ? undefined : 0,
                fontSize: "clamp(2.5rem, 8vw, 7rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#e8e8e8",
                fontFamily: isAr ? "var(--font-el-messiri)" : "var(--font-inter)",
              }}
            >
              {t.accent}
              {/* Gold underline */}
              <span
                className="hero09-animate absolute bottom-[0.05em] left-0 right-0 h-[3px]"
                style={{
                  backgroundColor: "#e2b857",
                  transformOrigin: isAr ? "right" : "left",
                  animation: mounted
                    ? "hero09UnderlineIn 600ms cubic-bezier(0.16,1,0.3,1) 800ms both"
                    : "none",
                  transform: mounted ? undefined : "scaleX(0)",
                }}
              />
            </h1>
          </div>

          {/* Horizontal gold line */}
          <div className="flex justify-center mt-12 mb-10">
            <div
              className="hero09-animate h-px w-32 sm:w-48"
              style={{
                backgroundColor: "rgba(226, 184, 87, 0.3)",
                transformOrigin: "center",
                animation: mounted
                  ? "hero09LineExpand 1200ms cubic-bezier(0.16,1,0.3,1) 600ms both"
                  : "none",
                transform: mounted ? undefined : "scaleX(0)",
              }}
            />
          </div>

          {/* Subtitle */}
          <p
            className={`hero09-animate text-center max-w-2xl mx-auto mb-10 ${isAr ? "font-[family-name:var(--font-almarai)]" : "font-[family-name:var(--font-inter)]"}`}
            style={{
              animation: mounted ? "hero09FadeUp 600ms cubic-bezier(0.16,1,0.3,1) 900ms both" : "none",
              opacity: mounted ? undefined : 0,
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "#6b6b6b",
            }}
          >
            {t.sub}
          </p>

          {/* CTA — minimal text link */}
          <div
            className="hero09-animate flex justify-center mb-16"
            style={{
              animation: mounted ? "hero09FadeUp 600ms cubic-bezier(0.16,1,0.3,1) 1100ms both" : "none",
              opacity: mounted ? undefined : 0,
            }}
          >
            <button
              className={`cursor-pointer group flex items-center gap-3 text-base font-light transition-all duration-500 hover:opacity-70 ${isAr ? "font-[family-name:var(--font-almarai)]" : "font-[family-name:var(--font-inter)]"}`}
              style={{ color: "#e2b857", minHeight: "44px", background: "none", border: "none" }}
            >
              <span>{t.cta}</span>
              <ArrowRight
                size={18}
                strokeWidth={1.5}
                className={`transition-transform duration-500 group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`}
              />
            </button>
          </div>

          {/* Practice Areas */}
          <div className="flex flex-wrap items-center justify-center gap-y-3">
            {t.areas.map((area, i) => (
              <div
                key={area}
                className="hero09-animate flex items-center"
                style={{
                  animation: mounted
                    ? `hero09FadeIn 500ms cubic-bezier(0.16,1,0.3,1) ${1300 + i * 100}ms both`
                    : "none",
                  opacity: mounted ? undefined : 0,
                }}
              >
                {i > 0 && (
                  <span
                    className="mx-4 sm:mx-6 inline-block w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#e2b857", opacity: 0.5 }}
                  />
                )}
                <span
                  className={`text-sm sm:text-base font-light whitespace-nowrap ${isAr ? "font-[family-name:var(--font-almarai)]" : "font-[family-name:var(--font-inter)]"}`}
                  style={{ color: "#6b6b6b", letterSpacing: isAr ? "0" : "0.02em" }}
                >
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
