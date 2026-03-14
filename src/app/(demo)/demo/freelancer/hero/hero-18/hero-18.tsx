"use client";

import { useRef, useCallback, useState } from "react";
import { ArrowRight, Globe, MapPin } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    badge: "Working Globally",
    headingLine1: "Clients in",
    headingLine2: "8 Countries",
    sub: "Distance is never a barrier. I collaborate with clients across continents and time zones with seamless communication and on-time delivery, every single time.",
    location: "Based in Dubai, UAE",
    cta1: "Work With Me",
    cta2: "View Clients",
    stats: [
      { value: "8", label: "Countries" },
      { value: "3", label: "Continents" },
      { value: "200+", label: "Projects" },
      { value: "0", label: "Time Zone Issues" },
    ],
    clients: [
      { city: "New York", color: "#3b82f6" },
      { city: "San Francisco", color: "#3b82f6" },
      { city: "London", color: "#3b82f6" },
      { city: "Berlin", color: "#3b82f6" },
      { city: "Dubai", color: "#f59e0b" },
      { city: "Tokyo", color: "#3b82f6" },
      { city: "Sydney", color: "#3b82f6" },
      { city: "S\u00e3o Paulo", color: "#3b82f6" },
    ],
  },
  ar: {
    badge: "\u0623\u0639\u0645\u0644 \u0639\u0627\u0644\u0645\u064a\u0627\u064b",
    headingLine1: "\u0639\u0645\u0644\u0627\u0621 \u0641\u064a",
    headingLine2: "8 \u062f\u0648\u0644",
    sub: "\u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u064a\u0633\u062a \u0639\u0627\u0626\u0642\u0627\u064b. \u0623\u062a\u0639\u0627\u0648\u0646 \u0645\u0639 \u0639\u0645\u0644\u0627\u0621 \u0639\u0628\u0631 \u0627\u0644\u0642\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0632\u0645\u0646\u064a\u0629 \u0628\u062a\u0648\u0627\u0635\u0644 \u0633\u0644\u0633 \u0648\u062a\u0633\u0644\u064a\u0645 \u0641\u064a \u0627\u0644\u0645\u0648\u0639\u062f \u062f\u0627\u0626\u0645\u0627\u064b.",
    location: "\u0645\u0642\u064a\u0645 \u0641\u064a \u062f\u0628\u064a\u060c \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a",
    cta1: "\u0627\u0639\u0645\u0644 \u0645\u0639\u064a",
    cta2: "\u0639\u0631\u0636 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
    stats: [
      { value: "8", label: "\u062f\u0648\u0644" },
      { value: "3", label: "\u0642\u0627\u0631\u0627\u062a" },
      { value: "+200", label: "\u0645\u0634\u0631\u0648\u0639" },
      { value: "0", label: "\u0645\u0634\u0627\u0643\u0644 \u062a\u0648\u0642\u064a\u062a" },
    ],
    clients: [
      { city: "\u0646\u064a\u0648\u064a\u0648\u0631\u0643", color: "#3b82f6" },
      { city: "\u0633\u0627\u0646 \u0641\u0631\u0627\u0646\u0633\u064a\u0633\u0643\u0648", color: "#3b82f6" },
      { city: "\u0644\u0646\u062f\u0646", color: "#3b82f6" },
      { city: "\u0628\u0631\u0644\u064a\u0646", color: "#3b82f6" },
      { city: "\u062f\u0628\u064a", color: "#f59e0b" },
      { city: "\u0637\u0648\u0643\u064a\u0648", color: "#3b82f6" },
      { city: "\u0633\u064a\u062f\u0646\u064a", color: "#3b82f6" },
      { city: "\u0633\u0627\u0648 \u0628\u0627\u0648\u0644\u0648", color: "#3b82f6" },
    ],
  },
};

/* Pin positions on a 800x450 viewBox (approximate geographic mapping) */
const pins = [
  { id: "new-york", x: 230, y: 155, label: "New York" },
  { id: "san-francisco", x: 145, y: 165, label: "San Francisco" },
  { id: "london", x: 420, y: 125, label: "London" },
  { id: "berlin", x: 450, y: 125, label: "Berlin" },
  { id: "dubai", x: 540, y: 195, label: "Dubai", isHome: true },
  { id: "tokyo", x: 700, y: 155, label: "Tokyo" },
  { id: "sydney", x: 720, y: 340, label: "Sydney" },
  { id: "sao-paulo", x: 280, y: 320, label: "S\u00e3o Paulo" },
];

