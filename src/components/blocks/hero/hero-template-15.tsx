"use client";

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

const WORD_ANIMS = [
  "kSlideInLeft",
  "kFadeUp",
  "kScaleReveal",
  "kRotateIn",
] as const;

export function HeroTemplate15({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  const heading = isAr ? c.headingAr : c.heading;
  const highlighted = isAr ? c.highlightedWordAr : c.highlightedWord;
  const words = heading.split(/\s+/);

  return (
    <>
      <style>{`
        @keyframes kSlideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes kFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes kScaleReveal {
          from { opacity: 0; transform: scale(0.55); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes kRotateIn {
          from { opacity: 0; transform: rotate(-5deg) translateY(16px); }
          to   { opacity: 1; transform: rotate(0deg) translateY(0); }
        }
        @keyframes kGradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes kFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes kLineExpand {
          from { width: 0; }
          to   { width: 100%; }
        }
        .kinetic-word {
          display: inline-block;
          animation-fill-mode: both;
          animation-duration: 0.7s;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }
        .kinetic-fade {
          animation: kFadeIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      <section className="relative py-28 sm:py-36 lg:py-44 overflow-hidden" style={{ backgroundColor: "#fefefe" }}>
        {/* Decorative circle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full"
          style={{
            backgroundColor: `color-mix(in srgb, var(--theme-primary) 4%, transparent)`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
          {/* Badge */}
          {c.badge && (
            <div
              className="kinetic-fade mb-10"
              style={{ animationDelay: "0s" }}
            >
              <span
                className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
                style={{
                  color: "var(--theme-primary)",
                  backgroundColor: `color-mix(in srgb, var(--theme-primary) 8%, transparent)`,
                }}
              >
                {isAr ? c.badge.textAr : c.badge.text}
              </span>
            </div>
          )}

          {/* Heading — each word animated individually */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 leading-[1.05]">
            {words.map((word, i) => {
              const isHighlighted = highlighted && word.includes(highlighted);
              const animName = WORD_ANIMS[i % WORD_ANIMS.length];
              const delay = 0.1 + i * 0.15;

              if (isHighlighted) {
                return (
                  <span key={i}>
                    <span
                      className="kinetic-word bg-clip-text text-transparent"
                      style={{
                        animationName: "kScaleReveal",
                        animationDelay: `${delay}s`,
                        backgroundImage: `linear-gradient(90deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)), var(--theme-accent, var(--theme-primary)))`,
                        backgroundSize: "200% auto",
                        animation: `kScaleReveal 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1) both, kGradientShift 4s ease-in-out infinite ${delay + 0.7}s`,
                      }}
                    >
                      {word}
                    </span>
                    {" "}
                  </span>
                );
              }

              return (
                <span key={i}>
                  <span
                    className="kinetic-word"
                    style={{
                      animationName: animName,
                      animationDelay: `${delay}s`,
                    }}
                  >
                    {word}
                  </span>
                  {" "}
                </span>
              );
            })}
          </h1>

          {/* Subheading */}
          <p
            className="kinetic-fade mt-8 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: `${0.1 + words.length * 0.15 + 0.2}s` }}
          >
            {isAr ? c.subheadingAr : c.subheading}
          </p>

          {/* CTAs */}
          <div
            className="kinetic-fade mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: `${0.1 + words.length * 0.15 + 0.4}s` }}
          >
            <a
              href={c.ctaPrimary.url}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold transition-all hover:opacity-90 hover:shadow-lg ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              {isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}
              <ArrowRight size={18} className={isAr ? "rotate-180" : ""} />
            </a>
            {c.ctaSecondary && (
              <a
                href={c.ctaSecondary.url}
                className="text-gray-500 font-medium hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-all"
              >
                {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
              </a>
            )}
          </div>

          {/* Stats with expanding line */}
          {c.stats && c.stats.length > 0 && (
            <div
              className="kinetic-fade mt-20"
              style={{ animationDelay: `${0.1 + words.length * 0.15 + 0.6}s` }}
            >
              {/* Animated expanding line */}
              <div className="flex justify-center mb-8">
                <div className="h-px bg-gray-200 overflow-hidden" style={{ width: "100%", maxWidth: "400px" }}>
                  <div
                    className="h-full"
                    style={{
                      backgroundColor: "var(--theme-primary)",
                      animation: `kLineExpand 1.2s ${0.1 + words.length * 0.15 + 0.8}s cubic-bezier(0.22,1,0.36,1) both`,
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-10 sm:gap-14">
                {c.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p
                      className="text-3xl sm:text-4xl font-bold"
                      style={{ color: "var(--theme-primary)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400 font-medium mt-1">
                      {isAr ? stat.labelAr : stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
