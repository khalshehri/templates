/**
 * KitchenFlame — Restaurant hero template
 *
 * Cooking fire animation at the bottom with flames rising.
 * Steam wisps float upward. A cast-iron pan silhouette sits on the flame.
 * Warm, appetizing colors. Perfect for restaurants, cafes, food businesses.
 *
 * @module kitchen-flame
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "Ember & Oak",
    tagline: "Where Fire Meets Flavor",
    description:
      "Experience the art of open-flame cooking. Every dish is crafted with passion, seared over natural wood fire, and served with a story worth savoring.",
    cta: "Reserve a Table",
    secondary: "View Our Menu",
  },
  ar: {
    name: "جمر و سنديان",
    tagline: "حيث تلتقي النار بالنكهة",
    description:
      "اكتشف فن الطهي على اللهب المفتوح. كل طبق يُصنع بشغف، يُشوى على نار الحطب الطبيعي، ويُقدّم مع قصة تستحق التذوق.",
    cta: "احجز طاولتك",
    secondary: "تصفّح قائمتنا",
  },
};

export function KitchenFlame({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(to top, #1a0f0a 0%, #2a1a10 40%, #1a0f0a 100%)" }}
    >
      {/* ── Warm ambient glow from the fire ── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "80%",
          height: "60%",
          background: "radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 40%, transparent 70%)",
        }}
      />

      {/* ── Flames ── */}
      <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none">
        {/* Flame 1 — large center */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: 60,
            height: 120,
            background: "linear-gradient(to top, #ea580c, #f97316 40%, #fbbf24 80%, transparent)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            filter: "blur(6px)",
            animation: "flame-1 1.2s ease-in-out infinite alternate",
          }}
        />
        {/* Flame 2 — left of center */}
        <div
          className="absolute bottom-0"
          style={{
            left: "42%",
            width: 40,
            height: 90,
            background: "linear-gradient(to top, #dc2626, #ea580c 50%, #f97316 85%, transparent)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            filter: "blur(5px)",
            animation: "flame-2 1.5s ease-in-out infinite alternate",
          }}
        />
        {/* Flame 3 — right of center */}
        <div
          className="absolute bottom-0"
          style={{
            left: "55%",
            width: 44,
            height: 100,
            background: "linear-gradient(to top, #dc2626, #f97316 45%, #fbbf24 90%, transparent)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            filter: "blur(5px)",
            animation: "flame-3 1.3s ease-in-out infinite alternate",
          }}
        />
        {/* Flame 4 — far left */}
        <div
          className="absolute bottom-0"
          style={{
            left: "35%",
            width: 30,
            height: 70,
            background: "linear-gradient(to top, #ea580c, #f97316 60%, transparent)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            filter: "blur(4px)",
            animation: "flame-4 1.8s ease-in-out infinite alternate",
          }}
        />
        {/* Flame 5 — far right */}
        <div
          className="absolute bottom-0"
          style={{
            left: "62%",
            width: 34,
            height: 80,
            background: "linear-gradient(to top, #dc2626, #ea580c 50%, #f97316 90%, transparent)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            filter: "blur(5px)",
            animation: "flame-2 1.6s ease-in-out infinite alternate",
          }}
        />
        {/* Flame 6 — inner left glow */}
        <div
          className="absolute bottom-0"
          style={{
            left: "46%",
            width: 28,
            height: 60,
            background: "linear-gradient(to top, #fbbf24, #f97316 70%, transparent)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            filter: "blur(4px)",
            animation: "flame-3 1.1s ease-in-out infinite alternate",
          }}
        />
        {/* Flame 7 — inner right */}
        <div
          className="absolute bottom-0"
          style={{
            left: "52%",
            width: 24,
            height: 55,
            background: "linear-gradient(to top, #fbbf24, #f97316 65%, transparent)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            filter: "blur(3px)",
            animation: "flame-4 1.4s ease-in-out infinite alternate",
          }}
        />
        {/* Flame 8 — outermost left */}
        <div
          className="absolute bottom-0"
          style={{
            left: "30%",
            width: 22,
            height: 50,
            background: "linear-gradient(to top, #ea580c, #f97316 70%, transparent)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            filter: "blur(4px)",
            animation: "flame-1 2s ease-in-out infinite alternate",
          }}
        />
        {/* Flame 9 — outermost right */}
        <div
          className="absolute bottom-0"
          style={{
            left: "67%",
            width: 20,
            height: 45,
            background: "linear-gradient(to top, #dc2626, #ea580c 60%, transparent)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            filter: "blur(3px)",
            animation: "flame-3 1.7s ease-in-out infinite alternate",
          }}
        />
        {/* Flame 10 — subtle background ember */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: 80,
            height: 40,
            background: "radial-gradient(ellipse, #dc2626 0%, #ea580c 40%, transparent 70%)",
            filter: "blur(10px)",
            animation: "flame-4 2.2s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* ── Cast-iron pan silhouette ── */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 pointer-events-none">
        {/* Pan body */}
        <div
          style={{
            width: 160,
            height: 30,
            background: "#1a1a1a",
            borderRadius: "0 0 80px 80px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.6), inset 0 -2px 8px rgba(249,115,22,0.15)",
            position: "relative",
          }}
        >
          {/* Pan rim */}
          <div
            style={{
              position: "absolute",
              top: -4,
              left: -8,
              right: -8,
              height: 8,
              background: "#222",
              borderRadius: "4px",
              boxShadow: "0 0 10px rgba(249,115,22,0.1)",
            }}
          />
          {/* Pan handle */}
          <div
            style={{
              position: "absolute",
              top: -6,
              [isRTL ? "left" : "right"]: -90,
              width: 90,
              height: 14,
              background: "linear-gradient(to right, #1a1a1a, #222)",
              borderRadius: "0 8px 8px 0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      </div>

      {/* ── Steam wisps ── */}
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 200 }}>
        {/* Steam 1 */}
        <div
          className="absolute"
          style={{
            left: "30%",
            bottom: 0,
            width: 3,
            height: 60,
            background: "linear-gradient(to top, rgba(255,255,255,0.08), rgba(255,255,255,0.02), transparent)",
            borderRadius: 4,
            filter: "blur(3px)",
            animation: "steam-1 4s ease-in-out infinite",
          }}
        />
        {/* Steam 2 */}
        <div
          className="absolute"
          style={{
            left: "50%",
            bottom: 0,
            width: 4,
            height: 80,
            background: "linear-gradient(to top, rgba(255,255,255,0.1), rgba(255,255,255,0.03), transparent)",
            borderRadius: 4,
            filter: "blur(4px)",
            animation: "steam-2 5s ease-in-out infinite",
          }}
        />
        {/* Steam 3 */}
        <div
          className="absolute"
          style={{
            left: "65%",
            bottom: 0,
            width: 3,
            height: 50,
            background: "linear-gradient(to top, rgba(255,255,255,0.07), rgba(255,255,255,0.02), transparent)",
            borderRadius: 4,
            filter: "blur(3px)",
            animation: "steam-3 4.5s ease-in-out infinite",
          }}
        />
        {/* Steam 4 */}
        <div
          className="absolute"
          style={{
            left: "40%",
            bottom: 0,
            width: 2,
            height: 45,
            background: "linear-gradient(to top, rgba(255,255,255,0.06), transparent)",
            borderRadius: 4,
            filter: "blur(2px)",
            animation: "steam-4 3.8s ease-in-out infinite",
          }}
        />
        {/* Steam 5 */}
        <div
          className="absolute"
          style={{
            left: "55%",
            bottom: 0,
            width: 3,
            height: 55,
            background: "linear-gradient(to top, rgba(255,255,255,0.05), transparent)",
            borderRadius: 4,
            filter: "blur(3px)",
            animation: "steam-1 6s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Floating ingredient shapes (spices/herbs) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: "25%", top: "30%", size: 6, delay: 0, duration: 8, color: "rgba(251,191,36,0.15)" },
          { left: "70%", top: "25%", size: 4, delay: 1.5, duration: 10, color: "rgba(249,115,22,0.12)" },
          { left: "60%", top: "40%", size: 5, delay: 3, duration: 9, color: "rgba(251,191,36,0.1)" },
          { left: "35%", top: "35%", size: 3, delay: 0.8, duration: 7, color: "rgba(220,38,38,0.1)" },
          { left: "55%", top: "20%", size: 4, delay: 2.2, duration: 11, color: "rgba(249,115,22,0.08)" },
          { left: "45%", top: "45%", size: 5, delay: 4, duration: 8.5, color: "rgba(251,191,36,0.12)" },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: p.color,
              filter: "blur(1px)",
              animation: `spice-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 pb-48 pt-20 max-w-3xl mx-auto">
        <p
          className="text-sm tracking-[0.3em] uppercase mb-4"
          style={{
            color: "#f97316",
            fontFamily: isRTL ? "inherit" : "inherit",
            letterSpacing: isRTL ? "0.1em" : "0.3em",
          }}
        >
          {t.tagline}
        </p>

        <h1
          className="font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#fef3c7",
            textShadow: "0 0 40px rgba(249,115,22,0.3)",
          }}
        >
          {t.name}
        </h1>

        <p
          className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed"
          style={{ color: "rgba(254,243,199,0.7)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              color: "#1a0f0a",
              boxShadow: "0 0 30px rgba(249,115,22,0.4), 0 4px 15px rgba(0,0,0,0.3)",
            }}
          >
            {isRTL ? (
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
              border: "1px solid rgba(249,115,22,0.4)",
              color: "#fbbf24",
              background: "rgba(249,115,22,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      {/* ── Keyframe animations ── */}
      <style jsx>{`
        @keyframes flame-1 {
          0% { transform: translateX(-50%) scaleX(1) scaleY(1); opacity: 0.9; }
          50% { transform: translateX(-50%) scaleX(1.1) scaleY(1.15) translateY(-8px); opacity: 1; }
          100% { transform: translateX(-50%) scaleX(0.9) scaleY(0.95) translateY(-3px); opacity: 0.85; }
        }
        @keyframes flame-2 {
          0% { transform: scaleX(1) scaleY(1); opacity: 0.85; }
          50% { transform: scaleX(0.85) scaleY(1.2) translateY(-12px); opacity: 1; }
          100% { transform: scaleX(1.1) scaleY(0.9) translateY(-5px); opacity: 0.8; }
        }
        @keyframes flame-3 {
          0% { transform: scaleX(1) scaleY(1) translateY(0); opacity: 0.9; }
          33% { transform: scaleX(1.15) scaleY(1.1) translateY(-6px); opacity: 1; }
          66% { transform: scaleX(0.9) scaleY(1.2) translateY(-10px); opacity: 0.85; }
          100% { transform: scaleX(1.05) scaleY(0.95) translateY(-2px); opacity: 0.9; }
        }
        @keyframes flame-4 {
          0% { transform: scaleY(1); opacity: 0.8; }
          100% { transform: scaleY(1.25) translateY(-6px); opacity: 1; }
        }
        @keyframes steam-1 {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.6; }
          50% { transform: translateY(-80px) translateX(8px); opacity: 0.3; }
          80% { opacity: 0.1; }
          100% { transform: translateY(-140px) translateX(-5px); opacity: 0; }
        }
        @keyframes steam-2 {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          15% { opacity: 0.5; }
          50% { transform: translateY(-100px) translateX(-10px); opacity: 0.25; }
          100% { transform: translateY(-180px) translateX(6px); opacity: 0; }
        }
        @keyframes steam-3 {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          25% { opacity: 0.4; }
          60% { transform: translateY(-70px) translateX(6px); opacity: 0.2; }
          100% { transform: translateY(-120px) translateX(-4px); opacity: 0; }
        }
        @keyframes steam-4 {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.35; }
          55% { transform: translateY(-60px) translateX(-7px); opacity: 0.15; }
          100% { transform: translateY(-110px) translateX(3px); opacity: 0; }
        }
        @keyframes spice-float {
          0% { transform: translateY(0) translateX(0); opacity: 0.3; }
          25% { transform: translateY(-15px) translateX(5px); opacity: 0.6; }
          50% { transform: translateY(-30px) translateX(-3px); opacity: 0.4; }
          75% { transform: translateY(-20px) translateX(4px); opacity: 0.5; }
          100% { transform: translateY(0) translateX(0); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