const homePin = pins.find((p) => p.isHome)!;

export function Hero18({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const containerRef = useRef<HTMLDivElement>(null);
  const [particlesReady, setParticlesReady] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Content fade-in with stagger
      gsap.from(".hero18-content-1", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out", delay: 0.1 });
      gsap.from(".hero18-content-2", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out", delay: 0.25 });
      gsap.from(".hero18-content-3", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out", delay: 0.4 });
      gsap.from(".hero18-content-4", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out", delay: 0.55 });
      gsap.from(".hero18-content-5", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out", delay: 0.7 });
      gsap.from(".hero18-content-6", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out", delay: 0.85 });

      // Map floating animation
      gsap.to(".hero18-map", {
        y: -5,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Pin pulse animation
      gsap.fromTo(
        ".hero18-pin",
        { scale: 1, opacity: 0.7, transformOrigin: "center" },
        {
          scale: 1.6,
          opacity: 1,
          duration: 1.25,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.3,
        }
      );

      // Home pin pulse
      gsap.fromTo(
        ".hero18-home-pin",
        { scale: 1, opacity: 1, transformOrigin: "center" },
        {
          scale: 1.3,
          opacity: 0.9,
          duration: 1.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        }
      );

      // Home ring expanding
      gsap.fromTo(
        ".hero18-home-ring",
        { attr: { r: 5 }, opacity: 0.6 },
        {
          attr: { r: 22 },
          opacity: 0,
          duration: 3,
          ease: "power1.out",
          repeat: -1,
        }
      );

      // Connection lines drawing in
      gsap.fromTo(
        ".hero18-line",
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
          delay: 0.2,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      style={{ background: "#0a0f1a" }}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Particles background */}
      <Particles
        id="hero18-particles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true } },
            color: {
              value: ["#3b82f6", "#2dd4bf", "#60a5fa"],
            },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.1, max: 0.35 },
              animation: { enable: true, speed: 0.3, sync: false },
            },
            size: {
              value: { min: 1, max: 2.5 },
            },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Background gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(59,130,246,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full py-20 ${
            isAr ? "lg:direction-rtl" : ""
          }`}
        >
          {/* Left Content — 45% */}
          <div
            className={`lg:col-span-5 ${isAr ? "lg:order-2" : "lg:order-1"}`}
          >
            {/* Badge */}
            <div className="hero18-content-1 mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(59,130,246,0.1)",
                  color: "#3b82f6",
                  border: "1px solid rgba(59,130,246,0.2)",
                  fontFamily: isAr
                    ? "var(--font-tajawal), sans-serif"
                    : "var(--font-inter), sans-serif",
                }}
              >
                <Globe className="w-4 h-4" />
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="hero18-content-2 mb-6">
              <span
                className="block text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
                style={{
                  fontFamily: isAr
                    ? "var(--font-changa), sans-serif"
                    : "var(--font-inter), sans-serif",
                }}
              >
                {t.headingLine1}
              </span>
              <span
                className="block text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: isAr
                    ? "var(--font-changa), sans-serif"
                    : "var(--font-inter), sans-serif",
                }}
              >
                {t.headingLine2}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="hero18-content-3 text-base lg:text-lg leading-relaxed mb-6"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: isAr
                  ? "var(--font-tajawal), sans-serif"
                  : "var(--font-inter), sans-serif",
                maxWidth: "480px",
              }}
            >
              {t.sub}
            </p>

            {/* Location */}
            <div
              className="hero18-content-3 flex items-center gap-2 mb-8"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <MapPin className="w-4 h-4" style={{ color: "#f59e0b" }} />
              <span
                className="text-sm"
                style={{
                  fontFamily: isAr
                    ? "var(--font-tajawal), sans-serif"
                    : "var(--font-inter), sans-serif",
                }}
              >
                {t.location}
              </span>
            </div>

            {/* Client list */}
            <div className="hero18-content-4 flex flex-wrap gap-3 mb-8">
              {t.clients.map((client, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-xs"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: isAr
                      ? "var(--font-tajawal), sans-serif"
                      : "var(--font-inter), sans-serif",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ background: client.color }}
                  />
                  {client.city}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero18-content-5 flex flex-wrap gap-4 mb-10">
              <button
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                  fontFamily: isAr
                    ? "var(--font-tajawal), sans-serif"
                    : "var(--font-inter), sans-serif",
                }}
              >
                {t.cta1}
                <ArrowRight
                  className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`}
                />
              </button>
              <button
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-white/10"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  fontFamily: isAr
                    ? "var(--font-tajawal), sans-serif"
                    : "var(--font-inter), sans-serif",
                }}
              >
                {t.cta2}
              </button>
            </div>

            {/* Stats */}
            <div className="hero18-content-6 grid grid-cols-4 gap-4">
              {t.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-xl lg:text-2xl font-bold"
                    style={{
                      color: "#3b82f6",
                      fontFamily: isAr
                        ? "var(--font-changa), sans-serif"
                        : "var(--font-inter), sans-serif",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: isAr
                        ? "var(--font-tajawal), sans-serif"
                        : "var(--font-inter), sans-serif",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — World Map — 55% */}
          <div
            className={`lg:col-span-7 ${isAr ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="hero18-map">
              <svg
                viewBox="0 0 800 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                {/* Simplified continent outlines */}
                {/* North America */}
                <path
                  d="M120,60 L160,45 L200,50 L240,55 L260,70 L270,90 L265,120 L250,140 L245,160 L240,175 L225,180 L210,190 L195,195 L180,200 L170,210 L160,225 L155,215 L145,200 L130,190 L120,180 L115,160 L110,140 L105,120 L108,100 L112,80 Z"
                  fill="rgba(59,130,246,0.12)"
                  stroke="rgba(59,130,246,0.18)"
                  strokeWidth="0.5"
                />
                {/* Central America */}
                <path
                  d="M170,210 L180,215 L185,225 L190,240 L195,250 L192,260 L185,255 L178,248 L172,240 L168,230 L165,220 Z"
                  fill="rgba(59,130,246,0.12)"
                  stroke="rgba(59,130,246,0.18)"
                  strokeWidth="0.5"
                />
                {/* South America */}
                <path
                  d="M220,260 L240,255 L260,260 L280,270 L295,285 L305,305 L310,325 L305,345 L295,360 L280,375 L265,385 L255,380 L248,365 L242,345 L235,325 L230,305 L225,285 L220,270 Z"
                  fill="rgba(59,130,246,0.12)"
                  stroke="rgba(59,130,246,0.18)"
                  strokeWidth="0.5"
                />
                {/* Europe */}
                <path
                  d="M390,55 L410,50 L430,52 L450,58 L465,65 L475,78 L478,95 L475,110 L468,125 L460,135 L448,140 L435,138 L425,142 L415,148 L405,145 L398,138 L392,128 L388,115 L385,100 L383,85 L385,70 Z"
                  fill="rgba(59,130,246,0.12)"
                  stroke="rgba(59,130,246,0.18)"
                  strokeWidth="0.5"
                />
                {/* British Isles */}
                <path
                  d="M400,85 L408,80 L412,88 L410,98 L405,105 L398,100 L396,92 Z"
                  fill="rgba(59,130,246,0.12)"
                  stroke="rgba(59,130,246,0.18)"
                  strokeWidth="0.5"
                />
                {/* Africa */}
                <path
                  d="M410,170 L430,160 L455,165 L475,175 L490,190 L500,210 L505,235 L500,260 L495,285 L485,310 L470,330 L455,345 L440,350 L425,345 L415,330 L408,310 L402,285 L398,260 L395,235 L398,210 L402,190 Z"
                  fill="rgba(59,130,246,0.12)"
                  stroke="rgba(59,130,246,0.18)"
                  strokeWidth="0.5"
                />
                {/* Asia (mainland) */}
                <path
                  d="M480,50 L520,42 L560,45 L600,50 L640,55 L670,65 L695,80 L710,100 L715,120 L710,140 L700,155 L685,168 L665,175 L640,180 L615,185 L590,190 L565,195 L545,198 L525,195 L510,188 L498,178 L490,165 L485,148 L480,130 L478,110 L476,90 L478,70 Z"
                  fill="rgba(59,130,246,0.12)"
                  stroke="rgba(59,130,246,0.18)"
                  strokeWidth="0.5"
                />
                {/* Middle East / Arabian Peninsula */}
                <path
                  d="M498,178 L515,175 L535,180 L550,190 L558,205 L555,220 L545,230 L530,235 L515,230 L505,220 L498,205 L495,190 Z"
                  fill="rgba(59,130,246,0.12)"
                  stroke="rgba(59,130,246,0.18)"
                  strokeWidth="0.5"
                />
                {/* India / South Asia */}
                <path
                  d="M570,195 L590,190 L605,198 L612,215 L608,235 L598,255 L585,268 L575,265 L568,250 L562,230 L560,215 L565,205 Z"
                  fill="rgba(59,130,246,0.12)"
                  stroke="rgba(59,130,246,0.18)"
                  strokeWidth="0.5"
                />
                {/* Southeast Asia / Indonesia */}
                <path
                  d="M640,210 L660,205 L680,210 L695,220 L700,235 L695,248 L680,252 L665,248 L650,240 L642,228 L638,218 Z"
                  fill="rgba(59,130,246,0.12)"
                  stroke="rgba(59,130,246,0.18)"
                  strokeWidth="0.5"
                />
                {/* Japan */}
                <path
                  d="M700,100 L712,95 L718,108 L716,125 L710,140 L703,145 L698,135 L696,118 Z"
                  fill="rgba(59,130,246,0.12)"
                  stroke="rgba(59,130,246,0.18)"
                  strokeWidth="0.5"
                />
                {/* Oceania / Australia */}
                <path
                  d="M660,300 L690,290 L720,295 L745,305 L755,325 L750,345 L735,360 L715,368 L695,365 L675,355 L660,340 L655,320 Z"
                  fill="rgba(59,130,246,0.12)"
                  stroke="rgba(59,130,246,0.18)"
                  strokeWidth="0.5"
                />

                {/* Connection lines from home base (Dubai) to each client pin */}
                {pins
                  .filter((p) => !p.isHome)
                  .map((pin, i) => (
                    <line
                      key={`line-${pin.id}`}
                      x1={homePin.x}
                      y1={homePin.y}
                      x2={pin.x}
                      y2={pin.y}
                      stroke="rgba(59,130,246,0.08)"
                      strokeWidth="1"
                      strokeDasharray="6 4"
                      className={`hero18-line`}
                      style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                    />
                  ))}

                {/* Client pins */}
                {pins
                  .filter((p) => !p.isHome)
                  .map((pin, i) => (
                    <g key={pin.id}>
                      {/* Glow */}
                      <circle
                        cx={pin.x}
                        cy={pin.y}
                        r="12"
                        fill="rgba(59,130,246,0.15)"
                      />
                      {/* Pin */}
                      <circle
                        cx={pin.x}
                        cy={pin.y}
                        r="4"
                        fill="#3b82f6"
                        className="hero18-pin"
                      />
                    </g>
                  ))}

                {/* Home base pin (Dubai) — amber, larger */}
                <g>
                  {/* Expanding ring */}
                  <circle
                    cx={homePin.x}
                    cy={homePin.y}
                    r="5"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="1.5"
                    className="hero18-home-ring"
                  />
                  {/* Outer glow */}
                  <circle
                    cx={homePin.x}
                    cy={homePin.y}
                    r="18"
                    fill="rgba(245,158,11,0.12)"
                  />
                  {/* Inner glow */}
                  <circle
                    cx={homePin.x}
                    cy={homePin.y}
                    r="10"
                    fill="rgba(245,158,11,0.25)"
                  />
                  {/* Pin dot */}
                  <circle
                    cx={homePin.x}
                    cy={homePin.y}
                    r="5"
                    fill="#f59e0b"
                    className="hero18-home-pin"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
