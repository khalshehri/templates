"use client";

/**
 * Stage Lights Hero — Event Speakers
 * Concert/conference stage feel with individual colored spotlight beams
 * on each speaker avatar, sound wave visualization, floating avatars,
 * and stage floor reflections.
 */

import { ArrowRight, Calendar, MapPin } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const SPOTLIGHT_COLORS = [
  { main: "#3b82f6", glow: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.5)" },
  { main: "#8b5cf6", glow: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.5)" },
  { main: "#f59e0b", glow: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.5)" },
  { main: "#14b8a6", glow: "rgba(20,184,166,0.15)", border: "rgba(20,184,166,0.5)" },
];

const content = {
  en: {
    heading: "Design Conference",
    headingLine2: "Riyadh 2026",
    tagline:
      "The region's premier design event. Learn from the best, connect with peers.",
    ctaPrimary: "Register Now",
    ctaSecondary: "Learn More",
    date: "November 20–22, 2026",
    venue: "King Abdullah Financial District",
    speakersLabel: "Featured Speakers",
    speakers: [
      { name: "Ahmed Al-Rashid", role: "CEO, TechVision", initials: "AR" },
      { name: "Sarah Johnson", role: "VP Design, Google", initials: "SJ" },
      { name: "Khalid Mansour", role: "Founder, Pixel Lab", initials: "KM" },
      { name: "Lina Haddad", role: "Creative Director", initials: "LH" },
    ],
    stats: [
      { value: "50+", label: "Speakers" },
      { value: "3", label: "Days" },
      { value: "5K+", label: "Attendees" },
    ],
  },
  ar: {
    heading: "مؤتمر التصميم",
    headingLine2: "الرياض 2026",
    tagline:
      "الحدث الأبرز للتصميم في المنطقة. تعلّم من الأفضل وتواصل مع أقرانك.",
    ctaPrimary: "سجّل الآن",
    ctaSecondary: "اعرف المزيد",
    date: "20–22 نوفمبر 2026",
    venue: "حي الملك عبدالله المالي",
    speakersLabel: "المتحدثون المميزون",
    speakers: [
      { name: "أحمد الراشد", role: "الرئيس التنفيذي، تك فيجن", initials: "أر" },
      { name: "سارة جونسون", role: "نائبة رئيس التصميم، جوجل", initials: "سج" },
      { name: "خالد منصور", role: "مؤسس بيكسل لاب", initials: "خم" },
      { name: "لينا حداد", role: "المديرة الإبداعية", initials: "لح" },
    ],
    stats: [
      { value: "+50", label: "متحدث" },
      { value: "3", label: "أيام" },
      { value: "+5K", label: "حاضر" },
    ],
  },
};

// Sound wave paths — 6 wavy lines with different amplitudes and frequencies
const WAVE_LINES = [
  { amplitude: 8, frequency: 0.8, yOffset: 0, opacity: 0.06, delay: 0 },
  { amplitude: 12, frequency: 1.2, yOffset: 18, opacity: 0.08, delay: 0.5 },
  { amplitude: 6, frequency: 1.5, yOffset: 36, opacity: 0.05, delay: 1.0 },
  { amplitude: 10, frequency: 0.6, yOffset: 54, opacity: 0.07, delay: 1.5 },
  { amplitude: 14, frequency: 1.0, yOffset: 72, opacity: 0.04, delay: 2.0 },
  { amplitude: 7, frequency: 1.8, yOffset: 90, opacity: 0.06, delay: 0.8 },
];

function generateWavePath(
  amplitude: number,
  frequency: number,
  yOffset: number,
  width: number
): string {
  const points: string[] = [];
  const steps = 60;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const y =
      yOffset +
      amplitude * Math.sin((i / steps) * Math.PI * 2 * frequency) +
      amplitude * 0.5 * Math.sin((i / steps) * Math.PI * 2 * frequency * 2.3);
    points.push(`${x},${y}`);
  }
  return `M ${points[0]} ` + points.slice(1).map((p) => `L ${p}`).join(" ");
}

