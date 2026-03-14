"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const content = {
  en: {
    word1: "THINK",
    word2: "BIGGER",
    subtitle:
      "We don't just scale businesses. We reimagine what scale means.",
    cta: "See our impact",
    cornerTop: "EST. 2001",
    cornerBottom: "GLOBAL REACH",
  },
  ar: {
    word1: "فكّر",
    word2: "أكبر",
    subtitle:
      "لا نكتفي بتوسيع الأعمال. بل نعيد تعريف مفهوم التوسع.",
    cta: "شاهد تأثيرنا",
    cornerTop: "تأسست ٢٠٠١",
    cornerBottom: "انتشار عالمي",
  },
};

export function Hero12({ language }: { language: "en" | "ar" }) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const headingFont = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const bodyFont = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes mono-slide-left {
          0% {
            opacity: 0;
            transform: translateX(-100px);
            letter-spacing: 0.1em;
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            letter-spacing: 0em;
          }
        }
        @keyframes mono-slide-right {
          0% {
            opacity: 0;
            transform: translateX(100px);
            letter-spacing: 0.1em;
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            letter-spacing: 0em;
          }
        }
        @keyframes mono-slide-left-rtl {
          0% {
            opacity: 0;
            transform: translateX(100px);
            letter-spacing: 0.1em;
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            letter-spacing: 0em;
          }
        }
        @keyframes mono-slide-right-rtl {
          0% {
            opacity: 0;
            transform: translateX(-100px);
            letter-spacing: 0.1em;
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            letter-spacing: 0em;
          }
        }
        @keyframes mono-subtitle-in {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes mono-cta-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes mono-corner-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes mono-line-grow {
          0% { height: 0; }
          100% { height: 60px; }
        }
        @keyframes mono-line-grow-h {
          0% { width: 0; }
          100% { width: 40px; }
        }
        .mono-word1-ltr {
          animation: mono-slide-left 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .mono-word2-ltr {
          animation: mono-slide-right 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }
        .mono-word1-rtl {
          animation: mono-slide-left-rtl 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .mono-word2-rtl {
          animation: mono-slide-right-rtl 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }
        .mono-subtitle {
          animation: mono-subtitle-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
          opacity: 0;
        }
        .mono-cta {
          animation: mono-cta-in 0.6s ease 1s forwards;
          opacity: 0;
        }
        .mono-corner-top {
          animation: mono-corner-in 0.6s ease 1.4s forwards;
          opacity: 0;
        }
        .mono-corner-bottom {
          animation: mono-corner-in 0.6s ease 1.6s forwards;
          opacity: 0;
        }
        .mono-vline {
          animation: mono-line-grow 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.8s forwards;
          height: 0;
        }
        .mono-hline {
          animation: mono-line-grow-h 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.5s forwards;
          width: 0;
        }
        .mono-cta-link {
          transition: all 0.3s ease;
        }
        .mono-cta-link:hover {
          letter-spacing: 0.05em;
        }
        .mono-word-outlined {
          -webkit-text-stroke: 2px #1a1a1a;
          color: transparent;
        }
        @media (prefers-reduced-motion: reduce) {
          .mono-word1-ltr,
          .mono-word2-ltr,
          .mono-word1-rtl,
          .mono-word2-rtl,
          .mono-subtitle,
          .mono-cta,
          .mono-corner-top,
          .mono-corner-bottom {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            letter-spacing: 0em !important;
          }
          .mono-vline {
            animation: none !important;
            height: 60px !important;
          }
          .mono-hline {
            animation: none !important;
            width: 40px !important;
          }
        }
      `}</style>

      <section
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          backgroundColor: "#fafafa",
          fontFamily: bodyFont,
        }}
      >
        {/* Corner accent - Top left/right */}
        <div
          className={`absolute top-8 flex items-start gap-3 ${mounted ? "mono-corner-top" : ""}`}
          style={{
            [isAr ? "right" : "left"]: "2rem",
          }}
        >
          <div
            className={`h-px bg-gray-300 ${mounted ? "mono-hline" : ""}`}
            style={{ marginTop: "6px" }}
          />
          <span
            className="text-[11px] tracking-[0.25em] text-gray-400 whitespace-nowrap"
            style={{ fontFamily: headingFont }}
          >
            {t.cornerTop}
          </span>
        </div>

        {/* Corner accent - Bottom right/left */}
        <div
          className={`absolute bottom-8 flex flex-col items-end gap-3 ${mounted ? "mono-corner-bottom" : ""}`}
          style={{
            [isAr ? "left" : "right"]: "2rem",
            alignItems: isAr ? "flex-start" : "flex-end",
          }}
        >
          <span
            className="text-[11px] tracking-[0.25em] text-gray-400 whitespace-nowrap"
            style={{ fontFamily: headingFont }}
          >
            {t.cornerBottom}
          </span>
          <div
            className={`w-px bg-gray-300 ${mounted ? "mono-vline" : ""}`}
          />
        </div>

        {/* Main typography block */}
        <div className="relative z-10 text-center px-4">
          {/* THINK / outlined */}
          <div className="overflow-hidden">
            <h1
              className={`font-black leading-none mono-word-outlined ${
                mounted
                  ? isAr
                    ? "mono-word1-rtl"
                    : "mono-word1-ltr"
                  : ""
              }`}
              style={{
                fontFamily: headingFont,
                fontSize: "clamp(5rem, 14vw, 14rem)",
                lineHeight: 0.9,
              }}
            >
              {t.word1}
            </h1>
          </div>

          {/* BIGGER / solid */}
          <div className="overflow-hidden">
            <h1
              className={`font-black leading-none ${
                mounted
                  ? isAr
                    ? "mono-word2-rtl"
                    : "mono-word2-ltr"
                  : ""
              }`}
              style={{
                fontFamily: headingFont,
                fontSize: "clamp(5rem, 14vw, 14rem)",
                lineHeight: 0.9,
                color: "#1a1a1a",
              }}
            >
              {t.word2}
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className={`text-sm md:text-base text-gray-500 max-w-md mx-auto mt-10 md:mt-12 leading-relaxed ${
              mounted ? "mono-subtitle" : ""
            }`}
            style={{ fontFamily: bodyFont }}
          >
            {t.subtitle}
          </p>

          {/* CTA */}
          <div className={`mt-8 ${mounted ? "mono-cta" : ""}`}>
            <button
              className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer mono-cta-link group"
              style={{
                color: "#1a1a1a",
                fontFamily: bodyFont,
              }}
            >
              <span className="border-b border-gray-400 pb-0.5 transition-all duration-300 group-hover:border-gray-900">
                {t.cta}
              </span>
              <ArrowIcon
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                style={{
                  transform: isAr ? "scaleX(-1)" : undefined,
                }}
              />
            </button>
          </div>
        </div>

        {/* Subtle decorative elements */}
        {/* Top-right small cross */}
        <div
          className="absolute hidden md:block"
          style={{
            top: "30%",
            [isAr ? "left" : "right"]: "8%",
            opacity: mounted ? 0.15 : 0,
            transition: "opacity 1s ease 2s",
          }}
        >
          <div className="relative w-4 h-4">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-400" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-gray-400" />
          </div>
        </div>

        {/* Bottom-left dot */}
        <div
          className="absolute hidden md:block"
          style={{
            bottom: "35%",
            [isAr ? "right" : "left"]: "6%",
            opacity: mounted ? 0.2 : 0,
            transition: "opacity 1s ease 2.2s",
          }}
        >
          <div className="w-2 h-2 rounded-full bg-gray-400" />
        </div>
      </section>
    </>
  );
}
