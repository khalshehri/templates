"use client";

/**
 * Education Lighthouse -- Education Hero Template
 *
 * Lighthouse beacon sweeping with "Guiding your learning" theme.
 * Nautical/beacon metaphor with ocean waves and light beam animation.
 *
 * @category Education
 * @palette emerald (#059669), beacon gold (#FBBF24), navy (#0C1B2A), sea teal (#0D4F4F)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Guiding Light",
    heading: "A Beacon for Your Learning Journey",
    subheading:
      "Through fog and uncertainty, our courses illuminate the path forward. Let knowledge be the lighthouse that guides you to safe harbor.",
    cta: "Follow the Light",
    secondary: "Chart Your Course",
    quote: "\"Education is the kindling of a flame, not the filling of a vessel.\"",
    quoteAuthor: "— Socrates",
  },
  ar: {
    badge: "نور الهداية",
    heading: "منارة لرحلتك التعليمية",
    subheading:
      "عبر الضباب والغموض، دوراتنا تُنير الطريق للأمام. دع المعرفة تكون المنارة التي ترشدك إلى بر الأمان.",
    cta: "اتبع النور",
    secondary: "ارسم مسارك",
    quote: "\"التعليم هو إشعال شعلة، وليس ملء وعاء.\"",
    quoteAuthor: "— سقراط",
  },
};

const stars = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: (i * 41 + 7) % 100,
  y: (i * 23 + 3) % 45,
  size: 1 + (i % 3),
  delay: (i * 0.2) % 3,
}));

export function EducationLighthouse({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0C1B2A 0%, #0D2B3A 40%, #0D4F4F 80%, #0A3A3A 100%)",
      }}
    >
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: "rgba(255,255,255,0.6)",
            animation: `starTwinkle ${2 + (star.id % 3)}s ease-in-out ${star.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* Moon */}
      <div
        className="absolute"
        style={{
          top: "8%",
          [isRTL ? "left" : "right"]: "15%",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 65% 35%, #FFF8DC 0%, #FDE68A 50%, #EAB308 100%)",
          boxShadow: "0 0 40px rgba(253,230,138,0.3), 0 0 80px rgba(253,230,138,0.1)",
        }}
      />

      {/* Lighthouse structure */}
      <div
        className="absolute bottom-0 z-10"
        style={{ [isRTL ? "right" : "left"]: "12%", width: "120px" }}
      >
        {/* Beacon light beam */}
        <div
          className="absolute z-5"
          style={{
            bottom: "380px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "200px",
            transformOrigin: "center left",
            animation: "beaconSweep 6s ease-in-out infinite",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(90deg, rgba(251,191,36,0.4) 0%, rgba(251,191,36,0.02) 100%)",
              clipPath: "polygon(0% 35%, 100% 0%, 100% 100%, 0% 65%)",
              filter: "blur(4px)",
            }}
          />
        </div>

        {/* Lantern room */}
        <div
          className="absolute bottom-[360px] left-1/2 -translate-x-1/2"
          style={{ width: "40px", height: "40px" }}
        >
          <div
            className="w-full h-full rounded-sm"
            style={{
              background: "rgba(251,191,36,0.3)",
              border: "2px solid rgba(251,191,36,0.6)",
              boxShadow: "0 0 30px rgba(251,191,36,0.5), 0 0 60px rgba(251,191,36,0.2)",
              animation: "beaconGlow 3s ease-in-out infinite alternate",
            }}
          />
          {/* Dome */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2"
            style={{
              width: "44px",
              height: "16px",
              backgroundColor: "#2D2D2D",
              borderRadius: "22px 22px 0 0",
            }}
          />
          {/* Finial */}
          <div
            className="absolute -top-5 left-1/2 -translate-x-1/2"
            style={{ width: "4px", height: "8px", backgroundColor: "#555" }}
          />
        </div>

        {/* Gallery/walkway */}
        <div
          className="absolute bottom-[350px] left-1/2 -translate-x-1/2"
          style={{
            width: "56px",
            height: "10px",
            backgroundColor: "#333",
            borderRadius: "2px",
          }}
        />

        {/* Tower body - tapered */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: "50px",
            height: "350px",
            background: "repeating-linear-gradient(180deg, #E8E0D0 0px, #E8E0D0 40px, #DC2626 40px, #DC2626 80px)",
            clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Base */}
        <div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2"
          style={{
            width: "80px",
            height: "30px",
            background: "linear-gradient(180deg, #4A4A4A 0%, #333 100%)",
            borderRadius: "4px 4px 0 0",
          }}
        />
      </div>

      {/* Rocky cliff under lighthouse */}
      <div
        className="absolute bottom-0 z-5"
        style={{ [isRTL ? "right" : "left"]: "4%", width: "250px", height: "80px" }}
      >
        <svg className="w-full h-full" viewBox="0 0 250 80" preserveAspectRatio="none">
          <path
            d="M0 80 L0 40 Q30 20 60 35 Q90 15 120 25 Q150 10 180 30 Q210 20 240 35 L250 30 L250 80 Z"
            fill="#1A2A2A"
          />
        </svg>
      </div>

      {/* Ocean waves */}
      <div className="absolute bottom-0 left-0 right-0 z-[6]" style={{ height: "100px" }}>
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0 60 Q100 40 200 60 Q300 80 400 60 Q500 40 600 60 Q700 80 800 60 Q900 40 1000 60 Q1100 80 1200 60 L1200 100 L0 100 Z"
            fill="rgba(13,79,79,0.6)"
            style={{ animation: "waveMove1 8s ease-in-out infinite" }}
          />
          <path
            d="M0 70 Q150 50 300 70 Q450 90 600 70 Q750 50 900 70 Q1050 90 1200 70 L1200 100 L0 100 Z"
            fill="rgba(10,58,58,0.8)"
            style={{ animation: "waveMove2 6s ease-in-out infinite" }}
          />
        </svg>
      </div>

      {/* Content - on the right side */}
      <div
        className="relative z-20 max-w-xl px-8"
        style={{
          [isRTL ? "marginRight" : "marginLeft"]: "auto",
          [isRTL ? "marginLeft" : "marginRight"]: "8%",
        }}
      >
        <div
          className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
          style={{
            backgroundColor: "rgba(251,191,36,0.1)",
            color: "#FBBF24",
            border: "1px solid rgba(251,191,36,0.3)",
          }}
        >
          {t.badge}
        </div>

        <h1
          className="text-4xl sm:text-5xl font-bold leading-tight mb-5"
          style={{ color: "#E2FAF0" }}
        >
          {t.heading}
        </h1>

        <p
          className="text-lg leading-relaxed mb-6"
          style={{ color: "rgba(167,243,208,0.65)" }}
        >
          {t.subheading}
        </p>

        {/* Quote */}
        <div
          className="mb-8 py-3 border-l-2 pl-4"
          style={{
            borderColor: "rgba(251,191,36,0.3)",
            direction: isRTL ? "rtl" : "ltr",
          }}
        >
          <p className="text-sm italic" style={{ color: "rgba(253,230,138,0.6)" }}>
            {t.quote}
          </p>
          <p className="text-xs mt-1" style={{ color: "rgba(253,230,138,0.4)" }}>
            {t.quoteAuthor}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            className="group flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #059669, #0D9488)",
              boxShadow: "0 4px 20px rgba(5,150,105,0.3)",
            }}
          >
            {t.cta}
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
            />
          </button>
          <button
            className="px-7 py-3 rounded-full text-sm font-semibold transition-colors"
            style={{ color: "#FBBF24", border: "1px solid rgba(251,191,36,0.3)" }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes beaconSweep {
          0% { transform: translateX(-50%) rotate(-15deg); opacity: 0.6; }
          50% { transform: translateX(-50%) rotate(25deg); opacity: 1; }
          100% { transform: translateX(-50%) rotate(-15deg); opacity: 0.6; }
        }
        @keyframes beaconGlow {
          0% { box-shadow: 0 0 20px rgba(251,191,36,0.3), 0 0 40px rgba(251,191,36,0.1); }
          100% { box-shadow: 0 0 40px rgba(251,191,36,0.6), 0 0 80px rgba(251,191,36,0.3); }
        }
        @keyframes starTwinkle {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }
        @keyframes waveMove1 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-30px); }
        }
        @keyframes waveMove2 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(20px); }
        }
      `}</style>
    </section>
  );
}
