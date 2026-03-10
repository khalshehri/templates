"use client";

/**
 * Warm Welcome Hero Template
 *
 * A door opening animation that reveals a warm, inviting interior.
 * Two door panels slide apart on load to reveal the content behind them.
 * Warm golden light spills out from the opening. Inside: the heading,
 * service info, and CTA. A welcome mat element at the bottom.
 * Feels like being invited in. Perfect for hospitality, clinics, salons.
 *
 * Category: Service
 * Palette: dark wood (#3c2415), warm gold (#d4a853), cream (#fef3c7), amber (#f59e0b)
 */

import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const content = {
  en: {
    badge: "Welcome to Our Space",
    heading: "Step Into Warmth & Comfort",
    description:
      "We open our doors to you with genuine hospitality. Experience a service built on care, attention, and the warmest welcome you have ever received.",
    cta: "Come On In",
    secondaryCta: "Learn More",
    welcomeMat: "WELCOME",
    services: [
      { title: "Warm Hospitality", text: "A caring experience from the moment you arrive" },
      { title: "Personal Touch", text: "Every detail tailored to make you feel at home" },
      { title: "Premium Comfort", text: "Spaces designed for relaxation and well-being" },
    ],
  },
  ar: {
    badge: "مرحبًا بكم في مساحتنا",
    heading: "ادخلوا إلى الدفء والراحة",
    description:
      "نفتح أبوابنا لكم بضيافة صادقة. استمتعوا بخدمة مبنية على الاهتمام والعناية وأدفأ ترحيب تلقيتموه على الإطلاق.",
    cta: "تفضّلوا بالدخول",
    secondaryCta: "اعرف المزيد",
    welcomeMat: "أهلاً",
    services: [
      { title: "ضيافة دافئة", text: "تجربة حانية من لحظة وصولكم" },
      { title: "لمسة شخصية", text: "كل تفصيلة مصممة لتشعركم بأنكم في بيتكم" },
      { title: "راحة فاخرة", text: "مساحات مصممة للاسترخاء والرفاهية" },
    ],
  },
};

