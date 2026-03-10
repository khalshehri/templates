"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "GenoMed Center",
    tagline: "Precision Medicine, Personalized Care",
    description:
      "Unlocking the blueprint of your health through advanced genetic analysis. Our genomic medicine approach tailors treatment to your unique DNA for better outcomes.",
    cta: "Start Your Journey",
    secondary: "Learn More",
  },
  ar: {
    name: "مركز جينوميد",
    tagline: "طب دقيق، رعاية شخصية",
    description:
      "نكشف مخطط صحتك من خلال التحليل الجيني المتقدم. نهجنا في الطب الجينومي يُصمّم العلاج وفقًا لحمضك النووي الفريد لنتائج أفضل.",
    cta: "ابدأ رحلتك",
    secondary: "اعرف المزيد",
  },
};

export function ClinicDna({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const helixNodes = Array.from({ length: 20 }, (_, i) => {
    const y = (i / 20) * 100;
    const phase = (i / 20) * Math.PI * 4;
    const x1 = 50 + Math.sin(phase) * 25;
    const x2 = 50 - Math.sin(phase) * 25;
    return { y, x1, x2, i };
  });

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #030d1a 0%, #061825 40%, #0a1e30 100%)" }}
    >
      {/* DNA Helix - Left side */}
      <div className="absolute left-[10%] top-0 bottom-0 w-[200px] pointer-events-none dna-helix-container">
        <svg width="200" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full">
          {helixNodes.map(({ y, x1, x2, i }) => (
            <g key={i}>
              {/* Connecting bar */}
              <line
                x1={x1} y1={y} x2={x2} y2={y}
                stroke="rgba(20,184,166,0.15)"
                strokeWidth="0.3"
              />
              {/* Node 1 */}
              <circle cx={x1} cy={y} r="0.8" fill="rgba(45,212,191,0.7)" className="dna-node" style={{ animationDelay: `${i * 0.15}s` }} />
              {/* Node 2 */}
              <circle cx={x2} cy={y} r="0.8" fill="rgba(56,189,248,0.7)" className="dna-node" style={{ animationDelay: `${i * 0.15 + 0.5}s` }} />
            </g>
          ))}
          {/* Strand 1 */}
          <path
            d={helixNodes.map(({ x1, y }, idx) => `${idx === 0 ? "M" : "L"}${x1},${y}`).join(" ")}
            fill="none" stroke="rgba(45,212,191,0.3)" strokeWidth="0.5"
          />
          {/* Strand 2 */}
          <path
            d={helixNodes.map(({ x2, y }, idx) => `${idx === 0 ? "M" : "L"}${x2},${y}`).join(" ")}
            fill="none" stroke="rgba(56,189,248,0.3)" strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* DNA Helix - Right side (mirrored) */}
      <div className="absolute right-[10%] top-0 bottom-0 w-[200px] pointer-events-none dna-helix-container" style={{ animationDelay: "2s" }}>
        <svg width="200" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full" style={{ transform: "scaleX(-1)" }}>
          {helixNodes.map(({ y, x1, x2, i }) => (
            <g key={i}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(20,184,166,0.1)" strokeWidth="0.3" />
              <circle cx={x1} cy={y} r="0.6" fill="rgba(45,212,191,0.4)" className="dna-node" style={{ animationDelay: `${i * 0.15 + 1}s` }} />
              <circle cx={x2} cy={y} r="0.6" fill="rgba(56,189,248,0.4)" className="dna-node" style={{ animationDelay: `${i * 0.15 + 1.5}s` }} />
            </g>
          ))}
          <path d={helixNodes.map(({ x1, y }, idx) => `${idx === 0 ? "M" : "L"}${x1},${y}`).join(" ")} fill="none" stroke="rgba(45,212,191,0.2)" strokeWidth="0.4" />
          <path d={helixNodes.map(({ x2, y }, idx) => `${idx === 0 ? "M" : "L"}${x2},${y}`).join(" ")} fill="none" stroke="rgba(56,189,248,0.2)" strokeWidth="0.4" />
        </svg>
      </div>

      {/* Floating genetic particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: "30%", top: "20%", size: 3, color: "rgba(45,212,191,0.3)", delay: 0, dur: 6 },
          { left: "65%", top: "30%", size: 4, color: "rgba(56,189,248,0.25)", delay: 1, dur: 8 },
          { left: "45%", top: "70%", size: 3, color: "rgba(45,212,191,0.2)", delay: 2, dur: 7 },
          { left: "55%", top: "15%", size: 5, color: "rgba(56,189,248,0.2)", delay: 0.5, dur: 9 },
          { left: "35%", top: "85%", size: 3, color: "rgba(45,212,191,0.25)", delay: 3, dur: 6.5 },
          { left: "70%", top: "60%", size: 4, color: "rgba(56,189,248,0.15)", delay: 1.5, dur: 10 },
          { left: "25%", top: "50%", size: 2, color: "rgba(45,212,191,0.3)", delay: 4, dur: 7.5 },
          { left: "80%", top: "45%", size: 3, color: "rgba(56,189,248,0.2)", delay: 2.5, dur: 8.5 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full gene-particle"
            style={{
              left: p.left, top: p.top,
              width: p.size, height: p.size,
              background: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      {/* Center glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className={`relative z-10 px-6 max-w-3xl mx-auto ${isAr ? "text-right" : "text-center"}`}>
        <p
          className="text-sm tracking-[0.25em] uppercase mb-4 font-medium"
          style={{ color: "#38bdf8", letterSpacing: isAr ? "0.1em" : "0.25em" }}
        >
          {t.tagline}
        </p>

        <h1
          className="font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            background: "linear-gradient(135deg, #e0fffe, #7dd3fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t.name}
        </h1>

        <p
          className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed"
          style={{ color: "rgba(186,230,253,0.6)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : "justify-center"}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #14b8a6, #0ea5e9)",
              color: "#021a2a",
              boxShadow: "0 0 30px rgba(20,184,166,0.3), 0 4px 15px rgba(0,0,0,0.3)",
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
              border: "1px solid rgba(56,189,248,0.3)",
              color: "#7dd3fc",
              background: "rgba(56,189,248,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .dna-helix-container {
          animation: dna-scroll 8s linear infinite;
        }
        .dna-node {
          animation: node-glow 2s ease-in-out infinite;
        }
        .gene-particle {
          animation: particle-drift 6s ease-in-out infinite;
        }
        @keyframes dna-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50px); }
        }
        @keyframes node-glow {
          0%, 100% { opacity: 0.4; r: 0.6; }
          50% { opacity: 1; r: 1.2; }
        }
        @keyframes particle-drift {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(10px, -15px); opacity: 0.7; }
          50% { transform: translate(-5px, -25px); opacity: 0.5; }
          75% { transform: translate(8px, -10px); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
