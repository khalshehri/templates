"use client";

import { useRef, useCallback, useState } from "react";
import { ArrowRight, Palette, Eye } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    badge: "Creative Portfolio",
    heading: ["I Design", "& Build Things"],
    sub: "Freelance designer and developer crafting digital experiences that stand out. Every project is a story told through pixels and code.",
    tags: ["UI/UX Design", "Web Development", "Brand Identity"],
    cta1: "View My Work",
    cta2: "Hire Me",
    footer: "42 projects completed",
  },
  ar: {
    badge: "معرض الأعمال",
    heading: ["أصمّم", "وأبني الأشياء"],
    sub: "مصمم ومطور مستقل أصنع تجارب رقمية مميزة. كل مشروع هو قصة تُروى عبر البكسل والكود.",
    tags: ["تصميم UI/UX", "تطوير الويب", "هوية بصرية"],
    cta1: "شاهد أعمالي",
    cta2: "وظّفني",
    footer: "42 مشروع مكتمل",
  },
};

const projectCards = [
  { label: "E-commerce App", color: "#7c3aed", colorEnd: "#a78bfa", w: 180, h: 140, top: 8, left: 42, rotate: -3, floatDur: 7, floatDelay: 0 },
  { label: "SaaS Dashboard", color: "#ec4899", colorEnd: "#f9a8d4", w: 200, h: 160, top: 5, left: 68, rotate: 4, floatDur: 8, floatDelay: 0.8 },
  { label: "Brand Identity", color: "#06b6d4", colorEnd: "#67e8f9", w: 165, h: 130, top: 28, left: 52, rotate: -2, floatDur: 9, floatDelay: 1.5 },
  { label: "Mobile App", color: "#f59e0b", colorEnd: "#fcd34d", w: 190, h: 150, top: 25, left: 78, rotate: 5, floatDur: 7.5, floatDelay: 0.4 },
  { label: "Landing Page", color: "#10b981", colorEnd: "#6ee7b7", w: 175, h: 135, top: 50, left: 45, rotate: 3, floatDur: 8.5, floatDelay: 2 },
  { label: "Web App", color: "#3b82f6", colorEnd: "#93c5fd", w: 210, h: 170, top: 48, left: 72, rotate: -4, floatDur: 6.5, floatDelay: 1.2 },
  { label: "Logo Design", color: "#7c3aed", colorEnd: "#c4b5fd", w: 160, h: 125, top: 72, left: 50, rotate: 2, floatDur: 10, floatDelay: 0.6 },
  { label: "UI Kit", color: "#ec4899", colorEnd: "#fbcfe8", w: 185, h: 145, top: 70, left: 76, rotate: -5, floatDur: 7, floatDelay: 1.8 },
];

