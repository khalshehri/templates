"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Iron Temple",
    title: "Lift Heavy",
    subtitle: "Build Stronger",
    description: "Steel doesn't lie. Every rep forges a better you. Join the community that turns iron into gold.",
    cta: "Join Now",
    secondary: "Free Trial",
    weight: "225 LBS",
  },
  ar: {
    badge: "معبد الحديد",
    title: "ارفع أثقل",
    subtitle: "ابنِ أقوى",
    description: "الحديد لا يكذب. كل تكرار يصنع نسخة أفضل منك. انضم للمجتمع الذي يحوّل الحديد إلى ذهب.",
    cta: "انضم الآن",
    secondary: "تجربة مجانية",
    weight: "١٠٠ كجم",
  },
};

export function GymWeights({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Dark iron texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      {/* Warm ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "70%",
          height: "50%",
          background: "radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Barbell illustration */}
      <div className="absolute top-[22%] left-1/2 -translate-x-1/2 pointer-events-none">
        {/* Bar */}
        <div className="barbell-bounce" style={{ position: "relative", width: 360, height: 12 }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to bottom, #555, #333, #555)",
              borderRadius: 6,
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
          />
          {/* Left outer plate */}
          <div
            style={{
              position: "absolute",
              top: -30,
              left: 10,
              width: 20,
              height: 72,
              background: "linear-gradient(to right, #ef4444, #dc2626)",
              borderRadius: 4,
              boxShadow: "0 0 15px rgba(239,68,68,0.3)",
            }}
          />
          {/* Left inner plate */}
          <div
            style={{
              position: "absolute",
              top: -22,
              left: 34,
              width: 16,
              height: 56,
              background: "linear-gradient(to right, #f97316, #ea580c)",
              borderRadius: 3,
              boxShadow: "0 0 10px rgba(249,115,22,0.3)",
            }}
          />
          {/* Left small plate */}
          <div
            className="plate-load-left"
            style={{
              position: "absolute",
              top: -16,
              left: 54,
              width: 12,
              height: 44,
              background: "linear-gradient(to right, #fbbf24, #f59e0b)",
              borderRadius: 3,
              boxShadow: "0 0 8px rgba(251,191,36,0.3)",
            }}
          />
          {/* Right outer plate */}
          <div
            style={{
              position: "absolute",
              top: -30,
              right: 10,
              width: 20,
              height: 72,
              background: "linear-gradient(to left, #ef4444, #dc2626)",
              borderRadius: 4,
              boxShadow: "0 0 15px rgba(239,68,68,0.3)",
            }}
          />
          {/* Right inner plate */}
          <div
            style={{
              position: "absolute",
              top: -22,
              right: 34,
              width: 16,
              height: 56,
              background: "linear-gradient(to left, #f97316, #ea580c)",
              borderRadius: 3,
              boxShadow: "0 0 10px rgba(249,115,22,0.3)",
            }}
          />
          {/* Right small plate */}
          <div
            className="plate-load-right"
            style={{
              position: "absolute",
              top: -16,
              right: 54,
              width: 12,
              height: 44,
              background: "linear-gradient(to left, #fbbf24, #f59e0b)",
              borderRadius: 3,
              boxShadow: "0 0 8px rgba(251,191,36,0.3)",
            }}
          />
          {/* Center grip */}
          <div
            style={{
              position: "absolute",
              top: -4,
              left: "50%",
              transform: "translateX(-50%)",
              width: 80,
              height: 20,
              background: "repeating-linear-gradient(90deg, #444 0px, #444 4px, #555 4px, #555 8px)",
              borderRadius: 4,
            }}
          />
        </div>
        {/* Weight label */}
        <div
          className="text-center mt-8 font-mono font-bold text-2xl weight-pulse"
          style={{ color: "#f97316" }}
        >
          {t.weight}
        </div>
      </div>

      {/* Floating iron particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: "15%", top: "60%", size: 4, delay: 0, dur: 6 },
          { left: "80%", top: "70%", size: 3, delay: 1, dur: 8 },
          { left: "25%", top: "80%", size: 5, delay: 2, dur: 7 },
          { left: "65%", top: "55%", size: 3, delay: 0.5, dur: 9 },
          { left: "45%", top: "75%", size: 4, delay: 3, dur: 6.5 },
          { left: "90%", top: "65%", size: 3, delay: 1.5, dur: 7.5 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-sm"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: "rgba(249,115,22,0.3)",
              animation: `iron-float ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-32">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
          style={{
            background: "rgba(249,115,22,0.15)",
            color: "#f97316",
            border: "1px solid rgba(249,115,22,0.3)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-black mb-2 leading-none"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "#fff",
            textShadow: "0 0 60px rgba(249,115,22,0.2)",
          }}
        >
          {t.title}
        </h1>

        <h2
          className="font-bold mb-6"
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
            color: "#f97316",
          }}
        >
          {t.subtitle}
        </h2>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-400">
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(249,115,22,0.4), 0 4px 15px rgba(0,0,0,0.3)",
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
              border: "1px solid rgba(249,115,22,0.4)",
              color: "#f97316",
              background: "rgba(249,115,22,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes barbell-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .barbell-bounce {
          animation: barbell-bounce 2s ease-in-out infinite;
        }
        @keyframes plate-load {
          0% { opacity: 0; transform: translateX(-20px); }
          50% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .plate-load-left {
          animation: plate-load 3s ease-out infinite;
        }
        @keyframes plate-load-r {
          0% { opacity: 0; transform: translateX(20px); }
          50% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .plate-load-right {
          animation: plate-load-r 3s ease-out infinite;
        }
        @keyframes weight-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .weight-pulse {
          animation: weight-pulse 2s ease-in-out infinite;
        }
        @keyframes iron-float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-40px) rotate(180deg); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
