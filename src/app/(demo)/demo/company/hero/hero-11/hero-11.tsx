"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, ArrowLeft, Calendar, Globe } from "lucide-react";

const content = {
  en: {
    heading: "Navigating Complex\nMarkets With Confidence",
    sub: "We provide institutional-grade advisory services to sovereign wealth funds, central banks, and multinational corporations across emerging and frontier markets.",
    cta1: "Schedule Consultation",
    cta2: "Our Track Record",
    metrics: [
      { value: 2.4, prefix: "$", suffix: "T+", label: "Assets Advised" },
      { value: 47, prefix: "", suffix: "", label: "Countries" },
      { value: 1200, prefix: "", suffix: "+", label: "Professionals" },
      { value: 30, prefix: "", suffix: "", label: "Years" },
    ],
  },
  ar: {
    heading: "التنقل في الأسواق\nالمعقدة بثقة",
    sub: "نقدم خدمات استشارية بمستوى مؤسسي لصناديق الثروة السيادية والبنوك المركزية والشركات متعددة الجنسيات عبر الأسواق الناشئة والحدودية.",
    cta1: "حجز استشارة",
    cta2: "سجلنا",
    metrics: [
      { value: 2.4, prefix: "$", suffix: "T+", label: "الأصول المستشار بها" },
      { value: 47, prefix: "", suffix: "", label: "دولة" },
      { value: 1200, prefix: "", suffix: "+", label: "متخصص" },
      { value: 30, prefix: "", suffix: "", label: "سنة" },
    ],
  },
};

function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const isDecimal = target % 1 !== 0;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setValue(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, start]);

  return value;
}

export function Hero11({ language }: { language: "en" | "ar" }) {
  const [mounted, setMounted] = useState(false);
  const [countStart, setCountStart] = useState(false);
  const t = content[language];
  const isAr = language === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const headingFont = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const bodyFont = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  const m0 = useCountUp(t.metrics[0].value, 2000, countStart);
  const m1 = useCountUp(t.metrics[1].value, 2000, countStart);
  const m2 = useCountUp(t.metrics[2].value, 2000, countStart);
  const m3 = useCountUp(t.metrics[3].value, 2000, countStart);
  const metricValues = [m0, m1, m2, m3];

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setCountStart(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes tide-wave-1 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-20px); }
        }
        @keyframes tide-wave-2 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(20px); }
        }
        @keyframes tide-wave-3 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-15px); }
        }
        @keyframes tide-slide-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes tide-fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes tide-metric-in {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes tide-glow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }
        .tide-w1 { animation: tide-wave-1 8s ease-in-out infinite; }
        .tide-w2 { animation: tide-wave-2 12s ease-in-out infinite; }
        .tide-w3 { animation: tide-wave-3 16s ease-in-out infinite; }
        .tide-heading {
          animation: tide-slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0;
        }
        .tide-sub {
          animation: tide-slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
          opacity: 0;
        }
        .tide-ctas {
          animation: tide-slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
          opacity: 0;
        }
        .tide-metric-0 { animation: tide-metric-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.4s forwards; opacity: 0; }
        .tide-metric-1 { animation: tide-metric-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.6s forwards; opacity: 0; }
        .tide-metric-2 { animation: tide-metric-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.8s forwards; opacity: 0; }
        .tide-metric-3 { animation: tide-metric-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) 2.0s forwards; opacity: 0; }
        .tide-glow { animation: tide-glow 4s ease-in-out infinite; }
        .tide-btn-primary {
          transition: all 0.3s ease;
        }
        .tide-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(20, 184, 166, 0.3);
        }
        .tide-btn-outline {
          transition: all 0.3s ease;
        }
        .tide-btn-outline:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        @media (prefers-reduced-motion: reduce) {
          .tide-w1, .tide-w2, .tide-w3,
          .tide-heading, .tide-sub, .tide-ctas,
          .tide-metric-0, .tide-metric-1, .tide-metric-2, .tide-metric-3,
          .tide-glow {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section style={{ fontFamily: bodyFont }}>
        {/* Top Zone - Navy */}
        <div
          className="relative overflow-hidden flex items-center justify-center px-6 md:px-12"
          style={{
            backgroundColor: "#0f172a",
            minHeight: "55vh",
            paddingTop: "4rem",
            paddingBottom: "6rem",
          }}
        >
          {/* Ambient glow */}
          <div
            className="absolute w-96 h-96 rounded-full blur-3xl tide-glow"
            style={{
              background: "radial-gradient(circle, rgba(20,184,166,0.2), transparent 70%)",
              top: "10%",
              [isAr ? "right" : "left"]: "20%",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 ${mounted ? "tide-heading" : ""}`}
              style={{
                fontFamily: headingFont,
                whiteSpace: "pre-line",
                lineHeight: 1.1,
              }}
            >
              {t.heading}
            </h1>

            <p
              className={`text-base md:text-lg max-w-2xl mx-auto mb-10 ${mounted ? "tide-sub" : ""}`}
              style={{ color: "#cbd5e1", fontFamily: bodyFont }}
            >
              {t.sub}
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${mounted ? "tide-ctas" : ""}`}
            >
              <button
                className="px-8 py-3.5 rounded-lg font-semibold text-sm cursor-pointer tide-btn-primary flex items-center gap-2"
                style={{
                  backgroundColor: "#14b8a6",
                  color: "#ffffff",
                  fontFamily: bodyFont,
                }}
              >
                <Calendar className="w-4 h-4" />
                {t.cta1}
              </button>
              <button
                className="px-8 py-3.5 rounded-lg font-semibold text-sm cursor-pointer tide-btn-outline border border-white/30 text-white flex items-center gap-2"
                style={{ fontFamily: bodyFont }}
              >
                <Globe className="w-4 h-4" />
                {t.cta2}
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* SVG Wave Transition */}
        <div className="relative" style={{ marginTop: "-1px" }}>
          {/* Wave 1 - matches navy top */}
          <svg
            className="w-full block tide-w1"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            style={{ height: "60px", marginBottom: "-1px" }}
          >
            <path
              d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 L0,0 Z"
              fill="#0f172a"
            />
          </svg>

          {/* Wave 2 - medium tone */}
          <svg
            className="w-full block tide-w2"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{ height: "50px", marginTop: "-30px", marginBottom: "-1px" }}
          >
            <path
              d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,30 1440,50 L1440,0 L0,0 Z"
              fill="#1e3a5f"
            />
          </svg>

          {/* Wave 3 - lighter */}
          <svg
            className="w-full block tide-w3"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            style={{ height: "40px", marginTop: "-20px", marginBottom: "-1px" }}
          >
            <path
              d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,0 L0,0 Z"
              fill="#2d5a87"
            />
          </svg>
        </div>

        {/* Bottom Zone - White */}
        <div className="bg-white px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {t.metrics.map((metric, i) => (
                <div
                  key={i}
                  className={`text-center md:text-start ${mounted ? `tide-metric-${i}` : ""}`}
                >
                  {/* Navy top border accent */}
                  <div
                    className="w-8 h-0.5 mb-6 mx-auto md:mx-0"
                    style={{
                      backgroundColor: "#0f172a",
                      ...(isAr ? { marginRight: "auto", marginLeft: 0 } : {}),
                    }}
                  />
                  <div
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: "#0f172a", fontFamily: headingFont }}
                  >
                    {metric.prefix}
                    {metricValues[i]}
                    {metric.suffix}
                  </div>
                  <div
                    className="text-sm text-gray-500 tracking-wide"
                    style={{ fontFamily: bodyFont }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
