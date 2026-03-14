"use client";

import { ArrowRight } from "lucide-react";
import { useRef, useCallback, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    strip1:
      "REACT \u2022 NEXT.JS \u2022 TYPESCRIPT \u2022 TAILWIND \u2022 FIGMA \u2022 NODE.JS \u2022 PYTHON \u2022 AWS \u2022 ",
    strip2: "JORDAN BLAKE \u2014 ",
    strip3:
      "AVAILABLE FOR HIRE \u2726 FREELANCE DESIGNER \u2726 CREATIVE DIRECTOR \u2726 BRAND STRATEGIST \u2726 ",
    strip4: "DESIGN \u2022 DEVELOP \u2022 DELIVER \u2022 ",
    strip5:
      "NEW YORK \u2022 LONDON \u2022 TOKYO \u2022 BERLIN \u2022 DUBAI \u2022 SYDNEY \u2022 ",
    badge: "Open to new projects",
    cta1: "Let\u2019s Work",
    cta2: "Portfolio",
    scroll: "Scroll down to explore",
  },
  ar: {
    strip1:
      "REACT \u2022 NEXT.JS \u2022 TYPESCRIPT \u2022 TAILWIND \u2022 FIGMA \u2022 NODE.JS \u2022 PYTHON \u2022 AWS \u2022 ",
    strip2: "\u062C\u0648\u0631\u062F\u0627\u0646 \u0628\u0644\u064A\u0643 \u2014 ",
    strip3:
      "\u0645\u062A\u0627\u062D \u0644\u0644\u062A\u0648\u0638\u064A\u0641 \u2726 \u0645\u0635\u0645\u0645 \u0645\u0633\u062A\u0642\u0644 \u2726 \u0645\u062F\u064A\u0631 \u0625\u0628\u062F\u0627\u0639\u064A \u2726 ",
    strip4:
      "\u0635\u0645\u0651\u0645 \u2022 \u0637\u0648\u0651\u0631 \u2022 \u0623\u0646\u062C\u0632 \u2022 ",
    strip5:
      "NEW YORK \u2022 LONDON \u2022 TOKYO \u2022 BERLIN \u2022 DUBAI \u2022 SYDNEY \u2022 ",
    badge: "\u0645\u062A\u0627\u062D \u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u062C\u062F\u064A\u062F\u0629",
    cta1: "\u0644\u0646\u0639\u0645\u0644 \u0645\u0639\u0627\u064B",
    cta2: "\u0627\u0644\u0623\u0639\u0645\u0627\u0644",
    scroll: "\u0645\u0631\u0631 \u0644\u0644\u0623\u0633\u0641\u0644 \u0644\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641",
  },
};

