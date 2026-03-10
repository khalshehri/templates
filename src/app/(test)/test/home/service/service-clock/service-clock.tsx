"use client";

/**
 * Service Clock Hero
 * Large analog clock face in center showing "Open Now", content arranged around clock.
 * Hours of operation highlighted. Warm orange palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "We're Open Now",
    heading: "Always Here",
    headingLine2: "When You Need Us",
    subheading: "Reliable service around the clock. Walk in or book ahead — we're ready when you are.",
    cta: "Book a Visit",
    ctaSecondary: "View Hours",
    hours: [
      { day: "Mon–Fri", time: "8 AM – 9 PM", active: true },
      { day: "Saturday", time: "9 AM – 6 PM", active: true },
      { day: "Sunday", time: "10 AM – 4 PM", active: false },
    ],
    openLabel: "OPEN NOW",
    nextClose: "Closes at 9:00 PM",
  },
  ar: {
    badge: "نحن مفتوحون الآن",
    heading: "دائماً هنا",
    headingLine2: "عندما تحتاجنا",
    subheading: "خدمة موثوقة على مدار الساعة. ادخل مباشرة أو احجز مسبقاً — نحن جاهزون عندما تكون جاهزاً.",
    cta: "احجز زيارة",
    ctaSecondary: "عرض الأوقات",
    hours: [
      { day: "الإثنين–الجمعة", time: "٨ ص – ٩ م", active: true },
      { day: "السبت", time: "٩ ص – ٦ م", active: true },
      { day: "الأحد", time: "١٠ ص – ٤ م", active: false },
    ],
    openLabel: "مفتوح الآن",
    nextClose: "يغلق الساعة ٩:٠٠ مساءً",
  },
};

export function ServiceClock({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  const hourMarkers = Array.from({ length: 12 }, (_, i) => i);
  const minuteMarkers = Array.from({ length: 60 }, (_, i) => i);

  return (
    <>
      <style>{`
        @keyframes clockPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.3); }
          50% { box-shadow: 0 0 0 20px rgba(249, 115, 22, 0); }
        }
        @keyframes secondHand {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes minuteHand {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(${isAr ? "30px" : "-30px"}); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes openPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .fade-slide-up { animation: fadeSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .fade-slide-in { animation: fadeSlideIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(165deg, #fffbf5 0%, #fff7ed 40%, #fef3c7 100%)" }}
      >
        {/* Subtle radial glow behind clock */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(251, 146, 60, 0.25), transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left content */}
            <div className={`flex-1 ${isAr ? "text-right order-2 lg:order-2" : "order-2 lg:order-1"}`}>
              <div
                className="fade-slide-in inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{
                  animationDelay: "0.3s",
                  background: "rgba(249, 115, 22, 0.1)",
                  color: "#c2410c",
                  border: "1px solid rgba(249, 115, 22, 0.15)",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-green-500" style={{ animation: "openPulse 2s ease-in-out infinite" }} />
                {t.badge}
              </div>

              <h1 className="fade-slide-in text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]" style={{ animationDelay: "0.4s" }}>
                <span className="block text-gray-900">{t.heading}</span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t.headingLine2}
                </span>
              </h1>

              <p className="fade-slide-in mt-6 text-gray-500 leading-relaxed max-w-md" style={{ animationDelay: "0.5s" }}>
                {t.subheading}
              </p>

              {/* Hours list */}
              <div className="fade-slide-in mt-8 space-y-3" style={{ animationDelay: "0.6s" }}>
                {t.hours.map((h, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between max-w-sm px-4 py-3 rounded-xl ${isAr ? "flex-row-reverse" : ""}`}
                    style={{
                      background: h.active ? "rgba(249, 115, 22, 0.06)" : "rgba(0,0,0,0.02)",
                      border: `1px solid ${h.active ? "rgba(249, 115, 22, 0.12)" : "rgba(0,0,0,0.04)"}`,
                    }}
                  >
                    <span className={`text-sm font-semibold ${h.active ? "text-orange-700" : "text-gray-400"}`}>{h.day}</span>
                    <span className={`text-sm ${h.active ? "text-gray-700" : "text-gray-400"}`}>{h.time}</span>
                  </div>
                ))}
              </div>

              <div className={`fade-slide-in mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.7s" }}>
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-2xl transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    boxShadow: "0 8px 24px rgba(249, 115, 22, 0.3)",
                  }}
                >
                  {t.cta}
                  <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-gray-500 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Center: Large analog clock */}
            <div className={`relative flex-shrink-0 ${isAr ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}>
              <div
                className="fade-slide-up relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full"
                style={{
                  animationDelay: "0.2s",
                  background: "linear-gradient(135deg, #ffffff, #fffbf5)",
                  boxShadow: "0 20px 60px rgba(249, 115, 22, 0.15), 0 0 0 2px rgba(249, 115, 22, 0.08), inset 0 2px 20px rgba(255,255,255,0.5)",
                  animation: "clockPulse 3s ease-in-out infinite, fadeSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both",
                }}
              >
                {/* Outer decorative ring */}
                <div
                  className="absolute -inset-3 rounded-full border border-dashed"
                  style={{
                    borderColor: "rgba(249, 115, 22, 0.12)",
                    animation: "ringRotate 60s linear infinite",
                  }}
                />

                {/* Minute markers */}
                {minuteMarkers.map((i) => {
                  const angle = (i * 6) * Math.PI / 180;
                  const isHour = i % 5 === 0;
                  const r = 46;
                  return (
                    <div
                      key={`m-${i}`}
                      className="absolute"
                      style={{
                        width: isHour ? "3px" : "1px",
                        height: isHour ? "10px" : "5px",
                        background: isHour ? "#ea580c" : "rgba(0,0,0,0.1)",
                        borderRadius: "2px",
                        top: `${50 - r * Math.cos(angle)}%`,
                        left: `${50 + r * Math.sin(angle)}%`,
                        transform: `translate(-50%, -50%) rotate(${i * 6}deg)`,
                      }}
                    />
                  );
                })}

                {/* Hour numbers */}
                {hourMarkers.map((i) => {
                  const num = i === 0 ? 12 : i;
                  const angle = (i * 30) * Math.PI / 180;
                  const r = 38;
                  return (
                    <span
                      key={`h-${i}`}
                      className="absolute text-xs sm:text-sm font-bold text-gray-700"
                      style={{
                        top: `${50 - r * Math.cos(angle)}%`,
                        left: `${50 + r * Math.sin(angle)}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {num}
                    </span>
                  );
                })}

                {/* Clock center dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500 z-10" />

                {/* Hour hand */}
                <div
                  className="absolute top-1/2 left-1/2 origin-bottom"
                  style={{
                    width: "4px",
                    height: "25%",
                    background: "linear-gradient(to top, #1f2937, #374151)",
                    borderRadius: "4px",
                    transform: "translate(-50%, -100%) rotate(150deg)",
                  }}
                />

                {/* Minute hand */}
                <div
                  className="absolute top-1/2 left-1/2 origin-bottom"
                  style={{
                    width: "2px",
                    height: "33%",
                    background: "#4b5563",
                    borderRadius: "4px",
                    transform: "translate(-50%, -100%) rotate(90deg)",
                  }}
                />

                {/* Second hand */}
                <div
                  className="absolute top-1/2 left-1/2 origin-bottom"
                  style={{
                    width: "1px",
                    height: "36%",
                    background: "#f97316",
                    borderRadius: "4px",
                    transform: "translate(-50%, -100%)",
                    animation: "secondHand 60s linear infinite",
                  }}
                />

                {/* Open Now badge at center bottom */}
                <div
                  className="absolute bottom-[22%] left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase"
                  style={{
                    background: "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.08))",
                    color: "#15803d",
                    border: "1px solid rgba(34, 197, 94, 0.2)",
                  }}
                >
                  {t.openLabel}
                </div>
              </div>

              {/* Next close time */}
              <p className="fade-slide-up text-center text-xs text-gray-400 mt-4" style={{ animationDelay: "0.5s" }}>
                {t.nextClose}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
