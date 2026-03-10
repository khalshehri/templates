"use client";

/**
 * Lava Lamp Hero Template
 *
 * 70s retro lava lamp with rising and falling blobs. Groovy, psychedelic colors.
 * Blobs morph and merge as they float up with heavy blur for soft glowing edges.
 * A glass tube effect frames the scene with a trapezoid base at the bottom.
 * Warm, trippy, nostalgic feel.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    tagline: "Far Out & Groovy",
    headline: "Let Your Ideas Flow",
    description:
      "Like the mesmerizing dance of a lava lamp, great ideas rise, merge, and transform. We help you shape that creative energy into something beautiful.",
    cta: "Get Started",
    ctaSecondary: "Learn More",
  },
  ar: {
    tagline: "رائع و مذهل",
    headline: "دع أفكارك تتدفق",
    description:
      "مثل الرقص الساحر لمصباح الحمم، الأفكار العظيمة ترتفع وتندمج وتتحول. نساعدك على تشكيل تلك الطاقة الإبداعية إلى شيء جميل.",
    cta: "ابدأ الآن",
    ctaSecondary: "اعرف المزيد",
  },
};

export function LavaLamp({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  const blobs = [
    {
      size: "w-44 h-44",
      color: "#ff6b35",
      bottom: "8%",
      left: "20%",
      delay: "0s",
      duration: "8s",
      blur: "blur-[50px]",
      anim: "lava-rise-1",
    },
    {
      size: "w-56 h-56",
      color: "#ff1493",
      bottom: "5%",
      left: "55%",
      delay: "1.5s",
      duration: "10s",
      blur: "blur-[60px]",
      anim: "lava-rise-2",
    },
    {
      size: "w-36 h-36",
      color: "#ffd700",
      bottom: "15%",
      left: "35%",
      delay: "3s",
      duration: "9s",
      blur: "blur-[45px]",
      anim: "lava-rise-3",
    },
    {
      size: "w-48 h-48",
      color: "#ff1493",
      bottom: "2%",
      left: "70%",
      delay: "0.8s",
      duration: "11s",
      blur: "blur-[55px]",
      anim: "lava-rise-1",
    },
    {
      size: "w-32 h-32",
      color: "#ff6b35",
      bottom: "20%",
      left: "45%",
      delay: "4s",
      duration: "7s",
      blur: "blur-[40px]",
      anim: "lava-rise-2",
    },
    {
      size: "w-40 h-40",
      color: "#ffd700",
      bottom: "10%",
      left: "15%",
      delay: "2s",
      duration: "12s",
      blur: "blur-[50px]",
      anim: "lava-rise-3",
    },
    {
      size: "w-28 h-28",
      color: "#c71585",
      bottom: "25%",
      left: "80%",
      delay: "5s",
      duration: "8.5s",
      blur: "blur-[42px]",
      anim: "lava-rise-1",
    },
    {
      size: "w-52 h-52",
      color: "#ff4500",
      bottom: "0%",
      left: "30%",
      delay: "2.5s",
      duration: "13s",
      blur: "blur-[58px]",
      anim: "lava-rise-2",
    },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #1a0a2e 0%, #2d1155 50%, #1a0a2e 100%)" }}
    >
      <style>{`
        @keyframes lava-rise-1 {
          0% {
            transform: translateY(0) scale(1);
            border-radius: 40% 60% 55% 45% / 50% 40% 60% 50%;
          }
          25% {
            transform: translateY(-180px) scale(1.15);
            border-radius: 55% 45% 40% 60% / 60% 55% 45% 40%;
          }
          50% {
            transform: translateY(-350px) scale(0.9);
            border-radius: 45% 55% 60% 40% / 40% 60% 50% 55%;
          }
          75% {
            transform: translateY(-200px) scale(1.1);
            border-radius: 60% 40% 45% 55% / 55% 45% 40% 60%;
          }
          100% {
            transform: translateY(0) scale(1);
            border-radius: 40% 60% 55% 45% / 50% 40% 60% 50%;
          }
        }
        @keyframes lava-rise-2 {
          0% {
            transform: translateY(0) scale(1);
            border-radius: 50% 50% 45% 55% / 55% 45% 50% 50%;
          }
          20% {
            transform: translateY(-250px) scale(1.2);
            border-radius: 60% 40% 55% 45% / 45% 55% 40% 60%;
          }
          40% {
            transform: translateY(-400px) scale(0.85);
            border-radius: 40% 60% 50% 50% / 60% 40% 55% 45%;
          }
          60% {
            transform: translateY(-300px) scale(1.05);
            border-radius: 55% 45% 60% 40% / 50% 50% 45% 55%;
          }
          80% {
            transform: translateY(-100px) scale(1.15);
            border-radius: 45% 55% 40% 60% / 40% 60% 55% 45%;
          }
          100% {
            transform: translateY(0) scale(1);
            border-radius: 50% 50% 45% 55% / 55% 45% 50% 50%;
          }
        }
        @keyframes lava-rise-3 {
          0% {
            transform: translateY(0) scale(1);
            border-radius: 45% 55% 50% 50% / 50% 50% 55% 45%;
          }
          30% {
            transform: translateY(-220px) scale(1.25);
            border-radius: 55% 45% 60% 40% / 40% 60% 45% 55%;
          }
          50% {
            transform: translateY(-380px) scale(0.8);
            border-radius: 60% 40% 45% 55% / 55% 45% 60% 40%;
          }
          70% {
            transform: translateY(-150px) scale(1.1);
            border-radius: 40% 60% 55% 45% / 60% 40% 50% 50%;
          }
          100% {
            transform: translateY(0) scale(1);
            border-radius: 45% 55% 50% 50% / 50% 50% 55% 45%;
          }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>

      {/* Glass tube — left border */}
      <div
        className="absolute top-0 bottom-0 w-px opacity-20"
        style={{
          left: "10%",
          background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 80%, transparent 100%)",
        }}
      />
      {/* Glass tube — right border */}
      <div
        className="absolute top-0 bottom-0 w-px opacity-20"
        style={{
          right: "10%",
          background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 80%, transparent 100%)",
        }}
      />

      {/* Glass tube subtle reflection */}
      <div
        className="absolute top-0 bottom-0 w-8 opacity-[0.04]"
        style={{
          left: "11%",
          background: "linear-gradient(90deg, rgba(255,255,255,0.5), transparent)",
        }}
      />

      {/* Lava lamp base — bottom trapezoid */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: "90%",
          height: "60px",
          background: "linear-gradient(180deg, #0d0520 0%, #060210 100%)",
          clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      />
      {/* Lava lamp cap — top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: "70%",
          height: "30px",
          background: "linear-gradient(180deg, #060210 0%, #0d0520 100%)",
          clipPath: "polygon(10% 100%, 90% 100%, 85% 0%, 15% 0%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      />

      {/* Blobs */}
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute ${blob.size} ${blob.blur} opacity-70`}
          style={{
            bottom: blob.bottom,
            left: blob.left,
            backgroundColor: blob.color,
            animation: `${blob.anim} ${blob.duration} ${blob.delay} ease-in-out infinite`,
            willChange: "transform, border-radius",
          }}
        />
      ))}

      {/* Ambient glow at the bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-48 opacity-40"
        style={{
          background: "radial-gradient(ellipse at center bottom, #ff6b35 0%, #ff1493 40%, transparent 70%)",
          filter: "blur(60px)",
          animation: "glow-pulse 6s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-3xl mx-auto ${isAr ? "font-arabic" : ""}`}>
        {/* Tagline */}
        <p
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-bold"
          style={{
            color: "#ffd700",
            textShadow: "0 0 20px rgba(255,215,0,0.5)",
          }}
        >
          {t.tagline}
        </p>

        {/* Headline */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight ${
            isAr ? "leading-snug" : ""
          }`}
          style={{
            color: "#fff",
            textShadow: "0 0 40px rgba(255,107,53,0.4), 0 0 80px rgba(255,20,147,0.2)",
            fontFamily: isAr ? "inherit" : "'Arial Rounded MT Bold', 'Nunito', sans-serif",
            letterSpacing: isAr ? "0" : "-0.02em",
          }}
        >
          {t.headline}
        </h1>

        {/* Description */}
        <p
          className={`text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed ${
            isAr ? "leading-loose" : ""
          }`}
          style={{
            color: "rgba(255,255,255,0.75)",
            textShadow: "0 0 10px rgba(255,107,53,0.15)",
          }}
        >
          {t.description}
        </p>

        {/* CTA Buttons */}
        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group relative px-8 py-4 rounded-full font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,107,53,0.5)]"
            style={{
              background: "linear-gradient(135deg, #ff6b35, #ff1493)",
            }}
          >
            <span className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
              {t.cta}
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                  isAr ? "rotate-180 group-hover:-translate-x-1" : ""
                }`}
              />
            </span>
          </button>
          <button
            className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 border-2"
            style={{
              color: "#ffd700",
              borderColor: "rgba(255,215,0,0.4)",
              background: "rgba(255,215,0,0.05)",
            }}
          >
            {t.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
}
