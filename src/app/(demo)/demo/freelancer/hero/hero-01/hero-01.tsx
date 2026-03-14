"use client";

import { ArrowRight, Download, MapPin } from "lucide-react";

const content = {
  en: {
    greeting: "Hello, I'm",
    name: "John Doe",
    title: "Full-Stack Developer & UI Designer",
    bio: "I craft beautiful, performant web experiences that users love. With 8+ years of experience, I turn complex problems into elegant digital solutions.",
    cta1: "Download CV",
    cta2: "Let's Talk",
    location: "San Francisco, CA",
    status: "Available for work",
    statYears: "8+",
    statYearsLabel: "Years",
    statProjects: "120+",
    statProjectsLabel: "Projects",
    statClients: "50+",
    statClientsLabel: "Happy Clients",
  },
  ar: {
    greeting: "مرحباً، أنا",
    name: "جون دو",
    title: "مطور فُل ستاك ومصمم واجهات",
    bio: "أصنع تجارب ويب جميلة وعالية الأداء يحبها المستخدمون. بخبرة +8 سنوات، أحوّل المشكلات المعقدة إلى حلول رقمية أنيقة.",
    cta1: "تحميل السيرة",
    cta2: "لنتحدث",
    location: "سان فرانسيسكو، كاليفورنيا",
    status: "متاح للعمل",
    statYears: "+8",
    statYearsLabel: "سنوات",
    statProjects: "+120",
    statProjectsLabel: "مشروع",
    statClients: "+50",
    statClientsLabel: "عميل سعيد",
  },
};

const skills = ["React", "Node.js", "Figma", "TypeScript", "AWS", "Python"];
const skillAngles = [0, 60, 120, 180, 240, 300];

