"use client";

/**
 * Cinematic Reveal Hero — Event Countdown
 * Dark cinematic hero with flip-clock countdown, sweeping spotlight beams,
 * floating confetti rectangles, velvet curtain gradient, and cinematic
 * letter-by-letter title reveal. VIP movie-premiere feel.
 */

import { ArrowRight, Ticket, MapPin } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Exclusive Premiere",
    heading: "FUTURE TECH",
    headingLine2: "SUMMIT 2026",
    date: "October 15–17, 2026",
    venue: "Riyadh Convention Center, KSA",
    subheading:
      "Join 5,000+ innovators, developers, and industry leaders for 3 days of keynotes, workshops, and networking.",
    ctaPrimary: "Get VIP Tickets",
    ctaSecondary: "View Schedule",
    countdown: { days: "218", hours: "06", mins: "42", secs: "15" },
    countdownLabels: {
      days: "Days",
      hours: "Hours",
      mins: "Mins",
      secs: "Secs",
    },
  },
  ar: {
    badge: "عرض حصري",
    heading: "قمة التقنية",
    headingLine2: "المستقبلية 2026",
    date: "15–17 أكتوبر 2026",
    venue: "مركز الرياض للمؤتمرات، المملكة العربية السعودية",
    subheading:
      "انضم لأكثر من 5,000 مبتكر ومطور وقائد صناعي في 3 أيام من الكلمات الرئيسية وورش العمل والتواصل.",
    ctaPrimary: "احصل على تذاكر VIP",
    ctaSecondary: "عرض الجدول",
    countdown: { days: "218", hours: "06", mins: "42", secs: "15" },
    countdownLabels: {
      days: "أيام",
      hours: "ساعات",
      mins: "دقائق",
      secs: "ثوانٍ",
    },
  },
};

// Confetti rectangles — small colored pieces floating and spinning
const CONFETTI = Array.from({ length: 20 }, (_, i) => ({
  x: 5 + Math.random() * 90,
  y: Math.random() * 100,
  width: 4 + Math.random() * 8,
  height: 3 + Math.random() * 5,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 8,
  spinDuration: 2 + Math.random() * 4,
  color: ["#d4a853", "#991b1b", "#b45309", "#fbbf24", "#dc2626", "#d4a853"][
    i % 6
  ],
  startRotate: Math.floor(Math.random() * 360),
}));

