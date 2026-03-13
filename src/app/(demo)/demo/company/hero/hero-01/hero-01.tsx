"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play, Shield, Globe, Users, Clock } from "lucide-react";

/* ── Types ─────────────────────────────────────────────────── */
interface HeroProps {
  language: "en" | "ar";
}

/* ── Content ───────────────────────────────────────────────── */
const content = {
  en: {
    badge: "Trusted by 500+ Companies",
    heading: "We Build Digital",
    headingAccent: "Experiences",
    headingEnd: "That Inspire",
    sub: "Transform your vision into reality with cutting-edge solutions that drive growth, engage audiences, and deliver measurable results.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Watch Demo",
    stats: [
      { value: 12, suffix: "+", label: "Years Experience", icon: Clock },
      { value: 500, suffix: "+", label: "Happy Clients", icon: Users },
      { value: 98, suffix: "%", label: "Satisfaction Rate", icon: Shield },
      { value: 50, suffix: "+", label: "Countries Served", icon: Globe },
    ],
  },
  ar: {
    badge: "موثوق من قبل +500 شركة",
    heading: "نبني تجارب",
    headingAccent: "رقمية",
    headingEnd: "تلهم العالم",
    sub: "حوّل رؤيتك إلى واقع مع حلول متطورة تدفع النمو وتجذب الجمهور وتحقق نتائج ملموسة.",
    ctaPrimary: "ابدأ الآن",
    ctaSecondary: "شاهد العرض",
    stats: [
      { value: 12, suffix: "+", label: "سنوات خبرة", icon: Clock },
      { value: 500, suffix: "+", label: "عميل سعيد", icon: Users },
      { value: 98, suffix: "%", label: "نسبة الرضا", icon: Shield },
      { value: 50, suffix: "+", label: "دولة نخدمها", icon: Globe },
    ],
  },
};

/* ── Floating particles (deterministic positions) ──────────── */
const particles = [
  { x: 5, y: 10, size: 3, color: "#845ec2", delay: 0, duration: 8 },
  { x: 15, y: 70, size: 2, color: "#d65db1", delay: 1.2, duration: 10 },
  { x: 25, y: 30, size: 4, color: "#ff6f91", delay: 0.5, duration: 7 },
  { x: 35, y: 85, size: 2, color: "#ffc75f", delay: 2, duration: 9 },
  { x: 45, y: 20, size: 3, color: "#f9f871", delay: 0.8, duration: 11 },
  { x: 55, y: 60, size: 2, color: "#ff9671", delay: 1.5, duration: 8 },
  { x: 65, y: 45, size: 3, color: "#845ec2", delay: 0.3, duration: 10 },
  { x: 75, y: 80, size: 2, color: "#d65db1", delay: 2.5, duration: 7 },
  { x: 82, y: 15, size: 4, color: "#ff6f91", delay: 1, duration: 9 },
  { x: 90, y: 55, size: 2, color: "#ffc75f", delay: 0.7, duration: 11 },
  { x: 10, y: 90, size: 3, color: "#f9f871", delay: 1.8, duration: 8 },
  { x: 30, y: 50, size: 2, color: "#ff9671", delay: 2.2, duration: 10 },
  { x: 50, y: 5, size: 3, color: "#845ec2", delay: 0.4, duration: 9 },
  { x: 70, y: 35, size: 2, color: "#d65db1", delay: 1.6, duration: 7 },
  { x: 88, y: 75, size: 3, color: "#ffc75f", delay: 2.8, duration: 11 },
  { x: 20, y: 42, size: 2, color: "#ff6f91", delay: 0.9, duration: 8 },
  { x: 60, y: 88, size: 3, color: "#f9f871", delay: 1.3, duration: 10 },
  { x: 40, y: 65, size: 2, color: "#ff9671", delay: 2.1, duration: 9 },
];

/* ── CountUp hook ──────────────────────────────────────────── */
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

