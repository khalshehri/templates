"use client";

import { useState, useEffect } from "react";
import {
  HeartPulse,
  Clock,
  Phone,
  Users,
  Stethoscope,
  Baby,
} from "lucide-react";

interface Hero08Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Open 24/7",
    heading: "Compassionate Care,",
    accent: "Advanced Medicine",
    sub: "From primary care to specialized treatment, our team of expert physicians is here for you and your family \u2014 24 hours a day, 7 days a week.",
    cta1: "Book an Appointment",
    cta2: "Emergency: 920-XXX-XXX",
    doctors: "50+ Specialist Doctors",
    cards: [
      {
        icon: "stethoscope" as const,
        title: "General Medicine",
        text: "Comprehensive primary care for all ages",
      },
      {
        icon: "baby" as const,
        title: "Pediatrics",
        text: "Expert care for infants and children",
      },
      {
        icon: "heartpulse" as const,
        title: "Cardiology",
        text: "Advanced heart and vascular treatment",
      },
    ],
  },
  ar: {
    badge: "\u0645\u0641\u062a\u0648\u062d 24/7",
    heading: "\u0631\u0639\u0627\u064a\u0629 \u062d\u0627\u0646\u064a\u0629\u060c",
    accent: "\u0637\u0628 \u0645\u062a\u0642\u062f\u0645",
    sub: "\u0645\u0646 \u0627\u0644\u0631\u0639\u0627\u064a\u0629 \u0627\u0644\u0623\u0648\u0644\u064a\u0629 \u0625\u0644\u0649 \u0627\u0644\u0639\u0644\u0627\u062c \u0627\u0644\u0645\u062a\u062e\u0635\u0635\u060c \u0641\u0631\u064a\u0642\u0646\u0627 \u0645\u0646 \u0627\u0644\u0623\u0637\u0628\u0627\u0621 \u0627\u0644\u062e\u0628\u0631\u0627\u0621 \u0647\u0646\u0627 \u0644\u0643 \u0648\u0644\u0639\u0627\u0626\u0644\u062a\u0643 \u2014 24 \u0633\u0627\u0639\u0629 \u0641\u064a \u0627\u0644\u064a\u0648\u0645\u060c 7 \u0623\u064a\u0627\u0645 \u0641\u064a \u0627\u0644\u0623\u0633\u0628\u0648\u0639.",
    cta1: "\u0627\u062d\u062c\u0632 \u0645\u0648\u0639\u062f\u0627\u064b",
    cta2: "\u0637\u0648\u0627\u0631\u0626: 920-XXX-XXX",
    doctors: "+50 \u0637\u0628\u064a\u0628 \u0645\u062a\u062e\u0635\u0635",
    cards: [
      {
        icon: "stethoscope" as const,
        title: "\u0627\u0644\u0637\u0628 \u0627\u0644\u0639\u0627\u0645",
        text: "\u0631\u0639\u0627\u064a\u0629 \u0623\u0648\u0644\u064a\u0629 \u0634\u0627\u0645\u0644\u0629 \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0631",
      },
      {
        icon: "baby" as const,
        title: "\u0637\u0628 \u0627\u0644\u0623\u0637\u0641\u0627\u0644",
        text: "\u0631\u0639\u0627\u064a\u0629 \u0645\u062a\u062e\u0635\u0635\u0629 \u0644\u0644\u0631\u0636\u0639 \u0648\u0627\u0644\u0623\u0637\u0641\u0627\u0644",
      },
      {
        icon: "heartpulse" as const,
        title: "\u0637\u0628 \u0627\u0644\u0642\u0644\u0628",
        text: "\u0639\u0644\u0627\u062c \u0645\u062a\u0642\u062f\u0645 \u0644\u0644\u0642\u0644\u0628 \u0648\u0627\u0644\u0623\u0648\u0639\u064a\u0629",
      },
    ],
  },
};

const iconMap = {
  stethoscope: Stethoscope,
  baby: Baby,
  heartpulse: HeartPulse,
};

