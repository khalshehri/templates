"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "CrossPoint Medical",
    tagline: "Where Health Paths Converge",
    description:
      "A beacon of healing in your community. Our multi-specialty clinic brings together expert physicians, advanced diagnostics, and compassionate care under one roof.",
    cta: "Find a Doctor",
    secondary: "Emergency Care",
  },
  ar: {
    name: "كروس بوينت الطبي",
    tagline: "حيث تتقاطع مسارات الصحة",
    description:
      "منارة الشفاء في مجتمعك. عيادتنا متعددة التخصصات تجمع أطباء خبراء وتشخيصات متقدمة ورعاية حانية تحت سقف واحد.",
    cta: "ابحث عن طبيب",
    secondary: "الطوارئ",
  },
};

export function ClinicCross({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0f1628 50%, #0a0f1e 100%)" }}
    >
      {/* Central glowing cross */}
      <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* Radial light burst */}
        <div className="cross-radial absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(20,184,166,0.12) 0%, rgba(20,184,166,0.04) 30%, transparent 60%)",
        }} />

        {/* Light rays */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 ray-beam"
            style={{
              width: 1,
              height: 200,
              background: "linear-gradient(to top, rgba(20,184,166,0.15), transparent)",
              transformOrigin: "bottom center",
              transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}

        {/* Cross shape */}
        <div className="relative cross-glow">
          {/* Horizontal bar */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 120,
            height: 36,
            borderRadius: 8,
            background: "linear-gradient(90deg, rgba(20,184,166,0.05), rgba(20,184,166,0.3), rgba(20,184,166,0.05))",
            border: "1px solid rgba(20,184,166,0.3)",
            boxShadow: "0 0 40px rgba(20,184,166,0.2), inset 0 0 20px rgba(20,184,166,0.1)",
          }} />
          {/* Vertical bar */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 36,
            height: 120,
            borderRadius: 8,
            background: "linear-gradient(180deg, rgba(20,184,166,0.05), rgba(20,184,166,0.3), rgba(20,184,166,0.05))",
            border: "1px solid rgba(20,184,166,0.3)",
            boxShadow: "0 0 40px rgba(20,184,166,0.2), inset 0 0 20px rgba(20,184,166,0.1)",
          }} />
          {/* Center bright point */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "rgba(45,212,191,0.8)",
            boxShadow: "0 0 20px rgba(45,212,191,0.6), 0 0 60px rgba(45,212,191,0.3)",
          }} />
        </div>
      </div>

      {/* Orbiting small crosses */}
      {[
        { size: 280, duration: 15, delay: 0 },
        { size: 380, duration: 20, delay: 2 },
        { size: 460, duration: 25, delay: 4 },
      ].map((orbit, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-[40%] pointer-events-none orbit-ring"
          style={{
            width: orbit.size,
            height: orbit.size,
            transform: "translate(-50%, -50%)",
            border: "1px solid rgba(20,184,166,0.06)",
            borderRadius: "50%",
            animationDuration: `${orbit.duration}s`,
            animationDelay: `${orbit.delay}s`,
          }}
        >
          <div
            className="absolute -top-1.5 left-1/2 -translate-x-1/2"
            style={{
              width: 8,
              height: 8,
              background: "rgba(20,184,166,0.5)",
              borderRadius: "50%",
              boxShadow: "0 0 8px rgba(20,184,166,0.4)",
            }}
          />
        </div>
      ))}

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(20,184,166,1) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Content */}
      <div className={`relative z-10 px-6 max-w-3xl mx-auto mt-48 ${isAr ? "text-right" : "text-center"}`}>
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
            color: "#f0fdfa",
            textShadow: "0 0 60px rgba(20,184,166,0.2)",
          }}
        >
          {t.name}
        </h1>

        <p
          className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed"
          style={{ color: "rgba(204,251,241,0.5)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : "justify-center"}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #14b8a6, #2dd4bf)",
              color: "#0a0a1a",
              boxShadow: "0 0 30px rgba(20,184,166,0.35), 0 4px 15px rgba(0,0,0,0.3)",
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
              border: "1px solid rgba(20,184,166,0.35)",
              color: "#5eead4",
              background: "rgba(20,184,166,0.06)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .cross-glow {
          animation: cross-pulse 3s ease-in-out infinite;
        }
        .cross-radial {
          animation: radial-breathe 4s ease-in-out infinite;
        }
        .ray-beam {
          animation: ray-fade 3s ease-in-out infinite;
        }
        .orbit-ring {
          animation: orbit-spin 15s linear infinite;
        }
        @keyframes cross-pulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3) drop-shadow(0 0 20px rgba(20,184,166,0.3)); }
        }
        @keyframes radial-breathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        }
        @keyframes ray-fade {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes orbit-spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
