"use client";

import { ArrowRight, Layers, Palette, Code, Globe, Megaphone } from "lucide-react";
import { useRef, useCallback, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    badge: "Full Service Freelancer",
    headingLine1: "Five Layers",
    headingLine2: "of Expertise",
    sub: "A comprehensive stack of services designed to elevate your brand, build your product, and grow your audience — all from one freelancer.",
    cards: [
      { title: "Brand Design", desc: "Visual identity, logos, brand guidelines" },
      { title: "Web Development", desc: "React, Next.js, full-stack applications" },
      { title: "SEO & Growth", desc: "Search optimization, analytics, strategy" },
      { title: "Marketing", desc: "Social media, content, campaigns" },
      { title: "Consulting", desc: "Technical strategy, architecture reviews" },
    ],
    cta1: "Stack Up Your Project",
    cta2: "View All Services",
    footer: "Pick one layer or stack them all — your project, your choice.",
  },
  ar: {
    badge: "مستقل متكامل الخدمات",
    headingLine1: "خمس طبقات",
    headingLine2: "من الخبرة",
    sub: "مجموعة شاملة من الخدمات مصممة لرفع مستوى علامتك التجارية وبناء منتجك وتنمية جمهورك — كل ذلك من مستقل واحد.",
    cards: [
      { title: "تصميم العلامة", desc: "الهوية البصرية، الشعارات، إرشادات العلامة التجارية" },
      { title: "تطوير الويب", desc: "React، Next.js، تطبيقات متكاملة" },
      { title: "SEO والنمو", desc: "تحسين محركات البحث، التحليلات، الاستراتيجية" },
      { title: "التسويق", desc: "وسائل التواصل، المحتوى، الحملات" },
      { title: "الاستشارات", desc: "الاستراتيجية التقنية، مراجعات البنية" },
    ],
    cta1: "ابنِ مشروعك",
    cta2: "عرض جميع الخدمات",
    footer: "اختر طبقة واحدة أو اجمعها كلها — مشروعك، خيارك.",
  },
};

const cardIcons = [Palette, Code, Globe, Megaphone, Layers];

const cardGradients = [
  { from: "#7c3aed", to: "#6d28d9" },
  { from: "#2563eb", to: "#1d4ed8" },
  { from: "#059669", to: "#047857" },
  { from: "#d97706", to: "#b45309" },
  { from: "#dc2626", to: "#b91c1c" },
];

const glowColors = [
  "rgba(124, 58, 237, 0.4)",
  "rgba(37, 99, 235, 0.4)",
  "rgba(5, 150, 105, 0.4)",
  "rgba(217, 119, 6, 0.4)",
  "rgba(220, 38, 38, 0.4)",
];

