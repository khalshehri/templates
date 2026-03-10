"use client";

/**
 * Luxury Reveal Hero — "Golden Thread"
 *
 * Ultra-elegant dark hero where a thin golden line draws itself across
 * the screen in an artistic S-curve path (SVG stroke-dashoffset animation).
 * The heading text reveals letter by letter with extreme tracking.
 * Diamond sparkle effects — small bright points that flash at staggered
 * intervals. Minimal, luxurious, exclusive.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Exquisite",
    subtitle: "Where silence speaks louder than gold.",
    cta: "Enter the Atelier",
  },
  ar: {
    heading: "فريد",
    subtitle: "حيث الصمت أبلغ من الذهب.",
    cta: "ادخل المشغل",
  },
};

// Diamond sparkle positions — staggered across the viewport
const sparkles = [
  { x: "18%", y: "22%", delay: 2.8, size: 3 },
  { x: "72%", y: "35%", delay: 3.6, size: 2.5 },
  { x: "45%", y: "18%", delay: 4.2, size: 3.5 },
  { x: "85%", y: "60%", delay: 5.0, size: 2 },
  { x: "28%", y: "72%", delay: 3.2, size: 2.5 },
  { x: "62%", y: "78%", delay: 4.8, size: 3 },
];

export function LuxuryReveal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  // The golden S-curve path — elegant flowing line across the viewport
  const goldenPath =
    "M -50 400 C 150 100, 350 650, 550 350 S 850 50, 1050 400 S 1350 700, 1500 300";
  const pathLength = 2800;

  return (
    <>
      <style>{`
        /* ── Golden Thread: SVG path draw ───────────────────── */
        @keyframes drawGoldenThread {
          0% {
            stroke-dashoffset: ${pathLength};
            opacity: 0;
          }
          3% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes threadGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(212,168,83,0.3)); }
          50% { filter: drop-shadow(0 0 12px rgba(245,216,154,0.6)); }
        }

        /* ── Letter-by-letter reveal ────────────────────────── */
        @keyframes letterIlluminate {
          0% {
            opacity: 0;
            letter-spacing: 0.5em;
            color: rgba(212,168,83,0);
            filter: blur(8px);
          }
          40% {
            opacity: 0.4;
            color: rgba(212,168,83,0.6);
            filter: blur(3px);
          }
          70% {
            letter-spacing: 0.25em;
            filter: blur(0);
          }
          100% {
            opacity: 1;
            letter-spacing: 0.18em;
            color: rgba(250,245,235,0.95);
            filter: blur(0);
          }
        }

        /* ── Diamond sparkle burst ──────────────────────────── */
        @keyframes diamondSparkle {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            transform: scale(1.2) rotate(45deg);
            opacity: 1;
          }
          30% {
            transform: scale(0.8) rotate(90deg);
            opacity: 0.7;
          }
          45% {
            transform: scale(1.4) rotate(135deg);
            opacity: 1;
          }
          60% {
            transform: scale(0.6) rotate(180deg);
            opacity: 0.4;
          }
          100% {
            transform: scale(0) rotate(270deg);
            opacity: 0;
          }
        }

        @keyframes diamondRays {
          0% { box-shadow: 0 0 0 0 rgba(245,216,154,0); }
          20% { box-shadow: 0 0 20px 4px rgba(245,216,154,0.8), 0 0 60px 10px rgba(212,168,83,0.3); }
          100% { box-shadow: 0 0 0 0 rgba(245,216,154,0); }
        }

        /* ── Subtitle + CTA fade-in ─────────────────────────── */
        @keyframes luxFadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── CTA border shimmer ─────────────────────────────── */
        @keyframes borderShimmer {
          0% { border-color: rgba(212,168,83,0.15); }
          50% { border-color: rgba(212,168,83,0.45); }
          100% { border-color: rgba(212,168,83,0.15); }
        }

        /* ── Ambient golden pulse ───────────────────────────── */
        @keyframes ambientPulse {
          0%, 100% { opacity: 0.03; transform: scale(1); }
          50% { opacity: 0.07; transform: scale(1.05); }
        }

        @keyframes ambientPulse2 {
          0%, 100% { opacity: 0.02; transform: scale(1.05); }
          50% { opacity: 0.05; transform: scale(0.95); }
        }

        /* ── Thin horizontal accent lines ───────────────────── */
        @keyframes accentLineReveal {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }

        .lux-letter {
          display: inline-block;
          animation: letterIlluminate 1.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .lux-sparkle {
          position: absolute;
          border-radius: 1px;
          background: #f5d89a;
          animation: diamondSparkle 1.6s ease-out both,
                     diamondRays 1.6s ease-out both;
        }

        .lux-fade-up {
          animation: luxFadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .lux-border-shimmer {
          animation: borderShimmer 4s ease-in-out infinite;
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#0a0808" }}
      >
        {/* ── Warm ambient glow layers ──────────────────────── */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(212,168,83,0.06) 0%, rgba(139,92,42,0.02) 40%, transparent 70%)",
            animation: "ambientPulse 16s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            bottom: "-10%",
            right: "-5%",
            background:
              "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 60%)",
            animation: "ambientPulse2 20s ease-in-out 3s infinite",
          }}
        />

        {/* ── Subtle texture overlay (grain) ───────────────── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />

        {/* ── SVG Golden Thread (S-curve) ──────────────────── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4a853" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#f5d89a" stopOpacity="1" />
              <stop offset="60%" stopColor="#d4a853" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f5d89a" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d={goldenPath}
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength}
            style={{
              animation: `drawGoldenThread 4s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards, threadGlow 6s ease-in-out 4.5s infinite`,
            }}
          />
          {/* Secondary thinner shadow line for depth */}
          <path
            d={goldenPath}
            fill="none"
            stroke="rgba(212,168,83,0.15)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength}
            style={{
              animation: `drawGoldenThread 4s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards`,
              filter: "blur(8px)",
            }}
          />
        </svg>

        {/* ── Diamond Sparkles ─────────────────────────────── */}
        {sparkles.map((s, i) => (
          <div
            key={i}
            className="lux-sparkle"
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s, ${s.delay}s`,
              transform: "rotate(45deg)",
            }}
          />
        ))}

        {/* ── Content ──────────────────────────────────────── */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          {/* Thin accent line above heading */}
          <div className="flex justify-center mb-16">
            <div
              className="h-px w-24"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,168,83,0.4), transparent)",
                animation:
                  "accentLineReveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
                transformOrigin: "center",
              }}
            />
          </div>

          {/* Letter-by-letter heading */}
          <h1
            className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-extralight leading-none"
            style={{
              fontFamily: "var(--font-amiri), var(--font-el-messiri), serif",
            }}
          >
            {t.heading.split("").map((char, i) => (
              <span
                key={i}
                className="lux-letter"
                style={{
                  animationDelay: `${1.2 + i * 0.15}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* Subtle subtitle */}
          <p
            className="lux-fade-up mt-10 sm:mt-14 text-base sm:text-lg font-light tracking-wide leading-relaxed max-w-md mx-auto"
            style={{
              color: "rgba(212,168,83,0.35)",
              animationDelay: "3.8s",
              fontFamily: "var(--font-amiri), var(--font-el-messiri), serif",
            }}
          >
            {t.subtitle}
          </p>

          {/* Thin accent line below subtitle */}
          <div className="flex justify-center mt-10 sm:mt-14">
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,168,83,0.3), transparent)",
                animation:
                  "accentLineReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 4.2s both",
                transformOrigin: "center",
              }}
            />
          </div>

          {/* Single elegant CTA */}
          <div
            className="lux-fade-up mt-14 sm:mt-20"
            style={{ animationDelay: "4.5s" }}
          >
            <a
              href="#"
              className={`group inline-flex items-center gap-4 px-10 py-4 text-xs font-light tracking-[0.35em] uppercase transition-all duration-500 hover:bg-[rgba(212,168,83,0.06)] lux-border-shimmer ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{
                color: "rgba(250,245,235,0.6)",
                border: "1px solid rgba(212,168,83,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(250,245,235,0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(250,245,235,0.6)";
              }}
            >
              {t.cta}
              <ArrowRight
                size={12}
                className={`transition-transform duration-500 group-hover:translate-x-2 ${
                  isAr ? "rotate-180 group-hover:-translate-x-2" : ""
                }`}
                style={{ opacity: 0.5 }}
              />
            </a>
          </div>
        </div>

        {/* ── Bottom edge gradient fade ────────────────────── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #0a0808, transparent)",
          }}
        />
      </section>
    </>
  );
}
