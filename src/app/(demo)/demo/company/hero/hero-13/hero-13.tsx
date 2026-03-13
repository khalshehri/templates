"use client";

import React, { useEffect, useState } from "react";

interface Hero13Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Orbiting the center of\nenterprise excellence",
    body: "Strategic advisory built around your organization's unique gravitational pull. We don't impose templates — we design constellations.",
    cta: "Enter our orbit",
    since: "SINCE 2003",
  },
  ar: {
    heading: "ندور حول مركز\nالتميز المؤسسي",
    body: "استشارات استراتيجية مبنية حول الجاذبية الفريدة لمؤسستك. لا نفرض قوالب — بل نصمم مجموعات نجمية.",
    cta: "ادخل مدارنا",
    since: "منذ ٢٠٠٣",
  },
};

export function Hero13({ language }: Hero13Props) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hero13-ring-cw-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes hero13-ring-ccw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes hero13-ring-cw-fast {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes hero13-fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes hero13-fadePulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero13-ring-1,
          .hero13-ring-2,
          .hero13-ring-3 {
            animation: none !important;
          }
          .hero13-fade {
            animation: none !important;
            opacity: 1 !important;
          }
          .hero13-dot {
            animation: none !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: "#0a0a0f" }}
      >
        {/* Center radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)",
          }}
        />

        {/* Ring 1 — innermost, clockwise 60s */}
        <div
          className="hero13-ring-1 absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-white/[0.04]"
          style={{
            top: "50%",
            left: "50%",
            animation: "hero13-ring-cw-slow 60s linear infinite",
          }}
        >
          {/* Orbiting dot */}
          <div
            className="hero13-dot absolute w-[4px] h-[4px] bg-white/20 rounded-full"
            style={{
              top: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* Ring 2 — middle, counter-clockwise 80s */}
        <div
          className="hero13-ring-2 absolute w-[420px] h-[420px] md:w-[680px] md:h-[680px] rounded-full border border-white/[0.03]"
          style={{
            top: "50%",
            left: "50%",
            animation: "hero13-ring-ccw 80s linear infinite",
          }}
        >
          <div
            className="hero13-dot absolute w-[4px] h-[4px] bg-white/20 rounded-full"
            style={{
              top: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* Ring 3 — outermost, clockwise 100s */}
        <div
          className="hero13-ring-3 absolute w-[540px] h-[540px] md:w-[860px] md:h-[860px] rounded-full border border-white/[0.02]"
          style={{
            top: "50%",
            left: "50%",
            animation: "hero13-ring-cw-fast 100s linear infinite",
          }}
        >
          <div
            className="hero13-dot absolute w-[4px] h-[4px] bg-white/20 rounded-full"
            style={{
              top: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          {/* Heading */}
          <h1
            className={`hero13-fade text-4xl md:text-5xl lg:text-6xl font-medium text-white whitespace-pre-line leading-tight ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted ? "hero13-fadeUp 0.8s ease-out forwards" : "none",
            }}
          >
            {t.heading}
          </h1>

          {/* Body */}
          <p
            className={`hero13-fade text-gray-500 text-lg max-w-lg mx-auto mt-6 leading-relaxed ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? "hero13-fadeUp 0.8s ease-out 0.2s forwards"
                : "none",
              animationFillMode: "both",
            }}
          >
            {t.body}
          </p>

          {/* Ghost CTA */}
          <div
            className="hero13-fade mt-10"
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? "hero13-fadeUp 0.8s ease-out 0.4s forwards"
                : "none",
              animationFillMode: "both",
            }}
          >
            <button
              className={`cursor-pointer border border-white/15 text-white/70 px-8 py-3 rounded-full transition-all duration-300 hover:border-white/40 hover:text-white ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.cta}
            </button>
          </div>
        </div>

        {/* Bottom stamp */}
        <div
          className="hero13-fade absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{
            opacity: mounted ? 1 : 0,
            animation: mounted
              ? "hero13-fadeUp 0.8s ease-out 0.6s forwards"
              : "none",
            animationFillMode: "both",
          }}
        >
          <span
            className={`text-[10px] text-white/15 tracking-widest uppercase ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.since}
          </span>
        </div>
      </section>
    </>
  );
}
