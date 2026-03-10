/**
 * FreelancerDesk — Minimal desk setup hero
 *
 * CSS-illustrated desk with laptop, coffee mug, and plant.
 * Clean, minimal aesthetic with soft warm tones.
 *
 * @module freelancer-desk
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Available for Hire",
    title: "I Design & Build",
    titleAccent: "Digital Experiences",
    description:
      "A freelance designer and developer crafting clean, purposeful digital products. From concept to launch, I bring your vision to life with precision and care.",
    cta: "Start a Project",
    secondary: "View Portfolio",
  },
  ar: {
    badge: "متاح للعمل",
    title: "أصمم وأبني",
    titleAccent: "تجارب رقمية",
    description:
      "مصمم ومطور مستقل أصنع منتجات رقمية نظيفة وهادفة. من الفكرة إلى الإطلاق، أحوّل رؤيتك إلى واقع بدقة وعناية.",
    cta: "ابدأ مشروعك",
    secondary: "عرض الأعمال",
  },
};

export function FreelancerDesk({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center"
      style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 50%, #ecfeff 100%)" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.3,
        }}
      />

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center gap-16 ${isAr ? "lg:flex-row-reverse" : ""}`}>
        {/* Text Content */}
        <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-teal-100 text-teal-700 mb-6 animate-pulse">
            {t.badge}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-2">
            {t.title}
          </h1>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: "#0891b2" }}
          >
            {t.titleAccent}
          </h1>

          <p className="text-lg text-gray-600 max-w-lg mb-10 leading-relaxed">
            {t.description}
          </p>

          <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
            <button className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25">
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
            <button className="px-7 py-3.5 rounded-xl font-semibold text-teal-700 border border-teal-300 hover:bg-teal-50 transition-colors">
              {t.secondary}
            </button>
          </div>
        </div>

        {/* Desk Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative" style={{ width: 400, height: 320 }}>
            {/* Desk surface */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: 380,
                height: 14,
                background: "linear-gradient(90deg, #a3734d, #c4956a, #a3734d)",
                borderRadius: 8,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            />
            {/* Desk legs */}
            <div className="absolute bottom-0 left-[30px]" style={{ width: 8, height: 50, background: "#a3734d", borderRadius: 2, transform: "translateY(50px)" }} />
            <div className="absolute bottom-0 right-[30px]" style={{ width: 8, height: 50, background: "#a3734d", borderRadius: 2, transform: "translateY(50px)" }} />

            {/* Laptop */}
            <div className="absolute" style={{ bottom: 14, left: "50%", transform: "translateX(-50%)" }}>
              {/* Laptop screen */}
              <div
                style={{
                  width: 200,
                  height: 130,
                  background: "linear-gradient(135deg, #1e293b, #334155)",
                  borderRadius: "8px 8px 0 0",
                  border: "3px solid #94a3b8",
                  position: "relative",
                  overflow: "hidden",
                  animation: "laptop-glow 3s ease-in-out infinite",
                }}
              >
                {/* Screen content lines */}
                <div className="p-4 space-y-2">
                  <div style={{ width: "70%", height: 4, background: "#06b6d4", borderRadius: 2, opacity: 0.8 }} />
                  <div style={{ width: "50%", height: 4, background: "#5eead4", borderRadius: 2, opacity: 0.6 }} />
                  <div style={{ width: "80%", height: 4, background: "#06b6d4", borderRadius: 2, opacity: 0.5 }} />
                  <div style={{ width: "40%", height: 4, background: "#5eead4", borderRadius: 2, opacity: 0.7 }} />
                  <div style={{ width: "65%", height: 4, background: "#06b6d4", borderRadius: 2, opacity: 0.4 }} />
                </div>
                {/* Cursor blink */}
                <div
                  className="absolute"
                  style={{
                    top: 40,
                    left: 92,
                    width: 2,
                    height: 12,
                    background: "#06b6d4",
                    animation: "cursor-blink 1s step-end infinite",
                  }}
                />
              </div>
              {/* Laptop base */}
              <div
                style={{
                  width: 220,
                  height: 10,
                  background: "linear-gradient(to bottom, #94a3b8, #cbd5e1)",
                  borderRadius: "0 0 4px 4px",
                  marginLeft: -10,
                }}
              />
            </div>

            {/* Coffee mug */}
            <div className="absolute" style={{ bottom: 14, right: 20 }}>
              <div
                style={{
                  width: 36,
                  height: 40,
                  background: "linear-gradient(135deg, #fefce8, #fef3c7)",
                  borderRadius: "0 0 6px 6px",
                  border: "2px solid #d4d4d8",
                  position: "relative",
                }}
              >
                {/* Handle */}
                <div
                  style={{
                    position: "absolute",
                    right: -12,
                    top: 8,
                    width: 12,
                    height: 20,
                    border: "2px solid #d4d4d8",
                    borderLeft: "none",
                    borderRadius: "0 8px 8px 0",
                  }}
                />
              </div>
              {/* Steam */}
              <div className="absolute -top-6 left-3" style={{ animation: "steam-rise 2s ease-in-out infinite" }}>
                <div style={{ width: 2, height: 16, background: "rgba(148,163,184,0.3)", borderRadius: 4, filter: "blur(1px)" }} />
              </div>
              <div className="absolute -top-8 left-6" style={{ animation: "steam-rise 2.5s ease-in-out infinite 0.5s" }}>
                <div style={{ width: 2, height: 12, background: "rgba(148,163,184,0.2)", borderRadius: 4, filter: "blur(1px)" }} />
              </div>
            </div>

            {/* Plant */}
            <div className="absolute" style={{ bottom: 14, left: 20 }}>
              {/* Pot */}
              <div style={{ width: 40, height: 35, background: "linear-gradient(135deg, #fb923c, #ea580c)", borderRadius: "4px 4px 8px 8px" }} />
              {/* Leaves */}
              <div style={{ position: "absolute", bottom: 30, left: 10, width: 20, height: 30, background: "#10b981", borderRadius: "50% 0 50% 50%", transform: "rotate(-20deg)", animation: "leaf-sway 3s ease-in-out infinite" }} />
              <div style={{ position: "absolute", bottom: 35, left: 18, width: 16, height: 26, background: "#34d399", borderRadius: "50% 50% 0 50%", transform: "rotate(15deg)", animation: "leaf-sway 3.5s ease-in-out infinite 0.3s" }} />
              <div style={{ position: "absolute", bottom: 28, left: 4, width: 14, height: 22, background: "#6ee7b7", borderRadius: "50% 0 50% 50%", transform: "rotate(-40deg)", animation: "leaf-sway 2.8s ease-in-out infinite 0.6s" }} />
            </div>

            {/* Mouse */}
            <div className="absolute" style={{ bottom: 14, right: 90 }}>
              <div style={{ width: 20, height: 32, background: "linear-gradient(to bottom, #e2e8f0, #cbd5e1)", borderRadius: 10 }} />
            </div>

            {/* Floating dots decoration */}
            {[
              { x: -20, y: 80, size: 8, delay: 0, color: "rgba(6,182,212,0.3)" },
              { x: 400, y: 60, size: 6, delay: 1, color: "rgba(20,184,166,0.25)" },
              { x: 380, y: 180, size: 10, delay: 0.5, color: "rgba(6,182,212,0.2)" },
              { x: -10, y: 200, size: 7, delay: 1.5, color: "rgba(20,184,166,0.3)" },
            ].map((d, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: d.x,
                  top: d.y,
                  width: d.size,
                  height: d.size,
                  background: d.color,
                  animation: `float-dot 4s ease-in-out ${d.delay}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes laptop-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6,182,212,0.1); }
          50% { box-shadow: 0 0 40px rgba(6,182,212,0.2); }
        }
        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes steam-rise {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-10px) scale(1.1) translateX(3px); opacity: 0.3; }
          100% { transform: translateY(-20px) scale(0.8); opacity: 0; }
        }
        @keyframes leaf-sway {
          0%, 100% { transform: rotate(var(--tw-rotate, 0deg)); }
          50% { transform: rotate(calc(var(--tw-rotate, 0deg) + 5deg)); }
        }
        @keyframes float-dot {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-12px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
