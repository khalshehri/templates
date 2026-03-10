"use client";

/**
 * Typewriter Hero Template
 *
 * Vintage typewriter aesthetic. Text appears character-by-character as if being
 * typed on an old mechanical typewriter. Paper texture background with ink
 * splatter marks. Monospace font throughout. A typewriter carriage return
 * animation accents the heading reveal. Warm sepia/cream/brown tones evoke
 * nostalgia and craftsmanship.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Est. 2024",
    heading: "Crafted with precision,",
    headingLine2: "delivered with soul.",
    description:
      "Every great story starts with a single keystroke. We build digital experiences that feel as intentional and timeless as a handwritten letter.",
    primaryCta: "Start Your Story",
    secondaryCta: "Read Our Work",
    typedWords: ["creativity.", "purpose.", "passion.", "precision."],
    builtWith: "Built with",
  },
  ar: {
    badge: "تأسست ٢٠٢٤",
    heading: "صُنع بدقة،",
    headingLine2: "يُقدَّم بروح.",
    description:
      "كل قصة عظيمة تبدأ بضغطة مفتاح واحدة. نبني تجارب رقمية تبدو مقصودة وخالدة كرسالة مكتوبة بخط اليد.",
    primaryCta: "ابدأ قصتك",
    secondaryCta: "اطّلع على أعمالنا",
    typedWords: ["إبداع.", "هدف.", "شغف.", "دقة."],
    builtWith: "صُنع بـ",
  },
};

export function Typewriter({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Courier+Prime:wght@400;700&display=swap');

        @keyframes typewriter-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes type-line-1 {
          0% { width: 0; }
          40% { width: 100%; }
          100% { width: 100%; }
        }

        @keyframes type-line-2 {
          0%, 40% { width: 0; }
          80% { width: 100%; }
          100% { width: 100%; }
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes carriage-return {
          0% { transform: translateX(0); }
          15% { transform: translateX(30px); }
          30% { transform: translateX(-100%); }
          45% { transform: translateX(0); }
          100% { transform: translateX(0); }
        }

        @keyframes carriage-return-rtl {
          0% { transform: translateX(0); }
          15% { transform: translateX(-30px); }
          30% { transform: translateX(100%); }
          45% { transform: translateX(0); }
          100% { transform: translateX(0); }
        }

        @keyframes ink-splatter-1 {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 0.15; }
          100% { transform: scale(1); opacity: 0.08; }
        }

        @keyframes ink-splatter-2 {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          60% { transform: scale(1.1) rotate(45deg); opacity: 0.12; }
          100% { transform: scale(1) rotate(45deg); opacity: 0.06; }
        }

        @keyframes key-press {
          0%, 100% { transform: translateY(0); box-shadow: 0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2); }
          50% { transform: translateY(2px); box-shadow: 0 2px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1); }
        }

        @keyframes paper-grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-1px, -1px); }
          20% { transform: translate(1px, 0); }
          30% { transform: translate(0, 1px); }
          40% { transform: translate(-1px, 1px); }
          50% { transform: translate(1px, -1px); }
        }

        @keyframes word-cycle {
          0%, 20% { opacity: 1; transform: translateY(0); }
          25%, 45% { opacity: 0; transform: translateY(-20px); }
          50% { opacity: 0; transform: translateY(20px); }
          55%, 75% { opacity: 1; transform: translateY(0); }
          80%, 100% { opacity: 0; transform: translateY(-20px); }
        }

        @keyframes stamp-in {
          0% { transform: scale(3) rotate(-15deg); opacity: 0; }
          70% { transform: scale(1) rotate(-8deg); opacity: 0.25; }
          100% { transform: scale(1) rotate(-8deg); opacity: 0.15; }
        }

        .tw-heading-font {
          font-family: 'Special Elite', 'Courier New', monospace;
        }

        .tw-body-font {
          font-family: 'Courier Prime', 'Courier New', monospace;
        }

        .tw-typed-line-1 {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: type-line-1 4s steps(30, end) forwards;
          border-right: none;
        }

        .tw-typed-line-2 {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: type-line-2 4s steps(25, end) forwards;
        }

        .tw-cursor {
          display: inline-block;
          animation: typewriter-cursor 0.7s step-end infinite;
          color: #2c1810;
          font-weight: 400;
        }

        .tw-carriage {
          animation: carriage-return 4s ease-in-out 1;
        }

        .tw-carriage-rtl {
          animation: carriage-return-rtl 4s ease-in-out 1;
        }

        .tw-fade-in {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .tw-fade-in-d1 { animation-delay: 2.5s; }
        .tw-fade-in-d2 { animation-delay: 3.0s; }
        .tw-fade-in-d3 { animation-delay: 3.5s; }
        .tw-fade-in-d4 { animation-delay: 4.0s; }

        .tw-ink-1 {
          animation: ink-splatter-1 1.5s ease-out 0.5s forwards;
          opacity: 0;
        }

        .tw-ink-2 {
          animation: ink-splatter-2 1.8s ease-out 1.2s forwards;
          opacity: 0;
        }

        .tw-stamp {
          animation: stamp-in 0.6s ease-out 2s forwards;
          opacity: 0;
        }

        .tw-key-btn {
          background: linear-gradient(180deg, #4a3728 0%, #3a2a1e 50%, #2c1f15 100%);
          border: 2px solid #1a110a;
          border-radius: 50px;
          color: #f5f0e8;
          font-family: 'Special Elite', 'Courier New', monospace;
          padding: 14px 32px;
          font-size: 15px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          box-shadow:
            0 4px 6px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.15),
            0 1px 0 #1a110a;
          transition: all 0.15s ease;
        }

        .tw-key-btn:hover {
          animation: key-press 0.15s ease forwards;
          background: linear-gradient(180deg, #5a4738 0%, #4a3728 50%, #3a2a1e 100%);
        }

        .tw-key-btn-secondary {
          background: transparent;
          border: 2px solid #8b7355;
          border-radius: 50px;
          color: #4a3728;
          font-family: 'Special Elite', 'Courier New', monospace;
          padding: 14px 32px;
          font-size: 15px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: all 0.2s ease;
        }

        .tw-key-btn-secondary:hover {
          background: rgba(74, 55, 40, 0.08);
          border-color: #4a3728;
        }

        .tw-paper-edge {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0,0,0,0.03) 40%,
            rgba(0,0,0,0.08) 100%
          );
        }

        .tw-paper-edge::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 8px,
            rgba(0,0,0,0.06) 8px,
            rgba(0,0,0,0.06) 12px
          );
        }

        .tw-grain-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.4;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 256px 256px;
          pointer-events: none;
          animation: paper-grain 8s steps(1) infinite;
        }

        .tw-ruled-lines {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            180deg,
            transparent 0px,
            transparent 38px,
            rgba(180, 160, 130, 0.2) 38px,
            rgba(180, 160, 130, 0.2) 39px
          );
          pointer-events: none;
        }

        .tw-margin-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(180, 80, 80, 0.15);
          pointer-events: none;
        }
      `}</style>

      {/* Paper grain overlay */}
      <div className="tw-grain-overlay" />

      {/* Faint ruled lines */}
      <div className="tw-ruled-lines" />

      {/* Margin line */}
      <div
        className="tw-margin-line"
        style={{ [isAr ? "right" : "left"]: "10%" }}
      />

      {/* Ink splatters */}
      <div
        className="tw-ink-1 absolute"
        style={{
          top: "15%",
          [isAr ? "left" : "right"]: "12%",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, #2c1810 0%, transparent 70%)",
        }}
      />
      <div
        className="tw-ink-2 absolute"
        style={{
          bottom: "25%",
          [isAr ? "right" : "left"]: "8%",
          width: 80,
          height: 60,
          borderRadius: "40% 60% 55% 45%",
          background:
            "radial-gradient(ellipse at center, #2c1810 0%, transparent 65%)",
        }}
      />
      <div
        className="tw-ink-1 absolute"
        style={{
          top: "60%",
          [isAr ? "left" : "right"]: "25%",
          width: 40,
          height: 40,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, #8b1a1a 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      {/* Stamp watermark */}
      <div
        className="tw-stamp absolute tw-heading-font"
        style={{
          top: "12%",
          [isAr ? "left" : "right"]: "8%",
          fontSize: 60,
          color: "#8b1a1a",
          border: "4px solid #8b1a1a",
          borderRadius: 8,
          padding: "8px 20px",
          textTransform: "uppercase",
          letterSpacing: 6,
          pointerEvents: "none",
        }}
      >
        {isAr ? "أصيل" : "Original"}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24">
        <div
          className={`max-w-4xl w-full ${isAr ? "text-right" : "text-left"}`}
        >
          {/* Badge */}
          <div
            className={`tw-fade-in tw-fade-in-d1 inline-flex items-center gap-2 mb-8 ${isAr ? "flex-row-reverse" : ""}`}
          >
            <span
              className="tw-body-font text-sm tracking-[3px] uppercase px-4 py-2"
              style={{
                color: "#6b5744",
                border: "1px solid #b4a082",
                borderRadius: 2,
              }}
            >
              {t.badge}
            </span>
          </div>

          {/* Typed heading */}
          <div className={`mb-6 ${isAr ? "tw-carriage-rtl" : "tw-carriage"}`}>
            <h1
              className="tw-heading-font leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                color: "#2c1810",
                lineHeight: 1.3,
              }}
            >
              <span className="tw-typed-line-1 block">{t.heading}</span>
              <span className="tw-typed-line-2 block">
                {t.headingLine2}
                <span className="tw-cursor" style={{ marginLeft: isAr ? 0 : 4, marginRight: isAr ? 4 : 0 }}>|</span>
              </span>
            </h1>
          </div>

          {/* Description */}
          <p
            className="tw-fade-in tw-fade-in-d2 tw-body-font max-w-2xl text-lg leading-relaxed mb-10"
            style={{ color: "#5c4a3a", lineHeight: 2 }}
          >
            {t.description}
          </p>

          {/* CTA buttons */}
          <div
            className={`tw-fade-in tw-fade-in-d3 flex flex-wrap gap-4 ${isAr ? "flex-row-reverse" : ""}`}
          >
            <button className="tw-key-btn">
              <span
                className={`inline-flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}
              >
                {t.primaryCta}
                <ArrowRight
                  className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`}
                />
              </span>
            </button>
            <button className="tw-key-btn-secondary">
              <span
                className={`inline-flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}
              >
                {t.secondaryCta}
                <ArrowRight
                  className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`}
                />
              </span>
            </button>
          </div>

          {/* Typewriter key decorations */}
          <div
            className={`tw-fade-in tw-fade-in-d4 flex items-center gap-3 mt-16 ${isAr ? "flex-row-reverse" : ""}`}
          >
            <span
              className="tw-body-font text-xs tracking-widest uppercase"
              style={{ color: "#8b7355" }}
            >
              {t.builtWith}
            </span>
            {["S", "A", "F", "A", "H", "A", "T", "I"].map((letter, i) => (
              <span
                key={i}
                className="tw-heading-font inline-flex items-center justify-center"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(180deg, #f5f0e8 0%, #e8dfd3 100%)",
                  border: "2px solid #b4a082",
                  boxShadow:
                    "0 2px 4px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.5)",
                  color: "#2c1810",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Paper edge effect */}
      <div className="tw-paper-edge" />

      {/* Top shadow for paper depth */}
      <div
        className="absolute top-0 left-0 right-0 h-8 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
