"use client";

/**
 * Photo Aperture -- Photography Hero Template
 *
 * Aperture blades iris opening animation, content revealed inside.
 * Camera lens aesthetic with blade segments forming an iris.
 *
 * @category Photography
 * @palette rose (#E11D48), silver (#C0C0C0), dark (#0A0A0A)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "f/1.4",
    heading: "See the World Through My Lens",
    subheading:
      "Wide open aperture, razor-sharp focus. Capturing the beauty that exists in every moment, every angle, every frame.",
    cta: "Open the Lens",
    secondary: "Portfolio",
    specs: ["50mm", "f/1.4", "1/2000s", "ISO 100"],
  },
  ar: {
    badge: "f/1.4",
    heading: "شاهد العالم عبر عدستي",
    subheading:
      "فتحة عدسة واسعة، تركيز حاد. التقاط الجمال الموجود في كل لحظة، كل زاوية، كل إطار.",
    cta: "افتح العدسة",
    secondary: "الأعمال",
    specs: ["50mm", "f/1.4", "1/2000s", "ISO 100"],
  },
};

export function PhotoAperture({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  const bladeCount = 8;
  const blades = Array.from({ length: bladeCount }, (_, i) => ({
    angle: (i * 360) / bladeCount,
  }));

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Outer lens ring */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "min(90vw, 700px)",
          height: "min(90vw, 700px)",
          border: "3px solid rgba(192,192,192,0.15)",
          boxShadow: "0 0 60px rgba(225,29,72,0.05), inset 0 0 60px rgba(0,0,0,0.5)",
        }}
      />

      {/* Second ring */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "min(80vw, 600px)",
          height: "min(80vw, 600px)",
          border: "1px solid rgba(192,192,192,0.08)",
        }}
      />

      {/* Aperture blades */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "min(75vw, 560px)",
          height: "min(75vw, 560px)",
        }}
      >
        {blades.map((blade, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              transform: `rotate(${blade.angle}deg)`,
            }}
          >
            <div
              className="absolute"
              style={{
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "55%",
                height: "35%",
                background: "linear-gradient(180deg, rgba(30,30,30,0.95) 0%, rgba(20,20,20,0.8) 100%)",
                borderRadius: "0 0 50% 50%",
                transformOrigin: "center bottom",
                boxShadow: "inset 0 -2px 10px rgba(192,192,192,0.05)",
                animation: `apertureOpen 4s ease-in-out ${i * 0.1}s infinite alternate`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Lens flare ring */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "min(40vw, 300px)",
          height: "min(40vw, 300px)",
          border: "1px solid rgba(225,29,72,0.1)",
          boxShadow: "0 0 30px rgba(225,29,72,0.08), inset 0 0 30px rgba(225,29,72,0.05)",
        }}
      />

      {/* Content in center */}
      <div className="relative z-10 max-w-lg mx-auto px-8 text-center">
        <div
          className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider"
          style={{
            backgroundColor: "rgba(225,29,72,0.1)",
            color: "#FB7185",
            border: "1px solid rgba(225,29,72,0.2)",
          }}
        >
          {t.badge}
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{
            color: "#FFF1F2",
            textShadow: "0 0 40px rgba(0,0,0,0.8)",
          }}
        >
          {t.heading}
        </h1>

        <p
          className="text-base leading-relaxed mb-6 max-w-sm mx-auto"
          style={{ color: "rgba(255,241,242,0.5)" }}
        >
          {t.subheading}
        </p>

        {/* Camera specs */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {t.specs.map((spec, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-2 py-1 rounded"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "rgba(192,192,192,0.5)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            className="group flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#E11D48",
              boxShadow: "0 4px 20px rgba(225,29,72,0.4)",
            }}
          >
            {t.cta}
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
            />
          </button>
          <button
            className="px-7 py-3 rounded-full text-sm font-semibold transition-colors"
            style={{ color: "#FB7185", border: "1px solid rgba(225,29,72,0.3)" }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      {/* Lens markings around outer ring */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "min(92vw, 720px)",
          height: "min(92vw, 720px)",
        }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <div
            key={angle}
            className="absolute left-1/2 top-0"
            style={{
              transform: `rotate(${angle}deg)`,
              transformOrigin: "0 50%",
              width: "50%",
              height: "1px",
            }}
          >
            <div
              className="absolute right-0 w-3 h-[1px]"
              style={{ backgroundColor: "rgba(192,192,192,0.15)" }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes apertureOpen {
          0% { transform: translateX(-50%) scaleY(1); }
          100% { transform: translateX(-50%) scaleY(0.7); }
        }
      `}</style>
    </section>
  );
}
