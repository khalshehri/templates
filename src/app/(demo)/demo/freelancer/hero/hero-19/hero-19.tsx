"use client";

import { useRef, useCallback, useState } from "react";
import { ArrowRight, Briefcase, Paintbrush } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    name: "SARAH CHEN",
    leftLabel: "THE PROFESSIONAL",
    leftStat: "10+ Years of Experience",
    leftSkills: ["Strategy", "Architecture", "Performance"],
    leftCta: "View Resume",
    rightLabel: "THE CREATIVE",
    rightStat: "Award-Winning Design",
    rightSkills: ["Brand Identity", "Motion Design", "UI/UX"],
    rightCta: "See Portfolio",
    bottomQuote:
      "The best of both worlds — hire one freelancer who does it all.",
    bottomCta: "Let's create something extraordinary",
  },
  ar: {
    name: "سارة تشين",
    leftLabel: "المحترفة",
    leftStat: "10+ سنوات خبرة",
    leftSkills: ["الاستراتيجية", "الهندسة المعمارية", "الأداء"],
    leftCta: "عرض السيرة",
    rightLabel: "المبدعة",
    rightStat: "تصميم حائز على جوائز",
    rightSkills: ["هوية العلامة", "تصميم الحركة", "واجهة المستخدم"],
    rightCta: "شاهد الأعمال",
    bottomQuote:
      "أفضل ما في العالمين — وظّف مستقلاً واحداً يفعل كل شيء.",
    bottomCta: "لنصنع شيئاً استثنائياً",
  },
};