export function EventCountdown({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        /* ---- Cinematic letter reveal ---- */
        @keyframes letterReveal {
          0% { opacity: 0; transform: translateY(30px) scale(0.8); filter: blur(8px); }
          60% { opacity: 1; filter: blur(0px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
        }
        @keyframes trackingExpand {
          from { letter-spacing: -0.05em; opacity: 0; }
          to { letter-spacing: 0.25em; opacity: 1; }
        }

        /* ---- Flip clock ---- */
        @keyframes flipCardIn {
          0% { transform: rotateX(90deg); opacity: 0; }
          100% { transform: rotateX(0deg); opacity: 1; }
        }

        /* ---- Spotlight sweep ---- */
        @keyframes spotlightSweep1 {
          0% { transform: rotate(-25deg) translateX(-200px); opacity: 0.04; }
          50% { transform: rotate(5deg) translateX(100px); opacity: 0.08; }
          100% { transform: rotate(-25deg) translateX(-200px); opacity: 0.04; }
        }
        @keyframes spotlightSweep2 {
          0% { transform: rotate(20deg) translateX(150px); opacity: 0.03; }
          50% { transform: rotate(-10deg) translateX(-150px); opacity: 0.07; }
          100% { transform: rotate(20deg) translateX(150px); opacity: 0.03; }
        }
        @keyframes spotlightSweep3 {
          0% { transform: rotate(0deg); opacity: 0.05; }
          50% { transform: rotate(15deg); opacity: 0.09; }
          100% { transform: rotate(0deg); opacity: 0.05; }
        }

        /* ---- Confetti ---- */
        @keyframes confettiFall {
          0% { transform: translateY(-20px); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.5; }
          100% { transform: translateY(40px); opacity: 0; }
        }
        @keyframes confettiSpin {
          from { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          to { transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg); }
        }

        /* ---- Fade up ---- */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ---- Gold shimmer line ---- */
        @keyframes goldShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .cin-fade { animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .cin-letter { animation: letterReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; display: inline-block; }
        .cin-tracking { animation: trackingExpand 1.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .cin-flip { animation: flipCardIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; perspective: 600px; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#080808" }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* ---- Warm radial glow at center ---- */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 900,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(212,168,83,0.06) 0%, rgba(153,27,27,0.04) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* ---- Velvet curtain gradient (top) ---- */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: 220,
            background:
              "linear-gradient(180deg, rgba(100,10,20,0.35) 0%, rgba(80,5,15,0.18) 40%, transparent 100%)",
          }}
        />
        {/* Curtain drape lines */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: 180,
            background:
              "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(120,15,25,0.08) 80px, rgba(120,15,25,0.08) 82px)",
          }}
        />

        {/* ---- Spotlight beams ---- */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-20%",
            left: "20%",
            width: 200,
            height: "140%",
            background:
              "linear-gradient(180deg, rgba(212,168,83,0.12) 0%, transparent 60%)",
            clipPath: "polygon(40% 0%, 60% 0%, 80% 100%, 20% 100%)",
            animation: "spotlightSweep1 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-20%",
            right: "15%",
            width: 180,
            height: "140%",
            background:
              "linear-gradient(180deg, rgba(153,27,27,0.10) 0%, transparent 55%)",
            clipPath: "polygon(35% 0%, 65% 0%, 85% 100%, 15% 100%)",
            animation: "spotlightSweep2 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 160,
            height: "130%",
            background:
              "linear-gradient(180deg, rgba(212,168,83,0.08) 0%, transparent 50%)",
            clipPath: "polygon(38% 0%, 62% 0%, 78% 100%, 22% 100%)",
            animation: "spotlightSweep3 18s ease-in-out infinite",
          }}
        />

        {/* ---- Confetti rectangles ---- */}
        {CONFETTI.map((c, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: `${c.x}%`,
              top: `${c.y}%`,
              width: c.width,
              height: c.height,
              backgroundColor: c.color,
              borderRadius: 1,
              animation: `confettiFall ${c.duration}s ease-in-out infinite, confettiSpin ${c.spinDuration}s linear infinite`,
              animationDelay: `${c.delay}s, ${c.delay}s`,
              opacity: 0.5,
            }}
          />
        ))}

        {/* ---- Content ---- */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full text-center">
          {/* Badge */}
          <div
            className="cin-fade inline-flex items-center gap-2 px-5 py-2 rounded-sm mb-10"
            style={{
              animationDelay: "0.2s",
              border: "1px solid rgba(212,168,83,0.3)",
              background: "rgba(212,168,83,0.05)",
            }}
          >
            <Ticket size={14} style={{ color: "#d4a853" }} />
            <span
              className="text-xs font-bold uppercase"
              style={{
                color: "#d4a853",
                letterSpacing: "0.2em",
              }}
            >
              {t.badge}
            </span>
          </div>

          {/* Cinematic heading with letter-by-letter reveal */}
          <h1 className="font-black leading-[0.95] tracking-tight">
            {/* Line 1 */}
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              {t.heading.split("").map((char, i) => (
                <span
                  key={i}
                  className="cin-letter"
                  style={{
                    animationDelay: `${0.4 + i * 0.06}s`,
                    color: "rgba(255,255,255,0.95)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            {/* Line 2 — gold gradient */}
            <span
              className="cin-tracking block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mt-2"
              style={{
                animationDelay: "1s",
                backgroundImage:
                  "linear-gradient(90deg, #d4a853, #fbbf24, #d4a853)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.headingLine2}
            </span>
          </h1>

          {/* Gold shimmer divider */}
          <div
            className="mx-auto mt-8 h-px"
            style={{
              width: 200,
              backgroundImage:
                "linear-gradient(90deg, transparent, #d4a853, #991b1b, #d4a853, transparent)",
              backgroundSize: "200% 100%",
              animation: "goldShimmer 4s linear infinite",
            }}
          />

          {/* Date & Venue — small caps elegant */}
          <div
            className="cin-fade mt-6 flex items-center justify-center gap-5 text-xs uppercase"
            style={{
              animationDelay: "1.2s",
              letterSpacing: "0.15em",
              color: "rgba(212,168,83,0.5)",
              fontVariant: "small-caps",
            }}
          >
            <span className="flex items-center gap-1.5">
              <span style={{ color: "rgba(212,168,83,0.7)" }}>{t.date}</span>
            </span>
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: "rgba(212,168,83,0.25)" }}
            />
            <span className="flex items-center gap-1.5">
              <MapPin size={12} style={{ color: "rgba(212,168,83,0.4)" }} />
              <span style={{ color: "rgba(212,168,83,0.7)" }}>{t.venue}</span>
            </span>
          </div>

          <p
            className="cin-fade mt-5 text-base max-w-lg mx-auto leading-relaxed"
            style={{
              animationDelay: "1.4s",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            {t.subheading}
          </p>

          {/* ---- Flip-clock countdown ---- */}
          <div
            className="cin-fade mt-14 flex items-center justify-center gap-3 sm:gap-5"
            style={{ animationDelay: "1.6s" }}
          >
            {(["days", "hours", "mins", "secs"] as const).map((unit, i) => (
              <div key={unit} className="text-center">
                <div
                  className="cin-flip relative overflow-hidden"
                  style={{
                    animationDelay: `${1.8 + i * 0.12}s`,
                    width: "clamp(68px, 10vw, 100px)",
                    height: "clamp(80px, 12vw, 110px)",
                    borderRadius: 14,
                    border: "1px solid rgba(212,168,83,0.15)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 48%, rgba(0,0,0,0.1) 50%, rgba(255,255,255,0.03) 52%, rgba(255,255,255,0.01) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Split line */}
                  <div
                    className="absolute left-0 right-0"
                    style={{
                      top: "50%",
                      height: 1,
                      background:
                        "linear-gradient(90deg, transparent, rgba(212,168,83,0.15), transparent)",
                    }}
                  />
                  {/* Shadow at split */}
                  <div
                    className="absolute left-0 right-0"
                    style={{
                      top: "50%",
                      height: 4,
                      background: "rgba(0,0,0,0.3)",
                      filter: "blur(2px)",
                    }}
                  />
                  <span
                    className="relative z-10 font-mono font-bold"
                    style={{
                      fontSize: "clamp(28px, 5vw, 42px)",
                      color: "rgba(255,255,255,0.9)",
                      textShadow: "0 0 20px rgba(212,168,83,0.2)",
                    }}
                  >
                    {t.countdown[unit]}
                  </span>
                </div>
                <span
                  className="block mt-2 text-[10px] uppercase font-semibold"
                  style={{
                    letterSpacing: "0.15em",
                    color: "rgba(212,168,83,0.35)",
                  }}
                >
                  {t.countdownLabels[unit]}
                </span>
              </div>
            ))}
          </div>

          {/* ---- CTAs ---- */}
          <div
            className="cin-fade mt-14 flex items-center justify-center gap-4"
            style={{ animationDelay: "2.2s" }}
          >
            <a
              href="#"
              className={`group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
              style={{
                color: "#080808",
                background:
                  "linear-gradient(135deg, #d4a853, #fbbf24, #d4a853)",
                borderRadius: 8,
                boxShadow: "0 4px 30px rgba(212,168,83,0.25)",
                letterSpacing: "0.12em",
              }}
            >
              {t.ctaPrimary}
              <ArrowRight
                size={16}
                className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`}
              />
            </a>
            <a
              href="#"
              className="px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all hover:bg-white/5"
              style={{
                color: "rgba(212,168,83,0.5)",
                border: "1px solid rgba(212,168,83,0.15)",
                borderRadius: 8,
                letterSpacing: "0.1em",
              }}
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>

        {/* ---- Floor reflection / red carpet glow ---- */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: 120,
            background:
              "linear-gradient(to top, rgba(153,27,27,0.06), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(212,168,83,0.15), rgba(153,27,27,0.2), rgba(212,168,83,0.15), transparent)",
          }}
        />
      </section>
    </>
  );
}
