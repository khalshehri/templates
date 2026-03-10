"use client";

/**
 * Pulse Map Hero
 * An abstract city map made of CSS grid blocks in varying shades.
 * A pulsing pin marker with concentric circles marks the location.
 * Animated dashed route line connects pin to destination.
 * Some blocks glow to indicate nearby services.
 */

import { ArrowRight, MapPin, Phone, Clock, Navigation } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Find Us",
    headingLine2: "Near You",
    subheading: "Conveniently located in the heart of the city. Visit us today or give us a call.",
    ctaPrimary: "Get Directions",
    ctaSecondary: "Call Now",
    address: "King Fahd Road, Riyadh 12271",
    phone: "+966 11 234 5678",
    hours: "Sun–Thu: 8AM – 10PM",
    pin: "We're Here",
    nearbyLabel: "Nearby Services",
    distanceLabel: "2 min away",
  },
  ar: {
    heading: "اعثر علينا",
    headingLine2: "بالقرب منك",
    subheading: "موقع مناسب في قلب المدينة. زرنا اليوم أو اتصل بنا.",
    ctaPrimary: "احصل على الاتجاهات",
    ctaSecondary: "اتصل الآن",
    address: "طريق الملك فهد، الرياض 12271",
    phone: "+966 11 234 5678",
    hours: "الأحد–الخميس: 8ص – 10م",
    pin: "نحن هنا",
    nearbyLabel: "خدمات قريبة",
    distanceLabel: "على بعد دقيقتين",
  },
};

// City grid layout: 0 = street (gap), 1-3 = building blocks with different intensities
// Pin at row 4, col 7. Destination at row 2, col 3.
const COLS = 12;
const ROWS = 8;
const PIN = { r: 4, c: 7 };
const DEST = { r: 2, c: 3 };
// Service glow blocks
const GLOW_BLOCKS = [
  { r: 3, c: 6 }, { r: 5, c: 8 }, { r: 4, c: 5 }, { r: 2, c: 9 }, { r: 6, c: 4 },
];

// Deterministic grid (seeded pattern, not random)
const gridData: number[][] = [
  [2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2],
  [1, 3, 2, 0, 1, 2, 3, 1, 0, 2, 1, 3],
  [0, 2, 1, 3, 0, 1, 2, 0, 3, 1, 2, 0],
  [3, 0, 2, 1, 3, 2, 1, 3, 0, 2, 0, 1],
  [1, 2, 0, 3, 1, 0, 2, 1, 3, 0, 2, 3],
  [0, 3, 1, 0, 2, 3, 0, 2, 1, 3, 1, 0],
  [2, 0, 3, 2, 0, 1, 3, 0, 2, 1, 0, 2],
  [1, 2, 0, 1, 3, 0, 2, 1, 0, 3, 2, 1],
];

// Route path from destination to pin (grid cells the route passes through)
const routePath = [
  { r: 2, c: 3 }, { r: 2, c: 4 }, { r: 2, c: 5 },
  { r: 3, c: 5 }, { r: 3, c: 6 }, { r: 4, c: 6 }, { r: 4, c: 7 },
];

