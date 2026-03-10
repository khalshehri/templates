"use client";

/**
 * Blueprint Hero
 * Architectural blueprint with dimension lines and measurements.
 * Technical/planning feel with grid background and drafting aesthetics.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Precision Design",
    heading: "Planned to",
    headingHighlight: "Perfection",
    subheading:
      "Every square meter is thoughtfully designed. From blueprint to reality, we build spaces that inspire living.",
    ctaPrimary: "View Floor Plans",
    ctaSecondary: "Book Consultation",
    rooms: [
      { name: "Living Room", size: "45 m²", x: 10, y: 15, w: 40, h: 35 },
      { name: "Kitchen", size: "22 m²", x: 55, y: 15, w: 35, h: 20 },
      { name: "Master Bed", size: "30 m²", x: 55, y: 40, w: 35, h: 30 },
      { name: "Bedroom 2", size: "18 m²", x: 10, y: 55, w: 25, h: 25 },
      { name: "Bath", size: "8 m²", x: 38, y: 55, w: 14, h: 25 },
    ],
    specs: ["Total: 180 m²", "3 Bedrooms", "2 Bathrooms", "Balcony: 12 m²"],
  },
  ar: {
    badge: "تصميم دقيق",
    heading: "مخطط",
    headingHighlight: "بإتقان",
    subheading:
      "كل متر مربع مصمم بعناية. من المخطط إلى الواقع، نبني مساحات تلهم الحياة.",
    ctaPrimary: "عرض المخططات",
    ctaSecondary: "حجز استشارة",
    rooms: [
      { name: "غرفة المعيشة", size: "45 م²", x: 10, y: 15, w: 40, h: 35 },
      { name: "المطبخ", size: "22 م²", x: 55, y: 15, w: 35, h: 20 },
      { name: "غرفة النوم الرئيسية", size: "30 م²", x: 55, y: 40, w: 35, h: 30 },
      { name: "غرفة النوم 2", size: "18 م²", x: 10, y: 55, w: 25, h: 25 },
      { name: "الحمام", size: "8 م²", x: 38, y: 55, w: 14, h: 25 },
    ],
    specs: ["المجموع: 180 م²", "3 غرف نوم", "2 حمامات", "شرفة: 12 م²"],
  },
};

export function RealestateBlueprint({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 500; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes roomFill {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes measurePop {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0c1a2e 50%, #091422 100%)" }}>
        {/* Blueprint grid */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.15) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              {t.badge}
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}>
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            <p className="fade-up mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.3s" }}>
              {t.subheading}
            </p>

            <div className="fade-up mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.4s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-yellow-400 rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Blueprint floor plan */}
          <div className="fade-up max-w-2xl mx-auto" style={{ animationDelay: "0.6s" }}>
            <div className="relative border border-blue-400/10 rounded-xl p-4 bg-blue-950/10">
              {/* Blueprint SVG */}
              <svg viewBox="0 0 100 85" className="w-full" style={{ filter: "drop-shadow(0 0 10px rgba(59,130,246,0.05))" }}>
                {/* Outer walls */}
                <rect x="8" y="12" width="84" height="70" fill="none"
                  stroke="rgba(59,130,246,0.25)" strokeWidth="0.6"
                  strokeDasharray="500" style={{ animation: "drawLine 2s ease-out 0.5s both" }} />

                {/* Room divisions */}
                {t.rooms.map((room, i) => (
                  <g key={i}>
                    <rect x={room.x} y={room.y} width={room.w} height={room.h}
                      fill="rgba(245,158,11,0.03)" stroke="rgba(59,130,246,0.15)" strokeWidth="0.3"
                      strokeDasharray="500"
                      style={{ animation: `drawLine 1.5s ease-out ${0.7 + i * 0.15}s both` }} />
                    {/* Room label */}
                    <text x={room.x + room.w / 2} y={room.y + room.h / 2 - 2}
                      textAnchor="middle" fill="rgba(245,158,11,0.4)" fontSize="2.8" fontWeight="600"
                      style={{ animation: `roomFill 0.5s ease-out ${1 + i * 0.15}s both`, opacity: 0 }}>
                      {room.name}
                    </text>
                    <text x={room.x + room.w / 2} y={room.y + room.h / 2 + 3}
                      textAnchor="middle" fill="rgba(59,130,246,0.3)" fontSize="2" fontFamily="monospace"
                      style={{ animation: `roomFill 0.5s ease-out ${1.1 + i * 0.15}s both`, opacity: 0 }}>
                      {room.size}
                    </text>
                  </g>
                ))}

                {/* Dimension lines (top) */}
                <line x1="8" y1="8" x2="92" y2="8" stroke="rgba(245,158,11,0.2)" strokeWidth="0.2" />
                <line x1="8" y1="6" x2="8" y2="10" stroke="rgba(245,158,11,0.2)" strokeWidth="0.2" />
                <line x1="92" y1="6" x2="92" y2="10" stroke="rgba(245,158,11,0.2)" strokeWidth="0.2" />
                <text x="50" y="7" textAnchor="middle" fill="rgba(245,158,11,0.3)" fontSize="2" fontFamily="monospace"
                  style={{ animation: "measurePop 0.5s ease-out 1.5s both", opacity: 0 }}>15.0 m</text>

                {/* Dimension lines (left) */}
                <line x1="4" y1="12" x2="4" y2="82" stroke="rgba(245,158,11,0.2)" strokeWidth="0.2" />
                <line x1="2" y1="12" x2="6" y2="12" stroke="rgba(245,158,11,0.2)" strokeWidth="0.2" />
                <line x1="2" y1="82" x2="6" y2="82" stroke="rgba(245,158,11,0.2)" strokeWidth="0.2" />
                <text x="4" y="47" textAnchor="middle" fill="rgba(245,158,11,0.3)" fontSize="2" fontFamily="monospace"
                  transform="rotate(-90, 4, 47)"
                  style={{ animation: "measurePop 0.5s ease-out 1.6s both", opacity: 0 }}>12.0 m</text>

                {/* Door indicators */}
                <path d="M48 12 Q48 20 55 15" fill="none" stroke="rgba(245,158,11,0.15)" strokeWidth="0.3" />
                <path d="M48 50 Q50 58 55 55" fill="none" stroke="rgba(245,158,11,0.15)" strokeWidth="0.3" />

                {/* Compass */}
                <g transform="translate(88, 7)">
                  <circle r="3" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="0.3" />
                  <text y="-0.5" textAnchor="middle" fill="rgba(59,130,246,0.3)" fontSize="2.2" fontWeight="bold">N</text>
                  <line x1="0" y1="-1.5" x2="0" y2="-3" stroke="rgba(59,130,246,0.25)" strokeWidth="0.3" />
                </g>
              </svg>

              {/* Scale bar */}
              <div className="flex items-center justify-end gap-2 mt-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className={`w-5 h-1 ${i % 2 === 0 ? "bg-blue-400/20" : "bg-transparent border border-blue-400/10"}`} />
                  ))}
                </div>
                <span className="text-[9px] text-blue-400/20 font-mono">5m</span>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="fade-up mt-10 flex items-center justify-center gap-6 flex-wrap"
            style={{ animationDelay: "0.9s" }}>
            {t.specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/25">
                <span className="w-1 h-1 rounded-full bg-amber-500/50" />
                {spec}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
