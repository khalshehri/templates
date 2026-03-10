"use client";

/**
 * Event Stage Hero — Concert/conference stage with moving spotlight beams
 * Dark stage floor, sweeping colored beams from above, haze glow, cinematic energy.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "LIVE ON STAGE",
    heading: "THE GRAND",
    headingLine2: "CONFERENCE 2026",
    sub: "Experience world-class speakers, electrifying performances, and breakthrough ideas — all under one roof.",
    date: "November 20–22, 2026",
    venue: "Jeddah Superdome, KSA",
    ctaPrimary: "Reserve Your Seat",
    ctaSecondary: "See Lineup",
  },
  ar: {
    badge: "على المسرح مباشرة",
    heading: "المؤتمر الكبير",
    headingLine2: "2026",
    sub: "عِش تجربة متحدثين عالميين وعروض مذهلة وأفكار رائدة — كل ذلك تحت سقف واحد.",
    date: "20–22 نوفمبر 2026",
    venue: "قبة جدة الكبرى، المملكة العربية السعودية",
    ctaPrimary: "احجز مقعدك",
    ctaSecondary: "شاهد القائمة",
  },
};

const BEAMS = [
  { left: "10%", angle: 12, color: "rgba(168,85,247,0.15)", delay: 0, dur: 7 },
  { left: "25%", angle: -8, color: "rgba(220,38,38,0.12)", delay: 1.5, dur: 9 },
  { left: "42%", angle: 3, color: "rgba(212,168,83,0.14)", delay: 0.5, dur: 8 },
  { left: "58%", angle: -5, color: "rgba(59,130,246,0.12)", delay: 2, dur: 10 },
  { left: "75%", angle: 10, color: "rgba(168,85,247,0.13)", delay: 1, dur: 7.5 },
  { left: "90%", angle: -12, color: "rgba(220,38,38,0.10)", delay: 3, dur: 9 },
];

export function EventStage({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes beamSweep {
          0% { transform: rotate(var(--beam-angle)) scaleY(0.85); opacity: 0.3; }
          25% { transform: rotate(calc(var(--beam-angle) + 8deg)) scaleY(1); opacity: 1; }
          50% { transform: rotate(calc(var(--beam-angle) - 6deg)) scaleY(0.95); opacity: 0.7; }
          75% { transform: rotate(calc(var(--beam-angle) + 4deg)) scaleY(1.05); opacity: 0.9; }
          100% { transform: rotate(var(--beam-angle)) scaleY(0.85); opacity: 0.3; }
        }
        @keyframes hazeFloat {
          0%, 100% { transform: translateX(-30px) scaleX(1); opacity: 0.03; }
          50% { transform: translateX(30px) scaleX(1.1); opacity: 0.07; }
        }
        @keyframes stageFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes stageGlow {
          0%, 100% { box-shadow: 0 0 60px rgba(168,85,247,0.15), 0 0 120px rgba(220,38,38,0.08); }
          50% { box-shadow: 0 0 80px rgba(168,85,247,0.25), 0 0 160px rgba(220,38,38,0.15); }
        }
        @keyframes stagePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .stage-fade { animation: stageFadeUp 0.8s ease-out both; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0d0515 40%, #120a0a 100%)" }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Stage floor reflection */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{
          height: "35%",
          background: "linear-gradient(to top, rgba(168,85,247,0.04), transparent)",
        }} />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{
          height: 2,
          background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), rgba(212,168,83,0.3), rgba(220,38,38,0.3), transparent)",
        }} />

        {/* Haze layers */}
        {[0, 1, 2].map(i => (
          <div key={i} className="absolute pointer-events-none" style={{
            top: `${30 + i * 15}%`,
            left: "-10%",
            right: "-10%",
            height: 200,
            background: `radial-gradient(ellipse at ${30 + i * 20}% 50%, rgba(168,85,247,0.04), transparent 70%)`,
            animation: `hazeFloat ${8 + i * 3}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
          }} />
        ))}

        {/* Spotlight beams */}
        {BEAMS.map((beam, i) => (
          <div key={i} className="absolute pointer-events-none" style={{
            top: "-20%",
            left: beam.left,
            width: 80,
            height: "140%",
            background: `linear-gradient(180deg, ${beam.color} 0%, transparent 70%)`,
            clipPath: "polygon(30% 0%, 70% 0%, 90% 100%, 10% 100%)",
            ["--beam-angle" as string]: `${beam.angle}deg`,
            animation: `beamSweep ${beam.dur}s ease-in-out infinite`,
            animationDelay: `${beam.delay}s`,
            transformOrigin: "top center",
          }} />
        ))}

        {/* Beam source dots at top */}
        {BEAMS.map((beam, i) => (
          <div key={`dot-${i}`} className="absolute pointer-events-none" style={{
            top: 0,
            left: beam.left,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: beam.color.replace(/[\d.]+\)$/, "0.8)"),
            filter: "blur(4px)",
            animation: `stagePulse ${beam.dur}s ease-in-out infinite`,
            animationDelay: `${beam.delay}s`,
          }} />
        ))}

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full text-center">
          {/* Badge */}
          <div className="stage-fade inline-flex items-center gap-2 px-5 py-2 rounded-full mb-10" style={{
            animationDelay: "0.2s",
            border: "1px solid rgba(168,85,247,0.3)",
            background: "rgba(168,85,247,0.08)",
          }}>
            <span className="text-xs font-bold uppercase" style={{ color: "#a855f7", letterSpacing: "0.2em" }}>
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-black leading-[0.95] tracking-tight">
            <span className="stage-fade block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl" style={{
              animationDelay: "0.4s",
              color: "rgba(255,255,255,0.95)",
            }}>
              {t.heading}
            </span>
            <span className="stage-fade block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mt-2" style={{
              animationDelay: "0.7s",
              backgroundImage: "linear-gradient(90deg, #a855f7, #ec4899, #d4a853)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              {t.headingLine2}
            </span>
          </h1>

          {/* Date & venue */}
          <div className="stage-fade mt-8 flex items-center justify-center gap-4 text-xs uppercase" style={{
            animationDelay: "1s",
            letterSpacing: "0.15em",
            color: "rgba(168,85,247,0.6)",
          }}>
            <span>{t.date}</span>
            <span className="w-1 h-1 rounded-full" style={{ background: "rgba(168,85,247,0.4)" }} />
            <span>{t.venue}</span>
          </div>

          <p className="stage-fade mt-5 text-base max-w-lg mx-auto leading-relaxed" style={{
            animationDelay: "1.2s",
            color: "rgba(255,255,255,0.3)",
          }}>
            {t.sub}
          </p>

          {/* CTAs */}
          <div className="stage-fade mt-14 flex items-center justify-center gap-4" style={{ animationDelay: "1.5s" }}>
            <a href="#" className={`group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 rounded-lg ${isAr ? "flex-row-reverse" : ""}`} style={{
              color: "#fff",
              background: "linear-gradient(135deg, #a855f7, #ec4899)",
              boxShadow: "0 4px 30px rgba(168,85,247,0.3)",
            }}>
              {t.ctaPrimary}
              <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
            </a>
            <a href="#" className="px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all hover:bg-white/5 rounded-lg" style={{
              color: "rgba(168,85,247,0.6)",
              border: "1px solid rgba(168,85,247,0.2)",
            }}>
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
