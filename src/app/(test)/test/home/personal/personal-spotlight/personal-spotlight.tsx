"use client";

/**
 * Personal Spotlight Hero
 * Theater spotlight on name, rest in shadow, gradually reveals.
 * Performance/speaker feel. Blue/cyan palette on dark.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Reem Al-Dosari",
    title: "Speaker · Author · Consultant",
    intro: "Standing ovation starts here",
    bio: "TEDx speaker, bestselling author, and strategic consultant helping leaders find their voice and amplify their message.",
    cta: "Book Me to Speak",
    ctaSecondary: "Watch My Talks",
    credentials: [
      "50+ keynotes delivered",
      "3 published books",
      "Forbes 30 Under 30",
    ],
  },
  ar: {
    name: "ريم الدوسري",
    title: "متحدثة · مؤلفة · مستشارة",
    intro: "التصفيق الحار يبدأ هنا",
    bio: "متحدثة TEDx، مؤلفة كتب الأكثر مبيعاً، ومستشارة استراتيجية تساعد القادة في إيجاد صوتهم وتضخيم رسالتهم.",
    cta: "احجزني كمتحدثة",
    ctaSecondary: "شاهد محاضراتي",
    credentials: [
      "٥٠+ محاضرة رئيسية",
      "٣ كتب منشورة",
      "Forbes 30 Under 30",
    ],
  },
};

export function PersonalSpotlight({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes spotlightReveal {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes spotlightPulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        @keyframes nameReveal {
          0% { opacity: 0; transform: translateY(40px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes curtainLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-10%); }
        }
        @keyframes curtainRight {
          from { transform: translateX(0); }
          to { transform: translateX(10%); }
        }
        .name-reveal { animation: nameReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade-in { animation: fadeIn 1s ease both; }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
        {/* Stage curtain hints on sides */}
        <div
          className="absolute top-0 left-0 bottom-0 w-[15%] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, rgba(30, 10, 10, 0.8), transparent)",
            animation: "curtainLeft 3s ease-out 0.5s both",
          }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-[15%] pointer-events-none"
          style={{
            background: "linear-gradient(270deg, rgba(30, 10, 10, 0.8), transparent)",
            animation: "curtainRight 3s ease-out 0.5s both",
          }}
        />

        {/* Spotlight cone from above */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "500px",
            height: "120%",
            background: "conic-gradient(from 180deg at 50% 0%, transparent 35%, rgba(6, 182, 212, 0.04) 45%, rgba(6, 182, 212, 0.08) 50%, rgba(6, 182, 212, 0.04) 55%, transparent 65%)",
            animation: "spotlightReveal 2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both, spotlightPulse 5s ease-in-out 2.3s infinite",
          }}
        />

        {/* Stage floor glow */}
        <div
          className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[400px] h-20 rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse, rgba(6, 182, 212, 0.2), transparent 70%)",
            filter: "blur(15px)",
          }}
        />

        {/* Content in spotlight */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          {/* Intro text */}
          <p
            className="fade-in text-[11px] uppercase tracking-[0.5em] font-light"
            style={{ color: "rgba(6, 182, 212, 0.4)", animationDelay: "1s" }}
          >
            {t.intro}
          </p>

          {/* Name - big and spotlit */}
          <h1
            className="name-reveal mt-8 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1]"
            style={{
              animationDelay: "1.5s",
              color: "white",
              textShadow: "0 0 60px rgba(6, 182, 212, 0.2), 0 0 120px rgba(6, 182, 212, 0.1)",
            }}
          >
            {t.name}
          </h1>

          {/* Title */}
          <p
            className="fade-up mt-4 text-sm sm:text-base tracking-wide"
            style={{
              animationDelay: "2s",
              background: "linear-gradient(90deg, #06b6d4, #22d3ee, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.title}
          </p>

          {/* Divider */}
          <div
            className="fade-up mx-auto mt-6 h-px w-16"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent)",
              animationDelay: "2.2s",
            }}
          />

          {/* Bio */}
          <p
            className="fade-up mt-6 text-sm sm:text-base text-gray-500 max-w-lg mx-auto leading-relaxed"
            style={{ animationDelay: "2.4s" }}
          >
            {t.bio}
          </p>

          {/* Credentials */}
          <div className="fade-up mt-8 flex flex-wrap justify-center gap-4" style={{ animationDelay: "2.6s" }}>
            {t.credentials.map((cred, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(6, 182, 212, 0.08)",
                  color: "rgba(6, 182, 212, 0.6)",
                  border: "1px solid rgba(6, 182, 212, 0.1)",
                }}
              >
                {cred}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className={`fade-up mt-10 flex gap-4 justify-center ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "2.8s" }}>
            <a
              href="#"
              className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ background: "linear-gradient(135deg, #0891b2, #06b6d4)" }}
            >
              {t.cta}
              <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
            </a>
            <a
              href="#"
              className="px-7 py-3.5 text-sm font-semibold rounded-xl transition-all hover:border-cyan-700"
              style={{
                color: "rgba(6, 182, 212, 0.5)",
                border: "1px solid rgba(6, 182, 212, 0.15)",
              }}
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
