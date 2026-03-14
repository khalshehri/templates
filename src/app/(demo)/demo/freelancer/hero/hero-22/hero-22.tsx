"use client";

import { useRef, useCallback, useState } from "react";
import { Palette, Code, Target, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    badge: "Crafted with Precision",
    headingLine1: "Every Detail",
    headingLine2: "Carefully Folded",
    sub: "Like origami, great digital work requires patience, precision, and a vision for the final form. I craft experiences that unfold beautifully.",
    cards: [
      {
        title: "Design",
        desc: "Interfaces folded with pixel-perfect precision",
        icon: "palette" as const,
      },
      {
        title: "Development",
        desc: "Clean code architecture that holds its shape",
        icon: "code" as const,
      },
      {
        title: "Strategy",
        desc: "Plans that unfold into measurable results",
        icon: "target" as const,
      },
    ],
    ctaPrimary: "Start Crafting",
    ctaSecondary: "See My Folds",
    footer: "From flat concept to dimensional reality.",
  },
  ar: {
    badge: "\u0645\u0635\u0646\u0648\u0639 \u0628\u062f\u0642\u0629",
    headingLine1: "\u0643\u0644 \u062a\u0641\u0635\u064a\u0644",
    headingLine2: "\u0645\u0637\u0648\u064a \u0628\u0639\u0646\u0627\u064a\u0629",
    sub: "\u0645\u062b\u0644 \u0627\u0644\u0623\u0648\u0631\u064a\u063a\u0627\u0645\u064a\u060c \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0631\u0642\u0645\u064a \u0627\u0644\u0631\u0627\u0626\u0639 \u064a\u062a\u0637\u0644\u0628 \u0627\u0644\u0635\u0628\u0631 \u0648\u0627\u0644\u062f\u0642\u0629 \u0648\u0631\u0624\u064a\u0629 \u0644\u0644\u0634\u0643\u0644 \u0627\u0644\u0646\u0647\u0627\u0626\u064a. \u0623\u0635\u0646\u0639 \u062a\u062c\u0627\u0631\u0628 \u062a\u0646\u0643\u0634\u0641 \u0628\u062c\u0645\u0627\u0644.",
    cards: [
      {
        title: "\u0627\u0644\u062a\u0635\u0645\u064a\u0645",
        desc: "\u0648\u0627\u062c\u0647\u0627\u062a \u0645\u0637\u0648\u064a\u0629 \u0628\u062f\u0642\u0629 \u0627\u0644\u0628\u0643\u0633\u0644",
        icon: "palette" as const,
      },
      {
        title: "\u0627\u0644\u062a\u0637\u0648\u064a\u0631",
        desc: "\u0628\u0646\u064a\u0629 \u0643\u0648\u062f \u0646\u0638\u064a\u0641\u0629 \u062a\u062d\u0627\u0641\u0638 \u0639\u0644\u0649 \u0634\u0643\u0644\u0647\u0627",
        icon: "code" as const,
      },
      {
        title: "\u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629",
        desc: "\u062e\u0637\u0637 \u062a\u062a\u0643\u0634\u0641 \u0644\u0646\u062a\u0627\u0626\u062c \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0642\u064a\u0627\u0633",
        icon: "target" as const,
      },
    ],
    ctaPrimary: "\u0627\u0628\u062f\u0623 \u0627\u0644\u0635\u0646\u0639",
    ctaSecondary: "\u0634\u0627\u0647\u062f \u0623\u0639\u0645\u0627\u0644\u064a",
    footer: "\u0645\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u0633\u0637\u062d \u0625\u0644\u0649 \u0648\u0627\u0642\u0639 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0623\u0628\u0639\u0627\u062f.",
  },
};

function CardIcon({ icon, className }: { icon: string; className?: string }) {
  const props = { size: 28, className };
  switch (icon) {
    case "palette":
      return <Palette {...props} />;
    case "code":
      return <Code {...props} />;
    case "target":
      return <Target {...props} />;
    default:
      return null;
  }
}

