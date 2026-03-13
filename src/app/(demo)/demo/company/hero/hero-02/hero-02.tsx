"use client";

interface Hero02Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "SYSTEM STATUS: OPERATIONAL",
    heading: "Infrastructure that never sleeps",
    body: "Enterprise-grade cloud platform engineered for zero-downtime operations, real-time analytics, and bulletproof security.",
    cta: "Request access",
    metrics: [
      { value: "99.97%", label: "Uptime" },
      { value: "<12ms", label: "Latency" },
      { value: "256-bit", label: "Encrypted" },
    ],
  },
  ar: {
    badge: "حالة النظام: تشغيلي",
    heading: "بنية تحتية لا تنام أبداً",
    body: "منصة سحابية بمستوى المؤسسات مصممة لعمليات بلا توقف وتحليلات فورية وأمان لا يُخترق.",
    cta: "اطلب الوصول",
    metrics: [
      { value: "99.97%", label: "وقت التشغيل" },
      { value: "أقل من 12مل‌ث", label: "" },
      { value: "تشفير 256-بت", label: "" },
    ],
  },
};

export function Hero02({ language }: Hero02Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      <style>{`
        @keyframes hero02ScanLine {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes hero02BlinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes hero02GlowPulse {
          0%, 100% {
            box-shadow: 0 0 0px rgba(6, 182, 212, 0.2), inset 0 0 0px rgba(6, 182, 212, 0.05);
          }
          50% {
            box-shadow: 0 0 8px rgba(6, 182, 212, 0.35), inset 0 0 4px rgba(6, 182, 212, 0.08);
          }
        }

        @keyframes hero02FadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero02-scan {
          animation: hero02ScanLine 10s linear infinite;
        }

        .hero02-cursor {
          animation: hero02BlinkCursor 1s step-end infinite;
        }

        .hero02-glow {
          animation: hero02GlowPulse 3s ease-in-out infinite;
        }

        .hero02-fadein {
          animation: hero02FadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .hero02-delay-1 { animation-delay: 0.15s; }
        .hero02-delay-2 { animation-delay: 0.3s; }
        .hero02-delay-3 { animation-delay: 0.45s; }
        .hero02-delay-4 { animation-delay: 0.6s; }
        .hero02-delay-5 { animation-delay: 0.75s; }

        @media (prefers-reduced-motion: reduce) {
          .hero02-scan {
            animation: none;
            display: none;
          }
          .hero02-cursor {
            animation: none;
            opacity: 1;
          }
          .hero02-glow {
            animation: none;
            box-shadow: 0 0 4px rgba(6, 182, 212, 0.3);
          }
          .hero02-fadein {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scan Line */}
      <div className="absolute inset-x-0 top-0 h-full pointer-events-none overflow-hidden">
        <div
          className="hero02-scan absolute inset-x-0 top-0"
          style={{
            height: "2px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.15) 20%, rgba(6,182,212,0.15) 80%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        {/* Badge */}
        <div className="hero02-fadein hero02-delay-1 flex justify-center mb-10">
          <span
            className={`inline-flex items-center gap-1 font-mono text-[11px] text-cyan-400/70 border border-cyan-500/20 px-3 py-1.5 rounded ${
              isAr ? "" : ""
            }`}
          >
            {t.badge}
            <span className="hero02-cursor text-cyan-400">_</span>
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`hero02-fadein hero02-delay-2 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 ${
            isAr
              ? "font-[family-name:var(--font-changa)]"
              : "font-[family-name:var(--font-inter)]"
          }`}
        >
          {t.heading}
        </h1>

        {/* Body */}
        <p
          className={`hero02-fadein hero02-delay-3 text-gray-500 text-lg max-w-xl mx-auto mb-10 ${
            isAr
              ? "font-[family-name:var(--font-tajawal)]"
              : "font-[family-name:var(--font-inter)]"
          }`}
        >
          {t.body}
        </p>

        {/* CTA */}
        <div className="hero02-fadein hero02-delay-4 mb-14">
          <button
            className={`hero02-glow cursor-pointer border border-cyan-500/40 text-cyan-300 px-8 py-3 rounded-lg text-sm tracking-wide transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-200 ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
            style={{ backgroundColor: "transparent" }}
          >
            {t.cta}
          </button>
        </div>

        {/* Metrics */}
        <div className="hero02-fadein hero02-delay-5 flex items-center justify-center gap-0">
          {t.metrics.map((metric, i) => (
            <div
              key={i}
              className={`flex flex-col items-center px-6 md:px-8 ${
                i > 0 ? "border-s border-white/10" : ""
              }`}
            >
              <span className="text-xs text-gray-500 font-mono whitespace-nowrap">
                {metric.value}
              </span>
              {metric.label && (
                <span
                  className={`text-[10px] text-gray-700 font-mono mt-0.5 ${
                    isAr ? "font-[family-name:var(--font-tajawal)]" : ""
                  }`}
                >
                  {metric.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
