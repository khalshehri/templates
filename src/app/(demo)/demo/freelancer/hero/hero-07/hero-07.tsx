"use client";

import { Search, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "My Process",
    headingLine1: "From Idea",
    headingLine2: "To Launch",
    sub: "A structured approach that turns your vision into a polished digital product.",
    framework: "Every project follows this battle-tested framework",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description:
          "I deep-dive into your business, audience, and goals to create a strategic foundation.",
        time: "~2 days",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Wireframes and high-fidelity mockups crafted with precision and your feedback.",
        time: "~5 days",
      },
      {
        number: "03",
        title: "Development",
        description:
          "Clean, performant code bringing the designs to life with modern technologies.",
        time: "~10 days",
      },
      {
        number: "04",
        title: "Launch",
        description:
          "Thorough testing, deployment, and handover with documentation and training.",
        time: "~3 days",
      },
    ],
    cta1: "Start Your Project",
    cta2: "View Timeline",
    stats: [
      { value: "20 days", label: "Avg. Delivery" },
      { value: "100%", label: "On Time" },
      { value: "0", label: "Surprises" },
    ],
  },
  ar: {
    badge: "منهجيتي",
    headingLine1: "من الفكرة",
    headingLine2: "إلى الإطلاق",
    sub: "نهج منظم يحوّل رؤيتك إلى منتج رقمي متكامل.",
    framework: "كل مشروع يتبع هذا الإطار المُجرّب",
    steps: [
      {
        number: "01",
        title: "الاكتشاف",
        description:
          "أتعمق في فهم عملك وجمهورك وأهدافك لبناء أساس استراتيجي متين.",
        time: "~يومان",
      },
      {
        number: "02",
        title: "التصميم",
        description:
          "إطارات سلكية ونماذج عالية الدقة مصممة بعناية وبملاحظاتك.",
        time: "~5 أيام",
      },
      {
        number: "03",
        title: "التطوير",
        description:
          "كود نظيف وعالي الأداء يحوّل التصاميم إلى واقع بأحدث التقنيات.",
        time: "~10 أيام",
      },
      {
        number: "04",
        title: "الإطلاق",
        description:
          "اختبار شامل ونشر وتسليم مع التوثيق والتدريب اللازم.",
        time: "~3 أيام",
      },
    ],
    cta1: "ابدأ مشروعك",
    cta2: "عرض الجدول الزمني",
    stats: [
      { value: "20 يوم", label: "متوسط التسليم" },
      { value: "100%", label: "في الموعد" },
      { value: "0", label: "مفاجآت" },
    ],
  },
};

const icons = [Search, PenTool, Code2, Rocket];

