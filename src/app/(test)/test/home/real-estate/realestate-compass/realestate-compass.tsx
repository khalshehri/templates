"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Navigate Your Future",
    title: "Find Your True Direction",
    description: "In the vast landscape of real estate, we are your compass. Guiding you to the perfect location, the right neighborhood, and the home meant for you.",
    cta: "Start Your Search",
    secondary: "Explore Areas",
  },
  ar: {
    badge: "اكتشف مستقبلك",
    title: "اعثر على وجهتك الحقيقية",
    description: "في عالم العقارات الواسع، نحن بوصلتك. نوجهك إلى الموقع المثالي والحي المناسب والمنزل المخصص لك.",
    cta: "ابدأ البحث",
    secondary: "استكشف المناطق",
  },
};

export function RealestateCompass({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #1c1917 0%, #0c0a09 100%)" }}
    >
      {/* Subtle map grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(217,119,6,0.04) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Compass SVG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="compass-container" style={{ width: 360, height: 360 }}>
          {/* Outer ring */}
          <svg viewBox="0 0 360 360" width="360" height="360" className="absolute inset-0">
            <circle cx="180" cy="180" r="170" fill="none" stroke="#44403c" strokeWidth="2" />
            <circle cx="180" cy="180" r="160" fill="none" stroke="#292524" strokeWidth="1" />
            <circle cx="180" cy="180" r="140" fill="none" stroke="rgba(217,119,6,0.15)" strokeWidth="1" />

            {/* Degree ticks */}
            {Array.from({ length: 72 }).map((_, i) => {
              const angle = i * 5;
              const isMajor = angle % 30 === 0;
              const r1 = isMajor ? 152 : 156;
              const r2 = 164;
              const rad = (angle * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={180 + r1 * Math.sin(rad)}
                  y1={180 - r1 * Math.cos(rad)}
                  x2={180 + r2 * Math.sin(rad)}
                  y2={180 - r2 * Math.cos(rad)}
                  stroke={isMajor ? "#d97706" : "#44403c"}
                  strokeWidth={isMajor ? 2 : 0.5}
                />
              );
            })}

            {/* Cardinal labels */}
            <text x="180" y="35" textAnchor="middle" fill="#f59e0b" fontSize="18" fontWeight="bold">N</text>
            <text x="180" y="342" textAnchor="middle" fill="#78716c" fontSize="14">S</text>
            <text x="338" y="185" textAnchor="middle" fill="#78716c" fontSize="14">E</text>
            <text x="22" y="185" textAnchor="middle" fill="#78716c" fontSize="14">W</text>

            {/* Inner decorative circles */}
            <circle cx="180" cy="180" r="60" fill="none" stroke="rgba(217,119,6,0.1)" strokeWidth="1" />
            <circle cx="180" cy="180" r="8" fill="#d97706" opacity="0.6" />
          </svg>

          {/* Spinning needle */}
          <svg viewBox="0 0 360 360" width="360" height="360" className="absolute inset-0 needle-spin">
            {/* North needle (gold/amber) */}
            <polygon points="180,40 170,180 190,180" fill="url(#needleGoldGrad)" />
            {/* South needle (dark) */}
            <polygon points="180,320 170,180 190,180" fill="#44403c" />
            {/* Center cap */}
            <circle cx="180" cy="180" r="12" fill="#292524" stroke="#d97706" strokeWidth="2" />
            <defs>
              <linearGradient id="needleGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Glow behind compass */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Location pins floating around */}
      {[
        { left: "15%", top: "30%" },
        { left: "80%", top: "25%" },
        { left: "75%", top: "65%" },
        { left: "20%", top: "70%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute pointer-events-none pin-bounce"
          style={{ ...pos, animationDelay: `${i * 0.8}s` }}
        >
          <svg viewBox="0 0 24 36" width="20" height="30">
            <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="rgba(245,158,11,0.2)" />
            <circle cx="12" cy="12" r="5" fill="rgba(245,158,11,0.4)" />
          </svg>
        </div>
      ))}

      {/* Content at bottom */}
      <div className={`absolute bottom-0 left-0 right-0 z-10 px-6 pb-16 pt-40 ${isAr ? "text-right" : "text-left"}`}
        style={{ background: "linear-gradient(to top, rgba(12,10,9,0.98) 35%, transparent 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-3 font-medium" style={{ color: "#f59e0b", letterSpacing: isAr ? "0.1em" : "0.25em" }}>
            {t.badge}
          </p>
          <h1 className="font-bold mb-4 leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fef3c7" }}>
            {t.title}
          </h1>
          <p className="text-lg mb-8 max-w-xl leading-relaxed" style={{ color: "rgba(254,243,199,0.6)" }}>
            {t.description}
          </p>
          <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
            <button className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", color: "#1c1917", boxShadow: "0 0 30px rgba(245,158,11,0.3)" }}>
              {isAr ? (
                <><ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />{t.cta}</>
              ) : (
                <>{t.cta}<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
            <button className="px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{ border: "1px solid rgba(245,158,11,0.4)", color: "#fbbf24", background: "rgba(245,158,11,0.08)" }}>
              {t.secondary}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .needle-spin {
          animation: needle-wobble 8s ease-in-out infinite;
          transform-origin: center center;
        }
        @keyframes needle-wobble {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(25deg); }
          30% { transform: rotate(-15deg); }
          45% { transform: rotate(10deg); }
          60% { transform: rotate(-5deg); }
          75% { transform: rotate(3deg); }
          100% { transform: rotate(0deg); }
        }
        .pin-bounce {
          animation: pin-float 3s ease-in-out infinite;
        }
        @keyframes pin-float {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-8px); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
