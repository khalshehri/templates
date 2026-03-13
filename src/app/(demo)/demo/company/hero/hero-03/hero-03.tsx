"use client";

import { useState, useEffect, useRef } from "react";
import { TrendingUp, ArrowRight } from "lucide-react";

interface Hero03Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "EST. 1987",
    heading: "Where capital meets conviction",
    sub: "Four decades of institutional-grade wealth management. Precision. Discretion. Results.",
    cta: "Schedule Consultation",
    stats: [
      { prefix: "$", value: 4.2, suffix: "B", label: "Assets Under Management", decimals: 1 },
      { prefix: "", value: 18.7, suffix: "%", label: "Annual Returns", decimals: 1 },
      { prefix: "", value: 2400, suffix: "+", label: "Active Clients", decimals: 0 },
    ],
  },
  ar: {
    badge: "تأسست 1987",
    heading: "حيث يلتقي رأس المال بالقناعة",
    sub: "أربعة عقود من إدارة الثروات بمستوى مؤسسي. دقة. سرية. نتائج.",
    cta: "حدد موعد استشارة",
    stats: [
      { prefix: "$", value: 4.2, suffix: "B", label: "الأصول المُدارة", decimals: 1 },
      { prefix: "", value: 18.7, suffix: "%", label: "العوائد السنوية", decimals: 1 },
      { prefix: "", value: 2400, suffix: "+", label: "عملاء نشطون", decimals: 0 },
    ],
  },
};

function useCountUp(end: number, duration: number = 2200, decimals: number = 0) {
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

export function Hero03({ language }: Hero03Props) {
  const t = content[language];
  const isAr = language === "ar";

  const stat0 = useCountUp(t.stats[0].value, 2200, t.stats[0].decimals);
  const stat1 = useCountUp(t.stats[1].value, 2200, t.stats[1].decimals);
  const stat2 = useCountUp(t.stats[2].value, 2200, t.stats[2].decimals);
  const statValues = [stat0, stat1, stat2];

  return (
    <>
      <style>{`
        @keyframes obsidian-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes obsidian-lineExtend {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes obsidian-linePulse {
          0%, 100% { opacity: 0.4; box-shadow: 0 0 8px rgba(212,168,83,0.15); }
          50% { opacity: 0.7; box-shadow: 0 0 20px rgba(212,168,83,0.3); }
        }
        .obsidian-fadeUp {
          animation: obsidian-fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .obsidian-d1 { animation-delay: 0.1s; }
        .obsidian-d2 { animation-delay: 0.2s; }
        .obsidian-d3 { animation-delay: 0.3s; }
        .obsidian-d4 { animation-delay: 0.4s; }
        .obsidian-d5 { animation-delay: 0.6s; }
        .obsidian-d6 { animation-delay: 0.8s; }
        .obsidian-line {
          animation: obsidian-lineExtend 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards,
                     obsidian-linePulse 4s ease-in-out 1.7s infinite;
          transform: scaleX(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .obsidian-fadeUp { animation: none; opacity: 1; }
          .obsidian-line { animation: none; transform: scaleX(1); opacity: 0.4; }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"
        style={{
          background: "#09090b",
          fontFamily: isAr ? "var(--font-almarai)" : "var(--font-inter)",
        }}
      >
        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24 sm:py-32 lg:py-44 flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className="obsidian-fadeUp obsidian-d1 inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-10"
            style={{
              border: "1px solid rgba(212,168,83,0.3)",
              background: "rgba(212,168,83,0.05)",
            }}
          >
            <TrendingUp className="w-3.5 h-3.5" style={{ color: "#d4a853" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "#d4a853", fontWeight: 500, letterSpacing: "0.15em" }}
            >
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="obsidian-fadeUp obsidian-d2 max-w-4xl"
            style={{
              fontSize: "clamp(3rem, 7vw, 5rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#ededed",
              fontFamily: isAr ? "var(--font-el-messiri)" : "var(--font-inter)",
            }}
          >
            {t.heading}
          </h1>

          {/* Subtitle */}
          <p
            className="obsidian-fadeUp obsidian-d3 mt-7 max-w-xl text-lg"
            style={{ color: "#a3a3a3", fontWeight: 300, lineHeight: 1.8 }}
          >
            {t.sub}
          </p>

          {/* CTA */}
          <div className="obsidian-fadeUp obsidian-d4 mt-10">
            <button
              className="cursor-pointer group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-medium transition-all hover:bg-[rgba(212,168,83,0.1)]"
              style={{
                border: "1px solid rgba(212,168,83,0.3)",
                color: "#d4a853",
                background: "transparent",
                letterSpacing: "0.04em",
              }}
            >
              {t.cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Gold Divider Line */}
          <div className="w-full flex justify-center mt-20">
            <div
              className="obsidian-line"
              style={{
                width: "50%",
                height: "1px",
                background: "linear-gradient(90deg, transparent 0%, #d4a853 50%, transparent 100%)",
              }}
            />
          </div>

          {/* Stats */}
          <div className="obsidian-fadeUp obsidian-d6 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 w-full max-w-3xl">
            {t.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <span
                  className="text-4xl sm:text-5xl font-bold"
                  style={{
                    color: "#d4a853",
                    letterSpacing: "-0.02em",
                    fontFamily: isAr ? "var(--font-el-messiri)" : "var(--font-inter)",
                  }}
                >
                  {stat.prefix}
                  {stat.decimals > 0
                    ? statValues[i].toFixed(stat.decimals)
                    : Math.floor(statValues[i]).toLocaleString()}
                  {stat.suffix}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "#71717a", fontWeight: 400, letterSpacing: "0.02em" }}
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