function MarqueeStrip({
  children,
  direction,
  speed,
  className,
  rotate,
}: {
  children: React.ReactNode;
  direction: "left" | "right";
  speed: number;
  className?: string;
  rotate: string;
}) {
  const stripRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!stripRef.current) return;
      const inner = stripRef.current.querySelector(".hero16-marquee-inner");
      if (!inner) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const startX = direction === "left" ? 0 : -50;
      const endX = direction === "left" ? -50 : 0;

      gsap.fromTo(
        inner,
        { xPercent: startX },
        {
          xPercent: endX,
          duration: speed,
          ease: "none",
          repeat: -1,
        }
      );
    },
    { scope: stripRef }
  );

  return (
    <div
      ref={stripRef}
      className={`w-[120%] -ml-[10%] overflow-hidden ${className ?? ""}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <div className="hero16-marquee-inner flex whitespace-nowrap">
        <div className="flex-shrink-0">{children}</div>
        <div className="flex-shrink-0">{children}</div>
      </div>
    </div>
  );
}

export function Hero16({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";
  const rotation = isAr ? "3deg" : "-3deg";
  const containerRef = useRef<HTMLDivElement>(null);
  const [particlesReady, setParticlesReady] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

  // Repeat content enough times to fill the strip
  const repeat = (text: string, times: number) =>
    Array.from({ length: times }, () => text).join("");

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Card pop animation
      gsap.from(".hero16-card", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      // Dot pulse animation
      gsap.to(".hero16-dot", {
        scale: 1.4,
        duration: 1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center"
      style={{ fontFamily: fontBody }}
    >
      <style>{`
        .hero16-outline-text {
          -webkit-text-stroke: 2px white;
          color: transparent;
        }
      `}</style>

      {/* Particles Background */}
      <Particles
        id="hero16-particles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true } },
            color: {
              value: ["#f43f5e", "#ec4899", "#d946ef", "#f472b6"],
            },
            opacity: {
              value: { min: 0.15, max: 0.45 },
              animation: { enable: true, speed: 1, sync: false },
            },
            size: {
              value: { min: 1.5, max: 4 },
              animation: { enable: true, speed: 2, sync: false },
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none" as const,
              outModes: { default: "out" as const },
              path: {
                enable: false,
              },
            },
            links: {
              enable: true,
              distance: 100,
              color: "#f43f5e",
              opacity: 0.12,
              width: 1,
            },
            shape: { type: "circle" },
          },
          detectRetina: true,
        }}
      />

      {/* Strip 1 — Top, small, zinc-900, scrolls left */}
      <div className="absolute top-[10%] left-0 right-0 z-[1]">
        <MarqueeStrip
          direction="left"
          speed={30}
          rotate={rotation}
          className="hero16-marquee-strip"
        >
          <span
            className="text-sm text-white/80 px-4 py-2 inline-block bg-[#18181b]"
            style={{ fontFamily: fontBody }}
          >
            {repeat(t.strip1, 8)}
          </span>
        </MarqueeStrip>
      </div>

      {/* Strip 2 — Upper-center, LARGE, outline text, scrolls right */}
      <div className="absolute top-[25%] left-0 right-0 z-[1]">
        <MarqueeStrip
          direction="right"
          speed={20}
          rotate={rotation}
          className="hero16-marquee-strip"
        >
          <span
            className="hero16-outline-text text-7xl sm:text-8xl lg:text-9xl font-black uppercase px-4 inline-block"
            style={{ fontFamily: fontHeading }}
          >
            {repeat(t.strip2, 6)}
          </span>
        </MarqueeStrip>
      </div>

      {/* Strip 3 — Center, medium, rose-500, scrolls left */}
      <div className="absolute top-[46%] left-0 right-0 z-[1]">
        <MarqueeStrip
          direction="left"
          speed={25}
          rotate={rotation}
          className="hero16-marquee-strip"
        >
          <span
            className="text-xl font-bold text-white px-4 py-3 inline-block bg-[#f43f5e]"
            style={{ fontFamily: fontBody }}
          >
            {repeat(t.strip3, 6)}
          </span>
        </MarqueeStrip>
      </div>

      {/* Strip 4 — Lower-center, LARGE, white filled, scrolls left */}
      <div className="absolute top-[62%] left-0 right-0 z-[1]">
        <MarqueeStrip
          direction="left"
          speed={22}
          rotate={rotation}
          className="hero16-marquee-strip"
        >
          <span
            className="text-6xl sm:text-7xl font-black text-white uppercase px-4 inline-block"
            style={{ fontFamily: fontHeading }}
          >
            {repeat(t.strip4, 8)}
          </span>
        </MarqueeStrip>
      </div>

      {/* Strip 5 — Bottom, small, zinc-900, gray text, scrolls right */}
      <div className="absolute top-[82%] left-0 right-0 z-[1]">
        <MarqueeStrip
          direction="right"
          speed={35}
          rotate={rotation}
          className="hero16-marquee-strip"
        >
          <span
            className="text-sm text-gray-500 px-4 py-2 inline-block bg-[#18181b]"
            style={{ fontFamily: fontBody }}
          >
            {repeat(t.strip5, 8)}
          </span>
        </MarqueeStrip>
      </div>

      {/* Center Content Overlay */}
      <div
        className="hero16-card relative z-10 max-w-sm w-full mx-4 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-6 text-center"
        style={{ fontFamily: fontBody }}
      >
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="hero16-dot w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
          <span className="text-sm text-white/70">{t.badge}</span>
        </div>

        {/* CTAs */}
        <div
          className={`flex items-center justify-center gap-3 mb-4 ${isAr ? "flex-row-reverse" : ""}`}
        >
          <button
            className="cursor-pointer flex items-center gap-2 bg-[#f43f5e] hover:bg-[#e11d48] text-white font-semibold px-5 py-2.5 rounded-xl transition-colors duration-300 text-sm"
            style={{ fontFamily: fontBody }}
          >
            {t.cta1}
            <ArrowRight
              className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`}
            />
          </button>
          <button
            className="cursor-pointer border border-white/20 hover:border-white/40 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors duration-300 text-sm"
            style={{ fontFamily: fontBody }}
          >
            {t.cta2}
          </button>
        </div>

        {/* Scroll hint */}
        <p className="text-xs text-white/40">{t.scroll}</p>
      </div>
    </section>
  );
}
