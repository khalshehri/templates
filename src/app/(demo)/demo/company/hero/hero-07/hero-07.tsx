"use client";

import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

const content = {
  en: {
    badge: "> system.secure_",
    headingLine1: "Zero trust.",
    headingAccent: "Total protection.",
    sub: "AI-powered threat detection guarding critical infrastructure across 45 countries. Zero breaches. Zero compromises.",
    cta: "Deploy Now",
    metrics: ["99.99% Uptime", "< 10ms Response", "256-bit Encryption"],
    terminal: {
      title: "threat_monitor",
      status: "All systems operational",
      events: [
        "✓ Blocked DDoS attempt — 14:32 UTC",
        "✓ Firewall rule updated — 14:28 UTC",
        "✓ Vulnerability scan complete — 14:15 UTC",
      ],
      threatLabel: "Threat Level",
      threatValue: "LOW",
      threatPercent: 27,
    },
  },
  ar: {
    badge: "> النظام آمن_",
    headingLine1: "صفر ثقة.",
    headingAccent: "حماية كاملة.",
    sub: "كشف التهديدات بالذكاء الاصطناعي يحمي البنية التحتية الحيوية في 45 دولة. صفر اختراقات. صفر تنازلات.",
    cta: "ابدأ النشر",
    metrics: ["99.99% وقت التشغيل", "أقل من 10مللي ثانية", "تشفير 256 بت"],
    terminal: {
      title: "مراقب_التهديدات",
      status: "جميع الأنظمة تعمل",
      events: [
        "✓ تم صد هجوم DDoS — 14:32 UTC",
        "✓ تحديث قاعدة الجدار — 14:28 UTC",
        "✓ اكتمل فحص الثغرات — 14:15 UTC",
      ],
      threatLabel: "مستوى التهديد",
      threatValue: "منخفض",
      threatPercent: 27,
    },
  },
};

