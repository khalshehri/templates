"use client";

interface Hero08Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Where legacy meets\nthe future of enterprise",
    body: "Three decades of trusted advisory. We bring institutional knowledge, global networks, and an unwavering commitment to excellence.",
    cta: "Schedule a private briefing",
    trust: "Est. 2003 · BBB+ Rated · ISO 27001",
  },
  ar: {
    heading: "حيث يلتقي الإرث\nبمستقبل المؤسسات",
    body: "ثلاثة عقود من الاستشارات الموثوقة. نجمع بين المعرفة المؤسسية والشبكات العالمية والالتزام الراسخ بالتميز.",
    cta: "حدد موعداً لإحاطة خاصة",
    trust: "تأسست ٢٠٠٣ · تصنيف BBB+ · ISO 27001",
  },
};

export function Hero08({ language }: Hero08Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero08-glow-pulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }
        @keyframes hero08-line-expand {
          0% { width: 0; }
          100% { width: 4rem; }
        }
        @keyframes hero08-fade-up {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero08-glow { animation: none !important; opacity: 0.04 !important; }
          .hero08-line { animation: none !important; width: 4rem !important; }
          .hero08-fade { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#0c1222" }}
      >
        {/* BG Glow */}
        <div
          className="hero08-glow absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(202,138,4,0.04) 0%, transparent 60%)",
            animation: "hero08-glow-pulse 8s ease-in-out infinite",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {/* Gold line */}
          <div
            className="hero08-line h-px mx-auto bg-amber-500/40"
            style={{
              width: 0,
              animation: "hero08-line-expand 1s cubic-bezier(0.16,1,0.3,1) 0.2s forwards",
            }}
          />

          <div className="h-8" />

          {/* Heading */}
          <h1
            className={`hero08-fade text-4xl md:text-5xl lg:text-6xl font-light text-white/90 tracking-tight leading-[1.1] whitespace-pre-line ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
            style={{
              opacity: 0,
              animation: "hero08-fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards",
            }}
          >
            {t.heading}
          </h1>

          <div className="h-6" />

          {/* Body */}
          <p
            className={`hero08-fade text-gray-400 text-lg max-w-xl mx-auto leading-relaxed ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
            style={{
              opacity: 0,
              animation: "hero08-fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s forwards",
            }}
          >
            {t.body}
          </p>

          <div className="h-10" />

          {/* CTA */}
          <div
            className="hero08-fade"
            style={{
              opacity: 0,
              animation: "hero08-fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s forwards",
            }}
          >
            <button
              className={`bg-amber-500/10 border border-amber-500/25 text-amber-200 px-8 py-3.5 rounded-xl cursor-pointer transition-all duration-300 hover:bg-amber-500/20 hover:border-amber-500/40 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.cta}
            </button>
          </div>

          <div className="h-12" />

          {/* Trust metrics */}
          <p
            className={`hero08-fade text-xs text-gray-600 ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
            style={{
              opacity: 0,
              animation: "hero08-fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 1s forwards",
            }}
          >
            {t.trust}
          </p>
        </div>

        {/* Bottom gradient line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, rgba(245,158,11,0.08), transparent)",
          }}
        />
      </section>
    </>
  );
}
