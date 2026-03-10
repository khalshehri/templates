"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Freelancer",
    title: "Clean Code, Clear Results",
    description:
      "I write code that speaks for itself — well-structured, maintainable, and built to scale. Let's build something remarkable together.",
    cta: "Hire Me",
    secondary: "View GitHub",
    filename: "portfolio.tsx",
    tab2: "skills.json",
  },
  ar: {
    badge: "مستقل",
    title: "كود نظيف، نتائج واضحة",
    description:
      "أكتب كوداً يتحدث عن نفسه — منظم جيداً، قابل للصيانة، ومبني للتوسع. لنبنِ شيئاً رائعاً معاً.",
    cta: "وظّفني",
    secondary: "عرض GitHub",
    filename: "portfolio.tsx",
    tab2: "skills.json",
  },
};

export function FreelancerCode({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const codeLines = [
    { indent: 0, tokens: [{ text: "export", color: "#c084fc" }, { text: " ", color: "" }, { text: "default", color: "#c084fc" }, { text: " ", color: "" }, { text: "function", color: "#06b6d4" }, { text: " Portfolio", color: "#22d3ee" }, { text: "() {", color: "#9ca3af" }] },
    { indent: 1, tokens: [{ text: "const", color: "#c084fc" }, { text: " [skills] = ", color: "#9ca3af" }, { text: "useState", color: "#06b6d4" }, { text: "([", color: "#9ca3af" }] },
    { indent: 2, tokens: [{ text: "'React'", color: "#2dd4bf" }, { text: ", ", color: "#9ca3af" }, { text: "'Next.js'", color: "#2dd4bf" }, { text: ", ", color: "#9ca3af" }, { text: "'TypeScript'", color: "#2dd4bf" }, { text: ",", color: "#9ca3af" }] },
    { indent: 2, tokens: [{ text: "'Node.js'", color: "#2dd4bf" }, { text: ", ", color: "#9ca3af" }, { text: "'PostgreSQL'", color: "#2dd4bf" }, { text: ", ", color: "#9ca3af" }, { text: "'AWS'", color: "#2dd4bf" }] },
    { indent: 1, tokens: [{ text: "]);", color: "#9ca3af" }] },
    { indent: 0, tokens: [] },
    { indent: 1, tokens: [{ text: "const", color: "#c084fc" }, { text: " experience = ", color: "#9ca3af" }, { text: "8", color: "#f97316" }, { text: ";", color: "#9ca3af" }, { text: " // years", color: "#4a5568" }] },
    { indent: 1, tokens: [{ text: "const", color: "#c084fc" }, { text: " projects = ", color: "#9ca3af" }, { text: "120", color: "#f97316" }, { text: ";", color: "#9ca3af" }, { text: " // completed", color: "#4a5568" }] },
    { indent: 1, tokens: [{ text: "const", color: "#c084fc" }, { text: " rating = ", color: "#9ca3af" }, { text: "5.0", color: "#f97316" }, { text: ";", color: "#9ca3af" }, { text: " // client avg", color: "#4a5568" }] },
    { indent: 0, tokens: [] },
    { indent: 1, tokens: [{ text: "return", color: "#c084fc" }, { text: " (", color: "#9ca3af" }] },
    { indent: 2, tokens: [{ text: "<", color: "#9ca3af" }, { text: "Developer", color: "#06b6d4" }] },
    { indent: 3, tokens: [{ text: "available", color: "#2dd4bf" }, { text: "={", color: "#9ca3af" }, { text: "true", color: "#c084fc" }, { text: "}", color: "#9ca3af" }] },
    { indent: 3, tokens: [{ text: "passion", color: "#2dd4bf" }, { text: '="', color: "#9ca3af" }, { text: "infinite", color: "#2dd4bf" }, { text: '"', color: "#9ca3af" }] },
    { indent: 2, tokens: [{ text: "/>", color: "#9ca3af" }] },
    { indent: 1, tokens: [{ text: ");", color: "#9ca3af" }] },
    { indent: 0, tokens: [{ text: "}", color: "#9ca3af" }] },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* IDE Window */}
      <div
        className="absolute fcode-appear pointer-events-none"
        style={{
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "85%",
          maxWidth: 700,
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-t-lg"
          style={{ background: "rgba(30,30,30,0.9)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444", opacity: 0.6 }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#fbbf24", opacity: 0.6 }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e", opacity: 0.6 }} />
          </div>
          {/* Tabs */}
          <div className="flex gap-1 ml-4">
            <div className="px-3 py-1 rounded-t text-xs" style={{ background: "rgba(6,182,212,0.1)", color: "#06b6d4", borderBottom: "2px solid #06b6d4" }}>
              {t.filename}
            </div>
            <div className="px-3 py-1 rounded-t text-xs" style={{ color: "#4a5568" }}>
              {t.tab2}
            </div>
          </div>
        </div>

        {/* Code area with split - editor + minimap */}
        <div className="flex" style={{ background: "rgba(20,20,25,0.9)", borderRadius: "0 0 8px 8px" }}>
          {/* Line numbers gutter */}
          <div className="py-3 px-2 text-right select-none" style={{ minWidth: 40, borderRight: "1px solid rgba(255,255,255,0.03)" }}>
            {codeLines.map((_, i) => (
              <div key={i} className="text-xs leading-6" style={{ color: "rgba(255,255,255,0.15)" }}>
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code content */}
          <div className="py-3 px-4 flex-1 overflow-hidden">
            {codeLines.map((line, i) => (
              <div
                key={i}
                className="fcode-line-appear leading-6"
                style={{
                  paddingLeft: line.indent * 20,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {line.tokens.length === 0 ? (
                  <span>&nbsp;</span>
                ) : (
                  line.tokens.map((token, j) => (
                    <span key={j} className="text-xs font-mono" style={{ color: token.color }}>
                      {token.text}
                    </span>
                  ))
                )}
              </div>
            ))}
            {/* Cursor */}
            <div className="fcode-cursor" style={{
              width: 2,
              height: 16,
              background: "#06b6d4",
              marginTop: 4,
              marginLeft: 20,
            }} />
          </div>

          {/* Minimap */}
          <div className="py-3 px-2 hidden md:block" style={{ width: 60, borderLeft: "1px solid rgba(255,255,255,0.03)" }}>
            {codeLines.map((line, i) => (
              <div key={i} className="flex gap-px mb-0.5" style={{ paddingLeft: line.indent * 3 }}>
                {line.tokens.filter(t => t.text.trim()).map((_, j) => (
                  <div key={j} style={{ width: 4 + Math.random() * 8, height: 2, background: "rgba(6,182,212,0.15)", borderRadius: 1 }} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Terminal at bottom */}
      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: "70%", maxWidth: 500 }}>
        <div className="rounded-lg overflow-hidden" style={{ background: "rgba(20,20,20,0.8)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="px-3 py-1.5 text-xs" style={{ background: "rgba(30,30,30,0.9)", color: "#4a5568" }}>
            TERMINAL
          </div>
          <div className="px-3 py-2 font-mono text-xs">
            <div style={{ color: "#22c55e" }}>$ npm run build</div>
            <div className="fcode-terminal-line" style={{ color: "#4a5568", animationDelay: "1.5s" }}>✓ Compiled successfully</div>
            <div className="fcode-terminal-line" style={{ color: "#06b6d4", animationDelay: "2s" }}>✓ Ready to deploy</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-[420px]">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
          style={{
            color: "#06b6d4",
            borderColor: "rgba(6,182,212,0.3)",
            background: "rgba(6,182,212,0.08)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-extrabold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            background: "linear-gradient(135deg, #06b6d4, #14b8a6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t.title}
        </h1>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-400">
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #14b8a6)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(6,182,212,0.4)",
            }}
          >
            {isAr ? (
              <>
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                {t.cta}
              </>
            ) : (
              <>
                {t.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          <button
            className="px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(20,184,166,0.4)",
              color: "#2dd4bf",
              background: "rgba(20,184,166,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .fcode-appear {
          animation: fcodeAppear 0.8s ease-out forwards;
        }
        @keyframes fcodeAppear {
          0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .fcode-line-appear {
          animation: fcodeLine 0.5s ease-out forwards;
          opacity: 0;
        }
        @keyframes fcodeLine {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .fcode-cursor {
          animation: fcodeBlink 1s step-end infinite;
        }
        @keyframes fcodeBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .fcode-terminal-line {
          animation: fcodeTerminal 0.5s ease-out forwards;
          opacity: 0;
        }
        @keyframes fcodeTerminal {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
