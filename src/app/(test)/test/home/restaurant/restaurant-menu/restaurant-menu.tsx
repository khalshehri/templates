/**
 * RestaurantMenu — Restaurant hero template
 *
 * Elegant menu card unfurling/unfolding animation.
 * A refined menu card opens with a sophisticated reveal,
 * gold-trimmed borders and warm cream tones.
 *
 * @module restaurant-menu
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "La Carte d'Or",
    tagline: "Curated for the Discerning Palate",
    description:
      "Discover a menu crafted by world-class chefs, where every course tells a story of tradition, innovation, and the finest seasonal ingredients.",
    cta: "View Full Menu",
    secondary: "Make a Reservation",
  },
  ar: {
    name: "القائمة الذهبية",
    tagline: "مصممة للذواقة المميزين",
    description:
      "اكتشف قائمة طعام أعدّها طهاة عالميون، حيث تروي كل وجبة قصة من التقاليد والابتكار وأجود المكونات الموسمية.",
    cta: "عرض القائمة كاملة",
    secondary: "احجز طاولتك",
  },
};

export function RestaurantMenu({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #1a0a00 0%, #2a1508 30%, #1c0e04 70%, #0f0803 100%)" }}
    >
      {/* Warm ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "60%",
          height: "60%",
          background: "radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Decorative gold lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2"
          style={{
            width: 200,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
            animation: "menu-line-expand 2s ease-out forwards",
          }}
        />
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
          style={{
            width: 200,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
            animation: "menu-line-expand 2s ease-out 0.3s forwards",
          }}
        />
      </div>

      {/* Menu card unfurling */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 320,
          height: 440,
          perspective: "1000px",
        }}
      >
        {/* Back panel */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, #2a1a0a 0%, #1a0f06 100%)",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: 8,
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }}
        />
        {/* Front panel (unfurling) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, #3a2412 0%, #2a1a0a 100%)",
            border: "1px solid rgba(212,175,55,0.3)",
            borderRadius: 8,
            transformOrigin: "left center",
            animation: "menu-unfurl 3s ease-out forwards",
          }}
        >
          {/* Gold border inset */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              right: 12,
              bottom: 12,
              border: "1px solid rgba(212,175,55,0.25)",
              borderRadius: 4,
            }}
          />
          {/* Menu decorative lines */}
          {[60, 100, 140, 180, 220, 260, 300].map((top, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top,
                left: 30,
                right: 30,
                height: 1,
                background: `rgba(212,175,55,${0.08 + i * 0.02})`,
                animation: `menu-line-fade 2s ease-out ${1 + i * 0.15}s forwards`,
                opacity: 0,
              }}
            />
          ))}
          {/* Menu title decoration */}
          <div
            style={{
              position: "absolute",
              top: 24,
              left: "50%",
              transform: "translateX(-50%)",
              width: 40,
              height: 40,
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: "50%",
              animation: "menu-emblem-spin 8s linear infinite",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 8,
                left: 8,
                right: 8,
                bottom: 8,
                border: "1px solid rgba(212,175,55,0.2)",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: "20%", top: "20%", size: 3, delay: 0, duration: 7 },
          { left: "75%", top: "30%", size: 2, delay: 1.2, duration: 9 },
          { left: "30%", top: "60%", size: 4, delay: 2.5, duration: 8 },
          { left: "65%", top: "70%", size: 2, delay: 0.8, duration: 10 },
          { left: "50%", top: "15%", size: 3, delay: 3.2, duration: 7.5 },
          { left: "85%", top: "50%", size: 2, delay: 1.8, duration: 9.5 },
          { left: "15%", top: "45%", size: 3, delay: 4, duration: 8.5 },
          { left: "40%", top: "80%", size: 2, delay: 2, duration: 11 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: "rgba(212,175,55,0.3)",
              filter: "blur(1px)",
              animation: `menu-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p
          className="text-sm tracking-[0.3em] uppercase mb-4"
          style={{
            color: "#d4af37",
            letterSpacing: isRTL ? "0.1em" : "0.3em",
            animation: "menu-fade-up 1s ease-out 0.5s both",
          }}
        >
          {t.tagline}
        </p>

        <h1
          className="font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#fef3c7",
            textShadow: "0 0 40px rgba(212,175,55,0.2)",
            animation: "menu-fade-up 1s ease-out 0.8s both",
          }}
        >
          {t.name}
        </h1>

        <p
          className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed"
          style={{
            color: "rgba(254,243,199,0.65)",
            animation: "menu-fade-up 1s ease-out 1.1s both",
          }}
        >
          {t.description}
        </p>

        <div
          className={`flex items-center justify-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
          style={{ animation: "menu-fade-up 1s ease-out 1.4s both" }}
        >
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
        @keyframes menu-unfurl {
          0% { transform: rotateY(0deg); opacity: 1; }
          100% { transform: rotateY(-160deg); opacity: 0.3; }
        }
        @keyframes menu-line-expand {
          0% { width: 0; opacity: 0; }
          100% { width: 400px; opacity: 1; }
        }
        @keyframes menu-line-fade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes menu-emblem-spin {
          0% { transform: translateX(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(360deg); }
        }
        @keyframes menu-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0.2; }
          25% { transform: translateY(-20px) translateX(8px); opacity: 0.5; }
          50% { transform: translateY(-35px) translateX(-5px); opacity: 0.3; }
          75% { transform: translateY(-15px) translateX(3px); opacity: 0.4; }
          100% { transform: translateY(0) translateX(0); opacity: 0.2; }
        }
        @keyframes menu-fade-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
