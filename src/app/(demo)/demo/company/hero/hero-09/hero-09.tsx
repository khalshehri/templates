"use client";

interface Hero09Props {
  language: "en" | "ar";
}

const content = {
  en: {
    tab: "enterprise-dashboard",
    prompt: "> system.status",
    heading: "Enterprise infrastructure, reimagined",
    body: "Real-time operations management for organizations running at scale. Monitor, analyze, and optimize \u2014 all from one command center.",
    data: [
      { color: "bg-green-500", label: "47 Active Regions" },
      { color: "bg-blue-500", label: "2.4K Team Online" },
      { color: "bg-amber-500", label: "$18.2B Processed" },
    ],
    cta: "> init --start-project",
  },
  ar: {
    tab: "\u0644\u0648\u062D\u0629-\u0627\u0644\u0645\u0624\u0633\u0633\u0629",
    prompt: "> \u062D\u0627\u0644\u0629.\u0627\u0644\u0646\u0638\u0627\u0645",
    heading: "\u0628\u0646\u064A\u0629 \u062A\u062D\u062A\u064A\u0629 \u0645\u0624\u0633\u0633\u064A\u0629\u060C \u0623\u064F\u0639\u064A\u062F \u062A\u0635\u0648\u0631\u0647\u0627",
    body: "\u0625\u062F\u0627\u0631\u0629 \u0639\u0645\u0644\u064A\u0627\u062A \u0641\u0648\u0631\u064A\u0629 \u0644\u0644\u0645\u0624\u0633\u0633\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0639\u0645\u0644 \u0639\u0644\u0649 \u0646\u0637\u0627\u0642 \u0648\u0627\u0633\u0639. \u0631\u0627\u0642\u0628 \u0648\u062D\u0644\u0644 \u0648\u062D\u0633\u0651\u0646 \u2014 \u0643\u0644 \u0630\u0644\u0643 \u0645\u0646 \u0645\u0631\u0643\u0632 \u0642\u064A\u0627\u062F\u0629 \u0648\u0627\u062D\u062F.",
    data: [
      { color: "bg-green-500", label: "47 \u0645\u0646\u0637\u0642\u0629 \u0646\u0634\u0637\u0629" },
      { color: "bg-blue-500", label: "2.4 \u0623\u0644\u0641 \u0641\u0631\u064A\u0642 \u0645\u062A\u0635\u0644" },
      { color: "bg-amber-500", label: "$18.2 \u0645\u0644\u064A\u0627\u0631 \u0645\u064F\u0639\u0627\u0644\u062C\u0629" },
    ],
    cta: "> \u0628\u062F\u0621 --\u0645\u0634\u0631\u0648\u0639-\u062C\u062F\u064A\u062F",
  },
};

export function Hero09({ language }: Hero09Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero09-card-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero09-typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes hero09-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes hero09-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes hero09-data-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero09-card {
          opacity: 0;
          animation: hero09-card-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero09-prompt-wrapper {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: hero09-typing 0.6s steps(16) 0.4s forwards;
          width: 0;
        }
        .hero09-cursor {
          animation: hero09-blink 1s step-end infinite;
        }
        .hero09-response {
          opacity: 0;
          animation: hero09-fade-in 0.5s ease 1.2s forwards;
        }
        .hero09-body-text {
          opacity: 0;
          animation: hero09-fade-in 0.5s ease 1.5s forwards;
        }
        .hero09-data-0 {
          opacity: 0;
          animation: hero09-data-in 0.4s ease 1.8s forwards;
        }
        .hero09-data-1 {
          opacity: 0;
          animation: hero09-data-in 0.4s ease 2.0s forwards;
        }
        .hero09-data-2 {
          opacity: 0;
          animation: hero09-data-in 0.4s ease 2.2s forwards;
        }
        .hero09-cta {
          opacity: 0;
          animation: hero09-fade-in 0.5s ease 2.5s forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero09-card,
          .hero09-response,
          .hero09-body-text,
          .hero09-data-0,
          .hero09-data-1,
          .hero09-data-2,
          .hero09-cta {
            animation: none;
            opacity: 1;
            transform: translateY(0);
          }
          .hero09-prompt-wrapper {
            animation: none;
            width: 100%;
          }
          .hero09-cursor {
            animation: none;
          }
        }
      `}</style>
      <section
        className="min-h-screen flex items-center justify-center bg-[#111111] px-4 py-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Terminal Card */}
        <div className="hero09-card max-w-3xl w-full border border-white/[0.08] rounded-xl overflow-hidden">
          {/* Top Bar */}
          <div className="bg-gray-900 border-b border-white/[0.06] px-4 py-2.5 flex items-center">
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <span
                className="block w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: "#ff5f57" }}
              />
              <span
                className="block w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: "#febc2e" }}
              />
              <span
                className="block w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: "#28c840" }}
              />
            </div>
            {/* Tab */}
            <span className="text-[11px] text-gray-500 font-mono mx-auto">
              {t.tab}
            </span>
            {/* Spacer to balance traffic lights */}
            <div className="w-[54px]" />
          </div>

          {/* Body */}
          <div className="bg-[#0a0a0a] p-6 md:p-8">
            {/* Prompt line */}
            <div className="font-mono text-sm text-green-500 flex items-center">
              <span className="hero09-prompt-wrapper">{t.prompt}</span>
              <span className="hero09-cursor inline-block w-[2px] h-[1em] bg-green-500 ms-0.5" />
            </div>

            {/* Spacer */}
            <div className="h-6" />

            {/* Heading (response) */}
            <h1
              className={`hero09-response text-white text-2xl md:text-3xl font-semibold leading-tight ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.heading}
            </h1>

            {/* Spacer */}
            <div className="h-4" />

            {/* Body */}
            <p
              className={`hero09-body-text text-gray-500 text-sm md:text-base max-w-xl ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.body}
            </p>

            {/* Spacer */}
            <div className="h-6" />

            {/* Data indicators */}
            <div className="flex flex-wrap gap-4 md:gap-6">
              {t.data.map((item, i) => (
                <div
                  key={i}
                  className={`hero09-data-${i} flex items-center gap-2 font-mono text-[11px] text-gray-400`}
                >
                  <span
                    className={`block w-1.5 h-1.5 rounded-full ${item.color}`}
                  />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Spacer */}
            <div className="h-8" />

            {/* CTA */}
            <button
              className="hero09-cta font-mono text-sm text-green-500 hover:text-green-400 cursor-pointer transition-all duration-300 bg-transparent border-none p-0 text-start"
            >
              {t.cta}
              <span className="hero09-cursor inline-block w-[2px] h-[1em] bg-green-500 ms-0.5 align-text-bottom" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
