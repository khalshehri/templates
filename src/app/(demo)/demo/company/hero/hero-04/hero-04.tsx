"use client";

import { useState, useEffect } from "react";
import {
  Hotel,
  Star,
  Wifi,
  UtensilsCrossed,
  Car,
  Sparkles,
} from "lucide-react";

interface Hero04Props {
  language: "en" | "ar";
}

const content = {
  en: {
    location: "RIYADH \u00b7 DUBAI \u00b7 LONDON",
    rating: "4.9 \u00b7 2,400+ Reviews",
    heading: "Where every moment becomes a memory",
    sub: "World-class hospitality in extraordinary settings. Luxurious rooms, exquisite dining, and experiences that linger long after you leave.",
    cta1: "Reserve Your Stay",
    cta2: "Virtual Tour \u2192",
    amenities: ["Free WiFi", "Fine Dining", "Valet Parking", "Luxury Spa"],
  },
  ar: {
    location: "\u0627\u0644\u0631\u064a\u0627\u0636 \u00b7 \u062f\u0628\u064a \u00b7 \u0644\u0646\u062f\u0646",
    rating: "4.9 \u00b7 +2,400 \u062a\u0642\u064a\u064a\u0645",
    heading: "\u062d\u064a\u062b \u062a\u0635\u0628\u062d \u0643\u0644 \u0644\u062d\u0638\u0629 \u0630\u0643\u0631\u0649",
    sub: "\u0636\u064a\u0627\u0641\u0629 \u0639\u0627\u0644\u0645\u064a\u0629 \u0641\u064a \u0623\u0645\u0627\u0643\u0646 \u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0629. \u063a\u0631\u0641 \u0641\u0627\u062e\u0631\u0629 \u0648\u0645\u0637\u0627\u0639\u0645 \u0631\u0627\u0642\u064a\u0629 \u0648\u062a\u062c\u0627\u0631\u0628 \u062a\u0628\u0642\u0649 \u0637\u0648\u064a\u0644\u0627\u064b \u0628\u0639\u062f \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629.",
    cta1: "\u0627\u062d\u062c\u0632 \u0625\u0642\u0627\u0645\u062a\u0643",
    cta2: "\u062c\u0648\u0644\u0629 \u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0629 \u2192",
    amenities: ["\u0648\u0627\u064a \u0641\u0627\u064a", "\u0645\u0637\u0627\u0639\u0645 \u0631\u0627\u0642\u064a\u0629", "\u0635\u0641 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a", "\u0633\u0628\u0627 \u0641\u0627\u062e\u0631"],
  },
};

const amenityIcons = [Wifi, UtensilsCrossed, Car, Sparkles];

