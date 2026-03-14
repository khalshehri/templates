"use client";

import { useRef, useCallback, useState } from "react";
import { Shield, Wifi, Fingerprint, Scan, Terminal } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    badge: "System Online",
    cardHeader: "IDENTITY VERIFIED",
    name: "Alex Morgan",
    title: "Senior Full-Stack Developer",
    status: "Available for Hire",
    level: "EXPERT // LVL 99",
    skills: ["Frontend", "Backend", "DevOps", "Mobile", "AI/ML"],
    cta1: "Initialize Contact",
    cta2: "Scan Portfolio",
    footer: "// CONNECTION SECURE — LATENCY 12ms",
    fieldLabels: {
      name: "NAME",
      title: "TITLE",
      status: "STATUS",
      level: "CLEARANCE",
      skills: "SKILLS",
    },
  },
  ar: {
    badge: "النظام متصل",
    cardHeader: "تم التحقق من الهوية",
    name: "أليكس مورغان",
    title: "مطور متكامل أول",
    status: "متاح للتوظيف",
    level: "خبير // المستوى 99",
    skills: ["الواجهة الأمامية", "الخلفية", "DevOps", "الموبايل", "AI/ML"],
    cta1: "بدء الاتصال",
    cta2: "فحص الأعمال",
    footer: "// اتصال آمن — زمن الاستجابة 12مللي ثانية",
    fieldLabels: {
      name: "الاسم",
      title: "المسمى",
      status: "الحالة",
      level: "المستوى",
      skills: "المهارات",
    },
  },
};

/* Deterministic barcode widths: 30 lines */
const barcodeWidths = [
  2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 3, 1, 2, 2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 1,
  3, 1, 2, 1, 3,
];