// SVG origami crane path
function OrigamiCrane({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: 48, height: 48 }}
    >
      {/* Body */}
      <polygon
        points="32,8 52,32 32,28 12,32"
        fill="#dc2626"
        opacity="0.9"
      />
      {/* Left wing */}
      <polygon
        points="12,32 2,24 32,28"
        fill="#b91c1c"
        opacity="0.8"
      />
      {/* Right wing */}
      <polygon
        points="52,32 62,24 32,28"
        fill="#ef4444"
        opacity="0.8"
      />
      {/* Tail */}
      <polygon
        points="32,28 24,52 32,44 40,52"
        fill="#dc2626"
        opacity="0.7"
      />
      {/* Head/beak */}
      <polygon
        points="32,8 28,4 32,2 36,4"
        fill="#ca8a04"
        opacity="0.9"
      />
      {/* Fold line details */}
      <line x1="32" y1="8" x2="32" y2="44" stroke="#1e1b4b" strokeWidth="0.5" opacity="0.3" />
      <line x1="12" y1="32" x2="52" y2="32" stroke="#1e1b4b" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

export function Hero22({ language }: { language: "en" | "ar" }) {
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

      // Badge fade in
      gsap.from(".origami-badge", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out",
      });

      // Heading lines stagger
      gsap.from(".origami-heading-line", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.3,
      });

      // Subtitle fade
      gsap.from(".origami-sub", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.7,
      });

      // Origami crane float animation
      gsap.to(".origami-crane", {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Crane gentle rotation
      gsap.to(".origami-crane", {
        rotate: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Paper panels unfold with perspective
      gsap.from(".origami-panel", {
        rotateX: -90,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.25,
        delay: 1,
        transformOrigin: "top center",
      });

      // Panel content fade in after unfold
      gsap.from(".origami-panel-content", {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.25,
        delay: 1.6,
      });

      // Fold lines draw (scale from 0 to 1)
      gsap.from(".origami-fold-line", {
        scaleX: 0,
        duration: 1.5,
        ease: "power2.inOut",
        stagger: 0.3,
        delay: 0.5,
        transformOrigin: "center center",
      });

      // CTA buttons fade in
      gsap.from(".origami-cta", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.15,
        delay: 2,
      });

      // Footer text
      gsap.from(".origami-footer", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 2.4,
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
        background: "#faf8f5",
        fontFamily: fontBody,
      }}
    >
      {/* Paper texture noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
          zIndex: 1,
        }}
      />

      {/* Subtle diagonal fold lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div
          className="origami-fold-line absolute"
          style={{
            top: "20%",
            left: "5%",
            right: "5%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(30,27,75,0.06), transparent)",
          }}
        />
        <div
          className="origami-fold-line absolute"
          style={{
            top: "45%",
            left: "10%",
            right: "10%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(30,27,75,0.08), transparent)",
            transform: "rotate(-1deg)",
          }}
        />
        <div
          className="origami-fold-line absolute"
          style={{
            top: "70%",
            left: "8%",
            right: "8%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(30,27,75,0.05), transparent)",
            transform: "rotate(0.5deg)",
          }}
        />
      </div>

      {/* Particles — warm floating dust */}
      <Particles
        id="hero22-particles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: {
              value: 20,
              density: { enable: true, width: 1920, height: 1080 },
            },
            color: {
              value: ["#d4a373", "#c4956a", "#e8d5b7"],
            },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.1, max: 0.3 },
              animation: { enable: true, speed: 0.3, sync: false },
            },
            size: {
              value: { min: 1, max: 3 },
              animation: { enable: true, speed: 0.5, sync: false },
            },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none" as const,
              outModes: { default: "out" as const },
              straight: false,
              gravity: { enable: false },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Badge */}
        <div className="origami-badge flex items-center justify-center gap-3 mb-8">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 18px",
              borderRadius: "100px",
              border: "1px solid rgba(30,27,75,0.12)",
              background: "rgba(30,27,75,0.04)",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#dc2626",
              }}
            />
            <span
              style={{
                fontFamily: fontBody,
                fontSize: "13px",
                fontWeight: 500,
                color: "#78716c",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              {t.badge}
            </span>
          </div>
        </div>

        {/* Heading with crane */}
        <div className="text-center mb-6 relative">
          {/* Origami crane floating near heading */}
          <div
            className="origami-crane absolute"
            style={{
              top: "-16px",
              right: isAr ? "auto" : "calc(50% - 220px)",
              left: isAr ? "calc(50% - 220px)" : "auto",
            }}
          >
            <OrigamiCrane />
          </div>

          <h1
            className="origami-heading-line"
            style={{
              fontFamily: fontHeading,
              fontSize: "clamp(40px, 7vw, 72px)",
              fontWeight: 800,
              color: "#1e1b4b",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            {t.headingLine1}
          </h1>
          <h1
            className="origami-heading-line"
            style={{
              fontFamily: fontHeading,
              fontSize: "clamp(40px, 7vw, 72px)",
              fontWeight: 800,
              color: "#1e1b4b",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
              position: "relative",
            }}
          >
            {t.headingLine2}
            {/* Decorative underline accent */}
            <span
              style={{
                position: "absolute",
                bottom: "-4px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60%",
                height: "3px",
                background: "linear-gradient(90deg, transparent, #dc2626, #ca8a04, transparent)",
                borderRadius: "2px",
              }}
            />
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="origami-sub text-center mx-auto"
          style={{
            fontFamily: fontBody,
            fontSize: "17px",
            lineHeight: 1.75,
            color: "#78716c",
            maxWidth: "560px",
            marginBottom: "48px",
          }}
        >
          {t.sub}
        </p>

        {/* Paper Fold Panels — 3 service cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-12"
          style={{ perspective: "1200px" }}
        >
          {t.cards.map((card, i) => {
            const accentColors = ["#dc2626", "#1e1b4b", "#ca8a04"];
            const bgTints = [
              "rgba(220,38,38,0.03)",
              "rgba(30,27,75,0.03)",
              "rgba(202,138,4,0.03)",
            ];

            return (
              <div
                key={i}
                className="origami-panel cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, #ffffff, ${bgTints[i]})`,
                  border: "1px solid rgba(30,27,75,0.08)",
                  borderRadius: "2px",
                  padding: "32px 24px",
                  position: "relative",
                  overflow: "hidden",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  boxShadow: "0 1px 3px rgba(30,27,75,0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 12px 32px rgba(30,27,75,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 1px 3px rgba(30,27,75,0.04)";
                }}
              >
                {/* Top fold crease line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, transparent, ${accentColors[i]}, transparent)`,
                    opacity: 0.6,
                  }}
                />

                {/* Diagonal fold mark */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: isAr ? "auto" : 0,
                    left: isAr ? 0 : "auto",
                    width: "40px",
                    height: "40px",
                    background: `linear-gradient(${isAr ? "225deg" : "135deg"}, rgba(30,27,75,0.03), transparent)`,
                  }}
                />

                <div className="origami-panel-content">
                  {/* Icon */}
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "2px",
                      background: `${accentColors[i]}0a`,
                      border: `1px solid ${accentColors[i]}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <CardIcon
                      icon={card.icon}
                      className=""
                    />
                    {/* Re-color via style since lucide doesn't accept fill easily */}
                    <style>{`.origami-panel:nth-child(${i + 1}) .origami-panel-content svg { color: ${accentColors[i]}; }`}</style>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: fontHeading,
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#1e1b4b",
                      marginBottom: "8px",
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "#78716c",
                      margin: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
          <button
            className="origami-cta cursor-pointer"
            style={{
              background: "#1e1b4b",
              color: "#faf8f5",
              border: "none",
              padding: "14px 32px",
              fontSize: "15px",
              fontWeight: 600,
              fontFamily: fontBody,
              borderRadius: "2px",
              letterSpacing: "0.5px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
              boxShadow: "0 2px 8px rgba(30,27,75,0.15)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 6px 20px rgba(30,27,75,0.25)";
              (e.currentTarget as HTMLButtonElement).style.background = "#2e2a6b";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 2px 8px rgba(30,27,75,0.15)";
              (e.currentTarget as HTMLButtonElement).style.background = "#1e1b4b";
            }}
          >
            {t.ctaPrimary}
            <ArrowRight
              size={16}
              className={isAr ? "rotate-180" : ""}
            />
          </button>

          <button
            className="origami-cta cursor-pointer"
            style={{
              background: "transparent",
              color: "#dc2626",
              border: "1px solid rgba(220,38,38,0.3)",
              padding: "13px 28px",
              fontSize: "15px",
              fontWeight: 600,
              fontFamily: fontBody,
              borderRadius: "2px",
              letterSpacing: "0.5px",
              transition: "transform 0.3s ease, background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.background = "#dc2626";
              (e.currentTarget as HTMLButtonElement).style.color = "#faf8f5";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#dc2626";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#dc2626";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(220,38,38,0.3)";
            }}
          >
            {t.ctaSecondary}
          </button>
        </div>

        {/* Footer text */}
        <p
          className="origami-footer text-center"
          style={{
            fontFamily: fontBody,
            fontSize: "13px",
            color: "#a8a29e",
            letterSpacing: "0.5px",
          }}
        >
          {t.footer}
        </p>
      </div>
    </section>
  );
}
