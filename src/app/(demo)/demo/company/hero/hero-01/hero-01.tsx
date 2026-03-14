"use client";

import { Shield, ArrowRight, Sparkles, Quote } from "lucide-react";

const content = {
  en: {
    badge: "Enterprise Solutions",
    heading1: "Building Tomorrow's",
    heading2: "Digital Infrastructure",
    sub: "We deliver enterprise-grade technology solutions that scale with your ambition. From strategy to execution, we're your partner in digital transformation.",
    cta1: "Start Your Project",
    cta2: "View Case Studies",
    quote: "Transformed our entire digital operations in 90 days.",
    quoteAuthor: "Sarah M., CTO",
    statYears: "12+",
    statYearsLabel: "Years",
    statClients: "500+",
    statClientsLabel: "Clients",
    statSuccess: "98%",
    statSuccessLabel: "Success Rate",
    statManaged: "$2.4B",
    statManagedLabel: "Managed",
    explore: "Explore",
  },
  ar: {
    badge: "حلول المؤسسات",
    heading1: "نبني بنية",
    heading2: "العالم الرقمي",
    sub: "نقدم حلولاً تقنية بمستوى المؤسسات تنمو مع طموحاتك. من الاستراتيجية إلى التنفيذ، نحن شريكك في التحول الرقمي.",
    cta1: "ابدأ مشروعك",
    cta2: "عرض دراسات الحالة",
    quote: "حوّلوا عملياتنا الرقمية بالكامل في 90 يوماً.",
    quoteAuthor: "سارة م.، مدير تقني",
    statYears: "+12",
    statYearsLabel: "سنة",
    statClients: "+500",
    statClientsLabel: "عميل",
    statSuccess: "98%",
    statSuccessLabel: "نسبة النجاح",
    statManaged: "$2.4B",
    statManagedLabel: "تمت إدارتها",
    explore: "استكشف",
  },
};

