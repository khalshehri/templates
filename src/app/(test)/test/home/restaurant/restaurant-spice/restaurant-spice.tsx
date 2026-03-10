/**
 * RestaurantSpice — Restaurant hero template
 *
 * Spice rack with floating spice particles.
 * Colorful spice jars on shelves with particles of spice
 * floating and drifting through the air.
 *
 * @module restaurant-spice
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "Spice Souk",
    tagline: "A World of Flavor in Every Pinch",
    description:
      "Journey through centuries of spice routes. Our kitchen blends rare spices from across the globe, creating dishes that awaken forgotten flavors and ignite new ones.",
    cta: "Explore the Menu",
    secondary: "Our Spice Story",
  },
  ar: {
    name: "سوق التوابل",
    tagline: "عالم من النكهات في كل رشّة",
    description:
      "رحلة عبر قرون من طرق التوابل. مطبخنا يمزج أندر التوابل من جميع أنحاء العالم، ليصنع أطباقاً توقظ نكهات منسية وتشعل أخرى جديدة.",
    cta: "استكشف القائمة",
    secondary: "قصة توابلنا",
  },
};

const spiceColors = [
  "#c0392b", // paprika red
  "#e67e22", // turmeric orange
  "#f1c40f", // saffron gold
  "#8b4513", // cinnamon brown
  "#d35400", // cayenne
  "#a0522d", // cumin
  "#cd853f", // coriander
  "#b22222", // chili
];

export function RestaurantSpice({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #1a0c06 0%, #2a1508 30%, #1c0f08 70%, #0f0804 100%)" }}
    >
      {/* Warm spice-tinted glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "70%",
          height: "50%",
          background: "radial-gradient(ellipse, rgba(230,126,34,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Spice shelf — top */}
      <div className="absolute pointer-events-none" style={{ top: "25%", left: "50%", transform: "translateX(-50%)" }}>
        <div
          style={{
            width: 360,
            height: 8,
            background: "linear-gradient(90deg, transparent, #3a2415, #4a3020, #3a2415, transparent)",
            borderRadius: 2,
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
          }}
        />
        {/* Spice jars on top shelf */}
        <div className="flex justify-center gap-4" style={{ marginTop: -40 }}>
          {spiceColors.slice(0, 4).map((color, i) => (
            <div key={i} style={{ position: "relative" }}>
              {/* Jar body */}
              <div
                style={{
                  width: 28,
                  height: 36,
                  background: `linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))`,
                  borderRadius: "4px 4px 6px 6px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Spice inside */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 2,
                    right: 2,
                    height: "65%",
                    background: color,
                    borderRadius: "0 0 4px 4px",
                    opacity: 0.7,
                  }}
                />
              </div>
              {/* Jar lid */}
              <div
                style={{
                  width: 22,
                  height: 6,
                  background: "#4a3020",
                  borderRadius: "2px 2px 0 0",
                  position: "absolute",
                  top: -6,
                  left: 3,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Spice shelf — bottom */}
      <div className="absolute pointer-events-none" style={{ top: "42%", left: "50%", transform: "translateX(-50%)" }}>
        <div
          style={{
            width: 320,
            height: 8,
            background: "linear-gradient(90deg, transparent, #3a2415, #4a3020, #3a2415, transparent)",
            borderRadius: 2,
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
          }}
        />
        <div className="flex justify-center gap-4" style={{ marginTop: -40 }}>
          {spiceColors.slice(4).map((color, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div
                style={{
                  width: 28,
                  height: 36,
                  background: `linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))`,
                  borderRadius: "4px 4px 6px 6px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 2,
                    right: 2,
                    height: "65%",
                    background: color,
                    borderRadius: "0 0 4px 4px",
                    opacity: 0.7,
                  }}
                />
              </div>
              <div
                style={{
                  width: 22,
                  height: 6,
                  background: "#4a3020",
                  borderRadius: "2px 2px 0 0",
                  position: "absolute",
                  top: -6,
                  left: 3,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating spice particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: "20%", top: "15%", color: spiceColors[0], size: 4, delay: 0, duration: 8 },
          { left: "75%", top: "20%", color: spiceColors[1], size: 3, delay: 1, duration: 10 },
          { left: "30%", top: "55%", color: spiceColors[2], size: 5, delay: 2, duration: 9 },
          { left: "65%", top: "60%", color: spiceColors[3], size: 3, delay: 0.5, duration: 7 },
          { left: "45%", top: "70%", color: spiceColors[4], size: 4, delay: 3, duration: 11 },
          { left: "55%", top: "10%", color: spiceColors[5], size: 3, delay: 1.5, duration: 8.5 },
          { left: "15%", top: "40%", color: spiceColors[6], size: 4, delay: 2.5, duration: 9.5 },
          { left: "80%", top: "45%", color: spiceColors[7], size: 3, delay: 0.8, duration: 7.5 },
          { left: "40%", top: "30%", color: spiceColors[0], size: 2, delay: 4, duration: 12 },
          { left: "60%", top: "80%", color: spiceColors[2], size: 3, delay: 1.8, duration: 10.5 },
          { left: "25%", top: "75%", color: spiceColors[4], size: 4, delay: 3.5, duration: 8 },
          { left: "70%", top: "85%", color: spiceColors[6], size: 2, delay: 2.2, duration: 9 },
          { left: "50%", top: "50%", color: spiceColors[1], size: 5, delay: 0.3, duration: 13 },
          { left: "35%", top: "65%", color: spiceColors[5], size: 3, delay: 1.2, duration: 7.8 },
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
              opacity: 0.25,
              filter: "blur(1px)",
              animation: `spice-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-32">
        <p
          className="text-sm tracking-[0.3em] uppercase mb-4"
          style={{
            color: "#e67e22",
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
            textShadow: "0 0 40px rgba(230,126,34,0.2)",
          }}
        >
          {t.name}
        </h1>

        <p
          className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed"
          style={{ color: "rgba(254,243,199,0.65)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #e67e22, #d35400)",
              color: "#1a0a00",
              boxShadow: "0 0 30px rgba(230,126,34,0.4), 0 4px 15px rgba(0,0,0,0.3)",
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
              border: "1px solid rgba(230,126,34,0.4)",
              color: "#f1c40f",
              background: "rgba(230,126,34,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spice-drift {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.15; }
          20% { transform: translateY(-15px) translateX(8px) rotate(45deg); opacity: 0.35; }
          40% { transform: translateY(-30px) translateX(-5px) rotate(90deg); opacity: 0.25; }
          60% { transform: translateY(-20px) translateX(12px) rotate(180deg); opacity: 0.4; }
          80% { transform: translateY(-35px) translateX(-8px) rotate(270deg); opacity: 0.2; }
          100% { transform: translateY(0) translateX(0) rotate(360deg); opacity: 0.15; }
        }
      `}</style>
    </section>
  );
}