export function ServiceLocation({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  const isGlowBlock = (r: number, c: number) =>
    GLOW_BLOCKS.some(g => g.r === r && g.c === c);

  const isRoutePath = (r: number, c: number) =>
    routePath.some(p => p.r === r && p.c === c);

  const blockColor = (val: number, r: number, c: number) => {
    if (val === 0) return "transparent";
    if (isGlowBlock(r, c)) return undefined; // handled separately
    const tealShades = ["#ccfbf1", "#99f6e4", "#5eead4"];
    return tealShades[val - 1];
  };

  return (
    <>
      <style>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(40px); filter: blur(8px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes pulse1 {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
        }
        @keyframes pulse2 {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
        }
        @keyframes pulse3 {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.25; }
          100% { transform: translate(-50%, -50%) scale(5); opacity: 0; }
        }
        @keyframes pinFloat {
          0%, 100% { transform: translate(-50%, -100%) translateY(0); }
          50% { transform: translate(-50%, -100%) translateY(-6px); }
        }
        @keyframes routeDash {
          from { stroke-dashoffset: 20; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes blockGlow {
          0%, 100% { box-shadow: 0 0 8px rgba(249, 115, 22, 0.3), inset 0 0 6px rgba(249, 115, 22, 0.1); }
          50% { box-shadow: 0 0 16px rgba(249, 115, 22, 0.5), inset 0 0 10px rgba(249, 115, 22, 0.2); }
        }
        @keyframes gridFadeIn {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes destPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(249, 115, 22, 0); }
        }
        @keyframes mapEntrance {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .float-in { animation: floatIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .map-entrance { animation: mapEntrance 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both; }
        .grid-cell { animation: gridFadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .glow-block { animation: blockGlow 3s ease-in-out infinite; }
        .pin-float { animation: pinFloat 2.5s ease-in-out infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#fafaf9]">
        {/* Subtle warm gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 70% 50%, rgba(13, 148, 136, 0.04), transparent 60%), radial-gradient(ellipse at 30% 30%, rgba(249, 115, 22, 0.03), transparent 50%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text side */}
            <div className={isAr ? "lg:order-2 text-right" : ""}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black tracking-tight leading-[1.05]">
                <span
                  className="float-in block text-gray-900"
                  style={{ animationDelay: "0.1s" }}
                >
                  {t.heading}
                </span>
                <span
                  className="float-in block"
                  style={{
                    animationDelay: "0.25s",
                    background: "linear-gradient(135deg, #0d9488, #14b8a6, #0891b2)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t.headingLine2}
                </span>
              </h1>

              <p
                className="float-in mt-7 text-[1.1rem] text-gray-400 leading-relaxed max-w-md"
                style={{ animationDelay: "0.4s" }}
              >
                {t.subheading}
              </p>

              {/* Info cards */}
              <div className="float-in mt-8 space-y-3" style={{ animationDelay: "0.55s" }}>
                {[
                  { icon: <MapPin size={16} />, text: t.address, color: "#0d9488" },
                  { icon: <Phone size={16} />, text: t.phone, color: "#f97316", dir: "ltr" as const },
                  { icon: <Clock size={16} />, text: t.hours, color: "#0d9488" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3.5 px-5 py-3.5 rounded-2xl transition-all hover:shadow-md ${isAr ? "flex-row-reverse" : ""}`}
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(0,0,0,0.04)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}15, ${item.color}08)`,
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-600" dir={item.dir}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div
                className={`float-in mt-9 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.7s" }}
              >
                <a
                  href="#"
                  className={`group relative inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-2xl transition-all hover:-translate-y-1 overflow-hidden ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    background: "linear-gradient(135deg, #0d9488, #14b8a6)",
                    boxShadow: "0 8px 32px rgba(13, 148, 136, 0.3), 0 2px 8px rgba(13, 148, 136, 0.15)",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Navigation size={14} />
                    {t.ctaPrimary}
                    <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                  </span>
                </a>
                <a
                  href="#"
                  className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-gray-500 rounded-2xl transition-all hover:bg-white/80 hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    border: "1px solid rgba(0,0,0,0.06)",
                    background: "rgba(255,255,255,0.5)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Phone size={14} />
                  {t.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Pulse Map side */}
            <div className={`relative ${isAr ? "lg:order-1" : ""}`}>
              <div
                className="map-entrance relative rounded-3xl overflow-hidden p-5 sm:p-6"
                style={{
                  background: "linear-gradient(165deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.8)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                {/* Map label */}
                <div className={`flex items-center justify-between mb-4 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                    <div className="w-2 h-2 rounded-full bg-teal-500" style={{ boxShadow: "0 0 8px rgba(13,148,136,0.5)" }} />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t.pin}</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${isAr ? "flex-row-reverse" : ""}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span className="text-[10px] text-gray-400">{t.nearbyLabel}</span>
                  </div>
                </div>

                {/* Grid map */}
                <div className="relative">
                  <div
                    className="grid gap-[3px]"
                    style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
                  >
                    {gridData.map((row, r) =>
                      row.map((cell, c) => {
                        const isPin = r === PIN.r && c === PIN.c;
                        const isDest = r === DEST.r && c === DEST.c;
                        const isGlow = isGlowBlock(r, c);
                        const isRoute = isRoutePath(r, c);
                        const color = blockColor(cell, r, c);

                        return (
                          <div
                            key={`${r}-${c}`}
                            className={`relative aspect-square rounded-md grid-cell ${isGlow ? "glow-block" : ""}`}
                            style={{
                              animationDelay: `${(r * COLS + c) * 0.02 + 0.3}s`,
                              backgroundColor: isGlow
                                ? "#fff7ed"
                                : isRoute && cell === 0
                                ? "rgba(13, 148, 136, 0.06)"
                                : color || "transparent",
                              opacity: cell === 0 ? 1 : 0.4 + cell * 0.2,
                              border: isGlow
                                ? "1px solid rgba(249, 115, 22, 0.25)"
                                : isDest
                                ? "2px solid rgba(249, 115, 22, 0.5)"
                                : "none",
                              borderRadius: isGlow || isDest ? "8px" : "4px",
                            }}
                          >
                            {/* Pin marker */}
                            {isPin && (
                              <div className="absolute inset-0 z-20">
                                {/* Pulse rings */}
                                <div
                                  className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-teal-500"
                                  style={{ animation: "pulse1 2s ease-out infinite" }}
                                />
                                <div
                                  className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-teal-400"
                                  style={{ animation: "pulse2 2s ease-out 0.5s infinite" }}
                                />
                                <div
                                  className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-teal-300"
                                  style={{ animation: "pulse3 2s ease-out 1s infinite" }}
                                />
                                {/* Pin icon */}
                                <div
                                  className="pin-float absolute top-1/2 left-1/2 z-30"
                                >
                                  <div
                                    className="flex items-center justify-center"
                                    style={{
                                      width: 28,
                                      height: 28,
                                      borderRadius: "50% 50% 50% 0",
                                      background: "linear-gradient(135deg, #0d9488, #14b8a6)",
                                      transform: "rotate(-45deg)",
                                      boxShadow: "0 4px 12px rgba(13, 148, 136, 0.4)",
                                    }}
                                  >
                                    <div
                                      className="w-2.5 h-2.5 rounded-full bg-white"
                                      style={{ transform: "rotate(45deg)" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Destination marker */}
                            {isDest && (
                              <div className="absolute inset-0 z-10 flex items-center justify-center">
                                <div
                                  className="w-5 h-5 rounded-full flex items-center justify-center"
                                  style={{
                                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                                    boxShadow: "0 2px 8px rgba(249, 115, 22, 0.4)",
                                    animation: "destPulse 2s ease-in-out infinite",
                                  }}
                                >
                                  <Navigation size={10} className="text-white" />
                                </div>
                              </div>
                            )}

                            {/* Glow indicator */}
                            {isGlow && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{
                                    background: "#f97316",
                                    boxShadow: "0 0 6px rgba(249, 115, 22, 0.5)",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>

                  {/* SVG Route line overlay */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    viewBox={`0 0 ${COLS} ${ROWS}`}
                    preserveAspectRatio="none"
                  >
                    <path
                      d={routePath
                        .map((p, i) =>
                          `${i === 0 ? "M" : "L"} ${p.c + 0.5} ${p.r + 0.5}`
                        )
                        .join(" ")}
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="0.15"
                      strokeDasharray="0.3 0.2"
                      strokeLinecap="round"
                      opacity="0.6"
                      style={{ animation: "routeDash 1.5s linear infinite" }}
                    />
                    {/* Route glow */}
                    <path
                      d={routePath
                        .map((p, i) =>
                          `${i === 0 ? "M" : "L"} ${p.c + 0.5} ${p.r + 0.5}`
                        )
                        .join(" ")}
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="0.35"
                      strokeLinecap="round"
                      opacity="0.1"
                      filter="url(#routeGlow)"
                    />
                    <defs>
                      <filter id="routeGlow">
                        <feGaussianBlur stdDeviation="0.3" />
                      </filter>
                    </defs>
                  </svg>
                </div>

                {/* Bottom info strip */}
                <div
                  className={`mt-4 flex items-center justify-between px-3 py-2.5 rounded-xl ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    background: "linear-gradient(135deg, rgba(13, 148, 136, 0.06), rgba(20, 184, 166, 0.03))",
                    border: "1px solid rgba(13, 148, 136, 0.08)",
                  }}
                >
                  <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                    <MapPin size={12} className="text-teal-600" />
                    <span className="text-xs font-semibold text-teal-700">{t.address}</span>
                  </div>
                  <span className="text-[10px] font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
                    {t.distanceLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
