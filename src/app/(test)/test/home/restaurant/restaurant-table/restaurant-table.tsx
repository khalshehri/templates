/**
 * RestaurantTable — Restaurant hero template
 *
 * Table setting with flickering candlelight.
 * An elegant dinner table with plates, cutlery silhouettes,
 * and a candle with realistic flickering flame.
 *
 * @module restaurant-table
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "Table & Torch",
    tagline: "Intimate Dining, Unforgettable Nights",
    description:
      "A table set for memories. Candlelit ambiance, exquisite cuisine, and attentive service come together to create an evening you will cherish forever.",
    cta: "Reserve Your Table",
    secondary: "Private Dining",
  },
  ar: {
    name: "المائدة والشمعة",
    tagline: "عشاء حميمي، ليالٍ لا تُنسى",
    description:
      "مائدة مُعدّة للذكريات. أجواء على ضوء الشموع، مأكولات راقية، وخدمة متميزة تجتمع لتصنع أمسية ستعتز بها للأبد.",
    cta: "احجز طاولتك",
    secondary: "عشاء خاص",
  },
};

export function RestaurantTable({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #0a0806 0%, #1a140e 40%, #12100c 100%)" }}
    >
      {/* Candlelight glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(255,183,77,0.12) 0%, rgba(255,152,0,0.04) 40%, transparent 70%)",
          animation: "candle-glow 3s ease-in-out infinite",
        }}
      />

      {/* Table surface */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          maxWidth: 600,
          height: 6,
          background: "linear-gradient(90deg, transparent, #3a2a1a, #4a3422, #3a2a1a, transparent)",
          borderRadius: 2,
          boxShadow: "0 2px 20px rgba(0,0,0,0.4)",
        }}
      />

      {/* Tablecloth edge */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "65%",
          maxWidth: 560,
          height: 20,
          background: "linear-gradient(180deg, rgba(245,245,240,0.06), transparent)",
          borderRadius: "0 0 4px 4px",
        }}
      />

      {/* Candle */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "calc(20% + 6px)",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {/* Candle holder */}
        <div
          style={{
            width: 24,
            height: 10,
            background: "linear-gradient(180deg, #c0a080, #8b6f4e)",
            borderRadius: "2px 2px 12px 12px",
            margin: "0 auto",
          }}
        />
        {/* Candle body */}
        <div
          style={{
            width: 12,
            height: 60,
            background: "linear-gradient(180deg, #fef3c7, #f5e6c8, #ede0c0)",
            borderRadius: "3px 3px 0 0",
            margin: "-2px auto 0",
            position: "relative",
          }}
        >
          {/* Wick */}
          <div
            style={{
              position: "absolute",
              top: -8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 2,
              height: 8,
              background: "#333",
              borderRadius: 1,
            }}
          />
          {/* Flame */}
          <div
            style={{
              position: "absolute",
              top: -30,
              left: "50%",
              transform: "translateX(-50%)",
              width: 10,
              height: 22,
              background: "linear-gradient(to top, #ff9800, #ffb74d 40%, #fff176 80%, transparent)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              filter: "blur(1px)",
              animation: "candle-flame 0.8s ease-in-out infinite alternate",
            }}
          />
          {/* Inner flame */}
          <div
            style={{
              position: "absolute",
              top: -22,
              left: "50%",
              transform: "translateX(-50%)",
              width: 5,
              height: 12,
              background: "linear-gradient(to top, #fff8e1, #ffffff 80%, transparent)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              filter: "blur(1px)",
              animation: "candle-flame-inner 0.6s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>

      {/* Plate — left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "calc(20% + 6px)",
          left: "calc(50% - 120px)",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.08)",
            background: "radial-gradient(circle, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
          }}
        />
      </div>

      {/* Plate — right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "calc(20% + 6px)",
          left: "calc(50% + 120px)",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.08)",
            background: "radial-gradient(circle, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
          }}
        />
      </div>

      {/* Cutlery silhouettes */}
      {/* Fork left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "calc(20% + 10px)",
          left: "calc(50% - 170px)",
          width: 3,
          height: 50,
          background: "linear-gradient(180deg, rgba(192,160,128,0.2), rgba(192,160,128,0.1))",
          borderRadius: 2,
        }}
      />
      {/* Knife right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "calc(20% + 10px)",
          left: "calc(50% + 168px)",
          width: 3,
          height: 50,
          background: "linear-gradient(180deg, rgba(192,160,128,0.2), rgba(192,160,128,0.1))",
          borderRadius: 2,
        }}
      />

      {/* Wine glass — far left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "calc(20% + 6px)",
          left: "calc(50% - 90px)",
        }}
      >
        {/* Glass bowl */}
        <div
          style={{
            width: 18,
            height: 22,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "50% 50% 40% 40%",
            background: "rgba(139,0,0,0.15)",
          }}
        />
        {/* Stem */}
        <div
          style={{
            width: 2,
            height: 16,
            background: "rgba(255,255,255,0.06)",
            margin: "0 auto",
          }}
        />
        {/* Base */}
        <div
          style={{
            width: 14,
            height: 3,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 2,
            margin: "0 auto",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 pb-56 pt-16 max-w-3xl mx-auto">
        <p
          className="text-sm tracking-[0.3em] uppercase mb-4"
          style={{
            color: "#ffb74d",
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
            textShadow: "0 0 40px rgba(255,183,77,0.2)",
          }}
        >
          {t.name}
        </h1>

        <p
          className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed"
          style={{ color: "rgba(254,243,199,0.6)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ffb74d, #ff9800)",
              color: "#1a0a00",
              boxShadow: "0 0 30px rgba(255,183,77,0.3), 0 4px 15px rgba(0,0,0,0.3)",
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
              border: "1px solid rgba(255,183,77,0.4)",
              color: "#ffb74d",
              background: "rgba(255,183,77,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes candle-flame {
          0% { transform: translateX(-50%) scaleX(1) scaleY(1); }
          25% { transform: translateX(-50%) scaleX(0.85) scaleY(1.1) translateX(1px); }
          50% { transform: translateX(-50%) scaleX(1.1) scaleY(0.9); }
          75% { transform: translateX(-50%) scaleX(0.9) scaleY(1.05) translateX(-1px); }
          100% { transform: translateX(-50%) scaleX(1.05) scaleY(0.95); }
        }
        @keyframes candle-flame-inner {
          0% { transform: translateX(-50%) scaleY(1); }
          50% { transform: translateX(-50%) scaleY(1.15) translateX(0.5px); }
          100% { transform: translateX(-50%) scaleY(0.9) translateX(-0.5px); }
        }
        @keyframes candle-glow {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
