"use client";

import { ArrowRight, Palette, Eye } from "lucide-react";

const content = {
  en: {
    badge: "Creative Portfolio",
    heading: ["I Design", "& Build Things"],
    sub: "Freelance designer and developer crafting digital experiences that stand out. Every project is a story told through pixels and code.",
    tags: ["UI/UX Design", "Web Development", "Brand Identity"],
    cta1: "View My Work",
    cta2: "Hire Me",
    footer: "42 projects completed",
  },
  ar: {
    badge: "معرض الأعمال",
    heading: ["أصمّم", "وأبني الأشياء"],
    sub: "مصمم ومطور مستقل أصنع تجارب رقمية مميزة. كل مشروع هو قصة تُروى عبر البكسل والكود.",
    tags: ["تصميم UI/UX", "تطوير الويب", "هوية بصرية"],
    cta1: "شاهد أعمالي",
    cta2: "وظّفني",
    footer: "42 مشروع مكتمل",
  },
};

const projectCards = [
  { label: "E-commerce App", color: "#7c3aed", colorEnd: "#a78bfa", w: 180, h: 140, top: 8, left: 42, rotate: -3, floatDur: 7, floatDelay: 0 },
  { label: "SaaS Dashboard", color: "#ec4899", colorEnd: "#f9a8d4", w: 200, h: 160, top: 5, left: 68, rotate: 4, floatDur: 8, floatDelay: 0.8 },
  { label: "Brand Identity", color: "#06b6d4", colorEnd: "#67e8f9", w: 165, h: 130, top: 28, left: 52, rotate: -2, floatDur: 9, floatDelay: 1.5 },
  { label: "Mobile App", color: "#f59e0b", colorEnd: "#fcd34d", w: 190, h: 150, top: 25, left: 78, rotate: 5, floatDur: 7.5, floatDelay: 0.4 },
  { label: "Landing Page", color: "#10b981", colorEnd: "#6ee7b7", w: 175, h: 135, top: 50, left: 45, rotate: 3, floatDur: 8.5, floatDelay: 2 },
  { label: "Web App", color: "#3b82f6", colorEnd: "#93c5fd", w: 210, h: 170, top: 48, left: 72, rotate: -4, floatDur: 6.5, floatDelay: 1.2 },
  { label: "Logo Design", color: "#7c3aed", colorEnd: "#c4b5fd", w: 160, h: 125, top: 72, left: 50, rotate: 2, floatDur: 10, floatDelay: 0.6 },
  { label: "UI Kit", color: "#ec4899", colorEnd: "#fbcfe8", w: 185, h: 145, top: 70, left: 76, rotate: -5, floatDur: 7, floatDelay: 1.8 },
];

