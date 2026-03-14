"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    est: "Est. 1987",
    heading: "Advisory Excellence, Redefined",
    body: "For over three decades, we've guided Fortune 500 leaders through transformation with precision, discretion, and unmatched expertise.",
    cta: "Explore our expertise",
    letter: "A",
  },
  ar: {
    est: "تأسست عام 1987",
    heading: "التميز الاستشاري، بصورة جديدة",
    body: "لأكثر من ثلاثة عقود، قدنا قادة فورتشن 500 عبر التحول بدقة وسرية وخبرة لا مثيل لها.",
    cta: "استكشف خبراتنا",
    letter: "أ",
  },
};

export function Hero02({ language }: { language: "en" | "ar" }) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#faf8f5" }}
    >
      <style>{`
        @keyframes drawLine {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }

        @keyframes fadeSlideUp02 {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn02 {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes letterFade {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        .hero02-line {
          animation: drawLine 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
          transform-origin: top;
        }

        .hero02-est {
          animation: fadeSlideUp02 0.7s ease-out 0.8s both;
        }
        .hero02-heading {
          animation: fadeSlideUp02 0.7s ease-out 1.0s both;
        }
        .hero02-body {
          animation: fadeSlideUp02 0.7s ease-out 1.2s both;
        }
        .hero02-cta {
          animation: fadeSlideUp02 0.7s ease-out 1.4s both;
        }
        .hero02-letter {
          animation: letterFade 2s ease-out 1.0s both;
        }
        .hero02-image {
          animation: fadeIn02 1.2s ease-out 0.6s both;
        }

        .hero02-link {
          position: relative;
          display: inline-block;
        }
        .hero02-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #78716c;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [dir="rtl"] .hero02-link::after {
          transform-origin: right;
        }
        .hero02-link:hover::after {
          transform: scaleX(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero02-line,
          .hero02-est,
          .hero02-heading,
          .hero02-body,
          .hero02-cta,
          .hero02-letter,
          .hero02-image {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="min-h-screen flex flex-col md:flex-row relative">
        {/* Vertical Divider */}
        <div
          className="hero02-line hidden md:block absolute top-0 bottom-0 z-20"
          style={{
            width: 1,
            backgroundColor: "#d6d3d1",
            left: isAr ? "40%" : "60%",
          }}
        />

        {/* Content Side */}
        <div
          className={`relative z-10 w-full md:w-[60%] flex items-center ${
            isAr ? "md:order-2" : "md:order-1"
          }`}
          style={{
            fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)",
          }}
        >
          <div
            className={`px-8 sm:px-12 md:px-16 lg:px-24 py-20 md:py-0 max-w-2xl ${
              isAr ? "mr-auto text-right" : "ml-0 text-left"
            }`}
          >
            {/* Est. badge */}
            <div className="hero02-est mb-8">
              <span
                className="text-xs uppercase tracking-[0.3em] text-stone-400"
                style={{
                  fontFamily: isAr
                    ? "var(--font-changa)"
                    : "var(--font-inter)",
                }}
              >
                {t.est}
              </span>
              <div
                className="mt-3 w-12 h-px"
                style={{ backgroundColor: "#d6d3d1" }}
              />
            </div>

            {/* Heading */}
            <h1
              className="hero02-heading text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8"
              style={{
                color: "#1a1a1a",
                fontFamily: isAr
                  ? "var(--font-changa)"
                  : "var(--font-inter)",
              }}
            >
              {t.heading}
            </h1>

            {/* Body */}
            <p
              className="hero02-body text-base leading-relaxed max-w-md mb-10"
              style={{ color: "#78716c" }}
            >
              {t.body}
            </p>

            {/* CTA */}
            <div className="hero02-cta">
              <button
                className="cursor-pointer hero02-link group text-stone-600 hover:text-stone-900 transition-all duration-300 text-base"
              >
                <span
                  className={`inline-flex items-center gap-2 ${
                    isAr ? "flex-row-reverse" : ""
                  }`}
                >
                  {t.cta}
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                      isAr
                        ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0"
                        : ""
                    }`}
                  />
                </span>
              </button>
            </div>

            {/* Decorative dots */}
            <div className="mt-20 flex gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: i === 0 ? "#1a1a1a" : "#d6d3d1" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Side */}
        <div
          className={`relative w-full md:w-[40%] flex items-center justify-center min-h-[50vh] md:min-h-screen ${
            isAr ? "md:order-1" : "md:order-2"
          }`}
        >
          {/* Oversized letter */}
          <span
            className="hero02-letter absolute select-none pointer-events-none"
            style={{
              fontSize: "clamp(12rem, 22vw, 22rem)",
              fontWeight: 700,
              color: "rgba(26, 26, 26, 0.03)",
              lineHeight: 1,
              fontFamily: isAr
                ? "var(--font-changa)"
                : "var(--font-inter)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {t.letter}
          </span>

          {/* Editorial image placeholder */}
          <div className="hero02-image relative z-10 px-8 md:px-12">
            <div
              className="w-full max-w-[280px] sm:max-w-[320px] rounded-lg shadow-2xl"
              style={{
                aspectRatio: "3/4",
                background:
                  "linear-gradient(to bottom right, #d4a574, #a67350)",
              }}
            />

            {/* Small accent detail */}
            <div
              className="absolute -bottom-4 -left-4 w-24 h-24 rounded-lg border"
              style={{ borderColor: "#d6d3d1" }}
            />
          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: "#e7e5e4" }}
      />
    </section>
  );
}
