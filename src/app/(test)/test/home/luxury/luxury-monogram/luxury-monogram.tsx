"use client";

/**
 * Luxury Monogram Hero
 * Large decorative monogram letter in background, content overlaid.
 * Brand identity focus. Gold/black palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    monogram: "M",
    brandName: "MAISON AURÉLIE",
    heading: "Where Legacy\nMeets Vision",
    tagline: "Three generations of artisanal excellence, distilled into every creation that bears our mark.",
    cta: "Discover Our Heritage",
    since: "Since 1952",
    location: "Paris · Riyadh · Dubai",
  },
  ar: {
    monogram: "م",
    brandName: "ميزون أوريلي",
    heading: "حيث يلتقي\nالإرث بالرؤية",
    tagline: "ثلاثة أجيال من التميّز الحرفي، مُقطّرة في كل إبداع يحمل علامتنا.",
    cta: "اكتشف إرثنا",
    since: "منذ ١٩٥٢",
    location: "باريس · الرياض · دبي",
  },
};

export function LuxuryMonogram({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes monogramReveal {
          0% { opacity: 0; transform: scale(0.8); filter: blur(20px); }
          100% { opacity: 0.06; transform: scale(1); filter: blur(0); }
        }
        @keyframes contentSlide {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes goldPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes monogramSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .content-slide { animation: contentSlide 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .line-expand { animation: lineExpand 1.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0908]">
        {/* Giant monogram in center */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ animation: "monogramReveal 3s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
        >
          <span
            className="text-[40rem] sm:text-[50rem] lg:text-[65rem] font-serif leading-none"
            style={{
              fontFamily: "var(--font-amiri), Georgia, serif",
              color: "transparent",
              WebkitTextStroke: "1px rgba(212, 175, 55, 0.08)",
            }}
          >
            {t.monogram}
          </span>
        </div>

        {/* Circular ring around monogram */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full pointer-events-none"
          style={{
            border: "1px solid rgba(212, 175, 55, 0.06)",
            animation: "monogramSpin 60s linear infinite",
          }}
        >
          {/* Small dot on the ring */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{ background: "rgba(212, 175, 55, 0.3)", animation: "goldPulse 3s ease-in-out infinite" }}
          />
        </div>

        {/* Second ring */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[460px] sm:h-[460px] lg:w-[580px] lg:h-[580px] rounded-full pointer-events-none"
          style={{
            border: "1px dashed rgba(212, 175, 55, 0.03)",
            animation: "monogramSpin 90s linear infinite reverse",
          }}
        />

        {/* Content */}
        <div className={`relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 ${isAr ? "text-right" : "text-left"}`}>
          {/* Brand name */}
          <p
            className="content-slide text-[11px] uppercase tracking-[0.6em] font-light"
            style={{ color: "rgba(212, 175, 55, 0.5)", animationDelay: "1s" }}
          >
            {t.brandName}
          </p>

          {/* Since */}
          <p
            className="content-slide mt-2 text-[10px] uppercase tracking-[0.3em]"
            style={{ color: "rgba(255,255,255,0.15)", animationDelay: "1.1s" }}
          >
            {t.since}
          </p>

          {/* Line */}
          <div
            className={`line-expand mt-8 h-px w-20 ${isAr ? "ml-auto" : ""}`}
            style={{
              background: "linear-gradient(90deg, rgba(212, 175, 55, 0.5), transparent)",
              transformOrigin: isAr ? "right" : "left",
              animationDelay: "1.3s",
            }}
          />

          {/* Heading */}
          <h1
            className="content-slide mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[0.95] whitespace-pre-line"
            style={{
              animationDelay: "1.5s",
              fontFamily: "var(--font-amiri), Georgia, serif",
              color: "#ffffff",
            }}
          >
            {t.heading}
          </h1>

          {/* Tagline */}
          <p
            className="content-slide mt-8 text-base font-light max-w-lg leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.25)",
              animationDelay: "1.8s",
              marginLeft: isAr ? "auto" : undefined,
            }}
          >
            {t.tagline}
          </p>

          {/* CTA */}
          <div className="content-slide mt-10" style={{ animationDelay: "2.1s" }}>
            <a
              href="#"
              className={`group inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-light transition-colors duration-500 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ color: "rgba(212, 175, 55, 0.5)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(212, 175, 55, 0.9)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(212, 175, 55, 0.5)"; }}
            >
              {t.cta}
              <ArrowRight size={12} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
            </a>
          </div>

          {/* Location */}
          <p
            className="content-slide mt-16 text-[10px] uppercase tracking-[0.4em]"
            style={{ color: "rgba(255,255,255,0.08)", animationDelay: "2.5s" }}
          >
            {t.location}
          </p>
        </div>
      </section>
    </>
  );
}
