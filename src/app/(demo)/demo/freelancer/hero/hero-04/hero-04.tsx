"use client";

import { ArrowRight, Mail, Phone, Globe, Linkedin } from "lucide-react";

const content = {
  en: {
    name: "Sarah Mitchell",
    title: "Independent Brand Strategist",
    tagline: "Crafting brands that resonate.",
    cta1: "View Portfolio",
    cta2: "Schedule Call",
    email: "hello@sarahmitchell.com",
    phone: "+1 (415) 555-0182",
    website: "sarahmitchell.com",
    linkedin: "linkedin.com/in/sarahm",
    location: "Based in New York City",
    statYears: "15",
    statYearsLabel: "Years",
    statBrands: "200+",
    statBrandsLabel: "Brands",
    statAwards: "12",
    statAwardsLabel: "Awards",
    statReach: "Global",
    statReachLabel: "Reach",
  },
  ar: {
    name: "سارة ميتشل",
    title: "استراتيجية علامات تجارية مستقلة",
    tagline: "نصنع علامات تجارية ذات صدى.",
    cta1: "عرض الأعمال",
    cta2: "جدولة مكالمة",
    email: "hello@sarahmitchell.com",
    phone: "+1 (415) 555-0182",
    website: "sarahmitchell.com",
    linkedin: "linkedin.com/in/sarahm",
    location: "مقيمة في نيويورك",
    statYears: "١٥",
    statYearsLabel: "سنة",
    statBrands: "+٢٠٠",
    statBrandsLabel: "علامة تجارية",
    statAwards: "١٢",
    statAwardsLabel: "جائزة",
    statReach: "عالمي",
    statReachLabel: "الانتشار",
  },
};

