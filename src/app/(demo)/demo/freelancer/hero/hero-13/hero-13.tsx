"use client";

import { useRef, useCallback, useState } from "react";
import { ArrowRight, Camera, MapPin } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

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
  const containerRef = useRef<HTMLDivElement>(null);

  const [particlesReady, setParticlesReady] = useState(false);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Polaroid drop animation
      gsap.from(".polaroid-card", {
        y: -60,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: "back.out(1.7)",
        stagger: 0.12,
      });

      // After polaroids land, rotate each to its final rotation
      const cards = containerRef.current?.querySelectorAll(".polaroid-card");
      cards?.forEach((card) => {
        const rotation = (card as HTMLElement).dataset.rotation;
        gsap.to(card, {
          rotation: rotation ? parseFloat(rotation) : 0,
          duration: 0.7,
          ease: "back.out(1.7)",
          delay: parseFloat((card as HTMLElement).dataset.delay || "0"),
        });
      });

      // Pin wiggle — continuous
      gsap.to(".pin-element", {
        rotation: 5,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.1,
      });

      // Content panel fade in
      gsap.from(".content-panel", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4,
      });

      // Photo shine effect — continuous
      gsap.fromTo(
        ".photo-shine-overlay",
        { backgroundPosition: "-200% 0" },
        {
          backgroundPosition: "200% 0",
          duration: 5,
          ease: "sine.inOut",
          repeat: -1,
          stagger: 0.3,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#f9f6f2",
        fontFamily: fontBody,
      }}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Particles background */}
      <Particles
        id="hero13-particles"
        className="absolute inset-0 pointer-events-none"
        style={{ position: "absolute", zIndex: 0 }}
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 40, density: { enable: true } },
            color: { value: ["#c4a882", "#d4b896", "#e8d5b7", "#f5e6d0"] },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.15, max: 0.4 },
              animation: { enable: true, speed: 0.5, sync: false },
            },
            size: {
              value: { min: 2, max: 5 },
              animation: { enable: true, speed: 1, sync: false },
            },
            move: {
              enable: true,
              speed: 0.4,
              direction: "none" as const,
              outModes: { default: "out" as const },
              drift: 0.2,
            },
          },
          detectRetina: true,
        }}
      />

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
            data-rotation={p.rotation}
            data-delay={p.delay}
            style={{
              top: p.top,
              left: p.left,
              width: p.width,
              zIndex: 1,
              opacity: 0,
            }}
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
                  transform: "translateX(-50%)",
                }}
              />

              {/* Photo placeholder */}
              <div
                className={`relative bg-gradient-to-br ${p.gradient} rounded-sm`}
                style={{
                  width: photoSize,
                  height: photoSize,
                  overflow: "hidden",
                }}
              >
                {/* Shine overlay */}
                <div
                  className="photo-shine-overlay absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.25) 55%, transparent 60%)",
                    backgroundSize: "200% 100%",
                    borderRadius: "2px",
                  }}
                />
              </div>

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
  );
}