export function Hero04({ language }: Hero04Props) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes ember-wave-shift-1 {
          0% { transform: translateX(0); }
          50% { transform: translateX(-30px); }
          100% { transform: translateX(0); }
        }
        @keyframes ember-wave-shift-2 {
          0% { transform: translateX(0); }
          50% { transform: translateX(40px); }
          100% { transform: translateX(0); }
        }
        @keyframes ember-wave-shift-3 {
          0% { transform: translateX(0); }
          50% { transform: translateX(-50px); }
          100% { transform: translateX(0); }
        }
        @keyframes ember-star-twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes ember-fade-up {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes ember-scale-in {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .ember-fade-up {
          opacity: 0;
          animation: ember-fade-up 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .ember-scale-in {
          opacity: 0;
          animation: ember-scale-in 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .ember-fade-up,
          .ember-scale-in {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .ember-wave {
            animation: none !important;
          }
          .ember-star {
            animation: none !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(180deg, #1a0505 0%, #2d1810 50%, #0f0805 100%)",
          fontFamily: isAr ? "var(--font-almarai)" : "var(--font-inter)",
        }}
      >
        {/* SVG Waves at bottom */}
        <svg
          className="ember-wave absolute bottom-0 left-0 w-full"
          style={{
            height: "200px",
            animation: "ember-wave-shift-1 25s ease-in-out infinite",
          }}
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,120 C240,180 480,60 720,120 C960,180 1200,60 1440,120 L1440,200 L0,200 Z"
            fill="#d97706"
            fillOpacity="0.12"
          />
        </svg>
        <svg
          className="ember-wave absolute bottom-0 left-0 w-full"
          style={{
            height: "180px",
            animation: "ember-wave-shift-2 20s ease-in-out infinite",
          }}
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,100 C360,160 720,40 1080,100 C1260,140 1380,80 1440,100 L1440,180 L0,180 Z"
            fill="#ea580c"
            fillOpacity="0.10"
          />
        </svg>
        <svg
          className="ember-wave absolute bottom-0 left-0 w-full"
          style={{
            height: "160px",
            animation: "ember-wave-shift-3 30s ease-in-out infinite",
          }}
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,80 C180,140 540,20 900,80 C1080,120 1320,40 1440,80 L1440,160 L0,160 Z"
            fill="#e11d48"
            fillOpacity="0.08"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto pb-24">
          {/* Location strip */}
          {mounted && (
            <p
              className="ember-fade-up text-xs tracking-[0.3em] uppercase mb-6"
              style={{
                color: "#92400e",
                animationDelay: "100ms",
                fontFamily: "var(--font-inter)",
                letterSpacing: "0.3em",
              }}
            >
              {t.location}
            </p>
          )}

          {/* Stars */}
          {mounted && (
            <div
              className="ember-fade-up flex items-center gap-1.5 mb-4"
              style={{ animationDelay: "200ms" }}
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="ember-star"
                  size={16}
                  fill="#f59e0b"
                  color="#f59e0b"
                  style={{
                    animation: `ember-star-twinkle 2.5s ease-in-out infinite`,
                    animationDelay: `${i * 300}ms`,
                  }}
                />
              ))}
              <span
                className="text-sm ml-2"
                style={{
                  color: "rgba(253, 230, 138, 0.7)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {t.rating}
              </span>
            </div>
          )}

          {/* Heading */}
          {mounted && (
            <h1
              className="ember-fade-up mb-6"
              style={{
                fontFamily: "var(--font-el-messiri)",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                letterSpacing: "0.02em",
                lineHeight: 1.2,
                color: "#fef3c7",
                animationDelay: "350ms",
              }}
            >
              {t.heading}
            </h1>
          )}

          {/* Subtitle */}
          {mounted && (
            <p
              className="ember-fade-up max-w-xl mb-10"
              style={{
                fontWeight: 300,
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                lineHeight: 1.8,
                color: "rgba(253, 230, 138, 0.7)",
                animationDelay: "500ms",
                fontFamily: isAr ? "var(--font-almarai)" : "var(--font-inter)",
              }}
            >
              {t.sub}
            </p>
          )}

          {/* CTAs */}
          {mounted && (
            <div
              className="ember-fade-up flex flex-col items-center gap-4 mb-16"
              style={{ animationDelay: "650ms" }}
            >
              <button
                className="cursor-pointer px-8 py-3.5 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: "rgba(245, 158, 11, 0.9)",
                  color: "#1a0505",
                  fontFamily: isAr ? "var(--font-almarai)" : "var(--font-inter)",
                }}
              >
                {t.cta1}
              </button>
              <button
                className="cursor-pointer text-sm transition-colors duration-300 hover:opacity-80"
                style={{
                  color: "#f59e0b",
                  fontFamily: isAr ? "var(--font-almarai)" : "var(--font-inter)",
                  background: "none",
                  border: "none",
                }}
              >
                {t.cta2}
              </button>
            </div>
          )}

          {/* Amenities */}
          {mounted && (
            <div className="flex flex-wrap justify-center gap-6">
              {amenityIcons.map((Icon, i) => (
                <div
                  key={i}
                  className="ember-scale-in flex flex-col items-center gap-2"
                  style={{ animationDelay: `${800 + i * 120}ms` }}
                >
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 52,
                      height: 52,
                      background: "rgba(245, 158, 11, 0.08)",
                      border: "1px solid rgba(245, 158, 11, 0.15)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <Icon size={20} style={{ color: "#f59e0b" }} />
                  </div>
                  <span
                    className="text-xs"
                    style={{
                      color: "#92400e",
                      fontFamily: isAr ? "var(--font-almarai)" : "var(--font-inter)",
                    }}
                  >
                    {t.amenities[i]}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
