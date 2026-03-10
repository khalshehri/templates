"use client";

/**
 * Glass Skyscraper Hero
 * A CSS-built glass skyscraper that rises from the bottom on load, with reflective
 * panels that shimmer. Animated window lights that turn on/off randomly.
 * City skyline silhouette in background. Corporate blue gradient sky (day-to-dusk).
 * Floating holographic data panels with glassmorphism showing stats.
 * Steel blue (#1e3a5f), ice silver, glass white, corporate navy (#0a1628).
 */

import { ArrowRight, Shield } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Enterprise Solutions",
    heading: "Building Trust,",
    headingLine2: "Delivering Results.",
    subheading:
      "We partner with leading organizations to drive growth, streamline operations, and deliver measurable outcomes.",
    ctaPrimary: "Schedule Consultation",
    ctaSecondary: "Our Services",
    stats: [
      { value: "25+", label: "Years of Experience", icon: "Y" },
      { value: "500+", label: "Enterprise Clients", icon: "C" },
      { value: "98%", label: "Client Retention", icon: "R" },
    ],
    trustedBy: "Trusted by industry leaders",
  },
  ar: {
    badge: "حلول المؤسسات",
    heading: "نبني الثقة،",
    headingLine2: "نحقق النتائج.",
    subheading:
      "نتشارك مع المؤسسات الرائدة لدفع النمو وتبسيط العمليات وتحقيق نتائج ملموسة.",
    ctaPrimary: "حجز استشارة",
    ctaSecondary: "خدماتنا",
    stats: [
      { value: "+25", label: "عاماً من الخبرة", icon: "Y" },
      { value: "+500", label: "عميل مؤسسي", icon: "C" },
      { value: "98%", label: "معدل الاحتفاظ", icon: "R" },
    ],
    trustedBy: "موثوق من قبل رواد الصناعة",
  },
};

// Deterministic window light patterns for the main tower (8 cols x 20 rows = 160 windows)
const MAIN_WINDOWS = Array.from({ length: 160 }, (_, i) => ({
  lit: ((i * 7919 + 1301) % 100) < 35, // ~35% lit initially
  flickerDelay: ((i * 3137 + 491) % 80) / 10, // 0-8s
  flickerDuration: 3 + ((i * 2741) % 50) / 10, // 3-8s
}));

// Side building windows
const SIDE_WINDOWS_A = Array.from({ length: 30 }, (_, i) => ({
  lit: ((i * 6271 + 3457) % 100) < 25,
  flickerDelay: ((i * 1789) % 60) / 10,
  flickerDuration: 4 + ((i * 1117) % 40) / 10,
}));

const SIDE_WINDOWS_B = Array.from({ length: 40 }, (_, i) => ({
  lit: ((i * 4973 + 2111) % 100) < 30,
  flickerDelay: ((i * 2347) % 70) / 10,
  flickerDuration: 3 + ((i * 1523) % 45) / 10,
}));

// Skyline building heights (background city)
const SKYLINE = [
  { x: 0, w: 4, h: 18 },
  { x: 4.5, w: 3, h: 28 },
  { x: 8, w: 5, h: 22 },
  { x: 13.5, w: 3.5, h: 35 },
  { x: 17.5, w: 4, h: 15 },
  { x: 22, w: 6, h: 42 },
  { x: 28.5, w: 3, h: 20 },
  { x: 32, w: 4.5, h: 30 },
  { x: 37, w: 3, h: 25 },
  { x: 40.5, w: 5, h: 38 },
  { x: 46, w: 3.5, h: 16 },
  { x: 50, w: 4, h: 32 },
  { x: 54.5, w: 6, h: 45 },
  { x: 61, w: 3, h: 20 },
  { x: 64.5, w: 4.5, h: 28 },
  { x: 69.5, w: 3, h: 36 },
  { x: 73, w: 5, h: 22 },
  { x: 78.5, w: 4, h: 40 },
  { x: 83, w: 3.5, h: 18 },
  { x: 87, w: 4, h: 30 },
  { x: 91.5, w: 5, h: 24 },
  { x: 97, w: 3, h: 34 },
];

