"use client";

import { ArrowRight, Zap } from "lucide-react";

const content = {
  en: {
    tag: "POWER UP",
    heading: ["Digital", "Revolution"],
    sub: "Ignite your brand with electric digital solutions. We don\u2019t just build websites \u2014 we create experiences that light up the digital landscape.",
    cta1: "Ignite Your Project",
    cta2: "See Our Work",
    features: ["Blazing Fast", "Always On", "Future Ready"],
  },
  ar: {
    tag: "\u0634\u063A\u0651\u0644 \u0627\u0644\u0637\u0627\u0642\u0629",
    heading: ["\u062B\u0648\u0631\u0629", "\u0631\u0642\u0645\u064A\u0629"],
    sub: "\u0623\u0634\u0639\u0644 \u0639\u0644\u0627\u0645\u062A\u0643 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0628\u062D\u0644\u0648\u0644 \u0631\u0642\u0645\u064A\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629. \u0644\u0627 \u0646\u0628\u0646\u064A \u0645\u0648\u0627\u0642\u0639 \u0641\u0642\u0637 \u2014 \u0646\u062E\u0644\u0642 \u062A\u062C\u0627\u0631\u0628 \u062A\u0636\u064A\u0621 \u0627\u0644\u0645\u0634\u0647\u062F \u0627\u0644\u0631\u0642\u0645\u064A.",
    cta1: "\u0623\u0634\u0639\u0644 \u0645\u0634\u0631\u0648\u0639\u0643",
    cta2: "\u0634\u0627\u0647\u062F \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    features: ["\u0633\u0631\u0639\u0629 \u062E\u0627\u0637\u0641\u0629", "\u062F\u0627\u0626\u0645\u0627\u064B \u0645\u062A\u0627\u062D", "\u062C\u0627\u0647\u0632 \u0644\u0644\u0645\u0633\u062A\u0642\u0628\u0644"],
  },
};

