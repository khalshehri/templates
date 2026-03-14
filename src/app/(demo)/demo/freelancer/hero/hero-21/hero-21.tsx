"use client";

import { useRef, useCallback, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    badge: "Full-Stack Freelancer",
    headingLine1: "Skills in My",
    headingLine2: "DNA",
    sub: "Every project I touch is infused with a unique blend of design, code, and strategy — woven into the very fabric of my work.",
    skills: ["React", "Node.js", "UI/UX", "TypeScript", "AWS", "GraphQL"],
    ctaPrimary: "Let's Build Together",
    ctaSecondary: "View My Work",
    footer:
      "6+ years of full-stack expertise, ready to evolve your next project.",
  },
  ar: {
    badge: "مستقل متكامل",
    headingLine1: "مهارات في",
    headingLine2: "حمضي النووي",
    sub: "كل مشروع أعمل عليه مشبع بمزيج فريد من التصميم والبرمجة والاستراتيجية — منسوج في نسيج عملي.",
    skills: ["React", "Node.js", "UI/UX", "TypeScript", "AWS", "GraphQL"],
    ctaPrimary: "لنبني معاً",
    ctaSecondary: "شاهد أعمالي",
    footer:
      "أكثر من 6 سنوات من الخبرة المتكاملة، جاهز لتطوير مشروعك القادم.",
  },
};

// Generate deterministic helix points
function generateHelixPoints(
  width: number,
  height: number,
  numPoints: number,
  phase: number
): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [];
  const centerX = width / 2;
  const amplitude = width * 0.35;
  const startY = height * 0.05;
  const endY = height * 0.95;

  for (let i = 0; i < numPoints; i++) {
    const t = i / (numPoints - 1);
    const y = startY + t * (endY - startY);
    const angle = t * 4 * Math.PI + phase;
    const x = centerX + amplitude * Math.sin(angle);
    points.push({ x, y });
  }

  return points;
}

function pointsToPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x} ${cpY}, ${curr.x} ${cpY}, ${curr.x} ${curr.y}`;
  }
  return d;
}

// Generate nucleotide connection points (where the two strands meet/cross)
function generateNucleotidePositions(
  width: number,
  height: number,
  count: number
): { x: number; y: number }[] {
  const positions: { x: number; y: number }[] = [];
  const centerX = width / 2;
  const startY = height * 0.1;
  const endY = height * 0.9;

  for (let i = 0; i < count; i++) {
    const t = (i + 0.5) / count;
    const y = startY + t * (endY - startY);
    // Place nucleotides near the center where strands cross
    const angle = t * 4 * Math.PI;
    const offset = (width * 0.08) * Math.cos(angle);
    positions.push({ x: centerX + offset, y });
  }

  return positions;
}

export function Hero21({ language }: { language: "en" | "ar" }) {
  const containerRef = useRef<HTMLElement>(null);
  const [particlesReady, setParticlesReady] = useState(false);
  const isRTL = language === "ar";
  const t = content[language];

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

  const helixWidth = 300;
  const helixHeight = 600;
  const numHelixPoints = 60;

  const strand1Points = generateHelixPoints(helixWidth, helixHeight, numHelixPoints, 0);
  const strand2Points = generateHelixPoints(helixWidth, helixHeight, numHelixPoints, Math.PI);
  const strand1Path = pointsToPath(strand1Points);
  const strand2Path = pointsToPath(strand2Points);
  const nucleotides = generateNucleotidePositions(helixWidth, helixHeight, 6);

  // Connection rungs between strands at nucleotide positions
  function getRungEndpoints(index: number) {
    const t = (index + 0.5) / 6;
    const y = helixHeight * 0.1 + t * (helixHeight * 0.8);
    const angle = t * 4 * Math.PI;
    const centerX = helixWidth / 2;
    const amplitude = helixWidth * 0.35;
    const x1 = centerX + amplitude * Math.sin(angle);
    const x2 = centerX + amplitude * Math.sin(angle + Math.PI);
    return { x1, y, x2 };
  }

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Helix path draw-in
      const paths = containerRef.current.querySelectorAll(".helix-strand");
      paths.forEach((path) => {
        const el = path as SVGPathElement;
        const length = el.getTotalLength();
        gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
        tl.to(el, { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" }, 0);
      });

      // Nucleotide connection rungs
      const rungs = containerRef.current.querySelectorAll(".helix-rung");
      tl.fromTo(
        rungs,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.4, stagger: 0.15, ease: "back.out(2)" },
        0.6
      );

      // Nucleotide nodes scale + pop
      const nodes = containerRef.current.querySelectorAll(".nucleotide-node");
      tl.fromTo(
        nodes,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.12,
          ease: "back.out(3)",
        },
        0.8
      );

      // Content fade-in
      const contentEls = containerRef.current.querySelectorAll(".hero-content");
      tl.fromTo(
        contentEls,
        { opacity: 0, x: isRTL ? 40 : -40 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1 },
        0.4
      );

      // Skill tags bounce-in
      const skillTags = containerRef.current.querySelectorAll(".skill-tag");
      tl.fromTo(
        skillTags,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(2.5)",
        },
        1.2
      );

      // CTA slide-up
      const ctas = containerRef.current.querySelectorAll(".hero-cta");
      tl.fromTo(
        ctas,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        1.6
      );

      // Footer fade
      const footer = containerRef.current.querySelector(".hero-footer");
      if (footer) {
        tl.fromTo(
          footer,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          1.8
        );
      }
    },
    { scope: containerRef, dependencies: [language, isRTL] }
  );

  return (
    <section
      ref={containerRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "radial-gradient(ellipse at 50% 40%, #0a0a2e 0%, #050510 70%)" }}
    >
      {/* Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="hero21-particles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            fpsLimit: 60,
            particles: {
              number: { value: 35, density: { enable: true } },
              color: { value: ["#06b6d4", "#d946ef", "#818cf8"] },
              opacity: { value: { min: 0.15, max: 0.4 } },
              size: { value: { min: 1, max: 2.5 } },
              move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                outModes: { default: "out" },
              },
              links: {
                enable: true,
                distance: 130,
                color: "#06b6d4",
                opacity: 0.12,
                width: 1,
              },
            },
            detectRetina: true,
          }}
          className="w-full h-full"
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
            isRTL ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Left: Content */}
          <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
            {/* Badge */}
            <div className="hero-content mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <div className="hero-content mb-6">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight ${
                  isRTL
                    ? "font-[family-name:var(--font-changa)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                <span className="text-white">{t.headingLine1}</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                  {t.headingLine2}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="hero-content mb-8">
              <p
                className={`text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed ${
                  isRTL
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.sub}
              </p>
            </div>

            {/* Skills */}
            <div className="hero-content mb-10">
              <div className="flex flex-wrap gap-2.5">
                {t.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="skill-tag px-3.5 py-1.5 rounded-lg text-sm font-medium border transition-colors"
                    style={{
                      borderColor:
                        i % 2 === 0
                          ? "rgba(6,182,212,0.3)"
                          : "rgba(217,70,239,0.3)",
                      backgroundColor:
                        i % 2 === 0
                          ? "rgba(6,182,212,0.08)"
                          : "rgba(217,70,239,0.08)",
                      color:
                        i % 2 === 0 ? "#22d3ee" : "#e879f9",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 mb-8 ${
                isRTL ? "justify-end" : "justify-start"
              }`}
            >
              <button className="hero-cta cursor-pointer px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
                {t.ctaPrimary}
              </button>
              <button className="hero-cta cursor-pointer px-7 py-3.5 rounded-xl text-sm font-semibold text-gray-300 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                {t.ctaSecondary}
              </button>
            </div>

            {/* Footer text */}
            <p
              className={`hero-footer text-sm text-gray-500 ${
                isRTL
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.footer}
            </p>
          </div>

          {/* Right: DNA Helix */}
          <div className="flex-1 flex justify-center items-center relative w-full max-w-[400px] lg:max-w-none">
            <div className="relative w-[300px] h-[600px] sm:w-[340px] sm:h-[650px]">
              <svg
                viewBox={`0 0 ${helixWidth} ${helixHeight}`}
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Glow filters */}
                <defs>
                  <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="glow-magenta" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="strand1-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="strand2-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d946ef" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#d946ef" stopOpacity="1" />
                    <stop offset="100%" stopColor="#d946ef" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Strand 1 — Cyan */}
                <path
                  className="helix-strand"
                  d={strand1Path}
                  stroke="url(#strand1-gradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#glow-cyan)"
                />

                {/* Strand 2 — Magenta */}
                <path
                  className="helix-strand"
                  d={strand2Path}
                  stroke="url(#strand2-gradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#glow-magenta)"
                />

                {/* Connection rungs */}
                {Array.from({ length: 6 }).map((_, i) => {
                  const { x1, y, x2 } = getRungEndpoints(i);
                  return (
                    <line
                      key={`rung-${i}`}
                      className="helix-rung"
                      x1={x1}
                      y1={y}
                      x2={x2}
                      y2={y}
                      stroke={i % 2 === 0 ? "#06b6d4" : "#d946ef"}
                      strokeWidth="1"
                      strokeOpacity="0.35"
                      strokeDasharray="4 3"
                    />
                  );
                })}

                {/* Nucleotide circles at connection points */}
                {nucleotides.map((pos, i) => {
                  const { x1, y, x2 } = getRungEndpoints(i);
                  return (
                    <g key={`nucleotide-${i}`} className="nucleotide-node">
                      {/* Circle on strand 1 */}
                      <circle
                        cx={x1}
                        cy={y}
                        r="5"
                        fill={i % 2 === 0 ? "#06b6d4" : "#d946ef"}
                        opacity="0.8"
                      />
                      <circle
                        cx={x1}
                        cy={y}
                        r="8"
                        fill="none"
                        stroke={i % 2 === 0 ? "#06b6d4" : "#d946ef"}
                        strokeWidth="0.5"
                        opacity="0.3"
                      />
                      {/* Circle on strand 2 */}
                      <circle
                        cx={x2}
                        cy={y}
                        r="5"
                        fill={i % 2 === 0 ? "#d946ef" : "#06b6d4"}
                        opacity="0.8"
                      />
                      <circle
                        cx={x2}
                        cy={y}
                        r="8"
                        fill="none"
                        stroke={i % 2 === 0 ? "#d946ef" : "#06b6d4"}
                        strokeWidth="0.5"
                        opacity="0.3"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Skill labels positioned along the helix */}
              {t.skills.map((skill, i) => {
                const { x1, y, x2 } = getRungEndpoints(i);
                // Alternate labels between left and right side of helix
                const isLeftSide = i % 2 === 0;
                const labelX = isLeftSide
                  ? `${((Math.min(x1, x2) / helixWidth) * 100) - 18}%`
                  : `${((Math.max(x1, x2) / helixWidth) * 100) + 4}%`;
                const labelY = `${(y / helixHeight) * 100}%`;

                return (
                  <div
                    key={`label-${skill}`}
                    className="nucleotide-node absolute -translate-y-1/2 pointer-events-none"
                    style={{
                      left: labelX,
                      top: labelY,
                    }}
                  >
                    <span
                      className="text-[10px] sm:text-xs font-medium whitespace-nowrap px-2 py-0.5 rounded-md"
                      style={{
                        color: i % 2 === 0 ? "#22d3ee" : "#e879f9",
                        backgroundColor:
                          i % 2 === 0
                            ? "rgba(6,182,212,0.1)"
                            : "rgba(217,70,239,0.1)",
                        border: `1px solid ${
                          i % 2 === 0
                            ? "rgba(6,182,212,0.2)"
                            : "rgba(217,70,239,0.2)"
                        }`,
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
