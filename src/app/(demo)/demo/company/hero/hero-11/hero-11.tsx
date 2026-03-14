"use client";

import { ArrowRight, Zap } from "lucide-react";

const content = {
  en: {
    badge: "Dual Power",
    heading1: "Where Strategy",
    heading2: "Meets Innovation",
    sub: "We bridge the gap between strategic vision and innovative execution, delivering solutions that transform industries.",
    cta1: "Get Started",
    cta2: "Learn More",
    cards: [
      { num: "01", title: "Discover", desc: "We analyze your landscape" },
      { num: "02", title: "Design", desc: "We craft tailored solutions" },
      { num: "03", title: "Deliver", desc: "We execute with precision" },
    ],
    stats: [
      { value: "250+", label: "Enterprise Clients" },
      { value: "18", label: "Industries" },
      { value: "$5B+", label: "Impact" },
      { value: "99%", label: "Satisfaction" },
    ],
  },
  ar: {
    badge: "قوة مزدوجة",
    heading1: "حيث تلتقي",
    heading2: "الاستراتيجية بالابتكار",
    sub: "نسد الفجوة بين الرؤية الاستراتيجية والتنفيذ المبتكر، ونقدم حلولاً تحول الصناعات.",
    cta1: "ابدأ الآن",
    cta2: "اعرف المزيد",
    cards: [
      { num: "01", title: "اكتشف", desc: "نحلل المشهد الخاص بك" },
      { num: "02", title: "صمّم", desc: "نصنع حلولاً مخصصة" },
      { num: "03", title: "أنجز", desc: "ننفذ بدقة متناهية" },
    ],
    stats: [
      { value: "+250", label: "عملاء مؤسسات" },
      { value: "18", label: "صناعة" },
      { value: "+5B$", label: "تأثير" },
      { value: "99%", label: "رضا العملاء" },
    ],
  },
};

