"use client";

import { ArrowRight, Camera, MapPin } from "lucide-react";

const content = {
  en: {
    badge: "Through My Lens",
    heading: ["I Capture Ideas", "& Make Them Real"],
    sub: "Freelance designer & photographer turning concepts into captivating visuals. Every project is a snapshot worth keeping.",
    location: "Based in Barcelona, Spain",
    cta1: "View Gallery",
    cta2: "Let's Create",
    specialties: ["Brand Design", "Web", "Photography"],
    specializingIn: "Specializing in:",
  },
  ar: {
    badge: "من خلال عدستي",
    heading: ["ألتقط الأفكار", "وأجعلها حقيقة"],
    sub: "مصمم ومصور مستقل أحوّل المفاهيم إلى مرئيات آسرة. كل مشروع هو لقطة تستحق الحفظ.",
    location: "مقيم في برشلونة، إسبانيا",
    cta1: "عرض المعرض",
    cta2: "لنبدع معاً",
    specialties: ["تصميم العلامات", "ويب", "تصوير"],
    specializingIn: "متخصص في:",
  },
};

const polaroids = [
  {
    label: { en: "Beach Resort Site", ar: "موقع منتجع شاطئي" },
    gradient: "from-[#f97316] to-[#fb923c]",
    top: "6%",
    left: "3%",
    rotation: -6,
    width: 160,
    pinColor: "#f97316",
    delay: 0,
  },
  {
    label: { en: "Coffee Brand", ar: "علامة قهوة" },
    gradient: "from-[#ec4899] to-[#f472b6]",
    top: "14%",
    left: "78%",
    rotation: 5,
    width: 150,
    pinColor: "#ec4899",
    delay: 0.12,
  },
  {
    label: { en: "Yoga App", ar: "تطبيق يوغا" },
    gradient: "from-[#8b5cf6] to-[#a78bfa]",
    top: "52%",
    left: "1%",
    rotation: 4,
    width: 155,
    pinColor: "#8b5cf6",
    delay: 0.24,
  },
  {
    label: { en: "Tech Startup", ar: "شركة تقنية" },
    gradient: "from-[#06b6d4] to-[#22d3ee]",
    top: "58%",
    left: "82%",
    rotation: -7,
    width: 165,
    pinColor: "#06b6d4",
    delay: 0.36,
  },
  {
    label: { en: "Fashion Blog", ar: "مدونة أزياء" },
    gradient: "from-[#10b981] to-[#34d399]",
    top: "2%",
    left: "22%",
    rotation: 8,
    width: 145,
    pinColor: "#10b981",
    delay: 0.48,
  },
  {
    label: { en: "Music Festival", ar: "مهرجان موسيقي" },
    gradient: "from-[#f59e0b] to-[#fbbf24]",
    top: "8%",
    left: "60%",
    rotation: -4,
    width: 170,
    pinColor: "#f59e0b",
    delay: 0.6,
  },
  {
    label: { en: "Pet Store", ar: "متجر حيوانات" },
    gradient: "from-[#f97316] to-[#fb923c]",
    top: "55%",
    left: "18%",
    rotation: -3,
    width: 148,
    pinColor: "#fb923c",
    delay: 0.72,
  },
  {
    label: { en: "Bakery Logo", ar: "شعار مخبز" },
    gradient: "from-[#ec4899] to-[#f472b6]",
    top: "50%",
    left: "68%",
    rotation: 6,
    width: 158,
    pinColor: "#a78bfa",
    delay: 0.84,
  },
];

