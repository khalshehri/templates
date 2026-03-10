"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: ["Let Ideas", "Drip Down"],
    sub: "Abstract expressionism meets digital design. We let creativity flow freely and boldly.",
    cta: "Explore Work",
    cta2: "Contact Us",
  },
  ar: {
    heading: ["\u062f\u0639 \u0627\u0644\u0623\u0641\u0643\u0627\u0631", "\u062a\u0646\u0633\u0627\u0628"],
    sub: "\u0627\u0644\u062a\u0639\u0628\u064a\u0631\u064a\u0629 \u0627\u0644\u062a\u062c\u0631\u064a\u062f\u064a\u0629 \u062a\u0644\u062a\u0642\u064a \u0628\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0631\u0642\u0645\u064a. \u0646\u0637\u0644\u0642 \u0627\u0644\u0625\u0628\u062f\u0627\u0639 \u0628\u062d\u0631\u064a\u0629 \u0648\u062c\u0631\u0623\u0629.",
    cta: "\u0627\u0633\u062a\u0643\u0634\u0641 \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    cta2: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
  },
};

const DRIPS = [
  { x: "5%",  color: "#ff2d7b", width: 45, height: "65%", delay: 0, borderRadius: "0 0 50% 50%" },
  { x: "12%", color: "#ffe600", width: 30, height: "45%", delay: 0.2, borderRadius: "0 0 40% 40%" },
  { x: "22%", color: "#7c3aed", width: 55, height: "80%", delay: 0.1, borderRadius: "0 0 45% 45%" },
  { x: "33%", color: "#00e676", width: 35, height: "55%", delay: 0.35, borderRadius: "0 0 50% 50%" },
  { x: "42%", color: "#ff6b00", width: 40, height: "70%", delay: 0.15, borderRadius: "0 0 42% 42%" },
  { x: "53%", color: "#0055ff", width: 50, height: "85%", delay: 0.05, borderRadius: "0 0 48% 48%" },
  { x: "63%", color: "#ff2d7b", width: 28, height: "40%", delay: 0.4, borderRadius: "0 0 50% 50%" },
  { x: "71%", color: "#ffe600", width: 60, height: "75%", delay: 0.12, borderRadius: "0 0 44% 44%" },
  { x: "82%", color: "#00e5ff", width: 38, height: "58%", delay: 0.25, borderRadius: "0 0 46% 46%" },
  { x: "91%", color: "#7c3aed", width: 42, height: "50%", delay: 0.3, borderRadius: "0 0 50% 50%" },
];

const SECONDARY_DRIPS = [
  { x: "8%",  color: "#ff6b00", width: 18, height: "30%", delay: 0.5 },
  { x: "18%", color: "#0055ff", width: 22, height: "35%", delay: 0.55 },
  { x: "38%", color: "#00e676", width: 15, height: "25%", delay: 0.6 },
  { x: "48%", color: "#ff2d7b", width: 20, height: "38%", delay: 0.45 },
  { x: "58%", color: "#ffe600", width: 16, height: "28%", delay: 0.65 },
  { x: "76%", color: "#7c3aed", width: 24, height: "42%", delay: 0.48 },
  { x: "88%", color: "#ff6b00", width: 14, height: "22%", delay: 0.7 },
];

export function CreativeDrip({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes dripFlow {
          0%   { transform: scaleY(0); opacity: 0.7; }
          60%  { opacity: 0.9; }
          80%  { transform: scaleY(1.05); }
          100% { transform: scaleY(1); opacity: 0.75; }
        }
        @keyframes dripBulge {
          0%, 100% { border-radius: 0 0 45% 45%; }
          50%      { border-radius: 0 0 55% 55%; }
        }
        @keyframes dripContentReveal {
          from { opacity: 0; transform: translateY(-30px); filter: blur(8px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes dropletFall {
          0%   { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(80px) scale(0.3); opacity: 0; }
        }
        .drip-main {
          transform-origin: top center;
          animation: dripFlow 1.2s cubic-bezier(0.22, 1, 0.36, 1) both,
                     dripBulge 3s ease-in-out 1.2s infinite;
        }
        .drip-secondary {
          transform-origin: top center;
          animation: dripFlow 1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .drip-reveal {
          animation: dripContentReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .drip-droplet {
          animation: dropletFall 2s ease-in infinite;
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        dir={isAr ? "rtl" : "ltr"}
        style={{ backgroundColor: "#faf8f4" }}
      >
        {/* Paint drips from top */}
        {DRIPS.map((drip, i) => (
          <div
            key={`main-${i}`}
            className="drip-main absolute top-0 pointer-events-none"
            style={{
              left: drip.x,
              width: drip.width,
              height: drip.height,
              backgroundColor: drip.color,
              animationDelay: `${drip.delay}s`,
              borderRadius: drip.borderRadius,
              mixBlendMode: "multiply",
              opacity: 0.7,
            }}
          >
            {/* Droplet at bottom of drip */}
            <div
              className="drip-droplet absolute rounded-full"
              style={{
                bottom: -8,
                left: "50%",
                marginLeft: -4,
                width: 8,
                height: 10,
                backgroundColor: drip.color,
                animationDelay: `${drip.delay + 1.5}s`,
                borderRadius: "50% 50% 50% 50% / 30% 30% 70% 70%",
              }}
            />
          </div>
        ))}

        {/* Secondary thinner drips */}
        {SECONDARY_DRIPS.map((drip, i) => (
          <div
            key={`sec-${i}`}
            className="drip-secondary absolute top-0 pointer-events-none"
            style={{
              left: drip.x,
              width: drip.width,
              height: drip.height,
              backgroundColor: drip.color,
              animationDelay: `${drip.delay}s`,
              borderRadius: "0 0 50% 50%",
              mixBlendMode: "multiply",
              opacity: 0.5,
            }}
          />
        ))}

        {/* Pooling paint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{
          background: "linear-gradient(to top, rgba(255,45,123,0.15), rgba(0,85,255,0.1), transparent)",
        }} />

        {/* Content emerging through drips */}
        <div className="drip-reveal relative z-10 text-center max-w-3xl px-6" style={{ animationDelay: "0.8s" }}>
          {/* Paint splat behind heading */}
          <div className="absolute -inset-8 rounded-[40%] opacity-90 pointer-events-none" style={{
            backgroundColor: "#faf8f4",
            filter: "blur(20px)",
          }} />

          <div className="relative">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight" style={{ color: "#1a1a1a" }}>
              <span className="block">{t.heading[0]}</span>
              <span className="block mt-2" style={{
                background: "linear-gradient(90deg, #ff2d7b, #7c3aed, #0055ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                {t.heading[1]}
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl max-w-lg mx-auto leading-relaxed" style={{ color: "#555" }}>
              {t.sub}
            </p>

            <div className={`mt-10 flex items-center justify-center gap-4 flex-wrap ${isAr ? "flex-row-reverse" : ""}`}>
              <a
                href="#"
                className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-full ${isAr ? "flex-row-reverse" : ""}`}
                style={{ backgroundColor: "#7c3aed", boxShadow: "0 4px 20px rgba(124,58,237,0.4)" }}
              >
                {t.cta}
                <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
              </a>
              <a
                href="#"
                className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-full ${isAr ? "flex-row-reverse" : ""}`}
                style={{ border: "2px solid #1a1a1a", color: "#1a1a1a" }}
              >
                {t.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
