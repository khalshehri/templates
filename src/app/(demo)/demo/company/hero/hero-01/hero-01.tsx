"use client";

import { useState, useEffect, useRef } from "react";
import { Layers, ArrowRight, Play } from "lucide-react";

interface Hero01Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Introducing Nexus 3.0",
    heading: "The platform for modern enterprise",
    sub: "Unify your operations, automate workflows, and scale with confidence. Built for teams that move fast.",
    cta1: "Get Started",
    cta2: "Book a Demo",
    stats: [
      { value: 10000, suffix: "+", label: "Teams" },
      { value: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
      { value: 4.8, suffix: "", label: "Rating", decimals: 1 },
      { value: 150, suffix: "+", label: "Countries" },
    ],
    productRows: [
      { name: "Pipeline Alpha", status: "active" },
      { name: "Revenue Sync", status: "active" },
      { name: "User Analytics", status: "pending" },
      { name: "Deployment CI/CD", status: "active" },
      { name: "Security Audit", status: "warning" },
    ],
  },
  ar: {
    badge: "تقديم نكسس 3.0",
    heading: "المنصة للمؤسسات الحديثة",
    sub: "وحّد عملياتك، وأتمت سير العمل، وتوسع بثقة. مصممة للفرق سريعة الحركة.",
    cta1: "ابدأ الآن",
    cta2: "احجز عرضاً",
    stats: [
      { value: 10000, suffix: "+", label: "فريق" },
      { value: 99.9, suffix: "%", label: "وقت التشغيل", decimals: 1 },
      { value: 4.8, suffix: "", label: "التقييم", decimals: 1 },
      { value: 150, suffix: "+", label: "دولة" },
    ],
    productRows: [
      { name: "خط الأنابيب ألفا", status: "active" },
      { name: "مزامنة الإيرادات", status: "active" },
      { name: "تحليلات المستخدم", status: "pending" },
      { name: "نشر CI/CD", status: "active" },
      { name: "تدقيق الأمان", status: "warning" },
    ],
  },
};

function useCountUp(
  end: number,
  duration: number = 2000,
  decimals: number = 0
) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Number((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, decimals]);

  return count;
}

export function Hero01({ language }: Hero01Props) {
  const t = content[language];
  const isAr = language === "ar";

  const stat0 = useCountUp(t.stats[0].value, 2000, 0);
  const stat1 = useCountUp(t.stats[1].value, 2000, t.stats[1].decimals ?? 0);
  const stat2 = useCountUp(t.stats[2].value, 2000, t.stats[2].decimals ?? 0);
  const stat3 = useCountUp(t.stats[3].value, 2000, 0);
  const statValues = [stat0, stat1, stat2, stat3];

  const statusColors: Record<string, string> = {
    active: "#22c55e",
    pending: "#eab308",
    warning: "#f97316",
  };

  return (
    <>
      <style>{`
        @keyframes nexus-fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes nexus-orbBreathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.12; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.2; }
        }
        @keyframes nexus-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .nexus-fadeUp {
          animation: nexus-fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .nexus-delay-1 { animation-delay: 0.1s; }
        .nexus-delay-2 { animation-delay: 0.2s; }
        .nexus-delay-3 { animation-delay: 0.35s; }
        .nexus-delay-4 { animation-delay: 0.5s; }
        .nexus-delay-5 { animation-delay: 0.65s; }
        .nexus-delay-6 { animation-delay: 0.8s; }
        .nexus-delay-7 { animation-delay: 0.95s; }
        @media (prefers-reduced-motion: reduce) {
          .nexus-fadeUp {
            animation: none;
            opacity: 1;
          }
          .nexus-orb, .nexus-product-card {
            animation: none !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(180deg, #050507 0%, #0a0a1a 100%)",
          fontFamily: isAr ? "var(--font-cairo)" : "var(--font-inter)",
        }}
      >
        {/* Ambient Orb */}
        <div
          className="nexus-orb absolute pointer-events-none"
          style={{
            width: "700px",
            height: "700px",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(167,139,250,0.1) 40%, transparent 70%)",
            filter: "blur(150px)",
            animation: "nexus-orbBreathe 8s ease-in-out infinite",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 sm:py-32 lg:py-40 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="nexus-fadeUp nexus-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-md mb-8">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span
              className="text-sm text-indigo-300"
              style={{ letterSpacing: "0.02em" }}
            >
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="nexus-fadeUp nexus-delay-2 max-w-4xl"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#ededed",
            }}
          >
            {t.heading}
          </h1>

          {/* Subtitle */}
          <p
            className="nexus-fadeUp nexus-delay-3 mt-6 max-w-2xl text-lg sm:text-xl"
            style={{ color: "#a1a1aa", fontWeight: 300, lineHeight: 1.7 }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div className="nexus-fadeUp nexus-delay-4 flex flex-wrap items-center justify-center gap-4 mt-10">
            <button
              className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-medium text-sm transition-all hover:brightness-110 active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                boxShadow:
                  "0 0 30px rgba(99,102,241,0.3), 0 0 60px rgba(99,102,241,0.1)",
              }}
            >
              {t.cta1}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium transition-all hover:bg-white/[0.08] active:scale-[0.98]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#d4d4d8",
              }}
            >
              <Play className="w-4 h-4" />
              {t.cta2}
            </button>
          </div>

          {/* Product Preview Card */}
          <div
            className="nexus-fadeUp nexus-delay-5 mt-16 w-full max-w-2xl rounded-2xl p-[1px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(255,255,255,0.05), rgba(167,139,250,0.15))",
            }}
          >
            <div
              className="nexus-product-card rounded-2xl p-6"
              style={{
                background: "rgba(10,10,26,0.8)",
                backdropFilter: "blur(40px)",
                animation: "nexus-float 6s ease-in-out infinite",
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(99,102,241,0.15)",
                    color: "#818cf8",
                  }}
                >
                  Dashboard
                </span>
              </div>

              {/* Product rows */}
              <div className="space-y-3">
                {t.productRows.map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-4 py-3 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: "#d4d4d8", fontWeight: 400 }}
                    >
                      {row.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: statusColors[row.status] }}
                      />
                      <span className="text-xs" style={{ color: "#71717a" }}>
                        {row.status === "active"
                          ? isAr
                            ? "نشط"
                            : "Active"
                          : row.status === "pending"
                            ? isAr
                              ? "قيد الانتظار"
                              : "Pending"
                            : isAr
                              ? "تحذير"
                              : "Warning"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Logos */}
          <div className="nexus-fadeUp nexus-delay-6 mt-16 flex flex-wrap items-center justify-center gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg"
                style={{
                  width: `${70 + i * 10}px`,
                  height: "28px",
                  background: "rgba(255,255,255,0.06)",
                  opacity: 0.3,
                }}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="nexus-fadeUp nexus-delay-7 mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 w-full max-w-2xl">
            {t.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: "#ededed", letterSpacing: "-0.02em" }}
                >
                  {stat.decimals
                    ? statValues[i].toFixed(stat.decimals)
                    : Math.floor(statValues[i]).toLocaleString()}
                  {stat.suffix}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "#71717a", fontWeight: 400 }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