export function Hero03({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes h03CardFloat0 { 0%, 100% { transform: translateY(0px) rotate(-3deg); } 50% { transform: translateY(-8px) rotate(-3deg); } }
        @keyframes h03CardFloat1 { 0%, 100% { transform: translateY(0px) rotate(4deg); } 50% { transform: translateY(8px) rotate(4deg); } }
        @keyframes h03CardFloat2 { 0%, 100% { transform: translateY(0px) rotate(-2deg); } 50% { transform: translateY(-7px) rotate(-2deg); } }
        @keyframes h03CardFloat3 { 0%, 100% { transform: translateY(0px) rotate(5deg); } 50% { transform: translateY(8px) rotate(5deg); } }
        @keyframes h03CardFloat4 { 0%, 100% { transform: translateY(0px) rotate(3deg); } 50% { transform: translateY(-8px) rotate(3deg); } }
        @keyframes h03CardFloat5 { 0%, 100% { transform: translateY(0px) rotate(-4deg); } 50% { transform: translateY(7px) rotate(-4deg); } }
        @keyframes h03CardFloat6 { 0%, 100% { transform: translateY(0px) rotate(2deg); } 50% { transform: translateY(-6px) rotate(2deg); } }
        @keyframes h03CardFloat7 { 0%, 100% { transform: translateY(0px) rotate(-5deg); } 50% { transform: translateY(8px) rotate(-5deg); } }

        @keyframes h03CardFadeIn {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes h03PanelSlide {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes h03PanelSlideRtl {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes h03TagPop {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes h03GlowPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        .h03-card {
          transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.35s ease;
        }
        .h03-card:hover {
          transform: scale(1.08) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4) !important;
          z-index: 20 !important;
        }

        .h03-cta-primary {
          transition: all 0.3s ease;
        }
        .h03-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(124,58,237,0.4);
        }
        .h03-cta-secondary {
          transition: all 0.3s ease;
        }
        .h03-cta-secondary:hover {
          transform: translateY(-2px);
          border-color: rgba(124,58,237,0.5) !important;
          background: rgba(124,58,237,0.06) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .h03-card,
          .h03-panel,
          .h03-tag,
          .h03-fade {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        style={{
          background: "#111111",
          fontFamily: fontBody,
          direction: isAr ? "rtl" : "ltr",
        }}
        className="min-h-screen relative overflow-hidden"
      >
        {/* Background radial glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 65% 30%, rgba(124,58,237,0.06) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(236,72,153,0.04) 0%, transparent 45%)",
          }}
        />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Project Cards — Background Masonry */}
        <div className="absolute inset-0 pointer-events-none">
          {projectCards.map((card, i) => {
            const mirroredLeft = isAr ? (100 - card.left - (card.w / 16)) : card.left;

            return (
              <div
                key={card.label}
                className="h03-card absolute pointer-events-auto"
                style={{
                  width: card.w,
                  height: card.h,
                  top: `${card.top}%`,
                  left: `${mirroredLeft}%`,
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${card.color} 0%, ${card.colorEnd} 100%)`,
                  opacity: 0,
                  animation: `h03CardFadeIn 0.6s ease-out ${0.15 + i * 0.1}s forwards, h03CardFloat${i} ${card.floatDur}s ease-in-out ${card.floatDelay}s infinite`,
                  boxShadow: `0 8px 32px ${card.color}33`,
                  cursor: "pointer",
                  overflow: "hidden",
                  zIndex: 5,
                }}
              >
                {/* Decorative inner shapes */}
                <div
                  style={{
                    position: "absolute",
                    top: "15%",
                    left: "12%",
                    width: "45%",
                    height: "35%",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.15)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "15%",
                    right: "12%",
                    width: "25%",
                    height: "16%",
                    borderRadius: 6,
                    background: "rgba(255,255,255,0.12)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "38%",
                    right: "12%",
                    width: "25%",
                    height: "16%",
                    borderRadius: 6,
                    background: "rgba(255,255,255,0.08)",
                  }}
                />
                {/* Bottom label */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "10px 14px",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.4))",
                    borderRadius: "0 0 16px 16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.9)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {card.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Glass Content Panel — Left Side */}
        <div
          className="relative z-10 flex items-center min-h-screen"
          style={{ padding: "80px 0" }}
        >
          <div
            className="h03-panel"
            style={{
              position: "relative",
              width: "min(520px, 44%)",
              minHeight: "75vh",
              marginLeft: isAr ? "auto" : "clamp(24px, 5vw, 80px)",
              marginRight: isAr ? "clamp(24px, 5vw, 80px)" : "auto",
              background: "rgba(17,17,17,0.85)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "clamp(32px, 4vw, 56px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 28,
              opacity: 0,
              animation: `${isAr ? "h03PanelSlideRtl" : "h03PanelSlide"} 0.8s ease-out 0.3s forwards`,
              boxShadow: "0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* Accent glow behind panel */}
            <div
              style={{
                position: "absolute",
                top: -1,
                left: isAr ? "auto" : -1,
                right: isAr ? -1 : "auto",
                width: 120,
                height: 120,
                borderRadius: "24px 0 0 0",
                background: "radial-gradient(circle at top left, rgba(124,58,237,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Badge */}
            <div
              className="h03-fade"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                opacity: 0,
                animation: `${isAr ? "h03PanelSlideRtl" : "h03PanelSlide"} 0.6s ease-out 0.6s forwards`,
              }}
            >
              <Palette size={14} style={{ color: "#7c3aed" }} />
              <span
                style={{
                  fontFamily: fontBody,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#a78bfa",
                  letterSpacing: "0.1em",
                  textTransform: isAr ? "none" : "uppercase",
                }}
              >
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <div
              className="h03-fade"
              style={{
                opacity: 0,
                animation: `${isAr ? "h03PanelSlideRtl" : "h03PanelSlide"} 0.6s ease-out 0.7s forwards`,
              }}
            >
              <h1
                style={{
                  fontFamily: fontHeading,
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  lineHeight: 1.15,
                  margin: 0,
                  color: "#ffffff",
                }}
              >
                {t.heading[0]}
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #c4b5fd 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t.heading[1]}
                </span>
              </h1>
            </div>

            {/* Sub */}
            <div
              className="h03-fade"
              style={{
                opacity: 0,
                animation: `${isAr ? "h03PanelSlideRtl" : "h03PanelSlide"} 0.6s ease-out 0.85s forwards`,
              }}
            >
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                  maxWidth: 420,
                }}
              >
                {t.sub}
              </p>
            </div>

            {/* Specialty Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              {t.tags.map((tag, i) => (
                <span
                  key={tag}
                  className="h03-tag"
                  style={{
                    display: "inline-block",
                    padding: "7px 16px",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    fontFamily: fontBody,
                    color: "#c4b5fd",
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    borderRadius: 9999,
                    letterSpacing: "0.02em",
                    opacity: 0,
                    animation: `h03TagPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${1 + i * 0.12}s forwards`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="h03-fade"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                opacity: 0,
                animation: `${isAr ? "h03PanelSlideRtl" : "h03PanelSlide"} 0.6s ease-out 1.2s forwards`,
              }}
            >
              <button
                className="h03-cta-primary cursor-pointer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 26px",
                  background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                  color: "#ffffff",
                  fontFamily: fontBody,
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  borderRadius: 12,
                  border: "none",
                  letterSpacing: "0.02em",
                  boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
                }}
              >
                {t.cta1}
                <ArrowRight size={15} style={{ transform: isAr ? "scaleX(-1)" : "none" }} />
              </button>
              <button
                className="h03-cta-secondary cursor-pointer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 26px",
                  background: "transparent",
                  color: "#ffffff",
                  fontFamily: fontBody,
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.12)",
                  letterSpacing: "0.02em",
                }}
              >
                {t.cta2}
              </button>
            </div>

            {/* Footer stat */}
            <div
              className="h03-fade"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                opacity: 0,
                animation: `${isAr ? "h03PanelSlideRtl" : "h03PanelSlide"} 0.6s ease-out 1.4s forwards`,
                marginTop: 4,
              }}
            >
              <Eye size={14} style={{ color: "#7c3aed" }} />
              <span
                style={{
                  fontFamily: fontBody,
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.03em",
                }}
              >
                {t.footer}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.3) 50%, transparent 100%)",
          }}
        />
      </section>
    </>
  );
}
