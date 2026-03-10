"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Freelancer",
    title: "Book My Time",
    description:
      "Skip the back-and-forth emails. See my real-time availability, pick a slot that works, and let's get started on your project.",
    cta: "Book a Session",
    secondary: "View Services",
    month: "MARCH 2026",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  ar: {
    badge: "مستقل",
    title: "احجز وقتي",
    description:
      "تجنب الرسائل المتبادلة. شاهد توفري في الوقت الحقيقي، اختر موعداً مناسباً، ولنبدأ في مشروعك.",
    cta: "احجز جلسة",
    secondary: "عرض الخدمات",
    month: "مارس ٢٠٢٦",
    days: ["إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت", "أحد"],
  },
};

export function FreelancerCalendar({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const slots = [
    { day: 2, available: true }, { day: 3, available: false }, { day: 4, available: true },
    { day: 5, available: true }, { day: 6, available: false }, { day: 7, available: false },
    { day: 8, available: false },
    { day: 9, available: true }, { day: 10, available: true }, { day: 11, available: false },
    { day: 12, available: true }, { day: 13, available: true }, { day: 14, available: false },
    { day: 15, available: false },
    { day: 16, available: false }, { day: 17, available: true }, { day: 18, available: true },
    { day: 19, available: false }, { day: 20, available: true }, { day: 21, available: false },
    { day: 22, available: false },
    { day: 23, available: true }, { day: 24, available: false }, { day: 25, available: true },
    { day: 26, available: true }, { day: 27, available: false }, { day: 28, available: false },
    { day: 29, available: false },
    { day: 30, available: true }, { day: 31, available: true },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Calendar grid */}
      <div
        className="absolute top-[10%] left-1/2 -translate-x-1/2 pointer-events-none fc-calendar-appear"
        style={{ width: 480, maxWidth: "90%" }}
      >
        {/* Month header */}
        <div className="text-center mb-4">
          <div className="text-sm tracking-[0.3em] uppercase" style={{ color: "#06b6d4" }}>
            {t.month}
          </div>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {t.days.map((day) => (
            <div key={day} className="text-center text-xs text-gray-600 py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar cells */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for offset (March 2026 starts on Sunday) */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}
          {slots.map((slot, i) => (
            <div
              key={i}
              className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium fc-cell-pop ${slot.available ? "fc-available-pulse" : ""}`}
              style={{
                background: slot.available ? "rgba(6,182,212,0.1)" : "rgba(255,255,255,0.02)",
                border: slot.available ? "1px solid rgba(6,182,212,0.25)" : "1px solid rgba(255,255,255,0.05)",
                color: slot.available ? "#06b6d4" : "rgba(255,255,255,0.2)",
                animationDelay: `${i * 0.05}s`,
              }}
            >
              {slot.day}
            </div>
          ))}
        </div>

        {/* Time slots preview */}
        <div className="mt-4 flex gap-2 justify-center flex-wrap">
          {["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"].map((time, i) => (
            <div
              key={i}
              className="px-3 py-1.5 rounded-md text-xs fc-slot-appear"
              style={{
                background: i === 1 ? "rgba(6,182,212,0.15)" : "rgba(6,182,212,0.05)",
                border: `1px solid rgba(6,182,212,${i === 1 ? 0.3 : 0.1})`,
                color: i === 1 ? "#06b6d4" : "#0e7490",
                animationDelay: `${1 + i * 0.15}s`,
              }}
            >
              {time}
            </div>
          ))}
        </div>
      </div>

      {/* Connecting lines from calendar to content */}
      <div className="absolute top-[58%] left-1/2 -translate-x-1/2 pointer-events-none">
        <div style={{
          width: 1,
          height: 40,
          background: "linear-gradient(to bottom, rgba(6,182,212,0.2), transparent)",
        }} />
      </div>

      {/* Background decorative dots */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none fc-dot-float"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
            width: 4,
            height: 4,
            background: "#06b6d4",
            opacity: 0.1,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-[450px]">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
          style={{
            color: "#06b6d4",
            borderColor: "rgba(6,182,212,0.3)",
            background: "rgba(6,182,212,0.08)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-extrabold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            background: "linear-gradient(135deg, #06b6d4, #14b8a6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t.title}
        </h1>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-400">
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #14b8a6)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(6,182,212,0.4)",
            }}
          >
            {isAr ? (
              <>
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                {t.cta}
              </>
            ) : (
              <>
                {t.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          <button
            className="px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(20,184,166,0.4)",
              color: "#2dd4bf",
              background: "rgba(20,184,166,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .fc-calendar-appear {
          animation: fcAppear 1s ease-out forwards;
        }
        @keyframes fcAppear {
          0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .fc-cell-pop {
          animation: fcPop 0.5s ease-out forwards;
          opacity: 0;
          transform: scale(0.8);
        }
        @keyframes fcPop {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .fc-available-pulse {
          animation: fcPulse 3s ease-in-out infinite;
        }
        @keyframes fcPulse {
          0%, 100% { box-shadow: 0 0 0 rgba(6,182,212,0); }
          50% { box-shadow: 0 0 8px rgba(6,182,212,0.15); }
        }
        .fc-slot-appear {
          animation: fcSlot 0.5s ease-out forwards;
          opacity: 0;
        }
        @keyframes fcSlot {
          0% { opacity: 0; transform: translateY(5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fc-dot-float {
          animation: fcFloat 4s ease-in-out infinite;
        }
        @keyframes fcFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
