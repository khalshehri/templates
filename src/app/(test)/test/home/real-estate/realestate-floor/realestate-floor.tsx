"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Designed for Living",
    title: "Every Space Tells a Story",
    description: "From blueprint to reality, we craft homes with precision and passion. Explore floor plans that transform square meters into life's greatest moments.",
    cta: "Browse Floor Plans",
    secondary: "Book a Consultation",
  },
  ar: {
    badge: "مصمم للحياة",
    title: "كل مساحة تروي قصة",
    description: "من المخطط إلى الواقع، نصنع منازل بدقة وشغف. استكشف مخططات تحوّل الأمتار المربعة إلى أعظم لحظات الحياة.",
    cta: "تصفح المخططات",
    secondary: "احجز استشارة",
  },
};

export function RealestateFloor({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#0f0e0d" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(217,119,6,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(217,119,6,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated floor plan SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 600 400" width="700" height="470" className="opacity-30">
          {/* Outer walls */}
          <rect x="50" y="50" width="500" height="300" fill="none" stroke="#d97706" strokeWidth="3" className="draw-line" strokeDasharray="1600" strokeDashoffset="1600" />

          {/* Room dividers */}
          <line x1="250" y1="50" x2="250" y2="220" stroke="#d97706" strokeWidth="2" className="draw-line" strokeDasharray="170" strokeDashoffset="170" style={{ animationDelay: "1s" }} />
          <line x1="250" y1="220" x2="550" y2="220" stroke="#d97706" strokeWidth="2" className="draw-line" strokeDasharray="300" strokeDashoffset="300" style={{ animationDelay: "1.3s" }} />
          <line x1="400" y1="220" x2="400" y2="350" stroke="#d97706" strokeWidth="2" className="draw-line" strokeDasharray="130" strokeDashoffset="130" style={{ animationDelay: "1.6s" }} />
          <line x1="50" y1="200" x2="250" y2="200" stroke="#d97706" strokeWidth="2" className="draw-line" strokeDasharray="200" strokeDashoffset="200" style={{ animationDelay: "1.9s" }} />
          <line x1="150" y1="200" x2="150" y2="350" stroke="#d97706" strokeWidth="2" className="draw-line" strokeDasharray="150" strokeDashoffset="150" style={{ animationDelay: "2.2s" }} />

          {/* Door arcs */}
          <path d="M 250 130 Q 280 130 280 160" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" className="draw-line" strokeDashoffset="50" style={{ animationDelay: "2.5s" }} />
          <path d="M 320 220 Q 320 250 350 250" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" className="draw-line" strokeDashoffset="50" style={{ animationDelay: "2.7s" }} />
          <path d="M 150 270 Q 180 270 180 300" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" className="draw-line" strokeDashoffset="50" style={{ animationDelay: "2.9s" }} />

          {/* Room labels */}
          <text x="140" y="135" fill="#d97706" fontSize="12" opacity="0.5" className="label-fade" style={{ animationDelay: "3s" }}>Living Room</text>
          <text x="370" y="145" fill="#d97706" fontSize="12" opacity="0.5" className="label-fade" style={{ animationDelay: "3.2s" }}>Master Bed</text>
          <text x="85" y="280" fill="#d97706" fontSize="10" opacity="0.5" className="label-fade" style={{ animationDelay: "3.4s" }}>Bath</text>
          <text x="180" y="280" fill="#d97706" fontSize="11" opacity="0.5" className="label-fade" style={{ animationDelay: "3.6s" }}>Kitchen</text>
          <text x="440" y="290" fill="#d97706" fontSize="11" opacity="0.5" className="label-fade" style={{ animationDelay: "3.8s" }}>Bedroom 2</text>

          {/* Dimension lines */}
          <line x1="50" y1="30" x2="550" y2="30" stroke="#78716c" strokeWidth="0.5" className="draw-line" strokeDasharray="500" strokeDashoffset="500" style={{ animationDelay: "3s" }} />
          <text x="280" y="25" fill="#78716c" fontSize="9" textAnchor="middle" className="label-fade" style={{ animationDelay: "3.5s" }}>15.0m</text>
          <line x1="570" y1="50" x2="570" y2="350" stroke="#78716c" strokeWidth="0.5" className="draw-line" strokeDasharray="300" strokeDashoffset="300" style={{ animationDelay: "3.2s" }} />
          <text x="585" y="205" fill="#78716c" fontSize="9" className="label-fade" style={{ animationDelay: "3.7s" }}>9.0m</text>
        </svg>
      </div>

      {/* Content */}
      <div className={`relative z-10 px-6 max-w-3xl mx-auto text-center`}>
        <p
          className="text-sm tracking-widest uppercase mb-4 font-medium"
          style={{ color: "#f59e0b", letterSpacing: isAr ? "0.1em" : "0.25em" }}
        >
          {t.badge}
        </p>

        <h1
          className="font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#fef3c7",
            textShadow: "0 0 40px rgba(251,191,36,0.2)",
          }}
        >
          {t.title}
        </h1>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed" style={{ color: "rgba(254,243,199,0.6)" }}>
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              color: "#1c1917",
              boxShadow: "0 0 30px rgba(245,158,11,0.3)",
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
            className="px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{ border: "1px solid rgba(245,158,11,0.4)", color: "#fbbf24", background: "rgba(245,158,11,0.08)" }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .draw-line {
          animation: draw 2.5s ease-out forwards;
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        .label-fade {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          to { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