export function Hero01({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  const barHeights = [60, 85, 45, 95, 70];

  return (
    <>
      <style>{`
        @keyframes gridFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes barGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes ringProgress {
          from { stroke-dashoffset: 251; }
          to { stroke-dashoffset: 5; }
        }
        @keyframes pulseRing {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes floatQuote {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes borderGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes contentSlide {
          from { opacity: 0; transform: translateX(${isAr ? "30px" : "-30px"}); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .hero01-grid-cell {
          opacity: 0;
          animation: gridFadeIn 0.6s ease-out forwards;
        }
        .hero01-grid-cell:nth-child(1) { animation-delay: 0.3s; }
        .hero01-grid-cell:nth-child(2) { animation-delay: 0.45s; }
        .hero01-grid-cell:nth-child(3) { animation-delay: 0.6s; }
        .hero01-grid-cell:nth-child(4) { animation-delay: 0.75s; }
        .hero01-grid-cell:nth-child(5) { animation-delay: 0.9s; }
        .hero01-grid-cell:nth-child(6) { animation-delay: 1.05s; }

        .hero01-content-slide {
          opacity: 0;
          animation: contentSlide 0.8s ease-out 0.1s forwards;
        }

        .hero01-bar {
          transform-origin: bottom;
          transform: scaleY(0);
          animation: barGrow 0.8s ease-out forwards;
        }
        .hero01-bar:nth-child(1) { animation-delay: 0.6s; }
        .hero01-bar:nth-child(2) { animation-delay: 0.75s; }
        .hero01-bar:nth-child(3) { animation-delay: 0.9s; }
        .hero01-bar:nth-child(4) { animation-delay: 1.05s; }
        .hero01-bar:nth-child(5) { animation-delay: 1.2s; }

        .hero01-ring-progress {
          stroke-dasharray: 251;
          stroke-dashoffset: 251;
          animation: ringProgress 1.5s ease-out 1s forwards;
        }

        .hero01-pulse-ring {
          animation: pulseRing 2s ease-out infinite;
        }

        .hero01-float-quote {
          animation: floatQuote 3s ease-in-out infinite;
        }

        .hero01-border-glow {
          background: linear-gradient(90deg, #22d3ee, #0ea5e9, #06b6d4, #22d3ee);
          background-size: 300% 100%;
          animation: borderGlow 3s ease infinite;
        }

        .hero01-shimmer {
          background: linear-gradient(90deg, transparent, rgba(34,211,238,0.08), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero01-grid-cell,
          .hero01-content-slide {
            opacity: 1;
            animation: none;
            transform: none;
          }
          .hero01-bar {
            animation: none;
            transform: scaleY(1);
          }
          .hero01-ring-progress {
            animation: none;
            stroke-dashoffset: 5;
          }
          .hero01-pulse-ring {
            animation: none;
          }
          .hero01-float-quote {
            animation: none;
          }
          .hero01-border-glow {
            animation: none;
          }
          .hero01-shimmer {
            animation: none;
          }
        }
      `}</style>

      <section
        className="min-h-screen relative overflow-hidden flex items-center"
        style={{
          backgroundColor: "#050a14",
          fontFamily: fontBody,
        }}
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Radial glow behind bento grid */}
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            [isAr ? "left" : "right"]: "10%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.08) 0%, rgba(6,182,212,0.02) 40%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Main layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left content */}
            <div
              className={`hero01-content-slide ${isAr ? "lg:order-2" : "lg:order-1"}`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "rgba(6,182,212,0.1)",
                    color: "#22d3ee",
                    border: "1px solid rgba(6,182,212,0.2)",
                    fontFamily: fontBody,
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.badge}
                </span>
              </div>

              {/* Heading */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                style={{ fontFamily: fontHeading }}
              >
                <span className="text-white block">{t.heading1}</span>
                <span
                  className="block mt-2"
                  style={{
                    background: "linear-gradient(135deg, #22d3ee, #0ea5e9, #38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t.heading2}
                </span>
              </h1>

              {/* Subheading */}
              <p
                className="text-lg leading-relaxed mb-10 max-w-lg"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: fontBody,
                }}
              >
                {t.sub}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button
                  className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    backgroundColor: "#06b6d4",
                    color: "#050a14",
                    fontFamily: fontBody,
                  }}
                >
                  {t.cta1}
                  <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
                </button>
                <button
                  className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: fontBody,
                  }}
                >
                  {t.cta2}
                </button>
              </div>

              {/* Bottom stats row */}
              <div
                className="mt-12 flex items-center gap-8"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem" }}
              >
                {[
                  { value: t.statClients, label: t.statClientsLabel },
                  { value: t.statManaged, label: t.statManagedLabel },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: fontHeading }}>
                      {stat.value}
                    </div>
                    <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side — Bento Grid */}
            <div className={`${isAr ? "lg:order-1" : "lg:order-2"}`}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none">

                {/* Cell 1: Stat — 12+ Years */}
                <div
                  className="hero01-grid-cell rounded-2xl p-5 relative overflow-hidden"
                  style={{
                    backgroundColor: "rgba(6,182,212,0.05)",
                    border: "1px solid rgba(6,182,212,0.1)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="hero01-shimmer absolute inset-0 rounded-2xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "rgba(6,182,212,0.15)" }}
                        >
                          <span className="text-lg font-bold" style={{ color: "#22d3ee" }}>
                            {isAr ? "+" : "#"}
                          </span>
                        </div>
                        <div
                          className="hero01-pulse-ring absolute inset-0 rounded-full"
                          style={{ border: "2px solid rgba(34,211,238,0.3)" }}
                        />
                      </div>
                    </div>
                    <div
                      className="text-3xl font-bold text-white mb-1"
                      style={{ fontFamily: fontHeading }}
                    >
                      {t.statYears}
                    </div>
                    <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {t.statYearsLabel}
                    </div>
                  </div>
                </div>

                {/* Cell 2: Chart — Bar Chart */}
                <div
                  className="hero01-grid-cell rounded-2xl p-5 relative overflow-hidden"
                  style={{
                    backgroundColor: "rgba(6,182,212,0.05)",
                    border: "1px solid rgba(6,182,212,0.1)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="text-xs font-medium mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {isAr ? "النمو السنوي" : "Annual Growth"}
                  </div>
                  <div className="flex items-end gap-2 h-20">
                    {barHeights.map((h, i) => (
                      <div
                        key={i}
                        className="hero01-bar flex-1 rounded-t-md"
                        style={{
                          height: `${h}%`,
                          background:
                            i === 3
                              ? "linear-gradient(to top, #06b6d4, #22d3ee)"
                              : "rgba(6,182,212,0.25)",
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {["20", "21", "22", "23", "24"].map((y) => (
                      <span
                        key={y}
                        className="text-[10px]"
                        style={{ color: "rgba(255,255,255,0.25)" }}
                      >
                        '{y}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cell 3: Shield Icon with border glow */}
                <div
                  className="hero01-grid-cell rounded-2xl relative overflow-hidden"
                  style={{ padding: "2px" }}
                >
                  <div className="hero01-border-glow absolute inset-0 rounded-2xl" />
                  <div
                    className="relative rounded-[14px] p-5 h-full flex flex-col items-center justify-center"
                    style={{ backgroundColor: "#050a14" }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: "rgba(6,182,212,0.1)" }}
                    >
                      <Shield className="w-7 h-7" style={{ color: "#22d3ee" }} />
                    </div>
                    <div
                      className="text-sm font-medium text-center"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {isAr ? "أمان مؤسسي" : "Enterprise Security"}
                    </div>
                    <div
                      className="text-xs mt-1 text-center"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      {isAr ? "معتمد SOC2" : "SOC2 Certified"}
                    </div>
                  </div>
                </div>

                {/* Cell 4: Quote */}
                <div
                  className="hero01-grid-cell hero01-float-quote rounded-2xl p-5 relative overflow-hidden"
                  style={{
                    backgroundColor: "rgba(6,182,212,0.05)",
                    border: "1px solid rgba(6,182,212,0.1)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Quote
                    className="w-5 h-5 mb-3"
                    style={{ color: "rgba(34,211,238,0.4)" }}
                  />
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontFamily: fontBody,
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "rgba(34,211,238,0.6)" }}
                  >
                    {t.quoteAuthor}
                  </div>
                </div>

                {/* Cell 5: Metric — 98% with SVG ring */}
                <div
                  className="hero01-grid-cell rounded-2xl p-5 relative overflow-hidden flex flex-col items-center justify-center"
                  style={{
                    backgroundColor: "rgba(6,182,212,0.05)",
                    border: "1px solid rgba(6,182,212,0.1)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="relative w-20 h-20 mb-2">
                    <svg
                      viewBox="0 0 90 90"
                      className="w-full h-full -rotate-90"
                    >
                      <circle
                        cx="45"
                        cy="45"
                        r="40"
                        fill="none"
                        stroke="rgba(6,182,212,0.1)"
                        strokeWidth="5"
                      />
                      <circle
                        cx="45"
                        cy="45"
                        r="40"
                        fill="none"
                        stroke="#22d3ee"
                        strokeWidth="5"
                        strokeLinecap="round"
                        className="hero01-ring-progress"
                      />
                    </svg>
                    <div
                      className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white"
                      style={{ fontFamily: fontHeading }}
                    >
                      {t.statSuccess}
                    </div>
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {t.statSuccessLabel}
                  </div>
                </div>

                {/* Cell 6: CTA — Explore */}
                <div
                  className="hero01-grid-cell rounded-2xl p-5 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    backgroundColor: "rgba(6,182,212,0.05)",
                    border: "1px solid rgba(6,182,212,0.1)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(34,211,238,0.1), transparent 70%)",
                    }}
                  />
                  <div className="relative h-full flex flex-col items-center justify-center">
                    <div
                      className="flex items-center gap-2 text-lg font-semibold transition-colors duration-300"
                      style={{ color: "#22d3ee", fontFamily: fontHeading }}
                    >
                      {t.explore}
                      <ArrowRight
                        className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`}
                      />
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      {isAr ? "معرض الأعمال" : "Our Portfolio"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
