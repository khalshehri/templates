"use client";

import { useRef, useCallback, useState } from "react";
import { Ruler, Crosshair, PenTool, Compass } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    badge: "Engineered Solutions",
    headingLine1: "Precision",
    headingLine2: "Engineered",
    sub: "I approach every project like an architect \u2014 with detailed plans, precise measurements, and a commitment to structural integrity in every line of code.",
    specs: [
      { label: "Response Time", value: "< 24h" },
      { label: "Code Coverage", value: "95%" },
      { label: "Uptime", value: "99.9%" },
      { label: "Projects", value: "80+" },
    ],
    cta1: "View Blueprints",
    cta2: "Technical Specs",
    footer: "Rev 4.2 \u2014 Updated March 2026",
  },
  ar: {
    badge: "\u062d\u0644\u0648\u0644 \u0647\u0646\u062f\u0633\u064a\u0629",
    headingLine1: "\u0647\u0646\u062f\u0633\u0629",
    headingLine2: "\u062f\u0642\u064a\u0642\u0629",
    sub: "\u0623\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0643\u0644 \u0645\u0634\u0631\u0648\u0639 \u0643\u0645\u0647\u0646\u062f\u0633 \u0645\u0639\u0645\u0627\u0631\u064a \u2014 \u0628\u062e\u0637\u0637 \u0645\u0641\u0635\u0644\u0629 \u0648\u0642\u064a\u0627\u0633\u0627\u062a \u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u0644\u062a\u0632\u0627\u0645 \u0628\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0647\u064a\u0643\u0644\u064a\u0629 \u0641\u064a \u0643\u0644 \u0633\u0637\u0631 \u0643\u0648\u062f.",
    specs: [
      { label: "\u0648\u0642\u062a \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629", value: "< 24 \u0633\u0627\u0639\u0629" },
      { label: "\u062a\u063a\u0637\u064a\u0629 \u0627\u0644\u0643\u0648\u062f", value: "95%" },
      { label: "\u0648\u0642\u062a \u0627\u0644\u062a\u0634\u063a\u064a\u0644", value: "99.9%" },
      { label: "\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639", value: "80+" },
    ],
    cta1: "\u0639\u0631\u0636 \u0627\u0644\u0645\u062e\u0637\u0637\u0627\u062a",
    cta2: "\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629",
    footer: "\u0627\u0644\u0625\u0635\u062f\u0627\u0631 4.2 \u2014 \u0645\u062d\u062f\u062b \u0645\u0627\u0631\u0633 2026",
  },
};

/* Deterministic annotation positions for blueprint dimension lines */
const dimensionAnnotations = [
  { x1: 72, y1: 18, x2: 72, y2: 88, label: "480px", labelX: 80, labelY: 53 },
  { x1: 10, y1: 92, x2: 65, y2: 92, label: "100%", labelX: 35, labelY: 98 },
  { x1: 78, y1: 35, x2: 95, y2: 35, label: "12px", labelX: 86, labelY: 31 },
];

/* Crosshair marker positions (percentage-based) */
const crosshairMarkers = [
  { top: "15%", left: "82%" },
  { top: "45%", left: "88%" },
  { top: "70%", left: "78%" },
  { top: "25%", left: "92%" },
];

/* Spec icons mapped to Lucide components */
function SpecIcon({ index }: { index: number }) {
  const props = { size: 18, strokeWidth: 1.5, className: "text-[#93c5fd]" };
  switch (index) {
    case 0:
      return <Ruler {...props} />;
    case 1:
      return <Crosshair {...props} />;
    case 2:
      return <Compass {...props} />;
    case 3:
      return <PenTool {...props} />;
    default:
      return null;
  }
}

