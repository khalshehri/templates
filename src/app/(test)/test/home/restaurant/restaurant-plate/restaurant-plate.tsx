/**
 * RestaurantPlate — Restaurant hero template
 *
 * Plate presentation with garnish being placed.
 * A circular plate with food art, garnish leaves floating down
 * and sauce drizzle animation.
 *
 * @module restaurant-plate
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "Plat Doré",
    tagline: "Art on Every Plate",
    description:
      "Each dish is a masterpiece of culinary artistry — meticulously plated, beautifully garnished, and designed to delight all your senses before the first bite.",
    cta: "Book Your Experience",
    secondary: "See the Gallery",
  },
  ar: {
    name: "الطبق الذهبي",
    tagline: "فن في كل طبق",
    description:
      "كل طبق هو تحفة من الفن الطهوي — مُقدّم بدقة، مُزيّن بجمال، ومُصمّم ليُبهج جميع حواسك قبل أول قضمة.",
    cta: "احجز تجربتك",
    secondary: "شاهد المعرض",
  },
};

export function RestaurantPlate({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #0f0f0f 0%, #1a1410 40%, #0f0a06 100%)" }}
    >
      {/* Spotlight from above */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "50%",
          height: "80%",
          background: "radial-gradient(ellipse at 50% 0%, rgba(255,248,230,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Plate */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* Plate outer rim */}
        <div
          style={{
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "radial-gradient(circle, #f5f0e8 0%, #e8e0d0 60%, #d4cabb 100%)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 2px 8px rgba(255,255,255,0.3)",
            animation: "plate-appear 1.5s ease-out forwards",
            position: "relative",
          }}
        >
          {/* Plate inner well */}
          <div
            style={{
              position: "absolute",
              top: 30,
              left: 30,
              right: 30,
              bottom: 30,
              borderRadius: "50%",
              background: "radial-gradient(circle, #faf7f0 0%, #f0ebe0 100%)",
              boxShadow: "inset 0 2px 10px rgba(0,0,0,0.08)",
            }}
          />
          {/* Gold rim detail */}
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              right: 8,
              bottom: 8,
              borderRadius: "50%",
              border: "1px solid rgba(212,175,55,0.3)",
            }}
          />
          {/* Sauce drizzle */}
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "35%",
              width: 80,
              height: 20,
              background: "rgba(139,69,19,0.6)",
              borderRadius: "40%",
              filter: "blur(2px)",
              animation: "sauce-drizzle 2s ease-out 1s forwards",
              opacity: 0,
              transform: "scaleX(0)",
              transformOrigin: "left center",
            }}
          />
        </div>
      </div>

      {/* Garnish leaves falling */}
      {[
        { left: "45%", delay: 1.5, duration: 3, size: 12 },
        { left: "52%", delay: 2, duration: 3.5, size: 10 },
        { left: "48%", delay: 2.5, duration: 2.8, size: 8 },
        { left: "55%", delay: 1.8, duration: 3.2, size: 11 },
        { left: "42%", delay: 2.3, duration: 3, size: 9 },
      ].map((leaf, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: leaf.left,
            top: "20%",
            width: leaf.size,
            height: leaf.size * 1.6,
            background: "linear-gradient(135deg, #4ade80, #16a34a)",
            borderRadius: "50% 0 50% 0",
            animation: `garnish-fall ${leaf.duration}s ease-in ${leaf.delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}

      {/* Micro herb particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: "30%", top: "25%", size: 2, delay: 0, duration: 8 },
          { left: "68%", top: "35%", size: 3, delay: 1.5, duration: 10 },
          { left: "25%", top: "55%", size: 2, delay: 3, duration: 9 },
          { left: "72%", top: "60%", size: 3, delay: 2, duration: 7 },
          { left: "50%", top: "75%", size: 2, delay: 4, duration: 11 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: "rgba(74,222,128,0.15)",
              filter: "blur(1px)",
              animation: `plate-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-48">
        <p
          className="text-sm tracking-[0.3em] uppercase mb-4"
          style={{
            color: "#d4af37",
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
            textShadow: "0 0 40px rgba(212,175,55,0.15)",
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
              background: "linear-gradient(135deg, #d4af37, #b8962e)",
              color: "#1a0a00",
              boxShadow: "0 0 30px rgba(212,175,55,0.3), 0 4px 15px rgba(0,0,0,0.3)",
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
              border: "1px solid rgba(212,175,55,0.4)",
              color: "#d4af37",
              background: "rgba(212,175,55,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes plate-appear {
          0% { transform: scale(0.8) translateY(30px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes sauce-drizzle {
          0% { transform: scaleX(0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: scaleX(1); opacity: 0.5; }
        }
        @keyframes garnish-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          50% { transform: translateY(120px) rotate(180deg) translateX(15px); opacity: 0.6; }
          100% { transform: translateY(250px) rotate(360deg) translateX(-10px); opacity: 0; }
        }
        @keyframes plate-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-25px) translateX(10px); opacity: 0.4; }
          100% { transform: translateY(0) translateX(0); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
