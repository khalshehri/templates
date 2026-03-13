"use client";

interface Hero07Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Where legacy meets the future of enterprise",
    body: "Three decades of trusted advisory. We bring institutional knowledge, global networks, and an unwavering commitment to excellence.",
    cta: "Schedule a private briefing",
    trust: ["Est. 2003", "BBB+ Rated", "ISO 27001"],
  },
  ar: {
    heading: "حيث يلتقي الإرث بمستقبل المؤسسات",
    body: "ثلاثة عقود من الاستشارات الموثوقة. نجمع بين المعرفة المؤسسية والشبكات العالمية والالتزام الراسخ بالتميز.",
    cta: "حدد موعداً لإحاطة خاصة",
    trust: ["تأسست ٢٠٠٣", "تصنيف BBB+", "ISO 27001"],
  },
};

export function Hero07({ language }: Hero07Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0c1222" }}
    >
      <style>{`
        @keyframes hero07GlowPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }
        @keyframes hero07LineExpand {
          from { width: 0; }
          to { width: 4rem; }
        }
        @keyframes hero07FadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero07FadeOnly {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .hero07-glow {
          animation: hero07GlowPulse 8s ease-in-out infinite;
        }
        .hero07-gold-line {
          animation: hero07LineExpand 1s ease-out both;
          animation-delay: 0.2s;
        }
        .hero07-heading {
          animation: hero07FadeIn 0.8s ease-out both;
          animation-delay: 0.5s;
        }
        .hero07-body {
          animation: hero07FadeIn 0.8s ease-out both;
          animation-delay: 0.7s;
        }
        .hero07-cta {
          animation: hero07FadeIn 0.8s ease-out both;
          animation-delay: 0.9s;
        }
        .hero07-trust {
          animation: hero07FadeOnly 0.8s ease-out both;
          animation-delay: 1.1s;
        }
        .hero07-bottom-line {
          animation: hero07FadeOnly 1s ease-out both;
          animation-delay: 1.3s;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero07-glow,
          .hero07-gold-line,
          .hero07-heading,
          .hero07-body,
          .hero07-cta,
          .hero07-trust,
          .hero07-bottom-line {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            width: 4rem !important;
          }
        }
      `}</style>

      {/* Subtle Radial Glow */}
      <div
        className="hero07-glow absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(202, 138, 4, 0.04), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-20">
        {/* Gold Line */}
        <div className="flex justify-center mb-10">
          <div
            className="hero07-gold-line h-px"
            style={{
              backgroundColor: "rgba(245, 158, 11, 0.4)",
              width: 0,
            }}
          />
        </div>

        {/* Heading */}
        <h1
          className={`hero07-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-7 ${
            isAr
              ? "font-[family-name:var(--font-changa)]"
              : "font-[family-name:var(--font-inter)]"
          }`}
          style={{ color: "rgba(255, 255, 255, 0.9)" }}
        >
          {t.heading}
        </h1>

        {/* Body */}
        <p
          className={`hero07-body text-lg max-w-xl mx-auto leading-relaxed mb-10 text-gray-400 ${
            isAr
              ? "font-[family-name:var(--font-tajawal)]"
              : "font-[family-name:var(--font-inter)]"
          }`}
        >
          {t.body}
        </p>

        {/* CTA Button */}
        <button
          className={`hero07-cta px-8 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
            isAr
              ? "font-[family-name:var(--font-tajawal)]"
              : "font-[family-name:var(--font-inter)]"
          }`}
          style={{
            backgroundColor: "rgba(245, 158, 11, 0.1)",
            border: "1px solid rgba(245, 158, 11, 0.3)",
            color: "rgb(253, 230, 138)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              "rgba(245, 158, 11, 0.2)";
            e.currentTarget.style.borderColor =
              "rgba(245, 158, 11, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor =
              "rgba(245, 158, 11, 0.1)";
            e.currentTarget.style.borderColor =
              "rgba(245, 158, 11, 0.3)";
          }}
        >
          {t.cta}
        </button>

        {/* Trust Metrics */}
        <div
          className={`hero07-trust flex items-center justify-center gap-3 mt-10 text-xs ${
            isAr
              ? "font-[family-name:var(--font-tajawal)]"
              : "font-[family-name:var(--font-inter)]"
          }`}
          style={{ color: "rgb(75, 85, 99)" }}
        >
          {t.trust.map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && (
                <span style={{ color: "rgba(245, 158, 11, 0.35)" }}>
                  &middot;
                </span>
              )}
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Faint Line */}
      <div
        className="hero07-bottom-line absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(245, 158, 11, 0.1), transparent)",
        }}
      />
    </section>
  );
}
