"use client";

import { ArrowRight, Rocket, Award, Globe, Users, TrendingUp } from "lucide-react";

const content = {
  en: {
    badge: "Our Journey",
    heading1: "Two Decades of",
    heading2: "Digital Excellence",
    sub: "From a small startup to a global powerhouse. Every milestone in our journey built the foundation for the next success.",
    cta1: "Join Our Journey",
    cta2: "Learn About Us",
    milestones: [
      { year: "2004", title: "Founded", desc: "Started with 3 people and a vision" },
      { year: "2010", title: "First Major Client", desc: "Landed our first Fortune 500 contract" },
      { year: "2015", title: "Going Global", desc: "Expanded to 15 international markets" },
      { year: "2019", title: "1000 Employees", desc: "Team grew across 4 continents" },
      { year: "2024", title: "$2B Revenue", desc: "Reached unicorn milestone" },
    ],
  },
  ar: {
    badge: "رحلتنا",
    heading1: "عقدان من",
    heading2: "التميز الرقمي",
    sub: "من شركة ناشئة صغيرة إلى قوة عالمية. كل محطة في رحلتنا بنت أساس النجاح التالي.",
    cta1: "انضم لرحلتنا",
    cta2: "تعرف علينا",
    milestones: [
      { year: "٢٠٠٤", title: "التأسيس", desc: "بدأنا بثلاثة أشخاص ورؤية واحدة" },
      { year: "٢٠١٠", title: "أول عميل كبير", desc: "حصلنا على أول عقد مع شركة Fortune 500" },
      { year: "٢٠١٥", title: "التوسع عالمياً", desc: "توسعنا إلى 15 سوقاً دولياً" },
      { year: "٢٠١٩", title: "1000 موظف", desc: "نما الفريق عبر 4 قارات" },
      { year: "٢٠٢٤", title: "إيرادات $2B", desc: "وصلنا إلى مرحلة يونيكورن" },
    ],
  },
};

const milestoneIcons = [Rocket, Award, Globe, Users, TrendingUp];
const nodeColors = ["#6366f1", "#a855f7", "#ec4899", "#6366f1", "#a855f7"];

