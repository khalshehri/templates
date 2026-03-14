"use client";

import { useRef, useCallback, useState } from "react";
import { Music, Headphones, Radio, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const WAVE_BAR_COUNT = 40;

function generateBarHeights(): number[] {
  const heights: number[] = [];
  for (let i = 0; i < WAVE_BAR_COUNT; i++) {
    heights.push(Math.sin(i * 0.3) * 0.5 + 0.5);
  }
  return heights;
}

const barHeights = generateBarHeights();

const content = {
  en: {
    badge: "Creative Freelancer",
    headingLine1: "Your Vision,",
    headingLine2: "My Frequency",
    sub: "I tune into your brand's unique wavelength and amplify it through design, code, and creative strategy that resonates with your audience.",
    stats: [
      { label: "50+", desc: "Projects" },
      { label: "30+", desc: "Clients" },
      { label: "5", desc: "Years" },
      { label: "100%", desc: "Vibe" },
    ],
    ctaPrimary: "Tune In",
    ctaSecondary: "Listen to My Work",
    footer: "Let's create something that sounds as good as it looks.",
  },
  ar: {
    badge: "مستقل إبداعي",
    headingLine1: "رؤيتك،",
    headingLine2: "تردّدي",
    sub: "أتناغم مع الطول الموجي الفريد لعلامتك التجارية وأضخّمه من خلال التصميم والبرمجة والاستراتيجية الإبداعية التي تتردد صداها مع جمهورك.",
    stats: [
      { label: "50+", desc: "مشروع" },
      { label: "30+", desc: "عميل" },
      { label: "5", desc: "سنوات" },
      { label: "100%", desc: "انسجام" },
    ],
    ctaPrimary: "تواصل معي",
    ctaSecondary: "استمع لأعمالي",
    footer: "لنصنع شيئاً يبدو رائعاً بقدر ما يبدو.",
  },
};

// Vinyl record concentric ring radii (deterministic)
const vinylRings = [28, 36, 44, 52, 60, 68, 76, 84, 92];

export function Hero23({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";
  const dir = isAr ? "rtl" : "ltr";
  const containerRef = useRef<HTMLDivElement>(null);
  const [particlesReady, setParticlesReady] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Waveform bars: pulsing scaleY with staggered delays
      barHeights.forEach((_, i) => {
        gsap.to(`.wave-bar-${i}`, {
          scaleY: 0.3 + Math.sin(i * 0.5) * 0.3,
          duration: 0.6 + (i % 5) * 0.1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.05,
        });
      });

      // Vinyl record continuous rotation
      gsap.to(".vinyl-record", {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

      // Content fade + slide up with stagger
      gsap.from(".hero23-content-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      });

      // Stats count-up style reveal
      gsap.from(".hero23-stat", {
        y: 30,
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "back.out(1.4)",
        stagger: 0.1,
        delay: 0.8,
      });

      // Waveform container fade in
      gsap.from(".waveform-container", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
        delay: 0.4,
      });

      // Footer text fade
      gsap.from(".hero23-footer", {
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      dir={dir}
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a1a 0%, #0f0a2a 40%, #0a0a1a 100%)",
        fontFamily: fontBody,
      }}
    >
      {/* Particles Background */}
      <Particles
        id="hero23-particles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: {
              value: 30,
              density: { enable: true, width: 1920, height: 1080 },
            },
            color: {
              value: ["#8b5cf6", "#ec4899", "#06b6d4"],
            },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.1, max: 0.4 },
              animation: { enable: true, speed: 0.8, sync: false },
            },
            size: {
              value: { min: 1, max: 3 },
              animation: { enable: true, speed: 1, sync: false },
            },
            move: {
              enable: true,
              speed: 0.4,
              direction: "top" as const,
              outModes: { default: "out" as const },
              straight: false,
              gravity: { enable: false },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(139,92,246,0.08) 0%, transparent 60%)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col items-center">
        {/* ===== BADGE ===== */}
        <div className="hero23-content-item flex items-center gap-2 mb-8">
          <div
            style={{
              background: "rgba(139,92,246,0.15)",
              border: "1px solid rgba(139,92,246,0.3)",
              borderRadius: "9999px",
              padding: "8px 20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Music size={16} style={{ color: "#8b5cf6" }} />
            <span
              style={{
                color: "#c4b5fd",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                fontFamily: fontBody,
              }}
            >
              {t.badge}
            </span>
          </div>
        </div>

        {/* ===== HEADING ===== */}
        <h1
          className="hero23-content-item text-center"
          style={{
            fontFamily: fontHeading,
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          <span
            className="block text-4xl sm:text-5xl md:text-7xl font-bold"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.headingLine1}
          </span>
          <span
            className="block text-4xl sm:text-5xl md:text-7xl font-bold mt-1 sm:mt-2"
            style={{
              background:
                "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.headingLine2}
          </span>
        </h1>

        {/* ===== SUBHEADING ===== */}
        <p
          className="hero23-content-item text-center max-w-2xl"
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "16px",
            lineHeight: 1.8,
            fontFamily: fontBody,
            marginBottom: "40px",
          }}
        >
          {t.sub}
        </p>

        {/* ===== VINYL RECORD ===== */}
        <div
          className="hero23-content-item mb-10"
          style={{ position: "relative", width: "200px", height: "200px" }}
        >
          <div
            className="vinyl-record"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "#0a0a1a",
              border: "3px solid rgba(139,92,246,0.3)",
              position: "relative",
              boxShadow:
                "0 0 40px rgba(139,92,246,0.15), 0 0 80px rgba(236,72,153,0.08)",
            }}
          >
            {/* Concentric rings */}
            {vinylRings.map((r, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: `${r * 2}px`,
                  height: `${r * 2}px`,
                  borderRadius: "50%",
                  border: `1px solid ${
                    i % 3 === 0
                      ? "rgba(139,92,246,0.25)"
                      : i % 3 === 1
                      ? "rgba(236,72,153,0.2)"
                      : "rgba(6,182,212,0.15)"
                  }`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
            {/* Center dot */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #8b5cf6, #ec4899)",
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 12px rgba(139,92,246,0.5)",
              }}
            />
            {/* Label ring */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "1px solid rgba(139,92,246,0.4)",
                transform: "translate(-50%, -50%)",
                background: "rgba(139,92,246,0.05)",
              }}
            />
          </div>
        </div>

        {/* ===== STATS ===== */}
        <div
          className="flex items-center justify-center flex-wrap gap-6 sm:gap-10 mb-10"
        >
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className="hero23-stat text-center cursor-pointer"
              style={{
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "scale(1)";
              }}
            >
              <div
                style={{
                  fontFamily: fontHeading,
                  fontSize: "28px",
                  fontWeight: 700,
                  background:
                    i % 3 === 0
                      ? "linear-gradient(135deg, #8b5cf6, #a78bfa)"
                      : i % 3 === 1
                      ? "linear-gradient(135deg, #ec4899, #f472b6)"
                      : "linear-gradient(135deg, #06b6d4, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "13px",
                  fontFamily: fontBody,
                  marginTop: "4px",
                  letterSpacing: "0.5px",
                }}
              >
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* ===== CTA BUTTONS ===== */}
        <div className="hero23-content-item flex items-center justify-center gap-4 flex-wrap mb-8">
          <button
            className="cursor-pointer group"
            style={{
              background:
                "linear-gradient(135deg, #8b5cf6, #ec4899)",
              color: "#ffffff",
              border: "none",
              borderRadius: "12px",
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: 600,
              fontFamily: fontBody,
              boxShadow:
                "0 4px 20px rgba(139,92,246,0.3), 0 0 40px rgba(139,92,246,0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px) scale(1.03)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 8px 30px rgba(139,92,246,0.4), 0 0 60px rgba(139,92,246,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0) scale(1)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 4px 20px rgba(139,92,246,0.3), 0 0 40px rgba(139,92,246,0.1)";
            }}
          >
            <Headphones size={18} />
            {t.ctaPrimary}
            <ArrowRight
              size={16}
              className={isAr ? "rotate-180" : ""}
            />
          </button>

          <button
            className="cursor-pointer"
            style={{
              background: "rgba(139,92,246,0.1)",
              color: "#c4b5fd",
              border: "1px solid rgba(139,92,246,0.3)",
              borderRadius: "12px",
              padding: "14px 28px",
              fontSize: "15px",
              fontWeight: 600,
              fontFamily: fontBody,
              transition: "transform 0.2s, background 0.2s, border-color 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(139,92,246,0.2)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(139,92,246,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(139,92,246,0.1)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(139,92,246,0.3)";
            }}
          >
            <Radio size={16} />
            {t.ctaSecondary}
          </button>
        </div>

        {/* ===== WAVEFORM EQUALIZER ===== */}
        <div
          className="waveform-container w-full"
          style={{
            position: "relative",
            height: "180px",
            marginBottom: "24px",
          }}
        >
          {/* Waveform bars */}
          <div
            className="flex items-end justify-center gap-[3px] sm:gap-[5px]"
            style={{
              height: "100%",
              position: "relative",
              zIndex: 2,
            }}
          >
            {barHeights.map((h, i) => {
              const barColor =
                i % 3 === 0
                  ? "#8b5cf6"
                  : i % 3 === 1
                  ? "#ec4899"
                  : "#06b6d4";
              const barHeight = 30 + h * 120;

              return (
                <div
                  key={i}
                  className="relative"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Bar */}
                  <div
                    className={`wave-bar-${i}`}
                    style={{
                      width: "6px",
                      height: `${barHeight}px`,
                      borderRadius: "3px",
                      background: `linear-gradient(180deg, ${barColor}, ${barColor}88)`,
                      boxShadow: `0 0 8px ${barColor}40, 0 0 16px ${barColor}20`,
                      transformOrigin: "bottom center",
                    }}
                  />
                  {/* Reflection/glow below */}
                  <div
                    style={{
                      width: "6px",
                      height: `${barHeight * 0.4}px`,
                      borderRadius: "3px",
                      background: `linear-gradient(180deg, ${barColor}30, transparent)`,
                      marginTop: "4px",
                      opacity: 0.5,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== FOOTER TEXT ===== */}
        <p
          className="hero23-footer text-center"
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "14px",
            fontFamily: fontBody,
            letterSpacing: "0.3px",
          }}
        >
          {t.footer}
        </p>
      </div>
    </section>
  );
}