export function Hero19({ language }: { language: "en" | "ar" }) {
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

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ease = "expo.out";

    gsap.from(".hero19-left-half", {
      xPercent: -100,
      duration: 0.8,
      ease,
    });

    gsap.from(".hero19-right-half", {
      xPercent: 100,
      duration: 0.8,
      ease,
    });

    gsap.from(".hero19-name", {
      opacity: 0,
      scale: 0.9,
      duration: 0.7,
      delay: 0.6,
      ease,
    });

    gsap.to(".hero19-divider", {
      backgroundPosition: "0% 200%",
      duration: 3,
      repeat: -1,
      ease: "none",
    });

    gsap.from(".hero19-content-1", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.9,
      ease,
      stagger: 0.05,
    });

    gsap.from(".hero19-content-2", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 1.1,
      ease,
      stagger: 0.05,
    });

    gsap.from(".hero19-content-3", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 1.3,
      ease,
      stagger: 0.05,
    });

    gsap.from(".hero19-bottom", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 1.5,
      ease,
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
      style={{ fontFamily: fontBody }}
    >
      {/* Particles Background */}
      <Particles
        id="hero19-particles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, width: 1920, height: 1080 } },
            color: {
              value: ["#7c3aed", "#06b6d4"],
            },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.2, max: 0.6 },
              animation: { enable: true, speed: 0.8, sync: false },
            },
            size: {
              value: { min: 2, max: 5 },
              animation: { enable: true, speed: 1.5, sync: false },
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none" as const,
              outModes: { default: "out" as const },
            },
            links: {
              enable: true,
              distance: 120,
              color: "#7c3aed",
              opacity: 0.15,
              width: 1,
            },
          },
          detectRetina: true,
        }}
      />

      {/* Left Half — Professional / Black */}
      <div
        className="hero19-left-half absolute top-0 bottom-0 w-1/2"
        style={{
          left: isAr ? "auto" : 0,
          right: isAr ? 0 : "auto",
          backgroundColor: "#000000",
        }}
      />

      {/* Right Half — Creative / Gradient */}
      <div
        className="hero19-right-half absolute top-0 bottom-0 w-1/2"
        style={{
          right: isAr ? "auto" : 0,
          left: isAr ? 0 : "auto",
          background:
            "linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f97316 100%)",
        }}
      />

      {/* Animated Divider */}
      <div
        className="hero19-divider absolute top-0 bottom-0 z-10"
        style={{
          width: "2px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundSize: "100% 200%",
          background:
            "linear-gradient(180deg, #7c3aed, #ec4899, #f97316, #7c3aed)",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Massive Split Name */}
        <div className="hero19-name relative w-full flex items-center justify-center pointer-events-none select-none"
          style={{ marginTop: "15vh" }}
        >
          {/* Left-clipped name — outline only */}
          <span
            className="absolute text-7xl sm:text-8xl lg:text-9xl font-black uppercase whitespace-nowrap"
            style={{
              fontFamily: fontHeading,
              color: "transparent",
              WebkitTextStroke: "2px white",
              clipPath: isAr
                ? "inset(0 0 0 50%)"
                : "inset(0 50% 0 0)",
              letterSpacing: isAr ? "0" : "0.04em",
            }}
            aria-hidden="true"
          >
            {t.name}
          </span>
          {/* Right-clipped name — solid white */}
          <span
            className="absolute text-7xl sm:text-8xl lg:text-9xl font-black uppercase whitespace-nowrap"
            style={{
              fontFamily: fontHeading,
              color: "white",
              clipPath: isAr
                ? "inset(0 50% 0 0)"
                : "inset(0 0 0 50%)",
              letterSpacing: isAr ? "0" : "0.04em",
            }}
            aria-hidden="true"
          >
            {t.name}
          </span>
          {/* Accessible hidden text */}
          <span className="sr-only">{t.name}</span>
          {/* Spacer so the layout reserves height */}
          <span
            className="invisible text-7xl sm:text-8xl lg:text-9xl font-black uppercase whitespace-nowrap"
            style={{
              fontFamily: fontHeading,
              letterSpacing: isAr ? "0" : "0.04em",
            }}
          >
            {t.name}
          </span>
        </div>

        {/* Two-column content */}
        <div className="flex-1 grid grid-cols-2 gap-0 px-6 sm:px-12 lg:px-20 pb-32 pt-12">
          {/* Left Column — Professional */}
          <div
            className="flex flex-col justify-center pr-8 lg:pr-16"
            style={{ direction: isAr ? "rtl" : "ltr" }}
          >
            <div className="hero19-content-1 flex items-center gap-3 mb-4">
              <Briefcase className="w-5 h-5 text-white/70" />
              <span
                className="text-xs sm:text-sm tracking-[0.2em] uppercase text-white/60"
                style={{ fontFamily: fontHeading }}
              >
                {t.leftLabel}
              </span>
            </div>

            <p
              className="hero19-content-1 text-white/90 text-lg sm:text-xl font-semibold mb-6"
              style={{ fontFamily: fontHeading }}
            >
              {t.leftStat}
            </p>

            <ul className="hero19-content-2 space-y-3 mb-8">
              {t.leftSkills.map((skill, i) => (
                <li
                  key={i}
                  className="text-white/50 text-sm sm:text-base flex items-center gap-2"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"
                  />
                  {skill}
                </li>
              ))}
            </ul>

            <a
              href="#resume"
              className="hero19-content-3 inline-flex items-center gap-2 px-6 py-3 border border-white/40 rounded-full text-white text-sm hover:bg-white/10 transition-colors duration-300 cursor-pointer w-fit"
            >
              {t.leftCta}
              <ArrowRight className="w-4 h-4" style={{ transform: isAr ? "scaleX(-1)" : "none" }} />
            </a>
          </div>

          {/* Right Column — Creative */}
          <div
            className="flex flex-col justify-center pl-8 lg:pl-16"
            style={{ direction: isAr ? "rtl" : "ltr" }}
          >
            <div className="hero19-content-1 flex items-center gap-3 mb-4">
              <Paintbrush className="w-5 h-5 text-white/70" />
              <span
                className="text-xs sm:text-sm tracking-[0.2em] uppercase text-white/60"
                style={{ fontFamily: fontHeading }}
              >
                {t.rightLabel}
              </span>
            </div>

            <p
              className="hero19-content-1 text-white/90 text-lg sm:text-xl font-semibold mb-6"
              style={{ fontFamily: fontHeading }}
            >
              {t.rightStat}
            </p>

            <ul className="hero19-content-2 space-y-3 mb-8">
              {t.rightSkills.map((skill, i) => (
                <li
                  key={i}
                  className="text-white/50 text-sm sm:text-base flex items-center gap-2"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"
                  />
                  {skill}
                </li>
              ))}
            </ul>

            <a
              href="#portfolio"
              className="hero19-content-3 inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-white/90 transition-colors duration-300 cursor-pointer w-fit"
            >
              {t.rightCta}
              <ArrowRight className="w-4 h-4" style={{ transform: isAr ? "scaleX(-1)" : "none" }} />
            </a>
          </div>
        </div>

        {/* Bottom Center Glass Card */}
        <div className="hero19-bottom absolute bottom-8 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-lg">
          <div
            className="backdrop-blur-xl rounded-2xl px-6 py-5 text-center border border-white/10"
            style={{
              background: "rgba(255,255,255,0.08)",
            }}
          >
            <p
              className="text-white/80 text-sm sm:text-base mb-3"
              style={{ fontFamily: fontBody, direction: isAr ? "rtl" : "ltr" }}
            >
              {t.bottomQuote}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white font-medium text-sm hover:underline cursor-pointer"
              style={{ fontFamily: fontHeading }}
            >
              {t.bottomCta}
              <ArrowRight className="w-4 h-4" style={{ transform: isAr ? "scaleX(-1)" : "none" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
