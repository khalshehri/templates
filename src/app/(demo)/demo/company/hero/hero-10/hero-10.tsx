"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";

interface Hero10Props {
  language: "en" | "ar";
}

const content = {
  en: {
    eyebrow: "ANNUAL PERSPECTIVE 2024",
    line1: "Build",
    line2Light: "Beyond",
    line2Bold: "Limits",
    body: "Strategic advisory for enterprises redefining what\u2019s possible. We bring the clarity, rigor, and conviction that transformation demands.",
  },
  ar: {
    eyebrow: "\u0627\u0644\u0645\u0646\u0638\u0648\u0631 \u0627\u0644\u0633\u0646\u0648\u064A \u0662\u0660\u0662\u0664",
    line1: "\u0627\u0628\u0646\u0650",
    line2Light: "\u0628\u0644\u0627",
    line2Bold: "\u062D\u062F\u0648\u062F",
    body: "\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0644\u0645\u0624\u0633\u0633\u0627\u062A \u062A\u0639\u064A\u062F \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0645\u0645\u0643\u0646. \u0646\u062C\u0644\u0628 \u0627\u0644\u0648\u0636\u0648\u062D \u0648\u0627\u0644\u0635\u0631\u0627\u0645\u0629 \u0648\u0627\u0644\u0642\u0646\u0627\u0639\u0629 \u0627\u0644\u062A\u064A \u064A\u062A\u0637\u0644\u0628\u0647\u0627 \u0627\u0644\u062A\u062D\u0648\u0644.",
  },
};

export function Hero10({ language }: Hero10Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero10-back-layer {
          from { opacity: 0; transform: rotate(-3deg) translateY(8px); }
          to { opacity: 1; transform: rotate(-1deg) translateY(8px) translateX(4px); }
        }
        @keyframes hero10-mid-layer {
          from { opacity: 0; transform: rotate(2deg) translateY(4px); }
          to { opacity: 1; transform: rotate(0.5deg) translateY(4px) translateX(-2px); }
        }
        @keyframes hero10-front-layer {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero10-fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero10-back {
          opacity: 0;
          animation: hero10-back-layer 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }
        .hero10-mid {
          opacity: 0;
          animation: hero10-mid-layer 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
        }
        .hero10-front {
          opacity: 0;
          animation: hero10-front-layer 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }
        .hero10-eyebrow {
          opacity: 0;
          animation: hero10-fade-up 0.7s ease 0.8s forwards;
        }
        .hero10-heading {
          opacity: 0;
          animation: hero10-fade-up 0.7s ease 0.95s forwards;
        }
        .hero10-body {
          opacity: 0;
          animation: hero10-fade-up 0.7s ease 1.1s forwards;
        }
        .hero10-cta {
          opacity: 0;
          animation: hero10-fade-up 0.7s ease 1.25s forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero10-back,
          .hero10-mid,
          .hero10-front,
          .hero10-eyebrow,
          .hero10-heading,
          .hero10-body,
          .hero10-cta {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .hero10-back {
            transform: rotate(-1deg) translateY(8px) translateX(4px);
          }
          .hero10-mid {
            transform: rotate(0.5deg) translateY(4px) translateX(-2px);
          }
        }
      `}</style>
      <section
        className="min-h-screen flex items-center justify-center bg-[#fefefe] px-4 py-20"
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="relative max-w-4xl w-full mx-auto">
          {/* Back layer - hidden on mobile */}
          <div
            className="hero10-back hidden md:block absolute inset-0 bg-gray-100 shadow-sm rounded-sm"
            style={{
              transform: "rotate(-1deg) translateY(8px) translateX(4px)",
            }}
            aria-hidden="true"
          />

          {/* Middle layer - hidden on mobile */}
          <div
            className="hero10-mid hidden md:block absolute inset-0 bg-gray-50 shadow-sm rounded-sm"
            style={{
              transform: "rotate(0.5deg) translateY(4px) translateX(-2px)",
            }}
            aria-hidden="true"
          />

          {/* Front layer (main content) */}
          <div className="hero10-front relative bg-white shadow-lg rounded-sm p-10 md:p-16">
            {/* Eyebrow */}
            <p
              className={`hero10-eyebrow text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-8 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.eyebrow}
            </p>

            {/* Heading */}
            <h1
              className={`hero10-heading text-[3rem] md:text-[4.5rem] lg:text-[6rem] font-bold text-gray-900 leading-[0.95] tracking-tight mb-10 ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              <span className="block">{t.line1}</span>
              <span className="block">
                <span className="text-gray-300 font-bold">{t.line2Light}</span>{" "}
                <span>{t.line2Bold}</span>
              </span>
            </h1>

            {/* Body - left/right aligned, not centered */}
            <p
              className={`hero10-body text-gray-500 text-base max-w-md leading-relaxed mb-10 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.body}
            </p>

            {/* Circle CTA button */}
            <button
              className="hero10-cta w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-900 hover:text-white text-gray-900 bg-transparent"
              aria-label={isAr ? "\u0627\u0628\u062F\u0623" : "Get started"}
            >
              {isAr ? (
                <ArrowLeft className="w-5 h-5" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
