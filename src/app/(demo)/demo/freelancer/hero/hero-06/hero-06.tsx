"use client";

import { useRef, useCallback, useState } from "react";
import {
  ArrowRight,
  Instagram,
  Twitter,
  Dribbble,
  Github,
  Heart,
  MessageCircle,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    name: "Alex Morgan",
    handle: "@alexmorgan.design",
    bio: "Creative director & freelance designer. I help brands tell their story through bold visuals and memorable experiences. \u2726 Open for collaborations",
    following: "1.2K",
    followingLabel: "Following",
    followers: "45.8K",
    followersLabel: "Followers",
    projects: "234",
    projectsLabel: "Projects",
    cta: "Work With Me",
    works: [
      { title: "Zenith Rebrand", likes: 842, comments: 56 },
      { title: "Flux App", likes: 1203, comments: 89 },
      { title: "Nova Identity", likes: 634, comments: 41 },
      { title: "Pulse Dashboard", likes: 978, comments: 73 },
      { title: "Echo Campaign", likes: 1547, comments: 102 },
      { title: "Drift Website", likes: 721, comments: 38 },
    ],
  },
  ar: {
    name: "\u0623\u0644\u064a\u0643\u0633 \u0645\u0648\u0631\u063a\u0627\u0646",
    handle: "@alexmorgan.design",
    bio: "\u0645\u062f\u064a\u0631 \u0625\u0628\u062f\u0627\u0639\u064a \u0648\u0645\u0635\u0645\u0645 \u0645\u0633\u062a\u0642\u0644. \u0623\u0633\u0627\u0639\u062f \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u0639\u0644\u0649 \u0633\u0631\u062f \u0642\u0635\u062a\u0647\u0627 \u0639\u0628\u0631 \u0645\u0631\u0626\u064a\u0627\u062a \u062c\u0631\u064a\u0626\u0629 \u0648\u062a\u062c\u0627\u0631\u0628 \u0644\u0627 \u062a\u064f\u0646\u0633\u0649. \u2726 \u0645\u062a\u0627\u062d \u0644\u0644\u062a\u0639\u0627\u0648\u0646",
    following: "1.2K",
    followingLabel: "\u0645\u062a\u0627\u0628\u064e\u0639",
    followers: "45.8K",
    followersLabel: "\u0645\u062a\u0627\u0628\u0639\u064a\u0646",
    projects: "234",
    projectsLabel: "\u0645\u0634\u0631\u0648\u0639",
    cta: "\u0627\u0639\u0645\u0644 \u0645\u0639\u064a",
    works: [
      { title: "Zenith Rebrand", likes: 842, comments: 56 },
      { title: "Flux App", likes: 1203, comments: 89 },
      { title: "Nova Identity", likes: 634, comments: 41 },
      { title: "Pulse Dashboard", likes: 978, comments: 73 },
      { title: "Echo Campaign", likes: 1547, comments: 102 },
      { title: "Drift Website", likes: 721, comments: 38 },
    ],
  },
};

const thumbnailGradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
];

const socialLinks = [
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Dribbble, label: "Dribbble" },
  { icon: Github, label: "Github" },
];

const particlesOptions = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: { value: 30, density: { enable: true, width: 800, height: 800 } },
    color: { value: ["#f97316", "#fb923c", "#f87171", "#fbbf24"] },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.15, max: 0.45 },
      animation: { enable: true, speed: 0.5, startValue: "random", sync: false },
    },
    size: {
      value: { min: 2, max: 5 },
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: "top" as const,
      outModes: { default: "out" as const },
      straight: false,
    },
    links: {
      enable: false,
    },
  },
  detectRetina: true,
};

