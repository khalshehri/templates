"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Freelancer",
    title: "Where Magic Happens",
    description:
      "A cozy corner, a powerful setup, and infinite creativity. This is where your next project comes to life.",
    cta: "Let's Collaborate",
    secondary: "View Portfolio",
  },
  ar: {
    badge: "مستقل",
    title: "حيث يحدث السحر",
    description:
      "زاوية مريحة، إعداد قوي، وإبداع لا نهائي. هنا يولد مشروعك القادم.",
    cta: "لنتعاون",
    secondary: "عرض الأعمال",
  },
};

export function FreelancerWorkspace({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Window frame */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "5%",
          right: "8%",
          width: 180,
          height: 220,
          border: "2px solid rgba(6,182,212,0.08)",
          borderRadius: 8,
          background: "linear-gradient(135deg, rgba(6,182,212,0.02), rgba(20,184,166,0.01))",
        }}
      >
        {/* Window cross */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 1, background: "rgba(6,182,212,0.06)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: "rgba(6,182,212,0.06)" }} />
        {/* Stars/moon outside */}
        <div className="absolute fw-twinkle" style={{ top: 20, left: 25, width: 3, height: 3, borderRadius: "50%", background: "rgba(6,182,212,0.3)" }} />
        <div className="absolute fw-twinkle" style={{ top: 40, right: 30, width: 2, height: 2, borderRadius: "50%", background: "rgba(6,182,212,0.2)", animationDelay: "1s" }} />
        <div className="absolute" style={{ top: 15, right: 20, width: 20, height: 20, borderRadius: "50%", border: "1px solid rgba(6,182,212,0.1)" }} />
      </div>

      {/* Desk surface - panoramic */}
      <div
        className="absolute"
        style={{
          bottom: "15%",
          left: "5%",
          right: "5%",
          height: "35%",
          borderRadius: "12px 12px 0 0",
          background: "linear-gradient(180deg, rgba(30,25,20,0.4), rgba(40,35,28,0.2))",
          border: "1px solid rgba(255,255,255,0.03)",
          borderBottom: "none",
        }}
      />

      {/* Main monitor */}
      <div className="absolute pointer-events-none fw-screen-glow" style={{ bottom: "42%", left: "50%", transform: "translateX(-50%)" }}>
        <div style={{
          width: 240,
          height: 150,
          borderRadius: 6,
          border: "2px solid rgba(6,182,212,0.15)",
          background: "linear-gradient(135deg, rgba(6,182,212,0.04), rgba(20,184,166,0.02))",
        }}>
          {/* Code lines on screen */}
          {[15, 28, 41, 54, 67, 80].map((y, i) => (
            <div
              key={i}
              className="absolute fw-line-type"
              style={{
                top: `${y}%`,
                left: "8%",
                width: `${30 + (i * 7) % 40}%`,
                height: 2,
                background: i % 3 === 0 ? "rgba(6,182,212,0.2)" : i % 3 === 1 ? "rgba(20,184,166,0.15)" : "rgba(255,255,255,0.08)",
                borderRadius: 1,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
        {/* Stand */}
        <div style={{ width: 50, height: 25, margin: "0 auto", background: "rgba(255,255,255,0.02)", borderRadius: "0 0 4px 4px" }} />
        <div style={{ width: 80, height: 4, margin: "0 auto", background: "rgba(255,255,255,0.03)", borderRadius: 2 }} />
      </div>

      {/* Keyboard */}
      <div className="absolute pointer-events-none" style={{ bottom: "32%", left: "50%", transform: "translateX(-50%)" }}>
        <div style={{
          width: 160,
          height: 50,
          borderRadius: 4,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.04)",
        }}>
          {/* Key rows */}
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex justify-center gap-1 mt-1 px-2">
              {Array.from({ length: 10 - row }).map((_, k) => (
                <div
                  key={k}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 1,
                    background: "rgba(255,255,255,0.04)",
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Coffee mug - left side */}
      <div className="absolute pointer-events-none" style={{ bottom: "34%", left: "18%" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", border: "2px solid rgba(6,182,212,0.1)", background: "rgba(80,50,30,0.1)" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 14, height: 14, borderRadius: "50%", background: "rgba(80,50,30,0.15)" }} />
        </div>
        {/* Steam */}
        {[0, 1, 2].map((s) => (
          <div
            key={s}
            className="absolute fw-steam"
            style={{
              top: -10 - s * 5,
              left: `${35 + s * 10}%`,
              width: 6,
              height: 12,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.03)",
              filter: "blur(2px)",
              animationDelay: `${s * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Plant - right side */}
      <div className="absolute pointer-events-none" style={{ bottom: "34%", right: "15%" }}>
        {/* Pot */}
        <div style={{
          width: 30,
          height: 25,
          borderRadius: "2px 2px 6px 6px",
          background: "rgba(180,100,50,0.1)",
          border: "1px solid rgba(180,100,50,0.08)",
        }} />
        {/* Leaves */}
        {[-20, -10, 0, 10, 20].map((angle, i) => (
          <div
            key={i}
            className="absolute fw-leaf-sway"
            style={{
              bottom: 22,
              left: 12,
              width: 4,
              height: 20 + i * 3,
              background: "rgba(34,197,94,0.15)",
              borderRadius: "50%",
              transform: `rotate(${angle}deg)`,
              transformOrigin: "bottom center",
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Notebook/pad */}
      <div className="absolute pointer-events-none" style={{ bottom: "35%", left: "30%", transform: "rotate(-8deg)" }}>
        <div style={{
          width: 50,
          height: 65,
          borderRadius: 3,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}>
          {[0, 1, 2, 3, 4].map((l) => (
            <div key={l} style={{
              position: "absolute",
              top: 10 + l * 10,
              left: 8,
              width: 25 + l * 2,
              height: 1,
              background: "rgba(6,182,212,0.08)",
            }} />
          ))}
        </div>
        {/* Pen */}
        <div style={{
          position: "absolute",
          top: -5,
          right: -10,
          width: 3,
          height: 45,
          background: "rgba(6,182,212,0.12)",
          borderRadius: 2,
          transform: "rotate(20deg)",
        }} />
      </div>

      {/* Bookshelf on wall */}
      <div className="absolute pointer-events-none" style={{ top: "15%", left: "8%" }}>
        {[0, 1].map((shelf) => (
          <div key={shelf} className="mb-4">
            <div className="flex gap-1">
              {[12, 10, 14, 8, 11].map((h, i) => (
                <div key={i} style={{
                  width: 8,
                  height: h,
                  background: `rgba(6,182,212,${0.04 + i * 0.02})`,
                  borderRadius: 1,
                }} />
              ))}
            </div>
            <div style={{ width: 55, height: 2, background: "rgba(255,255,255,0.04)", marginTop: 1 }} />
          </div>
        ))}
      </div>

      {/* Content overlaid */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
          style={{
            color: "#06b6d4",
            borderColor: "rgba(6,182,212,0.3)",
            background: "rgba(6,182,212,0.1)",
            backdropFilter: "blur(8px)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-extrabold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            background: "linear-gradient(135deg, #06b6d4, #14b8a6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t.title}
        </h1>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-400"
          style={{ backdropFilter: "blur(4px)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #14b8a6)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(6,182,212,0.4)",
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
              border: "1px solid rgba(20,184,166,0.4)",
              color: "#2dd4bf",
              background: "rgba(20,184,166,0.1)",
              backdropFilter: "blur(4px)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .fw-screen-glow {
          animation: fwGlow 3s ease-in-out infinite;
        }
        @keyframes fwGlow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(6,182,212,0.05)); }
          50% { filter: drop-shadow(0 0 20px rgba(6,182,212,0.1)); }
        }
        .fw-line-type {
          animation: fwType 2s ease-out forwards;
          transform: scaleX(0);
          transform-origin: left;
        }
        @keyframes fwType {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .fw-steam {
          animation: fwSteam 3s ease-in-out infinite;
        }
        @keyframes fwSteam {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-8px) scale(1.3); opacity: 0; }
        }
        .fw-leaf-sway {
          animation: fwLeaf 4s ease-in-out infinite;
        }
        @keyframes fwLeaf {
          0%, 100% { transform: rotate(var(--r, 0deg)); }
          50% { transform: rotate(calc(var(--r, 0deg) + 5deg)); }
        }
        .fw-twinkle {
          animation: fwTwinkle 2s ease-in-out infinite;
        }
        @keyframes fwTwinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
