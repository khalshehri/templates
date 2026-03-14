"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Type } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

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
  { top: "calc(50% - 120px)", left: "12%", size: 6, delay: 0.3 },
  { top: "calc(50% + 90px)", left: "78%", size: 8, delay: 0.6 },
  { top: "calc(50% - 80px)", left: "88%", size: 5, delay: 0.9 },
  { top: "calc(50% + 110px)", left: "22%", size: 7, delay: 1.2 },
];

export function Hero11({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];
  const containerRef = useRef<HTMLDivElement>(null);

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

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

  useGSAP(
    () => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        gsap.set(".hero11-ink", { opacity: 0.05, scale: 1 });
        gsap.set(".hero11-paper", { x: 0, rotation: -1 });
        gsap.set(".hero11-fade", { opacity: 1, y: 0 });
        gsap.set(".hero11-cursor", { opacity: 1 });
        return;
      }

      // Ink dots
      gsap.from(".hero11-ink", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.3,
      });

      // Paper slide
      gsap.from(".hero11-paper", {
        x: isAr ? "100%" : "-100%",
        duration: 0.8,
        ease: "power2.out",
      });

      // Fade up elements
      gsap.from(".hero11-fade", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      });

      // Cursor blink
      gsap.to(".hero11-cursor", {
        opacity: 0,
        duration: 0.35,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });
    },
    { scope: containerRef, dependencies: [language] }
  );

  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#111111", fontFamily: fontBody }}
    >
      {/* tsParticles — Retro amber/green typewriter-like floating characters */}
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 35, density: { enable: true, width: 1200, height: 800 } },
            color: { value: ["#d97706", "#22c55e", "#b45309", "#15803d"] },
            shape: {
              type: "char",
              options: {
                char: {
                  value: ["{", "}", "<", ">", "/", ";", "=", "(", ")", "&", "#", "*", "0", "1"],
                  font: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                  weight: "400",
                },
              },
            },
            opacity: {
              value: { min: 0.1, max: 0.35 },
              animation: { enable: true, speed: 0.5, sync: false },
            },
            size: {
              value: { min: 8, max: 18 },
            },
            move: {
              enable: true,
              speed: { min: 0.3, max: 0.8 },
              direction: "none",
              outModes: { default: "out" },
            },
            rotate: {
              value: { min: -15, max: 15 },
              animation: { enable: true, speed: 2, sync: false },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
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
            opacity: 0.05,
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
          }}
        >
          {t.name}
        </h1>

        {/* Typing line — on paper */}
        <div
          className="hero11-fade flex items-center justify-center gap-0 mb-3"
          style={{
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
          }}
        >
          {t.tagline}
        </p>

        {/* CTAs — below paper */}
        <div
          className="hero11-fade flex flex-wrap items-center justify-center gap-4 mb-10"
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
          }}
        >
          {t.location}
        </p>
      </div>
    </section>
  );
}
