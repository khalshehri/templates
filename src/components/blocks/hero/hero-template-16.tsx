"use client";

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

export function HeroTemplate16({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes gridScroll {
          from { background-position: 0 0; }
          to   { background-position: 0 60px; }
        }
        @keyframes horizonPulse {
          0%, 100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
        @keyframes neonFlicker {
          0%, 92%, 100% { opacity: 1; }
          93%  { opacity: 0.85; }
          94%  { opacity: 1; }
          96%  { opacity: 0.9; }
          97%  { opacity: 1; }
        }
        @keyframes scanlineScroll {
          from { background-position: 0 0; }
          to   { background-position: 0 100px; }
        }
        @keyframes neonFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .neon-fade {
          animation: neonFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      <section
        className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#07070f" }}
      >
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 4px)`,
            animation: "scanlineScroll 8s linear infinite",
          }}
        />

        {/* Perspective grid floor */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] z-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              perspective: "800px",
              perspectiveOrigin: "center top",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: "rotateX(60deg)",
                transformOrigin: "center top",
                backgroundImage: `
                  repeating-linear-gradient(90deg, color-mix(in srgb, var(--theme-primary) 18%, transparent) 0px, color-mix(in srgb, var(--theme-primary) 18%, transparent) 1px, transparent 1px, transparent 60px),
                  repeating-linear-gradient(0deg, color-mix(in srgb, var(--theme-primary) 18%, transparent) 0px, color-mix(in srgb, var(--theme-primary) 18%, transparent) 1px, transparent 1px, transparent 60px)
                `,
                animation: "gridScroll 2s linear infinite",
              }}
            />
          </div>

          {/* Horizon glow line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] z-10"
            style={{
              background: `linear-gradient(90deg, transparent 5%, var(--theme-primary), var(--theme-secondary, var(--theme-primary)), var(--theme-primary), transparent 95%)`,
              animation: "horizonPulse 3s ease-in-out infinite",
              boxShadow: "0 0 20px var(--theme-primary), 0 0 60px color-mix(in srgb, var(--theme-primary) 40%, transparent)",
            }}
          />

          {/* Horizon ambient glow */}
          <div
            className="absolute -top-20 left-0 right-0 h-40 z-0"
            style={{
              background: `radial-gradient(ellipse 80% 100% at 50% 100%, color-mix(in srgb, var(--theme-primary) 12%, transparent) 0%, transparent 100%)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-30 text-center px-4 sm:px-6 max-w-4xl mx-auto pb-[20vh]">
          {/* Badge */}
          {c.badge && (
            <div className="neon-fade mb-8" style={{ animationDelay: "0s" }}>
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full border"
                style={{
                  color: "var(--theme-primary)",
                  borderColor: "var(--theme-primary)",
                  boxShadow: "0 0 12px color-mix(in srgb, var(--theme-primary) 30%, transparent), inset 0 0 12px color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                }}
              >
                {isAr ? c.badge.textAr : c.badge.text}
              </span>
            </div>
          )}

          {/* Heading with neon glow */}
          <h1
            className="neon-fade text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
            style={{
              animationDelay: "0.15s",
              textShadow: `0 0 30px color-mix(in srgb, var(--theme-primary) 50%, transparent), 0 0 80px color-mix(in srgb, var(--theme-primary) 25%, transparent)`,
              animation: "neonFadeIn 0.8s 0.15s cubic-bezier(0.22,1,0.36,1) both, neonFlicker 4s 1.5s ease-in-out infinite",
            }}
          >
            {isAr ? c.headingAr : c.heading}
          </h1>

          {/* Subheading */}
          <p
            className="neon-fade mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{
              animationDelay: "0.3s",
              color: `color-mix(in srgb, var(--theme-primary) 50%, white)`,
            }}
          >
            {isAr ? c.subheadingAr : c.subheading}
          </p>

          {/* CTAs */}
          <div
            className="neon-fade mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href={c.ctaPrimary.url}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all hover:shadow-[0_0_40px_var(--theme-primary)] ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{
                backgroundColor: "var(--theme-primary)",
                boxShadow: "0 0 20px color-mix(in srgb, var(--theme-primary) 40%, transparent)",
              }}
            >
              {isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}
              <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
            </a>
            {c.ctaSecondary && (
              <a
                href={c.ctaSecondary.url}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border text-white/60 font-medium transition-all hover:text-white hover:border-white/40"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
              >
                {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
              </a>
            )}
          </div>

          {/* Stats */}
          {c.stats && c.stats.length > 0 && (
            <div
              className="neon-fade mt-16 flex items-center justify-center gap-8 sm:gap-12"
              style={{ animationDelay: "0.6s" }}
            >
              {c.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p
                    className="text-2xl sm:text-3xl font-bold"
                    style={{
                      color: "var(--theme-primary)",
                      textShadow: "0 0 16px color-mix(in srgb, var(--theme-primary) 40%, transparent)",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-white/35 font-medium uppercase tracking-wider mt-1">
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
