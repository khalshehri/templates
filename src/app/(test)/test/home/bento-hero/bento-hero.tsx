"use client";

/**
 * Bento Grid Hero — Experimental
 *
 * A modern, asymmetric bento-grid hero section with:
 * - Animated gradient headline with typing cursor
 * - Bento cards showcasing features/metrics with glassmorphism
 * - Orbital ring decoration
 * - Subtle grid background with spotlight effect
 * - Full AR/EN bilingual support
 *
 * Concept: Instead of a classic centered hero, the content is distributed
 * across a bento grid, giving a dashboard/product-feel while remaining
 * visually striking as a landing hero.
 */

import {
  ArrowRight,
  Globe,
  Layers,
  Palette,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";

interface BentoHeroProps {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Launch Your Website Today",
    headingLine1: "Build Stunning",
    headingLine2: "Websites",
    headingLine3: "In Minutes",
    subheading:
      "One platform, infinite possibilities. Create professional bilingual websites without writing a single line of code.",
    ctaPrimary: "Start Building Free",
    ctaSecondary: "Watch Demo",
    cards: {
      templates: { count: "112+", label: "Templates", sub: "Ready to use" },
      languages: { title: "Bilingual", sub: "Arabic & English RTL/LTR" },
      speed: { value: "3min", label: "Average Setup", sub: "Lightning fast" },
      industries: { count: "13", label: "Industries", sub: "Pre-built configs" },
    },
    features: [
      { icon: "palette", label: "Theme Engine" },
      { icon: "layers", label: "Block System" },
      { icon: "globe", label: "Multi-tenant" },
      { icon: "zap", label: "Instant Deploy" },
    ],
    trustedBy: "Trusted by 2,000+ businesses across MENA",
  },
  ar: {
    badge: "أطلق موقعك اليوم",
    headingLine1: "أنشئ مواقع",
    headingLine2: "مذهلة",
    headingLine3: "في دقائق",
    subheading:
      "منصة واحدة، إمكانيات لا حدود لها. أنشئ مواقع احترافية ثنائية اللغة دون كتابة سطر برمجي واحد.",
    ctaPrimary: "ابدأ البناء مجاناً",
    ctaSecondary: "شاهد العرض",
    cards: {
      templates: { count: "+112", label: "قالب", sub: "جاهز للاستخدام" },
      languages: { title: "ثنائي اللغة", sub: "عربي وإنجليزي RTL/LTR" },
      speed: { value: "3 دقائق", label: "متوسط الإعداد", sub: "سريع كالبرق" },
      industries: { count: "13", label: "صناعة", sub: "قوالب جاهزة" },
    },
    features: [
      { icon: "palette", label: "محرك الثيمات" },
      { icon: "layers", label: "نظام البلوكات" },
      { icon: "globe", label: "متعدد المواقع" },
      { icon: "zap", label: "نشر فوري" },
    ],
    trustedBy: "موثوق من قبل أكثر من 2,000 شركة في منطقة الشرق الأوسط",
  },
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  palette: Palette,
  layers: Layers,
  globe: Globe,
  zap: Zap,
};

