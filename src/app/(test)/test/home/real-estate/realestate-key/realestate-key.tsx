"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Unlock Your Future",
    title: "The Key to Your Dream Home",
    description: "Every great journey begins with a single turn. Let us hand you the key to a home that matches your ambitions and exceeds your expectations.",
    cta: "Find Your Home",
    secondary: "View Listings",
  },
  ar: {
    badge: "افتح مستقبلك",
    title: "مفتاح منزل أحلامك",
    description: "كل رحلة عظيمة تبدأ بخطوة واحدة. دعنا نسلمك مفتاح منزل يتناسب مع طموحاتك ويفوق توقعاتك.",
    cta: "ابحث عن منزلك",
    secondary: "تصفح العقارات",
  },
};

export function RealestateKey({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)" }}
    >
      {/* Radial golden glow behind key */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(251,191,36,0.12) 0%, rgba(217,119,6,0.05) 40%, transparent 70%)",
        }}
      />

      {/* Animated key SVG */}
      <div className="absolute pointer-events-none key-container" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <svg viewBox="0 0 200 400" width="180" height="360" className="key-turn">
          {/* Key head (bow) */}
          <circle cx="100" cy="80" r="50" fill="none" stroke="url(#goldGrad)" strokeWidth="8" />
          <circle cx="100" cy="80" r="30" fill="none" stroke="url(#goldGrad)" strokeWidth="4" opacity="0.5" />
          {/* Decorative inner pattern */}
          <circle cx="100" cy="80" r="15" fill="none" stroke="#d97706" strokeWidth="2" opacity="0.3" />
          <circle cx="100" cy="80" r="5" fill="#f59e0b" opacity="0.6" />
          {/* Key shaft */}
          <rect x="95" y="130" width="10" height="180" rx="3" fill="url(#goldGrad)" />
          {/* Key teeth */}
          <rect x="105" y="260" width="25" height="10" rx="2" fill="url(#goldGrad)" />
          <rect x="105" y="280" width="18" height="10" rx="2" fill="url(#goldGrad)" />
          <rect x="105" y="300" width="30" height="10" rx="2" fill="url(#goldGrad)" />
          {/* Key tip */}
          <rect x="93" y="310" width="14" height="15" rx="3" fill="url(#goldGrad)" />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
        </svg>

        {/* Sparkle particles around key */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full sparkle"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${10 + Math.random() * 80}%`,
              width: 3 + Math.random() * 4,
              height: 3 + Math.random() * 4,
              background: "#fbbf24",
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Lock keyhole at center */}
      <div
        className="absolute pointer-events-none keyhole-pulse"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg viewBox="0 0 60 80" width="40" height="55" opacity="0.2">
          <circle cx="30" cy="25" r="15" fill="#f59e0b" />
          <rect x="22" y="30" width="16" height="30" rx="3" fill="#f59e0b" />
        </svg>
      </div>

      {/* Content */}
      <div className={`relative z-10 px-6 max-w-3xl mx-auto ${isAr ? "text-right" : "text-left"}`} style={{ marginTop: "-10%" }}>
        <div className={`flex ${isAr ? "flex-row-reverse" : ""} gap-16 items-center`}>
          {/* Text side */}
          <div className="flex-1">
            <p
              className="text-sm tracking-widest uppercase mb-4 font-medium"
              style={{ color: "#f59e0b", letterSpacing: isAr ? "0.1em" : "0.25em" }}
            >
              {t.badge}
            </p>

            <h1
              className="font-bold mb-6 leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "#fef3c7",
                textShadow: "0 0 40px rgba(251,191,36,0.2)",
              }}
            >
              {t.title}
            </h1>

            <p className="text-lg mb-10 max-w-md leading-relaxed" style={{ color: "rgba(254,243,199,0.6)" }}>
              {t.description}
            </p>

            <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
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

          {/* Spacer for key area */}
          <div className="hidden lg:block w-64" />
        </div>
      </div>

      <style>{`
        .key-turn {
          animation: key-rotate 6s ease-in-out infinite;
          transform-origin: center 80px;
        }
        @keyframes key-rotate {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
          75% { transform: rotate(-5deg); }
        }
        .sparkle {
          animation: sparkle-fade 3s ease-in-out infinite;
        }
        @keyframes sparkle-fade {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 0.8; transform: scale(1); }
        }
        .keyhole-pulse {
          animation: kh-pulse 3s ease-in-out infinite;
        }
        @keyframes kh-pulse {
          0%, 100% { opacity: 0.15; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.3; transform: translate(-50%, -50%) scale(1.1); }
        }
      `}</style>
    </section>
  );
}
