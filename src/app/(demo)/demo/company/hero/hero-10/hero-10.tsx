"use client";

import { useState, useEffect, useRef } from "react";
import { Zap, ArrowRight, Dumbbell, Users, Clock } from "lucide-react";

const content = {
  en: {
    heading: "PUSH YOUR",
    headingLine2: "LIMITS.",
    accent: "REDEFINE POSSIBLE.",
    sub: "World-class trainers, cutting-edge facilities, and a community that pushes you to be your best.",
    cta1: "Join Now",
    cta2: "View Plans",
    counterLabel: "Active Members",
    badges: [
      { icon: Dumbbell, label: "Olympic Equipment" },
      { icon: Users, label: "Expert Trainers" },
      { icon: Clock, label: "24/7 Access" },
    ],
  },
  ar: {
    heading: "تجاوز",
    headingLine2: "حدودك.",
    accent: "أعد تعريف الممكن.",
    sub: "مدربون عالميون ومرافق متطورة ومجتمع يدفعك لتكون الأفضل.",
    cta1: "انضم الآن",
    cta2: "عرض الخطط",
    counterLabel: "عضو نشط",
    badges: [
      { icon: Dumbbell, label: "معدات أولمبية" },
      { icon: Users, label: "مدربون خبراء" },
      { icon: Clock, label: "دخول 24/7" },
    ],
  },
};

function useCountUp(target: number, duration: number, start: boolean): number {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    setCount(0);
    const startTime = performance.now();

    function tick() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - (1 - progress) * (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, start]);

  return count;
}

export function Hero10({ language }: { language: "en" | "ar" }) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";
  const count = useCountUp(10000, 2000, mounted);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hero10FadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero10FadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes hero10Stripes {
          from { transform: translateX(0); }
          to { transform: translateX(80px); }
        }
        @keyframes hero10Pulse {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero10-animate { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero10-stripes { animation: none !important; }
          .hero10-pulse { animation: none !important; }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        {/* Animated diagonal stripes background */}
        <div
          className="hero10-stripes absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px)",
            backgroundSize: "56.57px 56.57px",
            animation: mounted ? "hero10Stripes 20s linear infinite" : "none",
          }}
        />

        {/* Layout container */}
        <div className="relative min-h-screen flex flex-col lg:flex-row">
          {/* Left content — 55% */}
          <div
            className={`relative z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24 py-24 sm:py-32 lg:py-40 w-full lg:w-[55%] ${isAr ? "lg:order-2" : "lg:order-1"}`}
          >
            {/* Zap icon */}
            <div
              className="hero10-animate mb-8"
              style={{
                animation: mounted ? "hero10FadeUp 600ms cubic-bezier(0.16,1,0.3,1) forwards" : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              <Zap size={28} strokeWidth={1.5} style={{ color: "#ef4444" }} />
            </div>

            {/* Heading */}
            <h1
              className={`hero10-animate ${isAr ? "font-[family-name:var(--font-changa)]" : "font-[family-name:var(--font-inter)]"}`}
              style={{
                animation: mounted ? "hero10FadeUp 600ms cubic-bezier(0.16,1,0.3,1) 150ms both" : "none",
                opacity: mounted ? undefined : 0,
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "#fafafa",
              }}
            >
              {t.heading}
              <br />
              {t.headingLine2}
            </h1>

            {/* Accent line with gradient */}
            <h2
              className={`hero10-animate mt-2 ${isAr ? "font-[family-name:var(--font-changa)]" : "font-[family-name:var(--font-inter)]"}`}
              style={{
                animation: mounted ? "hero10FadeUp 600ms cubic-bezier(0.16,1,0.3,1) 300ms both" : "none",
                opacity: mounted ? undefined : 0,
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                background: "linear-gradient(135deg, #ef4444, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.accent}
            </h2>

            {/* Subtitle */}
            <p
              className={`hero10-animate max-w-lg mt-6 mb-8 leading-relaxed ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              style={{
                animation: mounted ? "hero10FadeUp 600ms cubic-bezier(0.16,1,0.3,1) 450ms both" : "none",
                opacity: mounted ? undefined : 0,
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                fontWeight: 300,
                color: "#737373",
              }}
            >
              {t.sub}
            </p>

            {/* CTAs */}
            <div
              className="hero10-animate flex flex-wrap items-center gap-4 mb-10"
              style={{
                animation: mounted ? "hero10FadeUp 600ms cubic-bezier(0.16,1,0.3,1) 600ms both" : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              {/* Primary CTA — gradient */}
              <button
                className={`cursor-pointer px-8 py-3.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:scale-[1.02] active:scale-[0.98] ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
                style={{
                  background: "linear-gradient(135deg, #ef4444, #f97316)",
                  minHeight: "44px",
                }}
              >
                {t.cta1}
              </button>

              {/* Secondary CTA — ghost */}
              <button
                className={`cursor-pointer px-8 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 active:scale-[0.98] ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
                style={{
                  border: "1px solid rgba(250, 250, 250, 0.15)",
                  color: "#fafafa",
                  minHeight: "44px",
                  background: "transparent",
                }}
              >
                {t.cta2}
              </button>
            </div>

            {/* Achievement badges */}
            <div
              className="hero10-animate flex flex-wrap gap-3"
              style={{
                animation: mounted ? "hero10FadeUp 600ms cubic-bezier(0.16,1,0.3,1) 750ms both" : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              {t.badges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  <badge.icon size={14} strokeWidth={1.5} style={{ color: "#f97316" }} />
                  <span
                    className={`text-xs ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
                    style={{ color: "#a3a3a3" }}
                  >
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right gradient panel — 45% with diagonal clip */}
          <div
            className={`hero10-pulse relative w-full lg:w-[45%] min-h-[300px] lg:min-h-full flex items-center justify-center ${isAr ? "lg:order-1" : "lg:order-2"}`}
            style={{
              background: "linear-gradient(135deg, #ef4444, #f97316)",
              clipPath: isAr
                ? "polygon(0 0, 80% 0, 100% 100%, 0 100%)"
                : "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
              animation: mounted ? "hero10Pulse 4s ease-in-out infinite" : "none",
            }}
          >
            {/* Large decorative number */}
            <div
              className="hero10-animate absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              style={{
                animation: mounted ? "hero10FadeIn 1000ms cubic-bezier(0.16,1,0.3,1) 500ms both" : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              <span
                className="font-[family-name:var(--font-inter)]"
                style={{
                  fontSize: "clamp(6rem, 14vw, 14rem)",
                  fontWeight: 900,
                  color: "rgba(255, 255, 255, 0.08)",
                  letterSpacing: "-0.04em",
                }}
              >
                10K+
              </span>
            </div>

            {/* CountUp content */}
            <div
              className="hero10-animate relative z-10 text-center px-8"
              style={{
                animation: mounted ? "hero10FadeUp 600ms cubic-bezier(0.16,1,0.3,1) 800ms both" : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              <div
                className="font-[family-name:var(--font-inter)]"
                style={{
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  textShadow: "0 2px 20px rgba(0,0,0,0.15)",
                }}
              >
                {count.toLocaleString()}+
              </div>
              <p
                className={`mt-3 text-white/80 text-base sm:text-lg font-light ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.counterLabel}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