export function Hero25({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr
    ? "var(--font-changa), sans-serif"
    : "var(--font-inter), sans-serif";
  const fontBody = isAr
    ? "var(--font-tajawal), sans-serif"
    : "var(--font-inter), sans-serif";
  const dir = isAr ? "rtl" : "ltr";
  const containerRef = useRef<HTMLDivElement>(null);
  const [particlesReady, setParticlesReady] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Card scale-in with elastic ease
      gsap.from(".hero25-card", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      });

      // Scan line sweep (top to bottom, infinite)
      gsap.fromTo(
        ".hero25-scanline",
        { y: "-100%" },
        {
          y: "500%",
          duration: 3,
          repeat: -1,
          ease: "none",
        }
      );

      // Glitch effect: periodic x-shift + opacity flicker on card
      gsap.to(".hero25-card-inner", {
        x: 2,
        opacity: 0.92,
        duration: 0.08,
        repeat: -1,
        repeatDelay: 3,
        yoyo: true,
        ease: "steps(1)",
      });

      // "IDENTITY VERIFIED" typing reveal via clip-path
      gsap.fromTo(
        ".hero25-verified-text",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "steps(18)",
          delay: 0.5,
        }
      );

      // Skills list slide in from side with stagger
      gsap.from(".hero25-skill", {
        x: isAr ? 40 : -40,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.12,
        delay: 0.8,
      });

      // HUD corner brackets fade in
      gsap.from(".hero25-corner", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.3,
      });

      // Blinking status dot
      gsap.to(".hero25-status-dot", {
        opacity: 0.2,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Barcode lines stagger fade in
      gsap.from(".hero25-barcode-line", {
        opacity: 0,
        duration: 0.03,
        ease: "steps(1)",
        stagger: 0.04,
        delay: 1,
      });

      // Avatar initials scale in
      gsap.from(".hero25-avatar", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.6,
      });

      // CTA buttons slide up
      gsap.from(".hero25-cta", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.15,
        delay: 1.3,
      });

      // Footer text fade in
      gsap.from(".hero25-footer", {
        opacity: 0,
        duration: 0.6,
        delay: 1.6,
      });

      // HUD data readouts fade in
      gsap.from(".hero25-hud-data", {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.4,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      dir={dir}
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{
        background: "#030308",
        fontFamily: fontBody,
      }}
    >
      {/* Particles */}
      <Particles
        id="hero25-particles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: {
              value: 30,
              density: { enable: true, width: 1920, height: 1080 },
            },
            color: {
              value: ["#00fff5", "#00ff88", "#3b82f6"],
            },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.08, max: 0.25 },
              animation: { enable: true, speed: 0.3, sync: false },
            },
            size: {
              value: { min: 1, max: 2.5 },
            },
            move: {
              enable: true,
              speed: 0.4,
              direction: "top" as const,
              outModes: { default: "out" as const },
              straight: false,
            },
          },
          detectRetina: true,
        }}
      />

      {/* Scan lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0px, transparent 1px, rgba(255,255,255,0.02) 1px, rgba(255,255,255,0.02) 2px)",
          backgroundSize: "100% 2px",
        }}
      />

      {/* Radial glow behind card */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(0,255,245,0.06) 0%, rgba(0,255,245,0.02) 40%, transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* HUD Corner Brackets */}
      {/* Top-left */}
      <div
        className="hero25-corner absolute hidden md:block"
        style={{
          top: "80px",
          left: "40px",
          width: "40px",
          height: "40px",
          borderTop: "2px solid rgba(0,255,245,0.3)",
          borderLeft: "2px solid rgba(0,255,245,0.3)",
          zIndex: 10,
        }}
      />
      {/* Top-right */}
      <div
        className="hero25-corner absolute hidden md:block"
        style={{
          top: "80px",
          right: "40px",
          width: "40px",
          height: "40px",
          borderTop: "2px solid rgba(0,255,245,0.3)",
          borderRight: "2px solid rgba(0,255,245,0.3)",
          zIndex: 10,
        }}
      />
      {/* Bottom-left */}
      <div
        className="hero25-corner absolute hidden md:block"
        style={{
          bottom: "40px",
          left: "40px",
          width: "40px",
          height: "40px",
          borderBottom: "2px solid rgba(0,255,245,0.3)",
          borderLeft: "2px solid rgba(0,255,245,0.3)",
          zIndex: 10,
        }}
      />
      {/* Bottom-right */}
      <div
        className="hero25-corner absolute hidden md:block"
        style={{
          bottom: "40px",
          right: "40px",
          width: "40px",
          height: "40px",
          borderBottom: "2px solid rgba(0,255,245,0.3)",
          borderRight: "2px solid rgba(0,255,245,0.3)",
          zIndex: 10,
        }}
      />

      {/* HUD Data Readouts */}
      <div
        className="hero25-hud-data absolute hidden lg:block"
        style={{
          top: "100px",
          left: "60px",
          zIndex: 10,
          fontFamily: "monospace",
          fontSize: "10px",
          color: "rgba(0,255,245,0.35)",
          letterSpacing: "1px",
          lineHeight: "1.8",
        }}
      >
        <div>SYS_CLOCK: 09:41:22</div>
        <div>NODE_ID: 0xA7F3</div>
        <div>ENCRYPT: AES-256</div>
        <div>PROTOCOL: HTTPS/3</div>
      </div>

      <div
        className="hero25-hud-data absolute hidden lg:block"
        style={{
          top: "100px",
          right: "60px",
          zIndex: 10,
          fontFamily: "monospace",
          fontSize: "10px",
          color: "rgba(0,255,245,0.35)",
          letterSpacing: "1px",
          lineHeight: "1.8",
          textAlign: "right",
        }}
      >
        <div>UPTIME: 99.97%</div>
        <div>REGION: GLOBAL</div>
        <div>AUTH: BIOMETRIC</div>
        <div>STATUS: NOMINAL</div>
      </div>

      {/* Main Layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* System Online Badge */}
        <div className="text-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
            style={{
              background: "rgba(0,255,136,0.08)",
              color: "#00ff88",
              border: "1px solid rgba(0,255,136,0.2)",
              fontFamily: "monospace",
              letterSpacing: "2px",
            }}
          >
            <Wifi size={14} />
            {t.badge}
          </span>
        </div>

        {/* Content Grid: Skills — Card — Contact */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center"
        >
          {/* Left Side: Skills */}
          <div className={`${isAr ? "lg:order-3" : "lg:order-1"} flex flex-col gap-3`}>
            <div
              className="mb-2"
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "rgba(0,255,245,0.5)",
                letterSpacing: "3px",
              }}
            >
              <Terminal size={14} className="inline-block mb-1" style={{ marginInlineEnd: "6px" }} />
              {t.fieldLabels.skills}
            </div>
            {t.skills.map((skill, i) => (
              <div
                key={i}
                className="hero25-skill cursor-pointer"
                style={{
                  padding: "10px 16px",
                  background: "rgba(0,255,245,0.04)",
                  border: "1px solid rgba(0,255,245,0.1)",
                  borderRadius: "6px",
                  fontFamily: "monospace",
                  fontSize: "13px",
                  color: "#00fff5",
                  letterSpacing: "1px",
                  transition: "background 0.3s, border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(0,255,245,0.1)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(0,255,245,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(0,255,245,0.04)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(0,255,245,0.1)";
                }}
              >
                <span style={{ color: "rgba(0,255,245,0.4)", marginInlineEnd: "8px" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {skill}
              </div>
            ))}
          </div>

          {/* Center: Hologram Card */}
          <div className="lg:order-2 flex justify-center">
            <div
              className="hero25-card relative w-full max-w-[380px] sm:max-w-md"
              style={{
                borderRadius: "16px",
                padding: "2px",
                background:
                  "linear-gradient(135deg, rgba(0,255,245,0.6), rgba(59,130,246,0.4), rgba(0,255,136,0.3))",
                boxShadow:
                  "0 0 40px rgba(0,255,245,0.15), 0 0 80px rgba(0,255,245,0.05), inset 0 0 20px rgba(0,255,245,0.05)",
              }}
            >
              <div
                className="hero25-card-inner relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, #0a0a18 0%, #080815 50%, #060612 100%)",
                  borderRadius: "14px",
                  padding: "28px 24px",
                }}
              >
                {/* Scan line effect inside card */}
                <div
                  className="hero25-scanline absolute pointer-events-none"
                  style={{
                    left: 0,
                    right: 0,
                    height: "60px",
                    background:
                      "linear-gradient(180deg, transparent, rgba(0,255,245,0.04), transparent)",
                    zIndex: 5,
                  }}
                />

                {/* Card Header */}
                <div
                  className="flex items-center justify-between mb-6"
                  style={{ position: "relative", zIndex: 6 }}
                >
                  <div className="flex items-center gap-2">
                    <Shield size={16} style={{ color: "#00fff5" }} />
                    <span
                      className="hero25-verified-text"
                      style={{
                        fontFamily: "monospace",
                        fontSize: "12px",
                        color: "#00fff5",
                        letterSpacing: "3px",
                        fontWeight: 700,
                      }}
                    >
                      {t.cardHeader}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="hero25-status-dot"
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#00ff88",
                        boxShadow: "0 0 8px rgba(0,255,136,0.6)",
                      }}
                    />
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(0,255,245,0.2), transparent)",
                    marginBottom: "24px",
                    position: "relative",
                    zIndex: 6,
                  }}
                />

                {/* Avatar + Name Section */}
                <div
                  className="flex flex-col items-center gap-4 mb-6"
                  style={{ position: "relative", zIndex: 6 }}
                >
                  {/* Avatar Circle with Initials */}
                  <div
                    className="hero25-avatar"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      border: "2px solid rgba(0,255,245,0.4)",
                      background:
                        "linear-gradient(135deg, rgba(0,255,245,0.1), rgba(59,130,246,0.1))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 20px rgba(0,255,245,0.1)",
                    }}
                  >
                    <Fingerprint
                      size={36}
                      style={{ color: "rgba(0,255,245,0.5)" }}
                    />
                  </div>

                  {/* Name */}
                  <div className="text-center">
                    <h1
                      style={{
                        fontFamily: fontHeading,
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "1px",
                        marginBottom: "4px",
                      }}
                    >
                      {t.name}
                    </h1>
                    <p
                      style={{
                        fontFamily: fontBody,
                        fontSize: "14px",
                        color: "rgba(0,255,245,0.7)",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {t.title}
                    </p>
                  </div>
                </div>

                {/* Info Fields */}
                <div
                  className="space-y-3 mb-6"
                  style={{
                    position: "relative",
                    zIndex: 6,
                    fontFamily: "monospace",
                  }}
                >
                  {/* Status */}
                  <div
                    className="flex items-center justify-between"
                    style={{
                      padding: "8px 12px",
                      background: "rgba(0,255,136,0.05)",
                      borderRadius: "6px",
                      border: "1px solid rgba(0,255,136,0.1)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "2px",
                      }}
                    >
                      {t.fieldLabels.status}
                    </span>
                    <span
                      className="flex items-center gap-2"
                      style={{
                        fontSize: "12px",
                        color: "#00ff88",
                        fontWeight: 600,
                      }}
                    >
                      <Scan size={12} />
                      {t.status}
                    </span>
                  </div>

                  {/* Level */}
                  <div
                    className="flex items-center justify-between"
                    style={{
                      padding: "8px 12px",
                      background: "rgba(59,130,246,0.05)",
                      borderRadius: "6px",
                      border: "1px solid rgba(59,130,246,0.1)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "2px",
                      }}
                    >
                      {t.fieldLabels.level}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#3b82f6",
                        fontWeight: 600,
                      }}
                    >
                      {t.level}
                    </span>
                  </div>
                </div>

                {/* Barcode */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 6,
                  }}
                >
                  <div
                    style={{
                      fontSize: "9px",
                      color: "rgba(255,255,255,0.2)",
                      fontFamily: "monospace",
                      letterSpacing: "2px",
                      marginBottom: "6px",
                    }}
                  >
                    ID-HASH: 7F3A9B2E
                  </div>
                  <div
                    className="flex items-end gap-[2px]"
                    style={{ height: "28px" }}
                  >
                    {barcodeWidths.map((w, i) => (
                      <div
                        key={i}
                        className="hero25-barcode-line"
                        style={{
                          width: `${w}px`,
                          height: `${60 + ((i * 7 + 3) % 40)}%`,
                          background:
                            i % 3 === 0
                              ? "rgba(0,255,245,0.4)"
                              : i % 3 === 1
                              ? "rgba(59,130,246,0.4)"
                              : "rgba(0,255,136,0.3)",
                          borderRadius: "1px",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Info / CTA */}
          <div
            className={`${isAr ? "lg:order-1" : "lg:order-3"} flex flex-col items-center lg:items-start gap-6`}
          >
            {/* CTAs */}
            <div className="flex flex-col gap-3 w-full max-w-[260px]">
              <button
                className="hero25-cta cursor-pointer flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,255,245,0.15), rgba(0,255,245,0.05))",
                  border: "1px solid rgba(0,255,245,0.3)",
                  color: "#00fff5",
                  fontFamily: "monospace",
                  letterSpacing: "1px",
                  boxShadow: "0 0 20px rgba(0,255,245,0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "linear-gradient(135deg, rgba(0,255,245,0.25), rgba(0,255,245,0.1))";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 30px rgba(0,255,245,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "linear-gradient(135deg, rgba(0,255,245,0.15), rgba(0,255,245,0.05))";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 20px rgba(0,255,245,0.08)";
                }}
              >
                <Terminal size={16} />
                {t.cta1}
              </button>

              <button
                className="hero25-cta cursor-pointer flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(59,130,246,0.25)",
                  color: "rgba(59,130,246,0.8)",
                  fontFamily: "monospace",
                  letterSpacing: "1px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(59,130,246,0.08)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(59,130,246,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(59,130,246,0.25)";
                }}
              >
                <Scan size={16} />
                {t.cta2}
              </button>
            </div>

            {/* Small data block */}
            <div
              className="hero25-hud-data"
              style={{
                fontFamily: "monospace",
                fontSize: "10px",
                color: "rgba(0,255,245,0.3)",
                letterSpacing: "1px",
                lineHeight: "1.8",
                padding: "12px 16px",
                border: "1px solid rgba(0,255,245,0.06)",
                borderRadius: "8px",
                background: "rgba(0,255,245,0.02)",
                width: "100%",
                maxWidth: "260px",
              }}
            >
              <div>FRAMEWORK: NEXT.JS</div>
              <div>RUNTIME: NODE 20</div>
              <div>DEPLOY: EDGE</div>
              <div>PROJECTS: 150+</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="hero25-footer text-center mt-12"
          style={{
            fontFamily: "monospace",
            fontSize: "11px",
            color: "rgba(0,255,245,0.25)",
            letterSpacing: "2px",
          }}
        >
          {t.footer}
        </div>
      </div>
    </section>
  );
}
