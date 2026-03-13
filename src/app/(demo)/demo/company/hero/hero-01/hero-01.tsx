"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";

interface Hero01Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "The architecture of\nambition",
    body: "We counsel the region's defining enterprises through inflection points that shape industries and economies.",
    cta: "Begin a conversation",
    metrics: "47 Markets · 2,400 Team · $18B Advisory",
  },
  ar: {
    heading: "هندسة\nالطموح",
    body: "نقدم المشورة للمؤسسات الرائدة في المنطقة خلال نقاط التحول التي تشكل الصناعات والاقتصادات.",
    cta: "ابدأ محادثة",
    metrics: "٤٧ سوقاً · ٢,٤٠٠ فريق · $١٨ مليار",
  },
};

export function Hero01({ language }: Hero01Props) {
  const isAr = language === "ar";
  const t = content[language];
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <>
      <style>{`
        @keyframes hero01-orb-drift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes hero01-line-expand {
          0% { width: 0; }
          100% { width: 3rem; }
        }

        @keyframes hero01-fade-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .hero01-orb {
          animation: hero01-orb-drift 20s ease-in-out infinite;
        }

        .hero01-line {
          animation: hero01-line-expand 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero01-heading {
          opacity: 0;
          animation: hero01-fade-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }

        .hero01-body {
          opacity: 0;
          animation: hero01-fade-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
        }

        .hero01-cta {
          opacity: 0;
          animation: hero01-fade-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
        }

        .hero01-metrics {
          opacity: 0;
          animation: hero01-fade-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero01-orb {
            animation: none;
          }
          .hero01-line {
            animation: none;
            width: 3rem;
          }
          .hero01-heading,
          .hero01-body,
          .hero01-cta,
          .hero01-metrics {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#08090d" }}
      >
        {/* Background orb */}
        <div
          className="hero01-orb pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(120,119,198,0.06) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          {/* Animated line */}
          <div className="flex justify-center">
            <div className="hero01-line h-px bg-white/20 w-0" />
          </div>

          {/* Spacer */}
          <div className="h-8" />

          {/* Heading */}
          <h1
            className={`hero01-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white/90 leading-[1.05] tracking-tight whitespace-pre-line ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.heading}
          </h1>

          {/* Spacer */}
          <div className="h-6" />

          {/* Body */}
          <p
            className={`hero01-body text-white/40 text-base md:text-lg max-w-lg mx-auto leading-relaxed ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.body}
          </p>

          {/* Spacer */}
          <div className="h-10" />

          {/* CTA */}
          <div className="hero01-cta flex justify-center">
            <button
              className={`cursor-pointer inline-flex items-center gap-2 border border-white/15 text-white/70 px-8 py-3 rounded-full transition-all duration-300 hover:border-white/40 hover:text-white ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {isAr && <ArrowIcon className="w-4 h-4" />}
              <span>{t.cta}</span>
              {!isAr && <ArrowIcon className="w-4 h-4" />}
            </button>
          </div>

          {/* Spacer */}
          <div className="h-16" />

          {/* Metrics */}
          <p className="hero01-metrics text-[11px] text-white/20 tracking-widest uppercase font-mono">
            {t.metrics}
          </p>
        </div>
      </section>
    </>
  );
}
