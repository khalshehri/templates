"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "Instant Memories",
    tagline: "Captured in an Instant",
    description:
      "Life's most precious moments deserve to be held, not just seen. We turn fleeting seconds into timeless prints you can touch, feel, and treasure forever.",
    cta: "Start Your Story",
    secondary: "See Our Work",
    caption: "Summer 2024 — Golden Hour",
  },
  ar: {
    name: "ذكريات فورية",
    tagline: "ملتقطة في لحظة",
    description:
      "أثمن لحظات الحياة تستحق أن تُحتضن، لا أن تُشاهد فقط. نحوّل الثواني العابرة إلى مطبوعات خالدة يمكنك لمسها والاحتفاظ بها للأبد.",
    cta: "ابدأ قصتك",
    secondary: "شاهد أعمالنا",
    caption: "صيف ٢٠٢٤ — الساعة الذهبية",
  },
};

export function PhotoPolaroid({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #1a1816 0%, #0f0e0c 50%, #1a1816 100%)" }}
    >
      {/* Scattered polaroids in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: "8%", top: "15%", rot: -12, delay: 0.5, size: 140 },
          { left: "75%", top: "10%", rot: 8, delay: 1.0, size: 120 },
          { left: "85%", top: "55%", rot: -5, delay: 1.5, size: 130 },
          { left: "5%", top: "60%", rot: 15, delay: 2.0, size: 110 },
          { left: "65%", top: "75%", rot: -18, delay: 2.5, size: 100 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute polaroid-bg"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size * 1.2,
              transform: `rotate(${p.rot}deg)`,
              background: "#f5f0e8",
              padding: "8px 8px 30px 8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              animation: `polaroid-float ${6 + i}s ease-in-out ${p.delay}s infinite alternate`,
              opacity: 0.12,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #3a3530, #2a2520)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Main developing polaroid */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="polaroid-main"
          style={{
            width: "min(320px, 70vw)",
            background: "#f5f0e8",
            padding: "16px 16px 60px 16px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 80px rgba(180,120,60,0.1)",
            animation: "polaroid-appear 2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
            opacity: 0,
            transform: "translateY(30px) rotate(-2deg)",
          }}
        >
          {/* Photo area — developing effect */}
          <div
            style={{
              width: "100%",
              aspectRatio: "1",
              position: "relative",
              overflow: "hidden",
              background: "#e8e0d4",
            }}
          >
            {/* The "developing" photo — warm gradient simulating a landscape */}
            <div
              className="developing-photo"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, #c87840 0%, #e8a060 30%, #d4905a 60%, #2a1a10 100%)",
                animation: "photo-develop 4s ease-out 1.5s forwards",
                opacity: 0,
              }}
            />
            {/* Silhouette elements */}
            <div
              className="developing-photo"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "35%",
                background: "linear-gradient(to top, #1a0f0a 0%, #2a1510 60%, transparent 100%)",
                animation: "photo-develop 4s ease-out 2s forwards",
                opacity: 0,
              }}
            />
            {/* Chemical wash overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(45deg, rgba(180,140,80,0.15), transparent 50%, rgba(200,160,100,0.1))",
                animation: "chemical-wash 3s ease-out 1.5s forwards",
              }}
            />
          </div>
          {/* Polaroid caption area */}
          <div
            className="text-center mt-3"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "0.75rem",
              color: "#8a7a6a",
              animation: "caption-appear 1s ease-out 4s both",
              opacity: 0,
            }}
          >
            {t.caption}
          </div>
        </div>
      </div>

      {/* Warm ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(200,120,64,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-[55vh]">
        <p
          className="text-sm tracking-[0.3em] uppercase mb-4"
          style={{ color: "#c8a070", letterSpacing: isAr ? "0.1em" : "0.3em" }}
        >
          {t.tagline}
        </p>

        <h1
          className="font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#f5f0e8",
            textShadow: "0 0 40px rgba(200,160,100,0.15)",
          }}
        >
          {t.name}
        </h1>

        <p
          className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed"
          style={{ color: "rgba(245,240,232,0.55)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #c8a070, #a07848)",
              color: "#1a1816",
              boxShadow: "0 0 30px rgba(200,160,112,0.25), 0 4px 15px rgba(0,0,0,0.4)",
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
              border: "1px solid rgba(200,160,112,0.3)",
              color: "#c8a070",
              background: "rgba(200,160,112,0.06)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes polaroid-appear {
          0% { opacity: 0; transform: translateY(30px) rotate(-2deg); }
          100% { opacity: 1; transform: translateY(0) rotate(-2deg); }
        }
        @keyframes photo-develop {
          0% { opacity: 0; filter: blur(10px) saturate(0); }
          40% { opacity: 0.3; filter: blur(6px) saturate(0.3); }
          70% { opacity: 0.7; filter: blur(2px) saturate(0.7); }
          100% { opacity: 1; filter: blur(0px) saturate(1); }
        }
        @keyframes chemical-wash {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes caption-appear {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes polaroid-float {
          0% { transform: rotate(var(--r)) translateY(0); }
          100% { transform: rotate(var(--r)) translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