export function BentoHero({ language }: BentoHeroProps) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbitSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spotlight {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.15; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes barGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        .bento-float { animation: floatUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 6s ease-in-out infinite;
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-[#030014]">
        {/* Grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Spotlight */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)",
            animation: "spotlight 8s ease-in-out infinite",
          }}
        />

        {/* Orbital ring decoration */}
        <div
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.03] pointer-events-none"
          style={{ animation: "orbitSpin 60s linear infinite" }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500/60"
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-500/40"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">

          {/* Top section: heading + CTA */}
          <div className={`max-w-3xl ${isAr ? "mr-0 ml-auto text-right" : ""}`}>
            {/* Badge */}
            <div
              className={`bento-float inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-sm font-medium text-indigo-300 mb-8 ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles size={14} className="text-indigo-400" />
              {t.badge}
            </div>

            {/* Heading */}
            <h1
              className="bento-float text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
              style={{ animationDelay: "0.2s" }}
            >
              {t.headingLine1}
              <br />
              <span className="gradient-text">{t.headingLine2}</span>
              <span
                className="inline-block w-[3px] h-[0.8em] bg-indigo-400 align-middle mx-1"
                style={{ animation: "cursorBlink 1s step-end infinite" }}
              />
              <br />
              {t.headingLine3}
            </h1>

            {/* Subheading */}
            <p
              className="bento-float mt-6 text-lg text-white/40 leading-relaxed max-w-xl"
              style={{ animationDelay: "0.35s" }}
            >
              {t.subheading}
            </p>

            {/* CTAs */}
            <div
              className={`bento-float mt-8 flex flex-col sm:flex-row gap-4 ${isAr ? "sm:flex-row-reverse items-end" : "items-start"}`}
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
              >
                <Rocket size={16} />
                {t.ctaPrimary}
                <ArrowRight
                  size={16}
                  className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`}
                />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white/50 rounded-xl border border-white/10 hover:bg-white/5 transition-all"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

            {/* Card 1: Templates count — tall */}
            <div
              className="bento-float col-span-1 row-span-2 relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 flex flex-col justify-between group hover:border-indigo-500/30 transition-colors"
              style={{ animationDelay: "0.5s" }}
            >
              <div>
                <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                  {t.cards.templates.count}
                </div>
                <div className="text-sm font-semibold text-white/70 mt-2">
                  {t.cards.templates.label}
                </div>
                <div className="text-xs text-white/30 mt-1">
                  {t.cards.templates.sub}
                </div>
              </div>
              {/* Mini template grid decoration */}
              <div className="mt-6 grid grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] rounded-md transition-colors"
                    style={{
                      backgroundColor:
                        i % 3 === 0
                          ? "rgba(99,102,241,0.2)"
                          : i % 3 === 1
                          ? "rgba(139,92,246,0.15)"
                          : "rgba(255,255,255,0.04)",
                    }}
                  />
                ))}
              </div>
              {/* Pulse ring */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full border border-indigo-500/10"
                style={{ animation: "pulseRing 4s ease-out infinite" }}
              />
            </div>

            {/* Card 2: Bilingual */}
            <div
              className="bento-float col-span-1 relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 group hover:border-purple-500/30 transition-colors"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Globe size={16} className="text-purple-400" />
                </div>
                <div className="text-sm font-semibold text-white/80">
                  {t.cards.languages.title}
                </div>
              </div>
              <div className="text-xs text-white/30">{t.cards.languages.sub}</div>
              {/* AR/EN visual */}
              <div className="mt-4 flex gap-2">
                <div className="flex-1 h-8 rounded-md bg-gradient-to-r from-indigo-500/20 to-indigo-500/5 flex items-center justify-center">
                  <span className="text-xs font-bold text-indigo-300">EN</span>
                </div>
                <div className="flex-1 h-8 rounded-md bg-gradient-to-r from-purple-500/5 to-purple-500/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-purple-300">عربي</span>
                </div>
              </div>
            </div>

            {/* Card 3: Speed metric */}
            <div
              className="bento-float col-span-1 relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 group hover:border-emerald-500/30 transition-colors"
              style={{ animationDelay: "0.65s" }}
            >
              <div className="text-3xl font-black text-emerald-400 tracking-tight">
                {t.cards.speed.value}
              </div>
              <div className="text-sm font-semibold text-white/70 mt-1">
                {t.cards.speed.label}
              </div>
              <div className="text-xs text-white/30 mt-0.5">
                {t.cards.speed.sub}
              </div>
              {/* Speed bar animation */}
              <div className="mt-4 flex items-end gap-1 h-10">
                {[30, 55, 40, 75, 60, 90, 50, 85, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm origin-bottom"
                    style={{
                      height: `${h}%`,
                      backgroundColor:
                        h === 100
                          ? "rgba(16,185,129,0.6)"
                          : `rgba(16,185,129,${0.1 + (h / 100) * 0.3})`,
                      animation: `barGrow 0.6s ease-out both`,
                      animationDelay: `${0.8 + i * 0.06}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Card 4: Industries */}
            <div
              className="bento-float col-span-1 relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 group hover:border-amber-500/30 transition-colors"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="text-3xl font-black text-amber-400 tracking-tight">
                {t.cards.industries.count}
              </div>
              <div className="text-sm font-semibold text-white/70 mt-1">
                {t.cards.industries.label}
              </div>
              <div className="text-xs text-white/30 mt-0.5">
                {t.cards.industries.sub}
              </div>
              {/* Industry dots */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {Array.from({ length: 13 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: `hsl(${i * 28}, 60%, ${45 + (i % 3) * 10}%)`,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Card 5: Features row — spans 3 cols */}
            <div
              className="bento-float col-span-2 lg:col-span-3 relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 group hover:border-white/10 transition-colors"
              style={{ animationDelay: "0.75s" }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {t.features.map((feat, i) => {
                  const Icon = iconMap[feat.icon] || Zap;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.06] transition-colors"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: [
                            "rgba(99,102,241,0.15)",
                            "rgba(139,92,246,0.15)",
                            "rgba(16,185,129,0.15)",
                            "rgba(245,158,11,0.15)",
                          ][i],
                        }}
                      >
                        <Icon
                          size={15}
                          className={
                            [
                              "text-indigo-400",
                              "text-purple-400",
                              "text-emerald-400",
                              "text-amber-400",
                            ][i]
                          }
                        />
                      </div>
                      <span className="text-sm font-medium text-white/60">
                        {feat.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Trusted by */}
          <div
            className="bento-float mt-12 text-center"
            style={{ animationDelay: "0.85s" }}
          >
            <p className="text-xs text-white/20 tracking-wide uppercase">
              {t.trustedBy}
            </p>
            {/* Fake brand logos */}
            <div className="mt-4 flex items-center justify-center gap-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-6 rounded bg-white/[0.04]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