export function Hero11({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const clipLtr = "polygon(45% 0, 100% 0, 100% 100%, 55% 100%)";
  const clipRtl = "polygon(0 0, 55% 0, 45% 100%, 0 100%)";
  const clipFrom = isAr
    ? "polygon(0 0, 0 0, 0 100%, 0 100%)"
    : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
  const clipTo = isAr ? clipRtl : clipLtr;

  // Ray angles match the diagonal (~10deg). For RTL, mirror.
  const rayAngle = isAr ? -10 : 10;
  // Deterministic ray positions along the diagonal split line
  const rays = [
    { top: "10%", left: isAr ? "52%" : "48%", height: "35%", delay: "0s" },
    { top: "30%", left: isAr ? "50%" : "50%", height: "45%", delay: "1.5s" },
    { top: "55%", left: isAr ? "48%" : "52%", height: "30%", delay: "3s" },
    { top: "20%", left: isAr ? "49%" : "51%", height: "50%", delay: "0.8s" },
  ];

  return (
    <>
      <style>{`
        @keyframes splitReveal {
          from { clip-path: ${clipFrom}; }
          to { clip-path: ${clipTo}; }
        }
        @keyframes rayPulse {
          0%, 100% { opacity: 0; transform: scaleY(0.8) rotate(${rayAngle}deg); }
          50% { opacity: 0.08; transform: scaleY(1.1) rotate(${rayAngle}deg); }
        }
        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateX(${isAr ? "-30px" : "30px"}); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes contentFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero11-split-overlay { animation: none !important; clip-path: ${clipTo} !important; }
          .hero11-ray { animation: none !important; opacity: 0.04 !important; }
          .hero11-card { animation: none !important; opacity: 1 !important; }
          .hero11-content { animation: none !important; opacity: 1 !important; }
          .hero11-glow { animation: none !important; }
        }
      `}</style>

      <section
        className="min-h-screen relative overflow-hidden"
        style={{ background: "#0b1121" }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Teal overlay with diagonal clip-path */}
        <div
          className="hero11-split-overlay absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 60%, #0d9488 100%)",
            clipPath: clipTo,
            animation: "splitReveal 1s ease-out forwards",
            zIndex: 1,
          }}
        />

        {/* Subtle texture on dark side */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(13, 148, 136, 0.06) 0%, transparent 50%)",
            zIndex: 1,
          }}
        />

        {/* Glow along split line */}
        <div
          className="hero11-glow absolute"
          style={{
            top: 0,
            left: isAr ? undefined : "47%",
            right: isAr ? "47%" : undefined,
            width: "6%",
            height: "100%",
            background: `linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.12) 30%, rgba(20,184,166,0.18) 50%, rgba(255,255,255,0.12) 70%, transparent 100%)`,
            transform: `rotate(${rayAngle}deg) scaleY(1.3)`,
            transformOrigin: "center center",
            filter: "blur(20px)",
            animation: "glowPulse 4s ease-in-out infinite",
            zIndex: 2,
          }}
        />

        {/* Light rays along the diagonal */}
        {rays.map((ray, i) => (
          <div
            key={i}
            className="hero11-ray absolute"
            style={{
              top: ray.top,
              left: ray.left,
              width: "2px",
              height: ray.height,
              background:
                "linear-gradient(180deg, transparent, rgba(255,255,255,0.15), transparent)",
              transform: `rotate(${rayAngle}deg)`,
              transformOrigin: "center center",
              animation: `rayPulse ${4 + i * 0.7}s ease-in-out ${ray.delay} infinite`,
              zIndex: 3,
            }}
          />
        ))}

        {/* Main content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left content (dark side) */}
                <div
                  className="hero11-content"
                  style={{
                    animation: "contentFade 0.8s ease-out 0.3s both",
                  }}
                >
                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                    style={{
                      background: "rgba(13, 148, 136, 0.15)",
                      border: "1px solid rgba(13, 148, 136, 0.3)",
                    }}
                  >
                    <Zap className="w-4 h-4" style={{ color: "#5eead4" }} />
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: "#5eead4",
                        fontFamily: isAr
                          ? "var(--font-tajawal), sans-serif"
                          : "var(--font-inter), sans-serif",
                      }}
                    >
                      {t.badge}
                    </span>
                  </div>

                  {/* Heading */}
                  <h1
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
                    style={{
                      fontFamily: isAr
                        ? "var(--font-changa), sans-serif"
                        : "var(--font-inter), sans-serif",
                    }}
                  >
                    <span className="text-white block">{t.heading1}</span>
                    <span className="block" style={{ color: "#5eead4" }}>
                      {t.heading2}
                    </span>
                  </h1>

                  {/* Sub */}
                  <p
                    className="text-lg sm:text-xl leading-relaxed mb-10 max-w-lg"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: isAr
                        ? "var(--font-tajawal), sans-serif"
                        : "var(--font-inter), sans-serif",
                    }}
                  >
                    {t.sub}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    <button
                      className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-[1.03] active:scale-[0.98]"
                      style={{
                        background: "linear-gradient(135deg, #0d9488, #14b8a6)",
                        fontFamily: isAr
                          ? "var(--font-tajawal), sans-serif"
                          : "var(--font-inter), sans-serif",
                      }}
                    >
                      {t.cta1}
                      <ArrowRight
                        className="w-4 h-4"
                        style={{
                          transform: isAr ? "scaleX(-1)" : undefined,
                        }}
                      />
                    </button>
                    <button
                      className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
                      style={{
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.3)",
                        fontFamily: isAr
                          ? "var(--font-tajawal), sans-serif"
                          : "var(--font-inter), sans-serif",
                      }}
                    >
                      {t.cta2}
                    </button>
                  </div>
                </div>

                {/* Right content (teal side) — feature cards */}
                <div className="flex flex-col gap-4">
                  {t.cards.map((card, i) => (
                    <div
                      key={i}
                      className="hero11-card rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        animation: `cardSlideIn 0.6s ease-out ${0.6 + i * 0.15}s both`,
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className="text-3xl font-bold shrink-0"
                          style={{
                            color: "rgba(255,255,255,0.2)",
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                        >
                          {card.num}
                        </span>
                        <div>
                          <h3
                            className="text-xl font-bold text-white mb-1"
                            style={{
                              fontFamily: isAr
                                ? "var(--font-changa), sans-serif"
                                : "var(--font-inter), sans-serif",
                              textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                            }}
                          >
                            {card.title}
                          </h3>
                          <p
                            className="text-sm"
                            style={{
                              color: "rgba(255,255,255,0.8)",
                              fontFamily: isAr
                                ? "var(--font-tajawal), sans-serif"
                                : "var(--font-inter), sans-serif",
                              textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                            }}
                          >
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom stats bar */}
          <div
            className="relative z-10 w-full"
            style={{
              background: "rgba(11, 17, 33, 0.7)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                {t.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="hero11-content text-center sm:text-start"
                    style={{
                      animation: `contentFade 0.5s ease-out ${1 + i * 0.1}s both`,
                    }}
                  >
                    <div
                      className="text-2xl sm:text-3xl font-bold mb-1"
                      style={{
                        color: "#5eead4",
                        fontFamily: "var(--font-inter), sans-serif",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs sm:text-sm"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: isAr
                          ? "var(--font-tajawal), sans-serif"
                          : "var(--font-inter), sans-serif",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
