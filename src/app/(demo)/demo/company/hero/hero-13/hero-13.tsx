"use client";

import { useState, useEffect } from "react";
import { Globe, MapPin } from "lucide-react";

const ring1Dots = [
  { top: "0%", left: "50%", transform: "translate(-50%, -50%)" },
  { top: "100%", left: "50%", transform: "translate(-50%, 50%)" },
];

const ring2Dots = [
  { top: "0%", left: "50%", transform: "translate(-50%, -50%)" },
  { top: "50%", left: "100%", transform: "translate(50%, -50%)" },
  { top: "100%", left: "50%", transform: "translate(-50%, 50%)" },
];

const ring3Dots = [
  { top: "50%", left: "0%", transform: "translate(-50%, -50%)" },
  { top: "50%", left: "100%", transform: "translate(50%, -50%)" },
];

const meridianTicks = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const content = {
  en: {
    badge: "Global Network",
    heading: "Connected Across Every Meridian",
    body: "Our presence spans continents, linking markets and talent through a seamless operational fabric. Wherever opportunity emerges, we are already there.",
    cta1: "Join Our Network",
    cta2: "Global Offices",
  },
  ar: {
    badge: "الشبكة العالمية",
    heading: "متصلون عبر كل خط طول",
    body: "يمتد حضورنا عبر القارات، نربط الأسواق والكفاءات من خلال نسيج تشغيلي متكامل. أينما تظهر الفرصة، نكون هناك بالفعل.",
    cta1: "انضم لشبكتنا",
    cta2: "المكاتب العالمية",
  },
};

export function Hero13({ language }: { language: "en" | "ar" }) {
  const [isVisible, setIsVisible] = useState(false);
  const t = content[language];
  const isAr = language === "ar";
  const headingFont = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const bodyFont = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes orbitCW30 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes orbitCCW45 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes orbitCW60 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.5); }
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes contentReveal {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes meridianDraw {
          from { width: 0%; }
          to { width: 60%; }
        }
        @keyframes tickReveal {
          from { opacity: 0; transform: scaleY(0); }
          to { opacity: 1; transform: scaleY(1); }
        }
        .orbit-ring-1 {
          animation: orbitCW30 30s linear infinite;
        }
        .orbit-ring-2 {
          animation: orbitCCW45 45s linear infinite;
        }
        .orbit-ring-3 {
          animation: orbitCW60 60s linear infinite;
        }
        .orbit-dot {
          animation: dotPulse 3s ease-in-out infinite;
        }
        .badge-dot {
          animation: badgePulse 2s ease-in-out infinite;
        }
        .content-reveal {
          animation: contentReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .meridian-line {
          animation: meridianDraw 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
          width: 0%;
        }
        .tick-mark {
          animation: tickReveal 0.4s ease forwards;
          opacity: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .orbit-ring-1, .orbit-ring-2, .orbit-ring-3 {
            animation: none !important;
          }
          .orbit-dot, .badge-dot {
            animation: none !important;
            opacity: 0.6;
          }
          .content-reveal {
            animation: none !important;
            opacity: 1;
          }
          .meridian-line {
            animation: none !important;
            width: 60%;
          }
          .tick-mark {
            animation: none !important;
            opacity: 1;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"
        style={{ background: "#0a0a0f" }}
      >
        {/* Orbital Rings */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Ring 1 - Inner */}
          <div
            className="orbit-ring-1 absolute rounded-full border border-white/[0.06]"
            style={{
              width: "300px",
              height: "300px",
              top: "50%",
              left: "50%",
            }}
          >
            {ring1Dots.map((dot, i) => (
              <div
                key={`r1-${i}`}
                className="orbit-dot absolute w-1 h-1 rounded-full bg-white/60"
                style={{
                  top: dot.top,
                  left: dot.left,
                  transform: dot.transform,
                  animationDelay: `${i * 1.2}s`,
                }}
              />
            ))}
          </div>

          {/* Ring 2 - Mid */}
          <div
            className="orbit-ring-2 absolute rounded-full border border-white/[0.04]"
            style={{
              width: "500px",
              height: "500px",
              top: "50%",
              left: "50%",
            }}
          >
            {ring2Dots.map((dot, i) => (
              <div
                key={`r2-${i}`}
                className="orbit-dot absolute w-1 h-1 rounded-full bg-white/40"
                style={{
                  top: dot.top,
                  left: dot.left,
                  transform: dot.transform,
                  animationDelay: `${i * 0.9}s`,
                }}
              />
            ))}
          </div>

          {/* Ring 3 - Outer */}
          <div
            className="orbit-ring-3 absolute rounded-full border border-white/[0.03]"
            style={{
              width: "700px",
              height: "700px",
              top: "50%",
              left: "50%",
            }}
          >
            {ring3Dots.map((dot, i) => (
              <div
                key={`r3-${i}`}
                className="orbit-dot absolute w-1.5 h-1.5 rounded-full bg-white/30"
                style={{
                  top: dot.top,
                  left: dot.left,
                  transform: dot.transform,
                  animationDelay: `${i * 1.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Mobile Rings (smaller) */}
        <style>{`
          @media (max-width: 768px) {
            .orbit-ring-1 { width: 200px !important; height: 200px !important; }
            .orbit-ring-2 { width: 350px !important; height: 350px !important; }
            .orbit-ring-3 { width: 500px !important; height: 500px !important; }
          }
        `}</style>

        {/* Centered Content */}
        <div
          className={`relative z-10 flex flex-col items-center px-6 ${isVisible ? "content-reveal" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          {/* Badge */}
          <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.1] rounded-full px-4 py-1.5 mb-8">
            <span className="badge-dot w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span
              className="text-sm text-gray-300"
              style={{ fontFamily: bodyFont }}
            >
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center max-w-3xl mb-6 leading-tight"
            style={{ fontFamily: headingFont }}
          >
            {t.heading}
          </h1>

          {/* Body */}
          <p
            className="text-gray-400 max-w-lg mx-auto text-center text-base md:text-lg mb-10 leading-relaxed"
            style={{ fontFamily: bodyFont }}
          >
            {t.body}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              className="cursor-pointer flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10"
              style={{ fontFamily: bodyFont }}
            >
              <Globe className="w-4 h-4" />
              {t.cta1}
            </button>
            <button
              className="cursor-pointer flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40"
              style={{ fontFamily: bodyFont }}
            >
              <MapPin className="w-4 h-4" />
              {t.cta2}
            </button>
          </div>
        </div>

        {/* Bottom Meridian Line */}
        <div className="absolute bottom-16 md:bottom-20 left-0 right-0 z-10 flex flex-col items-center">
          <div className="meridian-line relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
            {meridianTicks.map((pos, i) => (
              <div
                key={`tick-${i}`}
                className="tick-mark absolute top-0 w-px h-2 bg-white/15"
                style={{
                  left: `${pos}%`,
                  transformOrigin: "top",
                  animationDelay: `${1.0 + i * 0.06}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Subtle radial glow behind content */}
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            width: "600px",
            height: "600px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
          }}
        />
      </section>
    </>
  );
}
