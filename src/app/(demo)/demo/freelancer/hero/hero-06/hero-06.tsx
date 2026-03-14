"use client";

import {
  ArrowRight,
  Instagram,
  Twitter,
  Dribbble,
  Github,
  Heart,
  MessageCircle,
} from "lucide-react";

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

export function Hero06({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes avatarPop {
          0% { transform: scale(0); }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes fadeUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes gridPop {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes socialBounce {
          0% { transform: translateY(10px); opacity: 0; }
          60% { transform: translateY(-3px); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero06-gradient { animation: none !important; }
          .hero06-avatar { animation: none !important; }
          .hero06-fadeup { animation: none !important; opacity: 1 !important; }
          .hero06-gridpop { animation: none !important; opacity: 1 !important; }
          .hero06-socialbounce { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <section
        className="hero06-gradient min-h-screen relative overflow-hidden"
        dir={isAr ? "rtl" : "ltr"}
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #764ba2 75%, #667eea 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite",
          fontFamily: fontBody,
        }}
      >
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
                animation: "avatarPop 0.7s ease-out both",
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
              className="hero06-fadeup text-4xl sm:text-5xl font-bold text-white text-center"
              style={{
                fontFamily: fontHeading,
                animation: "fadeUp 0.6s ease-out 0.2s both",
              }}
            >
              {t.name}
            </h1>

            {/* Handle */}
            <p
              className="hero06-fadeup text-center mt-2"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 15,
                fontFamily: fontBody,
                animation: "fadeUp 0.6s ease-out 0.35s both",
              }}
            >
              {t.handle}
            </p>

            {/* Bio */}
            <p
              className="hero06-fadeup text-center mt-4 max-w-md leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: 16,
                fontFamily: fontBody,
                animation: "fadeUp 0.6s ease-out 0.45s both",
              }}
            >
              {t.bio}
            </p>

            {/* Social Links */}
            <div
              className="hero06-fadeup flex items-center gap-3 mt-6"
              style={{ animation: "fadeUp 0.6s ease-out 0.55s both" }}
            >
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    aria-label={social.label}
                    className="hero06-socialbounce cursor-pointer"
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
                      animation: `socialBounce 0.5s ease-out ${0.6 + i * 0.08}s both`,
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
              className="hero06-fadeup flex items-center gap-6 sm:gap-10 mt-8"
              style={{ animation: "fadeUp 0.6s ease-out 0.65s both" }}
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
                  className="hero06-gridpop relative cursor-pointer group"
                  style={{
                    aspectRatio: "1/1",
                    borderRadius: 16,
                    overflow: "hidden",
                    background: thumbnailGradients[i],
                    animation: `gridPop 0.5s ease-out ${0.8 + i * 0.1}s both`,
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
              className="hero06-fadeup w-full mt-8 cursor-pointer"
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
                animation: "fadeUp 0.6s ease-out 1.5s both",
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
    </>
  );
}