export function Hero17({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes neonFlicker {
          0% { opacity: 0; }
          10% { opacity: 1; }
          12% { opacity: 0.8; }
          14% { opacity: 1; }
          20% { opacity: 0.9; }
          22% { opacity: 1; }
          35% { opacity: 0.85; }
          37% { opacity: 1; }
          100% { opacity: 1; }
        }

        @keyframes neonPulseRose {
          0%, 100% {
            text-shadow:
              0 0 10px rgba(244,63,94,0.5),
              0 0 20px rgba(244,63,94,0.3);
          }
          50% {
            text-shadow:
              0 0 20px rgba(244,63,94,0.8),
              0 0 40px rgba(244,63,94,0.5),
              0 0 80px rgba(244,63,94,0.3);
          }
        }

        @keyframes neonPulseBlue {
          0%, 100% {
            text-shadow:
              0 0 10px rgba(59,130,246,0.5),
              0 0 20px rgba(59,130,246,0.3);
          }
          50% {
            text-shadow:
              0 0 20px rgba(59,130,246,0.8),
              0 0 40px rgba(59,130,246,0.5),
              0 0 80px rgba(59,130,246,0.3);
          }
        }

        @keyframes frameGlow {
          0%, 100% {
            box-shadow:
              0 0 5px rgba(244,63,94,0.3),
              0 0 10px rgba(244,63,94,0.2),
              inset 0 0 5px rgba(244,63,94,0.1);
          }
          50% {
            box-shadow:
              0 0 15px rgba(244,63,94,0.5),
              0 0 30px rgba(244,63,94,0.3),
              0 0 60px rgba(244,63,94,0.15),
              inset 0 0 10px rgba(244,63,94,0.15);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes ambientPulse {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }

        .hero17-flicker {
          animation: neonFlicker 1.5s ease-out forwards;
        }

        .hero17-rose-glow {
          animation: neonPulseRose 3s ease-in-out infinite;
        }

        .hero17-blue-glow {
          animation: neonPulseBlue 3.5s ease-in-out infinite;
        }

        .hero17-frame-glow {
          animation: frameGlow 4s ease-in-out infinite;
        }

        .hero17-fade-1 { animation: fadeIn 0.8s ease-out 0.5s both; }
        .hero17-fade-2 { animation: fadeIn 0.8s ease-out 0.7s both; }
        .hero17-fade-3 { animation: fadeIn 0.8s ease-out 0.9s both; }
        .hero17-fade-4 { animation: fadeIn 0.8s ease-out 1.1s both; }
        .hero17-fade-5 { animation: fadeIn 0.8s ease-out 1.3s both; }
        .hero17-fade-6 { animation: fadeIn 0.8s ease-out 1.5s both; }

        .hero17-ambient {
          animation: ambientPulse 6s ease-in-out infinite;
        }

        .hero17-ambient-alt {
          animation: ambientPulse 8s ease-in-out infinite 2s;
        }

        .hero17-cta-rose {
          border: 1px solid rgba(244,63,94,0.6);
          box-shadow: 0 0 8px rgba(244,63,94,0.2), inset 0 0 8px rgba(244,63,94,0.05);
          transition: all 0.3s ease;
        }

        .hero17-cta-rose:hover {
          box-shadow: 0 0 20px rgba(244,63,94,0.4), 0 0 40px rgba(244,63,94,0.2), inset 0 0 12px rgba(244,63,94,0.1);
          border-color: rgba(244,63,94,0.9);
          background: rgba(244,63,94,0.08);
        }

        .hero17-cta-blue {
          border: 1px solid rgba(59,130,246,0.6);
          box-shadow: 0 0 8px rgba(59,130,246,0.2), inset 0 0 8px rgba(59,130,246,0.05);
          transition: all 0.3s ease;
        }

        .hero17-cta-blue:hover {
          box-shadow: 0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.2), inset 0 0 12px rgba(59,130,246,0.1);
          border-color: rgba(59,130,246,0.9);
          background: rgba(59,130,246,0.08);
        }

        .hero17-dot-rose {
          box-shadow: 0 0 6px rgba(244,63,94,0.6), 0 0 12px rgba(244,63,94,0.3);
        }

        .hero17-dot-blue {
          box-shadow: 0 0 6px rgba(59,130,246,0.6), 0 0 12px rgba(59,130,246,0.3);
        }

        .hero17-dot-purple {
          box-shadow: 0 0 6px rgba(168,85,247,0.6), 0 0 12px rgba(168,85,247,0.3);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero17-flicker,
          .hero17-rose-glow,
          .hero17-blue-glow,
          .hero17-frame-glow,
          .hero17-ambient,
          .hero17-ambient-alt {
            animation: none !important;
          }
          .hero17-fade-1, .hero17-fade-2, .hero17-fade-3,
          .hero17-fade-4, .hero17-fade-5, .hero17-fade-6 {
            animation: none !important;
            opacity: 1 !important;
          }
          .hero17-flicker { opacity: 1 !important; }
          .hero17-ambient, .hero17-ambient-alt { opacity: 0.15 !important; }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
        style={{
          backgroundColor: "#0a0a0a",
          fontFamily: fontBody,
        }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Brick wall texture */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.04,
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 38px,
                rgba(255,255,255,0.15) 38px,
                rgba(255,255,255,0.15) 40px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 78px,
                rgba(255,255,255,0.12) 78px,
                rgba(255,255,255,0.12) 80px
              )
            `,
            backgroundSize: "80px 40px",
          }}
        />

        {/* Offset row for brick pattern */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.03,
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 38px,
                rgba(255,255,255,0.12) 38px,
                rgba(255,255,255,0.12) 40px
              )
            `,
            backgroundSize: "80px 40px",
            backgroundPosition: "40px 20px",
          }}
        />

        {/* Ambient glow — rose */}
        <div
          className="hero17-ambient absolute"
          style={{
            width: "600px",
            height: "600px",
            top: "10%",
            left: "15%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(244,63,94,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        {/* Ambient glow — blue */}
        <div
          className="hero17-ambient-alt absolute"
          style={{
            width: "500px",
            height: "500px",
            bottom: "10%",
            right: "10%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        {/* Ambient glow — purple center */}
        <div
          className="hero17-ambient absolute"
          style={{
            width: "400px",
            height: "400px",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        {/* Neon border frame */}
        <div
          className="hero17-flicker absolute hero17-frame-glow"
          style={{
            width: "min(85%, 900px)",
            height: "min(75%, 600px)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "2px solid rgba(244,63,94,0.5)",
            borderRadius: "4px",
            pointerEvents: "none",
          }}
        >
          {/* Corner decorations — top-left */}
          <div
            style={{
              position: "absolute",
              top: "-5px",
              left: "-5px",
              width: "10px",
              height: "10px",
              backgroundColor: "#f43f5e",
              borderRadius: "2px",
              boxShadow: "0 0 8px rgba(244,63,94,0.8), 0 0 16px rgba(244,63,94,0.4)",
            }}
          />
          {/* Top-right */}
          <div
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              width: "10px",
              height: "10px",
              backgroundColor: "#f43f5e",
              borderRadius: "2px",
              boxShadow: "0 0 8px rgba(244,63,94,0.8), 0 0 16px rgba(244,63,94,0.4)",
            }}
          />
          {/* Bottom-left */}
          <div
            style={{
              position: "absolute",
              bottom: "-5px",
              left: "-5px",
              width: "10px",
              height: "10px",
              backgroundColor: "#f43f5e",
              borderRadius: "2px",
              boxShadow: "0 0 8px rgba(244,63,94,0.8), 0 0 16px rgba(244,63,94,0.4)",
            }}
          />
          {/* Bottom-right */}
          <div
            style={{
              position: "absolute",
              bottom: "-5px",
              right: "-5px",
              width: "10px",
              height: "10px",
              backgroundColor: "#f43f5e",
              borderRadius: "2px",
              boxShadow: "0 0 8px rgba(244,63,94,0.8), 0 0 16px rgba(244,63,94,0.4)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-20 text-center max-w-3xl mx-auto">
          {/* Tag */}
          <div className="hero17-fade-1 flex items-center justify-center gap-2 mb-8">
            <Zap
              className="w-4 h-4"
              style={{
                color: "#3b82f6",
                filter: "drop-shadow(0 0 6px rgba(59,130,246,0.6))",
              }}
            />
            <span
              className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase"
              style={{
                color: "#3b82f6",
                fontFamily: fontHeading,
                textShadow: "0 0 10px rgba(59,130,246,0.5), 0 0 20px rgba(59,130,246,0.3)",
              }}
            >
              {t.tag}
            </span>
            <Zap
              className="w-4 h-4"
              style={{
                color: "#3b82f6",
                filter: "drop-shadow(0 0 6px rgba(59,130,246,0.6))",
              }}
            />
          </div>

          {/* Heading */}
          <h1
            className="hero17-fade-2 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: fontHeading }}
          >
            <span
              className="hero17-rose-glow block"
              style={{ color: "#f43f5e" }}
            >
              {t.heading[0]}
            </span>
            <span
              className="hero17-blue-glow block mt-1"
              style={{ color: "#3b82f6" }}
            >
              {t.heading[1]}
            </span>
          </h1>

          {/* Sub */}
          <p
            className="hero17-fade-3 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: fontBody,
            }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div className="hero17-fade-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              className="hero17-cta-rose cursor-pointer group flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium transition-all duration-300"
              style={{
                color: "#f43f5e",
                fontFamily: fontHeading,
                backgroundColor: "rgba(244,63,94,0.04)",
              }}
            >
              {t.cta1}
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                style={{
                  transform: isAr ? "scaleX(-1)" : undefined,
                }}
              />
            </button>
            <button
              className="hero17-cta-blue cursor-pointer flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium transition-all duration-300"
              style={{
                color: "#3b82f6",
                fontFamily: fontHeading,
                backgroundColor: "rgba(59,130,246,0.04)",
              }}
            >
              {t.cta2}
            </button>
          </div>

          {/* Features */}
          <div className="hero17-fade-5 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {t.features.map((feature, i) => {
              const dotClass = i === 0
                ? "hero17-dot-rose"
                : i === 1
                  ? "hero17-dot-blue"
                  : "hero17-dot-purple";
              const dotColor = i === 0
                ? "#f43f5e"
                : i === 1
                  ? "#3b82f6"
                  : "#a855f7";

              return (
                <div
                  key={i}
                  className="flex items-center gap-2.5"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${dotClass}`}
                    style={{ backgroundColor: dotColor }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: fontBody,
                    }}
                  >
                    {feature}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
