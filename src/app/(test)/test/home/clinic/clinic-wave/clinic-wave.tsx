"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "SereneCare Wellness",
    tagline: "Healing Through Harmony",
    description:
      "A holistic approach to health and wellness. Our therapies combine modern medicine with calming practices to restore balance in body and mind.",
    cta: "Begin Healing",
    secondary: "Wellness Programs",
  },
  ar: {
    name: "عيادة سيرين كير",
    tagline: "الشفاء من خلال التناغم",
    description:
      "نهج شامل للصحة والعافية. علاجاتنا تجمع بين الطب الحديث والممارسات المهدئة لاستعادة التوازن في الجسم والعقل.",
    cta: "ابدأ رحلة الشفاء",
    secondary: "برامج العافية",
  },
};

export function ClinicWave({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const generateWavePath = (amplitude: number, frequency: number, yOffset: number, phase: number) => {
    const points = [];
    for (let x = 0; x <= 1200; x += 4) {
      const y = yOffset + amplitude * Math.sin((x / 1200) * Math.PI * frequency + phase);
      points.push(`${x},${y}`);
    }
    return `M${points.join(" L")}`;
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #041e2e 0%, #062633 40%, #083040 70%, #041e2e 100%)" }}
    >
      {/* Wave layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Wave 1 - bottom, large */}
        <svg className="absolute bottom-0 w-full" style={{ height: "40%" }} viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d={generateWavePath(30, 3, 100, 0)} fill="none" stroke="rgba(20,184,166,0.15)" strokeWidth="1.5" className="wave-line-1" />
        </svg>
        {/* Wave 2 */}
        <svg className="absolute bottom-0 w-full" style={{ height: "45%" }} viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d={generateWavePath(25, 4, 100, 1)} fill="none" stroke="rgba(56,189,248,0.12)" strokeWidth="1.2" className="wave-line-2" />
        </svg>
        {/* Wave 3 */}
        <svg className="absolute bottom-0 w-full" style={{ height: "50%" }} viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d={generateWavePath(20, 5, 100, 2)} fill="none" stroke="rgba(45,212,191,0.1)" strokeWidth="1" className="wave-line-3" />
        </svg>
        {/* Wave 4 - top area */}
        <svg className="absolute top-0 w-full" style={{ height: "35%" }} viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d={generateWavePath(15, 3.5, 100, 3)} fill="none" stroke="rgba(20,184,166,0.08)" strokeWidth="0.8" className="wave-line-4" />
        </svg>
        {/* Wave 5 */}
        <svg className="absolute top-0 w-full" style={{ height: "30%" }} viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d={generateWavePath(18, 2.5, 100, 4)} fill="none" stroke="rgba(56,189,248,0.06)" strokeWidth="0.8" className="wave-line-5" />
        </svg>
        {/* Wave 6 - middle */}
        <svg className="absolute w-full" style={{ top: "40%", height: "20%" }} viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d={generateWavePath(12, 6, 100, 0.5)} fill="none" stroke="rgba(45,212,191,0.07)" strokeWidth="0.6" className="wave-line-6" />
        </svg>
      </div>

      {/* Floating calm orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: "15%", top: "30%", size: 80, color: "rgba(20,184,166,0.04)", delay: 0 },
          { left: "70%", top: "25%", size: 60, color: "rgba(56,189,248,0.03)", delay: 1.5 },
          { left: "40%", top: "65%", size: 100, color: "rgba(20,184,166,0.03)", delay: 3 },
          { left: "80%", top: "60%", size: 50, color: "rgba(45,212,191,0.04)", delay: 2 },
          { left: "25%", top: "75%", size: 70, color: "rgba(56,189,248,0.03)", delay: 4 },
        ].map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full calm-orb"
            style={{
              left: orb.left, top: orb.top,
              width: orb.size, height: orb.size,
              background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
              animationDelay: `${orb.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 px-6 max-w-3xl mx-auto ${isAr ? "text-right" : "text-center"}`}>
        <p
          className="text-sm tracking-[0.25em] uppercase mb-4 font-medium"
          style={{ color: "#5eead4", letterSpacing: isAr ? "0.1em" : "0.25em" }}
        >
          {t.tagline}
        </p>

        <h1
          className="font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            background: "linear-gradient(135deg, #ccfbf1, #bae6fd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
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
              background: "linear-gradient(135deg, #0d9488, #0891b2)",
              color: "#f0fdfa",
              boxShadow: "0 0 30px rgba(13,148,136,0.3), 0 4px 15px rgba(0,0,0,0.3)",
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
              border: "1px solid rgba(13,148,136,0.35)",
              color: "#5eead4",
              background: "rgba(13,148,136,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .wave-line-1 { animation: wave-flow 6s ease-in-out infinite; }
        .wave-line-2 { animation: wave-flow 8s ease-in-out 0.5s infinite; }
        .wave-line-3 { animation: wave-flow 7s ease-in-out 1s infinite; }
        .wave-line-4 { animation: wave-flow 9s ease-in-out 1.5s infinite; }
        .wave-line-5 { animation: wave-flow 10s ease-in-out 2s infinite; }
        .wave-line-6 { animation: wave-flow 11s ease-in-out 0.8s infinite; }
        .calm-orb { animation: orb-breathe 6s ease-in-out infinite; }
        @keyframes wave-flow {
          0% { transform: translateX(0); }
          50% { transform: translateX(-30px); }
          100% { transform: translateX(0); }
        }
        @keyframes orb-breathe {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
