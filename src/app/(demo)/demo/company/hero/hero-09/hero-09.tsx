"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Activity } from "lucide-react";

const content = {
  en: {
    badge: "[SYSTEMS ONLINE]",
    heading: "Enterprise-Grade Infrastructure You Can Trust",
    body: "Powering mission-critical operations for the world's most demanding organizations. Our distributed architecture delivers unmatched reliability at any scale.",
    cta1: "Access Dashboard",
    cta2: "View Status",
    terminalTitle: "operations.terminal",
    lines: [
      { cmd: true, text: "$ initiating global systems check..." },
      { cmd: false, text: "[✓] 47 regional nodes — online" },
      { cmd: false, text: "[✓] 12,847 active endpoints — secured" },
      { cmd: false, text: "[✓] 99.97% uptime — maintained" },
      { cmd: true, text: "$ status: all systems operational_" },
    ],
  },
  ar: {
    badge: "[الأنظمة متصلة]",
    heading: "بنية تحتية بمستوى المؤسسات يمكنك الوثوق بها",
    body: "نشغّل العمليات الحيوية لأكثر المنظمات تطلبًا في العالم. تقدم بنيتنا الموزعة موثوقية لا مثيل لها على أي نطاق.",
    cta1: "الوصول للوحة التحكم",
    cta2: "حالة النظام",
    terminalTitle: "operations.terminal",
    lines: [
      { cmd: true, text: "$ بدء فحص الأنظمة العالمية..." },
      { cmd: false, text: "[✓] 47 عقدة إقليمية — متصلة" },
      { cmd: false, text: "[✓] 12,847 نقطة نهاية نشطة — مؤمّنة" },
      { cmd: false, text: "[✓] 99.97% وقت تشغيل — مُحافظ عليه" },
      { cmd: true, text: "$ الحالة: جميع الأنظمة تعمل_" },
    ],
  },
};

export function Hero09({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const headingFont = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const bodyFont = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    setVisibleLines(0);
    const timers: ReturnType<typeof setTimeout>[] = [];

    t.lines.forEach((_, i) => {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => Math.max(prev, i + 1));
      }, 800 + i * 1200);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [language, t.lines]);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      <style>{`
        @keyframes hero09ScanLine {
          0% { top: 0; }
          100% { top: 100%; }
        }

        @keyframes hero09Blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes hero09Typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes hero09FadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero09LineReveal {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes hero09LineRevealRtl {
          from { opacity: 0; transform: translateX(8px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .hero09-content {
          animation: hero09FadeIn 0.7s ease-out both;
        }

        .hero09-content-delay {
          animation: hero09FadeIn 0.7s ease-out 0.15s both;
        }

        .hero09-content-delay2 {
          animation: hero09FadeIn 0.7s ease-out 0.3s both;
        }

        .hero09-terminal {
          animation: hero09FadeIn 0.8s ease-out 0.2s both;
        }

        .hero09-cursor {
          animation: hero09Blink 1s step-end infinite;
        }

        .hero09-scan-line {
          animation: hero09ScanLine 4s linear infinite;
        }

        .hero09-line-reveal {
          animation: hero09LineReveal 0.4s ease-out both;
        }

        .hero09-line-reveal-rtl {
          animation: hero09LineRevealRtl 0.4s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero09-content,
          .hero09-content-delay,
          .hero09-content-delay2,
          .hero09-terminal,
          .hero09-cursor,
          .hero09-scan-line,
          .hero09-line-reveal,
          .hero09-line-reveal-rtl {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Main layout */}
      <div
        className="relative z-10 max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-6 md:px-12 py-20 lg:py-0"
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="hero09-content">
            <span
              className="inline-block font-mono text-xs bg-green-500/10 text-green-400 border border-green-500/20 rounded px-3 py-1"
              style={{ fontFamily: "monospace" }}
            >
              {t.badge}
            </span>
          </div>

          <h1
            className="hero09-content-delay mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: headingFont }}
          >
            {t.heading}
          </h1>

          <p
            className="hero09-content-delay2 mt-5 text-gray-400 text-base md:text-lg leading-relaxed max-w-lg"
            style={{ fontFamily: bodyFont }}
          >
            {t.body}
          </p>

          <div className="hero09-content-delay2 mt-8 flex flex-wrap gap-3">
            <button
              className="cursor-pointer transition-all duration-300 border border-green-500/50 text-green-400 hover:bg-green-500 hover:text-black font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 group"
              style={{ fontFamily: bodyFont }}
            >
              {t.cta1}
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                  isAr ? "rotate-180 group-hover:-translate-x-1" : ""
                }`}
              />
            </button>

            <button
              className="cursor-pointer transition-all duration-300 bg-white/10 hover:bg-white/15 text-gray-300 font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2"
              style={{ fontFamily: bodyFont }}
            >
              <Activity className="w-4 h-4" />
              {t.cta2}
            </button>
          </div>
        </div>

        {/* Right terminal card */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none">
          <div className="hero09-terminal bg-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden relative">
            {/* Scan line */}
            <div
              className="hero09-scan-line absolute left-0 right-0 h-[1px] pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(34,197,94,0.15), transparent)",
              }}
            />

            {/* Terminal top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
              <div className="flex gap-1.5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#ff5f56" }}
                />
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#ffbd2e" }}
                />
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#27c93f" }}
                />
              </div>
              <span className="flex-1 text-center text-xs text-gray-500 font-mono">
                {t.terminalTitle}
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm space-y-3 min-h-[260px]">
              {t.lines.map((line, i) => {
                const isVisible = i < visibleLines;
                const isLastVisible = i === visibleLines - 1;
                const isCmd = line.cmd;

                return (
                  <div
                    key={`${language}-${i}`}
                    className={`${
                      isVisible
                        ? isAr
                          ? "hero09-line-reveal-rtl"
                          : "hero09-line-reveal"
                        : "opacity-0"
                    }`}
                    style={{
                      direction: "ltr",
                      textAlign: "left",
                    }}
                  >
                    <span
                      className={
                        isCmd ? "text-gray-300" : "text-green-400"
                      }
                    >
                      {line.text}
                    </span>
                    {isLastVisible && isCmd && (
                      <span className="hero09-cursor inline-block w-[2px] h-4 bg-green-400 ml-1 align-middle" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom status bar */}
            <div className="border-t border-gray-800 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-gray-500 font-mono">
                  CONNECTED
                </span>
              </div>
              <span className="text-xs text-gray-600 font-mono">
                TLS 1.3 | AES-256
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
