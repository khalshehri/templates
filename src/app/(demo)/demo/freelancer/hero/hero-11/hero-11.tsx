"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Type } from "lucide-react";

const content = {
  en: {
    greeting: "Hello, my name is",
    name: "Alex Rivera",
    prefix: "I'm a ",
    words: ["Designer", "Developer", "Strategist", "Creator", "Problem Solver"],
    tagline: "Turning caffeine into code and pixels since 2015",
    cta1: "See My Work",
    cta2: "Get In Touch",
    stats: [
      { value: "9+", label: "Years" },
      { value: "150+", label: "Projects" },
      { value: "40+", label: "Clients" },
      { value: "5", label: "Awards" },
    ],
    location: "Currently based in Austin, TX",
  },
  ar: {
    greeting: "مرحباً، اسمي",
    name: "أليكس ريفيرا",
    prefix: "أنا ",
    words: ["مصمم", "مطور", "استراتيجي", "مبدع", "حلّال مشاكل"],
    tagline: "أحوّل القهوة إلى كود وبكسل منذ 2015",
    cta1: "شاهد أعمالي",
    cta2: "تواصل معي",
    stats: [
      { value: "+9", label: "سنوات" },
      { value: "+150", label: "مشروع" },
      { value: "+40", label: "عميل" },
      { value: "5", label: "جوائز" },
    ],
    location: "مقيم حالياً في أوستن، تكساس",
  },
};

const inkDots = [
  { top: "calc(50% - 120px)", left: "12%", size: 6, delay: "0.3s" },
  { top: "calc(50% + 90px)", left: "78%", size: 8, delay: "0.6s" },
  { top: "calc(50% - 80px)", left: "88%", size: 5, delay: "0.9s" },
  { top: "calc(50% + 110px)", left: "22%", size: 7, delay: "1.2s" },
];

export function Hero11({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setWordIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const currentWord = t.words[wordIndex];

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setDisplayText(currentWord);
      const timeout = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % t.words.length);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % t.words.length);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isDeleting, wordIndex, t.words]);

  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes paperSlide {
          from { transform: translateX(${isAr ? "100%" : "-100%"}) rotate(-1deg); }
          to { transform: translateX(0) rotate(-1deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes inkDrop {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 0.05; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero11-paper { animation: none !important; transform: rotate(-1deg) !important; }
          .hero11-fade { animation: none !important; opacity: 1 !important; }
          .hero11-ink { animation: none !important; opacity: 0.05 !important; transform: scale(1) !important; }
          .hero11-cursor { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <section
        className="min-h-screen relative overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: "#111111", fontFamily: fontBody }}
      >
        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />

        {/* Ink dot accents */}
        {inkDots.map((dot, i) => (
          <div
            key={i}
            className="hero11-ink absolute rounded-full pointer-events-none"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              backgroundColor: "#000000",
              opacity: 0,
              transform: "scale(0)",
              animation: `inkDrop 0.5s ease-out ${dot.delay} forwards`,
            }}
          />
        ))}

        {/* Paper strip */}
        <div
          className="hero11-paper absolute left-0 right-0 z-[1]"
          style={{
            top: "50%",
            marginTop: "-100px",
            height: "200px",
            backgroundColor: "#f5f0e8",
            transform: "rotate(-1deg)",
            animation: "paperSlide 0.8s ease-out forwards",
            boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
          {/* Greeting — above paper */}
          <p
            className="hero11-fade text-sm sm:text-base tracking-widest uppercase mb-6"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontFamily: fontBody,
              animation: "fadeUp 0.6s ease-out 0.3s both",
            }}
          >
            {t.greeting}
          </p>

          {/* Name — on paper (dark text) */}
          <h1
            className="hero11-fade text-5xl sm:text-6xl font-bold mb-3"
            style={{
              color: "#1a1a1a",
              fontFamily: fontHeading,
              animation: "fadeUp 0.6s ease-out 0.5s both",
            }}
          >
            {t.name}
          </h1>

          {/* Typing line — on paper */}
          <div
            className="hero11-fade flex items-center justify-center gap-0 mb-3"
            style={{
              animation: "fadeUp 0.6s ease-out 0.7s both",
              minHeight: "2.5rem",
            }}
          >
            <span
              className="text-xl sm:text-2xl"
              style={{ color: "#1a1a1a", fontFamily: fontBody }}
            >
              {t.prefix}
            </span>
            <span
              className="text-xl sm:text-2xl font-semibold"
              style={{
                color: "#e11d48",
                fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace",
                direction: isAr ? "rtl" : "ltr",
                unicodeBidi: "bidi-override",
              }}
            >
              {displayText}
            </span>
            <span
              className="hero11-cursor text-xl sm:text-2xl font-light"
              style={{
                color: "#e11d48",
                animation: "blink 0.7s step-end infinite",
                marginInlineStart: "1px",
              }}
            >
              |
            </span>
          </div>

          {/* Tagline — on paper */}
          <p
            className="hero11-fade text-sm sm:text-base mb-10"
            style={{
              color: "#555555",
              fontFamily: fontBody,
              animation: "fadeUp 0.6s ease-out 0.9s both",
            }}
          >
            {t.tagline}
          </p>

          {/* CTAs — below paper */}
          <div
            className="hero11-fade flex flex-wrap items-center justify-center gap-4 mb-10"
            style={{ animation: "fadeUp 0.6s ease-out 1.1s both" }}
          >
            <button
              className="cursor-pointer inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#e11d48", fontFamily: fontBody }}
            >
              <Type size={16} />
              {t.cta1}
            </button>
            <button
              className="cursor-pointer inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white border border-white/20 transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95"
              style={{ backgroundColor: "transparent", fontFamily: fontBody }}
            >
              {t.cta2}
              <ArrowRight
                size={16}
                className={isAr ? "rotate-180" : ""}
              />
            </button>
          </div>

          {/* Stats */}
          <div
            className="hero11-fade grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8"
            style={{ animation: "fadeUp 0.6s ease-out 1.3s both" }}
          >
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "#e11d48", fontFamily: fontHeading }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs sm:text-sm mt-1"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: fontBody,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Location */}
          <p
            className="hero11-fade text-xs"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: fontBody,
              animation: "fadeUp 0.6s ease-out 1.5s both",
            }}
          >
            {t.location}
          </p>
        </div>
      </section>
    </>
  );
}
