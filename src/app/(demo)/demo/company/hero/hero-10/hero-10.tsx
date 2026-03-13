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
    line2Dark: "Limits",
    body: "Strategic advisory for enterprises redefining what's possible. We bring the clarity, rigor, and conviction that transformation demands.",
    copyright: "© 2024",
  },
  ar: {
    eyebrow: "المنظور السنوي ٢٠٢٤",
    line1: "ابنِ",
    line2Light: "بلا",
    line2Dark: "حدود",
    body: "استشارات استراتيجية لمؤسسات تعيد تعريف الممكن. نجلب الوضوح والصرامة والقناعة التي يتطلبها التحول.",
    copyright: "© ٢٠٢٤",
  },
};

export function Hero10({ language }: Hero10Props) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr
    ? "font-[family-name:var(--font-changa)]"
    : "font-[family-name:var(--font-inter)]";
  const fontBody = isAr
    ? "font-[family-name:var(--font-tajawal)]"
    : "font-[family-name:var(--font-inter)]";

  return (
    <>
      <style>{`
        @keyframes hero10-back-rotate {
          0% {
            transform: rotate(-3deg) translateY(8px) translateX(4px);
            opacity: 0;
          }
          100% {
            transform: rotate(-1.5deg) translateY(8px) translateX(4px);
            opacity: 1;
          }
        }

        @keyframes hero10-mid-rotate {
          0% {
            transform: rotate(2deg) translateY(4px) translateX(-2px);
            opacity: 0;
          }
          100% {
            transform: rotate(0.8deg) translateY(4px) translateX(-2px);
            opacity: 1;
          }
        }

        @keyframes hero10-front-rise {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes hero10-content-fade {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero10-back {
          animation: hero10-back-rotate 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .hero10-mid {
          animation: hero10-mid-rotate 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .hero10-front {
          animation: hero10-front-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .hero10-content {
          animation: hero10-content-fade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero10-back,
          .hero10-mid,
          .hero10-front,
          .hero10-content {
            animation: none;
            opacity: 1;
          }

          .hero10-back {
            transform: rotate(-1.5deg) translateY(8px) translateX(4px);
          }

          .hero10-mid {
            transform: rotate(0.8deg) translateY(4px) translateX(-2px);
          }

          .hero10-front {
            transform: translateY(0);
          }
        }
      `}</style>

      <section
        className="min-h-screen flex items-center justify-center px-4 py-20"
        style={{ backgroundColor: "#fefefe" }}
      >
        <div className="relative max-w-3xl w-full" style={{ minHeight: "500px" }}>
          {/* Back paper layer */}
          <div
            className="hero10-back hidden md:block absolute inset-0 bg-gray-100 shadow-sm rounded-sm"
            style={{
              transform: "rotate(-1.5deg) translateY(8px) translateX(4px)",
            }}
            aria-hidden="true"
          />

          {/* Middle paper layer */}
          <div
            className="hero10-mid hidden md:block absolute inset-0 bg-gray-50 shadow-sm rounded-sm"
            style={{
              transform: "rotate(0.8deg) translateY(4px) translateX(-2px)",
            }}
            aria-hidden="true"
          />

          {/* Front paper layer — holds content */}
          <div
            className="hero10-front relative bg-white shadow-lg border border-gray-100 rounded-sm p-10 md:p-14 lg:p-16"
            style={{ minHeight: "500px" }}
          >
            <div className="hero10-content">
              {/* Eyebrow */}
              <p
                className={`text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-8 ${fontBody}`}
              >
                {t.eyebrow}
              </p>

              {/* Massive heading */}
              <h1
                className={`text-[3rem] md:text-[4.5rem] lg:text-[6rem] font-bold text-gray-900 leading-[0.95] tracking-tight ${fontHeading}`}
              >
                <span className="block">{t.line1}</span>
                <span className="block">
                  <span className="text-gray-200">{t.line2Light}</span>{" "}
                  <span className="text-gray-900">{t.line2Dark}</span>
                </span>
              </h1>

              {/* Body text — left aligned for editorial asymmetry */}
              <p
                className={`text-gray-500 text-base max-w-md mt-8 ${
                  isAr ? "text-right" : "text-left"
                } ${fontBody}`}
              >
                {t.body}
              </p>

              {/* Circle CTA button */}
              <div className={`mt-8 ${isAr ? "flex justify-end" : ""}`}>
                <button
                  className="w-14 h-14 rounded-full border-2 border-gray-900 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-900 hover:text-white text-gray-900 group"
                  aria-label={isAr ? "ابدأ الآن" : "Get started"}
                >
                  {isAr ? (
                    <ArrowLeft
                      size={20}
                      className="transition-all duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <ArrowRight
                      size={20}
                      className="transition-all duration-300 group-hover:scale-110"
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Copyright decorative text */}
            <span
              className={`absolute bottom-4 ${
                isAr ? "left-4" : "right-4"
              } text-[10px] text-gray-300 ${fontBody}`}
              aria-hidden="true"
            >
              {t.copyright}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