export function Hero24({ language }: { language: "en" | "ar" }) {
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

      // Grid lines fade in
      gsap.fromTo(
        ".bp-grid-overlay",
        { opacity: 0 },
        { opacity: 0.05, duration: 2, ease: "power2.out" }
      );

      // SVG dimension lines draw-in via strokeDashoffset
      gsap.fromTo(
        ".bp-dimension-line",
        { strokeDashoffset: 200 },
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.inOut",
          stagger: 0.3,
          delay: 0.5,
        }
      );

      // Annotation labels clip-path reveal (type-in effect)
      gsap.fromTo(
        ".bp-annotation-label",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          delay: 1.2,
        }
      );

      // Badge fade + slide
      gsap.fromTo(
        ".bp-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 }
      );

      // Heading lines stagger fade + slide
      gsap.fromTo(
        ".bp-heading-line",
        { opacity: 0, x: isAr ? 40 : -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          delay: 0.5,
        }
      );

      // Sub text fade
      gsap.fromTo(
        ".bp-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.9 }
      );

      // Spec cards stagger with count-up style
      gsap.fromTo(
        ".bp-spec-card",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.2)",
          stagger: 0.12,
          delay: 1.1,
        }
      );

      // Spec value text count-up shimmer
      gsap.fromTo(
        ".bp-spec-value",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          ease: "steps(4)",
          stagger: 0.15,
          delay: 1.3,
        }
      );

      // CTA buttons fade in
      gsap.fromTo(
        ".bp-cta",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
          delay: 1.5,
        }
      );

      // Crosshair markers rotate + scale in
      gsap.fromTo(
        ".bp-crosshair",
        { scale: 0, rotation: -90, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.6)",
          stagger: 0.2,
          delay: 0.8,
        }
      );

      // Footer slide in
      gsap.fromTo(
        ".bp-footer",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out", delay: 2 }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      dir={dir}
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "#0c1e3a",
        fontFamily: fontBody,
      }}
    >
      {/* tsParticles - Blueprint-style */}
      <Particles
        id="hero24-particles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: {
              value: 25,
              density: { enable: true, width: 1920, height: 1080 },
            },
            color: {
              value: ["#ffffff", "#93c5fd"],
            },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.05, max: 0.15 },
              animation: { enable: true, speed: 0.3, sync: false },
            },
            size: {
              value: { min: 1, max: 3 },
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

      {/* Blueprint Grid Pattern Overlay */}
      <div
        className="bp-grid-overlay absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 1,
          opacity: 0,
        }}
      />

      {/* SVG Blueprint Annotations Layer (right side) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
        style={{ zIndex: 2 }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {dimensionAnnotations.map((dim, i) => (
          <g key={i}>
            {/* Dimension line */}
            <line
              className="bp-dimension-line"
              x1={`${dim.x1}%`}
              y1={`${dim.y1}%`}
              x2={`${dim.x2}%`}
              y2={`${dim.y2}%`}
              stroke="#93c5fd"
              strokeWidth="0.15"
              strokeDasharray="200"
              strokeDashoffset="200"
              opacity="0.4"
            />
            {/* Arrow endpoints */}
            <circle
              cx={`${dim.x1}%`}
              cy={`${dim.y1}%`}
              r="0.3"
              fill="#93c5fd"
              opacity="0.4"
            />
            <circle
              cx={`${dim.x2}%`}
              cy={`${dim.y2}%`}
              r="0.3"
              fill="#93c5fd"
              opacity="0.4"
            />
          </g>
        ))}
      </svg>

      {/* Annotation Labels (floating on right side) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block" style={{ zIndex: 3 }}>
        {dimensionAnnotations.map((dim, i) => (
          <div
            key={i}
            className="bp-annotation-label absolute"
            style={{
              top: `${dim.labelY}%`,
              left: `${dim.labelX}%`,
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#93c5fd",
              opacity: 0.5,
              padding: "2px 6px",
              border: "1px solid rgba(147, 197, 253, 0.2)",
              background: "rgba(12, 30, 58, 0.8)",
              whiteSpace: "nowrap",
              clipPath: "inset(0 100% 0 0)",
            }}
          >
            {dim.label}
          </div>
        ))}
      </div>

      {/* Crosshair Markers */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block" style={{ zIndex: 3 }}>
        {crosshairMarkers.map((pos, i) => (
          <div
            key={i}
            className="bp-crosshair absolute"
            style={{
              top: pos.top,
              left: pos.left,
              opacity: 0,
            }}
          >
            <Crosshair
              size={20}
              strokeWidth={1}
              className="text-[#93c5fd]"
              style={{ opacity: 0.3 }}
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="bp-badge inline-flex items-center gap-2 mb-8"
            style={{ opacity: 0 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                border: "1px solid rgba(147, 197, 253, 0.3)",
                background: "rgba(30, 58, 95, 0.4)",
                fontFamily: "monospace",
                fontSize: "12px",
                letterSpacing: "2px",
                color: "#93c5fd",
                textTransform: "uppercase",
              }}
            >
              <Compass size={14} strokeWidth={1.5} />
              {t.badge}
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1
              className="bp-heading-line"
              style={{
                fontFamily: fontHeading,
                fontSize: "clamp(48px, 8vw, 80px)",
                fontWeight: 800,
                lineHeight: 1,
                color: "#ffffff",
                letterSpacing: isAr ? "0" : "-2px",
                opacity: 0,
              }}
            >
              {t.headingLine1}
            </h1>
            <h1
              className="bp-heading-line"
              style={{
                fontFamily: fontHeading,
                fontSize: "clamp(48px, 8vw, 80px)",
                fontWeight: 800,
                lineHeight: 1,
                color: "transparent",
                WebkitTextStroke: "2px #93c5fd",
                letterSpacing: isAr ? "0" : "-2px",
                opacity: 0,
                marginTop: "4px",
              }}
            >
              {t.headingLine2}
            </h1>
          </div>

          {/* Dimension annotation inline — looks like a measurement */}
          <div
            className="bp-annotation-label mb-6 inline-flex items-center gap-2"
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#fbbf24",
              opacity: 0.6,
              clipPath: "inset(0 100% 0 0)",
            }}
          >
            <Ruler size={12} strokeWidth={1.5} />
            <span>{"// scale: 1:1 — viewport: 100vw"}</span>
          </div>

          {/* Sub text */}
          <p
            className="bp-sub"
            style={{
              fontFamily: fontBody,
              fontSize: "16px",
              lineHeight: 1.8,
              color: "rgba(255, 255, 255, 0.55)",
              maxWidth: "520px",
              opacity: 0,
              marginBottom: "40px",
            }}
          >
            {t.sub}
          </p>

          {/* Spec Cards — 4 in a row */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
          >
            {t.specs.map((spec, i) => (
              <div
                key={i}
                className="bp-spec-card cursor-pointer"
                style={{
                  padding: "16px",
                  border: "1px solid rgba(147, 197, 253, 0.15)",
                  background: "rgba(30, 58, 95, 0.2)",
                  transition: "border-color 0.3s, background 0.3s",
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(147, 197, 253, 0.4)";
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(30, 58, 95, 0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(147, 197, 253, 0.15)";
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(30, 58, 95, 0.2)";
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <SpecIcon index={i} />
                </div>
                <div
                  className="bp-spec-value"
                  style={{
                    fontFamily: "monospace",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-1px",
                    marginBottom: "4px",
                    opacity: 0,
                  }}
                >
                  {spec.value}
                </div>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "11px",
                    color: "rgba(147, 197, 253, 0.6)",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {spec.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 flex-wrap mb-12">
            <button
              className="bp-cta cursor-pointer"
              style={{
                background: "#93c5fd",
                color: "#0c1e3a",
                border: "none",
                padding: "14px 32px",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1px",
                fontFamily: "monospace",
                textTransform: "uppercase",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 0 20px rgba(147, 197, 253, 0.15)",
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 30px rgba(147, 197, 253, 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 20px rgba(147, 197, 253, 0.15)";
              }}
            >
              {t.cta1}
            </button>

            <button
              className="bp-cta cursor-pointer"
              style={{
                background: "transparent",
                color: "#93c5fd",
                border: "1px solid rgba(147, 197, 253, 0.3)",
                padding: "13px 28px",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "1px",
                fontFamily: "monospace",
                textTransform: "uppercase",
                transition:
                  "transform 0.2s, border-color 0.2s, background 0.2s",
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(147, 197, 253, 0.6)";
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(147, 197, 253, 0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(147, 197, 253, 0.3)";
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
              }}
            >
              {t.cta2}
            </button>
          </div>

          {/* Footer revision */}
          <div
            className="bp-footer"
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "rgba(147, 197, 253, 0.3)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              borderTop: "1px solid rgba(147, 197, 253, 0.1)",
              paddingTop: "16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              opacity: 0,
            }}
          >
            <PenTool size={12} strokeWidth={1.5} />
            {t.footer}
          </div>
        </div>
      </div>
    </section>
  );
}
