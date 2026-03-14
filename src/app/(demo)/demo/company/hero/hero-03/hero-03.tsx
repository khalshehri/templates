"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const content = {
  en: {
    left: "THINK",
    right: "DIFFERENT",
    leftCta: "Our Approach",
    rightCta: "Case Studies",
    overlay: "Where bold strategy meets operational precision",
    stats: [
      { value: 25, suffix: "+", label: "Years" },
      { value: 180, suffix: "", label: "Clients" },
      { value: 96, suffix: "%", label: "Retention" },
      { value: 12, suffix: "+", label: "Countries" },
    ],
  },
  ar: {
    left: "فكّر",
    right: "بشكل مختلف",
    leftCta: "نهجنا",
    rightCta: "دراسات الحالة",
    overlay: "حيث تلتقي الاستراتيجية الجريئة بالدقة التشغيلية",
    stats: [
      { value: 25, suffix: "+", label: "عاماً" },
      { value: 180, suffix: "+", label: "عميل" },
      { value: 96, suffix: "%", label: "معدل الاحتفاظ" },
      { value: 12, suffix: "+", label: "دولة" },
    ],
  },
};

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, start]);

  return count;
}

export function Hero03({ language }: { language: "en" | "ar" }) {
  const [mounted, setMounted] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    const statsTimer = setTimeout(() => setStatsVisible(true), 1200);
    return () => {
      clearTimeout(timer);
      clearTimeout(statsTimer);
    };
  }, []);

  const stat0 = useCountUp(t.stats[0].value, 2000, statsVisible);
  const stat1 = useCountUp(t.stats[1].value, 2200, statsVisible);
  const stat2 = useCountUp(t.stats[2].value, 1800, statsVisible);
  const stat3 = useCountUp(t.stats[3].value, 2000, statsVisible);
  const statValues = [stat0, stat1, stat2, stat3];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <style>{`
        @keyframes slideInLeft {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }

        @keyframes slideInRight {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }

        @keyframes dividerAppear {
          0% { opacity: 0; transform: scaleY(0); }
          100% { opacity: 1; transform: scaleY(1); }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 8px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.1); }
          50% { box-shadow: 0 0 16px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.2); }
        }

        @keyframes pillScale {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        @keyframes fadeSlideUp03 {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .hero03-left {
          animation: slideInLeft 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
        }
        .hero03-right {
          animation: slideInRight 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
        }
        .hero03-divider {
          animation: dividerAppear 0.6s ease-out 0.8s both;
          transform-origin: center;
        }
        .hero03-divider-inner {
          animation: glowPulse 3s ease-in-out infinite;
        }
        .hero03-pill {
          animation: pillScale 0.5s cubic-bezier(0.22, 1, 0.36, 1) 1.2s both;
        }
        .hero03-stat {
          animation: fadeSlideUp03 0.6s ease-out both;
        }
        .hero03-stat-0 { animation-delay: 1.4s; }
        .hero03-stat-1 { animation-delay: 1.5s; }
        .hero03-stat-2 { animation-delay: 1.6s; }
        .hero03-stat-3 { animation-delay: 1.7s; }

        .hero03-left-content {
          animation: fadeSlideUp03 0.7s ease-out 0.5s both;
        }
        .hero03-right-content {
          animation: fadeSlideUp03 0.7s ease-out 0.6s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero03-left,
          .hero03-right,
          .hero03-divider,
          .hero03-pill,
          .hero03-stat,
          .hero03-stat-0,
          .hero03-stat-1,
          .hero03-stat-2,
          .hero03-stat-3,
          .hero03-left-content,
          .hero03-right-content {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero03-pill {
            transform: translate(-50%, -50%) !important;
            opacity: 1 !important;
          }
          .hero03-divider-inner {
            animation: none !important;
          }
        }
      `}</style>

      {/* Main split area */}
      <div className="relative flex-1 flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
        {/* Left / Dark side */}
        <div
          className={`hero03-left relative flex-1 flex items-center justify-center px-8 sm:px-12 py-20 md:py-0 ${
            isAr ? "md:order-2" : "md:order-1"
          }`}
          style={{ backgroundColor: isAr ? "#ff6b6b" : "#1e1b4b" }}
        >
          <div
            className="hero03-left-content text-center md:text-left"
            style={{
              fontFamily: isAr
                ? "var(--font-changa)"
                : "var(--font-inter)",
            }}
          >
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mb-8"
              style={{ color: isAr ? "#1e1b4b" : "#ffffff" }}
            >
              {isAr ? t.right : t.left}
            </h2>
            <button
              className={`cursor-pointer group px-8 py-3 rounded-lg font-medium text-sm transition-all duration-300 border-2 ${
                isAr
                  ? "border-[#1e1b4b] text-[#1e1b4b] hover:bg-[#1e1b4b] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#1e1b4b]"
              }`}
            >
              <span
                className={`inline-flex items-center gap-2 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
              >
                {isAr ? t.rightCta : t.leftCta}
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                    isAr ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Center Divider */}
        <div
          className="hero03-divider hidden md:flex absolute top-0 bottom-0 z-30 items-center justify-center"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <div
            className="hero03-divider-inner w-[3px] h-full"
            style={{
              backgroundColor: "rgba(255,255,255,0.8)",
            }}
          />
        </div>

        {/* Overlay Pill */}
        <div
          className="hero03-pill absolute z-40 hidden md:block"
          style={{
            top: "50%",
            left: "50%",
          }}
        >
          <div
            className="backdrop-blur-xl rounded-full px-8 py-3 border whitespace-nowrap"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: "rgba(255,255,255,0.2)",
              fontFamily: isAr
                ? "var(--font-tajawal)"
                : "var(--font-inter)",
            }}
          >
            <span className="text-white text-sm font-medium drop-shadow-lg">
              {t.overlay}
            </span>
          </div>
        </div>

        {/* Right / Coral side */}
        <div
          className={`hero03-right relative flex-1 flex items-center justify-center px-8 sm:px-12 py-20 md:py-0 ${
            isAr ? "md:order-1" : "md:order-2"
          }`}
          style={{ backgroundColor: isAr ? "#1e1b4b" : "#ff6b6b" }}
        >
          <div
            className="hero03-right-content text-center md:text-left"
            style={{
              fontFamily: isAr
                ? "var(--font-changa)"
                : "var(--font-inter)",
            }}
          >
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mb-8"
              style={{ color: isAr ? "#ffffff" : "#1e1b4b" }}
            >
              {isAr ? t.left : t.right}
            </h2>
            <button
              className={`cursor-pointer group px-8 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                isAr
                  ? "bg-white text-[#1e1b4b] hover:bg-gray-100"
                  : "bg-[#1e1b4b] text-white hover:bg-[#2d2a5e]"
              }`}
            >
              <span
                className={`inline-flex items-center gap-2 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
              >
                {isAr ? t.leftCta : t.rightCta}
                <ArrowRight
                  className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                    isAr ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile overlay pill */}
        <div
          className="md:hidden px-6 py-4 text-center"
          style={{ backgroundColor: "#1e1b4b" }}
        >
          <div
            className="inline-block backdrop-blur-xl rounded-full px-6 py-2.5 border"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: "rgba(255,255,255,0.2)",
              fontFamily: isAr
                ? "var(--font-tajawal)"
                : "var(--font-inter)",
            }}
          >
            <span className="text-white text-xs sm:text-sm font-medium">
              {t.overlay}
            </span>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="relative z-10"
        style={{ backgroundColor: "#13112e" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {t.stats.map((stat, i) => (
              <div
                key={i}
                className={`hero03-stat hero03-stat-${i} text-center`}
                style={{
                  fontFamily: isAr
                    ? "var(--font-changa)"
                    : "var(--font-inter)",
                }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  {statValues[i]}
                  {stat.suffix}
                </div>
                <div
                  className="text-xs sm:text-sm uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accent line at top of stats */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,107,107,0.5), rgba(99,102,241,0.5), transparent)",
          }}
        />
      </div>
    </section>
  );
}
