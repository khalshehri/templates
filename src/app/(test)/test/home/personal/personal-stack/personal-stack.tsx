"use client";

import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Lina Al-Farsi",
    title: "Product Designer & Creative Technologist",
    tagline: "Skills are in my DNA. I craft digital products with a unique blend of design, code, and strategy.",
    cta: "Hire Me",
    ctaSecondary: "Download CV",
    skills: [
      { label: "UI Design", side: "left" as const },
      { label: "React", side: "right" as const },
      { label: "Strategy", side: "left" as const },
      { label: "TypeScript", side: "right" as const },
      { label: "Motion", side: "left" as const },
      { label: "Node.js", side: "right" as const },
      { label: "Figma", side: "left" as const },
      { label: "Python", side: "right" as const },
      { label: "Branding", side: "left" as const },
      { label: "DevOps", side: "right" as const },
    ],
    sectionLabel: "Skill DNA",
    socials: [
      { platform: "github", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" },
    ],
  },
  ar: {
    name: "لينا الفارسي",
    title: "مصممة منتجات وتقنية إبداعية",
    tagline: "المهارات في حمضي النووي. أصنع منتجات رقمية بمزيج فريد من التصميم والبرمجة والاستراتيجية.",
    cta: "وظفني",
    ctaSecondary: "تحميل السيرة الذاتية",
    skills: [
      { label: "تصميم واجهات", side: "left" as const },
      { label: "React", side: "right" as const },
      { label: "استراتيجية", side: "left" as const },
      { label: "TypeScript", side: "right" as const },
      { label: "موشن", side: "left" as const },
      { label: "Node.js", side: "right" as const },
      { label: "فيجما", side: "left" as const },
      { label: "Python", side: "right" as const },
      { label: "هوية بصرية", side: "left" as const },
      { label: "DevOps", side: "right" as const },
    ],
    sectionLabel: "الحمض النووي للمهارات",
    socials: [
      { platform: "github", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" },
    ],
  },
};

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function PersonalStack({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  const helixWidth = 320;
  const nodeSpacingY = 70;
  const amplitude = 100;
  const totalNodes = t.skills.length;

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes helixWave {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        @keyframes nodeAppear {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes rungDraw {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        @keyframes strandFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -40; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .helix-wave { animation: helixWave 4s ease-in-out infinite; }
        .node-appear { animation: nodeAppear 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .rung-draw { animation: rungDraw 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; transform-origin: center; }
        .strand-flow { animation: strandFlow 3s linear infinite; }
      `}</style>

      <section
        dir={isAr ? "rtl" : "ltr"}
        className="relative min-h-screen flex items-center overflow-hidden bg-[#fafafa]"
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Subtle color washes */}
        <div
          className="absolute top-[20%] right-[15%] w-[300px] h-[300px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(67,56,202,0.3) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[20%] left-[15%] w-[250px] h-[250px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(13,148,136,0.3) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* DNA Helix Column */}
            <div className={`flex justify-center ${isAr ? "lg:order-2" : ""}`}>
              <div className="fade-up relative" style={{ animationDelay: "0.1s" }}>
                {/* Avatar at top of helix */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-500/20">
                      {isAr ? "ل" : "L"}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-teal-400 border-2 border-[#fafafa] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                {/* Section label */}
                <p className="text-center text-[10px] uppercase tracking-[0.25em] text-gray-400 font-semibold mb-4">
                  {t.sectionLabel}
                </p>

                {/* Helix SVG + nodes */}
                <div className="helix-wave relative" style={{ width: `${helixWidth}px`, height: `${totalNodes * nodeSpacingY}px` }}>
                  {/* SVG strands and rungs */}
                  <svg
                    className="absolute inset-0"
                    width={helixWidth}
                    height={totalNodes * nodeSpacingY}
                    viewBox={`0 0 ${helixWidth} ${totalNodes * nodeSpacingY}`}
                    fill="none"
                  >
                    {/* Left strand path */}
                    <path
                      d={t.skills.map((skill, i) => {
                        const y = i * nodeSpacingY + nodeSpacingY / 2;
                        const x = skill.side === "left"
                          ? (helixWidth / 2) - amplitude
                          : (helixWidth / 2) + amplitude;
                        return `${i === 0 ? "M" : "S"} ${helixWidth / 2} ${y - nodeSpacingY / 4}, ${x} ${y}`;
                      }).join(" ")}
                      stroke="rgba(67,56,202,0.15)"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      className="strand-flow"
                    />
                    {/* Right strand path */}
                    <path
                      d={t.skills.map((skill, i) => {
                        const y = i * nodeSpacingY + nodeSpacingY / 2;
                        const x = skill.side === "right"
                          ? (helixWidth / 2) - amplitude
                          : (helixWidth / 2) + amplitude;
                        return `${i === 0 ? "M" : "S"} ${helixWidth / 2} ${y - nodeSpacingY / 4}, ${x} ${y}`;
                      }).join(" ")}
                      stroke="rgba(13,148,136,0.15)"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      className="strand-flow"
                    />

                    {/* Rungs connecting pairs */}
                    {Array.from({ length: Math.floor(totalNodes / 2) }).map((_, i) => {
                      const pairIndex = i * 2;
                      const y = pairIndex * nodeSpacingY + nodeSpacingY / 2 + nodeSpacingY / 2;
                      const x1 = (helixWidth / 2) - amplitude + 20;
                      const x2 = (helixWidth / 2) + amplitude - 20;
                      return (
                        <line
                          key={`rung-${i}`}
                          x1={x1}
                          y1={y}
                          x2={x2}
                          y2={y}
                          stroke="rgba(148,163,184,0.2)"
                          strokeWidth="1"
                          strokeDasharray="4 3"
                        />
                      );
                    })}
                  </svg>

                  {/* Skill nodes */}
                  {t.skills.map((skill, i) => {
                    const y = i * nodeSpacingY + nodeSpacingY / 2;
                    const isLeft = skill.side === "left";
                    const x = isLeft
                      ? (helixWidth / 2) - amplitude
                      : (helixWidth / 2) + amplitude;
                    const isIndigo = i % 2 === 0;
                    const bgColor = isIndigo ? "#4338ca" : "#0d9488";
                    const ringColor = isIndigo ? "rgba(67,56,202,0.15)" : "rgba(13,148,136,0.15)";
                    const shadowColor = isIndigo ? "rgba(67,56,202,0.2)" : "rgba(13,148,136,0.2)";

                    return (
                      <div
                        key={i}
                        className="node-appear absolute flex items-center gap-2"
                        style={{
                          animationDelay: `${0.3 + i * 0.1}s`,
                          top: `${y}px`,
                          left: `${x}px`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {/* Label on the outer side */}
                        {isLeft && (
                          <span
                            className="text-xs font-medium text-gray-500 whitespace-nowrap"
                            style={{ marginRight: "4px", textAlign: "right", minWidth: "60px", direction: "ltr" }}
                          >
                            {skill.label}
                          </span>
                        )}

                        {/* Node circle */}
                        <div className="relative shrink-0">
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{
                              width: "36px",
                              height: "36px",
                              top: "-6px",
                              left: "-6px",
                              border: `2px solid ${ringColor}`,
                            }}
                          />
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{
                              background: bgColor,
                              boxShadow: `0 4px 12px ${shadowColor}`,
                            }}
                          >
                            <div className="w-2 h-2 rounded-full bg-white/80" />
                          </div>
                        </div>

                        {/* Label on the outer side */}
                        {!isLeft && (
                          <span
                            className="text-xs font-medium text-gray-500 whitespace-nowrap"
                            style={{ marginLeft: "4px", direction: "ltr" }}
                          >
                            {skill.label}
                          </span>
                        )}
                      </div>
                    );
                  })}

                  {/* Central spine line */}
                  <div
                    className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2"
                    style={{
                      background: "linear-gradient(to bottom, transparent, rgba(148,163,184,0.2) 10%, rgba(148,163,184,0.2) 90%, transparent)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className={`${isAr ? "lg:order-1 text-right" : ""}`}>
              {/* Name */}
              <h1
                className="fade-up text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s" }}
              >
                {t.name}
              </h1>

              {/* Title with gradient */}
              <p
                className="fade-up mt-2 text-base sm:text-lg font-medium"
                style={{
                  animationDelay: "0.3s",
                  background: "linear-gradient(135deg, #4338ca, #0d9488)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t.title}
              </p>

              {/* Decorative bar */}
              <div
                className={`fade-up mt-5 h-1 w-16 rounded-full ${isAr ? "ml-auto" : ""}`}
                style={{
                  animationDelay: "0.35s",
                  background: "linear-gradient(90deg, #4338ca, #0d9488)",
                }}
              />

              {/* Tagline */}
              <p
                className="fade-up mt-5 text-gray-400 leading-relaxed text-sm sm:text-base max-w-md"
                style={{ animationDelay: "0.4s" }}
              >
                {t.tagline}
              </p>

              {/* Social links */}
              <div
                className={`fade-up mt-6 flex gap-3 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.5s" }}
              >
                {t.socials.map((s, i) => {
                  const Icon = socialIcons[s.platform] || Github;
                  return (
                    <a
                      key={i}
                      href={s.url}
                      className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:border-indigo-300 hover:text-indigo-500 hover:shadow-sm transition-all duration-200"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>

              {/* CTAs */}
              <div
                className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.6s" }}
              >
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/20 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #4338ca, #0d9488)" }}
                >
                  {t.cta}
                  <ArrowRight
                    size={16}
                    className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`}
                  />
                </a>
                <a
                  href="#"
                  className="px-7 py-3.5 text-sm font-semibold text-gray-500 bg-white border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-sm transition-all"
                >
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Stats */}
              <div
                className={`fade-up mt-10 flex gap-8 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.7s" }}
              >
                {[
                  { value: "10+", label: isAr ? "مهارات" : "Skills" },
                  { value: "50+", label: isAr ? "مشروع" : "Projects" },
                  { value: "5+", label: isAr ? "سنوات" : "Years" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div
                      className="text-2xl font-bold bg-clip-text text-transparent"
                      style={{ backgroundImage: "linear-gradient(135deg, #4338ca, #0d9488)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