export function Hero06({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];
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

      // Background gradient shift
      gsap.to(".hero06-gradient", {
        backgroundPosition: "100% 50%",
        duration: 7.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Avatar pop
      const avatarTl = gsap.timeline();
      avatarTl
        .from(".hero06-avatar", { scale: 0, duration: 0.5, ease: "back.out(1.7)" })
        .to(".hero06-avatar", { scale: 1.1, duration: 0.12, ease: "power1.out" })
        .to(".hero06-avatar", { scale: 1, duration: 0.08, ease: "power1.in" });

      // Content fade-up sequence
      const contentTl = gsap.timeline({ defaults: { ease: "power2.out" } });
      contentTl
        .from(".hero06-name", { y: 20, opacity: 0, duration: 0.6, delay: 0.2 })
        .from(".hero06-handle", { y: 20, opacity: 0, duration: 0.6 }, "-=0.45")
        .from(".hero06-bio", { y: 20, opacity: 0, duration: 0.6 }, "-=0.45")
        .from(".hero06-socials", { y: 20, opacity: 0, duration: 0.6 }, "-=0.45")
        .from(".hero06-stats", { y: 20, opacity: 0, duration: 0.6 }, "-=0.45");

      // Social buttons bounce
      gsap.from(".hero06-social-btn", {
        y: 10,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.4)",
        stagger: 0.08,
        delay: 0.6,
      });

      // Grid items pop
      gsap.from(".hero06-grid-item", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.8,
      });

      // CTA fade-up
      gsap.from(".hero06-cta", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 1.5,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="hero06-gradient min-h-screen relative overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #764ba2 75%, #667eea 100%)",
        backgroundSize: "400% 400%",
        backgroundPosition: "0% 50%",
        fontFamily: fontBody,
      }}
    >
      {/* Particles background */}
      <Particles
        id="hero06-particles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={particlesOptions}
      />

      {/* Subtle overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-4 py-16 sm:py-20">
        <div className="w-full max-w-2xl flex flex-col items-center">

          {/* Avatar */}
          <div
            className="hero06-avatar"
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              padding: 3,
              background: "linear-gradient(135deg, #f093fb, #667eea, #764ba2)",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fontHeading,
                fontSize: 28,
                fontWeight: 700,
                color: "white",
                letterSpacing: 2,
              }}
            >
              AM
            </div>
          </div>

          {/* Name */}
          <h1
            className="hero06-name text-4xl sm:text-5xl font-bold text-white text-center"
            style={{
              fontFamily: fontHeading,
            }}
          >
            {t.name}
          </h1>

          {/* Handle */}
          <p
            className="hero06-handle text-center mt-2"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 15,
              fontFamily: fontBody,
            }}
          >
            {t.handle}
          </p>

          {/* Bio */}
          <p
            className="hero06-bio text-center mt-4 max-w-md leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 16,
              fontFamily: fontBody,
            }}
          >
            {t.bio}
          </p>

          {/* Social Links */}
          <div
            className="hero06-socials flex items-center gap-3 mt-6"
          >
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="hero06-social-btn cursor-pointer"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.2)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    transition: "transform 0.25s ease, background 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.15)";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.2)";
                  }}
                >
                  <Icon size={20} />
                </button>
              );
            })}
          </div>

          {/* Stats Row */}
          <div
            className="hero06-stats flex items-center gap-6 sm:gap-10 mt-8"
          >
            {[
              { value: t.following, label: t.followingLabel },
              { value: t.followers, label: t.followersLabel },
              { value: t.projects, label: t.projectsLabel },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span
                  className="text-2xl sm:text-3xl font-bold text-white"
                  style={{ fontFamily: fontHeading }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 13,
                    fontFamily: fontBody,
                    marginTop: 2,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            className="w-full mt-10 mb-8"
            style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
            }}
          />

          {/* Work Grid */}
          <div className="w-full grid grid-cols-3 gap-3 sm:gap-4">
            {t.works.map((work, i) => (
              <div
                key={work.title}
                className="hero06-grid-item relative cursor-pointer group"
                style={{
                  aspectRatio: "1/1",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: thumbnailGradients[i],
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                }}
              >
                {/* Overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-end p-3 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(transparent 30%, rgba(0,0,0,0.55) 100%)",
                  }}
                >
                  <span
                    className="text-white text-xs sm:text-sm font-semibold text-center leading-tight mb-1.5"
                    style={{ fontFamily: fontBody }}
                  >
                    {work.title}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-white/80 text-[11px] sm:text-xs">
                      <Heart size={12} />
                      {work.likes}
                    </span>
                    <span className="flex items-center gap-1 text-white/80 text-[11px] sm:text-xs">
                      <MessageCircle size={12} />
                      {work.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="hero06-cta w-full mt-8 cursor-pointer"
            style={{
              padding: "16px 0",
              borderRadius: 14,
              background: "rgba(0,0,0,0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              fontSize: 17,
              fontWeight: 600,
              fontFamily: fontHeading,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition: "background 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.35)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.2)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            {t.cta}
            <ArrowRight
              size={18}
              style={{ transform: isAr ? "scaleX(-1)" : undefined }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
