"use client";

interface Hero11Props {
  language: "en" | "ar";
}

const content = {
  en: {
    headingBefore: "Where innovation meets ",
    headingHighlight: "execution",
    body: "We transform ambitious ideas into market-defining realities. Strategy, technology, and execution — unified.",
    cta: "Explore solutions",
    logos: "ARAMCO · STC · NEOM · ACWA",
  },
  ar: {
    headingBefore: "حيث يلتقي الابتكار بـ",
    headingHighlight: "التنفيذ",
    body: "نحوّل الأفكار الطموحة إلى واقع يحدد الأسواق. استراتيجية وتقنية وتنفيذ — موحدة.",
    cta: "استكشف الحلول",
    logos: "ARAMCO · STC · NEOM · ACWA",
  },
};

export function Hero11({ language }: Hero11Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero11-drift1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(40px, -30px); }
          50% { transform: translate(-20px, 40px); }
          75% { transform: translate(30px, 20px); }
        }
        @keyframes hero11-drift2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-40px, 20px); }
          50% { transform: translate(30px, -40px); }
          75% { transform: translate(-20px, -30px); }
        }
        @keyframes hero11-drift3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, 40px); }
          50% { transform: translate(-40px, -20px); }
          75% { transform: translate(20px, -40px); }
        }
        @keyframes hero11-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero11-orb1, .hero11-orb2, .hero11-orb3 { animation: none !important; }
          .hero11-fade { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#0a0b14" }}
      >
        {/* Orb 1 — purple, top-left */}
        <div
          className="hero11-orb1 absolute pointer-events-none rounded-full"
          style={{
            width: 600,
            height: 600,
            top: "-5%",
            left: "-8%",
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
            opacity: 0.2,
            filter: "blur(80px)",
            animation: "hero11-drift1 18s ease-in-out infinite",
          }}
        />

        {/* Orb 2 — blue, bottom-right */}
        <div
          className="hero11-orb2 absolute pointer-events-none rounded-full"
          style={{
            width: 550,
            height: 550,
            bottom: "-10%",
            right: "-5%",
            background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
            opacity: 0.18,
            filter: "blur(80px)",
            animation: "hero11-drift2 22s ease-in-out infinite",
          }}
        />

        {/* Orb 3 — emerald, center */}
        <div
          className="hero11-orb3 absolute pointer-events-none rounded-full"
          style={{
            width: 500,
            height: 500,
            top: "30%",
            left: "35%",
            background: "radial-gradient(circle, #059669 0%, transparent 70%)",
            opacity: 0.15,
            filter: "blur(80px)",
            animation: "hero11-drift3 15s ease-in-out infinite",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1
            className={`hero11-fade text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
            style={{ animation: "hero11-fadeUp 0.8s ease-out both" }}
          >
            {t.headingBefore}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #7c3aed, #2563eb, #059669)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.headingHighlight}
            </span>
          </h1>

          <p
            className={`hero11-fade text-white/50 text-lg max-w-xl mx-auto mt-6 ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
            style={{ animation: "hero11-fadeUp 0.8s ease-out 0.2s both" }}
          >
            {t.body}
          </p>

          <div
            className="hero11-fade mt-10"
            style={{ animation: "hero11-fadeUp 0.8s ease-out 0.4s both" }}
          >
            <button
              className="cursor-pointer text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #7c3aed, #2563eb)",
              }}
            >
              <span
                className={
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }
              >
                {t.cta}
              </span>
            </button>
          </div>

          <div
            className="hero11-fade mt-16"
            style={{ animation: "hero11-fadeUp 0.8s ease-out 0.6s both" }}
          >
            <p className="text-[10px] text-white/15 tracking-widest uppercase font-[family-name:var(--font-inter)]">
              {t.logos}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
