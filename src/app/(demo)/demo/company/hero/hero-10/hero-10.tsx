"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const content = {
  en: {
    heading: "THE ART OF\nCORPORATE\nLEADERSHIP",
    body: "For three decades, we've cultivated executive talent that shapes Fortune 100 boardrooms. Our methodology is proven. Our network is unmatched.",
    established: "— Established 1993, New York",
    ariaLabel: "Explore our work",
  },
  ar: {
    heading: "فن القيادة\nالمؤسسية",
    body: "على مدار ثلاثة عقود، قمنا بتنمية المواهب التنفيذية التي تشكّل مجالس إدارات شركات فورتشن 100. منهجيتنا مثبتة. وشبكتنا لا مثيل لها.",
    established: "— تأسست 1993، نيويورك",
    ariaLabel: "استكشف أعمالنا",
  },
};

export function Hero10({ language }: { language: "en" | "ar" }) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  useEffect(() => {
    setMounted(true);
  }, []);

  const headingFont = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const bodyFont = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes folio-stack-back {
          0% { transform: rotate(0deg) scale(0.97); opacity: 0; }
          100% { transform: rotate(-4deg) scale(0.97); opacity: 1; }
        }
        @keyframes folio-stack-mid {
          0% { transform: rotate(0deg) scale(0.985); opacity: 0; }
          100% { transform: rotate(2deg) scale(0.985); opacity: 1; }
        }
        @keyframes folio-stack-front {
          0% { transform: rotate(0deg) scale(1); opacity: 0.5; }
          100% { transform: rotate(0deg) scale(1); opacity: 1; }
        }
        @keyframes folio-content-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes folio-line-grow {
          0% { width: 0; }
          100% { width: 80px; }
        }
        @keyframes folio-square-in {
          0% { opacity: 0; transform: scale(0) rotate(45deg); }
          100% { opacity: 1; transform: scale(1) rotate(45deg); }
        }
        @keyframes folio-dot-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .folio-back {
          animation: folio-stack-back 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .folio-mid {
          animation: folio-stack-mid 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
          opacity: 0;
        }
        .folio-front {
          animation: folio-stack-front 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0;
        }
        .folio-content {
          animation: folio-content-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
          opacity: 0;
        }
        .folio-line {
          animation: folio-line-grow 1s cubic-bezier(0.16, 1, 0.3, 1) 1.6s forwards;
          width: 0;
        }
        .folio-square {
          animation: folio-square-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.8s forwards;
          opacity: 0;
        }
        .folio-dot {
          animation: folio-dot-pulse 3s ease-in-out infinite;
        }
        .folio-front-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .folio-front-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.15);
        }
        .folio-cta {
          transition: all 0.3s ease;
        }
        .folio-cta:hover {
          background-color: #1a1a1a;
          color: #ffffff;
        }
        @media (prefers-reduced-motion: reduce) {
          .folio-back,
          .folio-mid,
          .folio-front,
          .folio-content,
          .folio-line,
          .folio-square,
          .folio-dot {
            animation: none !important;
            opacity: 1 !important;
            width: auto !important;
            transform: none !important;
          }
          .folio-back { transform: rotate(-4deg) scale(0.97) !important; }
          .folio-mid { transform: rotate(2deg) scale(0.985) !important; }
          .folio-front-card:hover { transform: none !important; }
        }
      `}</style>

      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: "#fefefe", fontFamily: bodyFont }}
      >
        {/* Decorative line - top area */}
        <div
          className="absolute hidden md:block"
          style={{
            top: "15%",
            [isAr ? "right" : "left"]: "8%",
          }}
        >
          <div
            className={`h-px bg-gray-300 ${mounted ? "folio-line" : ""}`}
            style={{ width: mounted ? undefined : 0 }}
          />
        </div>

        {/* Decorative square - bottom area */}
        <div
          className="absolute hidden md:block"
          style={{
            bottom: "18%",
            [isAr ? "left" : "right"]: "10%",
          }}
        >
          <div
            className={`w-3 h-3 border border-gray-300 ${mounted ? "folio-square" : ""}`}
            style={{ transform: "rotate(45deg)" }}
          />
        </div>

        {/* Decorative dots */}
        <div
          className="absolute hidden md:block"
          style={{
            top: "25%",
            [isAr ? "left" : "right"]: "6%",
          }}
        >
          <div className="flex flex-col gap-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-1 h-1 rounded-full bg-gray-300 ${mounted ? "folio-dot" : ""}`}
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}
          </div>
        </div>

        {/* Small corner text */}
        <div
          className={`absolute top-8 text-[10px] tracking-[0.3em] text-gray-300 uppercase ${mounted ? "folio-content" : ""}`}
          style={{
            [isAr ? "right" : "left"]: "2rem",
            fontFamily: headingFont,
            animationDelay: "2s",
          }}
        >
          {isAr ? "فوليو" : "FOLIO"}
        </div>

        {/* Card stack container */}
        <div className="relative w-full max-w-3xl mx-auto px-6 md:px-0" style={{ aspectRatio: "4/3" }}>
          {/* Back layer */}
          <div
            className={`absolute inset-0 rounded-sm border border-gray-200 shadow-sm ${mounted ? "folio-back" : ""}`}
            style={{
              backgroundColor: "#f3f4f6",
              transform: mounted ? undefined : "rotate(0deg) scale(0.97)",
            }}
          />

          {/* Mid layer */}
          <div
            className={`absolute inset-0 rounded-sm border border-gray-200 shadow-md ${mounted ? "folio-mid" : ""}`}
            style={{
              backgroundColor: "#f9fafb",
              transform: mounted ? undefined : "rotate(0deg) scale(0.985)",
            }}
          />

          {/* Front layer (content card) */}
          <div
            className={`absolute inset-0 rounded-sm border border-gray-200 shadow-xl bg-white folio-front-card ${mounted ? "folio-front" : ""}`}
          >
            {/* Card content */}
            <div
              className={`h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 ${mounted ? "folio-content" : ""}`}
            >
              {/* Top section */}
              <div>
                {/* Heading */}
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase"
                  style={{
                    fontFamily: headingFont,
                    color: "#111827",
                    lineHeight: 0.9,
                    whiteSpace: "pre-line",
                  }}
                >
                  {t.heading}
                </h1>

                {/* Divider */}
                <hr className="border-gray-300 my-6 md:my-8" />

                {/* Body text */}
                <p
                  className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg"
                  style={{ fontFamily: bodyFont }}
                >
                  {t.body}
                </p>
              </div>

              {/* Bottom section */}
              <div className="flex items-end justify-between mt-8">
                {/* Established */}
                <p
                  className="text-xs md:text-sm text-gray-400 tracking-wide"
                  style={{ fontFamily: bodyFont }}
                >
                  {t.established}
                </p>

                {/* CTA circle button */}
                <button
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-gray-900 flex items-center justify-center cursor-pointer folio-cta"
                  aria-label={t.ariaLabel}
                >
                  <ArrowIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-900" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div
          className="absolute bottom-12 hidden md:block"
          style={{ [isAr ? "right" : "left"]: "12%" }}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-6 h-px bg-gray-300 ${mounted ? "folio-dot" : ""}`}
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className={`w-1.5 h-1.5 rounded-full bg-gray-300 ${mounted ? "folio-dot" : ""}`}
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>

        {/* Vertical text decoration */}
        <div
          className={`absolute bottom-20 hidden lg:block ${mounted ? "folio-content" : ""}`}
          style={{
            [isAr ? "left" : "right"]: "2.5rem",
            writingMode: "vertical-rl",
            animationDelay: "2.2s",
            fontFamily: headingFont,
          }}
        >
          <span className="text-[10px] tracking-[0.4em] text-gray-300 uppercase">
            {isAr ? "القيادة والتميز" : "LEADERSHIP & EXCELLENCE"}
          </span>
        </div>
      </section>
    </>
  );
}