export function CorporateTower({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes towerRise {
          from { transform: translateY(100%) scaleY(0.3); opacity: 0; }
          50% { opacity: 1; }
          to { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        @keyframes skyShift {
          0%, 100% { background-position: 50% 0%; }
          50% { background-position: 50% 100%; }
        }
        @keyframes windowFlicker {
          0%, 40% { opacity: 0.08; }
          45% { opacity: 0.9; }
          50% { opacity: 0.7; }
          55% { opacity: 0.95; }
          90% { opacity: 0.9; }
          95% { opacity: 0.1; }
          100% { opacity: 0.08; }
        }
        @keyframes windowGlow {
          0%, 100% { opacity: 0.9; }
          30% { opacity: 0.5; }
          60% { opacity: 1; }
        }
        @keyframes glassShimmer {
          0% { transform: translateX(-150%) skewX(-15deg); }
          100% { transform: translateX(350%) skewX(-15deg); }
        }
        @keyframes panelFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes panelReveal {
          from { opacity: 0; transform: translateX(30px) scale(0.9); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes panelRevealLeft {
          from { opacity: 0; transform: translateX(-30px) scale(0.9); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes glideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes skylineFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes beaconPulse {
          0%, 100% { opacity: 0.4; box-shadow: 0 0 6px rgba(255,100,100,0.3); }
          50% { opacity: 1; box-shadow: 0 0 20px rgba(255,100,100,0.8), 0 0 40px rgba(255,100,100,0.3); }
        }
        @keyframes reflectionMove {
          0% { opacity: 0.03; transform: translateY(0); }
          50% { opacity: 0.06; transform: translateY(-5px); }
          100% { opacity: 0.03; transform: translateY(0); }
        }
        .tower-rise { animation: towerRise 1.4s cubic-bezier(0.22, 1, 0.36, 1) both; transform-origin: bottom center; }
        .glide-up { animation: glideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .panel-float { animation: panelFloat 6s ease-in-out infinite; }
        .panel-reveal { animation: panelReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .panel-reveal-left { animation: panelRevealLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .window-cell {
          position: relative;
          border-radius: 1px;
          transition: opacity 2s ease;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#0a1628" }}>
        {/* Animated sky gradient — day to dusk */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #0f2847 0%, #1e3a5f 25%, #2d4a6f 40%, #1a3050 60%, #0f1d30 80%, #0a1628 100%)",
            backgroundSize: "100% 200%",
            animation: "skyShift 30s ease-in-out infinite",
          }}
        />

        {/* Subtle cloud/atmospheric haze */}
        <div
          className="absolute w-[1200px] h-[400px] rounded-full"
          style={{
            top: "5%",
            left: "10%",
            background: "radial-gradient(ellipse, rgba(30,58,95,0.25) 0%, transparent 70%)",
            animation: "reflectionMove 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[800px] h-[300px] rounded-full"
          style={{
            top: "15%",
            right: "-5%",
            background: "radial-gradient(ellipse, rgba(45,74,111,0.2) 0%, transparent 70%)",
            animation: "reflectionMove 20s ease-in-out 5s infinite",
          }}
        />

        {/* Stars in the upper sky */}
        {Array.from({ length: 40 }, (_, i) => ({
          x: ((i * 7919 + 1301) % 10000) / 100,
          y: ((i * 6271 + 3457) % 4000) / 100, // only top 40%
          size: 1 + ((i * 3137) % 2),
          opacity: 0.2 + ((i * 2741) % 5) / 10,
        })).map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        ))}

        {/* City skyline silhouette — background */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "45%", animation: "skylineFade 1.5s ease both 0.3s" }}
        >
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 100 50" preserveAspectRatio="none" style={{ height: "100%" }}>
            {SKYLINE.map((b, i) => (
              <rect
                key={i}
                x={b.x}
                y={50 - b.h}
                width={b.w}
                height={b.h}
                fill="rgba(5,12,22,0.7)"
              />
            ))}
            {/* Tiny window dots on skyline buildings */}
            {SKYLINE.map((b, bi) =>
              Array.from({ length: Math.floor(b.h / 4) * 2 }, (_, wi) => {
                const col = wi % 2;
                const row = Math.floor(wi / 2);
                const isLit = ((bi * 31 + wi * 17) % 100) < 20;
                return (
                  <rect
                    key={`${bi}-${wi}`}
                    x={b.x + 0.5 + col * (b.w / 2 - 0.3)}
                    y={50 - b.h + 1.5 + row * 4}
                    width={0.8}
                    height={1.2}
                    fill={isLit ? "rgba(255,220,150,0.6)" : "rgba(255,255,255,0.05)"}
                    rx={0.1}
                  />
                );
              })
            )}
          </svg>
        </div>

        {/* Ground / horizon glow */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-sky-400/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent" />

        {/* Content layer */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-4 items-center ${isAr ? "direction-rtl" : ""}`}>
            {/* Text side */}
            <div className={isAr ? "lg:order-2 text-right" : ""}>
              {/* Badge */}
              <div
                className={`glide-up inline-flex items-center gap-2 px-4 py-2 rounded-md backdrop-blur-xl border border-sky-300/[0.1] bg-white/[0.04] mb-8 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.3s" }}
              >
                <Shield size={14} className="text-sky-300/80" />
                <span className="text-sm font-medium text-sky-200/70 tracking-wide">{t.badge}</span>
              </div>

              {/* Heading */}
              <h1
                className="glide-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05]"
                style={{ animationDelay: "0.45s" }}
              >
                <span className="block text-white/90">{t.heading}</span>
                <span
                  className="block bg-gradient-to-r from-sky-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent"
                  style={{ textShadow: "none" }}
                >
                  {t.headingLine2}
                </span>
              </h1>

              {/* Accent line */}
              <div
                className="glide-up mt-6 h-[2px] w-24"
                style={{
                  background: "linear-gradient(90deg, #38bdf8, #60a5fa, transparent)",
                  boxShadow: "0 0 15px rgba(56,189,248,0.3)",
                  animationDelay: "0.55s",
                }}
              />

              {/* Subheading */}
              <p
                className="glide-up mt-6 text-lg text-sky-100/25 leading-relaxed max-w-md"
                style={{ animationDelay: "0.6s" }}
              >
                {t.subheading}
              </p>

              {/* CTAs */}
              <div
                className={`glide-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.7s" }}
              >
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #1e3a5f, #2563eb, #38bdf8)" }}
                >
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a
                  href="#"
                  className="px-7 py-3.5 text-sm font-semibold text-sky-200/30 border border-sky-300/[0.08] rounded-lg hover:bg-sky-300/[0.04] hover:border-sky-300/[0.15] transition-all backdrop-blur-sm"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Tower illustration side */}
            <div className={`relative flex items-end justify-center ${isAr ? "lg:order-1" : ""}`} style={{ height: "580px" }}>
              {/* Main glass tower */}
              <div className="tower-rise relative flex flex-col items-center" style={{ animationDelay: "0.3s" }}>
                {/* Beacon / antenna */}
                <div className="relative mb-0">
                  <div className="mx-auto w-[2px] h-12 bg-gradient-to-t from-sky-400/40 to-transparent" />
                  <div
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-400"
                    style={{ animation: "beaconPulse 2s ease-in-out infinite" }}
                  />
                </div>
                {/* Tower body */}
                <div
                  className="relative overflow-hidden rounded-t-md"
                  style={{
                    width: "clamp(120px, 18vw, 180px)",
                    height: "380px",
                    background: "linear-gradient(180deg, rgba(30,58,95,0.9) 0%, rgba(15,40,71,0.95) 50%, rgba(10,22,40,0.98) 100%)",
                    boxShadow: "0 0 60px rgba(56,189,248,0.08), inset 0 0 30px rgba(56,189,248,0.03)",
                  }}
                >
                  {/* Glass reflection shimmer */}
                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ opacity: 0.4 }}
                  >
                    <div
                      className="absolute top-0 h-full"
                      style={{
                        width: "40px",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
                        animation: "glassShimmer 8s ease-in-out 2s infinite",
                      }}
                    />
                  </div>

                  {/* Glass panel grid lines */}
                  <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.08 }}>
                    {Array.from({ length: 20 }, (_, i) => (
                      <div
                        key={`h${i}`}
                        className="absolute left-0 right-0 bg-sky-200"
                        style={{ top: `${(i + 1) * 5}%`, height: "0.5px" }}
                      />
                    ))}
                    {Array.from({ length: 8 }, (_, i) => (
                      <div
                        key={`v${i}`}
                        className="absolute top-0 bottom-0 bg-sky-200"
                        style={{ left: `${(i + 1) * 12.5}%`, width: "0.5px" }}
                      />
                    ))}
                  </div>

                  {/* Window lights grid */}
                  <div className="absolute inset-[6px] grid grid-cols-8 gap-[2px]">
                    {MAIN_WINDOWS.map((win, i) => (
                      <div
                        key={i}
                        className="window-cell"
                        style={{
                          background: win.lit
                            ? "linear-gradient(180deg, rgba(255,220,150,0.85) 0%, rgba(255,200,100,0.6) 100%)"
                            : "rgba(56,189,248,0.05)",
                          boxShadow: win.lit ? "0 0 4px rgba(255,220,150,0.3)" : "none",
                          animation: win.lit
                            ? `windowGlow ${win.flickerDuration}s ease-in-out ${win.flickerDelay}s infinite`
                            : `windowFlicker ${win.flickerDuration}s ease-in-out ${win.flickerDelay}s infinite`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Vertical glass reflection strips */}
                  <div
                    className="absolute top-0 bottom-0 pointer-events-none"
                    style={{
                      left: "20%",
                      width: "2px",
                      background: "linear-gradient(180deg, rgba(255,255,255,0.08), transparent 30%, rgba(255,255,255,0.04) 60%, transparent)",
                    }}
                  />
                  <div
                    className="absolute top-0 bottom-0 pointer-events-none"
                    style={{
                      left: "65%",
                      width: "1px",
                      background: "linear-gradient(180deg, transparent 10%, rgba(255,255,255,0.06) 40%, transparent 70%)",
                    }}
                  />
                </div>
              </div>

              {/* Left side building */}
              <div
                className="tower-rise absolute bottom-0"
                style={{ [isAr ? "right" : "left"]: "2%", animationDelay: "0.5s" }}
              >
                <div
                  className="relative overflow-hidden rounded-t-sm"
                  style={{
                    width: "clamp(55px, 8vw, 75px)",
                    height: "220px",
                    background: "linear-gradient(180deg, rgba(20,40,65,0.85) 0%, rgba(10,22,40,0.95) 100%)",
                    boxShadow: "inset 0 0 15px rgba(56,189,248,0.02)",
                  }}
                >
                  <div className="absolute inset-[4px] grid grid-cols-3 gap-[2px]">
                    {SIDE_WINDOWS_A.map((win, i) => (
                      <div
                        key={i}
                        className="window-cell"
                        style={{
                          background: win.lit
                            ? "rgba(255,220,150,0.7)"
                            : "rgba(56,189,248,0.04)",
                          animation: win.lit
                            ? `windowGlow ${win.flickerDuration}s ease-in-out ${win.flickerDelay}s infinite`
                            : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side building */}
              <div
                className="tower-rise absolute bottom-0"
                style={{ [isAr ? "left" : "right"]: "5%", animationDelay: "0.65s" }}
              >
                <div
                  className="relative overflow-hidden rounded-t-sm"
                  style={{
                    width: "clamp(65px, 9vw, 85px)",
                    height: "280px",
                    background: "linear-gradient(180deg, rgba(25,50,80,0.8) 0%, rgba(10,22,40,0.95) 100%)",
                    boxShadow: "inset 0 0 15px rgba(56,189,248,0.02)",
                  }}
                >
                  {/* Shimmer on right building */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity: 0.3 }}>
                    <div
                      className="absolute top-0 h-full"
                      style={{
                        width: "25px",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                        animation: "glassShimmer 10s ease-in-out 4s infinite",
                      }}
                    />
                  </div>
                  <div className="absolute inset-[4px] grid grid-cols-4 gap-[2px]">
                    {SIDE_WINDOWS_B.map((win, i) => (
                      <div
                        key={i}
                        className="window-cell"
                        style={{
                          background: win.lit
                            ? "rgba(255,220,150,0.65)"
                            : "rgba(56,189,248,0.04)",
                          animation: win.lit
                            ? `windowGlow ${win.flickerDuration}s ease-in-out ${win.flickerDelay}s infinite`
                            : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating holographic data panels */}
              {t.stats.map((stat, i) => {
                const positions = isAr
                  ? [
                      { left: "-5%", top: "12%", delay: "1s" },
                      { left: "-10%", top: "38%", delay: "1.2s" },
                      { left: "2%", top: "62%", delay: "1.4s" },
                    ]
                  : [
                      { right: "-5%", top: "12%", delay: "1s" },
                      { right: "-10%", top: "38%", delay: "1.2s" },
                      { right: "2%", top: "62%", delay: "1.4s" },
                    ];
                const pos = positions[i];
                return (
                  <div
                    key={i}
                    className={`absolute ${isAr ? "panel-reveal-left" : "panel-reveal"} panel-float`}
                    style={{
                      ...pos,
                      animationDelay: pos.delay,
                      animationDuration: "0.8s, 6s",
                    }}
                  >
                    <div
                      className="px-5 py-4 rounded-lg backdrop-blur-xl border border-sky-300/[0.12]"
                      style={{
                        background: "linear-gradient(135deg, rgba(30,58,95,0.4) 0%, rgba(10,22,40,0.5) 100%)",
                        boxShadow: "0 0 30px rgba(56,189,248,0.06), inset 0 0 15px rgba(56,189,248,0.03)",
                        animationDelay: `${i * 0.8}s`,
                      }}
                    >
                      {/* Holographic scan line */}
                      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                        <div
                          className="absolute left-0 right-0 h-[1px]"
                          style={{
                            background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.15), transparent)",
                            animation: `scanline 4s linear ${i}s infinite`,
                          }}
                        />
                      </div>
                      <div className="text-2xl font-black text-sky-200/90" style={{ textShadow: "0 0 20px rgba(56,189,248,0.3)" }}>
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-sky-300/30 mt-1 uppercase tracking-wider font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trust logos */}
          <div className="glide-up mt-16 text-center" style={{ animationDelay: "1.2s" }}>
            <p className="text-[11px] text-sky-200/15 uppercase tracking-[0.25em] mb-5">{t.trustedBy}</p>
            <div className="flex items-center justify-center gap-8 sm:gap-12">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-8 rounded border border-sky-300/[0.06] backdrop-blur-sm"
                  style={{ background: "rgba(30,58,95,0.15)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