export function Hero07({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes cardSlideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes travelDot {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        @keyframes travelDotRtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes travelDotVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        @keyframes numberReveal {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes lineGrowVertical {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes contentFade {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .hero07-card { animation: cardSlideUp 0.6s ease-out both; }
        .hero07-card-0 { animation-delay: 0.2s; }
        .hero07-card-1 { animation-delay: 0.4s; }
        .hero07-card-2 { animation-delay: 0.6s; }
        .hero07-card-3 { animation-delay: 0.8s; }

        .hero07-number { animation: numberReveal 0.5s ease-out both; }
        .hero07-number-0 { animation-delay: 0.4s; }
        .hero07-number-1 { animation-delay: 0.6s; }
        .hero07-number-2 { animation-delay: 0.8s; }
        .hero07-number-3 { animation-delay: 1.0s; }

        .hero07-line { animation: lineGrow 0.6s ease-out both; transform-origin: left center; }
        .hero07-line-rtl { animation: lineGrow 0.6s ease-out both; transform-origin: right center; }
        .hero07-line-0 { animation-delay: 0.6s; }
        .hero07-line-1 { animation-delay: 0.8s; }
        .hero07-line-2 { animation-delay: 1.0s; }

        .hero07-line-v { animation: lineGrowVertical 0.6s ease-out both; transform-origin: top center; }
        .hero07-line-v-0 { animation-delay: 0.6s; }
        .hero07-line-v-1 { animation-delay: 0.8s; }
        .hero07-line-v-2 { animation-delay: 1.0s; }

        .hero07-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f43f5e;
          position: absolute;
          top: 50%;
          margin-top: -4px;
          box-shadow: 0 0 8px #f43f5e88;
        }
        .hero07-dot-ltr {
          left: 0;
          animation: travelDot 2s ease-in-out infinite;
        }
        .hero07-dot-rtl {
          right: 0;
          animation: travelDotRtl 2s ease-in-out infinite;
        }
        .hero07-dot-0 { animation-delay: 1.0s; }
        .hero07-dot-1 { animation-delay: 1.4s; }
        .hero07-dot-2 { animation-delay: 1.8s; }

        .hero07-dot-v {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f43f5e;
          position: absolute;
          left: 50%;
          margin-left: -4px;
          top: 0;
          box-shadow: 0 0 8px #f43f5e88;
          animation: travelDotVertical 2s ease-in-out infinite;
        }
        .hero07-dot-v-0 { animation-delay: 1.0s; }
        .hero07-dot-v-1 { animation-delay: 1.4s; }
        .hero07-dot-v-2 { animation-delay: 1.8s; }

        .hero07-content { animation: contentFade 0.7s ease-out 0.1s both; }
        .hero07-bottom { animation: contentFade 0.7s ease-out 1.2s both; }

        @media (prefers-reduced-motion: reduce) {
          .hero07-card,
          .hero07-number,
          .hero07-line,
          .hero07-line-rtl,
          .hero07-line-v,
          .hero07-content,
          .hero07-bottom {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero07-dot,
          .hero07-dot-ltr,
          .hero07-dot-rtl,
          .hero07-dot-v {
            animation: none !important;
            display: none !important;
          }
        }
      `}</style>

      <section
        style={{
          background: "#09090b",
          fontFamily: fontBody,
        }}
        className="min-h-screen relative overflow-hidden"
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32">
          {/* Top Section */}
          <div className="text-center hero07-content">
            {/* Badge */}
            <div className="inline-flex items-center mb-6">
              <span
                style={{
                  background: "rgba(244, 63, 94, 0.1)",
                  border: "1px solid rgba(244, 63, 94, 0.2)",
                  color: "#f43f5e",
                  fontFamily: fontBody,
                }}
                className="px-4 py-1.5 rounded-full text-sm font-medium"
              >
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{ fontFamily: fontHeading }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight"
            >
              {t.headingLine1}
            </h1>
            <h1
              style={{
                fontFamily: fontHeading,
                backgroundImage: "linear-gradient(135deg, #f43f5e, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
            >
              {t.headingLine2}
            </h1>

            {/* Subtitle */}
            <p
              style={{ color: "#a1a1aa", fontFamily: fontBody }}
              className="text-lg max-w-xl mx-auto mb-3"
            >
              {t.sub}
            </p>
            <p
              style={{ color: "#52525b", fontFamily: fontBody }}
              className="text-sm mb-16"
            >
              {t.framework}
            </p>
          </div>

          {/* Process Steps */}
          {/* Desktop: horizontal */}
          <div className="hidden lg:flex items-start justify-center gap-0 mb-20">
            {t.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="flex items-start">
                  {/* Card */}
                  <div
                    className={`hero07-card hero07-card-${i}`}
                    style={{
                      width: 250,
                      background: "#18181b",
                      border: "1px solid #27272a",
                      borderRadius: 16,
                      padding: 24,
                      opacity: 0,
                    }}
                  >
                    {/* Step number */}
                    <div
                      className={`hero07-number hero07-number-${i}`}
                      style={{
                        fontFamily: fontHeading,
                        fontSize: 36,
                        fontWeight: 800,
                        backgroundImage:
                          "linear-gradient(135deg, #f43f5e, #f97316)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        lineHeight: 1,
                        marginBottom: 16,
                        opacity: 0,
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: "rgba(244, 63, 94, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                      }}
                    >
                      <Icon size={22} color="#f43f5e" />
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: fontHeading,
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: 700,
                        marginBottom: 8,
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: fontBody,
                        color: "#a1a1aa",
                        fontSize: 14,
                        lineHeight: 1.6,
                        marginBottom: 16,
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Time tag */}
                    <span
                      style={{
                        display: "inline-block",
                        background: "rgba(244, 63, 94, 0.08)",
                        color: "#f43f5e",
                        fontSize: 12,
                        fontFamily: fontBody,
                        padding: "4px 10px",
                        borderRadius: 6,
                      }}
                    >
                      {step.time}
                    </span>
                  </div>

                  {/* Connector line (between cards, not after last) */}
                  {i < 3 && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        alignSelf: "center",
                        width: 48,
                        position: "relative",
                        height: 2,
                        marginTop: 80,
                      }}
                    >
                      <div
                        className={`${isAr ? "hero07-line-rtl" : "hero07-line"} hero07-line-${i}`}
                        style={{
                          width: "100%",
                          height: 2,
                          borderTop: "2px dashed #3f3f46",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className={`hero07-dot ${isAr ? "hero07-dot-rtl" : "hero07-dot-ltr"} hero07-dot-${i}`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical */}
          <div className="flex lg:hidden flex-col items-center gap-0 mb-16">
            {t.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="flex flex-col items-center">
                  {/* Card */}
                  <div
                    className={`hero07-card hero07-card-${i}`}
                    style={{
                      width: "100%",
                      maxWidth: 320,
                      background: "#18181b",
                      border: "1px solid #27272a",
                      borderRadius: 16,
                      padding: 24,
                      opacity: 0,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div>
                        {/* Step number */}
                        <div
                          className={`hero07-number hero07-number-${i}`}
                          style={{
                            fontFamily: fontHeading,
                            fontSize: 32,
                            fontWeight: 800,
                            backgroundImage:
                              "linear-gradient(135deg, #f43f5e, #f97316)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            lineHeight: 1,
                            marginBottom: 12,
                            opacity: 0,
                          }}
                        >
                          {step.number}
                        </div>

                        {/* Icon */}
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 10,
                            background: "rgba(244, 63, 94, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 12,
                          }}
                        >
                          <Icon size={20} color="#f43f5e" />
                        </div>
                      </div>
                    </div>

                    <h3
                      style={{
                        fontFamily: fontHeading,
                        color: "#ffffff",
                        fontSize: 17,
                        fontWeight: 700,
                        marginBottom: 6,
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: fontBody,
                        color: "#a1a1aa",
                        fontSize: 14,
                        lineHeight: 1.6,
                        marginBottom: 14,
                      }}
                    >
                      {step.description}
                    </p>

                    <span
                      style={{
                        display: "inline-block",
                        background: "rgba(244, 63, 94, 0.08)",
                        color: "#f43f5e",
                        fontSize: 12,
                        fontFamily: fontBody,
                        padding: "4px 10px",
                        borderRadius: 6,
                      }}
                    >
                      {step.time}
                    </span>
                  </div>

                  {/* Vertical connector */}
                  {i < 3 && (
                    <div
                      style={{
                        width: 2,
                        height: 40,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className={`hero07-line-v hero07-line-v-${i}`}
                        style={{
                          width: 2,
                          height: "100%",
                          borderLeft: "2px dashed #3f3f46",
                          position: "relative",
                        }}
                      >
                        <div
                          className={`hero07-dot-v hero07-dot-v-${i}`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Section */}
          <div className="hero07-bottom text-center" style={{ opacity: 0 }}>
            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <button
                className="cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #f43f5e, #f97316)",
                  color: "#ffffff",
                  fontFamily: fontHeading,
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "12px 28px",
                  borderRadius: 12,
                  border: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.opacity = "0.9")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.opacity = "1")
                }
              >
                {t.cta1}
                <ArrowRight size={16} />
              </button>
              <button
                className="cursor-pointer"
                style={{
                  background: "transparent",
                  color: "#a1a1aa",
                  fontFamily: fontHeading,
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "12px 28px",
                  borderRadius: 12,
                  border: "1px solid #27272a",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3f3f46";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#27272a";
                  e.currentTarget.style.color = "#a1a1aa";
                }}
              >
                {t.cta2}
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 sm:gap-12">
              {t.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    style={{
                      fontFamily: fontHeading,
                      color: "#ffffff",
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: fontBody,
                      color: "#52525b",
                      fontSize: 13,
                      marginTop: 2,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
