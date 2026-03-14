"use client";

import { useRef, useCallback, useState } from "react";
import { ArrowRight, Check, Star, Zap, Crown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    badge: "Transparent Pricing",
    headingLine1: "Invest in",
    headingLine2: "Quality Work",
    sub: "Clear pricing, no hidden fees. Choose the package that fits your needs.",
    plans: [
      {
        name: "Starter",
        icon: "zap",
        price: "$2,500",
        per: "/ project",
        desc: "Perfect for small projects",
        features: [
          "Landing page design",
          "Mobile responsive",
          "2 revision rounds",
          "1 week delivery",
          "Source files included",
        ],
        cta: "Get Started",
        highlighted: false,
      },
      {
        name: "Professional",
        icon: "star",
        price: "$5,000",
        per: "/ project",
        desc: "Best for growing businesses",
        features: [
          "Full website (up to 8 pages)",
          "Custom animations",
          "SEO optimization",
          "5 revision rounds",
          "2 week delivery",
          "30-day support",
          "Source files + documentation",
        ],
        cta: "Choose Pro",
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Enterprise",
        icon: "crown",
        price: "$12,000+",
        per: "/ project",
        desc: "For ambitious projects",
        features: [
          "Complete digital experience",
          "Custom illustrations",
          "Performance optimization",
          "Unlimited revisions",
          "Priority support",
          "Dedicated communication",
          "Strategy consultation",
          "60-day post-launch support",
        ],
        cta: "Contact Me",
        highlighted: false,
      },
    ],
    bottomLine1: "Not sure which plan? Let\u2019s chat about your project.",
    bottomLine2:
      "All plans include: Communication via Slack \u2022 Weekly updates \u2022 Quality guarantee",
  },
  ar: {
    badge: "\u0623\u0633\u0639\u0627\u0631 \u0634\u0641\u0627\u0641\u0629",
    headingLine1: "\u0627\u0633\u062a\u062b\u0645\u0631 \u0641\u064a",
    headingLine2: "\u0639\u0645\u0644 \u0630\u0648 \u062c\u0648\u062f\u0629",
    sub: "\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u0636\u062d\u0629\u060c \u0628\u062f\u0648\u0646 \u0631\u0633\u0648\u0645 \u0645\u062e\u0641\u064a\u0629. \u0627\u062e\u062a\u0631 \u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u062a\u064a \u062a\u0646\u0627\u0633\u0628 \u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a\u0643.",
    plans: [
      {
        name: "\u0627\u0644\u0645\u0628\u062a\u062f\u0626",
        icon: "zap",
        price: "$2,500",
        per: "/ \u0645\u0634\u0631\u0648\u0639",
        desc: "\u0645\u062b\u0627\u0644\u064a \u0644\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0635\u063a\u064a\u0631\u0629",
        features: [
          "\u062a\u0635\u0645\u064a\u0645 \u0635\u0641\u062d\u0629 \u0647\u0628\u0648\u0637",
          "\u0645\u062a\u062c\u0627\u0648\u0628 \u0645\u0639 \u0627\u0644\u062c\u0648\u0627\u0644",
          "\u062c\u0648\u0644\u062a\u0627\u0646 \u0645\u0646 \u0627\u0644\u062a\u0639\u062f\u064a\u0644\u0627\u062a",
          "\u062a\u0633\u0644\u064a\u0645 \u062e\u0644\u0627\u0644 \u0623\u0633\u0628\u0648\u0639",
          "\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0645\u0635\u062f\u0631 \u0645\u0636\u0645\u0651\u0646\u0629",
        ],
        cta: "\u0627\u0628\u062f\u0623",
        highlighted: false,
      },
      {
        name: "\u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a",
        icon: "star",
        price: "$5,000",
        per: "/ \u0645\u0634\u0631\u0648\u0639",
        desc: "\u0627\u0644\u0623\u0641\u0636\u0644 \u0644\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0646\u0627\u0645\u064a\u0629",
        features: [
          "\u0645\u0648\u0642\u0639 \u0643\u0627\u0645\u0644 (\u062d\u062a\u0649 8 \u0635\u0641\u062d\u0627\u062a)",
          "\u062d\u0631\u0643\u0627\u062a \u0645\u062e\u0635\u0635\u0629",
          "\u062a\u062d\u0633\u064a\u0646 \u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b",
          "5 \u062c\u0648\u0644\u0627\u062a \u062a\u0639\u062f\u064a\u0644",
          "\u062a\u0633\u0644\u064a\u0645 \u062e\u0644\u0627\u0644 \u0623\u0633\u0628\u0648\u0639\u064a\u0646",
          "\u062f\u0639\u0645 \u0644\u0645\u062f\u0629 30 \u064a\u0648\u0645\u064b\u0627",
          "\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0645\u0635\u062f\u0631 + \u0627\u0644\u062a\u0648\u062b\u064a\u0642",
        ],
        cta: "\u0627\u062e\u062a\u0631 \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a",
        highlighted: true,
        badge: "\u0627\u0644\u0623\u0643\u062b\u0631 \u0634\u0639\u0628\u064a\u0629",
      },
      {
        name: "\u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a",
        icon: "crown",
        price: "$12,000+",
        per: "/ \u0645\u0634\u0631\u0648\u0639",
        desc: "\u0644\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0637\u0645\u0648\u062d\u0629",
        features: [
          "\u062a\u062c\u0631\u0628\u0629 \u0631\u0642\u0645\u064a\u0629 \u0645\u062a\u0643\u0627\u0645\u0644\u0629",
          "\u0631\u0633\u0648\u0645\u0627\u062a \u0645\u062e\u0635\u0635\u0629",
          "\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0623\u062f\u0627\u0621",
          "\u062a\u0639\u062f\u064a\u0644\u0627\u062a \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f\u0629",
          "\u062f\u0639\u0645 \u0630\u0648 \u0623\u0648\u0644\u0648\u064a\u0629",
          "\u062a\u0648\u0627\u0635\u0644 \u0645\u062e\u0635\u0635",
          "\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629",
          "\u062f\u0639\u0645 60 \u064a\u0648\u0645\u064b\u0627 \u0628\u0639\u062f \u0627\u0644\u0625\u0637\u0644\u0627\u0642",
        ],
        cta: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a",
        highlighted: false,
      },
    ],
    bottomLine1:
      "\u063a\u064a\u0631 \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629\u061f \u062f\u0639\u0646\u0627 \u0646\u062a\u062d\u062f\u062b \u0639\u0646 \u0645\u0634\u0631\u0648\u0639\u0643.",
    bottomLine2:
      "\u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u0627\u0642\u0627\u062a \u062a\u0634\u0645\u0644: \u062a\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 Slack \u2022 \u062a\u062d\u062f\u064a\u062b\u0627\u062a \u0623\u0633\u0628\u0648\u0639\u064a\u0629 \u2022 \u0636\u0645\u0627\u0646 \u0627\u0644\u062c\u0648\u062f\u0629",
  },
};

