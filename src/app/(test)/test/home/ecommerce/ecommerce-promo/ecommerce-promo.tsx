"use client";

/**
 * Flash Sale Explosion Hero
 * High-energy urgency-driven promo with massive outlined discount number,
 * animated gradient fill, diagonal energy stripes, flip-clock countdown,
 * lightning bolt accents, and pulsing CTA. Everything screams urgency.
 */

import { ArrowRight, Zap } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    discount: "70",
    discountSymbol: "%",
    discountLabel: "OFF EVERYTHING",
    heading: "Flash Sale",
    subheading: "The deal you've been waiting for. Once it's gone, it's gone.",
    ctaPrimary: "Grab the Deal",
    ctaSecondary: "Browse All Deals",
    countdown: { days: "03", hours: "14", mins: "27", secs: "51" },
    countdownLabels: { days: "Days", hours: "Hours", mins: "Min", secs: "Sec" },
    urgency: "ENDING SOON — LIMITED STOCK",
  },
  ar: {
    discount: "70",
    discountSymbol: "%",
    discountLabel: "خصم على كل شيء",
    heading: "تخفيض خاطف",
    subheading: "الصفقة التي انتظرتها. حين تنتهي، لن تعود.",
    ctaPrimary: "احصل على العرض",
    ctaSecondary: "تصفح كل العروض",
    countdown: { days: "03", hours: "14", mins: "27", secs: "51" },
    countdownLabels: { days: "أيام", hours: "ساعات", mins: "دقائق", secs: "ثوانٍ" },
    urgency: "ينتهي قريباً — الكمية محدودة",
  },
};

// Diagonal energy stripes
const STRIPES = [
  { color: "rgba(239,68,68,0.12)", width: 90, delay: 0, duration: 3, top: "10%" },
  { color: "rgba(250,204,21,0.08)", width: 60, delay: 0.8, duration: 3.5, top: "30%" },
  { color: "rgba(239,68,68,0.06)", width: 120, delay: 1.5, duration: 4, top: "55%" },
  { color: "rgba(250,204,21,0.1)", width: 45, delay: 2.2, duration: 2.8, top: "75%" },
  { color: "rgba(239,68,68,0.05)", width: 80, delay: 0.5, duration: 3.2, top: "90%" },
];

