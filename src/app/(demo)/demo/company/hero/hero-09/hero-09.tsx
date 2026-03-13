"use client";

import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";

interface Hero09Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Trusted by 500+ Institutions",
    headingStart: "Where capital meets",
    headingAccent: "conviction",
    sub: "Institutional-grade wealth management powered by quantitative precision and strategic foresight.",
    cta1: "Start Investing",
    cta2: "View Performance",
    stats: [
      { value: "$4.2B", label: "Assets Managed" },
      { value: "18.7%", label: "Annual Returns" },
      { value: "2,400+", label: "Active Clients" },
    ],
  },
  ar: {
    badge: "موثوق من 500+ مؤسسة",
    headingStart: "حيث يلتقي رأس المال",
    headingAccent: "بالقناعة",
    sub: "إدارة ثروات بمستوى مؤسسي مدعومة بالدقة الكمية والرؤية الاستراتيجية.",
    cta1: "ابدأ الاستثمار",
    cta2: "عرض الأداء",
    stats: [
      { value: "4.2 مليار$", label: "الأصول المدارة" },
      { value: "18.7%", label: "العوائد السنوية" },
      { value: "+2,400", label: "عميل نشط" },
    ],
  },
};

const orbConfigs = [
  { color: "#3b82f6", size: 500, top: "10%", left: "15%", dur: 20 },
  { color: "#8b5cf6", size: 450, top: "60%", left: "70%", dur: 25 },
  { color: "#06b6d4", size: 550, top: "30%", left: "55%", dur: 30 },
  { color: "#ec4899", size: 400, top: "70%", left: "20%", dur: 18 },
  { color: "#6366f1", size: 480, top: "15%", left: "80%", dur: 28 },
];

export function Hero09({ language }: Hero09Props) {
  const [mounted, setMounted] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const targets = [4.2, 18.7, 2400];
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - (1 - progress) * (1 - progress);
      setCounts(targets.map((target) => target * eased));
      if (step >= steps) {
        clearInterval(interval);
        setCounts(targets);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [mounted]);

  const formatStat = (index: number, value: number): string => {
    if (index === 0) {
      return isAr
        ? `${value.toFixed(1)} مليار$`
        : `$${value.toFixed(1)}B`;
    }
    if (index === 1) return `${value.toFixed(1)}%`;
    const rounded = value >= 2400 ? "2,400+" : value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return isAr ? `+${rounded.replace("+", "")}` : rounded;
  };

  return (
    <>
      <style>{`
        @keyframes hero09-orb0 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(60px, -40px); }
          50% { transform: translate(-30px, 50px); }
          75% { transform: translate(40px, 20px); }
        }
        @keyframes hero09-orb1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-50px, 30px); }
          50% { transform: translate(40px, -60px); }
          75% { transform: translate(-20px, -30px); }
        }
        @keyframes hero09-orb2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, 50px); }
          50% { transform: translate(-60px, -20px); }
          75% { transform: translate(50px, -40px); }
        }
        @keyframes hero09-orb3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-40px, -50px); }
          50% { transform: translate(50px, 30px); }
          75% { transform: translate(-30px, 60px); }
        }
        @keyframes hero09-orb4 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(45px, 35px); }
          50% { transform: translate(-35px, -45px); }
          75% { transform: translate(-50px, 25px); }
        }
        @keyframes hero09-fadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero09-orb, .hero09-fade {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
        style={{
          background: "#030014",
          fontFamily: isAr ? "var(--font-cairo)" : "var(--font-inter)",
        }}
      >
        {/* Gradient mesh orbs */}
        <div className="absolute inset-0 pointer-events-none">
          {orbConfigs.map((orb, i) => (
            <div
              key={i}
              className="hero09-orb absolute rounded-full"
              style={{
                width: `${orb.size}px`,
                height: `${orb.size}px`,
                top: orb.top,
                left: orb.left,
                background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                filter: "blur(120px)",
                opacity: 0.17,
                animation: `hero09-orb${i} ${orb.dur}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
          {/* Badge */}
          <div
            className="hero09-fade inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8",
              fontSize: "0.875rem",
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? "hero09-fadeUp 0.7s ease-out forwards"
                : "none",
            }}
          >
            <TrendingUp className="w-4 h-4" />
            {t.badge}
          </div>

          {/* Heading */}
          <h1
            className="hero09-fade font-bold leading-tight mb-6"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              color: "#f8fafc",
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? "hero09-fadeUp 0.7s ease-out 0.15s forwards"
                : "none",
              animationFillMode: "backwards",
            }}
          >
            {t.headingStart}{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.headingAccent}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero09-fade text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{
              color: "#94a3b8",
              fontWeight: 300,
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? "hero09-fadeUp 0.7s ease-out 0.3s forwards"
                : "none",
              animationFillMode: "backwards",
            }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div
            className="hero09-fade flex flex-wrap items-center justify-center gap-4 mb-16"
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? "hero09-fadeUp 0.7s ease-out 0.45s forwards"
                : "none",
              animationFillMode: "backwards",
            }}
          >
            <button
              className="px-8 py-3.5 rounded-2xl font-medium text-base cursor-pointer transition-transform hover:scale-[1.02]"
              style={{
                background: "#ffffff",
                color: "#030014",
              }}
            >
              {t.cta1}
            </button>
            <button
              className="px-8 py-3.5 rounded-2xl font-medium text-base cursor-pointer transition-transform hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#f8fafc",
              }}
            >
              {t.cta2}
            </button>
          </div>

          {/* Stat cards */}
          <div
            className="hero09-fade grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? "hero09-fadeUp 0.7s ease-out 0.6s forwards"
                : "none",
              animationFillMode: "backwards",
            }}
          >
            {t.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl px-6 py-5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="text-2xl lg:text-3xl font-bold mb-1"
                  style={{ color: "#f8fafc" }}
                >
                  {formatStat(i, counts[i])}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#94a3b8" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
