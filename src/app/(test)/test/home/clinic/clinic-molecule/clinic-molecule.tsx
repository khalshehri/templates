"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "MoleCure Labs",
    tagline: "Science at the Molecular Level",
    description:
      "Pioneering pharmaceutical research and clinical diagnostics. We analyze health at the smallest scale to deliver the biggest breakthroughs in treatment.",
    cta: "Explore Research",
    secondary: "Our Lab Services",
  },
  ar: {
    name: "مختبرات موليكيور",
    tagline: "العلم على المستوى الجزيئي",
    description:
      "أبحاث صيدلانية رائدة وتشخيصات سريرية. نحلل الصحة على أصغر مستوى لتقديم أكبر الإنجازات في العلاج.",
    cta: "استكشف الأبحاث",
    secondary: "خدمات المختبر",
  },
};

interface Atom {
  cx: number;
  cy: number;
  r: number;
  color: string;
  delay: number;
}

interface Bond {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export function ClinicMolecule({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const atoms: Atom[] = [
    { cx: 50, cy: 40, r: 8, color: "rgba(20,184,166,0.6)", delay: 0 },
    { cx: 30, cy: 55, r: 6, color: "rgba(56,189,248,0.5)", delay: 0.3 },
    { cx: 70, cy: 55, r: 6, color: "rgba(56,189,248,0.5)", delay: 0.6 },
    { cx: 20, cy: 40, r: 5, color: "rgba(45,212,191,0.4)", delay: 0.9 },
    { cx: 80, cy: 40, r: 5, color: "rgba(45,212,191,0.4)", delay: 1.2 },
    { cx: 50, cy: 70, r: 7, color: "rgba(16,185,129,0.5)", delay: 1.5 },
    { cx: 35, cy: 25, r: 4, color: "rgba(34,211,238,0.4)", delay: 1.8 },
    { cx: 65, cy: 25, r: 4, color: "rgba(34,211,238,0.4)", delay: 2.1 },
  ];

  const bonds: Bond[] = [
    { x1: 50, y1: 40, x2: 30, y2: 55 },
    { x1: 50, y1: 40, x2: 70, y2: 55 },
    { x1: 30, y1: 55, x2: 20, y2: 40 },
    { x1: 70, y1: 55, x2: 80, y2: 40 },
    { x1: 30, y1: 55, x2: 50, y2: 70 },
    { x1: 70, y1: 55, x2: 50, y2: 70 },
    { x1: 50, y1: 40, x2: 35, y2: 25 },
    { x1: 50, y1: 40, x2: 65, y2: 25 },
  ];

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #020e1a 0%, #041825 40%, #061e30 100%)" }}
    >
      {/* Main molecule structure */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg width="600" height="600" viewBox="0 0 100 100" className="molecule-rotate opacity-60">
          {/* Bonds */}
          {bonds.map((b, i) => (
            <line key={`bond-${i}`} x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2}
              stroke="rgba(20,184,166,0.2)" strokeWidth="0.4"
              className="molecule-bond" style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
          {/* Atoms */}
          {atoms.map((a, i) => (
            <g key={`atom-${i}`}>
              <circle cx={a.cx} cy={a.cy} r={a.r * 1.5} fill="none" stroke={a.color.replace(/[\d.]+\)/, "0.1)")}
                strokeWidth="0.3" className="atom-ring" style={{ animationDelay: `${a.delay}s` }}
              />
              <circle cx={a.cx} cy={a.cy} r={a.r / 2} fill={a.color}
                className="atom-core" style={{ animationDelay: `${a.delay}s` }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Smaller floating molecules */}
      {[
        { left: "8%", top: "20%", scale: 0.3, delay: 0 },
        { left: "85%", top: "25%", scale: 0.25, delay: 1.5 },
        { left: "12%", top: "70%", scale: 0.2, delay: 3 },
        { left: "80%", top: "75%", scale: 0.28, delay: 2 },
      ].map((m, i) => (
        <div
          key={i}
          className="absolute pointer-events-none small-molecule"
          style={{ left: m.left, top: m.top, transform: `scale(${m.scale})`, animationDelay: `${m.delay}s` }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <line x1="30" y1="50" x2="70" y2="50" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />
            <line x1="50" y1="30" x2="50" y2="70" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />
            <circle cx="30" cy="50" r="6" fill="rgba(45,212,191,0.3)" />
            <circle cx="70" cy="50" r="6" fill="rgba(56,189,248,0.3)" />
            <circle cx="50" cy="30" r="5" fill="rgba(34,211,238,0.25)" />
            <circle cx="50" cy="70" r="5" fill="rgba(16,185,129,0.3)" />
          </svg>
        </div>
      ))}

      {/* Electron cloud particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => ({
          left: `${10 + Math.random() * 80}%`,
          top: `${10 + Math.random() * 80}%`,
          size: 2 + Math.random() * 3,
          delay: Math.random() * 5,
          dur: 4 + Math.random() * 4,
        })).map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full electron-particle"
            style={{
              left: p.left, top: p.top,
              width: p.size, height: p.size,
              background: `rgba(${i % 2 === 0 ? "20,184,166" : "56,189,248"},0.3)`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 px-6 max-w-3xl mx-auto ${isAr ? "text-right" : "text-center"}`}>
        <p
          className="text-sm tracking-[0.25em] uppercase mb-4 font-medium"
          style={{ color: "#22d3ee", letterSpacing: isAr ? "0.1em" : "0.25em" }}
        >
          {t.tagline}
        </p>

        <h1
          className="font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#e0fffe",
            textShadow: "0 0 50px rgba(20,184,166,0.15)",
          }}
        >
          {t.name}
        </h1>

        <p
          className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed"
          style={{ color: "rgba(186,230,253,0.55)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : "justify-center"}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #14b8a6)",
              color: "#020e1a",
              boxShadow: "0 0 30px rgba(6,182,212,0.3), 0 4px 15px rgba(0,0,0,0.3)",
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
              border: "1px solid rgba(6,182,212,0.3)",
              color: "#22d3ee",
              background: "rgba(6,182,212,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .molecule-rotate {
          animation: mol-rotate 20s linear infinite;
        }
        .molecule-bond {
          animation: bond-pulse 3s ease-in-out infinite;
        }
        .atom-core {
          animation: atom-breathe 2.5s ease-in-out infinite;
        }
        .atom-ring {
          animation: ring-expand 3s ease-in-out infinite;
        }
        .small-molecule {
          animation: small-mol-float 8s ease-in-out infinite;
        }
        .electron-particle {
          animation: electron-drift 5s ease-in-out infinite;
        }
        @keyframes mol-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bond-pulse {
          0%, 100% { opacity: 0.4; stroke-width: 0.4; }
          50% { opacity: 0.8; stroke-width: 0.7; }
        }
        @keyframes atom-breathe {
          0%, 100% { opacity: 0.5; r: inherit; }
          50% { opacity: 1; }
        }
        @keyframes ring-expand {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @keyframes small-mol-float {
          0%, 100% { transform: scale(var(--s, 0.3)) translateY(0) rotate(0deg); }
          50% { transform: scale(var(--s, 0.3)) translateY(-20px) rotate(180deg); }
        }
        @keyframes electron-drift {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          33% { transform: translate(8px, -12px); opacity: 0.6; }
          66% { transform: translate(-6px, 8px); opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