export function Hero07({ language }: { language: "en" | "ar" }) {
  const [mounted, setMounted] = useState(false);
  const [visibleEvents, setVisibleEvents] = useState(0);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setVisibleEvents(0);
    const timers = [
      setTimeout(() => setVisibleEvents(1), 600),
      setTimeout(() => setVisibleEvents(2), 1000),
      setTimeout(() => setVisibleEvents(3), 1400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [mounted, language]);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #050505 0%, #0a0f0a 100%)",
        fontFamily: isAr
          ? "var(--font-readex-pro), sans-serif"
          : "var(--font-inter), sans-serif",
      }}
    >
      <style>{`
        @keyframes hero07FadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero07Blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes hero07Scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes hero07GlowPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 50px rgba(34, 197, 94, 0.5); }
        }
        @keyframes hero07RadialBreathe {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.15; }
        }
        @keyframes hero07EventFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero07SlideIn {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero07SlideInRtl {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero07-animated { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero07-scanline { display: none !important; }
          .hero07-glow { animation: none !important; }
          .hero07-blink { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(34,197,94,0.06) 49px, rgba(34,197,94,0.06) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(34,197,94,0.06) 49px, rgba(34,197,94,0.06) 50px)",
        }}
      />

      {/* Scan line */}
      <div
        className="hero07-scanline absolute inset-x-0 top-0 h-[2px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(34,197,94,0.15) 50%, transparent 100%)",
          animation: "hero07Scanline 4s linear infinite",
        }}
      />

      {/* Scan-line horizontal stripes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          opacity: 0.3,
        }}
      />

      {/* Green radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          top: "10%",
          left: "15%",
          background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)",
          animation: "hero07RadialBreathe 4s ease-in-out infinite",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-center">
          {/* Left */}
          <div>
            {/* Code badge */}
            <div
              className="hero07-animated inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-8"
              style={{
                backgroundColor: "rgba(34, 197, 94, 0.08)",
                border: "1px solid rgba(34, 197, 94, 0.15)",
                fontFamily: "monospace",
                animation: mounted
                  ? "hero07FadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards"
                  : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              <ShieldCheck size={14} style={{ color: "#22c55e" }} />
              <span className="text-sm" style={{ color: "#86efac" }}>
                {t.badge}
                <span
                  className="hero07-blink inline-block w-[2px] h-[14px] ml-0.5 rtl:mr-0.5 align-middle"
                  style={{
                    backgroundColor: "#22c55e",
                    animation: "hero07Blink 1s steps(1) infinite",
                  }}
                />
              </span>
            </div>

            {/* Heading */}
            <h1
              className="hero07-animated"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.05,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                animation: mounted
                  ? "hero07FadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards"
                  : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              {t.headingLine1}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #22c55e, #86efac)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.headingAccent}
              </span>
            </h1>

            {/* Sub */}
            <p
              className="hero07-animated mt-6 max-w-lg"
              style={{
                color: "#9ca3af",
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                lineHeight: 1.7,
                fontWeight: 300,
                animation: mounted
                  ? "hero07FadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s forwards"
                  : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              {t.sub}
            </p>

            {/* CTA */}
            <div
              className="hero07-animated mt-8"
              style={{
                animation: mounted
                  ? "hero07FadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards"
                  : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              <button
                className="hero07-glow cursor-pointer px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  backgroundColor: "#22c55e",
                  color: "#050505",
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)",
                  animation: "hero07GlowPulse 3s ease-in-out infinite",
                  minHeight: "48px",
                  letterSpacing: "0.02em",
                }}
              >
                {t.cta}
              </button>
            </div>

            {/* Metrics */}
            <div
              className="hero07-animated flex flex-wrap gap-3 mt-8"
              style={{
                animation: mounted
                  ? "hero07FadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s forwards"
                  : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              {t.metrics.map((metric, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "#d1d5db",
                    fontFamily: "monospace",
                  }}
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Terminal card */}
          <div
            className="hero07-animated"
            style={{
              animation: mounted
                ? `${isAr ? "hero07SlideInRtl" : "hero07SlideIn"} 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards`
                : "none",
              opacity: mounted ? undefined : 0,
            }}
          >
            <div
              className="rounded-2xl overflow-hidden backdrop-blur-xl"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(34, 197, 94, 0.1)",
                boxShadow: "0 0 60px rgba(34, 197, 94, 0.05), 0 8px 32px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-5 py-3"
                style={{
                  borderBottom: "1px solid rgba(34, 197, 94, 0.08)",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ef4444" }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#eab308" }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#22c55e" }} />
                </div>
                <span
                  className="text-xs ml-2 rtl:mr-2"
                  style={{ color: "#4b5563", fontFamily: "monospace" }}
                >
                  {t.terminal.title}
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 space-y-4" style={{ fontFamily: "monospace" }}>
                {/* Status */}
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#22c55e" }}
                  />
                  <span className="text-xs" style={{ color: "#86efac" }}>
                    {t.terminal.status}
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="h-px"
                  style={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                />

                {/* Events */}
                <div className="space-y-2.5">
                  {t.terminal.events.map((event, i) => (
                    <div
                      key={`${language}-${i}`}
                      className="hero07-animated text-xs leading-relaxed"
                      style={{
                        color: i < visibleEvents ? "#9ca3af" : "transparent",
                        animation:
                          i < visibleEvents
                            ? `hero07EventFade 0.4s cubic-bezier(0.16,1,0.3,1) forwards`
                            : "none",
                        opacity: i < visibleEvents ? undefined : 0,
                      }}
                    >
                      {event}
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div
                  className="h-px"
                  style={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                />

                {/* Threat level */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs" style={{ color: "#4b5563" }}>
                      {t.terminal.threatLabel}
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "#22c55e" }}
                    >
                      {t.terminal.threatValue}
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: mounted ? `${t.terminal.threatPercent}%` : "0%",
                        background: "linear-gradient(90deg, #22c55e, #86efac)",
                        boxShadow: "0 0 10px rgba(34, 197, 94, 0.4)",
                      }}
                    />
                  </div>
                </div>

                {/* Cursor line */}
                <div className="flex items-center gap-1 pt-2">
                  <span className="text-xs" style={{ color: "#22c55e" }}>
                    $
                  </span>
                  <span
                    className="hero07-blink inline-block w-[7px] h-[14px]"
                    style={{
                      backgroundColor: "#22c55e",
                      animation: "hero07Blink 1s steps(1) infinite",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