export function Hero01({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";
  const fadeAnim = isAr ? "fadeSlideLeft" : "fadeSlideRight";

  return (
    <>
      <style>{`
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes fadeSlideRight {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeSlideLeft {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes pulseAvail {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        @keyframes avatarGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(245,158,11,0.15); }
          50% { box-shadow: 0 0 50px rgba(245,158,11,0.3); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fl-hero-ring,
          .fl-hero-orbit,
          .fl-hero-orbit-tag,
          .fl-hero-fade,
          .fl-hero-pulse,
          .fl-hero-avatar-glow {
            animation: none !important;
          }
          .fl-hero-fade {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        style={{
          background: "#0f0f0f",
          fontFamily: fontBody,
          direction: isAr ? "rtl" : "ltr",
        }}
        className="min-h-screen relative overflow-hidden"
      >
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(245,158,11,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(251,191,36,0.03) 0%, transparent 40%)",
          }}
        />

        {/* Fine grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center min-h-screen py-20">
          <div
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center"
          >
            {/* Avatar Area */}
            <div
              className={`flex flex-col items-center gap-8 ${isAr ? "lg:order-2" : "lg:order-1"}`}
            >
              {/* Avatar with orbit container */}
              <div className="relative" style={{ width: 340, height: 340 }}>
                {/* Rotating gradient ring */}
                <div
                  className="fl-hero-ring absolute rounded-full"
                  style={{
                    width: 230,
                    height: 230,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background:
                      "conic-gradient(from 0deg, #f59e0b, #f97316, #f59e0b, #fbbf24, #f59e0b)",
                    padding: 3,
                    animation: "ringRotate 30s linear infinite",
                  }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{ background: "#0f0f0f" }}
                  />
                </div>

                {/* Avatar placeholder */}
                <div
                  className="fl-hero-avatar-glow absolute rounded-full flex items-center justify-center"
                  style={{
                    width: 220,
                    height: 220,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background:
                      "linear-gradient(135deg, #1a1a1a 0%, #252525 100%)",
                    animation: "avatarGlow 4s ease-in-out infinite",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fontHeading,
                      fontSize: "3.5rem",
                      fontWeight: 700,
                      color: "#f59e0b",
                      letterSpacing: "0.05em",
                      userSelect: "none",
                    }}
                  >
                    {isAr ? "جد" : "JD"}
                  </span>
                </div>

                {/* Orbiting skill tags */}
                <div
                  className="fl-hero-orbit absolute"
                  style={{
                    width: 340,
                    height: 340,
                    top: 0,
                    left: 0,
                    animation: "orbitSpin 50s linear infinite",
                  }}
                >
                  {skills.map((skill, i) => {
                    const angle = skillAngles[i];
                    const rad = (angle * Math.PI) / 180;
                    const radius = 160;
                    const x = Math.cos(rad) * radius;
                    const y = Math.sin(rad) * radius;

                    return (
                      <div
                        key={skill}
                        className="fl-hero-orbit-tag absolute"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                          animation: "orbitReverse 50s linear infinite",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            padding: "5px 14px",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            fontFamily: "var(--font-inter)",
                            color: "#fbbf24",
                            background: "rgba(245,158,11,0.08)",
                            border: "1px solid rgba(245,158,11,0.2)",
                            borderRadius: 9999,
                            backdropFilter: "blur(8px)",
                            whiteSpace: "nowrap",
                            letterSpacing: "0.03em",
                          }}
                        >
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Location & availability */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="flex items-center gap-2"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", fontFamily: fontBody }}
                >
                  <MapPin size={14} style={{ color: "#f59e0b", flexShrink: 0 }} />
                  <span>{t.location}</span>
                </div>
                <div className="flex items-center gap-2" style={{ fontSize: "0.8rem" }}>
                  <span
                    className="fl-hero-pulse"
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#22c55e",
                      display: "inline-block",
                      flexShrink: 0,
                      animation: "pulseAvail 2s ease-in-out infinite",
                    }}
                  />
                  <span style={{ color: "rgba(255,255,255,0.6)", fontFamily: fontBody }}>
                    {t.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div
              className={`flex flex-col ${isAr ? "lg:order-1 items-end text-right" : "lg:order-2 items-start text-left"}`}
              style={{ gap: "1.75rem" }}
            >
              {/* Greeting */}
              <div
                className="fl-hero-fade"
                style={{
                  opacity: 0,
                  animation: `${fadeAnim} 0.7s ease-out 0.1s forwards`,
                }}
              >
                <span
                  style={{
                    fontFamily: fontBody,
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#f59e0b",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {t.greeting}
                </span>
              </div>

              {/* Name */}
              <div
                className="fl-hero-fade"
                style={{
                  opacity: 0,
                  animation: `${fadeAnim} 0.7s ease-out 0.25s forwards`,
                }}
              >
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl"
                  style={{
                    fontFamily: fontHeading,
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  {t.name}
                </h1>
              </div>

              {/* Title */}
              <div
                className="fl-hero-fade"
                style={{
                  opacity: 0,
                  animation: `${fadeAnim} 0.7s ease-out 0.4s forwards`,
                }}
              >
                <p
                  className="text-xl"
                  style={{
                    fontFamily: fontBody,
                    color: "rgba(255,255,255,0.55)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {t.title}
                </p>
              </div>

              {/* Bio */}
              <div
                className="fl-hero-fade"
                style={{
                  opacity: 0,
                  animation: `${fadeAnim} 0.7s ease-out 0.55s forwards`,
                }}
              >
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.4)",
                    margin: 0,
                    maxWidth: 480,
                  }}
                >
                  {t.bio}
                </p>
              </div>

              {/* CTAs */}
              <div
                className="fl-hero-fade flex flex-wrap gap-4"
                style={{
                  opacity: 0,
                  animation: `${fadeAnim} 0.7s ease-out 0.7s forwards`,
                }}
              >
                <button
                  className="cursor-pointer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 28px",
                    background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                    color: "#0f0f0f",
                    fontFamily: fontBody,
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    borderRadius: 12,
                    border: "none",
                    letterSpacing: "0.02em",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 20px rgba(245,158,11,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(245,158,11,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(245,158,11,0.25)";
                  }}
                >
                  <Download size={16} />
                  {t.cta1}
                </button>
                <button
                  className="cursor-pointer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 28px",
                    background: "transparent",
                    color: "#ffffff",
                    fontFamily: fontBody,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.15)",
                    letterSpacing: "0.02em",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(245,158,11,0.5)";
                    e.currentTarget.style.background = "rgba(245,158,11,0.05)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {t.cta2}
                  <ArrowRight size={16} style={{ transform: isAr ? "scaleX(-1)" : "none" }} />
                </button>
              </div>

              {/* Stats */}
              <div
                className="fl-hero-fade flex gap-8 sm:gap-10"
                style={{
                  opacity: 0,
                  animation: `${fadeAnim} 0.7s ease-out 0.85s forwards`,
                  marginTop: 8,
                }}
              >
                {[
                  { value: t.statYears, label: t.statYearsLabel },
                  { value: t.statProjects, label: t.statProjectsLabel },
                  { value: t.statClients, label: t.statClientsLabel },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col"
                    style={{
                      alignItems: isAr ? "flex-end" : "flex-start",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fontHeading,
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: "#f59e0b",
                        lineHeight: 1.2,
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      style={{
                        fontFamily: fontBody,
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.35)",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        marginTop: 2,
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.3) 50%, transparent 100%)",
          }}
        />
      </section>
    </>
  );
}
