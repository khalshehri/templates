"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "Shutter & Light",
    tagline: "Every Click Tells a Story",
    description:
      "We capture the moments that matter most. Through the lens, we find beauty in the fleeting, emotion in the still, and art in the everyday.",
    cta: "Book a Session",
    secondary: "View Portfolio",
  },
  ar: {
    name: "ضوء و عدسة",
    tagline: "كل نقرة تروي قصة",
    description:
      "نلتقط اللحظات الأكثر أهمية. من خلال العدسة، نجد الجمال في العابر، والعاطفة في السكون، والفن في اليومي.",
    cta: "احجز جلسة تصوير",
    secondary: "عرض الأعمال",
  },
};

export function PhotoShutter({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#0a0a0a" }}
    >
      {/* Shutter blades */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            className="shutter-blade absolute"
            style={{
              top: "50%",
              left: "50%",
              width: "120%",
              height: "120%",
              background: `linear-gradient(${i * 45}deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)`,
              transformOrigin: "0% 0%",
              transform: `rotate(${i * 45}deg)`,
              clipPath: "polygon(0% 0%, 30% 0%, 0% 30%)",
              animation: `shutter-open 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
              animationDelay: `${0.8 + i * 0.05}s`,
              borderRight: "1px solid rgba(255,255,255,0.05)",
            }}
          />
        ))}
      </div>

      {/* Circular vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.7) 70%, #0a0a0a 100%)",
        }}
      />

      {/* Warm ambient light leak */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "50%",
          height: "50%",
          background: "radial-gradient(ellipse at 80% 20%, rgba(180,80,40,0.08) 0%, transparent 60%)",
          animation: "light-leak 6s ease-in-out infinite alternate",
        }}
      />

      {/* Subtle film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto content-reveal">
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
          style={{
            border: "1px solid rgba(180,80,40,0.3)",
            background: "rgba(180,80,40,0.08)",
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#b45028" }}>
            {isAr ? "تصوير احترافي" : "Professional Photography"}
          </span>
        </div>

        <p
          className="text-sm tracking-[0.3em] uppercase mb-4"
          style={{ color: "#c87840", letterSpacing: isAr ? "0.1em" : "0.3em" }}
        >
          {t.tagline}
        </p>

        <h1
          className="font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#f5f0eb",
            textShadow: "0 0 60px rgba(180,80,40,0.2)",
          }}
        >
          {t.name}
        </h1>

        <p
          className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed"
          style={{ color: "rgba(245,240,235,0.6)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #b45028, #8b3a1a)",
              color: "#f5f0eb",
              boxShadow: "0 0 30px rgba(180,80,40,0.3), 0 4px 15px rgba(0,0,0,0.4)",
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
              border: "1px solid rgba(180,80,40,0.4)",
              color: "#c87840",
              background: "rgba(180,80,40,0.06)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shutter-open {
          0% { opacity: 1; transform: rotate(var(--r, 0deg)) scale(1); }
          100% { opacity: 0; transform: rotate(var(--r, 0deg)) scale(0.3) translateX(-50%) translateY(-50%); }
        }
        .shutter-blade:nth-child(1) { --r: 0deg; }
        .shutter-blade:nth-child(2) { --r: 45deg; }
        .shutter-blade:nth-child(3) { --r: 90deg; }
        .shutter-blade:nth-child(4) { --r: 135deg; }
        .shutter-blade:nth-child(5) { --r: 180deg; }
        .shutter-blade:nth-child(6) { --r: 225deg; }
        .shutter-blade:nth-child(7) { --r: 270deg; }
        .shutter-blade:nth-child(8) { --r: 315deg; }
        .content-reveal {
          animation: content-fade 1.5s ease-out 1.8s both;
        }
        @keyframes content-fade {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes light-leak {
          0% { opacity: 0.5; transform: translate(0, 0); }
          100% { opacity: 1; transform: translate(-20px, 10px); }
        }
      `}</style>
    </section>
  );
}