export function Hero04({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes cardReveal {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes goldLine {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes contentFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes stampPress {
          from {
            transform: scale(1.1) rotate(-6deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes statsFade {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes crossLineH {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes crossLineV {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }

        .hero04-card {
          animation: cardReveal 0.8s ease-out both;
        }

        .hero04-gold-line {
          animation: goldLine 0.6s ease-out 0.4s both;
          transform-origin: ${isAr ? "right" : "left"};
        }

        .hero04-name {
          animation: contentFade 0.5s ease-out 0.5s both;
        }

        .hero04-title {
          animation: contentFade 0.5s ease-out 0.65s both;
        }

        .hero04-separator {
          animation: goldLine 0.5s ease-out 0.75s both;
          transform-origin: ${isAr ? "right" : "left"};
        }

        .hero04-tagline {
          animation: contentFade 0.5s ease-out 0.85s both;
        }

        .hero04-ctas {
          animation: contentFade 0.5s ease-out 0.95s both;
        }

        .hero04-contact-0 {
          animation: contentFade 0.4s ease-out 0.6s both;
        }
        .hero04-contact-1 {
          animation: contentFade 0.4s ease-out 0.7s both;
        }
        .hero04-contact-2 {
          animation: contentFade 0.4s ease-out 0.8s both;
        }
        .hero04-contact-3 {
          animation: contentFade 0.4s ease-out 0.9s both;
        }

        .hero04-location {
          animation: contentFade 0.4s ease-out 1.0s both;
        }

        .hero04-monogram {
          animation: stampPress 0.5s ease-out 1.1s both;
        }

        .hero04-stats {
          animation: statsFade 0.6s ease-out 1.2s both;
        }

        .hero04-cross-h {
          animation: crossLineH 1.2s ease-out 0.2s both;
        }

        .hero04-cross-v {
          animation: crossLineV 1.2s ease-out 0.2s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero04-card,
          .hero04-gold-line,
          .hero04-name,
          .hero04-title,
          .hero04-separator,
          .hero04-tagline,
          .hero04-ctas,
          .hero04-contact-0,
          .hero04-contact-1,
          .hero04-contact-2,
          .hero04-contact-3,
          .hero04-location,
          .hero04-monogram,
          .hero04-stats,
          .hero04-cross-h,
          .hero04-cross-v {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        style={{
          fontFamily: fontBody,
          background: "#f5f0eb",
          position: "relative",
          overflow: "hidden",
        }}
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20"
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Linen / paper texture overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.02,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
            pointerEvents: "none",
          }}
        />

        {/* Decorative cross lines behind card */}
        <div
          className="hero04-cross-h"
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            right: "10%",
            height: "1px",
            background: "#e5e0db",
            transformOrigin: "center",
            pointerEvents: "none",
          }}
        />
        <div
          className="hero04-cross-v"
          style={{
            position: "absolute",
            left: "50%",
            top: "15%",
            bottom: "15%",
            width: "1px",
            background: "#e5e0db",
            transformOrigin: "center",
            pointerEvents: "none",
          }}
        />

        {/* The Card */}
        <div
          className="hero04-card w-full max-w-3xl"
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.04), 0 12px 24px rgba(0,0,0,0.06), 0 24px 48px rgba(0,0,0,0.04)",
            position: "relative",
            zIndex: 10,
            overflow: "hidden",
            ...(isAr
              ? { borderRight: "4px solid #b8860b" }
              : { borderLeft: "4px solid #b8860b" }),
          }}
        >
          <div className="flex flex-col sm:flex-row">
            {/* Left / Main section (60%) */}
            <div
              className="flex-1 p-8 sm:p-10 md:p-12"
              style={{ flex: "0 0 60%" }}
            >
              {/* Gold decorative line */}
              <div
                className="hero04-gold-line"
                style={{
                  width: "40px",
                  height: "2px",
                  background: "#b8860b",
                  marginBottom: "28px",
                }}
              />

              {/* Name */}
              <h1
                className="hero04-name"
                style={{
                  fontFamily: fontHeading,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 300,
                  letterSpacing: isAr ? "0" : "-0.02em",
                  color: "#1a1a1a",
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                {t.name}
              </h1>

              {/* Title */}
              <p
                className="hero04-title"
                style={{
                  fontFamily: fontBody,
                  fontSize: "1.125rem",
                  color: "#6b6b6b",
                  marginTop: "8px",
                  marginBottom: "0",
                  fontWeight: 400,
                }}
              >
                {t.title}
              </p>

              {/* Separator */}
              <div
                className="hero04-separator"
                style={{
                  width: "100%",
                  height: "1px",
                  background: "#e5e0db",
                  marginTop: "24px",
                  marginBottom: "24px",
                }}
              />

              {/* Tagline */}
              <p
                className="hero04-tagline"
                style={{
                  fontFamily: fontBody,
                  fontSize: "1.05rem",
                  color: "#4a4a4a",
                  fontStyle: "italic",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {t.tagline}
              </p>

              {/* CTAs */}
              <div
                className="hero04-ctas"
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "28px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="cursor-pointer"
                  style={{
                    fontFamily: fontBody,
                    background: "#b8860b",
                    color: "#1a1a1a",
                    border: "none",
                    padding: "12px 28px",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.25s ease",
                    letterSpacing: isAr ? "0" : "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#a07608";
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(-1px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 4px 12px rgba(184,134,11,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#b8860b";
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "none";
                  }}
                >
                  {t.cta1}
                  <ArrowRight size={16} style={{ transform: isAr ? "scaleX(-1)" : "none" }} />
                </button>

                <button
                  className="cursor-pointer"
                  style={{
                    fontFamily: fontBody,
                    background: "transparent",
                    color: "#1a1a1a",
                    border: "1px solid #d0cbc5",
                    padding: "12px 28px",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    transition: "all 0.25s ease",
                    letterSpacing: isAr ? "0" : "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "#b8860b";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#b8860b";
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "#d0cbc5";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#1a1a1a";
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  {t.cta2}
                </button>
              </div>
            </div>

            {/* Right / Contact column (40%) */}
            <div
              className="p-8 sm:p-10 md:p-12 flex flex-col justify-between"
              style={{
                flex: "0 0 40%",
                borderTop: "1px solid #f0ebe5",
                ...(isAr
                  ? { borderRight: "1px solid #f0ebe5", borderTop: "none" }
                  : { borderLeft: "1px solid #f0ebe5", borderTop: "none" }),
              }}
            >
              {/* Contact items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {[
                  { icon: <Mail size={15} />, text: t.email, idx: 0 },
                  { icon: <Phone size={15} />, text: t.phone, idx: 1 },
                  { icon: <Globe size={15} />, text: t.website, idx: 2 },
                  { icon: <Linkedin size={15} />, text: t.linkedin, idx: 3 },
                ].map((item) => (
                  <a
                    key={item.idx}
                    href="#"
                    className={`hero04-contact-${item.idx} cursor-pointer`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "#4a4a4a",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-inter)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      direction: "ltr",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#b8860b";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#4a4a4a";
                    }}
                  >
                    <span style={{ color: "#b8860b", flexShrink: 0 }}>
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>

              {/* Bottom area: location + monogram */}
              <div style={{ marginTop: "32px" }}>
                {/* Location */}
                <p
                  className="hero04-location"
                  style={{
                    fontFamily: fontBody,
                    fontSize: "0.8rem",
                    color: "#8a8580",
                    margin: 0,
                    marginBottom: "20px",
                    direction: isAr ? "rtl" : "ltr",
                    textAlign: isAr ? "right" : "left",
                  }}
                >
                  {t.location}
                </p>

                {/* Gold monogram */}
                <div
                  className="hero04-monogram"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "1.5px solid #b8860b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...(isAr
                      ? { marginRight: "auto", marginLeft: "0" }
                      : { marginLeft: "0", marginRight: "auto" }),
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      color: "#b8860b",
                      letterSpacing: "0.08em",
                    }}
                  >
                    SM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats below card */}
        <div
          className="hero04-stats w-full max-w-3xl"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            marginTop: "40px",
            position: "relative",
            zIndex: 10,
          }}
        >
          {[
            { value: t.statYears, label: t.statYearsLabel },
            { value: t.statBrands, label: t.statBrandsLabel },
            { value: t.statAwards, label: t.statAwardsLabel },
            { value: t.statReach, label: t.statReachLabel },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "16px 8px",
                ...(i < 3
                  ? {
                      ...(isAr
                        ? { borderLeft: "1px solid #e5e0db" }
                        : { borderRight: "1px solid #e5e0db" }),
                    }
                  : {}),
              }}
            >
              <div
                style={{
                  fontFamily: fontHeading,
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  color: "#1a1a1a",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: fontBody,
                  fontSize: "0.75rem",
                  color: "#8a8580",
                  marginTop: "6px",
                  textTransform: isAr ? "none" : "uppercase",
                  letterSpacing: isAr ? "0" : "0.08em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
