"use client";

import { useRef, useCallback, useState } from "react";
import { ArrowRight, Pencil, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    badge: "Handcrafted with care",
    headingLine1: "I make things",
    headingLine2: "look ",
    highlight: "beautiful",
    sub: "Hi! I'm a freelance designer who believes in the power of thoughtful, handcrafted design. Every pixel is placed with intention, every color chosen with purpose.",
    services: [
      { label: "Brand Design", border: "#e85d04" },
      { label: "Web Design", border: "#dc2f02" },
      { label: "Illustration", border: "#ffc300" },
    ],
    cta1: "See My Work",
    cta2: "Say Hello",
    footer: "Currently: Available for projects \u2726",
  },
  ar: {
    badge: "\u0645\u0635\u0646\u0648\u0639 \u0628\u0639\u0646\u0627\u064a\u0629 \u064a\u062f\u0648\u064a\u0629",
    headingLine1: "\u0623\u062c\u0639\u0644 \u0627\u0644\u0623\u0634\u064a\u0627\u0621",
    headingLine2: "\u062a\u0628\u062f\u0648 ",
    highlight: "\u062c\u0645\u064a\u0644\u0629",
    sub: "\u0645\u0631\u062d\u0628\u0627\u064b! \u0623\u0646\u0627 \u0645\u0635\u0645\u0645 \u0645\u0633\u062a\u0642\u0644 \u0623\u0624\u0645\u0646 \u0628\u0642\u0648\u0629 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u062f\u0631\u0648\u0633 \u0648\u0627\u0644\u0645\u0635\u0646\u0648\u0639 \u064a\u062f\u0648\u064a\u0627\u064b. \u0643\u0644 \u0628\u0643\u0633\u0644 \u0645\u0648\u0636\u0648\u0639 \u0628\u0639\u0646\u0627\u064a\u0629\u060c \u0648\u0643\u0644 \u0644\u0648\u0646 \u0645\u062e\u062a\u0627\u0631 \u0628\u0647\u062f\u0641.",
    services: [
      { label: "\u062a\u0635\u0645\u064a\u0645 \u0639\u0644\u0627\u0645\u0627\u062a", border: "#e85d04" },
      { label: "\u062a\u0635\u0645\u064a\u0645 \u0648\u064a\u0628", border: "#dc2f02" },
      { label: "\u0631\u0633\u0648\u0645 \u062a\u0648\u0636\u064a\u062d\u064a\u0629", border: "#ffc300" },
    ],
    cta1: "\u0634\u0627\u0647\u062f \u0623\u0639\u0645\u0627\u0644\u064a",
    cta2: "\u0642\u0644 \u0645\u0631\u062d\u0628\u0627\u064b",
    footer: "\u062d\u0627\u0644\u064a\u0627\u064b: \u0645\u062a\u0627\u062d \u0644\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u2726",
  },
};

