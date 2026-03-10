"use client";

/**
 * Resume Terminal -- Resume Hero Template
 *
 * Terminal/CLI showing resume as command output. `cat resume.json` aesthetic.
 * Monospace font, green-on-black, typing cursor animation.
 *
 * @category Resume
 * @palette violet (#7C3AED), indigo (#6366F1), terminal green (#4ADE80), dark (#0A0A0F)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "~/portfolio",
    heading: "Software Engineer",
    name: "Alex Morgan",
    prompt: "visitor@portfolio:~$",
    command: "cat resume.json",
    output: {
      name: '"Alex Morgan"',
      role: '"Senior Software Engineer"',
      experience: '"8 years"',
      skills: '["React", "Node.js", "Python", "AWS"]',
      education: '"M.Sc. Computer Science"',
      status: '"Open to opportunities"',
    },
    cta: "Download CV",
    secondary: "View Projects",
    statusLine: "Process exited with code 0",
  },
  ar: {
    badge: "~/السيرة",
    heading: "مهندس برمجيات",
    name: "أحمد محمد",
    prompt: "زائر@السيرة:~$",
    command: "cat resume.json",
    output: {
      name: '"أحمد محمد"',
      role: '"مهندس برمجيات أول"',
      experience: '"٨ سنوات"',
      skills: '["React", "Node.js", "Python", "AWS"]',
      education: '"ماجستير علوم حاسوب"',
      status: '"متاح للفرص"',
    },
    cta: "تحميل السيرة",
    secondary: "عرض المشاريع",
    statusLine: "انتهت العملية بالرمز 0",
  },
};

export function ResumeTerminal({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      {/* Matrix-like falling characters background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-xs font-mono"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `-20%`,
              color: "#7C3AED",
              writingMode: "vertical-rl",
              animation: `matrixFall ${8 + (i % 5)}s linear ${(i * 0.5) % 4}s infinite`,
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <span key={j}>{String.fromCharCode(33 + ((i * 7 + j * 13) % 94))}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-4">
        {/* Terminal window */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            backgroundColor: "#12121A",
            boxShadow: "0 25px 80px rgba(124,58,237,0.15), 0 0 0 1px rgba(124,58,237,0.1)",
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{
              backgroundColor: "#1A1A28",
              borderBottom: "1px solid rgba(124,58,237,0.15)",
            }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
            </div>
            <span className="text-xs font-mono mx-auto" style={{ color: "rgba(124,58,237,0.6)" }}>
              {t.badge}
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm leading-relaxed" style={{ minHeight: "400px" }}>
            {/* Command prompt */}
            <div className="flex gap-2 mb-4 flex-wrap">
              <span style={{ color: "#7C3AED" }}>{t.prompt}</span>
              <span style={{ color: "#E2E8F0" }}>{t.command}</span>
              <span
                className="inline-block w-2 h-5"
                style={{
                  backgroundColor: "#7C3AED",
                  animation: "termBlink 1s step-end infinite",
                }}
              />
            </div>

            {/* JSON output */}
            <div className="mb-6" style={{ color: "#94A3B8" }}>
              <div>{"{"}</div>
              {Object.entries(t.output).map(([key, value], i) => (
                <div key={key} className="ml-4" style={{ animationDelay: `${i * 0.1}s` }}>
                  <span style={{ color: "#7C3AED" }}>&quot;{key}&quot;</span>
                  <span style={{ color: "#94A3B8" }}>: </span>
                  <span style={{ color: key === "skills" ? "#4ADE80" : "#A78BFA" }}>{value}</span>
                  {i < Object.entries(t.output).length - 1 && <span>,</span>}
                </div>
              ))}
              <div>{"}"}</div>
            </div>

            {/* Separator */}
            <div className="mb-4" style={{ color: "rgba(124,58,237,0.3)" }}>
              {"─".repeat(50)}
            </div>

            {/* Name and role display */}
            <div className="mb-6">
              <div
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{
                  color: "#E2E8F0",
                  fontFamily: "monospace",
                  textShadow: "0 0 20px rgba(124,58,237,0.3)",
                }}
              >
                {t.name}
              </div>
              <div
                className="text-lg"
                style={{ color: "#7C3AED" }}
              >
                {t.heading}
              </div>
            </div>

            {/* Status line */}
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: "#4ADE80",
                  boxShadow: "0 0 8px rgba(74,222,128,0.5)",
                }}
              />
              <span className="text-xs" style={{ color: "rgba(74,222,128,0.7)" }}>
                {t.statusLine}
              </span>
            </div>

            {/* CTA buttons styled as terminal commands */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="group flex items-center gap-2 px-6 py-2.5 rounded text-sm font-mono font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#7C3AED",
                  color: "#FFF",
                  boxShadow: "0 4px 15px rgba(124,58,237,0.3)",
                }}
              >
                {">"} {t.cta}
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
                />
              </button>
              <button
                className="px-6 py-2.5 rounded text-sm font-mono font-semibold transition-colors"
                style={{
                  color: "#7C3AED",
                  border: "1px solid rgba(124,58,237,0.3)",
                }}
              >
                {">"} {t.secondary}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes termBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes matrixFall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(120vh); }
        }
      `}</style>
    </section>
  );
}
