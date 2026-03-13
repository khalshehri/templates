"use client";

import { useState, useEffect, useRef } from "react";
import { Zap, Medal, Users, Clock, ArrowRight } from "lucide-react";

interface Hero10Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "PUSH YOUR LIMITS.",
    accent: "REDEFINE POSSIBLE.",
    sub: "Join the movement. World-class trainers, cutting-edge facilities, and a community that pushes you to be your best \u2014 every single day.",
    cta1: "Join Now",
    cta2: "View Plans",
    statValue: "10,000",
    statPrefix: "",
    statSuffix: "+",
    statLabel: "Active Members",
    badges: [
      { icon: "medal" as const, label: "Olympic Equipment" },
      { icon: "users" as const, label: "Expert Trainers" },
      { icon: "clock" as const, label: "24/7 Access" },
    ],
  },
  ar: {
    heading: "\u062a\u062c\u0627\u0648\u0632 \u062d\u062f\u0648\u062f\u0643.",
    accent: "\u0623\u0639\u062f \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0645\u0645\u0643\u0646.",
    sub: "\u0627\u0646\u0636\u0645 \u0644\u0644\u062d\u0631\u0643\u0629. \u0645\u062f\u0631\u0628\u0648\u0646 \u0639\u0627\u0644\u0645\u064a\u0648\u0646 \u0648\u0645\u0631\u0627\u0641\u0642 \u0645\u062a\u0637\u0648\u0631\u0629 \u0648\u0645\u062c\u062a\u0645\u0639 \u064a\u062f\u0641\u0639\u0643 \u0644\u062a\u0643\u0648\u0646 \u0627\u0644\u0623\u0641\u0636\u0644 \u2014 \u0643\u0644 \u064a\u0648\u0645.",
    cta1: "\u0627\u0646\u0636\u0645 \u0627\u0644\u0622\u0646",
    cta2: "\u0639\u0631\u0636 \u0627\u0644\u062e\u0637\u0637",
    statValue: "10,000",
    statPrefix: "+",
    statSuffix: "",
    statLabel: "\u0639\u0636\u0648 \u0646\u0634\u0637",
    badges: [
      { icon: "medal" as const, label: "\u0645\u0639\u062f\u0627\u062a \u0623\u0648\u0644\u0645\u0628\u064a\u0629" },
      { icon: "users" as const, label: "\u0645\u062f\u0631\u0628\u0648\u0646 \u062e\u0628\u0631\u0627\u0621" },
      { icon: "clock" as const, label: "\u062f\u062e\u0648\u0644 24/7" },
    ],
  },
};

const badgeIcons = {
  medal: Medal,
  users: Users,
  clock: Clock,
};