/* ── Stat card with countUp ────────────────────────────────── */
function StatCard({
  value,
  suffix,
  label,
  icon: Icon,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  delay: number;
}) {
  const count = useCountUp(value, 2000 + delay * 500);
  return (
    <div className="group text-center">
      <div
        className="mx-auto mb-3 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: "rgba(255, 199, 95, 0.1)" }}
      >
        <Icon className="w-5 h-5" style={{ color: "#ffc75f" }} />
      </div>
      <div
        className="text-2xl md:text-3xl font-bold"
        style={{
          background: "linear-gradient(135deg, #ffc75f, #ff9671)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
}

/* ── Main component ────────────────────────────────────────── */
export function Hero01({ language }: HeroProps) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        /* ── Aurora ribbons ──────────────────────── */
        @keyframes auroraRibbon1 {
          0%, 100% { transform: translateX(-10%) translateY(0%) rotate(-8deg) scaleX(1.2); }
          25% { transform: translateX(5%) translateY(-8%) rotate(-3deg) scaleX(1.4); }
          50% { transform: translateX(-5%) translateY(5%) rotate(-12deg) scaleX(1.1); }
          75% { transform: translateX(8%) translateY(-3%) rotate(-6deg) scaleX(1.3); }
        }
        @keyframes auroraRibbon2 {
          0%, 100% { transform: translateX(10%) translateY(5%) rotate(5deg) scaleX(1.3); }
          25% { transform: translateX(-8%) translateY(-5%) rotate(10deg) scaleX(1.1); }
          50% { transform: translateX(5%) translateY(8%) rotate(3deg) scaleX(1.5); }
          75% { transform: translateX(-3%) translateY(-2%) rotate(8deg) scaleX(1.2); }
        }
        @keyframes auroraRibbon3 {
          0%, 100% { transform: translateX(5%) translateY(-5%) rotate(-15deg) scaleX(1.1); }
          33% { transform: translateX(-10%) translateY(5%) rotate(-10deg) scaleX(1.4); }
          66% { transform: translateX(8%) translateY(-8%) rotate(-18deg) scaleX(1.2); }
        }
        @keyframes auroraRibbon4 {
          0%, 100% { transform: translateX(-5%) translateY(3%) rotate(12deg) scaleX(1.5); }
          50% { transform: translateX(10%) translateY(-5%) rotate(8deg) scaleX(1.1); }
        }

        /* ── Floating particles ──────────────────── */
        @keyframes particleFloat {
          0% { transform: translateY(0px) scale(1); opacity: 0.4; }
          25% { opacity: 0.8; }
          50% { transform: translateY(-40px) scale(1.2); opacity: 0.6; }
          75% { opacity: 0.9; }
          100% { transform: translateY(-80px) scale(0.8); opacity: 0.3; }
        }

        /* ── Badge shimmer ───────────────────────── */
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        /* ── Glow pulse on CTA ───────────────────── */
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 199, 95, 0.3), 0 0 40px rgba(255, 199, 95, 0.1); }
          50% { box-shadow: 0 0 30px rgba(255, 199, 95, 0.5), 0 0 60px rgba(255, 199, 95, 0.2); }
        }

        /* ── Fade in up ──────────────────────────── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .aurora-fade-in { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .aurora-fade-in-d1 { animation-delay: 0.1s; }
        .aurora-fade-in-d2 { animation-delay: 0.25s; }
        .aurora-fade-in-d3 { animation-delay: 0.4s; }
        .aurora-fade-in-d4 { animation-delay: 0.6s; }
        .aurora-fade-in-d5 { animation-delay: 0.8s; }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#0a0612" }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* ── Aurora ribbon layers ──────────────────────── */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Ribbon 1 — top area, full palette */}
          <div
            className="absolute w-[140%] h-[300px]"
            style={{
              top: "5%",
              left: "-20%",
              background:
                "linear-gradient(90deg, #845ec2 0%, #d65db1 20%, #ff6f91 40%, #ff9671 60%, #ffc75f 80%, #f9f871 100%)",
              filter: "blur(80px)",
              opacity: 0.25,
              animation: "auroraRibbon1 20s ease-in-out infinite",
            }}
          />
          {/* Ribbon 2 — mid area, reversed palette */}
          <div
            className="absolute w-[130%] h-[250px]"
            style={{
              top: "35%",
              left: "-15%",
              background:
                "linear-gradient(90deg, #f9f871 0%, #ffc75f 25%, #ff6f91 50%, #d65db1 75%, #845ec2 100%)",
              filter: "blur(100px)",
              opacity: 0.2,
              animation: "auroraRibbon2 25s ease-in-out infinite",
            }}
          />
          {/* Ribbon 3 — lower area, warm subset */}
          <div
            className="absolute w-[120%] h-[200px]"
            style={{
              top: "60%",
              left: "-10%",
              background:
                "linear-gradient(90deg, #ff9671 0%, #ffc75f 30%, #f9f871 60%, #ff6f91 100%)",
              filter: "blur(90px)",
              opacity: 0.18,
              animation: "auroraRibbon3 18s ease-in-out infinite",
            }}
          />
          {/* Ribbon 4 — bottom accent, purple-magenta */}
          <div
            className="absolute w-[150%] h-[280px]"
            style={{
              top: "75%",
              left: "-25%",
              background:
                "linear-gradient(90deg, #845ec2 0%, #d65db1 40%, #ff6f91 70%, #845ec2 100%)",
              filter: "blur(110px)",
              opacity: 0.15,
              animation: "auroraRibbon4 22s ease-in-out infinite",
            }}
          />
        </div>

        {/* ── Grain overlay ────────────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.04,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* ── Floating particles ───────────────────────── */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
                animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* ── Content ──────────────────────────────────── */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          {/* Badge */}
          <div className="aurora-fade-in aurora-fade-in-d1 inline-flex items-center gap-2 mb-8">
            <div
              className="px-5 py-2 rounded-full text-sm font-medium"
              style={{
                background:
                  "linear-gradient(90deg, rgba(132,94,194,0.15), rgba(255,199,95,0.15))",
                border: "1px solid rgba(132, 94, 194, 0.3)",
                color: "#ffc75f",
                backgroundSize: "200% auto",
              }}
            >
              <span
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,199,95,0.3) 50%, transparent 100%)",
                  backgroundSize: "200% auto",
                  animation: "shimmer 3s linear infinite",
                  WebkitBackgroundClip: "text",
                }}
              >
                {t.badge}
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1
            className={`aurora-fade-in aurora-fade-in-d2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 ${
              isAr ? "font-[family-name:var(--font-changa)]" : "font-[family-name:var(--font-inter)]"
            }`}
          >
            <span className="text-white">{t.heading} </span>
            <span
              style={{
                background:
                  "linear-gradient(135deg, #845ec2, #d65db1, #ff6f91, #ff9671, #ffc75f, #f9f871)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% 200%",
              }}
            >
              {t.headingAccent}
            </span>
            <br />
            <span className="text-white">{t.headingEnd}</span>
          </h1>

          {/* Subheading */}
          <p
            className={`aurora-fade-in aurora-fade-in-d3 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${
              isAr ? "font-[family-name:var(--font-tajawal)]" : ""
            }`}
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div
            className={`aurora-fade-in aurora-fade-in-d4 flex flex-wrap items-center justify-center gap-4 mb-16 ${
              isAr ? "flex-row-reverse" : ""
            }`}
          >
            {/* Primary CTA */}
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold transition-all duration-300 cursor-pointer"
              style={{
                background: "#ffc75f",
                color: "#0a0612",
                animation: "glowPulse 3s ease-in-out infinite",
              }}
            >
              {t.ctaPrimary}
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                  isAr ? "rotate-180 group-hover:-translate-x-1" : ""
                }`}
              />
            </a>

            {/* Secondary CTA */}
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-medium transition-all duration-300 cursor-pointer"
              style={{
                background: "rgba(132, 94, 194, 0.15)",
                color: "#fff",
                border: "1px solid rgba(132, 94, 194, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(132, 94, 194, 0.25)";
                e.currentTarget.style.borderColor = "rgba(132, 94, 194, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(132, 94, 194, 0.15)";
                e.currentTarget.style.borderColor = "rgba(132, 94, 194, 0.4)";
              }}
            >
              <Play className="w-4 h-4" style={{ color: "#d65db1" }} />
              {t.ctaSecondary}
            </a>
          </div>

          {/* Stats */}
          <div className="aurora-fade-in aurora-fade-in-d5">
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto px-6 py-8 rounded-3xl"
              style={{
                background: "rgba(10, 6, 18, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(132, 94, 194, 0.15)",
              }}
            >
              {t.stats.map((stat, i) => (
                <StatCard
                  key={i}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  icon={stat.icon}
                  delay={i}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom gradient fade ─────────────────────── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #0a0612 0%, transparent 100%)",
          }}
        />
      </section>
    </>
  );
}
