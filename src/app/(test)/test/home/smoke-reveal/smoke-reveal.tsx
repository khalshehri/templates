"use client";

/**
 * Smoke Reveal Hero
 *
 * Wispy smoke/fog trails drift across a pitch-black canvas, partially
 * obscuring the content beneath. On load the smoke layers clear outward
 * in a dramatic reveal, exposing a bold white heading that scales up into
 * view. After the reveal, residual smoke continues to drift lazily at the
 * edges while tiny ember sparks float upward, creating a dark, mysterious,
 * cinematic atmosphere.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    headline: "From the Shadows,\nYour Story Emerges",
    subheadline:
      "Cut through the noise. Let your brand speak with clarity and power — revealed, not announced.",
    cta: "Begin the Reveal",
    secondary: "Watch the Story",
  },
  ar: {
    headline: "من بين الظلال،\nتتكشّف قصتك",
    subheadline:
      "اخترق الضجيج. دع علامتك التجارية تتحدث بوضوح وقوة — تُكشف، لا تُعلن.",
    cta: "ابدأ الكشف",
    secondary: "شاهد القصة",
  },
};

export function SmokeReveal({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#0c0c0c" }}
    >
      {/* ── inline keyframes ─────────────────────────────────── */}
      <style>{`
        /* smoke drift directions — each layer has its own path */
        @keyframes smokeDrift1 {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.12; }
          50%  { transform: translate(-120px, -60px) scale(1.15); opacity: 0.06; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.12; }
        }
        @keyframes smokeDrift2 {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.10; }
          50%  { transform: translate(100px, 80px) scale(1.2); opacity: 0.04; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.10; }
        }
        @keyframes smokeDrift3 {
          0%   { transform: translate(0, 0) scale(1.05); opacity: 0.14; }
          50%  { transform: translate(60px, -100px) scale(1.1); opacity: 0.05; }
          100% { transform: translate(0, 0) scale(1.05); opacity: 0.14; }
        }
        @keyframes smokeDrift4 {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.08; }
          50%  { transform: translate(-80px, 70px) scale(1.25); opacity: 0.03; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.08; }
        }
        @keyframes smokeDrift5 {
          0%   { transform: translate(0, 0) scale(1.1); opacity: 0.11; }
          50%  { transform: translate(140px, -40px) scale(1.05); opacity: 0.04; }
          100% { transform: translate(0, 0) scale(1.1); opacity: 0.11; }
        }
        @keyframes smokeDrift6 {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.09; }
          50%  { transform: translate(-60px, -90px) scale(1.3); opacity: 0.03; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.09; }
        }
        @keyframes smokeDrift7 {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.07; }
          50%  { transform: translate(90px, 60px) scale(1.15); opacity: 0.02; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.07; }
        }
        @keyframes smokeDrift8 {
          0%   { transform: translate(0, 0) scale(1.08); opacity: 0.13; }
          50%  { transform: translate(-100px, 50px) scale(1.18); opacity: 0.05; }
          100% { transform: translate(0, 0) scale(1.08); opacity: 0.13; }
        }

        /* initial clearing burst — smoke rushes outward */
        @keyframes smokeClear1 { 0% { transform: translate(0,0) scale(1.6); opacity:0.35; } 100% { transform: translate(-260px,-180px) scale(1); opacity:0.12; } }
        @keyframes smokeClear2 { 0% { transform: translate(0,0) scale(1.5); opacity:0.30; } 100% { transform: translate(220px,160px) scale(1); opacity:0.10; } }
        @keyframes smokeClear3 { 0% { transform: translate(0,0) scale(1.7); opacity:0.32; } 100% { transform: translate(180px,-200px) scale(1.05); opacity:0.14; } }
        @keyframes smokeClear4 { 0% { transform: translate(0,0) scale(1.4); opacity:0.28; } 100% { transform: translate(-200px,140px) scale(1); opacity:0.08; } }
        @keyframes smokeClear5 { 0% { transform: translate(0,0) scale(1.55); opacity:0.33; } 100% { transform: translate(240px,-100px) scale(1.1); opacity:0.11; } }
        @keyframes smokeClear6 { 0% { transform: translate(0,0) scale(1.45); opacity:0.26; } 100% { transform: translate(-160px,-220px) scale(1); opacity:0.09; } }
        @keyframes smokeClear7 { 0% { transform: translate(0,0) scale(1.6); opacity:0.25; } 100% { transform: translate(160px,180px) scale(1); opacity:0.07; } }
        @keyframes smokeClear8 { 0% { transform: translate(0,0) scale(1.5); opacity:0.30; } 100% { transform: translate(-220px,120px) scale(1.08); opacity:0.13; } }

        /* heading reveal */
        @keyframes headingReveal {
          0%   { opacity: 0; transform: scale(0.88); filter: blur(12px); }
          60%  { opacity: 0.6; transform: scale(0.96); filter: blur(4px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0px); }
        }
        /* sub-content fade in */
        @keyframes contentFadeIn {
          0%   { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* ember sparks */
        @keyframes emberFloat {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10%  { opacity: 1; }
          70%  { opacity: 0.7; }
          100% { transform: translateY(-420px) translateX(40px) scale(0.3); opacity: 0; }
        }
        @keyframes emberFloat2 {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          15%  { opacity: 0.9; }
          65%  { opacity: 0.5; }
          100% { transform: translateY(-380px) translateX(-35px) scale(0.2); opacity: 0; }
        }
        @keyframes emberFloat3 {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          12%  { opacity: 0.8; }
          80%  { opacity: 0.4; }
          100% { transform: translateY(-460px) translateX(25px) scale(0.25); opacity: 0; }
        }

        .smoke-layer {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>

      {/* ── smoke layers ─────────────────────────────────────── */}
      {/* Layer 1 — large, upper-left */}
      <div
        className="smoke-layer"
        style={{
          width: 560,
          height: 420,
          top: "5%",
          left: "10%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: "smokeClear1 2.4s ease-out forwards, smokeDrift1 18s ease-in-out 2.4s infinite",
        }}
      />
      {/* Layer 2 — mid, lower-right */}
      <div
        className="smoke-layer"
        style={{
          width: 480,
          height: 380,
          bottom: "10%",
          right: "8%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, transparent 70%)",
          filter: "blur(65px)",
          animation: "smokeClear2 2.6s ease-out forwards, smokeDrift2 22s ease-in-out 2.6s infinite",
        }}
      />
      {/* Layer 3 — upper-right */}
      <div
        className="smoke-layer"
        style={{
          width: 520,
          height: 400,
          top: "8%",
          right: "15%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.14) 0%, transparent 65%)",
          filter: "blur(75px)",
          animation: "smokeClear3 2.2s ease-out forwards, smokeDrift3 20s ease-in-out 2.2s infinite",
        }}
      />
      {/* Layer 4 — lower-left */}
      <div
        className="smoke-layer"
        style={{
          width: 440,
          height: 360,
          bottom: "15%",
          left: "5%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "smokeClear4 2.8s ease-out forwards, smokeDrift4 24s ease-in-out 2.8s infinite",
        }}
      />
      {/* Layer 5 — center-right, thin wisp */}
      <div
        className="smoke-layer"
        style={{
          width: 600,
          height: 300,
          top: "35%",
          right: "0%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.11) 0%, transparent 60%)",
          filter: "blur(60px)",
          animation: "smokeClear5 2.5s ease-out forwards, smokeDrift5 19s ease-in-out 2.5s infinite",
        }}
      />
      {/* Layer 6 — top-center */}
      <div
        className="smoke-layer"
        style={{
          width: 500,
          height: 350,
          top: "-5%",
          left: "30%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.09) 0%, transparent 65%)",
          filter: "blur(70px)",
          animation: "smokeClear6 2.3s ease-out forwards, smokeDrift6 21s ease-in-out 2.3s infinite",
        }}
      />
      {/* Layer 7 — bottom-center */}
      <div
        className="smoke-layer"
        style={{
          width: 450,
          height: 340,
          bottom: "0%",
          left: "40%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.07) 0%, transparent 70%)",
          filter: "blur(65px)",
          animation: "smokeClear7 2.7s ease-out forwards, smokeDrift7 23s ease-in-out 2.7s infinite",
        }}
      />
      {/* Layer 8 — center-left overlay */}
      <div
        className="smoke-layer"
        style={{
          width: 540,
          height: 410,
          top: "25%",
          left: "-5%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.13) 0%, transparent 60%)",
          filter: "blur(72px)",
          animation: "smokeClear8 2.5s ease-out forwards, smokeDrift8 17s ease-in-out 2.5s infinite",
        }}
      />

      {/* ── ember sparks ─────────────────────────────────────── */}
      {[
        { left: "25%", bottom: "12%", size: 4, delay: "3s", dur: "4.5s", anim: "emberFloat" },
        { left: "55%", bottom: "8%", size: 3, delay: "4.2s", dur: "5s", anim: "emberFloat2" },
        { left: "40%", bottom: "18%", size: 3.5, delay: "5s", dur: "5.5s", anim: "emberFloat3" },
        { left: "70%", bottom: "10%", size: 2.5, delay: "3.8s", dur: "4.8s", anim: "emberFloat" },
        { left: "18%", bottom: "22%", size: 3, delay: "5.5s", dur: "5.2s", anim: "emberFloat2" },
        { left: "62%", bottom: "15%", size: 2, delay: "4.6s", dur: "6s", anim: "emberFloat3" },
        { left: "35%", bottom: "6%", size: 3.5, delay: "6s", dur: "4.2s", anim: "emberFloat" },
        { left: "80%", bottom: "20%", size: 2.5, delay: "3.4s", dur: "5.8s", anim: "emberFloat2" },
      ].map((ember, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: ember.size,
            height: ember.size,
            left: ember.left,
            bottom: ember.bottom,
            background: "radial-gradient(circle, #f59e0b, #ea580c)",
            boxShadow: "0 0 6px 2px rgba(245,158,11,0.5)",
            animation: `${ember.anim} ${ember.dur} ease-out ${ember.delay} infinite`,
            opacity: 0,
          }}
        />
      ))}

      {/* ── subtle vignette overlay ──────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* ── content ──────────────────────────────────────────── */}
      <div
        className={`relative z-10 max-w-4xl mx-auto px-6 ${
          isAr ? "text-right" : "text-left"
        } flex flex-col ${isAr ? "items-end" : "items-start"}`}
      >
        {/* heading */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight whitespace-pre-line ${
            isAr ? "font-arabic" : ""
          }`}
          style={{
            color: "#ffffff",
            animation: "headingReveal 2.2s cubic-bezier(0.22,1,0.36,1) 1.6s both",
            textShadow: "0 0 60px rgba(255,255,255,0.08)",
          }}
        >
          {t.headline}
        </h1>

        {/* subheadline */}
        <p
          className={`mt-6 md:mt-8 text-lg md:text-xl max-w-2xl leading-relaxed ${
            isAr ? "font-arabic" : ""
          }`}
          style={{
            color: "rgba(255,255,255,0.55)",
            animation: "contentFadeIn 1.2s ease-out 3s both",
          }}
        >
          {t.subheadline}
        </p>

        {/* CTA buttons */}
        <div
          className={`mt-10 flex ${
            isAr ? "flex-row-reverse" : "flex-row"
          } gap-4`}
          style={{
            animation: "contentFadeIn 1.2s ease-out 3.4s both",
          }}
        >
          {/* primary */}
          <button
            className={`group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
              isAr ? "flex-row-reverse" : ""
            }`}
            style={{
              color: "#0c0c0c",
              background: "rgba(255,255,255,0.92)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.92)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {t.cta}
            <ArrowRight
              className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                isAr ? "rotate-180 group-hover:-translate-x-1" : ""
              }`}
            />
          </button>

          {/* secondary — ghost */}
          <button
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
              isAr ? "flex-row-reverse" : ""
            }`}
            style={{
              color: "rgba(255,255,255,0.65)",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              e.currentTarget.style.color = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "rgba(255,255,255,0.65)";
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>
    </section>
  );
}
