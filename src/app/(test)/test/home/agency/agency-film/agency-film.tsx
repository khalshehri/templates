"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Creative Agency",
    title: "Frame by Frame Brilliance",
    description:
      "We direct your brand's blockbuster. Every frame, every cut, every transition — crafted to captivate audiences worldwide.",
    cta: "Start Your Project",
    secondary: "View Portfolio",
  },
  ar: {
    badge: "وكالة إبداعية",
    title: "تألق إطاراً بإطار",
    description:
      "نخرج فيلم علامتك التجارية. كل إطار، كل قطع، كل انتقال — مصمم لجذب الجماهير في كل مكان.",
    cta: "ابدأ مشروعك",
    secondary: "عرض الأعمال",
  },
};

export function AgencyFilm({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const frames = [
    { color: "#ec4899", label: "BRAND" },
    { color: "#a855f7", label: "STORY" },
    { color: "#d946ef", label: "DESIGN" },
    { color: "#f472b6", label: "LAUNCH" },
    { color: "#c084fc", label: "SCALE" },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Film strip - top */}
      <div className="absolute top-0 left-0 right-0 h-16 af-strip-slide" style={{ background: "rgba(20,20,20,0.9)" }}>
        <div className="flex h-full items-center">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-1"
              style={{
                width: 20,
                height: 14,
                borderRadius: 2,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Film strip - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 af-strip-slide-reverse" style={{ background: "rgba(20,20,20,0.9)" }}>
        <div className="flex h-full items-center">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-1"
              style={{
                width: 20,
                height: 14,
                borderRadius: 2,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated film frames sliding horizontally */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="af-frames-scroll flex gap-6 px-8" style={{ width: "200%" }}>
          {[...frames, ...frames, ...frames].map((frame, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-lg relative"
              style={{
                width: 180,
                height: 240,
                border: `2px solid ${frame.color}20`,
                background: `linear-gradient(135deg, ${frame.color}08, transparent)`,
              }}
            >
              {/* Frame sprocket holes */}
              <div className="absolute left-1 top-0 bottom-0 flex flex-col justify-around">
                {[0, 1, 2, 3, 4].map((h) => (
                  <div key={h} className="w-2 h-3 rounded-sm" style={{ background: "rgba(255,255,255,0.05)" }} />
                ))}
              </div>
              <div className="absolute right-1 top-0 bottom-0 flex flex-col justify-around">
                {[0, 1, 2, 3, 4].map((h) => (
                  <div key={h} className="w-2 h-3 rounded-sm" style={{ background: "rgba(255,255,255,0.05)" }} />
                ))}
              </div>
              {/* Frame content */}
              <div className="absolute inset-4 flex items-center justify-center">
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: `${frame.color}60` }}
                >
                  {frame.label}
                </span>
              </div>
              {/* Frame number */}
              <div
                className="absolute bottom-2 right-3 text-xs font-mono"
                style={{ color: "rgba(255,255,255,0.15)" }}
              >
                {String(i + 1).padStart(3, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projector light cone */}
      <div
        className="absolute pointer-events-none af-projector-flicker"
        style={{
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          borderLeft: "200px solid transparent",
          borderRight: "200px solid transparent",
          borderTop: "600px solid rgba(236,72,153,0.03)",
          filter: "blur(40px)",
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
            background: "linear-gradient(135deg, #ec4899, #a855f7, #d946ef)",
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
        .af-strip-slide {
          animation: afSlide 20s linear infinite;
        }
        @keyframes afSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .af-strip-slide-reverse {
          animation: afSlideRev 20s linear infinite;
        }
        @keyframes afSlideRev {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .af-frames-scroll {
          animation: afFrames 25s linear infinite;
        }
        @keyframes afFrames {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .af-projector-flicker {
          animation: afFlicker 3s ease-in-out infinite;
        }
        @keyframes afFlicker {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
          75% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