export function Hero10({ language }: Hero10Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const countRef = useRef<number | null>(null);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // CountUp animation
  useEffect(() => {
    if (!isVisible) return;

    const target = 10000;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        countRef.current = requestAnimationFrame(animate);
      }
    };

    countRef.current = requestAnimationFrame(animate);
    return () => {
      if (countRef.current) cancelAnimationFrame(countRef.current);
    };
  }, [isVisible]);

  const formattedCount = count.toLocaleString();

  return (
    <>
      <style>{`
        @keyframes hero10FadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero10StripeScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(60px);
          }
        }

        .hero10-fadeUp {
          opacity: 0;
          animation: hero10FadeUp 400ms ease-out forwards;
        }

        .hero10-delay-0 { animation-delay: 0ms; }
        .hero10-delay-1 { animation-delay: 50ms; }
        .hero10-delay-2 { animation-delay: 100ms; }
        .hero10-delay-3 { animation-delay: 150ms; }
        .hero10-delay-4 { animation-delay: 200ms; }
        .hero10-delay-5 { animation-delay: 300ms; }
        .hero10-delay-6 { animation-delay: 350ms; }
        .hero10-delay-7 { animation-delay: 400ms; }

        .hero10-stripes {
          animation: hero10StripeScroll 30s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero10-fadeUp {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .hero10-stripes {
            animation: none;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundColor: "#0c0a09",
          fontFamily: isAr
            ? "var(--font-tajawal), sans-serif"
            : "var(--font-inter), sans-serif",
        }}
      >
        {/* Animated stripe background */}
        <div
          className="hero10-stripes absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 28px, rgba(255,255,255,0.04) 28px, rgba(255,255,255,0.04) 30px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col lg:flex-row">
            {/* Left side - content (55%) */}
            <div
              className={`flex-1 lg:flex-none flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28 ${isAr ? "lg:order-2" : ""}`}
              style={{ flexBasis: "55%" }}
            >
              {/* Zap icon */}
              {isVisible && (
                <div className="hero10-fadeUp hero10-delay-0 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #ef4444, #f97316)",
                    }}
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
              )}

              {/* Heading */}
              {isVisible && (
                <h1 className="hero10-fadeUp hero10-delay-1 mb-6">
                  <span
                    className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-tight"
                    style={{
                      color: "#fafaf9",
                      letterSpacing: "-0.02em",
                      fontFamily: isAr
                        ? "var(--font-changa), sans-serif"
                        : "var(--font-inter), sans-serif",
                    }}
                  >
                    {t.heading}
                  </span>
                  <span
                    className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-tight"
                    style={{
                      letterSpacing: "-0.02em",
                      background:
                        "linear-gradient(135deg, #ef4444, #f97316)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontFamily: isAr
                        ? "var(--font-changa), sans-serif"
                        : "var(--font-inter), sans-serif",
                    }}
                  >
                    {t.accent}
                  </span>
                </h1>
              )}

              {/* Subtitle */}
              {isVisible && (
                <p
                  className="hero10-fadeUp hero10-delay-2 text-base sm:text-lg max-w-lg mb-8"
                  style={{
                    color: "#a8a29e",
                    lineHeight: isAr ? "1.8" : "1.75",
                  }}
                >
                  {t.sub}
                </p>
              )}

              {/* CTAs */}
              {isVisible && (
                <div className="hero10-fadeUp hero10-delay-3 flex flex-wrap items-center gap-4 mb-12">
                  <button
                    className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-base transition-opacity duration-200 hover:opacity-90"
                    style={{
                      background:
                        "linear-gradient(135deg, #ef4444, #f97316)",
                      minHeight: "48px",
                    }}
                  >
                    <Zap className="w-5 h-5" />
                    {t.cta1}
                  </button>
                  <button
                    className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-opacity duration-200 hover:opacity-80"
                    style={{
                      color: "#fafaf9",
                      border: "1.5px solid #44403c",
                      backgroundColor: "transparent",
                      minHeight: "48px",
                    }}
                  >
                    {t.cta2}
                    <ArrowRight
                      className="w-5 h-5"
                      style={{
                        transform: isAr ? "scaleX(-1)" : "none",
                      }}
                    />
                  </button>
                </div>
              )}

              {/* Achievement badges */}
              {isVisible && (
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  {t.badges.map((badge, index) => {
                    const IconComponent = badgeIcons[badge.icon];
                    return (
                      <div
                        key={index}
                        className={`hero10-fadeUp hero10-delay-${5 + index} flex items-center gap-2.5`}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: "#1c1917" }}
                        >
                          <IconComponent
                            className="w-5 h-5"
                            style={{ color: "#f97316" }}
                          />
                        </div>
                        <span
                          className="text-sm font-medium"
                          style={{ color: "#d6d3d1" }}
                        >
                          {badge.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right side - gradient panel (45%) */}
            <div
              className={`relative flex-none hidden lg:flex items-center justify-center ${isAr ? "lg:order-1" : ""}`}
              style={{
                flexBasis: "45%",
                background: "linear-gradient(135deg, #ef4444, #f97316)",
                clipPath: isAr
                  ? "polygon(0 0, 85% 0, 100% 100%, 0 100%)"
                  : "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              {/* Large decorative number */}
              <div
                className="absolute inset-0 flex items-center justify-center overflow-hidden select-none pointer-events-none"
                aria-hidden="true"
              >
                <span
                  className="font-bold"
                  style={{
                    fontSize: "clamp(120px, 15vw, 220px)",
                    color: "rgba(255, 255, 255, 0.15)",
                    letterSpacing: "-0.02em",
                    fontFamily: isAr
                      ? "var(--font-changa), sans-serif"
                      : "var(--font-inter), sans-serif",
                  }}
                >
                  10K+
                </span>
              </div>

              {/* CountUp stat */}
              {isVisible && (
                <div className="hero10-fadeUp hero10-delay-4 relative z-10 text-center">
                  <div
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-3"
                    style={{
                      color: "#ffffff",
                      fontFamily: isAr
                        ? "var(--font-changa), sans-serif"
                        : "var(--font-inter), sans-serif",
                    }}
                  >
                    {t.statPrefix}{formattedCount}{t.statSuffix}
                  </div>
                  <div
                    className="text-lg sm:text-xl font-medium"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {t.statLabel}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile stat card */}
            <div className="lg:hidden px-6 sm:px-10 pb-12">
              {isVisible && (
                <div
                  className="hero10-fadeUp hero10-delay-4 rounded-2xl p-8 text-center"
                  style={{
                    background: "linear-gradient(135deg, #ef4444, #f97316)",
                  }}
                >
                  <div
                    className="text-4xl sm:text-5xl font-bold mb-2"
                    style={{
                      color: "#ffffff",
                      fontFamily: isAr
                        ? "var(--font-changa), sans-serif"
                        : "var(--font-inter), sans-serif",
                    }}
                  >
                    {t.statPrefix}{formattedCount}{t.statSuffix}
                  </div>
                  <div
                    className="text-base font-medium"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {t.statLabel}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