export function Hero10({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";
  const containerRef = useRef<HTMLDivElement>(null);
  const [particlesReady, setParticlesReady] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // SVG draw-line animations
    const svgDrawElements = containerRef.current?.querySelectorAll(".hero10-draw");
    svgDrawElements?.forEach((el, i) => {
      const dashLength = parseFloat(getComputedStyle(el).strokeDasharray) || 300;
      gsap.fromTo(el, {
        strokeDashoffset: dashLength,
      }, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2 * (i + 1),
      });
    });

    // Highlight reveal
    gsap.fromTo(".hero10-highlight", {
      scaleX: 0,
    }, {
      scaleX: 1,
      duration: 0.4,
      ease: "power2.out",
      delay: 0.8,
    });

    // Fade-up elements
    gsap.from(".hero10-fadeup", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
    });

    // Wiggle on service pills
    gsap.to(".hero10-wiggle", {
      rotation: "+=2",
      duration: 1,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.3,
        from: "start",
      },
    });

    // Arrow bounce
    const arrowSelector = isAr ? ".hero10-arrow-bounce-rtl" : ".hero10-arrow-bounce";
    gsap.to(arrowSelector, {
      x: isAr ? -10 : 10,
      duration: 0.75,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: "#faf6f1",
        fontFamily: fontBody,
      }}
    >
      {/* Particles Background */}
      <Particles
        id="hero10-particles"
        init={particlesInit}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 35, density: { enable: true } },
            color: { value: ["#8B5E3C", "#e85d04", "#dc2f02", "#D2691E", "#F4845F"] },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.15, max: 0.4 },
              animation: { enable: true, speed: 0.6, sync: false },
            },
            size: {
              value: { min: 2, max: 6 },
              animation: { enable: true, speed: 1.2, sync: false },
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              outModes: { default: "out" },
              path: {
                enable: true,
                options: {
                  waveLength: { min: 3, max: 7 },
                  waveHeight: { min: 1, max: 3 },
                },
              },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2d2016 0.8px, transparent 0.8px)",
          backgroundSize: "24px 24px",
          opacity: 0.03,
        }}
      />

      {/* SVG hand-drawn decorative elements */}
      {/* Top-left rough bracket */}
      <svg
        className="absolute hero10-draw"
        style={{
          top: "12%",
          [isAr ? "right" : "left"]: "8%",
          width: 40,
          height: 80,
          opacity: 0.18,
          strokeDasharray: 200,
          strokeDashoffset: 200,
        }}
        viewBox="0 0 40 80"
        fill="none"
      >
        <path
          d="M30 4 C12 4, 8 10, 8 20 C8 30, 8 50, 8 60 C8 70, 12 76, 30 76"
          stroke="#2d2016"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Top-right small sparkle star */}
      <svg
        className="absolute hero10-draw"
        style={{
          top: "15%",
          [isAr ? "left" : "right"]: "12%",
          width: 32,
          height: 32,
          opacity: 0.2,
          strokeDasharray: 120,
          strokeDashoffset: 120,
        }}
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M16 2 L18 12 L28 14 L18 17 L16 28 L14 17 L4 14 L14 12 Z"
          stroke="#e85d04"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Right side rough sparkle */}
      <svg
        className="absolute hero10-draw"
        style={{
          top: "40%",
          [isAr ? "left" : "right"]: "6%",
          width: 28,
          height: 28,
          opacity: 0.15,
          strokeDasharray: 80,
          strokeDashoffset: 80,
        }}
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M14 2 L15.5 11 L24 14 L15.5 16.5 L14 26 L12.5 16.5 L4 14 L12.5 11 Z"
          stroke="#2d2016"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Bottom-left small circle */}
      <svg
        className="absolute hero10-draw"
        style={{
          bottom: "20%",
          [isAr ? "right" : "left"]: "10%",
          width: 36,
          height: 36,
          opacity: 0.15,
          strokeDasharray: 120,
          strokeDashoffset: 120,
        }}
        viewBox="0 0 36 36"
        fill="none"
      >
        <ellipse
          cx="18"
          cy="18"
          rx="14"
          ry="13"
          stroke="#dc2f02"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>

      {/* Bottom-right rough bracket (mirrored) */}
      <svg
        className="absolute hero10-draw"
        style={{
          bottom: "15%",
          [isAr ? "left" : "right"]: "9%",
          width: 40,
          height: 80,
          opacity: 0.15,
          strokeDasharray: 200,
          strokeDashoffset: 200,
        }}
        viewBox="0 0 40 80"
        fill="none"
      >
        <path
          d="M10 4 C28 4, 32 10, 32 20 C32 30, 32 50, 32 60 C32 70, 28 76, 10 76"
          stroke="#2d2016"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="hero10-fadeup inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              border: "1.5px dashed #e85d04",
              color: "#e85d04",
              fontFamily: fontBody,
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            <Pencil size={15} />
            <span>{t.badge}</span>
          </div>

          {/* Heading */}
          <h1
            className="hero10-fadeup text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{
              color: "#2d2016",
              fontFamily: fontHeading,
            }}
          >
            {t.headingLine1}
            <br />
            {t.headingLine2}
            <span className="relative inline-block">
              {/* Yellow marker highlight */}
              <span
                className="hero10-highlight absolute inset-0 -skew-y-1 rounded-sm"
                style={{
                  backgroundColor: "rgba(255, 195, 0, 0.4)",
                  top: "10%",
                  bottom: "5%",
                  [isAr ? "right" : "left"]: "-4px",
                  [isAr ? "left" : "right"]: "-4px",
                  zIndex: 0,
                  transformOrigin: isAr ? "right" : "left",
                  transform: "scaleX(0)",
                }}
              />
              <span className="relative z-10">{t.highlight}</span>
              {/* Hand-drawn wavy underline */}
              <svg
                className="absolute hero10-draw"
                style={{
                  bottom: "-8px",
                  left: "-5%",
                  width: "110%",
                  height: "12px",
                  strokeDasharray: 300,
                  strokeDashoffset: 300,
                }}
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M2 8 C20 2, 40 12, 60 6 C80 0, 100 10, 120 5 C140 0, 160 10, 180 4 C190 2, 195 6, 198 5"
                  stroke="#e85d04"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="hero10-fadeup text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{
              color: "#2d2016",
              opacity: 0.75,
              fontFamily: fontBody,
            }}
          >
            {t.sub}
          </p>

          {/* Service pills */}
          <div className="hero10-fadeup flex flex-wrap items-center justify-center gap-3 mb-10">
            {t.services.map((service, i) => {
              const rotations = [-2, 1, -1];
              const rotation = rotations[i];
              return (
                <span
                  key={i}
                  className="hero10-wiggle px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer"
                  style={{
                    border: `2px solid ${service.border}`,
                    color: "#2d2016",
                    backgroundColor: "rgba(255,255,255,0.6)",
                    fontFamily: fontBody,
                    transform: `rotate(${rotation}deg)`,
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      `${service.border}20`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(255,255,255,0.6)";
                  }}
                >
                  {service.label}
                </span>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="hero10-fadeup flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-200"
              style={{
                backgroundColor: "#e85d04",
                color: "#fff",
                fontFamily: fontBody,
                transform: "rotate(-1deg)",
                boxShadow: "0 4px 16px rgba(232, 93, 4, 0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#d45303";
                (e.currentTarget as HTMLElement).style.transform = "rotate(-1deg) translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(232, 93, 4, 0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#e85d04";
                (e.currentTarget as HTMLElement).style.transform = "rotate(-1deg)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(232, 93, 4, 0.25)";
              }}
            >
              {t.cta1}
              <ArrowRight size={18} />
            </button>

            <button
              className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-200"
              style={{
                border: "2px solid #2d2016",
                color: "#2d2016",
                backgroundColor: "transparent",
                fontFamily: fontBody,
                transform: "rotate(1deg)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#2d2016";
                (e.currentTarget as HTMLElement).style.color = "#faf6f1";
                (e.currentTarget as HTMLElement).style.transform = "rotate(1deg) translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#2d2016";
                (e.currentTarget as HTMLElement).style.transform = "rotate(1deg)";
              }}
            >
              <Sparkles size={18} />
              {t.cta2}
            </button>
          </div>

          {/* Footer with squiggly arrow */}
          <div className="hero10-fadeup flex items-center justify-center gap-3">
            {/* Squiggly arrow pointing to text */}
            <svg
              className={isAr ? "hero10-arrow-bounce-rtl" : "hero10-arrow-bounce"}
              style={{
                width: 36,
                height: 20,
                flexShrink: 0,
                transform: isAr ? "scaleX(-1)" : "none",
              }}
              viewBox="0 0 36 20"
              fill="none"
            >
              <path
                d="M2 10 C8 4, 14 16, 20 10 C26 4, 30 10, 34 10"
                stroke="#e85d04"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M30 6 L34 10 L30 14"
                stroke="#e85d04"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span
              className="text-sm font-medium tracking-wide"
              style={{
                color: "#2d2016",
                opacity: 0.7,
                fontFamily: fontBody,
              }}
            >
              {t.footer}
            </span>
          </div>

          {/* Hand-drawn circle around heading area — large decorative */}
          <svg
            className="absolute hero10-draw pointer-events-none hidden lg:block"
            style={{
              top: "22%",
              [isAr ? "left" : "right"]: "15%",
              width: 100,
              height: 60,
              opacity: 0.12,
              strokeDasharray: 300,
              strokeDashoffset: 300,
            }}
            viewBox="0 0 100 60"
            fill="none"
          >
            <ellipse
              cx="50"
              cy="30"
              rx="45"
              ry="25"
              stroke="#2d2016"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="8 4"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