export function Hero13({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes polaroidDrop {
          0% {
            opacity: 0;
            transform: translateY(-60px) rotate(0deg) scale(0.9);
          }
          60% {
            opacity: 1;
            transform: translateY(8px) rotate(var(--final-rotation)) scale(1.02);
          }
          80% {
            transform: translateY(-3px) rotate(var(--final-rotation)) scale(0.99);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(var(--final-rotation)) scale(1);
          }
        }

        @keyframes pinWiggle {
          0%, 100% { transform: translateX(-50%) rotate(0deg); }
          25% { transform: translateX(-50%) rotate(5deg); }
          75% { transform: translateX(-50%) rotate(-5deg); }
        }

        @keyframes contentFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes photoShine {
          0%, 100% {
            background-position: -200% 0;
          }
          50% {
            background-position: 200% 0;
          }
        }

        .polaroid-card {
          animation: polaroidDrop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .pin-element {
          animation: pinWiggle 3s ease-in-out infinite;
        }

        .content-panel {
          animation: contentFade 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .photo-shine::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255, 255, 255, 0.25) 45%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.25) 55%,
            transparent 60%
          );
          background-size: 200% 100%;
          animation: photoShine 5s ease-in-out infinite;
          border-radius: 2px;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .polaroid-card {
            animation: none;
            opacity: 1;
          }
          .pin-element {
            animation: none;
          }
          .content-panel {
            animation: none;
            opacity: 1;
          }
          .photo-shine::after {
            animation: none;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundColor: "#f9f6f2",
          fontFamily: fontBody,
        }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Warm dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c4a882 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.03,
          }}
        />

        {/* Polaroid Cards */}
        {polaroids.map((p, i) => {
          const photoSize = p.width - 24;
          return (
            <div
              key={i}
              className="polaroid-card absolute hidden md:block cursor-pointer"
              style={
                {
                  top: p.top,
                  left: p.left,
                  width: p.width,
                  "--final-rotation": `${p.rotation}deg`,
                  animationDelay: `${p.delay}s`,
                  zIndex: 1,
                } as React.CSSProperties
              }
            >
              {/* Card body */}
              <div
                className="bg-white rounded-sm relative"
                style={{
                  padding: "12px 12px 40px 12px",
                  boxShadow:
                    "0 4px 14px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                {/* Pin */}
                <div
                  className="pin-element absolute -top-2.5 left-1/2"
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: p.pinColor,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                    zIndex: 2,
                    animationDelay: `${p.delay + 0.5}s`,
                  }}
                />

                {/* Photo placeholder */}
                <div
                  className={`photo-shine relative bg-gradient-to-br ${p.gradient} rounded-sm`}
                  style={{
                    width: photoSize,
                    height: photoSize,
                  }}
                />

                {/* Label */}
                <p
                  className="text-center mt-2"
                  style={{
                    color: "#3d2c1e",
                    fontSize: 11,
                    fontStyle: "italic",
                    fontFamily: fontBody,
                    lineHeight: 1.3,
                  }}
                >
                  {p.label[language]}
                </p>
              </div>
            </div>
          );
        })}

        {/* Center Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
          <div
            className="content-panel max-w-2xl w-full text-center rounded-2xl"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(12px)",
              padding: "48px 36px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            }}
          >
            {/* Badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "rgba(249, 115, 22, 0.1)",
                  color: "#f97316",
                  fontFamily: fontBody,
                }}
              >
                <Camera className="w-4 h-4" />
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-5xl sm:text-6xl font-bold leading-tight mb-6"
              style={{
                color: "#3d2c1e",
                fontFamily: fontHeading,
              }}
            >
              {t.heading[0]}
              <br />
              <span style={{ color: "#f97316" }}>{t.heading[1]}</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-lg mb-6 max-w-lg mx-auto leading-relaxed"
              style={{
                color: "#6b5544",
                fontFamily: fontBody,
              }}
            >
              {t.sub}
            </p>

            {/* Location */}
            <div
              className="flex items-center justify-center gap-1.5 mb-8"
              style={{ color: "#8b7355" }}
            >
              <MapPin className="w-4 h-4" />
              <span
                className="text-sm"
                style={{ fontFamily: fontBody }}
              >
                {t.location}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex items-center justify-center gap-3 flex-wrap mb-8">
              <button
                className="cursor-pointer inline-flex items-center gap-2 px-7 py-3 rounded-full text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: "#f97316",
                  fontFamily: fontBody,
                  boxShadow: "0 4px 14px rgba(249, 115, 22, 0.3)",
                }}
              >
                {t.cta1}
                <ArrowRight
                  className="w-4 h-4"
                  style={{
                    transform: isAr ? "scaleX(-1)" : undefined,
                  }}
                />
              </button>
              <button
                className="cursor-pointer inline-flex items-center gap-2 px-7 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  color: "#3d2c1e",
                  border: "2px solid #d4c4b0",
                  fontFamily: fontBody,
                  backgroundColor: "transparent",
                }}
              >
                {t.cta2}
              </button>
            </div>

            {/* Specialties */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span
                className="text-sm"
                style={{
                  color: "#8b7355",
                  fontFamily: fontBody,
                }}
              >
                {t.specializingIn}
              </span>
              {t.specialties.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(249, 115, 22, 0.08)",
                    color: "#c2610f",
                    fontFamily: fontBody,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
