"use client";

import { useEffect, useState } from "react";

interface Hero09Props {
  language: "en" | "ar";
}

const content = {
  en: {
    tab: "enterprise-dashboard",
    prompt: "> system.status",
    heading: "Enterprise infrastructure, reimagined",
    body: "Real-time operations management for organizations running at scale. Monitor, analyze, and optimize — all from one command center.",
    data: [
      { color: "#22c55e", label: "47 Active Regions" },
      { color: "#3b82f6", label: "2.4K Online" },
      { color: "#f59e0b", label: "$18.2B Processed" },
    ],
    cta: "> init --start-project",
  },
  ar: {
    tab: "لوحة-المؤسسة",
    prompt: "> حالة.النظام",
    heading: "بنية تحتية مؤسسية، أُعيد تصورها",
    body: "إدارة عمليات فورية للمؤسسات العاملة على نطاق واسع. راقب وحلل وحسّن — كل ذلك من مركز قيادة واحد.",
    data: [
      { color: "#22c55e", label: "47 منطقة نشطة" },
      { color: "#3b82f6", label: "2.4 ألف متصل" },
      { color: "#f59e0b", label: "$18.2 مليار" },
    ],
    cta: "> بدء --مشروع-جديد",
  },
};

export function Hero09({ language }: Hero09Props) {
  const [visible, setVisible] = useState(false);
  const t = content[language];
  const isAr = language === "ar";
  const promptLength = t.prompt.length;

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, [language]);

  return (
    <>
      <style>{`
        @keyframes hero09FadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero09Typing {
          from {
            width: 0;
          }
          to {
            width: ${promptLength}ch;
          }
        }

        @keyframes hero09Blink {
          0%, 100% {
            border-color: #22c55e;
          }
          50% {
            border-color: transparent;
          }
        }

        @keyframes hero09ScanLine {
          0% {
            top: -2px;
          }
          100% {
            top: 100%;
          }
        }

        @keyframes hero09ContentReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero09CtaBlink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .hero09-card {
          opacity: 0;
        }

        .hero09-card.hero09-visible {
          animation: hero09FadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .hero09-prompt {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
          vertical-align: bottom;
        }

        .hero09-prompt.hero09-visible {
          animation: hero09Typing 1.5s steps(${promptLength}) 0.4s forwards;
        }

        .hero09-cursor {
          border-right: 2px solid #22c55e;
          animation: hero09Blink 1s steps(1) infinite;
          padding-right: 2px;
        }

        .hero09-line-heading {
          opacity: 0;
        }

        .hero09-line-heading.hero09-visible {
          animation: hero09ContentReveal 0.6s cubic-bezier(0.23, 1, 0.32, 1) 1.8s forwards;
        }

        .hero09-line-body {
          opacity: 0;
        }

        .hero09-line-body.hero09-visible {
          animation: hero09ContentReveal 0.6s cubic-bezier(0.23, 1, 0.32, 1) 2.1s forwards;
        }

        .hero09-line-data {
          opacity: 0;
        }

        .hero09-line-data.hero09-visible {
          animation: hero09ContentReveal 0.6s cubic-bezier(0.23, 1, 0.32, 1) 2.4s forwards;
        }

        .hero09-line-cta {
          opacity: 0;
        }

        .hero09-line-cta.hero09-visible {
          animation: hero09ContentReveal 0.6s cubic-bezier(0.23, 1, 0.32, 1) 2.7s forwards;
        }

        .hero09-scan {
          animation: hero09ScanLine 8s linear infinite;
        }

        .hero09-cta-underscore {
          animation: hero09CtaBlink 1s steps(1) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero09-card {
            opacity: 1;
            transform: none;
          }
          .hero09-card.hero09-visible {
            animation: none;
            opacity: 1;
          }
          .hero09-prompt {
            width: auto;
          }
          .hero09-prompt.hero09-visible {
            animation: none;
            width: auto;
          }
          .hero09-cursor {
            animation: none;
            border-color: #22c55e;
          }
          .hero09-line-heading,
          .hero09-line-body,
          .hero09-line-data,
          .hero09-line-cta {
            opacity: 1;
            transform: none;
          }
          .hero09-line-heading.hero09-visible,
          .hero09-line-body.hero09-visible,
          .hero09-line-data.hero09-visible,
          .hero09-line-cta.hero09-visible {
            animation: none;
            opacity: 1;
          }
          .hero09-scan {
            animation: none;
            display: none;
          }
          .hero09-cta-underscore {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      <section
        className={`min-h-screen flex items-center justify-center px-4 py-20 md:py-28 relative overflow-hidden ${
          isAr
            ? "font-[family-name:var(--font-tajawal)]"
            : "font-[family-name:var(--font-inter)]"
        }`}
        style={{
          backgroundColor: "#111111",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Terminal Card */}
        <div
          className={`hero09-card ${
            visible ? "hero09-visible" : ""
          } w-full max-w-3xl mx-auto border border-white/[0.08] rounded-xl overflow-hidden relative`}
        >
          {/* Scan line */}
          <div
            className="hero09-scan absolute left-0 right-0 h-px bg-green-500/5 pointer-events-none z-20"
            style={{ top: "-2px" }}
          />

          {/* Top bar */}
          <div className="bg-[#1a1a1a] border-b border-white/[0.06] px-4 py-2.5 flex items-center gap-2">
            {/* Traffic light dots */}
            <div className="flex items-center gap-1.5">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#ff5f57" }}
              />
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#febc2e" }}
              />
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#28c840" }}
              />
            </div>
            {/* Tab */}
            <div className="flex-1 text-center">
              <span
                className="text-[11px] text-gray-500 font-mono"
                dir="ltr"
              >
                {t.tab}
              </span>
            </div>
            {/* Spacer for symmetry */}
            <div className="w-[52px]" />
          </div>

          {/* Terminal body */}
          <div className="bg-[#0a0a0a] p-6 md:p-8">
            {/* Line 1: Prompt */}
            <div className="flex items-center" dir="ltr">
              <span
                className={`hero09-prompt ${
                  visible ? "hero09-visible" : ""
                } text-green-500 text-sm font-mono`}
              >
                {t.prompt}
              </span>
              <span className="hero09-cursor inline-block h-4 ml-0.5" />
            </div>

            {/* Line 2: Heading */}
            <h1
              className={`hero09-line-heading ${
                visible ? "hero09-visible" : ""
              } text-2xl md:text-3xl font-semibold text-white mt-6 ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.heading}
            </h1>

            {/* Line 3: Body */}
            <p
              className={`hero09-line-body ${
                visible ? "hero09-visible" : ""
              } text-gray-500 text-sm md:text-base mt-4 leading-relaxed max-w-2xl ${
                isAr ? "font-[family-name:var(--font-tajawal)]" : ""
              }`}
            >
              {t.body}
            </p>

            {/* Line 4: Data badges */}
            <div
              className={`hero09-line-data ${
                visible ? "hero09-visible" : ""
              } flex flex-wrap gap-4 md:gap-6 mt-6`}
            >
              {t.data.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-mono text-[11px] text-gray-500" dir="ltr">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Line 5: CTA */}
            <div
              className={`hero09-line-cta ${
                visible ? "hero09-visible" : ""
              } mt-6`}
            >
              <a
                href="#"
                className="text-green-500 hover:text-green-400 font-mono text-sm cursor-pointer transition-all duration-300 inline-block"
                dir="ltr"
              >
                {t.cta}
                <span className="hero09-cta-underscore inline-block ml-0.5">
                  _
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 flex flex-col gap-1 opacity-20">
          <div className="w-4 h-px bg-green-500" />
          <div className="w-2 h-px bg-green-500" />
        </div>
        <div className="absolute bottom-8 right-8 flex flex-col items-end gap-1 opacity-20">
          <div className="w-4 h-px bg-green-500" />
          <div className="w-2 h-px bg-green-500" />
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <span className="text-[10px] tracking-[0.2em] text-white/10 uppercase font-mono">
            {isAr ? "مركز القيادة" : "Command Center"}
          </span>
        </div>
      </section>
    </>
  );
}
