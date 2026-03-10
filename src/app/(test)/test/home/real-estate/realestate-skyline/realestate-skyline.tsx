"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Premium Properties",
    title: "Elevate Your Lifestyle",
    description: "Discover exclusive residences in the city's most prestigious addresses. Where luxury meets the skyline, your dream home awaits above the clouds.",
    cta: "Explore Properties",
    secondary: "Schedule a Viewing",
  },
  ar: {
    badge: "عقارات فاخرة",
    title: "ارتقِ بأسلوب حياتك",
    description: "اكتشف مساكن حصرية في أرقى عناوين المدينة. حيث تلتقي الفخامة بالأفق، منزل أحلامك ينتظرك فوق السحاب.",
    cta: "استكشف العقارات",
    secondary: "حجز جولة",
  },
};

export function RealestateSkyline({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #0c0a09 0%, #1c1917 30%, #44403c 60%, #d97706 85%, #f59e0b 95%, #fbbf24 100%)" }}
    >
      {/* Golden hour glow */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(251,191,36,0.25) 0%, rgba(217,119,6,0.1) 40%, transparent 70%)",
        }}
      />

      {/* Skyline buildings */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1200 300" className="w-full h-auto" preserveAspectRatio="xMidYMax slice">
          {/* Background buildings */}
          <g fill="#1c1917" opacity="0.6">
            <rect x="50" y="120" width="60" height="180" rx="2" className="skyline-building" style={{ animationDelay: "0.2s" }} />
            <rect x="130" y="80" width="45" height="220" rx="2" className="skyline-building" style={{ animationDelay: "0.5s" }} />
            <rect x="200" y="140" width="55" height="160" rx="2" className="skyline-building" style={{ animationDelay: "0.3s" }} />
            <rect x="900" y="100" width="50" height="200" rx="2" className="skyline-building" style={{ animationDelay: "0.7s" }} />
            <rect x="970" y="130" width="65" height="170" rx="2" className="skyline-building" style={{ animationDelay: "0.4s" }} />
            <rect x="1080" y="90" width="55" height="210" rx="2" className="skyline-building" style={{ animationDelay: "0.6s" }} />
          </g>
          {/* Foreground buildings */}
          <g fill="#292524">
            <rect x="280" y="60" width="70" height="240" rx="2" className="skyline-building" style={{ animationDelay: "0.1s" }} />
            <rect x="370" y="100" width="50" height="200" rx="2" className="skyline-building" style={{ animationDelay: "0.4s" }} />
            <rect x="440" y="30" width="80" height="270" rx="2" className="skyline-building" style={{ animationDelay: "0s" }} />
            <rect x="540" y="70" width="60" height="230" rx="2" className="skyline-building" style={{ animationDelay: "0.3s" }} />
            <rect x="620" y="50" width="75" height="250" rx="2" className="skyline-building" style={{ animationDelay: "0.2s" }} />
            <rect x="715" y="90" width="55" height="210" rx="2" className="skyline-building" style={{ animationDelay: "0.5s" }} />
            <rect x="790" y="40" width="85" height="260" rx="2" className="skyline-building" style={{ animationDelay: "0.1s" }} />
          </g>
          {/* Building windows */}
          <g fill="#fbbf24" opacity="0.3">
            {[440, 460, 480, 500].map((x) =>
              [50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250].map((y) => (
                <rect key={`${x}-${y}`} x={x + 5} y={y} width="8" height="6" rx="1" className="window-glow" style={{ animationDelay: `${Math.random() * 3}s` }} />
              ))
            )}
            {[620, 640, 660, 675].map((x) =>
              [70, 90, 110, 130, 150, 170, 190, 210, 230, 250].map((y) => (
                <rect key={`${x}-${y}`} x={x + 5} y={y} width="8" height="6" rx="1" className="window-glow" style={{ animationDelay: `${Math.random() * 3}s` }} />
              ))
            )}
            {[790, 810, 830, 850].map((x) =>
              [60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260].map((y) => (
                <rect key={`${x}-${y}`} x={x + 5} y={y} width="8" height="6" rx="1" className="window-glow" style={{ animationDelay: `${Math.random() * 3}s` }} />
              ))
            )}
          </g>
          {/* Antenna spires */}
          <line x1="480" y1="30" x2="480" y2="10" stroke="#44403c" strokeWidth="2" />
          <line x1="657" y1="50" x2="657" y2="25" stroke="#44403c" strokeWidth="2" />
          <line x1="832" y1="40" x2="832" y2="15" stroke="#44403c" strokeWidth="2" />
          <circle cx="480" cy="8" r="3" fill="#ef4444" className="beacon-blink" />
          <circle cx="832" cy="13" r="3" fill="#ef4444" className="beacon-blink" style={{ animationDelay: "1.5s" }} />
        </svg>
      </div>

      {/* Floating particles (city lights) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full particle-float"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${20 + Math.random() * 60}%`,
              width: 2 + Math.random() * 3,
              height: 2 + Math.random() * 3,
              background: `rgba(251,191,36,${0.1 + Math.random() * 0.2})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 px-6 pb-72 pt-20 max-w-3xl mx-auto ${isAr ? "text-right" : "text-left"}`}>
        <p
          className="text-sm tracking-widest uppercase mb-4 font-medium"
          style={{ color: "#f59e0b", letterSpacing: isAr ? "0.1em" : "0.25em" }}
        >
          {t.badge}
        </p>

        <h1
          className="font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "#fef3c7",
            textShadow: "0 0 60px rgba(251,191,36,0.3)",
          }}
        >
          {t.title}
        </h1>

        <p
          className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
          style={{ color: "rgba(254,243,199,0.65)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              color: "#1c1917",
              boxShadow: "0 0 30px rgba(245,158,11,0.4), 0 4px 15px rgba(0,0,0,0.3)",
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
            style={{
              border: "1px solid rgba(245,158,11,0.4)",
              color: "#fbbf24",
              background: "rgba(245,158,11,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .skyline-building {
          animation: building-rise 1.5s ease-out both;
        }
        @keyframes building-rise {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .window-glow {
          animation: window-flicker 4s ease-in-out infinite;
        }
        @keyframes window-flicker {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .beacon-blink {
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .particle-float {
          animation: pfloat 6s ease-in-out infinite;
        }
        @keyframes pfloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