export function Hero19({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";
  const transformOrigin = isAr ? "right" : "left";

  return (
    <>
      <style>{`
        @keyframes timelineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes nodeAppear {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes cardRevealDown {
          from { transform: translateY(-24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes cardRevealUp {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes nodePulse {
          0%, 100% { box-shadow: 0 0 0 0 var(--pulse-color, rgba(99,102,241,0.5)); }
          50% { box-shadow: 0 0 16px 6px var(--pulse-color, rgba(99,102,241,0.25)); }
        }
        @keyframes contentFade {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes badgeShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes glowLine {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .tl-animate { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <section
        className="min-h-screen relative overflow-hidden"
        style={{ background: "#0c0f1a", fontFamily: fontBody }}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "800px",
            height: "500px",
            background: "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)",
          }}
        />

        {/* ─── TOP CONTENT ─── */}
        <div className="relative z-10 pt-24 pb-12 px-6 flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className="tl-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              animation: "contentFade 0.8s ease-out both",
            }}
          >
            <Rocket className="w-3.5 h-3.5" style={{ color: "#a855f7" }} />
            <span
              className="text-sm font-medium"
              style={{ color: "#a5b4fc", fontFamily: fontBody }}
            >
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="tl-animate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
            style={{ fontFamily: fontHeading, animation: "contentFade 0.8s ease-out 0.15s both" }}
          >
            <span style={{ color: "#e2e8f0" }}>{t.heading1}</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t.heading2}
            </span>
          </h1>

          {/* Sub paragraph */}
          <p
            className="tl-animate max-w-2xl text-base sm:text-lg leading-relaxed mb-10"
            style={{
              color: "#94a3b8",
              fontFamily: fontBody,
              animation: "contentFade 0.8s ease-out 0.3s both",
            }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div
            className="tl-animate flex flex-wrap gap-4 justify-center"
            style={{ animation: "contentFade 0.8s ease-out 0.45s both" }}
          >
            <button
              className="cursor-pointer group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                fontFamily: fontBody,
              }}
            >
              {t.cta1}
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                style={{ transform: isAr ? "scaleX(-1)" : undefined }}
              />
            </button>
            <button
              className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                color: "#cbd5e1",
                border: "1px solid rgba(148,163,184,0.2)",
                fontFamily: fontBody,
              }}
            >
              {t.cta2}
            </button>
          </div>
        </div>

        {/* ─── TIMELINE SECTION ─── */}
        <div className="relative z-10 mt-8 pb-32 px-6">
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line container */}
            <div className="relative" style={{ height: "380px" }}>
              {/* The horizontal line */}
              <div
                className="absolute left-[10%] right-[10%]"
                style={{ top: "170px", height: "3px" }}
              >
                <div
                  className="tl-animate w-full h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)",
                    transformOrigin,
                    animation: `timelineGrow 1.5s ease-out 0.6s both`,
                  }}
                />
                {/* Glow line underneath */}
                <div
                  className="tl-animate absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)",
                    filter: "blur(8px)",
                    opacity: 0.4,
                    transformOrigin,
                    animation: `timelineGrow 1.5s ease-out 0.6s both, glowLine 3s ease-in-out 2.1s infinite`,
                  }}
                />
              </div>

              {/* Milestone nodes & cards */}
              {t.milestones.map((milestone, i) => {
                const Icon = milestoneIcons[i];
                const color = nodeColors[i];
                const isAbove = i % 2 === 1;
                const posPercent = 10 + i * 20; // 10%, 30%, 50%, 70%, 90%
                const nodeDelay = 2.1 + i * 0.3;
                const cardDelay = nodeDelay + 0.25;

                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      [isAr ? "right" : "left"]: `${posPercent}%`,
                      top: "170px",
                      transform: "translateX(-50%)",
                    }}
                  >
                    {/* Node circle */}
                    <div
                      className="tl-animate relative flex items-center justify-center"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginTop: "-8.5px",
                        animation: `nodeAppear 0.4s ease-out ${nodeDelay}s both, nodePulse 3s ease-in-out ${nodeDelay + 0.4}s infinite`,
                        // @ts-expect-error CSS custom property
                        "--pulse-color": `${color}40`,
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{ background: color, opacity: 0.25 }}
                      />
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          background: color,
                          boxShadow: `0 0 10px ${color}80`,
                        }}
                      />
                    </div>

                    {/* Connector stem */}
                    <div
                      className="tl-animate absolute left-1/2 -translate-x-1/2"
                      style={{
                        width: "1px",
                        height: "32px",
                        background: `linear-gradient(${isAbove ? "0deg" : "180deg"}, ${color}60, transparent)`,
                        top: isAbove ? "-33px" : "21px",
                        animation: `nodeAppear 0.3s ease-out ${nodeDelay + 0.15}s both`,
                      }}
                    />

                    {/* Milestone card */}
                    <div
                      className="tl-animate absolute"
                      style={{
                        [isAr ? "right" : "left"]: "50%",
                        transform: isAr ? "translateX(50%)" : "translateX(-50%)",
                        top: isAbove ? undefined : "58px",
                        bottom: isAbove ? "58px" : undefined,
                        width: "180px",
                        position: "absolute",
                        animation: `${isAbove ? "cardRevealDown" : "cardRevealUp"} 0.5s ease-out ${cardDelay}s both`,
                      }}
                    >
                      <div
                        className="rounded-xl p-4 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:shadow-lg cursor-pointer group"
                        style={{
                          background: "rgba(99,102,241,0.08)",
                          border: `1px solid ${color}25`,
                          boxShadow: `0 0 0 0 ${color}00`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = `${color}50`;
                          e.currentTarget.style.boxShadow = `0 4px 24px ${color}15`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = `${color}25`;
                          e.currentTarget.style.boxShadow = `0 0 0 0 ${color}00`;
                        }}
                      >
                        {/* Year */}
                        <span
                          className="text-xs font-bold tracking-widest uppercase block mb-2"
                          style={{ color, fontFamily: fontHeading }}
                        >
                          {milestone.year}
                        </span>

                        {/* Icon */}
                        <div
                          className="mx-auto mb-2 w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                          style={{ background: `${color}15` }}
                        >
                          <Icon className="w-4 h-4" style={{ color }} />
                        </div>

                        {/* Title */}
                        <h3
                          className="text-sm font-semibold mb-1"
                          style={{ color: "#e2e8f0", fontFamily: fontHeading }}
                        >
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="text-xs leading-relaxed"
                          style={{ color: "#94a3b8", fontFamily: fontBody }}
                        >
                          {milestone.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #0c0f1a, transparent)",
          }}
        />
      </section>
    </>
  );
}
