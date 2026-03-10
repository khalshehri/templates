"use client";

/**
 * Education Lab -- Education Hero Template
 *
 * Science lab with CSS beakers, flasks, and bubbling animations.
 * STEM aesthetic with content alongside lab equipment illustration.
 *
 * @category Education
 * @palette emerald (#059669), lime (#84CC16), cyan (#06B6D4), dark (#0C1A14)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "STEM Excellence",
    heading: "Where Curiosity Meets Discovery",
    subheading:
      "Hands-on experiments, real-world applications, and cutting-edge research. Our labs are where tomorrow's breakthroughs begin.",
    cta: "Start Experimenting",
    secondary: "Lab Catalog",
    labels: ["H₂O", "NaCl", "CO₂", "DNA"],
  },
  ar: {
    badge: "تميّز العلوم والتقنية",
    heading: "حيث يلتقي الفضول بالاكتشاف",
    subheading:
      "تجارب عملية، تطبيقات واقعية، وأبحاث متقدمة. مختبراتنا هي حيث تبدأ اختراقات الغد.",
    cta: "ابدأ التجربة",
    secondary: "دليل المختبرات",
    labels: ["H₂O", "NaCl", "CO₂", "DNA"],
  },
};

const bubbles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: 10 + (i * 31) % 80,
  size: 4 + (i % 5) * 2,
  delay: (i * 0.4) % 5,
  duration: 2 + (i % 3),
}));

export function EducationLab({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0C1A14" }}
    >
      {/* Lab grid paper background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,150,105,1) 1px, transparent 1px), linear-gradient(90deg, rgba(5,150,105,1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
        {/* Lab equipment illustration */}
        <div className="relative flex-shrink-0 flex items-end gap-6" style={{ height: "400px" }}>
          {/* Erlenmeyer flask */}
          <div className="relative" style={{ width: "80px" }}>
            <div
              className="absolute bottom-0 w-full"
              style={{
                height: "180px",
                clipPath: "polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)",
                background: "linear-gradient(180deg, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0.25) 100%)",
                border: "2px solid rgba(6,182,212,0.3)",
                borderRadius: "0 0 8px 8px",
              }}
            >
              {/* Liquid */}
              <div
                className="absolute bottom-0 w-full"
                style={{
                  height: "60%",
                  background: "linear-gradient(180deg, rgba(6,182,212,0.3) 0%, rgba(6,182,212,0.5) 100%)",
                  borderRadius: "0 0 6px 6px",
                  animation: "labLiquid 3s ease-in-out infinite",
                }}
              />
            </div>
            {/* Neck */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[180px]"
              style={{
                width: "20px",
                height: "40px",
                border: "2px solid rgba(6,182,212,0.3)",
                borderBottom: "none",
                background: "rgba(6,182,212,0.05)",
              }}
            />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono" style={{ color: "rgba(6,182,212,0.6)" }}>
              {t.labels[0]}
            </span>
          </div>

          {/* Beaker */}
          <div className="relative" style={{ width: "70px" }}>
            <div
              className="absolute bottom-0 w-full"
              style={{
                height: "140px",
                border: "2px solid rgba(132,204,22,0.3)",
                borderRadius: "0 0 4px 4px",
                background: "rgba(132,204,22,0.05)",
              }}
            >
              {/* Measurement lines */}
              {[25, 50, 75].map((pct) => (
                <div
                  key={pct}
                  className="absolute w-3"
                  style={{
                    bottom: `${pct}%`,
                    [isRTL ? "right" : "left"]: 0,
                    height: "1px",
                    backgroundColor: "rgba(132,204,22,0.3)",
                  }}
                />
              ))}
              {/* Liquid */}
              <div
                className="absolute bottom-0 w-full"
                style={{
                  height: "45%",
                  background: "linear-gradient(180deg, rgba(132,204,22,0.2) 0%, rgba(132,204,22,0.4) 100%)",
                  borderRadius: "0 0 2px 2px",
                }}
              />
            </div>
            {/* Pour spout */}
            <div
              className="absolute bottom-[140px]"
              style={{
                [isRTL ? "left" : "right"]: 0,
                width: "12px",
                height: "10px",
                borderTop: "2px solid rgba(132,204,22,0.3)",
                borderRight: isRTL ? "none" : "2px solid rgba(132,204,22,0.3)",
                borderLeft: isRTL ? "2px solid rgba(132,204,22,0.3)" : "none",
              }}
            />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono" style={{ color: "rgba(132,204,22,0.6)" }}>
              {t.labels[1]}
            </span>
          </div>

          {/* Round bottom flask */}
          <div className="relative" style={{ width: "90px" }}>
            {/* Sphere */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
              style={{
                width: "90px",
                height: "90px",
                border: "2px solid rgba(5,150,105,0.3)",
                background: "radial-gradient(circle at 35% 35%, rgba(5,150,105,0.15) 0%, rgba(5,150,105,0.05) 70%)",
              }}
            >
              {/* Liquid */}
              <div
                className="absolute bottom-0 w-full overflow-hidden rounded-b-full"
                style={{ height: "55%" }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: "linear-gradient(180deg, rgba(5,150,105,0.25) 0%, rgba(5,150,105,0.45) 100%)",
                    animation: "labBubble 4s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
            {/* Neck */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[88px]"
              style={{
                width: "16px",
                height: "50px",
                border: "2px solid rgba(5,150,105,0.3)",
                borderBottom: "none",
                background: "rgba(5,150,105,0.05)",
              }}
            />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono" style={{ color: "rgba(5,150,105,0.6)" }}>
              {t.labels[2]}
            </span>
          </div>

          {/* Test tube */}
          <div className="relative" style={{ width: "30px" }}>
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: "22px",
                height: "120px",
                border: "2px solid rgba(234,179,8,0.3)",
                borderRadius: "0 0 11px 11px",
                background: "rgba(234,179,8,0.05)",
              }}
            >
              <div
                className="absolute bottom-0 w-full overflow-hidden"
                style={{
                  height: "70%",
                  borderRadius: "0 0 9px 9px",
                  background: "linear-gradient(180deg, rgba(234,179,8,0.2) 0%, rgba(234,179,8,0.4) 100%)",
                }}
              />
            </div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono" style={{ color: "rgba(234,179,8,0.6)" }}>
              {t.labels[3]}
            </span>
          </div>

          {/* Bubbling effect from flasks */}
          {bubbles.slice(0, 8).map((b) => (
            <div
              key={b.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${20 + (b.id * 25) % 60}%`,
                bottom: "30%",
                width: `${b.size}px`,
                height: `${b.size}px`,
                border: "1px solid rgba(5,150,105,0.3)",
                animation: `labRise ${b.duration}s ease-out ${b.delay}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Text content */}
        <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
          <div
            className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              backgroundColor: "rgba(5,150,105,0.12)",
              color: "#34D399",
              border: "1px solid rgba(5,150,105,0.25)",
            }}
          >
            {t.badge}
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{ color: "#ECFDF5" }}
          >
            {t.heading}
          </h1>

          <p
            className="text-lg leading-relaxed mb-8 max-w-lg"
            style={{ color: "rgba(167,243,208,0.6)" }}
          >
            {t.subheading}
          </p>

          {/* Molecule decoration */}
          <div className="flex items-center gap-2 mb-8">
            {["#06B6D4", "#84CC16", "#059669", "#EAB308"].map((color, i) => (
              <div key={i} className="flex items-center gap-1">
                <div
                  className="rounded-full"
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: color,
                    opacity: 0.6,
                    boxShadow: `0 0 8px ${color}40`,
                  }}
                />
                {i < 3 && (
                  <div style={{ width: "20px", height: "1px", backgroundColor: "rgba(5,150,105,0.3)" }} />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="group flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #059669, #0D9488)",
                boxShadow: "0 4px 20px rgba(5,150,105,0.3)",
              }}
            >
              {t.cta}
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
              />
            </button>
            <button
              className="px-7 py-3 rounded-lg text-sm font-semibold transition-colors"
              style={{ color: "#34D399", border: "1px solid rgba(52,211,153,0.3)" }}
            >
              {t.secondary}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes labLiquid {
          0%, 100% { height: 60%; }
          50% { height: 65%; }
        }
        @keyframes labBubble {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes labRise {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-120px) scale(0.3); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
