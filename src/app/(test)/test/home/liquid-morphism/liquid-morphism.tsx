"use client";

/**
 * Liquid Morphism Hero
 * Organic flowing blobs that morph and merge, with text that
 * feels like it's floating on liquid. Glassmorphism cards
 * sit inside the fluid. Vivid purples + magentas + teals.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: ["We Don't", "Follow Trends.", "We Create Them."],
    sub: "A digital studio that bends reality. We craft experiences that flow, morph, and leave lasting impressions.",
    cta: "Start Your Journey",
    cta2: "See Our DNA",
    labels: ["Fluid Design", "Motion First", "Zero Boundaries"],
  },
  ar: {
    heading: ["لا نتبع", "الاتجاهات.", "نحن نصنعها."],
    sub: "استوديو رقمي يُعيد تشكيل الواقع. نصنع تجارب تتدفق وتتحول وتترك أثراً دائماً.",
    cta: "ابدأ رحلتك",
    cta2: "اكتشف حمضنا النووي",
    labels: ["تصميم سائل", "الحركة أولاً", "بلا حدود"],
  },
};

export function LiquidMorphism({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes blob1 {
          0%, 100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; transform: translate(0, 0) rotate(0deg); }
          25% { border-radius: 70% 30% 50% 50% / 30% 62% 38% 70%; transform: translate(30px, -50px) rotate(90deg); }
          50% { border-radius: 30% 70% 42% 58% / 60% 40% 60% 40%; transform: translate(-20px, 20px) rotate(180deg); }
          75% { border-radius: 58% 42% 30% 70% / 50% 58% 42% 50%; transform: translate(15px, -30px) rotate(270deg); }
        }
        @keyframes blob2 {
          0%, 100% { border-radius: 50% 50% 38% 62% / 62% 38% 62% 38%; transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { border-radius: 38% 62% 58% 42% / 42% 58% 38% 62%; transform: translate(-40px, 30px) rotate(120deg) scale(1.1); }
          66% { border-radius: 62% 38% 42% 58% / 58% 42% 62% 38%; transform: translate(20px, -40px) rotate(240deg) scale(0.95); }
        }
        @keyframes blob3 {
          0%, 100% { border-radius: 45% 55% 62% 38% / 55% 45% 55% 45%; transform: translate(0, 0) scale(1); }
          50% { border-radius: 55% 45% 38% 62% / 38% 62% 45% 55%; transform: translate(40px, 40px) scale(1.15); }
        }
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(40px) scale(0.95); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes glassFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .blob-animate { will-change: border-radius, transform; }
        .float-in { animation: floatIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .glass-float { animation: glassFloat 6s ease-in-out infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0014]">
        {/* Blob 1 — large magenta */}
        <div
          className="blob-animate absolute w-[500px] h-[500px] opacity-50"
          style={{
            top: "5%", left: "10%",
            background: "linear-gradient(135deg, #d946ef, #c026d3, #a21caf)",
            filter: "blur(80px)",
            animation: "blob1 18s ease-in-out infinite",
          }}
        />

        {/* Blob 2 — teal/cyan */}
        <div
          className="blob-animate absolute w-[450px] h-[450px] opacity-40"
          style={{
            top: "30%", right: "5%",
            background: "linear-gradient(135deg, #06b6d4, #0891b2, #2dd4bf)",
            filter: "blur(90px)",
            animation: "blob2 22s ease-in-out infinite",
          }}
        />

        {/* Blob 3 — violet accent */}
        <div
          className="blob-animate absolute w-[350px] h-[350px] opacity-30"
          style={{
            bottom: "10%", left: "30%",
            background: "linear-gradient(135deg, #7c3aed, #6d28d9, #8b5cf6)",
            filter: "blur(70px)",
            animation: "blob3 15s ease-in-out infinite",
          }}
        />

        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
        }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`grid lg:grid-cols-5 gap-12 items-center`}>
            {/* Text — 3 cols */}
            <div className={`lg:col-span-3 ${isAr ? "lg:order-2 text-right" : ""}`}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
                {t.heading.map((line, i) => (
                  <span
                    key={i}
                    className={`float-in block ${i === 1 ? "bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent" : "text-white"}`}
                    style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                  >
                    {line}
                  </span>
                ))}
              </h1>

              <p
                className="float-in mt-8 text-lg text-white/35 leading-relaxed max-w-lg"
                style={{ animationDelay: "0.65s" }}
              >
                {t.sub}
              </p>

              <div
                className={`float-in mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.8s" }}
              >
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-4 text-sm font-bold text-white rounded-2xl transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(217,70,239,0.4)] ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #d946ef, #7c3aed)" }}
                >
                  {t.cta}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-4 text-sm font-semibold text-white/40 border border-white/10 rounded-2xl hover:bg-white/5 transition-all backdrop-blur">
                  {t.cta2}
                </a>
              </div>
            </div>

            {/* Glass cards — 2 cols */}
            <div className={`lg:col-span-2 flex flex-col gap-4 ${isAr ? "lg:order-1" : ""}`}>
              {t.labels.map((label, i) => (
                <div
                  key={i}
                  className="float-in glass-float bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-6 py-5 hover:bg-white/[0.07] transition-colors"
                  style={{
                    animationDelay: `${0.5 + i * 0.15}s`,
                    animationDuration: `${5 + i * 1.5}s`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: ["#d946ef", "#06b6d4", "#7c3aed"][i],
                        boxShadow: `0 0 12px ${["#d946ef", "#06b6d4", "#7c3aed"][i]}`,
                      }}
                    />
                    <span className="text-white/70 font-medium">{label}</span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${75 + i * 10}%`,
                        background: `linear-gradient(90deg, ${["#d946ef", "#06b6d4", "#7c3aed"][i]}, transparent)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
