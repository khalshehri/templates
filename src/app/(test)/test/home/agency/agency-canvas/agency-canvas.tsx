"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Digital Artistry",
    title: "Your Vision, Our Canvas",
    description:
      "We start with a blank canvas and paint digital masterpieces that captivate audiences and elevate brands beyond imagination.",
    cta: "Commission Us",
    secondary: "See Our Work",
  },
  ar: {
    badge: "فن رقمي",
    title: "رؤيتك، لوحتنا",
    description:
      "نبدأ بلوحة فارغة ونرسم تحفاً رقمية تأسر الجمهور وترتقي بالعلامات التجارية إلى ما يفوق الخيال.",
    cta: "كلّفنا الآن",
    secondary: "شاهد أعمالنا",
  },
};

export function AgencyCanvas({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const brushStrokes = [
    { color: "#f43f5e", width: "60%", height: 8, top: "20%", left: "10%", delay: 0, angle: -5 },
    { color: "#a855f7", width: "50%", height: 6, top: "35%", left: "25%", delay: 0.5, angle: 3 },
    { color: "#3b82f6", width: "55%", height: 10, top: "50%", left: "15%", delay: 1.0, angle: -2 },
    { color: "#14b8a6", width: "45%", height: 7, top: "65%", left: "30%", delay: 1.5, angle: 4 },
    { color: "#f59e0b", width: "40%", height: 9, top: "78%", left: "20%", delay: 2.0, angle: -3 },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[#faf8f5]">
      {/* Canvas frame */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "80%",
          maxWidth: 900,
          height: "70%",
          border: "12px solid #d4a574",
          borderRadius: 4,
          boxShadow: "inset 0 0 40px rgba(0,0,0,0.05), 8px 8px 30px rgba(0,0,0,0.15), -4px -4px 20px rgba(0,0,0,0.08)",
          background: "#fff",
        }}
      >
        {/* Inner frame bevel */}
        <div
          className="absolute inset-0"
          style={{
            border: "3px solid #c4956a",
            boxShadow: "inset 2px 2px 8px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      {/* Animated brush strokes painting across canvas */}
      {brushStrokes.map((stroke, i) => (
        <div
          key={i}
          className="absolute pointer-events-none ac-brush-stroke"
          style={{
            top: stroke.top,
            left: stroke.left,
            width: stroke.width,
            height: stroke.height,
            background: `linear-gradient(90deg, transparent, ${stroke.color}60 10%, ${stroke.color} 30%, ${stroke.color} 70%, ${stroke.color}60 90%, transparent)`,
            borderRadius: "50px",
            transform: `rotate(${stroke.angle}deg)`,
            filter: "blur(1px)",
            animationDelay: `${stroke.delay}s`,
          }}
        />
      ))}

      {/* Paint texture dots scattered */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none ac-paint-dot"
          style={{
            width: 3 + Math.random() * 8,
            height: 3 + Math.random() * 8,
            background: ["#f43f5e", "#a855f7", "#3b82f6", "#14b8a6", "#f59e0b"][i % 5],
            opacity: 0.15,
            top: `${15 + Math.random() * 70}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Paintbrush element */}
      <div
        className="absolute pointer-events-none ac-brush-move"
        style={{ top: "30%", right: "8%", zIndex: 5 }}
      >
        <div style={{ transform: "rotate(-45deg)" }}>
          {/* Brush handle */}
          <div
            style={{
              width: 8,
              height: 80,
              background: "linear-gradient(to bottom, #d4a574, #8b6914)",
              borderRadius: "4px 4px 2px 2px",
            }}
          />
          {/* Brush ferrule */}
          <div style={{ width: 12, height: 10, background: "#888", borderRadius: 2, marginLeft: -2 }} />
          {/* Brush bristles */}
          <div
            style={{
              width: 14,
              height: 20,
              background: "linear-gradient(to bottom, #a855f7, #7c3aed)",
              borderRadius: "2px 2px 6px 6px",
              marginLeft: -3,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
          style={{
            color: "#a855f7",
            borderColor: "rgba(168,85,247,0.3)",
            background: "rgba(168,85,247,0.08)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-extrabold mb-6 leading-tight text-gray-900"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          {t.title}
        </h1>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-600">
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 text-white"
            style={{
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              boxShadow: "0 0 30px rgba(168,85,247,0.3)",
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
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#7c3aed",
              background: "rgba(168,85,247,0.05)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .ac-brush-stroke {
          animation: ac-paint 3s ease-out forwards;
          clip-path: inset(0 100% 0 0);
        }
        @keyframes ac-paint {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0% 0 0); }
        }
        .ac-paint-dot {
          animation: ac-dot-appear 0.5s ease-out forwards;
          opacity: 0;
        }
        @keyframes ac-dot-appear {
          0% { opacity: 0; transform: scale(0); }
          100% { opacity: 0.15; transform: scale(1); }
        }
        .ac-brush-move {
          animation: ac-move 6s ease-in-out infinite;
        }
        @keyframes ac-move {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-30px, 20px) rotate(5deg); }
          50% { transform: translate(-60px, -10px) rotate(-3deg); }
          75% { transform: translate(-20px, 30px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
}
