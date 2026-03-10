"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Creative Agency",
    title: "Let Creativity Flow",
    description:
      "Ideas don't stay contained. We let bold colors drip, pour, and cascade until your brand overflows with personality.",
    cta: "Start Your Project",
    secondary: "View Portfolio",
  },
  ar: {
    badge: "وكالة إبداعية",
    title: "دع الإبداع يتدفق",
    description:
      "الأفكار لا تبقى محتواة. ندع الألوان الجريئة تقطر وتتدفق حتى تفيض علامتك التجارية بالشخصية.",
    cta: "ابدأ مشروعك",
    secondary: "عرض الأعمال",
  },
};

export function AgencyDrip({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const drips = [
    { x: "8%", color: "#ec4899", height: "70%", width: 30, delay: 0 },
    { x: "18%", color: "#d946ef", height: "55%", width: 22, delay: 0.5 },
    { x: "28%", color: "#a855f7", height: "80%", width: 35, delay: 0.2 },
    { x: "40%", color: "#f472b6", height: "45%", width: 18, delay: 1.0 },
    { x: "52%", color: "#c084fc", height: "65%", width: 28, delay: 0.7 },
    { x: "65%", color: "#ec4899", height: "75%", width: 32, delay: 0.3 },
    { x: "75%", color: "#d946ef", height: "50%", width: 20, delay: 0.9 },
    { x: "85%", color: "#a855f7", height: "60%", width: 26, delay: 0.6 },
    { x: "92%", color: "#f472b6", height: "40%", width: 16, delay: 1.2 },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Paint pool at top */}
      <div
        className="absolute top-0 left-0 right-0 h-3"
        style={{
          background: "linear-gradient(90deg, #ec4899, #a855f7, #d946ef, #f472b6, #c084fc, #ec4899)",
          filter: "blur(1px)",
        }}
      />

      {/* Dripping streams */}
      {drips.map((drip, i) => (
        <div
          key={i}
          className="absolute top-3 ad-drip-flow"
          style={{
            left: drip.x,
            width: drip.width,
            height: drip.height,
            animationDelay: `${drip.delay}s`,
          }}
        >
          {/* Main stream */}
          <div
            className="w-full h-full rounded-b-full"
            style={{
              background: `linear-gradient(to bottom, ${drip.color}50, ${drip.color}20, transparent)`,
              filter: "blur(2px)",
            }}
          />
          {/* Drip bulb at bottom */}
          <div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full ad-drip-bulb"
            style={{
              width: drip.width * 1.2,
              height: drip.width * 1.4,
              background: `radial-gradient(ellipse, ${drip.color}40, ${drip.color}10)`,
              filter: "blur(3px)",
              animationDelay: `${drip.delay + 1}s`,
            }}
          />
          {/* Splash drops */}
          {[0, 1, 2].map((j) => (
            <div
              key={j}
              className="absolute rounded-full ad-splash-drop"
              style={{
                bottom: -20 - j * 15,
                left: `${30 + j * 15}%`,
                width: 4 + j * 2,
                height: 4 + j * 2,
                background: drip.color,
                opacity: 0.2,
                animationDelay: `${drip.delay + 1.5 + j * 0.3}s`,
              }}
            />
          ))}
        </div>
      ))}

      {/* Color pool at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 ad-pool-glow"
        style={{
          background: "linear-gradient(to top, rgba(236,72,153,0.08), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
          style={{
            color: "#ec4899",
            borderColor: "rgba(236,72,153,0.3)",
            background: "rgba(236,72,153,0.08)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-extrabold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            background: "linear-gradient(180deg, #ec4899, #a855f7)",
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
              background: "linear-gradient(135deg, #ec4899, #a855f7)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(236,72,153,0.4)",
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
              border: "1px solid rgba(168,85,247,0.4)",
              color: "#c084fc",
              background: "rgba(168,85,247,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .ad-drip-flow {
          animation: adDrip 3s ease-in forwards;
          transform-origin: top;
          transform: scaleY(0);
        }
        @keyframes adDrip {
          0% { transform: scaleY(0); }
          60% { transform: scaleY(1.05); }
          100% { transform: scaleY(1); }
        }
        .ad-drip-bulb {
          animation: adBulb 2s ease-in-out infinite;
        }
        @keyframes adBulb {
          0%, 100% { transform: translateX(-50%) scaleY(1); }
          50% { transform: translateX(-50%) scaleY(1.3); }
        }
        .ad-splash-drop {
          animation: adSplash 2s ease-out infinite;
        }
        @keyframes adSplash {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(10px) scale(1.2); opacity: 0.1; }
          100% { transform: translateY(20px) scale(0); opacity: 0; }
        }
        .ad-pool-glow {
          animation: adPool 3s ease-in-out infinite;
        }
        @keyframes adPool {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
