"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Creative Agency",
    title: "Piece by Piece Perfection",
    description:
      "Great brands aren't born whole — they're assembled tile by tile. We compose your mosaic from thousands of tiny, perfect decisions.",
    cta: "Start Your Project",
    secondary: "View Portfolio",
  },
  ar: {
    badge: "وكالة إبداعية",
    title: "كمال قطعة بقطعة",
    description:
      "العلامات التجارية العظيمة لا تولد كاملة — بل تُجمع بلاطة بلاطة. نؤلف فسيفساءك من آلاف القرارات الصغيرة المثالية.",
    cta: "ابدأ مشروعك",
    secondary: "عرض الأعمال",
  },
};

export function AgencyMosaic({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const colors = [
    "#ec4899", "#a855f7", "#d946ef", "#f472b6", "#c084fc",
    "#be185d", "#7c3aed", "#a21caf", "#db2777", "#9333ea",
  ];

  const cols = 20;
  const rows = 14;

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Mosaic grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{ padding: "2%" }}>
        <div
          className="w-full h-full grid"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gap: 2,
          }}
        >
          {Array.from({ length: cols * rows }).map((_, i) => {
            const row = Math.floor(i / cols);
            const col = i % cols;
            const centerX = cols / 2;
            const centerY = rows / 2;
            const dist = Math.sqrt((col - centerX) ** 2 + (row - centerY) ** 2);
            const maxDist = Math.sqrt(centerX ** 2 + centerY ** 2);
            const isCenter = dist < 5;
            const colorIndex = (col + row * 3) % colors.length;
            const delay = dist * 0.1;

            return (
              <div
                key={i}
                className="am-tile-appear rounded-sm"
                style={{
                  background: isCenter
                    ? "transparent"
                    : `${colors[colorIndex]}${Math.max(5, Math.round(20 - (dist / maxDist) * 15)).toString(16).padStart(2, "0")}`,
                  border: isCenter ? "none" : `1px solid ${colors[colorIndex]}08`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Floating assembled tiles highlight */}
      {[
        { x: "8%", y: "12%", size: 50, color: "#ec4899", delay: 0 },
        { x: "88%", y: "15%", size: 40, color: "#a855f7", delay: 0.5 },
        { x: "85%", y: "78%", size: 45, color: "#d946ef", delay: 1 },
        { x: "12%", y: "82%", size: 35, color: "#f472b6", delay: 1.5 },
      ].map((tile, i) => (
        <div
          key={i}
          className="absolute am-float-tile pointer-events-none"
          style={{
            left: tile.x,
            top: tile.y,
            width: tile.size,
            height: tile.size,
            animationDelay: `${tile.delay}s`,
          }}
        >
          <div className="grid grid-cols-3 grid-rows-3 gap-px w-full h-full">
            {Array.from({ length: 9 }).map((_, j) => (
              <div
                key={j}
                className="rounded-sm"
                style={{
                  background: `${tile.color}${(15 + j * 5).toString(16)}`,
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Shimmer overlay */}
      <div
        className="absolute inset-0 pointer-events-none am-shimmer"
        style={{
          background: "linear-gradient(135deg, transparent 40%, rgba(236,72,153,0.03) 50%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
          style={{
            color: "#ec4899",
            borderColor: "rgba(236,72,153,0.3)",
            background: "rgba(10,10,10,0.8)",
            backdropFilter: "blur(8px)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-extrabold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            background: "linear-gradient(135deg, #ec4899, #a855f7, #d946ef)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 20px rgba(236,72,153,0.2))",
          }}
        >
          {t.title}
        </h1>

        <p
          className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-400"
          style={{ background: "rgba(10,10,10,0.6)", borderRadius: 8, padding: "12px 16px", backdropFilter: "blur(4px)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ec4899, #a855f7)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(236,72,153,0.4)",
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
              border: "1px solid rgba(168,85,247,0.4)",
              color: "#c084fc",
              background: "rgba(10,10,10,0.8)",
              backdropFilter: "blur(4px)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .am-tile-appear {
          animation: amAppear 2s ease-out forwards;
          opacity: 0;
          transform: scale(0);
        }
        @keyframes amAppear {
          0% { opacity: 0; transform: scale(0) rotate(10deg); }
          60% { opacity: 1; transform: scale(1.05) rotate(-2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .am-float-tile {
          animation: amFloat 5s ease-in-out infinite;
        }
        @keyframes amFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        .am-shimmer {
          animation: amShimmer 6s ease-in-out infinite;
        }
        @keyframes amShimmer {
          0% { background-position: -100% -100%; }
          100% { background-position: 200% 200%; }
        }
      `}</style>
    </section>
  );
}
