"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Welcome Home",
    title: "Open the Door to New Beginnings",
    description: "Behind every door lies a world of possibilities. Step through to discover spaces crafted for comfort, elegance, and the life you deserve.",
    cta: "Step Inside",
    secondary: "View Properties",
  },
  ar: {
    badge: "أهلاً بك في بيتك",
    title: "افتح الباب لبدايات جديدة",
    description: "خلف كل باب يكمن عالم من الإمكانيات. ادخل لتكتشف مساحات صُمِّمت للراحة والأناقة والحياة التي تستحقها.",
    cta: "ادخل الآن",
    secondary: "تصفح العقارات",
  },
};

export function RealestateDoor({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#0c0a09" }}
    >
      {/* Door frame and door */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ perspective: "1200px" }}>
        {/* Door frame */}
        <div
          style={{
            width: 260,
            height: 420,
            border: "12px solid #292524",
            borderRadius: "8px 8px 0 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Bright interior revealed behind door */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, #fef3c7 0%, #fde68a 40%, #fbbf24 100%)",
            }}
          >
            {/* Interior room suggestion */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(217,119,6,0.2), transparent)" }} />
            {/* Warm light rays */}
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="light-ray"
                style={{
                  position: "absolute",
                  top: "10%",
                  left: `${30 + i * 20}%`,
                  width: 2,
                  height: "80%",
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)",
                  transform: `rotate(${-5 + i * 5}deg)`,
                  filter: "blur(3px)",
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>

          {/* The door panel (opening animation) */}
          <div
            className="door-open"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #44403c 0%, #292524 100%)",
              transformOrigin: "left center",
              zIndex: 2,
              boxShadow: "inset -20px 0 40px rgba(0,0,0,0.3)",
            }}
          >
            {/* Door panels decorative */}
            <div style={{ position: "absolute", top: 30, left: 20, right: 20, height: "35%", border: "2px solid rgba(120,113,108,0.3)", borderRadius: 4 }} />
            <div style={{ position: "absolute", bottom: 30, left: 20, right: 20, height: "35%", border: "2px solid rgba(120,113,108,0.3)", borderRadius: 4 }} />

            {/* Door handle */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: 20,
                width: 12,
                height: 35,
                background: "linear-gradient(to bottom, #f59e0b, #d97706)",
                borderRadius: 6,
                transform: "translateY(-50%)",
                boxShadow: "0 0 15px rgba(245,158,11,0.3)",
              }}
            />
          </div>
        </div>

        {/* Door frame top arch */}
        <div
          style={{
            position: "absolute",
            top: -6,
            left: -6,
            right: -6,
            height: 20,
            background: "#292524",
            borderRadius: "10px 10px 0 0",
          }}
        />

        {/* Floor shadow */}
        <div
          style={{
            width: 300,
            height: 20,
            background: "radial-gradient(ellipse, rgba(251,191,36,0.15) 0%, transparent 70%)",
            marginTop: -2,
            marginLeft: -20,
          }}
        />

        {/* Light spill on floor */}
        <div
          className="light-spill"
          style={{
            position: "absolute",
            bottom: -40,
            left: "10%",
            width: "80%",
            height: 60,
            background: "radial-gradient(ellipse at 50% 0%, rgba(254,243,199,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Ambient dust particles in light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full dust-float"
            style={{
              left: `${40 + Math.random() * 20}%`,
              top: `${20 + Math.random() * 60}%`,
              width: 2 + Math.random() * 2,
              height: 2 + Math.random() * 2,
              background: `rgba(254,243,199,${0.1 + Math.random() * 0.2})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`absolute bottom-0 left-0 right-0 z-10 px-6 pb-16 pt-32 ${isAr ? "text-right" : "text-left"}`}
        style={{ background: "linear-gradient(to top, rgba(12,10,9,0.97) 40%, transparent 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-3 font-medium" style={{ color: "#f59e0b", letterSpacing: isAr ? "0.1em" : "0.25em" }}>
            {t.badge}
          </p>
          <h1 className="font-bold mb-4 leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fef3c7" }}>
            {t.title}
          </h1>
          <p className="text-lg mb-8 max-w-xl leading-relaxed" style={{ color: "rgba(254,243,199,0.6)" }}>
            {t.description}
          </p>
          <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
            <button className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", color: "#1c1917", boxShadow: "0 0 30px rgba(245,158,11,0.3)" }}>
              {isAr ? (
                <><ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />{t.cta}</>
              ) : (
                <>{t.cta}<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
            <button className="px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{ border: "1px solid rgba(245,158,11,0.4)", color: "#fbbf24", background: "rgba(245,158,11,0.08)" }}>
              {t.secondary}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .door-open {
          animation: door-swing 4s ease-in-out infinite;
        }
        @keyframes door-swing {
          0%, 100% { transform: rotateY(0deg); }
          30%, 70% { transform: rotateY(-65deg); }
        }
        .light-ray {
          animation: ray-pulse 3s ease-in-out infinite;
        }
        @keyframes ray-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .light-spill {
          animation: spill-pulse 4s ease-in-out infinite;
        }
        @keyframes spill-pulse {
          0%, 100% { opacity: 0.3; }
          30%, 70% { opacity: 1; }
        }
        .dust-float {
          animation: dfloat 6s ease-in-out infinite;
        }
        @keyframes dfloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          30% { opacity: 0.4; }
          50% { transform: translateY(-30px) translateX(10px); opacity: 0.3; }
          100% { transform: translateY(-60px) translateX(-5px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