const iconMap = {
  zap: Zap,
  star: Star,
  crown: Crown,
};

export function Hero17({ language }: { language: "en" | "ar" }) {
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

      // Content fade in
      gsap.from(".hero17-content-fade", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.7,
      });

      // Cards slide up
      gsap.from(".hero17-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.2,
      });

      // Popular badge pop
      const badgeTl = gsap.timeline({ delay: 0.8 });
      badgeTl
        .from(".hero17-badge-pop", { scale: 0, duration: 0.2, ease: "power2.out" })
        .to(".hero17-badge-pop", { scale: 1.15, duration: 0.1, ease: "power2.out" })
        .to(".hero17-badge-pop", { scale: 0.95, duration: 0.1, ease: "power2.inOut" })
        .to(".hero17-badge-pop", { scale: 1, duration: 0.1, ease: "power2.out" });

      // Check marks appear
      gsap.from(".hero17-check", {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.6,
      });

      // Border glow animation for highlighted card
      gsap.to(".hero17-border-glow", {
        backgroundPosition: "100% 50%",
        duration: 3,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
      style={{ background: "#09090b", fontFamily: fontBody }}
    >
      {/* Particles background */}
      <Particles
        id="hero17-particles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 40, density: { enable: true } },
            color: {
              value: ["#d4a017", "#10b981", "#8b5cf6"],
            },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.15, max: 0.4 },
              animation: { enable: true, speed: 0.5, sync: false },
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              enable: true,
              speed: 0.4,
              direction: "none",
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.3), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Top Section */}
        <div className="text-center mb-16 hero17-content-fade">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#27272a] bg-[#18181b] mb-6">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#8b5cf6" }}
            />
            <span
              className="text-sm text-gray-300"
              style={{ fontFamily: fontBody }}
            >
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: fontHeading }}
          >
            <span className="text-white block">{t.headingLine1}</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.headingLine2}
            </span>
          </h1>

          {/* Sub */}
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: fontBody }}
          >
            {t.sub}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          {t.plans.map((plan, planIndex) => {
            const IconComp = iconMap[plan.icon as keyof typeof iconMap];
            return (
              <div
                key={planIndex}
                className={`hero17-card relative ${
                  plan.highlighted ? "lg:-mt-4 lg:mb-[-16px]" : ""
                }`}
              >
                {/* Gradient border wrapper for highlighted card */}
                {plan.highlighted ? (
                  <div
                    className="hero17-border-glow rounded-2xl p-[2px]"
                    style={{
                      background:
                        "linear-gradient(270deg, #8b5cf6, #06b6d4, #8b5cf6, #06b6d4)",
                      backgroundSize: "300% 300%",
                    }}
                  >
                    <div
                      className="rounded-2xl p-8 relative overflow-hidden"
                      style={{ background: "#18181b" }}
                    >
                      {/* Popular badge */}
                      {"badge" in plan && plan.badge && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 hero17-badge-pop">
                          <div
                            className="px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                            style={{
                              background: "#8b5cf6",
                              fontFamily: fontBody,
                            }}
                          >
                            {plan.badge}
                          </div>
                        </div>
                      )}

                      {/* Card content */}
                      <div className="pt-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ background: "rgba(139,92,246,0.15)" }}
                          >
                            <IconComp className="w-5 h-5" style={{ color: "#8b5cf6" }} />
                          </div>
                          <h3
                            className="text-xl font-bold text-white"
                            style={{ fontFamily: fontHeading }}
                          >
                            {plan.name}
                          </h3>
                        </div>

                        <div className="mb-4">
                          <span
                            className="text-4xl font-bold text-white"
                            style={{ fontFamily: fontHeading }}
                          >
                            {plan.price}
                          </span>
                          <span
                            className="text-gray-400 text-sm ms-2"
                            style={{ fontFamily: fontBody }}
                          >
                            {plan.per}
                          </span>
                        </div>

                        <p
                          className="text-gray-400 text-sm mb-6"
                          style={{ fontFamily: fontBody }}
                        >
                          {plan.desc}
                        </p>

                        <div className="space-y-3 mb-8">
                          {plan.features.map((feature, fi) => (
                            <div
                              key={fi}
                              className="flex items-start gap-3 hero17-check"
                            >
                              <Check
                                className="w-4 h-4 mt-0.5 shrink-0"
                                style={{ color: "#10b981" }}
                              />
                              <span
                                className="text-gray-300 text-sm"
                                style={{ fontFamily: fontBody }}
                              >
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button
                          className="cursor-pointer w-full py-3 px-6 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2"
                          style={{
                            background:
                              "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                            fontFamily: fontBody,
                          }}
                        >
                          {plan.cta}
                          <ArrowRight
                            className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="rounded-2xl p-8 border transition-all duration-300 hover:border-[#3f3f46]"
                    style={{
                      background: "#18181b",
                      borderColor: "#27272a",
                    }}
                  >
                    {/* Card content */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(139,92,246,0.1)" }}
                      >
                        <IconComp className="w-5 h-5" style={{ color: "#8b5cf6" }} />
                      </div>
                      <h3
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: fontHeading }}
                      >
                        {plan.name}
                      </h3>
                    </div>

                    <div className="mb-4">
                      <span
                        className="text-4xl font-bold text-white"
                        style={{ fontFamily: fontHeading }}
                      >
                        {plan.price}
                      </span>
                      <span
                        className="text-gray-400 text-sm ms-2"
                        style={{ fontFamily: fontBody }}
                      >
                        {plan.per}
                      </span>
                    </div>

                    <p
                      className="text-gray-400 text-sm mb-6"
                      style={{ fontFamily: fontBody }}
                    >
                      {plan.desc}
                    </p>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, fi) => (
                        <div
                          key={fi}
                          className="flex items-start gap-3 hero17-check"
                        >
                          <Check
                            className="w-4 h-4 mt-0.5 shrink-0"
                            style={{ color: "#10b981" }}
                          />
                          <span
                            className="text-gray-300 text-sm"
                            style={{ fontFamily: fontBody }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      className="cursor-pointer w-full py-3 px-6 rounded-xl text-white font-semibold text-sm border transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2"
                      style={{
                        borderColor: "#27272a",
                        background: "transparent",
                        fontFamily: fontBody,
                      }}
                    >
                      {plan.cta}
                      <ArrowRight
                        className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 hero17-content-fade">
          <p
            className="text-gray-300 text-lg mb-3"
            style={{ fontFamily: fontBody }}
          >
            {t.bottomLine1}
          </p>
          <p
            className="text-gray-500 text-sm"
            style={{ fontFamily: fontBody }}
          >
            {t.bottomLine2}
          </p>
        </div>
      </div>
    </section>
  );
}
