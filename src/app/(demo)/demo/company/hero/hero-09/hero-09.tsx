"use client";

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
  const t = content[language];
  const isAr = language === "ar";
  const promptLen = t.prompt.length;

  return (
    <>
      <style>{`
        @keyframes hero09-card-in {
          0% { opacity: 0; transform: translateY(24px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes hero09-type {
          0% { width: 0; }
          100% { width: ${promptLen}ch; }
        }
        @keyframes hero09-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes hero09-response-in {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero09-badge-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero09-card { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero09-type { animation: none !important; width: auto !important; overflow: visible !important; }
          .hero09-cursor { animation: none !important; opacity: 0 !important; }
          .hero09-response { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero09-badge { animation: none !important; opacity: 1 !important; }
          .hero09-cta { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <section
        className="relative min-h-screen flex items-center justify-center px-4 py-16"
        style={{
          backgroundColor: "#111111",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Terminal Card */}
        <div
          className="hero09-card relative max-w-3xl w-full border border-white/[0.08] rounded-xl overflow-hidden"
          style={{
            opacity: 0,
            animation: "hero09-card-in 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards",
          }}
        >
          {/* Top Bar */}
          <div className="bg-[#1a1a1a] border-b border-white/[0.06] px-4 py-2.5 flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#febc2e" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#28c840" }} />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[11px] text-gray-500 font-mono">{t.tab}</span>
            </div>
            <div className="w-[52px]" />
          </div>

          {/* Body */}
          <div className="bg-[#0a0a0a] p-6 md:p-8 space-y-6">
            {/* Prompt line */}
            <div className="flex items-center">
              <span
                className="hero09-type text-green-500 text-sm font-mono inline-block overflow-hidden whitespace-nowrap"
                style={{
                  width: 0,
                  animation: `hero09-type 1s steps(${promptLen}) 0.5s forwards`,
                }}
              >
                {t.prompt}
              </span>
              <span
                className="hero09-cursor inline-block w-2 h-4 bg-green-500 ml-0.5"
                style={{
                  animation: "hero09-blink 1s step-end infinite",
                }}
              />
            </div>

            {/* Heading */}
            <h1
              className={`hero09-response text-2xl md:text-3xl font-semibold text-white ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
              style={{
                opacity: 0,
                animation: "hero09-response-in 0.6s cubic-bezier(0.16,1,0.3,1) 1.2s forwards",
              }}
            >
              {t.heading}
            </h1>

            {/* Body text */}
            <p
              className={`hero09-response text-gray-500 text-sm md:text-base ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
              style={{
                opacity: 0,
                animation: "hero09-response-in 0.6s cubic-bezier(0.16,1,0.3,1) 1.4s forwards",
              }}
            >
              {t.body}
            </p>

            {/* Data badges */}
            <div className="flex flex-wrap gap-4">
              {t.data.map((item, i) => (
                <div
                  key={i}
                  className="hero09-badge inline-flex items-center gap-2"
                  style={{
                    opacity: 0,
                    animation: `hero09-badge-in 0.4s ease ${1.6 + i * 0.15}s forwards`,
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-mono text-[11px] text-gray-500">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="hero09-cta"
              style={{
                opacity: 0,
                animation: "hero09-response-in 0.5s cubic-bezier(0.16,1,0.3,1) 2.1s forwards",
              }}
            >
              <button
                className="text-green-500 hover:text-green-400 font-mono text-sm cursor-pointer transition-all duration-300 flex items-center gap-0"
              >
                <span>{t.cta}</span>
                <span
                  className="inline-block w-2 h-4 bg-green-500/80 ml-0.5"
                  style={{ animation: "hero09-blink 1s step-end infinite" }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
