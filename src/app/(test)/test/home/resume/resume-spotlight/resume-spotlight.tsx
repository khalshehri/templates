"use client";

/**
 * Resume Spotlight -- Resume Hero Template
 *
 * Dark stage with spotlight revealing name/role. Skills emerge from shadows.
 * Dramatic theatrical lighting with a single focused beam.
 *
 * @category Resume
 * @palette violet (#7C3AED), warm white (#FFF8E7), shadow (#050510)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "Emma Wright",
    role: "Brand Strategist",
    heading: "Stepping Into the Spotlight",
    subheading:
      "When the curtains part and the lights focus, the story begins. A strategist who transforms brands from whispers to ovations.",
    cta: "Book a Consultation",
    secondary: "See Case Studies",
    skills: ["Brand Strategy", "Market Research", "Storytelling", "Growth", "Positioning", "Identity"],
    tagline: "Making brands unforgettable since 2016",
  },
  ar: {
    name: "إيمان أحمد",
    role: "استراتيجية العلامات",
    heading: "الصعود إلى دائرة الضوء",
    subheading:
      "عندما تنفتح الستائر وتتركز الأضواء، تبدأ القصة. استراتيجية تحوّل العلامات من همسات إلى تصفيق.",
    cta: "احجز استشارة",
    secondary: "شاهد الحالات",
    skills: ["استراتيجية العلامة", "أبحاث السوق", "السرد القصصي", "النمو", "التمركز", "الهوية"],
    tagline: "نجعل العلامات لا تُنسى منذ ٢٠١٦",
  },
};

export function ResumeSpotlight({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#050510" }}
    >
      {/* Spotlight beam from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: "100%",
          height: "100%",
          background: "conic-gradient(from 180deg at 50% -5%, transparent 40%, rgba(255,248,231,0.03) 48%, rgba(255,248,231,0.06) 50%, rgba(255,248,231,0.03) 52%, transparent 60%)",
        }}
      />

      {/* Circular spotlight pool on the floor */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: "15%",
          width: "500px",
          height: "120px",
          background: "radial-gradient(ellipse, rgba(255,248,231,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Main content in the spotlight */}
      <div className="relative z-10 max-w-2xl mx-auto px-8 text-center">
        {/* Name with dramatic reveal */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3"
          style={{
            color: "#FFF8E7",
            textShadow: "0 0 40px rgba(255,248,231,0.2), 0 0 80px rgba(124,58,237,0.15)",
            animation: "spotlightReveal 2s ease-out",
          }}
        >
          {t.name}
        </h1>

        {/* Role */}
        <div
          className="text-xl mb-2"
          style={{
            color: "#A78BFA",
            textShadow: "0 0 20px rgba(167,139,250,0.3)",
          }}
        >
          {t.role}
        </div>

        {/* Tagline */}
        <div
          className="text-sm mb-8 tracking-wide"
          style={{ color: "rgba(255,248,231,0.3)" }}
        >
          {t.tagline}
        </div>

        {/* Decorative line */}
        <div
          className="w-24 h-[1px] mx-auto mb-8"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)",
          }}
        />

        <p
          className="text-lg leading-relaxed mb-8 max-w-lg mx-auto"
          style={{ color: "rgba(255,248,231,0.5)" }}
        >
          {t.subheading}
        </p>

        {/* Skills emerging from shadows */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {t.skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: "rgba(124,58,237,0.08)",
                color: "rgba(167,139,250,0.7)",
                border: "1px solid rgba(124,58,237,0.15)",
                animation: `skillEmerge 1s ease-out ${0.3 + i * 0.15}s both`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6366F1)",
              boxShadow: "0 4px 30px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.1)",
            }}
          >
            {t.cta}
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
            />
          </button>
          <button
            className="px-8 py-3.5 rounded-full text-sm font-semibold transition-colors"
            style={{ color: "rgba(255,248,231,0.5)", border: "1px solid rgba(255,248,231,0.15)" }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      {/* Side shadow figures (faint audience) */}
      <div
        className="absolute bottom-[10%] opacity-[0.04]"
        style={{ [isRTL ? "right" : "left"]: "5%" }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="inline-flex flex-col items-center mx-3">
            <div className="w-6 h-6 rounded-full bg-white" />
            <div className="w-10 h-5 bg-white rounded-t-full mt-1" />
          </div>
        ))}
      </div>
      <div
        className="absolute bottom-[10%] opacity-[0.04]"
        style={{ [isRTL ? "left" : "right"]: "5%" }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="inline-flex flex-col items-center mx-3">
            <div className="w-6 h-6 rounded-full bg-white" />
            <div className="w-10 h-5 bg-white rounded-t-full mt-1" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes spotlightReveal {
          0% { opacity: 0; transform: translateY(20px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes skillEmerge {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