export function EventSpeakers({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        /* ---- Fade up ---- */
        @keyframes stgFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ---- Speaker float ---- */
        @keyframes speakerFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* ---- Spotlight beam pulse ---- */
        @keyframes spotlightPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        /* ---- Sound wave undulation ---- */
        @keyframes waveUndulate {
          0% { transform: translateX(0) scaleY(1); }
          25% { transform: translateX(-8px) scaleY(1.3); }
          50% { transform: translateX(0) scaleY(0.7); }
          75% { transform: translateX(8px) scaleY(1.2); }
          100% { transform: translateX(0) scaleY(1); }
        }

        /* ---- Avatar ring glow ---- */
        @keyframes ringGlow {
          0%, 100% { filter: drop-shadow(0 0 6px currentColor); }
          50% { filter: drop-shadow(0 0 16px currentColor); }
        }

        /* ---- Stage light flare ---- */
        @keyframes lightFlare {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        .stg-fade { animation: stgFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .stg-float { animation: speakerFloat 4s ease-in-out infinite; }
        .stg-wave { animation: waveUndulate 6s ease-in-out infinite; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 60%, #111111 85%, #0a0a0a 100%)",
        }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* ---- Stage floor gradient ---- */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "35%",
            background:
              "linear-gradient(to top, rgba(30,30,30,0.5) 0%, transparent 100%)",
          }}
        />
        {/* Floor edge line */}
        <div
          className="absolute bottom-[34%] left-0 right-0 pointer-events-none"
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.04) 70%, transparent 95%)",
          }}
        />

        {/* ---- Sound wave visualization (behind speakers) ---- */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "45%",
            left: "5%",
            right: "5%",
            height: 120,
          }}
        >
          <svg
            width="100%"
            height="120"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            fill="none"
          >
            {WAVE_LINES.map((wave, i) => (
              <path
                key={i}
                d={generateWavePath(
                  wave.amplitude,
                  wave.frequency,
                  wave.yOffset,
                  1000
                )}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
                fill="none"
                style={{
                  opacity: wave.opacity,
                  animation: `waveUndulate ${5 + i * 0.8}s ease-in-out infinite`,
                  animationDelay: `${wave.delay}s`,
                  transformOrigin: "center center",
                }}
              />
            ))}
          </svg>
        </div>

        {/* ---- Content ---- */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* ---- Top section: heading + tagline ---- */}
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="font-black leading-[0.95] tracking-tight">
              <span
                className="stg-fade block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white/90"
                style={{ animationDelay: "0.1s" }}
              >
                {t.heading}
              </span>
              <span
                className="stg-fade block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mt-2"
                style={{
                  animationDelay: "0.25s",
                  backgroundImage:
                    "linear-gradient(90deg, #3b82f6, #8b5cf6, #f59e0b, #14b8a6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.headingLine2}
              </span>
            </h1>

            {/* Date & venue */}
            <div
              className="stg-fade mt-6 flex items-center justify-center gap-4 text-xs uppercase"
              style={{
                animationDelay: "0.35s",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              <span className="flex items-center gap-1.5">
                <Calendar size={12} style={{ opacity: 0.5 }} />
                {t.date}
              </span>
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.15)" }}
              />
              <span className="flex items-center gap-1.5">
                <MapPin size={12} style={{ opacity: 0.5 }} />
                {t.venue}
              </span>
            </div>

            <p
              className="stg-fade mt-4 text-base max-w-lg mx-auto leading-relaxed"
              style={{
                animationDelay: "0.45s",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              {t.tagline}
            </p>

            {/* CTAs */}
            <div
              className="stg-fade mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.55s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  borderRadius: 10,
                  boxShadow:
                    "0 4px 25px rgba(139,92,246,0.3)",
                  letterSpacing: "0.08em",
                }}
              >
                {t.ctaPrimary}
                <ArrowRight
                  size={16}
                  className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`}
                />
              </a>
              <a
                href="#"
                className="px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all hover:bg-white/5"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 10,
                  letterSpacing: "0.08em",
                }}
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* ---- Featured Speakers label ---- */}
          <p
            className="stg-fade text-center text-[10px] font-bold uppercase mb-10"
            style={{
              animationDelay: "0.65s",
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            {t.speakersLabel}
          </p>

          {/* ---- Speakers with spotlights ---- */}
          <div className="flex items-start justify-center gap-6 sm:gap-10 md:gap-14 flex-wrap">
            {t.speakers.map((speaker, i) => {
              const color = SPOTLIGHT_COLORS[i % SPOTLIGHT_COLORS.length];
              return (
                <div
                  key={i}
                  className="stg-fade relative text-center"
                  style={{
                    animationDelay: `${0.75 + i * 0.15}s`,
                    width: "clamp(100px, 18vw, 160px)",
                  }}
                >
                  {/* Spotlight beam from top */}
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      top: "-180px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 20,
                      height: 260,
                      background: `linear-gradient(180deg, ${color.main}30 0%, ${color.main}08 70%, transparent 100%)`,
                      clipPath:
                        "polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)",
                      animation: "spotlightPulse 4s ease-in-out infinite",
                      animationDelay: `${i * 0.6}s`,
                    }}
                  />

                  {/* Wider glow cone behind */}
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      top: "-120px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 80,
                      height: 220,
                      background: `radial-gradient(ellipse at top, ${color.main}10 0%, transparent 70%)`,
                      animation: "spotlightPulse 4s ease-in-out infinite",
                      animationDelay: `${i * 0.6 + 0.3}s`,
                    }}
                  />

                  {/* Avatar with float animation */}
                  <div
                    className="stg-float relative mx-auto mb-4"
                    style={{
                      animationDelay: `${i * 0.7}s`,
                      animationDuration: `${3.5 + i * 0.5}s`,
                    }}
                  >
                    {/* Outer ring glow */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(from ${i * 90}deg, ${color.main}40, transparent, ${color.main}20, transparent, ${color.main}40)`,
                        animation: "ringGlow 3s ease-in-out infinite",
                        animationDelay: `${i * 0.5}s`,
                        color: color.main,
                        padding: 3,
                        borderRadius: "50%",
                      }}
                    >
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center"
                        style={{
                          width: "clamp(64px, 12vw, 88px)",
                          height: "clamp(64px, 12vw, 88px)",
                          background: `linear-gradient(135deg, #1a1a1a, #0d0d0d)`,
                          border: `2px solid ${color.border}`,
                        }}
                      >
                        <span
                          className="text-lg sm:text-xl font-bold"
                          style={{ color: color.main }}
                        >
                          {speaker.initials}
                        </span>
                      </div>
                    </div>

                    {/* Light pool beneath avatar */}
                    <div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                      style={{
                        width: "80%",
                        height: 6,
                        borderRadius: "50%",
                        background: `radial-gradient(ellipse, ${color.main}15, transparent)`,
                        filter: "blur(3px)",
                      }}
                    />
                  </div>

                  {/* Speaker info */}
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {speaker.name}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: `${color.main}80` }}
                  >
                    {speaker.role}
                  </div>

                  {/* Floor reflection of spotlight */}
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      bottom: "-50px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 60,
                      height: 40,
                      borderRadius: "50%",
                      background: `radial-gradient(ellipse, ${color.main}08, transparent)`,
                      filter: "blur(8px)",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* ---- Stats strip ---- */}
          <div
            className="stg-fade mt-20 flex items-center justify-center gap-10 sm:gap-14 pt-8"
            style={{
              animationDelay: "1.4s",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {t.stats.map((stat, i) => {
              const color =
                SPOTLIGHT_COLORS[i % SPOTLIGHT_COLORS.length].main;
              return (
                <div key={i} className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-black"
                    style={{ color }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-1 uppercase font-medium"
                    style={{
                      letterSpacing: "0.12em",
                      color: "rgba(255,255,255,0.25)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---- Ambient top-edge stage lights (small flares) ---- */}
        {SPOTLIGHT_COLORS.map((color, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              top: 0,
              left: `${15 + i * 22}%`,
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: color.main,
              boxShadow: `0 0 15px ${color.main}, 0 0 40px ${color.main}60`,
              animation: "lightFlare 3s ease-in-out infinite",
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </section>
    </>
  );
}
