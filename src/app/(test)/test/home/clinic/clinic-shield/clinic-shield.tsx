"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "ShieldMed Clinic",
    tagline: "Protection Through Prevention",
    description:
      "Your first line of defense against illness. Comprehensive preventive care, immunizations, and health screenings designed to keep you protected year-round.",
    cta: "Get Protected",
    secondary: "View Programs",
  },
  ar: {
    name: "عيادة شيلد ميد",
    tagline: "الحماية من خلال الوقاية",
    description:
      "خط دفاعك الأول ضد الأمراض. رعاية وقائية شاملة وتطعيمات وفحوصات صحية مصممة لحمايتك على مدار العام.",
    cta: "احصل على الحماية",
    secondary: "عرض البرامج",
  },
};

export function ClinicShield({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #021a16 0%, #041f1a 50%, #030d0a 100%)" }}
    >
      {/* Shield with plus sign - centered background element */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* Pulsing aura rings */}
        <div className="shield-aura-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ width: 400, height: 400, border: "1px solid rgba(20,184,166,0.08)" }} />
        <div className="shield-aura-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ width: 320, height: 320, border: "1px solid rgba(20,184,166,0.12)" }} />
        <div className="shield-aura-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ width: 260, height: 260, border: "1px solid rgba(20,184,166,0.15)" }} />

        {/* Shield SVG */}
        <svg width="200" height="240" viewBox="0 0 200 240" className="shield-float relative z-10">
          {/* Shield shape */}
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(20,184,166,0.15)" />
              <stop offset="100%" stopColor="rgba(16,185,129,0.08)" />
            </linearGradient>
            <filter id="shieldGlow">
              <feGaussianBlur stdDeviation="8" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M100,10 L180,50 L180,120 C180,180 140,220 100,235 C60,220 20,180 20,120 L20,50 Z"
            fill="url(#shieldGrad)"
            stroke="rgba(20,184,166,0.4)"
            strokeWidth="1.5"
            filter="url(#shieldGlow)"
          />
          {/* Inner shield border */}
          <path
            d="M100,25 L168,58 L168,118 C168,172 133,208 100,222 C67,208 32,172 32,118 L32,58 Z"
            fill="none"
            stroke="rgba(20,184,166,0.15)"
            strokeWidth="1"
          />
          {/* Plus sign */}
          <rect x="85" y="90" width="30" height="6" rx="3" fill="rgba(45,212,191,0.8)" className="plus-h" />
          <rect x="97" y="78" width="6" height="30" rx="3" fill="rgba(45,212,191,0.8)" className="plus-v" />
        </svg>
      </div>

      {/* Corner protection indicators */}
      {[
        { top: "15%", left: "15%" },
        { top: "15%", right: "15%" },
        { bottom: "15%", left: "15%" },
        { bottom: "15%", right: "15%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute pointer-events-none corner-indicator"
          style={{ ...pos, animationDelay: `${i * 0.5}s` }}
        >
          <div className="w-3 h-3 rounded-full" style={{ background: "rgba(20,184,166,0.3)", boxShadow: "0 0 10px rgba(20,184,166,0.2)" }} />
        </div>
      ))}

      {/* Connecting lines between corners */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-10">
          <line x1="15%" y1="15%" x2="85%" y2="15%" stroke="#14b8a6" strokeWidth="0.5" strokeDasharray="4 8" />
          <line x1="85%" y1="15%" x2="85%" y2="85%" stroke="#14b8a6" strokeWidth="0.5" strokeDasharray="4 8" />
          <line x1="85%" y1="85%" x2="15%" y2="85%" stroke="#14b8a6" strokeWidth="0.5" strokeDasharray="4 8" />
          <line x1="15%" y1="85%" x2="15%" y2="15%" stroke="#14b8a6" strokeWidth="0.5" strokeDasharray="4 8" />
        </svg>
      </div>

      {/* Content */}
      <div className={`relative z-10 px-6 max-w-3xl mx-auto mt-60 ${isAr ? "text-right" : "text-center"}`}>
        <p
          className="text-sm tracking-[0.25em] uppercase mb-4 font-medium"
          style={{ color: "#2dd4bf", letterSpacing: isAr ? "0.1em" : "0.25em" }}
        >
          {t.tagline}
        </p>

        <h1
          className="font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#ccfbf1",
            textShadow: "0 0 40px rgba(20,184,166,0.2)",
          }}
        >
          {t.name}
        </h1>

        <p
          className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed"
          style={{ color: "rgba(204,251,241,0.55)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : "justify-center"}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #10b981, #14b8a6)",
              color: "#021a16",
              boxShadow: "0 0 30px rgba(16,185,129,0.3), 0 4px 15px rgba(0,0,0,0.3)",
            }}
          >
            {isAr ? (
              <>
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                {t.cta}
              </>
            ) : (
              <>
                {t.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <button
            className="px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(16,185,129,0.4)",
              color: "#34d399",
              background: "rgba(16,185,129,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .shield-float {
          animation: shield-hover 4s ease-in-out infinite;
        }
        .shield-aura-1 {
          animation: aura-pulse 3s ease-in-out infinite;
        }
        .shield-aura-2 {
          animation: aura-pulse 3s ease-in-out 0.5s infinite;
        }
        .shield-aura-3 {
          animation: aura-pulse 3s ease-in-out 1s infinite;
        }
        .corner-indicator {
          animation: corner-blink 2s ease-in-out infinite;
        }
        .plus-h, .plus-v {
          animation: plus-glow 2s ease-in-out infinite;
        }
        @keyframes shield-hover {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes aura-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
        }
        @keyframes corner-blink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes plus-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; filter: drop-shadow(0 0 8px rgba(45,212,191,0.6)); }
        }
      `}</style>
    </section>
  );
}
