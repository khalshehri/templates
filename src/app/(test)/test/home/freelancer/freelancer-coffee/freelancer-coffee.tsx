/**
 * FreelancerCoffee — Coffee cup with creative steam
 *
 * Large coffee cup with steam wisps that morph into creative icons.
 * Warm, cozy tones with amber and brown palette.
 *
 * @module freelancer-coffee
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Fueled by Coffee & Creativity",
    title: "Where Ideas",
    titleAccent: "Come to Life",
    description:
      "I'm a freelance creative who turns caffeine into code, pixels, and purpose. Every project starts with a fresh cup and a bold vision.",
    cta: "Let's Collaborate",
    secondary: "See My Work",
  },
  ar: {
    badge: "بالقهوة والإبداع",
    title: "حيث الأفكار",
    titleAccent: "تنبض بالحياة",
    description:
      "مبدع مستقل أحوّل القهوة إلى أكواد وتصاميم وأهداف. كل مشروع يبدأ بكوب طازج ورؤية جريئة.",
    cta: "لنتعاون معًا",
    secondary: "شاهد أعمالي",
  },
};

export function FreelancerCoffee({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #1c1210 0%, #2a1f1a 40%, #1a1510 100%)" }}
    >
      {/* Warm ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "60%",
          height: "60%",
          background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)",
        }}
      />

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center gap-20 ${isAr ? "lg:flex-row-reverse" : ""}`}>
        {/* Text */}
        <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-amber-900/40 text-amber-400 border border-amber-700/30 mb-6">
            {t.badge}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-50 leading-tight mb-2">
            {t.title}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-amber-500">
            {t.titleAccent}
          </h1>

          <p className="text-lg text-amber-200/60 max-w-lg mb-10 leading-relaxed">
            {t.description}
          </p>

          <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
            <button className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-amber-950 transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", boxShadow: "0 0 30px rgba(245,158,11,0.3)" }}>
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
            <button className="px-7 py-3.5 rounded-xl font-semibold text-amber-400 border border-amber-700/40 hover:bg-amber-900/20 transition-colors">
              {t.secondary}
            </button>
          </div>
        </div>

        {/* Coffee Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative" style={{ width: 300, height: 400 }}>
            {/* Saucer */}
            <div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              style={{
                width: 200,
                height: 20,
                background: "linear-gradient(to bottom, #78716c, #57534e)",
                borderRadius: "50%",
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              }}
            />

            {/* Cup body */}
            <div
              className="absolute bottom-16 left-1/2 -translate-x-1/2"
              style={{
                width: 140,
                height: 110,
                background: "linear-gradient(135deg, #e7e5e4, #d6d3d1)",
                borderRadius: "0 0 30px 30px",
                boxShadow: "inset 0 -5px 15px rgba(0,0,0,0.1), 0 4px 20px rgba(0,0,0,0.2)",
                position: "relative",
              }}
            >
              {/* Coffee surface */}
              <div
                style={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  right: 8,
                  height: 20,
                  background: "linear-gradient(135deg, #92400e, #78350f)",
                  borderRadius: "50%",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.3)",
                }}
              />
              {/* Cup handle */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  [isAr ? "left" : "right"]: -24,
                  width: 24,
                  height: 50,
                  border: "6px solid #d6d3d1",
                  borderLeft: isAr ? "none" : undefined,
                  borderRight: isAr ? undefined : "none",
                  borderRadius: isAr ? "12px 0 0 12px" : "0 12px 12px 0",
                }}
              />
            </div>

            {/* Cup rim */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                bottom: 126,
                width: 150,
                height: 14,
                background: "linear-gradient(to bottom, #f5f5f4, #e7e5e4)",
                borderRadius: "6px 6px 0 0",
              }}
            />

            {/* Steam wisps that morph into creative shapes */}
            {/* Steam 1 — morphs into a lightbulb shape */}
            <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: 150 }}>
              <div style={{ animation: "steam-morph-1 4s ease-in-out infinite" }}>
                <div style={{ width: 4, height: 60, background: "linear-gradient(to top, rgba(245,158,11,0.2), rgba(245,158,11,0.05), transparent)", borderRadius: 4, filter: "blur(3px)" }} />
              </div>
            </div>

            {/* Steam 2 */}
            <div className="absolute" style={{ left: "40%", bottom: 155 }}>
              <div style={{ animation: "steam-morph-2 5s ease-in-out infinite 0.8s" }}>
                <div style={{ width: 3, height: 80, background: "linear-gradient(to top, rgba(217,119,6,0.15), rgba(217,119,6,0.03), transparent)", borderRadius: 4, filter: "blur(4px)" }} />
              </div>
            </div>

            {/* Steam 3 */}
            <div className="absolute" style={{ left: "58%", bottom: 148 }}>
              <div style={{ animation: "steam-morph-3 4.5s ease-in-out infinite 1.5s" }}>
                <div style={{ width: 3, height: 50, background: "linear-gradient(to top, rgba(245,158,11,0.18), rgba(245,158,11,0.04), transparent)", borderRadius: 4, filter: "blur(3px)" }} />
              </div>
            </div>

            {/* Floating creative icons (CSS shapes) */}
            {/* Lightbulb */}
            <div className="absolute" style={{ top: 30, left: "55%", animation: "idea-float 6s ease-in-out infinite" }}>
              <div style={{ width: 24, height: 24, background: "rgba(251,191,36,0.2)", borderRadius: "50% 50% 40% 40%", border: "2px solid rgba(251,191,36,0.4)", position: "relative" }}>
                <div style={{ position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)", width: 10, height: 6, border: "2px solid rgba(251,191,36,0.3)", borderTop: "none", borderRadius: "0 0 3px 3px" }} />
              </div>
            </div>

            {/* Pencil */}
            <div className="absolute" style={{ top: 60, left: "30%", animation: "idea-float 7s ease-in-out infinite 1s" }}>
              <div style={{ width: 6, height: 30, background: "rgba(234,179,8,0.3)", borderRadius: "2px 2px 0 0", transform: "rotate(30deg)", position: "relative" }}>
                <div style={{ position: "absolute", bottom: -6, left: 0, width: 0, height: 0, borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderTop: "6px solid rgba(234,179,8,0.3)" }} />
              </div>
            </div>

            {/* Star */}
            <div className="absolute" style={{ top: 20, left: "38%", animation: "idea-float 5s ease-in-out infinite 2s" }}>
              <div style={{ width: 16, height: 16, background: "rgba(251,191,36,0.25)", clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
            </div>

            {/* Code bracket */}
            <div className="absolute" style={{ top: 50, right: "18%", animation: "idea-float 8s ease-in-out infinite 0.5s" }}>
              <span style={{ color: "rgba(251,191,36,0.4)", fontSize: 20, fontFamily: "monospace", fontWeight: "bold" }}>&lt;/&gt;</span>
            </div>

            {/* Paint palette dot */}
            <div className="absolute" style={{ top: 80, left: "20%", animation: "idea-float 6.5s ease-in-out infinite 1.5s" }}>
              <div style={{ width: 14, height: 14, background: "rgba(249,115,22,0.25)", borderRadius: "50%", border: "2px solid rgba(249,115,22,0.3)" }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes steam-morph-1 {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: translateY(-60px) scaleX(1.5) translateX(5px); opacity: 0.4; }
          80% { opacity: 0.1; }
          100% { transform: translateY(-120px) scaleX(0.5) translateX(-3px); opacity: 0; }
        }
        @keyframes steam-morph-2 {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          15% { opacity: 0.7; }
          50% { transform: translateY(-80px) scaleX(2) translateX(-8px); opacity: 0.3; }
          100% { transform: translateY(-150px) scaleX(0.3) translateX(4px); opacity: 0; }
        }
        @keyframes steam-morph-3 {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          25% { opacity: 0.6; }
          60% { transform: translateY(-50px) scaleX(1.8) translateX(6px); opacity: 0.25; }
          100% { transform: translateY(-100px) scaleX(0.4) translateX(-5px); opacity: 0; }
        }
        @keyframes idea-float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
          25% { transform: translateY(-15px) rotate(5deg); opacity: 0.8; }
          50% { transform: translateY(-8px) rotate(-3deg); opacity: 0.6; }
          75% { transform: translateY(-20px) rotate(3deg); opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}