export function Hero15({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];
  const containerRef = useRef<HTMLDivElement>(null);
  const [particlesReady, setParticlesReady] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Content fade in
      gsap.from(".hero15-content-fade", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.1,
        stagger: 0.3,
      });

      // Card stack spread animations
      const cardYOffsets = [0, 120, 240, 360, 480];
      cardYOffsets.forEach((yOffset, i) => {
        gsap.fromTo(
          `.hero15-card-${i}`,
          { y: 0, scale: 0.98, opacity: 0 },
          {
            y: yOffset,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.56)",
            delay: 0.3 + i * 0.2,
          }
        );

        // Card glow pulsing
        gsap.fromTo(
          `.hero15-card-${i}`,
          { boxShadow: `0 4px 20px ${glowColors[i]}` },
          {
            boxShadow: `0 4px 35px ${glowColors[i]}, 0 0 60px ${glowColors[i]}`,
            duration: 1.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.1 + i * 0.2,
          }
        );
      });

      // Icon spin animations
      for (let i = 0; i < 5; i++) {
        gsap.from(`.hero15-icon-${i}`, {
          rotation: 360,
          duration: 0.6,
          ease: "back.out(1.56)",
          delay: 0.3 + i * 0.2,
        });
      }

      // Gradient text color cycle
      const gradientColors = ["#7c3aed", "#2563eb", "#059669", "#d97706", "#dc2626"];
      const tl = gsap.timeline({ repeat: -1 });
      gradientColors.forEach((color, i) => {
        tl.to(".hero15-gradient-text", {
          color,
          duration: 1,
          ease: "sine.inOut",
          delay: i === 0 ? 0 : 0,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: "#0a0a0f",
        fontFamily: isAr ? "var(--font-tajawal), sans-serif" : "var(--font-inter), sans-serif",
      }}
    >
      {/* Particles Background */}
      <Particles
        id="hero15-particles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 40, density: { enable: true } },
            color: {
              value: ["#7c3aed", "#2563eb", "#059669", "#d97706", "#dc2626"],
            },
            opacity: {
              value: { min: 0.2, max: 0.5 },
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
            shape: { type: "circle" },
          },
          detectRetina: true,
        }}
      />

      {/* Top Content */}
      <div className="hero15-content-fade relative z-10 pt-20 pb-8 text-center px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
          <Layers className="w-4 h-4 text-violet-400" />
          <span
            className="text-sm text-violet-300"
            style={{
              fontFamily: isAr ? "var(--font-tajawal), sans-serif" : "var(--font-inter), sans-serif",
            }}
          >
            {t.badge}
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
          style={{
            fontFamily: isAr ? "var(--font-changa), sans-serif" : "var(--font-inter), sans-serif",
          }}
        >
          {t.headingLine1}
          <br />
          <span className="hero15-gradient-text" style={{ color: "#7c3aed" }}>
            {t.headingLine2}
          </span>
        </h1>

        {/* Sub */}
        <p
          className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
          style={{
            fontFamily: isAr ? "var(--font-tajawal), sans-serif" : "var(--font-inter), sans-serif",
          }}
        >
          {t.sub}
        </p>
      </div>

      {/* Card Stack */}
      <div className="relative z-10 flex justify-center px-4 pb-8">
        <div className="relative w-full max-w-lg" style={{ height: "580px" }}>
          {t.cards.map((card, i) => {
            const Icon = cardIcons[i];
            const grad = cardGradients[i];
            return (
              <div
                key={i}
                className={`hero15-card-${i} hero15-card-hover absolute top-0 ${isAr ? "right-0" : "left-0"} w-full cursor-pointer`}
                style={{
                  borderRadius: "16px",
                  background: `linear-gradient(135deg, ${grad.from}, ${grad.to})`,
                  opacity: 0,
                  transition: "transform 0.3s ease, filter 0.3s ease",
                }}
              >
                <div
                  className={`flex items-center gap-4 px-5 py-6 sm:px-6 ${isAr ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Icon */}
                  <div
                    className={`hero15-icon-${i} flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text */}
                  <div className={`flex-1 min-w-0 ${isAr ? "text-right" : "text-left"}`}>
                    <h3
                      className="text-white font-semibold text-lg"
                      style={{
                        fontFamily: isAr
                          ? "var(--font-changa), sans-serif"
                          : "var(--font-inter), sans-serif",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-white/70 text-sm mt-0.5"
                      style={{
                        fontFamily: isAr
                          ? "var(--font-tajawal), sans-serif"
                          : "var(--font-inter), sans-serif",
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <ArrowRight
                      className={`w-5 h-5 text-white/60 ${isAr ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="hero15-content-fade relative z-10 pb-20 text-center px-4">
        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-6`}>
          <button
            className="cursor-pointer px-8 py-3.5 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              fontFamily: isAr
                ? "var(--font-tajawal), sans-serif"
                : "var(--font-inter), sans-serif",
            }}
          >
            {t.cta1}
          </button>
          <button
            className="cursor-pointer px-8 py-3.5 rounded-xl text-white font-semibold text-base border border-white/20 bg-white/5 transition-all duration-300 hover:bg-white/10"
            style={{
              fontFamily: isAr
                ? "var(--font-tajawal), sans-serif"
                : "var(--font-inter), sans-serif",
            }}
          >
            {t.cta2}
          </button>
        </div>

        {/* Footer text */}
        <p
          className="text-gray-500 text-sm"
          style={{
            fontFamily: isAr
              ? "var(--font-tajawal), sans-serif"
              : "var(--font-inter), sans-serif",
          }}
        >
          {t.footer}
        </p>
      </div>
    </section>
  );
}
