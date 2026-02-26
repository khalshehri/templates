"use client";

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

export function HeroTemplate17({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes spotlightMove1 {
          0%   { transform: translate(-30%, -40%); }
          25%  { transform: translate(20%, -20%); }
          50%  { transform: translate(30%, 20%); }
          75%  { transform: translate(-20%, 30%); }
          100% { transform: translate(-30%, -40%); }
        }
        @keyframes spotlightMove2 {
          0%   { transform: translate(25%, 30%); }
          25%  { transform: translate(-25%, 15%); }
          50%  { transform: translate(-30%, -25%); }
          75%  { transform: translate(20%, -35%); }
          100% { transform: translate(25%, 30%); }
        }
        @keyframes fadeReveal {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bracketPulse {
          0%, 100% { opacity: 0.08; }
          50%      { opacity: 0.2; }
        }
        .spotlight-fade {
          animation: fadeReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#0a0a0f" }}
      >
        {/* Spotlight 1 — primary */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            background: `radial-gradient(circle, color-mix(in srgb, var(--theme-primary) 9%, transparent) 0%, transparent 70%)`,
            animation: "spotlightMove1 15s ease-in-out infinite",
          }}
        />

        {/* Spotlight 2 — secondary */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            background: `radial-gradient(circle, color-mix(in srgb, var(--theme-secondary, var(--theme-primary)) 7%, transparent) 0%, transparent 70%)`,
            animation: "spotlightMove2 20s ease-in-out infinite",
          }}
        />

        {/* Corner brackets (viewfinder frame) */}
        {/* Top-left */}
        <div
          className="absolute hidden sm:block"
          style={{
            top: "12%", left: "8%",
            width: 40, height: 40,
            borderTop: "1px solid rgba(255,255,255,0.15)",
            borderLeft: "1px solid rgba(255,255,255,0.15)",
            animation: "bracketPulse 5s ease-in-out infinite",
          }}
        />
        {/* Top-right */}
        <div
          className="absolute hidden sm:block"
          style={{
            top: "12%", right: "8%",
            width: 40, height: 40,
            borderTop: "1px solid rgba(255,255,255,0.15)",
            borderRight: "1px solid rgba(255,255,255,0.15)",
            animation: "bracketPulse 5s ease-in-out infinite",
            animationDelay: "1.2s",
          }}
        />
        {/* Bottom-left */}
        <div
          className="absolute hidden sm:block"
          style={{
            bottom: "12%", left: "8%",
            width: 40, height: 40,
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            borderLeft: "1px solid rgba(255,255,255,0.15)",
            animation: "bracketPulse 5s ease-in-out infinite",
            animationDelay: "2.4s",
          }}
        />
        {/* Bottom-right */}
        <div
          className="absolute hidden sm:block"
          style={{
            bottom: "12%", right: "8%",
            width: 40, height: 40,
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            borderRight: "1px solid rgba(255,255,255,0.15)",
            animation: "bracketPulse 5s ease-in-out infinite",
            animationDelay: "3.6s",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          {/* Badge */}
          {c.badge && (
            <div className="spotlight-fade mb-10" style={{ animationDelay: "0.1s" }}>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/35">
                {isAr ? c.badge.textAr : c.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h1
            className="spotlight-fade text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]"
            style={{ animationDelay: "0.3s" }}
          >
            {isAr ? c.headingAr : c.heading}
          </h1>

          {/* Subheading */}
          <p
            className="spotlight-fade mt-6 text-base sm:text-lg text-white/45 max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.55s" }}
          >
            {isAr ? c.subheadingAr : c.subheading}
          </p>

          {/* CTAs */}
          <div
            className="spotlight-fade mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href={c.ctaPrimary.url}
              className={`group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-[0_0_40px_color-mix(in_srgb,var(--theme-primary)_50%,transparent)] ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{
                backgroundColor: "var(--theme-primary)",
                boxShadow: "0 0 20px color-mix(in srgb, var(--theme-primary) 25%, transparent)",
              }}
            >
              {isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}
              <ArrowRight
                size={16}
                className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180 group-hover:-translate-x-0.5" : ""}`}
              />
            </a>
            {c.ctaSecondary && (
              <a
                href={c.ctaSecondary.url}
                className="inline-flex items-center gap-2 px-8 py-4 text-white/40 font-medium text-sm hover:text-white/70 transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-white/30"
              >
                {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
              </a>
            )}
          </div>

          {/* Stats */}
          {c.stats && c.stats.length > 0 && (
            <div
              className="spotlight-fade mt-20 inline-flex items-center divide-x divide-white/10"
              style={{ animationDelay: "1.05s" }}
            >
              {c.stats.map((stat, i) => (
                <div key={i} className="px-6 sm:px-8 text-center">
                  <p
                    className="text-xl sm:text-2xl font-bold"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-white/30 font-medium mt-1 uppercase tracking-wider">
                    {isAr ? stat.labelAr : stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom subtle gradient line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent 10%, color-mix(in srgb, var(--theme-primary) 20%, transparent) 50%, transparent 90%)`,
          }}
        />
      </section>
    </>
  );
}