export function Hero08({ language }: Hero08Props) {
  const [isVisible, setIsVisible] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hero08FadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero08CardFade {
          from {
            opacity: 0;
            transform: translateY(20px) rotate(0deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(var(--card-rotate, 0deg));
          }
        }

        .hero08-fadeUp {
          opacity: 0;
          animation: hero08FadeUp 500ms ease-out forwards;
        }

        .hero08-card-fade {
          opacity: 0;
          animation: hero08CardFade 500ms ease-out forwards;
        }

        .hero08-delay-0 { animation-delay: 0ms; }
        .hero08-delay-1 { animation-delay: 50ms; }
        .hero08-delay-2 { animation-delay: 100ms; }
        .hero08-delay-3 { animation-delay: 150ms; }
        .hero08-delay-4 { animation-delay: 200ms; }
        .hero08-delay-5 { animation-delay: 250ms; }
        .hero08-delay-6 { animation-delay: 300ms; }
        .hero08-delay-7 { animation-delay: 400ms; }
        .hero08-delay-8 { animation-delay: 500ms; }

        @media (prefers-reduced-motion: reduce) {
          .hero08-fadeUp,
          .hero08-card-fade {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #dbeafe 0%, #ffffff 100%)",
          fontFamily: isAr
            ? "var(--font-noto-sans-arabic), sans-serif"
            : "var(--font-rubik), sans-serif",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "rgba(219, 234, 254, 0.3)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full"
          style={{ background: "rgba(219, 234, 254, 0.3)" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/3 w-[250px] h-[250px] rounded-full"
          style={{ background: "rgba(219, 234, 254, 0.25)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <div className={isAr ? "lg:order-2" : ""}>
              {/* Badge */}
              {isVisible && (
                <div className="hero08-fadeUp hero08-delay-0 mb-6">
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: "#059669" }}
                  >
                    <Clock className="w-4 h-4" />
                    {t.badge}
                  </span>
                </div>
              )}

              {/* Heading */}
              {isVisible && (
                <h1 className="hero08-fadeUp hero08-delay-1 mb-4">
                  <span
                    className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                    style={{ color: "#1e293b" }}
                  >
                    {t.heading}
                  </span>
                  <span
                    className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                    style={{ color: "#2563eb" }}
                  >
                    {t.accent}
                  </span>
                </h1>
              )}

              {/* Subtitle */}
              {isVisible && (
                <p
                  className="hero08-fadeUp hero08-delay-2 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
                  style={{
                    color: "#475569",
                    lineHeight: isAr ? "1.8" : "1.75",
                  }}
                >
                  {t.sub}
                </p>
              )}

              {/* CTAs */}
              {isVisible && (
                <div className="hero08-fadeUp hero08-delay-3 flex flex-wrap items-center gap-4 mb-8">
                  <button
                    className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-base transition-opacity duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#2563eb", minHeight: "48px" }}
                  >
                    <HeartPulse className="w-5 h-5" />
                    {t.cta1}
                  </button>
                  <a
                    href="tel:920000000"
                    className="cursor-pointer inline-flex items-center gap-2 text-base font-medium transition-opacity duration-200 hover:opacity-70"
                    style={{ color: "#059669", minHeight: "48px" }}
                  >
                    <Phone className="w-5 h-5" />
                    {t.cta2}
                  </a>
                </div>
              )}

              {/* Doctor count */}
              {isVisible && (
                <div className="hero08-fadeUp hero08-delay-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm border border-blue-100">
                  <Users className="w-5 h-5" style={{ color: "#2563eb" }} />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#1e293b" }}
                  >
                    {t.doctors}
                  </span>
                </div>
              )}
            </div>

            {/* Right side - Stacked service cards */}
            <div
              className={`relative ${isAr ? "lg:order-1" : ""}`}
              style={{ minHeight: "400px" }}
            >
              <div className="relative w-full h-full flex items-center justify-center lg:justify-end">
                <div
                  className="relative"
                  style={{ width: "340px", height: "380px" }}
                >
                  {isVisible &&
                    t.cards.map((card, index) => {
                      const IconComponent = iconMap[card.icon];
                      const rotations = [-3, 1, 4];
                      const xOffsets = [0, 20, 40];
                      const yOffsets = [0, 30, 60];
                      const colors = ["#2563eb", "#059669", "#dc2626"];

                      return (
                        <div
                          key={index}
                          className="hero08-card-fade absolute bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                          style={
                            {
                              "--card-rotate": `${rotations[index]}deg`,
                              width: "280px",
                              left: `${isAr ? "auto" : `${xOffsets[index]}px`}`,
                              right: `${isAr ? `${xOffsets[index]}px` : "auto"}`,
                              top: `${yOffsets[index]}px`,
                              transform: `rotate(${rotations[index]}deg)`,
                              animationDelay: `${400 + index * 100}ms`,
                              zIndex: 3 - index,
                            } as React.CSSProperties
                          }
                        >
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                            style={{
                              backgroundColor: `${colors[index]}15`,
                            }}
                          >
                            <IconComponent
                              className="w-6 h-6"
                              style={{ color: colors[index] }}
                            />
                          </div>
                          <h3
                            className="text-lg font-semibold mb-2"
                            style={{ color: "#1e293b" }}
                          >
                            {card.title}
                          </h3>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "#64748b" }}
                          >
                            {card.text}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
