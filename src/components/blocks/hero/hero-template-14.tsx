"use client";

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

/* ── Particle data ──────────────────────────────────────── */
const PARTICLES: {
  x: number; y: number; size: number;
  color: "primary" | "secondary" | "dim";
  anim: 1 | 2 | 3 | 4;
  delay: number;
}[] = [
  { x: 5,  y: 12, size: 4, color: "primary",   anim: 1, delay: 0   },
  { x: 14, y: 8,  size: 3, color: "dim",        anim: 3, delay: 0.5 },
  { x: 22, y: 22, size: 5, color: "secondary",  anim: 2, delay: 1.2 },
  { x: 8,  y: 45, size: 4, color: "primary",    anim: 4, delay: 0.3 },
  { x: 18, y: 60, size: 3, color: "dim",        anim: 1, delay: 1.8 },
  { x: 12, y: 78, size: 5, color: "secondary",  anim: 3, delay: 0.7 },
  { x: 30, y: 15, size: 4, color: "dim",        anim: 2, delay: 1.0 },
  { x: 35, y: 50, size: 6, color: "primary",    anim: 4, delay: 0.4 },
  { x: 42, y: 82, size: 3, color: "dim",        anim: 1, delay: 1.5 },
  { x: 50, y: 10, size: 5, color: "secondary",  anim: 3, delay: 0.2 },
  { x: 55, y: 35, size: 4, color: "primary",    anim: 2, delay: 0.8 },
  { x: 48, y: 68, size: 3, color: "dim",        anim: 4, delay: 1.1 },
  { x: 62, y: 20, size: 4, color: "primary",    anim: 1, delay: 0.6 },
  { x: 68, y: 48, size: 5, color: "secondary",  anim: 3, delay: 1.4 },
  { x: 72, y: 75, size: 3, color: "dim",        anim: 2, delay: 0.1 },
  { x: 78, y: 12, size: 4, color: "secondary",  anim: 4, delay: 0.9 },
  { x: 82, y: 38, size: 6, color: "primary",    anim: 1, delay: 1.3 },
  { x: 76, y: 62, size: 3, color: "dim",        anim: 3, delay: 0.5 },
  { x: 88, y: 22, size: 4, color: "dim",        anim: 2, delay: 1.7 },
  { x: 92, y: 55, size: 5, color: "primary",    anim: 4, delay: 0.3 },
  { x: 85, y: 80, size: 3, color: "secondary",  anim: 1, delay: 1.0 },
  { x: 95, y: 40, size: 4, color: "dim",        anim: 3, delay: 0.7 },
  { x: 38, y: 90, size: 5, color: "primary",    anim: 2, delay: 1.6 },
  { x: 60, y: 88, size: 4, color: "secondary",  anim: 4, delay: 0.2 },
];

/* ── SVG lines connecting nearby particles ──────────────── */
const LINES: [number, number][] = [
  [0, 1], [2, 3], [4, 5], [6, 7],
  [10, 11], [13, 14], [16, 17], [19, 20],
  [8, 12], [9, 13], [15, 18], [21, 22],
];

function particleColor(c: "primary" | "secondary" | "dim") {
  if (c === "primary") return "var(--theme-primary)";
  if (c === "secondary") return "var(--theme-secondary, var(--theme-primary))";
  return "rgba(255,255,255,0.25)";
}

export function HeroTemplate14({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";
  const heading = isAr ? c.headingAr : c.heading;
  const highlighted = isAr ? c.highlightedWordAr : c.highlightedWord;

  const renderHeading = () => {
    if (!highlighted || !heading.includes(highlighted)) return heading;
    const parts = heading.split(highlighted);
    return (
      <>
        {parts[0]}
        <span
          style={{
            color: "var(--theme-primary)",
            textShadow: "0 0 40px var(--theme-primary), 0 0 80px color-mix(in srgb, var(--theme-primary) 40%, transparent)",
          }}
        >
          {highlighted}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <>
      <style>{`
        @keyframes pFloat1 {
          0%, 100% { transform: translate(0, 0); }
          25%  { transform: translate(8px, -12px); }
          50%  { transform: translate(-6px, -20px); }
          75%  { transform: translate(10px, -8px); }
        }
        @keyframes pFloat2 {
          0%, 100% { transform: translate(0, 0); }
          25%  { transform: translate(-10px, 8px); }
          50%  { transform: translate(12px, 14px); }
          75%  { transform: translate(-8px, 6px); }
        }
        @keyframes pFloat3 {
          0%, 100% { transform: translate(0, 0); }
          25%  { transform: translate(14px, 6px); }
          50%  { transform: translate(-4px, -16px); }
          75%  { transform: translate(-12px, 10px); }
        }
        @keyframes pFloat4 {
          0%, 100% { transform: translate(0, 0); }
          25%  { transform: translate(-6px, -14px); }
          50%  { transform: translate(10px, 8px); }
          75%  { transform: translate(4px, -10px); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
        @keyframes lineShimmer {
          0%, 100% { opacity: 0.04; }
          50%      { opacity: 0.14; }
        }
        @keyframes contentFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .particle-content {
          animation: contentFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#050510" }}
      >
        {/* Center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background: `radial-gradient(circle, color-mix(in srgb, var(--theme-primary) 6%, transparent) 0%, transparent 70%)`,
          }}
        />

        {/* Particles */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: particleColor(p.color),
              animation: `pFloat${p.anim} ${6 + p.anim * 2}s ease-in-out infinite, glowPulse ${2.5 + p.delay}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        {/* Connecting lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {LINES.map(([a, b], i) => (
            <line
              key={i}
              x1={`${PARTICLES[a].x}%`}
              y1={`${PARTICLES[a].y}%`}
              x2={`${PARTICLES[b].x}%`}
              y2={`${PARTICLES[b].y}%`}
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
              style={{
                animation: `lineShimmer ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </svg>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          {/* Badge */}
          {c.badge && (
            <div
              className="particle-content inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
              style={{
                animationDelay: "0s",
                borderColor: "color-mix(in srgb, var(--theme-primary) 30%, transparent)",
                backgroundColor: "color-mix(in srgb, var(--theme-primary) 8%, transparent)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--theme-primary)" }}
              />
              <span className="text-xs font-medium text-white/70">
                {isAr ? c.badge.textAr : c.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h1
            className="particle-content text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-[-0.03em] leading-[1.1]"
            style={{ animationDelay: "0.15s" }}
          >
            {renderHeading()}
          </h1>

          {/* Subheading */}
          <p
            className="particle-content mt-6 text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            {isAr ? c.subheadingAr : c.subheading}
          </p>

          {/* CTAs */}
          <div
            className="particle-content mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href={c.ctaPrimary.url}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:shadow-[0_0_30px_var(--theme-primary)] ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              {isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}
              <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
            </a>
            {c.ctaSecondary && (
              <a
                href={c.ctaSecondary.url}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 text-white/70 font-medium text-sm hover:bg-white/5 transition-all"
              >
                {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
              </a>
            )}
          </div>

          {/* Stats */}
          {c.stats && c.stats.length > 0 && (
            <div
              className="particle-content mt-16 flex items-center justify-center gap-8 sm:gap-12"
              style={{ animationDelay: "0.6s" }}
            >
              {c.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/40 font-medium mt-1">
                    {isAr ? stat.labelAr : stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
