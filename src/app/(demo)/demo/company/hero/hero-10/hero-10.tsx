"use client";

import { useState, useEffect } from "react";
import { Zap } from "lucide-react";

interface Hero10Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "PUSH YOUR LIMITS.",
    accent: "REDEFINE POSSIBLE.",
    sub: "World-class trainers, cutting-edge facilities, and a community that drives you to be extraordinary.",
    cta1: "Join Now",
    cta2: "View Plans",
    badges: ["Olympic Equipment", "Expert Trainers", "24/7 Access"],
    statNumber: "10,000+",
    statLabel: "Active Members",
    decorative: "10K",
  },
  ar: {
    heading: "تجاوز حدودك.",
    accent: "أعد تعريف الممكن.",
    sub: "مدربون عالميون ومرافق متطورة ومجتمع يدفعك لتكون استثنائياً.",
    cta1: "انضم الآن",
    cta2: "عرض الخطط",
    badges: ["معدات أولمبية", "مدربون خبراء", "دخول 24/7"],
    statNumber: "+10,000",
    statLabel: "عضو نشط",
    decorative: "10K",
  },
};

export function Hero10({ language }: Hero10Props) {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const target = 10000;
    const duration = 2500;
    const steps = 80;
    const stepTime = duration / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - (1 - progress) * (1 - progress) * (1 - progress);
      setCount(target * eased);
      if (step >= steps) {
        clearInterval(interval);
        setCount(target);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [mounted]);

  const formattedCount =
    count >= 10000
      ? isAr
        ? "+10,000"
        : "10,000+"
      : count
          .toFixed(0)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <style>{`
        @keyframes hero10-stripes {
          0% { transform: translateX(0); }
          100% { transform: translateX(80px); }
        }
        @keyframes hero10-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }
        @keyframes hero10-fadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero10-slideUp {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero10-stripes, .hero10-pulse, .hero10-fade, .hero10-badge {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden"
        style={{
          background: "#0a0a0a",
          fontFamily: isAr
            ? "var(--font-tajawal)"
            : "var(--font-inter)",
        }}
      >
        {/* Animated stripe background */}
        <div
          className="hero10-stripes absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(45deg, transparent, transparent 38px, rgba(255,255,255,0.04) 38px, rgba(255,255,255,0.04) 40px)",
            animation: "hero10-stripes 25s linear infinite",
          }}
        />

        {/* Gradient diagonal side */}
        <div
          className="hero10-pulse absolute top-0 bottom-0 hidden lg:block"
          style={{
            right: isAr ? "auto" : "0",
            left: isAr ? "0" : "auto",
            width: "45%",
            background: "linear-gradient(135deg, #ef4444, #f97316)",
            clipPath: isAr
              ? "polygon(0 0, 80% 0, 100% 100%, 0 100%)"
              : "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
            animation: "hero10-pulse 3s ease-in-out infinite",
          }}
        >
          {/* Decorative large text */}
          <div
            className="absolute inset-0 flex items-center justify-center select-none"
            style={{
              fontSize: "clamp(8rem, 20vw, 16rem)",
              fontWeight: 900,
              color: "rgba(255,255,255,0.06)",
              letterSpacing: "-0.04em",
              fontFamily: isAr
                ? "var(--font-changa)"
                : "var(--font-inter)",
            }}
          >
            {t.decorative}
          </div>

          {/* Counter stat on gradient */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <div
              className="text-5xl lg:text-6xl font-bold text-white mb-2"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}
            >
              {formattedCount}
            </div>
            <div
              className="text-white/80 text-lg font-medium"
            >
              {t.statLabel}
            </div>
          </div>
        </div>

        {/* Mobile gradient strip */}
        <div
          className="lg:hidden w-full py-16 flex flex-col items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #ef4444, #f97316)",
          }}
        >
          <div className="text-4xl font-bold text-white mb-1">
            {formattedCount}
          </div>
          <div className="text-white/80 text-base font-medium">
            {t.statLabel}
          </div>
        </div>

        {/* Left content (55%) */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-28"
        >
          <div
            className="w-full lg:w-[55%] space-y-8"
            style={{
              marginLeft: isAr ? "auto" : undefined,
              marginRight: isAr ? undefined : undefined,
            }}
          >
            {/* Heading */}
            <div
              className="hero10-fade"
              style={{
                opacity: mounted ? 1 : 0,
                animation: mounted
                  ? "hero10-fadeUp 0.7s ease-out forwards"
                  : "none",
              }}
            >
              <h1
                className="font-extrabold uppercase leading-tight"
                style={{
                  fontSize: "clamp(2rem, 6vw, 4rem)",
                  color: "#fafafa",
                  letterSpacing: "-0.02em",
                  fontFamily: isAr
                    ? "var(--font-changa)"
                    : "var(--font-inter)",
                }}
              >
                {t.heading}
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #ef4444, #f97316)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t.accent}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="hero10-fade text-lg max-w-md leading-relaxed"
              style={{
                color: "#737373",
                fontWeight: 300,
                opacity: mounted ? 1 : 0,
                animation: mounted
                  ? "hero10-fadeUp 0.7s ease-out 0.15s forwards"
                  : "none",
                animationFillMode: "backwards",
              }}
            >
              {t.sub}
            </p>

            {/* CTAs */}
            <div
              className="hero10-fade flex flex-wrap gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                animation: mounted
                  ? "hero10-fadeUp 0.7s ease-out 0.3s forwards"
                  : "none",
                animationFillMode: "backwards",
              }}
            >
              <button
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base cursor-pointer transition-transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(90deg, #ef4444, #f97316)",
                  color: "#ffffff",
                }}
              >
                <Zap className="w-5 h-5" />
                {t.cta1}
              </button>
              <button
                className="px-8 py-3.5 rounded-xl font-semibold text-base cursor-pointer transition-transform hover:scale-[1.02]"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fafafa",
                }}
              >
                {t.cta2}
              </button>
            </div>

            {/* Achievement badges */}
            <div
              className="hero10-fade flex flex-wrap gap-3 pt-4"
              style={{
                opacity: mounted ? 1 : 0,
                animation: mounted
                  ? "hero10-fadeUp 0.7s ease-out 0.45s forwards"
                  : "none",
                animationFillMode: "backwards",
              }}
            >
              {t.badges.map((badge, i) => (
                <span
                  key={i}
                  className="hero10-badge px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fafafa",
                    opacity: mounted ? 1 : 0,
                    animation: mounted
                      ? `hero10-slideUp 0.5s ease-out ${
                          0.6 + i * 0.1
                        }s forwards`
                      : "none",
                    animationFillMode: "backwards",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
