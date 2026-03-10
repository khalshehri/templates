/**
 * LawColumn — Law Firm hero template
 *
 * Classical Greek/Roman column with justice symbolism.
 * Marble textures, deep navy, gold highlights.
 *
 * @module law-column
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Pillars of Justice",
    name: "Corinthian Legal Partners",
    tagline: "Built on Principles. Standing on Precedent.",
    description:
      "Like the pillars that uphold the great halls of justice, our firm stands unwavering in its commitment to defending your rights with strength and honor.",
    cta: "Request Consultation",
    secondary: "View Our Record",
  },
  ar: {
    badge: "أركان العدالة",
    name: "شركاء كورنثيان القانونيون",
    tagline: "مبنيّون على المبادئ. ثابتون على السوابق.",
    description:
      "كالأعمدة التي تحمل قاعات العدالة العظيمة، يقف مكتبنا راسخاً في التزامه بالدفاع عن حقوقك بقوة وشرف.",
    cta: "طلب استشارة",
    secondary: "اطّلع على سجلّنا",
  },
};

export function LawColumn({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #0a1020 0%, #0e1832 50%, #0a1020 100%)" }}
    >
      {/* Columns — left and right */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left column */}
        <div className="absolute left-[12%] top-0 bottom-0 flex flex-col items-center" style={{ width: 60, opacity: 0.25 }}>
          {/* Capital (top) */}
          <div style={{ width: 70, height: 20, background: "linear-gradient(to bottom, #d4c9b0, #a89880)", borderRadius: "4px 4px 0 0" }} />
          <div style={{ width: 60, height: 8, background: "linear-gradient(to bottom, #c4b9a0, #a89880)" }} />
          {/* Flutes (column body) */}
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to right, #8a8070, #c4b9a0, #d4c9b0, #c4b9a0, #8a8070)",
              backgroundSize: "12px 100%",
            }} />
            {/* Vertical flute lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="absolute top-0 bottom-0" style={{
                left: `${(i + 1) * 16.6}%`,
                width: 1,
                background: "rgba(0,0,0,0.15)",
              }} />
            ))}
          </div>
          {/* Base */}
          <div style={{ width: 65, height: 10, background: "linear-gradient(to bottom, #a89880, #8a8070)" }} />
          <div style={{ width: 75, height: 12, background: "linear-gradient(to bottom, #8a8070, #6a6050)", borderRadius: "0 0 4px 4px" }} />
        </div>

        {/* Right column */}
        <div className="absolute right-[12%] top-0 bottom-0 flex flex-col items-center" style={{ width: 60, opacity: 0.25 }}>
          <div style={{ width: 70, height: 20, background: "linear-gradient(to bottom, #d4c9b0, #a89880)", borderRadius: "4px 4px 0 0" }} />
          <div style={{ width: 60, height: 8, background: "linear-gradient(to bottom, #c4b9a0, #a89880)" }} />
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to right, #8a8070, #c4b9a0, #d4c9b0, #c4b9a0, #8a8070)",
              backgroundSize: "12px 100%",
            }} />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="absolute top-0 bottom-0" style={{
                left: `${(i + 1) * 16.6}%`,
                width: 1,
                background: "rgba(0,0,0,0.15)",
              }} />
            ))}
          </div>
          <div style={{ width: 65, height: 10, background: "linear-gradient(to bottom, #a89880, #8a8070)" }} />
          <div style={{ width: 75, height: 12, background: "linear-gradient(to bottom, #8a8070, #6a6050)", borderRadius: "0 0 4px 4px" }} />
        </div>

        {/* Center decorative column (subtle, behind content) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[10%] bottom-[10%] flex flex-col items-center" style={{ width: 50, opacity: 0.08 }}>
          <div style={{ width: 60, height: 16, background: "#d4c9b0", borderRadius: "4px 4px 0 0" }} />
          <div className="flex-1 w-full" style={{
            background: "linear-gradient(to right, #8a8070, #d4c9b0, #8a8070)",
          }} />
          <div style={{ width: 60, height: 14, background: "#8a8070", borderRadius: "0 0 4px 4px" }} />
        </div>
      </div>

      {/* Pediment triangle at top */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 0,
          height: 0,
          borderLeft: "120px solid transparent",
          borderRight: "120px solid transparent",
          borderBottom: "40px solid rgba(180,140,60,0.08)",
        }}
      />

      {/* Gold light rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[15, 35, 55, 75].map((left, i) => (
          <div
            key={i}
            className="absolute top-0"
            style={{
              left: `${left}%`,
              width: 1,
              height: "100%",
              background: "linear-gradient(to bottom, rgba(180,140,60,0.06), transparent 40%, transparent 60%, rgba(180,140,60,0.04))",
              animation: `ray-pulse ${5 + i}s ease-in-out ${i * 0.5}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p
          className="text-sm tracking-[0.3em] uppercase mb-5 font-medium"
          style={{ color: "#b48c3c", letterSpacing: isAr ? "0.1em" : "0.3em" }}
        >
          {t.badge}
        </p>

        <h1
          className="font-bold mb-4 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#f5f0e8",
            textShadow: "0 0 30px rgba(180,140,60,0.1)",
          }}
        >
          {t.name}
        </h1>

        <p className="text-xl md:text-2xl mb-3 font-semibold" style={{ color: "#b48c3c" }}>
          {t.tagline}
        </p>

        <p className="text-lg mb-10 mx-auto max-w-xl leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #b48c3c, #8a6a2e)",
              color: "#0a1020",
              boxShadow: "0 0 25px rgba(180,140,60,0.2)",
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
            className="px-8 py-3.5 rounded font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(180,140,60,0.35)",
              color: "#b48c3c",
              background: "rgba(180,140,60,0.05)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes ray-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
