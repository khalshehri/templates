"use client";

import { useState, useEffect } from "react";
import {
  Clock,
  Phone,
  Stethoscope,
  Baby,
  HeartPulse,
} from "lucide-react";

const content = {
  en: {
    badge: "Open 24/7",
    headingLine1: "Compassionate care,",
    headingAccent: "advanced medicine",
    sub: "Expert physicians, cutting-edge facilities, and personalized treatment plans — 24 hours, 7 days a week.",
    cta1: "Book Appointment",
    cta2: "Emergency: 920-XXX-XXX",
    specialists: "50+ Specialists",
    services: [
      {
        icon: "stethoscope",
        title: "General Medicine",
        desc: "Comprehensive primary care for all ages",
      },
      {
        icon: "baby",
        title: "Pediatrics",
        desc: "Specialized care for children and adolescents",
      },
      {
        icon: "heart",
        title: "Cardiology",
        desc: "Advanced cardiac diagnostics and treatment",
      },
    ],
  },
  ar: {
    badge: "مفتوح 24/7",
    headingLine1: "رعاية حانية،",
    headingAccent: "طب متقدم",
    sub: "أطباء خبراء ومرافق متطورة وخطط علاج مخصصة — 24 ساعة، 7 أيام في الأسبوع.",
    cta1: "احجز موعداً",
    cta2: "طوارئ: 920-XXX-XXX",
    specialists: "+50 متخصص",
    services: [
      {
        icon: "stethoscope",
        title: "الطب العام",
        desc: "رعاية أولية شاملة لجميع الأعمار",
      },
      {
        icon: "baby",
        title: "طب الأطفال",
        desc: "رعاية متخصصة للأطفال والمراهقين",
      },
      {
        icon: "heart",
        title: "طب القلب",
        desc: "تشخيص وعلاج القلب المتقدم",
      },
    ],
  },
};

const iconMap = {
  stethoscope: Stethoscope,
  baby: Baby,
  heart: HeartPulse,
};

export function Hero06({ language }: { language: "en" | "ar" }) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f0f4ff 0%, #ffffff 50%, #f0fdf4 100%)",
        fontFamily: isAr
          ? "var(--font-noto-sans-arabic), sans-serif"
          : "var(--font-rubik), sans-serif",
      }}
    >
      <style>{`
        @keyframes hero06FadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero06SlideIn {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero06SlideInRtl {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero06Float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes hero06PulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
        @keyframes hero06BlobPulse {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.12; transform: scale(1.05); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero06-animated { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero06-float { animation: none !important; }
          .hero06-pulse { animation: none !important; }
        }
      `}</style>

      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
          opacity: 0.08,
          filter: "blur(80px)",
          animation: "hero06BlobPulse 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-20 right-1/3 w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #10b981 0%, transparent 70%)",
          opacity: 0.06,
          filter: "blur(80px)",
          animation: "hero06BlobPulse 6s ease-in-out 3s infinite",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div
              className="hero06-animated inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                animation: mounted
                  ? "hero06FadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards"
                  : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              <span
                className="hero06-pulse relative flex h-2.5 w-2.5"
              >
                <span
                  className="absolute inline-flex h-full w-full rounded-full"
                  style={{
                    backgroundColor: "#10b981",
                    animation: "hero06PulseDot 2s ease-in-out infinite",
                  }}
                />
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                  style={{ backgroundColor: "#10b981" }}
                />
              </span>
              <Clock size={14} style={{ color: "#10b981" }} />
              <span
                className="text-sm font-medium"
                style={{ color: "#065f46" }}
              >
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="hero06-animated"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                lineHeight: 1.1,
                fontWeight: 700,
                color: "#0f172a",
                animation: mounted
                  ? "hero06FadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards"
                  : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              {t.headingLine1}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #2563eb, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.headingAccent}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="hero06-animated mt-6 max-w-lg"
              style={{
                color: "#475569",
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                lineHeight: 1.7,
                fontWeight: 300,
                animation: mounted
                  ? "hero06FadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s forwards"
                  : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              {t.sub}
            </p>

            {/* CTAs */}
            <div
              className="hero06-animated flex flex-wrap items-center gap-4 mt-8"
              style={{
                animation: mounted
                  ? "hero06FadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards"
                  : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              <button
                className="cursor-pointer px-7 py-3.5 rounded-xl text-white font-medium text-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                  boxShadow: "0 4px 20px rgba(37, 99, 235, 0.3)",
                  minHeight: "48px",
                }}
              >
                {t.cta1}
              </button>
              <button
                className="cursor-pointer inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-gray-100"
                style={{
                  color: "#0f172a",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "white",
                  minHeight: "48px",
                }}
              >
                <Phone size={16} style={{ color: "#2563eb" }} />
                {t.cta2}
              </button>
            </div>

            {/* Specialists count */}
            <div
              className="hero06-animated mt-8 flex items-center gap-3"
              style={{
                animation: mounted
                  ? "hero06FadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s forwards"
                  : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              <div className="flex -space-x-2 rtl:space-x-reverse">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    style={{
                      background: [
                        "linear-gradient(135deg, #93c5fd, #2563eb)",
                        "linear-gradient(135deg, #6ee7b7, #10b981)",
                        "linear-gradient(135deg, #fbbf24, #f59e0b)",
                        "linear-gradient(135deg, #c4b5fd, #8b5cf6)",
                      ][i],
                    }}
                  />
                ))}
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: "#0f172a" }}
              >
                {t.specialists}
              </span>
            </div>
          </div>

          {/* Right — service cards */}
          <div className="relative h-[420px] sm:h-[460px]">
            {t.services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              const slideAnim = isAr ? "hero06SlideInRtl" : "hero06SlideIn";
              const offsets = [
                { top: 0, insetInlineStart: 0 },
                { top: 80, insetInlineStart: 40 },
                { top: 160, insetInlineStart: 80 },
              ];

              return (
                <div
                  key={`${language}-${index}`}
                  className="hero06-animated hero06-float absolute w-[300px] sm:w-[340px]"
                  style={{
                    top: offsets[index].top,
                    insetInlineStart: offsets[index].insetInlineStart,
                    animation: mounted
                      ? `${slideAnim} 0.7s cubic-bezier(0.16,1,0.3,1) ${0.3 + index * 0.12}s forwards, hero06Float 5s ease-in-out ${index * 0.8}s infinite`
                      : "none",
                    opacity: mounted ? undefined : 0,
                    zIndex: 3 - index,
                  }}
                >
                  <div
                    className="p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.6)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background:
                          index === 0
                            ? "linear-gradient(135deg, #dbeafe, #bfdbfe)"
                            : index === 1
                            ? "linear-gradient(135deg, #d1fae5, #a7f3d0)"
                            : "linear-gradient(135deg, #fce7f3, #fbcfe8)",
                      }}
                    >
                      <Icon
                        size={20}
                        style={{
                          color:
                            index === 0
                              ? "#2563eb"
                              : index === 1
                              ? "#10b981"
                              : "#ec4899",
                        }}
                      />
                    </div>
                    <h3
                      className="font-semibold text-base mb-1.5"
                      style={{ color: "#0f172a" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#64748b", fontWeight: 300 }}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
