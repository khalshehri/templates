"use client";

import { useRef, useCallback, useState } from "react";
import { Search, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [particlesReady, setParticlesReady] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Content fade in
      gsap.from(".hero07-content", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.1,
      });

      // Cards slide up with stagger
      gsap.from(".hero07-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.2,
      });

      // Number reveals with stagger
      gsap.from(".hero07-number", {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.4,
      });

      // Horizontal connector lines grow
      const linesH = containerRef.current?.querySelectorAll(".hero07-line-h");
      if (linesH) {
        gsap.from(linesH, {
          scaleX: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          delay: 0.6,
          transformOrigin: isAr ? "right center" : "left center",
        });
      }

      // Vertical connector lines grow
      gsap.from(".hero07-line-v", {
        scaleY: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.6,
        transformOrigin: "top center",
      });

      // Traveling dots - horizontal
      const dotsH = containerRef.current?.querySelectorAll(".hero07-dot-h");
      if (dotsH) {
        dotsH.forEach((dot, i) => {
          const xVal = isAr ? "-100%" : "100%";
          gsap.fromTo(
            dot,
            { x: "0%" },
            {
              x: xVal,
              duration: 2,
              ease: "power1.inOut",
              repeat: -1,
              delay: 1.0 + i * 0.4,
            }
          );
        });
      }

      // Traveling dots - vertical
      const dotsV = containerRef.current?.querySelectorAll(".hero07-dot-v");
      if (dotsV) {
        dotsV.forEach((dot, i) => {
          gsap.fromTo(
            dot,
            { y: "0%" },
            {
              y: "100%",
              duration: 2,
              ease: "power1.inOut",
              repeat: -1,
              delay: 1.0 + i * 0.4,
            }
          );
        });
      }

      // Bottom section fade
      gsap.from(".hero07-bottom", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: 1.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      style={{
        background: "#09090b",
        fontFamily: fontBody,
      }}
      className="min-h-screen relative overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Particles background */}
      <Particles
        id="hero07-particles"
        init={particlesInit}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 35, density: { enable: true } },
            color: { value: ["#6366f1", "#818cf8", "#4f46e5"] },
            shape: { type: "square" },
            opacity: {
              value: { min: 0.1, max: 0.3 },
            },
            size: {
              value: { min: 3, max: 8 },
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              outModes: { default: "out" },
            },
            rotate: {
              value: { min: 0, max: 360 },
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 3,
              },
            },
          },
          detectRetina: true,
        }}
      />

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
                  className="hero07-card"
                  style={{
                    width: 250,
                    background: "#18181b",
                    border: "1px solid #27272a",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  {/* Step number */}
                  <div
                    className="hero07-number"
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
                      className="hero07-line-h"
                      style={{
                        width: "100%",
                        height: 2,
                        borderTop: "2px dashed #3f3f46",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="hero07-dot-h"
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "#f43f5e",
                          position: "absolute",
                          top: "50%",
                          marginTop: -4,
                          boxShadow: "0 0 8px #f43f5e88",
                          [isAr ? "right" : "left"]: 0,
                        }}
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
                  className="hero07-card"
                  style={{
                    width: "100%",
                    maxWidth: 320,
                    background: "#18181b",
                    border: "1px solid #27272a",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div>
                      {/* Step number */}
                      <div
                        className="hero07-number"
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
                      className="hero07-line-v"
                      style={{
                        width: 2,
                        height: "100%",
                        borderLeft: "2px dashed #3f3f46",
                        position: "relative",
                      }}
                    >
                      <div
                        className="hero07-dot-v"
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "#f43f5e",
                          position: "absolute",
                          left: "50%",
                          marginLeft: -4,
                          top: 0,
                          boxShadow: "0 0 8px #f43f5e88",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="hero07-bottom text-center">
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
  );
}
