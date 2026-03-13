"use client";

import { Sparkles, Zap, Shield, Globe, ArrowRight } from "lucide-react";

interface Hero02Props {
  language: "en" | "ar";
}

const content = {
  en: {
    headingStart: "Build the future with",
    headingAccent: "intelligent software",
    sub: "From idea to production in record time. Our platform gives startups the tools to compete with giants.",
    cta: "Start Building — It's Free",
    pills: [
      { label: "Lightning Fast", icon: "zap" },
      { label: "Enterprise Ready", icon: "shield" },
      { label: "Global Scale", icon: "globe" },
    ],
  },
  ar: {
    headingStart: "ابنِ المستقبل مع",
    headingAccent: "برمجيات ذكية",
    sub: "من الفكرة إلى الإنتاج في وقت قياسي. منصتنا تمنح الشركات الناشئة أدوات المنافسة مع العمالقة.",
    cta: "ابدأ البناء — مجاناً",
    pills: [
      { label: "سريع البرق", icon: "zap" },
      { label: "جاهز للمؤسسات", icon: "shield" },
      { label: "نطاق عالمي", icon: "globe" },
    ],
  },
};

const PillIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "zap":
      return <Zap className="w-4 h-4" />;
    case "shield":
      return <Shield className="w-4 h-4" />;
    case "globe":
      return <Globe className="w-4 h-4" />;
    default:
      return null;
  }
};

export function Hero02({ language }: Hero02Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes aurora-blob1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(80px, -60px); }
          50% { transform: translate(-40px, 80px); }
          75% { transform: translate(60px, 40px); }
        }
        @keyframes aurora-blob2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-60px, 80px); }
          50% { transform: translate(70px, -40px); }
          75% { transform: translate(-80px, -60px); }
        }
        @keyframes aurora-blob3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(50px, 70px); }
          50% { transform: translate(-80px, -50px); }
          75% { transform: translate(40px, -80px); }
        }
        @keyframes aurora-blob4 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-70px, -40px); }
          50% { transform: translate(60px, 60px); }
          75% { transform: translate(-50px, 70px); }
        }
        @keyframes aurora-fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes aurora-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .aurora-fadeUp {
          animation: aurora-fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .aurora-d1 { animation-delay: 0.1s; }
        .aurora-d2 { animation-delay: 0.2s; }
        .aurora-d3 { animation-delay: 0.35s; }
        .aurora-d4 { animation-delay: 0.5s; }
        .aurora-shimmer-btn {
          position: relative;
          overflow: hidden;
        }
        .aurora-shimmer-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255,255,255,0.15) 50%,
            transparent 75%
          );
          background-size: 200% 100%;
          animation: aurora-shimmer 3s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora-fadeUp { animation: none; opacity: 1; }
          .aurora-blob { animation: none !important; }
          .aurora-shimmer-btn::after { animation: none; }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"
        style={{
          background: "#030014",
          fontFamily: isAr ? "var(--font-readex-pro)" : "var(--font-inter)",
        }}
      >
        {/* Gradient Mesh Blobs */}
        <div
          className="aurora-blob absolute pointer-events-none rounded-full"
          style={{
            width: "500px",
            height: "500px",
            top: "10%",
            left: "15%",
            background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "aurora-blob1 20s ease-in-out infinite",
          }}
        />
        <div
          className="aurora-blob absolute pointer-events-none rounded-full"
          style={{
            width: "500px",
            height: "500px",
            top: "20%",
            right: "10%",
            background: "radial-gradient(circle, rgba(37,99,235,0.16) 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "aurora-blob2 25s ease-in-out infinite",
          }}
        />
        <div
          className="aurora-blob absolute pointer-events-none rounded-full"
          style={{
            width: "500px",
            height: "500px",
            bottom: "15%",
            left: "35%",
            background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "aurora-blob3 30s ease-in-out infinite",
          }}
        />
        <div
          className="aurora-blob absolute pointer-events-none rounded-full"
          style={{
            width: "500px",
            height: "500px",
            bottom: "25%",
            right: "25%",
            background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "aurora-blob4 35s ease-in-out infinite",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 sm:py-32 lg:py-40 flex flex-col items-center text-center">
          {/* Sparkles icon */}
          <div className="aurora-fadeUp aurora-d1 mb-6">
            <Sparkles className="w-6 h-6 text-violet-400" />
          </div>

          {/* Heading */}
          <h1
            className="aurora-fadeUp aurora-d2 max-w-4xl"
            style={{
              fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#f8fafc",
            }}
          >
            {t.headingStart}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #06b6d4 100%)",
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
            className="aurora-fadeUp aurora-d3 mt-7 max-w-2xl text-lg sm:text-xl"
            style={{ color: "#94a3b8", fontWeight: 300, lineHeight: 1.7 }}
          >
            {t.sub}
          </p>

          {/* CTA */}
          <div className="aurora-fadeUp aurora-d3 mt-10">
            <button
              className="aurora-shimmer-btn cursor-pointer inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-base transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 60%, #06b6d4 100%)",
                boxShadow: "0 0 40px rgba(124,58,237,0.3), 0 0 80px rgba(37,99,235,0.15)",
              }}
            >
              {t.cta}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Feature Pills */}
          <div className="aurora-fadeUp aurora-d4 flex flex-wrap items-center justify-center gap-3 mt-14">
            {t.pills.map((pill, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full transition-colors hover:bg-white/[0.08]"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <span style={{ color: "#a78bfa" }}>
                  <PillIcon icon={pill.icon} />
                </span>
                <span className="text-sm" style={{ color: "#cbd5e1", fontWeight: 400 }}>
                  {pill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
