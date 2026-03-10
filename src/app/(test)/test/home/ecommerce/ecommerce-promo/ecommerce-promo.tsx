"use client";

import { ArrowRight, Zap } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    discount: "50%",
    discountLabel: "OFF",
    heading: "Black Friday Sale",
    subheading: "Our biggest sale of the year. Don't miss out on exclusive deals.",
    ctaPrimary: "Shop the Sale",
    ctaSecondary: "Browse All Deals",
    countdown: { days: "03", hours: "14", mins: "27", secs: "51" },
    countdownLabels: { days: "Days", hours: "Hours", mins: "Minutes", secs: "Seconds" },
    urgency: "Limited time offer — ends soon!",
  },
  ar: {
    discount: "50%",
    discountLabel: "خصم",
    heading: "تخفيضات الجمعة البيضاء",
    subheading: "أكبر تخفيضاتنا هذا العام. لا تفوّت العروض الحصرية.",
    ctaPrimary: "تسوق التخفيضات",
    ctaSecondary: "تصفح كل العروض",
    countdown: { days: "03", hours: "14", mins: "27", secs: "51" },
    countdownLabels: { days: "أيام", hours: "ساعات", mins: "دقائق", secs: "ثوانٍ" },
    urgency: "عرض محدود — ينتهي قريباً!",
  },
};

export function EcommercePromo({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes stripeMove {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .pulse-btn { animation: pulse 2s ease-in-out infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* Animated diagonal stripes */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
            backgroundSize: "40px 40px",
            animation: "stripeMove 2s linear infinite",
          }}
        />

        {/* Red accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full text-center">
          {/* Urgency badge */}
          <div
            className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8"
            style={{ animationDelay: "0.1s", animation: "flash 2s ease-in-out infinite" }}
          >
            <Zap size={14} />
            {t.urgency}
          </div>

          {/* Oversized discount */}
          <div
            className="fade-up mb-6"
            style={{ animationDelay: "0.2s" }}
          >
            <span
              className="text-8xl sm:text-9xl lg:text-[12rem] font-black leading-none tracking-tight"
              style={{
                WebkitTextStroke: "3px rgba(239,68,68,0.6)",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t.discount}
            </span>
            <span className="block text-2xl sm:text-3xl font-bold text-red-400 -mt-4 tracking-widest uppercase">
              {t.discountLabel}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="fade-up text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            style={{ animationDelay: "0.3s" }}
          >
            {t.heading}
          </h1>

          <p
            className="fade-up mt-4 text-lg text-white/40 max-w-md mx-auto"
            style={{ animationDelay: "0.4s" }}
          >
            {t.subheading}
          </p>

          {/* Countdown */}
          <div
            className="fade-up mt-10 flex items-center justify-center gap-3 sm:gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            {(["days", "hours", "mins", "secs"] as const).map((unit) => (
              <div key={unit} className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/[0.05] border border-white/[0.08] rounded-xl flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                    {t.countdown[unit]}
                  </span>
                </div>
                <span className="text-[10px] text-white/30 mt-1.5 block uppercase tracking-wider">
                  {t.countdownLabels[unit]}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="fade-up mt-10 flex items-center justify-center gap-4"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#"
              className={`pulse-btn group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-500 transition-all hover:shadow-xl hover:shadow-red-600/30 ${isAr ? "flex-row-reverse" : ""}`}
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