export function Hero03({ language }: { language: "en" | "ar" }) {
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

    const slideX = isAr ? 40 : -40;

    // Card fade-in animations
    gsap.from(".h03-card", {
      opacity: 0,
      scale: 0.85,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.15,
    });

    // Card floating animations
    const cards = containerRef.current?.querySelectorAll(".h03-card");
    cards?.forEach((card, i) => {
      const pc = projectCards[i];
      gsap.to(card, {
        y: i % 2 === 0 ? -8 : 8,
        duration: pc.floatDur,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: pc.floatDelay,
      });
    });

    // Panel slide in
    gsap.from(".h03-panel", {
      opacity: 0,
      x: slideX,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
    });

    // Badge
    gsap.from(".h03-badge", {
      opacity: 0,
      x: slideX,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.6,
    });

    // Heading
    gsap.from(".h03-heading", {
      opacity: 0,
      x: slideX,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.7,
    });

    // Sub text
    gsap.from(".h03-sub", {
      opacity: 0,
      x: slideX,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.85,
    });

    // Tags with stagger
    gsap.from(".h03-tag", {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      ease: "back.out(1.7)",
      stagger: 0.12,
      delay: 1,
    });

    // CTAs
    gsap.from(".h03-ctas", {
      opacity: 0,
      x: slideX,
      duration: 0.6,
      ease: "power2.out",
      delay: 1.2,
    });

    // Footer
    gsap.from(".h03-footer", {
      opacity: 0,
      x: slideX,
      duration: 0.6,
      ease: "power2.out",
      delay: 1.4,
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      style={{
        background: "#111111",
        fontFamily: fontBody,
        direction: isAr ? "rtl" : "ltr",
      }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Particles background */}
      <Particles
        id="h03-particles"
        init={particlesInit}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 30, density: { enable: true } },
            color: { value: ["#7c3aed", "#a78bfa", "#c4b5fd", "#6d28d9"] },
            shape: {
              type: "polygon",
              options: {
                polygon: { sides: 3 },
              },
            },
            opacity: {
              value: { min: 0.1, max: 0.35 },
              animation: { enable: true, speed: 0.5, sync: false },
            },
            size: {
              value: { min: 4, max: 10 },
              animation: { enable: true, speed: 1, sync: false },
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none" as const,
              outModes: { default: "out" as const },
            },
            rotate: {
              value: { min: 0, max: 360 },
              animation: { enable: true, speed: 3, sync: false },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Background radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 65% 30%, rgba(124,58,237,0.06) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(236,72,153,0.04) 0%, transparent 45%)",
        }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Project Cards — Background Masonry */}
      <div className="absolute inset-0 pointer-events-none">
        {projectCards.map((card, i) => {
          const mirroredLeft = isAr ? (100 - card.left - (card.w / 16)) : card.left;

          return (
            <div
              key={card.label}
              className="h03-card absolute pointer-events-auto"
              style={{
                width: card.w,
                height: card.h,
                top: `${card.top}%`,
                left: `${mirroredLeft}%`,
                borderRadius: 16,
                background: `linear-gradient(135deg, ${card.color} 0%, ${card.colorEnd} 100%)`,
                opacity: 0,
                rotation: card.rotate,
                boxShadow: `0 8px 32px ${card.color}33`,
                cursor: "pointer",
                overflow: "hidden",
                zIndex: 5,
                transition: "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.35s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1.08)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
                (e.currentTarget as HTMLDivElement).style.zIndex = "20";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${card.color}33`;
                (e.currentTarget as HTMLDivElement).style.zIndex = "5";
              }}
            >
              {/* Decorative inner shapes */}
              <div
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "12%",
                  width: "45%",
                  height: "35%",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.15)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "15%",
                  right: "12%",
                  width: "25%",
                  height: "16%",
                  borderRadius: 6,
                  background: "rgba(255,255,255,0.12)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "38%",
                  right: "12%",
                  width: "25%",
                  height: "16%",
                  borderRadius: 6,
                  background: "rgba(255,255,255,0.08)",
                }}
              />
              {/* Bottom label */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "10px 14px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.4))",
                  borderRadius: "0 0 16px 16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.9)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {card.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Glass Content Panel — Left Side */}
      <div
        className="relative z-10 flex items-center min-h-screen"
        style={{ padding: "80px 0" }}
      >
        <div
          className="h03-panel"
          style={{
            position: "relative",
            width: "min(520px, 44%)",
            minHeight: "75vh",
            marginLeft: isAr ? "auto" : "clamp(24px, 5vw, 80px)",
            marginRight: isAr ? "clamp(24px, 5vw, 80px)" : "auto",
            background: "rgba(17,17,17,0.85)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "clamp(32px, 4vw, 56px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 28,
            boxShadow: "0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Accent glow behind panel */}
          <div
            style={{
              position: "absolute",
              top: -1,
              left: isAr ? "auto" : -1,
              right: isAr ? -1 : "auto",
              width: 120,
              height: 120,
              borderRadius: "24px 0 0 0",
              background: "radial-gradient(circle at top left, rgba(124,58,237,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Badge */}
          <div
            className="h03-badge"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Palette size={14} style={{ color: "#7c3aed" }} />
            <span
              style={{
                fontFamily: fontBody,
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#a78bfa",
                letterSpacing: "0.1em",
                textTransform: isAr ? "none" : "uppercase",
              }}
            >
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <div className="h03-heading">
            <h1
              style={{
                fontFamily: fontHeading,
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.15,
                margin: 0,
                color: "#ffffff",
              }}
            >
              {t.heading[0]}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #c4b5fd 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.heading[1]}
              </span>
            </h1>
          </div>

          {/* Sub */}
          <div className="h03-sub">
            <p
              style={{
                fontFamily: fontBody,
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.5)",
                margin: 0,
                maxWidth: 420,
              }}
            >
              {t.sub}
            </p>
          </div>

          {/* Specialty Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="h03-tag"
                style={{
                  display: "inline-block",
                  padding: "7px 16px",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  fontFamily: fontBody,
                  color: "#c4b5fd",
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  borderRadius: 9999,
                  letterSpacing: "0.02em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="h03-ctas"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <button
              className="h03-cta-primary cursor-pointer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 26px",
                background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                color: "#ffffff",
                fontFamily: fontBody,
                fontSize: "0.88rem",
                fontWeight: 700,
                borderRadius: 12,
                border: "none",
                letterSpacing: "0.02em",
                boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 30px rgba(124,58,237,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(124,58,237,0.3)";
              }}
            >
              {t.cta1}
              <ArrowRight size={15} style={{ transform: isAr ? "scaleX(-1)" : "none" }} />
            </button>
            <button
              className="h03-cta-secondary cursor-pointer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 26px",
                background: "transparent",
                color: "#ffffff",
                fontFamily: fontBody,
                fontSize: "0.88rem",
                fontWeight: 600,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.12)",
                letterSpacing: "0.02em",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(124,58,237,0.5)";
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(124,58,237,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }}
            >
              {t.cta2}
            </button>
          </div>

          {/* Footer stat */}
          <div
            className="h03-footer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 4,
            }}
          >
            <Eye size={14} style={{ color: "#7c3aed" }} />
            <span
              style={{
                fontFamily: fontBody,
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.03em",
              }}
            >
              {t.footer}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.3) 50%, transparent 100%)",
        }}
      />
    </section>
  );
}