export function EcommercePromo({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes stripeZoom {
          0% { transform: translateX(-120vw) skewX(-20deg); }
          100% { transform: translateX(120vw) skewX(-20deg); }
        }
        @keyframes flipIn {
          from { transform: perspective(400px) rotateX(40deg); opacity: 0; }
          to { transform: perspective(400px) rotateX(0deg); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ctaPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239,68,68,0.4); }
          50% { transform: scale(1.04); box-shadow: 0 0 30px 8px rgba(239,68,68,0.2); }
        }
        @keyframes boltGlow {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(250,204,21,0.6)); opacity: 0.7; }
          50% { filter: drop-shadow(0 0 16px rgba(250,204,21,0.9)); opacity: 1; }
        }
        @keyframes flash {
          0%, 90%, 100% { opacity: 1; }
          92% { opacity: 0.4; }
          94% { opacity: 1; }
          96% { opacity: 0.5; }
        }
        @keyframes urgencyPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .fade-in { animation: fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .cta-pulse { animation: ctaPulse 2s ease-in-out infinite; }
        .bolt-glow { animation: boltGlow 2.5s ease-in-out infinite; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(145deg, #1a0000, #0a0a0a 60%, #0a0a0a)" }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Diagonal energy stripes */}
        {STRIPES.map((stripe, i) => (
          <div
            key={i}
            className="absolute h-1 pointer-events-none"
            style={{
              top: stripe.top,
              left: 0,
              width: `${stripe.width}vw`,
              height: "3px",
              background: stripe.color,
              boxShadow: `0 0 20px ${stripe.color}`,
              animation: `stripeZoom ${stripe.duration}s linear infinite`,
              animationDelay: `${stripe.delay}s`,
            }}
          />
        ))}

        {/* Red glow center */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70vw", height: "70vh",
            background: "radial-gradient(ellipse, rgba(239,68,68,0.08), transparent 70%)",
          }}
        />

        {/* Lightning bolt — left */}
        <svg
          className="absolute pointer-events-none bolt-glow"
          style={{ top: "15%", left: "8%", width: 40, height: 80 }}
          viewBox="0 0 40 80"
          fill="none"
        >
          <path d="M24 0L8 35h12L12 80l22-45H22L24 0z" fill="rgba(250,204,21,0.7)" />
        </svg>

        {/* Lightning bolt — right */}
        <svg
          className="absolute pointer-events-none bolt-glow"
          style={{ bottom: "20%", right: "10%", width: 32, height: 64, animationDelay: "1.2s" }}
          viewBox="0 0 40 80"
          fill="none"
        >
          <path d="M24 0L8 35h12L12 80l22-45H22L24 0z" fill="rgba(250,204,21,0.5)" />
        </svg>

        {/* Small lightning bolt — top right */}
        <svg
          className="absolute pointer-events-none bolt-glow"
          style={{ top: "30%", right: "25%", width: 20, height: 40, animationDelay: "0.6s" }}
          viewBox="0 0 40 80"
          fill="none"
        >
          <path d="M24 0L8 35h12L12 80l22-45H22L24 0z" fill="rgba(250,204,21,0.3)" />
        </svg>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full text-center">
          {/* Urgency badge */}
          <div
            className="fade-in inline-flex items-center gap-2 px-5 py-2 rounded-sm text-xs font-bold tracking-[0.2em] uppercase mb-10"
            style={{
              animationDelay: "0.1s",
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.25)",
              color: "#ef4444",
              animation: "urgencyPulse 2s ease-in-out infinite, fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
            }}
          >
            <Zap size={14} />
            {t.urgency}
          </div>

          {/* Massive discount number */}
          <div className="fade-in relative mb-2" style={{ animationDelay: "0.2s" }}>
            {/* The huge outlined + gradient-filled number */}
            <div className="relative inline-block leading-none" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
              <span
                className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-black tracking-tighter"
                style={{
                  WebkitTextStroke: "2px rgba(239,68,68,0.4)",
                  WebkitTextFillColor: "transparent",
                  backgroundImage: "linear-gradient(90deg, #ef4444, #facc15, #ef4444, #facc15)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  animation: "gradientShift 4s ease infinite",
                  display: "inline-block",
                  lineHeight: 0.85,
                }}
              >
                {t.discount}
              </span>
              <span
                className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black"
                style={{
                  WebkitTextStroke: "2px rgba(250,204,21,0.5)",
                  WebkitTextFillColor: "transparent",
                  backgroundImage: "linear-gradient(90deg, #facc15, #ef4444, #facc15)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  animation: "gradientShift 4s ease infinite",
                  animationDelay: "0.5s",
                  display: "inline-block",
                  verticalAlign: "top",
                  lineHeight: 0.85,
                }}
              >
                {t.discountSymbol}
              </span>
            </div>
            {/* OFF label */}
            <div
              className="text-xl sm:text-2xl md:text-3xl font-black tracking-[0.3em] uppercase -mt-2"
              style={{
                color: "rgba(239,68,68,0.6)",
                animation: "flash 4s ease-in-out infinite",
              }}
            >
              {t.discountLabel}
            </div>
          </div>

          {/* Heading */}
          <h1
            className="fade-in text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-4"
            style={{ animationDelay: "0.3s" }}
          >
            {t.heading}
          </h1>

          <p
            className="fade-in mt-3 text-base sm:text-lg max-w-md mx-auto"
            style={{ animationDelay: "0.4s", color: "rgba(255,255,255,0.3)" }}
          >
            {t.subheading}
          </p>

          {/* Flip-clock countdown */}
          <div
            className="fade-in mt-10 flex items-center justify-center gap-3 sm:gap-5"
            style={{ animationDelay: "0.5s" }}
          >
            {(["days", "hours", "mins", "secs"] as const).map((unit, idx) => (
              <div key={unit} className="text-center">
                <div
                  className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden flex items-center justify-center"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 49.5%, rgba(0,0,0,0.2) 50%, rgba(255,255,255,0.04) 100%)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                    animation: `flipIn 0.6s ease both`,
                    animationDelay: `${0.5 + idx * 0.1}s`,
                    perspective: "400px",
                  }}
                >
                  {/* Center divider line */}
                  <div className="absolute left-0 right-0 h-px top-1/2" style={{ background: "rgba(0,0,0,0.4)" }} />
                  {/* Small notch left */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2 rounded-r-full" style={{ background: "rgba(0,0,0,0.4)" }} />
                  {/* Small notch right */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-2 rounded-l-full" style={{ background: "rgba(0,0,0,0.4)" }} />
                  <span
                    className="text-3xl sm:text-4xl font-bold font-mono"
                    style={{ color: "white", textShadow: "0 0 10px rgba(239,68,68,0.3)" }}
                  >
                    {t.countdown[unit]}
                  </span>
                </div>
                <span className="text-[10px] mt-2 block uppercase tracking-wider font-medium" style={{ color: "rgba(255,255,255,0.25)" }}>
                  {t.countdownLabels[unit]}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="fade-in mt-10 flex items-center justify-center gap-4"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#"
              className="cta-pulse group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-lg transition-all"
              style={{
                background: "linear-gradient(135deg, #ef4444, #dc2626)",
                color: "white",
                boxShadow: "0 4px 20px rgba(239,68,68,0.3)",
              }}
            >
              <Zap size={16} />
              {t.ctaPrimary}
              <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
            </a>
            <a
              href="#"
              className="px-8 py-4 text-sm font-semibold uppercase tracking-wider rounded-lg transition-all hover:bg-white/5"
              style={{ color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {t.ctaSecondary}
            </a>
          </div>

          {/* Bottom accent line */}
          <div
            className="fade-in mx-auto mt-14 w-60 h-px"
            style={{
              animationDelay: "0.9s",
              background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.3), rgba(250,204,21,0.3), transparent)",
            }}
          />
        </div>
      </section>
    </>
  );
}