/** Floating golden ambient particles */
function AmbientParticles() {
  const particleCount = 30;
  const particles = useRef(
    Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.5 + 0.2,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, #f59e0b ${0}%, #d4a853 ${100}%)`,
            opacity: p.opacity,
            animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

export function WarmWelcome({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [raysVisible, setRaysVisible] = useState(false);

  useEffect(() => {
    // Reset animation states when language changes
    setDoorsOpen(false);
    setContentVisible(false);
    setRaysVisible(false);

    const raysTimer = setTimeout(() => setRaysVisible(true), 300);
    const doorTimer = setTimeout(() => setDoorsOpen(true), 800);
    const contentTimer = setTimeout(() => setContentVisible(true), 1800);

    return () => {
      clearTimeout(raysTimer);
      clearTimeout(doorTimer);
      clearTimeout(contentTimer);
    };
  }, [language]);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
      style={{ fontFamily: isRTL ? "'Noto Sans Arabic', sans-serif" : "inherit" }}
    >
      {/* Inline keyframes */}
      <style>{`
        @keyframes floatParticle {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-30px) translateX(15px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes matBounce {
          0%, 100% { transform: translateX(-50%) scaleY(1); }
          50% { transform: translateX(-50%) scaleY(0.95); }
        }
        @keyframes rayRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Warm background behind the doors */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #fef3c7 0%, #fff7ed 40%, #fef3c7 100%)",
        }}
      />

      {/* Golden light burst (radial) from center */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: raysVisible ? 1 : 0,
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(245, 158, 11, 0.35) 0%, rgba(212, 168, 83, 0.15) 30%, transparent 70%)",
        }}
      />

      {/* Light rays spilling out from center gap */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 600,
          height: 600,
          opacity: raysVisible ? 0.5 : 0,
          transition: "opacity 1.5s ease",
          animation: raysVisible ? "rayRotate 60s linear infinite" : "none",
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2"
            style={{
              width: 2,
              height: 300,
              background: "linear-gradient(to top, rgba(245, 158, 11, 0.4), transparent)",
              transformOrigin: "top center",
              transform: `translate(-50%, 0) rotate(${i * 30}deg)`,
            }}
          />
        ))}
      </div>

      {/* Ambient particles */}
      <AmbientParticles />

      {/* ---- CONTENT (behind doors) ---- */}
      <div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center"
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
        }}
      >
        {/* Badge */}
        <span
          className="inline-block px-5 py-2 rounded-full text-sm font-medium mb-6"
          style={{
            background: "rgba(212, 168, 83, 0.2)",
            color: "#92400e",
            border: "1px solid rgba(212, 168, 83, 0.4)",
            transitionDelay: "0.2s",
          }}
        >
          {t.badge}
        </span>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-3xl leading-tight mb-6"
          style={{ color: "#3c2415" }}
        >
          {t.heading}
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          style={{ color: "#78350f" }}
        >
          {t.description}
        </p>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl w-full mb-10">
          {t.services.map((svc, i) => (
            <div
              key={i}
              className="rounded-xl p-5 backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(212, 168, 83, 0.3)",
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${0.3 + i * 0.15}s, transform 0.6s ease ${0.3 + i * 0.15}s`,
              }}
            >
              <h3 className="font-semibold text-base mb-1" style={{ color: "#3c2415" }}>
                {svc.title}
              </h3>
              <p className="text-sm" style={{ color: "#92400e" }}>
                {svc.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            className="flex items-center gap-2 px-7 py-3 rounded-full text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #d4a853, #f59e0b)" }}
          >
            {t.cta}
            <ArrowRight
              className="w-5 h-5"
              style={{ transform: isRTL ? "scaleX(-1)" : "none" }}
            />
          </button>
          <button
            className="px-7 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
            style={{
              color: "#3c2415",
              border: "2px solid rgba(60, 36, 21, 0.3)",
              background: "rgba(255,255,255,0.5)",
            }}
          >
            {t.secondaryCta}
          </button>
        </div>
      </div>

      {/* ---- DOORS ---- */}
      {/* Left door */}
      <div
        className="absolute top-0 left-0 h-full z-30 pointer-events-none"
        style={{
          width: "50%",
          transform: doorsOpen
            ? "translateX(-100%)"
            : "translateX(0)",
          transition: "transform 1.2s cubic-bezier(0.65, 0, 0.35, 1)",
          background: "linear-gradient(135deg, #3c2415 0%, #5c3a24 50%, #3c2415 100%)",
          boxShadow: doorsOpen
            ? "none"
            : "4px 0 30px rgba(0,0,0,0.4)",
        }}
      >
        {/* Door panel inset (left) */}
        <div
          className="absolute top-[10%] right-[15%] bottom-[10%] left-[15%] rounded-sm"
          style={{
            border: "2px solid rgba(212, 168, 83, 0.15)",
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
          }}
        >
          {/* Inner panel detail */}
          <div
            className="absolute top-[8%] right-[10%] bottom-[8%] left-[10%] rounded-sm"
            style={{
              border: "1px solid rgba(212, 168, 83, 0.1)",
            }}
          />
        </div>
        {/* Door handle (right side of left door) */}
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            right: "8%",
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #f5d78e, #d4a853, #a67c3d)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)",
          }}
        />
      </div>

      {/* Right door */}
      <div
        className="absolute top-0 right-0 h-full z-30 pointer-events-none"
        style={{
          width: "50%",
          transform: doorsOpen
            ? "translateX(100%)"
            : "translateX(0)",
          transition: "transform 1.2s cubic-bezier(0.65, 0, 0.35, 1)",
          background: "linear-gradient(225deg, #3c2415 0%, #5c3a24 50%, #3c2415 100%)",
          boxShadow: doorsOpen
            ? "none"
            : "-4px 0 30px rgba(0,0,0,0.4)",
        }}
      >
        {/* Door panel inset (right) */}
        <div
          className="absolute top-[10%] right-[15%] bottom-[10%] left-[15%] rounded-sm"
          style={{
            border: "2px solid rgba(212, 168, 83, 0.15)",
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
          }}
        >
          <div
            className="absolute top-[8%] right-[10%] bottom-[8%] left-[10%] rounded-sm"
            style={{
              border: "1px solid rgba(212, 168, 83, 0.1)",
            }}
          />
        </div>
        {/* Door handle (left side of right door) */}
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            left: "8%",
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #f5d78e, #d4a853, #a67c3d)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)",
          }}
        />
      </div>

      {/* ---- WELCOME MAT ---- */}
      <div
        className="absolute bottom-8 left-1/2 z-20"
        style={{
          transform: "translateX(-50%)",
          opacity: contentVisible ? 1 : 0,
          transition: "opacity 0.8s ease 0.6s",
          animation: contentVisible ? "matBounce 3s ease-in-out infinite" : "none",
        }}
      >
        <div
          className="relative px-14 py-4 rounded-lg"
          style={{
            background: "linear-gradient(135deg, #5c3a24, #3c2415)",
            border: "2px solid rgba(212, 168, 83, 0.3)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          {/* Mat border decoration */}
          <div
            className="absolute inset-1 rounded"
            style={{ border: "1px solid rgba(212, 168, 83, 0.2)" }}
          />
          <span
            className="relative text-lg font-bold tracking-widest"
            style={{ color: "#d4a853" }}
          >
            {t.welcomeMat}
          </span>
        </div>
      </div>

      {/* Glow pulse behind doors center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
        style={{
          width: 200,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(245, 158, 11, 0.4), transparent 70%)",
          opacity: doorsOpen ? 0 : raysVisible ? 0.8 : 0,
          transition: "opacity 1s ease",
          animation: raysVisible && !doorsOpen ? "pulseGlow 2s ease-in-out infinite" : "none",
        }}
      />
    </section>
  );
}
