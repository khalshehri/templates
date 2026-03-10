"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: ["Rip Through", "The Ordinary"],
    sub: "We tear apart conventions to reveal the bold, raw creativity underneath. Your brand deserves to break free.",
    cta: "Explore Work",
    cta2: "Contact Us",
  },
  ar: {
    heading: ["\u0645\u0632\u0651\u0642 \u0627\u0644\u0639\u0627\u062f\u064a", "\u0648\u0627\u0635\u0646\u0639 \u0627\u0644\u0645\u062e\u062a\u0644\u0641"],
    sub: "\u0646\u0645\u0632\u0642 \u0627\u0644\u0642\u0648\u0627\u0644\u0628 \u0627\u0644\u062a\u0642\u0644\u064a\u062f\u064a\u0629 \u0644\u0646\u0643\u0634\u0641 \u0639\u0646 \u0625\u0628\u062f\u0627\u0639 \u062c\u0631\u064a\u0621 \u064a\u0633\u062a\u062d\u0642 \u0623\u0646 \u064a\u064f\u0631\u0649.",
    cta: "\u0627\u0633\u062a\u0643\u0634\u0641 \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    cta2: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
  },
};

export function CreativeTorn({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes tornSlideLeft {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        @keyframes tornSlideRight {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        @keyframes tornFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tornPulse {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(255,45,123,0.3)); }
          50%      { filter: drop-shadow(0 0 40px rgba(255,45,123,0.6)); }
        }
        .torn-left {
          animation: tornSlideLeft 1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .torn-right {
          animation: tornSlideRight 1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .torn-content {
          animation: tornFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both;
        }
        .torn-glow {
          animation: tornPulse 3s ease-in-out infinite;
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        dir={isAr ? "rtl" : "ltr"}
        style={{ backgroundColor: "#0a0a0a" }}
      >
        {/* Left panel - magenta */}
        <div
          className="torn-left absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 52% 0, 48% 12%, 55% 22%, 44% 35%, 53% 45%, 42% 58%, 50% 68%, 43% 78%, 52% 88%, 45% 100%, 0 100%)",
            backgroundColor: "#ff2d7b",
          }}
        >
          {/* Texture lines */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)",
          }} />
        </div>

        {/* Right panel - cyan */}
        <div
          className="torn-right absolute inset-0"
          style={{
            clipPath: "polygon(55% 0, 100% 0, 100% 100%, 48% 100%, 55% 88%, 46% 78%, 53% 68%, 45% 58%, 56% 45%, 47% 35%, 58% 22%, 51% 12%)",
            backgroundColor: "#00e5ff",
          }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 11px)",
          }} />
        </div>

        {/* Torn edge highlight - center glow line */}
        <div
          className="torn-glow absolute top-0 bottom-0 pointer-events-none"
          style={{
            left: "46%",
            width: "8%",
            background: "linear-gradient(180deg, rgba(255,45,123,0.2) 0%, rgba(255,255,255,0.4) 30%, rgba(0,229,255,0.3) 60%, rgba(255,255,255,0.4) 80%, rgba(255,45,123,0.2) 100%)",
            filter: "blur(8px)",
          }}
        />

        {/* SVG torn paper edge decoration */}
        <svg className="absolute top-0 bottom-0 pointer-events-none" style={{ left: "44%", width: "12%", height: "100%" }} viewBox="0 0 100 1000" preserveAspectRatio="none">
          <path
            d="M50,0 L48,30 L55,60 L42,100 L58,140 L44,180 L52,220 L40,260 L56,300 L43,340 L54,380 L41,420 L53,460 L45,500 L57,540 L42,580 L55,620 L44,660 L50,700 L43,740 L56,780 L45,820 L52,860 L40,900 L55,940 L48,970 L50,1000"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,6"
          />
        </svg>

        {/* Small torn paper fragments */}
        {[
          { x: "38%", y: "15%", w: 40, h: 25, rot: 25, bg: "#ff2d7b", delay: "0.8s" },
          { x: "58%", y: "25%", w: 35, h: 20, rot: -15, bg: "#00e5ff", delay: "0.9s" },
          { x: "35%", y: "70%", w: 30, h: 22, rot: 40, bg: "#ff2d7b", delay: "1s" },
          { x: "60%", y: "80%", w: 38, h: 18, rot: -30, bg: "#00e5ff", delay: "1.1s" },
        ].map((frag, i) => (
          <div
            key={i}
            className="torn-content absolute pointer-events-none"
            style={{
              left: frag.x,
              top: frag.y,
              width: frag.w,
              height: frag.h,
              backgroundColor: frag.bg,
              transform: `rotate(${frag.rot}deg)`,
              clipPath: "polygon(5% 0%, 95% 8%, 100% 90%, 3% 100%)",
              opacity: 0.4,
              animationDelay: frag.delay,
            }}
          />
        ))}

        {/* Content at tear intersection */}
        <div className="torn-content relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            <span className="block" style={{ color: "#fff", textShadow: "0 0 30px rgba(255,45,123,0.5)" }}>
              {t.heading[0]}
            </span>
            <span className="block mt-2" style={{ color: "#fff", textShadow: "0 0 30px rgba(0,229,255,0.5)" }}>
              {t.heading[1]}
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            {t.sub}
          </p>

          <div className={`mt-10 flex items-center justify-center gap-4 flex-wrap ${isAr ? "flex-row-reverse" : ""}`}>
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-none ${isAr ? "flex-row-reverse" : ""}`}
              style={{
                backgroundColor: "#ff2d7b",
                clipPath: "polygon(3% 0%, 100% 5%, 97% 100%, 0% 95%)",
                boxShadow: "0 4px 20px rgba(255,45,123,0.4)",
              }}
            >
              {t.cta}
              <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
            </a>
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-none ${isAr ? "flex-row-reverse" : ""}`}
              style={{
                border: "2px solid #00e5ff",
                color: "#00e5ff",
                clipPath: "polygon(0% 5%, 97% 0%, 100% 95%, 3% 100%)",
              }}
            >
              {t.cta2}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
