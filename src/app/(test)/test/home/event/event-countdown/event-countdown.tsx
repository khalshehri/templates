"use client";

import { ArrowRight, MapPin, Calendar } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Save the Date",
    heading: "Future Tech",
    headingLine2: "Summit 2026",
    date: "October 15–17, 2026",
    venue: "Riyadh Convention Center, KSA",
    subheading: "Join 5,000+ innovators, developers, and industry leaders for 3 days of keynotes, workshops, and networking.",
    ctaPrimary: "Get Tickets",
    ctaSecondary: "View Schedule",
    countdown: { days: "218", hours: "06", mins: "42", secs: "15" },
    countdownLabels: { days: "Days", hours: "Hours", mins: "Minutes", secs: "Seconds" },
  },
  ar: {
    badge: "احفظ التاريخ",
    heading: "قمة التقنية",
    headingLine2: "المستقبلية 2026",
    date: "15–17 أكتوبر 2026",
    venue: "مركز الرياض للمؤتمرات، المملكة العربية السعودية",
    subheading: "انضم لأكثر من 5,000 مبتكر ومطور وقائد صناعي في 3 أيام من الكلمات الرئيسية وورش العمل والتواصل.",
    ctaPrimary: "احصل على التذاكر",
    ctaSecondary: "عرض الجدول",
    countdown: { days: "218", hours: "06", mins: "42", secs: "15" },
    countdownLabels: { days: "أيام", hours: "ساعات", mins: "دقائق", secs: "ثوانٍ" },
  },
};

// Confetti dots
const DOTS = Array.from({ length: 30 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4,
  color: ["#ef4444", "#f59e0b", "#10b981", "#6366f1", "#ec4899"][i % 5],
}));

export function EventCountdown({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes confettiFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.7; }
        }
        @keyframes flipIn {
          from { transform: rotateX(90deg); opacity: 0; }
          to { transform: rotateX(0deg); opacity: 1; }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .flip-in { animation: flipIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; perspective: 500px; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a12]">
        {/* Radial gradient */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/8 rounded-full blur-[150px]" />

        {/* Confetti dots */}
        {DOTS.map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: dot.size,
              height: dot.size,
              backgroundColor: dot.color,
              animation: `confettiFloat ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
              opacity: 0.3,
            }}
          />
        ))}

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full text-center">
          {/* Badge */}
          <div
            className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-sm font-medium mb-8"
            style={{ animationDelay: "0.1s" }}
          >
            <Calendar size={14} />
            {t.badge}
          </div>

          {/* Heading */}
          <h1
            className="fade-up text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.05]"
            style={{ animationDelay: "0.2s" }}
          >
            {t.heading}
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.headingLine2}
            </span>
          </h1>

          {/* Date & venue */}
          <div
            className="fade-up mt-6 flex items-center justify-center gap-6 text-sm text-white/40"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-indigo-400" />
              {t.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-indigo-400" />
              {t.venue}
            </span>
          </div>

          <p
            className="fade-up mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.35s" }}
          >
            {t.subheading}
          </p>

          {/* Countdown — flip clock style */}
          <div
            className="fade-up mt-12 flex items-center justify-center gap-3 sm:gap-5"
            style={{ animationDelay: "0.4s" }}
          >
            {(["days", "hours", "mins", "secs"] as const).map((unit, i) => (
              <div key={unit} className="text-center">
                <div
                  className="flip-in relative w-18 h-20 sm:w-24 sm:h-24 bg-white/[0.04] border border-white/[0.08] rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  {/* Split line */}
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-white/[0.06]" />
                  <span className="text-3xl sm:text-4xl font-bold text-white font-mono">
                    {t.countdown[unit]}
                  </span>
                </div>
                <span className="text-[10px] text-white/25 mt-2 block uppercase tracking-wider">
                  {t.countdownLabels[unit]}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="fade-up mt-12 flex items-center justify-center gap-4"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#"
              className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-600/30 ${isAr ? "flex-row-reverse" : ""}`}
            >
              {t.ctaPrimary}
              <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
            </a>
            <a href="#" className="px-8 py-4 text-sm font-semibold text-white/50 border border-white/10 rounded-xl hover:bg-white/5 transition-all">
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
