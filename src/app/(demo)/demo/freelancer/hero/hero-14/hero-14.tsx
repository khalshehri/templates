"use client";

import { useRef, useCallback, useState } from "react";
import { ArrowRight, Newspaper } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    masthead: "THE FREELANCER TIMES",
    mastheadSub: "Vol. IX \u2022 No. 42 \u2022 Est. 2015 \u2022 Trusted by 200+ Clients Worldwide",
    headline: "AWARD-WINNING DESIGNER AVAILABLE FOR NEW PROJECTS",
    byline: "By the numbers: 9 years, 200+ projects, 40+ happy clients",
    article:
      "In a career spanning nearly a decade, freelance designer and developer Jordan Blake has built a reputation for delivering exceptional digital experiences. From Fortune 500 companies to ambitious startups, Blake\u2019s portfolio reads like a who\u2019s who of innovative brands. Specializing in responsive web design, brand identity, and user experience strategy, Blake combines technical expertise with an artistic eye that consistently exceeds client expectations. Every project begins with deep research and ends with pixel-perfect execution, ensuring that each deliverable not only looks stunning but performs flawlessly across all devices and platforms.",
    servicesTitle: "SERVICES OFFERED",
    services: [
      { name: "WEB DESIGN", desc: "Custom responsive websites from $5,000" },
      { name: "BRAND IDENTITY", desc: "Complete brand packages from $3,000" },
      { name: "UI/UX DESIGN", desc: "User experience optimization from $4,000" },
      { name: "CONSULTING", desc: "Strategic digital consulting at $200/hr" },
    ],
    testimonialsTitle: "TESTIMONIALS",
    quote:
      "\u201CWorking with Jordan was transformative for our brand. Highly recommended!\u201D",
    quoteAuthor: "\u2014 CEO, TechVenture Inc.",
    contactTitle: "CONTACT",
    contactEmail: "jordan@blakedesign.co",
    contactAvail: "Available for new projects starting March 2024",
    classified: "CLASSIFIED: NOW HIRING THIS FREELANCER",
    cta1: "Inquire Now",
    cta2: "View Portfolio",
    copyright: "\u00A9 2024 The Freelancer Times. All opportunities are genuine.",
  },
  ar: {
    masthead: "\u062C\u0631\u064A\u062F\u0629 \u0627\u0644\u0645\u0633\u062A\u0642\u0644",
    mastheadSub: "\u0627\u0644\u0645\u062C\u0644\u062F \u0627\u0644\u062A\u0627\u0633\u0639 \u2022 \u0627\u0644\u0639\u062F\u062F 42 \u2022 \u062A\u0623\u0633\u0633\u062A 2015 \u2022 \u0645\u0648\u062B\u0648\u0642 \u0645\u0646 200+ \u0639\u0645\u064A\u0644 \u062D\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645",
    headline: "\u0645\u0635\u0645\u0645 \u062D\u0627\u0626\u0632 \u0639\u0644\u0649 \u062C\u0648\u0627\u0626\u0632 \u0645\u062A\u0627\u062D \u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u062C\u062F\u064A\u062F\u0629",
    byline: "\u0628\u0627\u0644\u0623\u0631\u0642\u0627\u0645: 9 \u0633\u0646\u0648\u0627\u062A\u060C 200+ \u0645\u0634\u0631\u0648\u0639\u060C 40+ \u0639\u0645\u064A\u0644 \u0633\u0639\u064A\u062F",
    article:
      "\u0641\u064A \u0645\u0633\u064A\u0631\u0629 \u0645\u0647\u0646\u064A\u0629 \u0627\u0645\u062A\u062F\u062A \u0644\u0639\u0642\u062F \u0645\u0646 \u0627\u0644\u0632\u0645\u0646\u060C \u0628\u0646\u0649 \u0627\u0644\u0645\u0635\u0645\u0645 \u0648\u0627\u0644\u0645\u0637\u0648\u0631 \u0627\u0644\u0645\u0633\u062A\u0642\u0644 \u062C\u0648\u0631\u062F\u0627\u0646 \u0628\u0644\u064A\u0643 \u0633\u0645\u0639\u0629 \u0645\u062A\u0645\u064A\u0632\u0629 \u0641\u064A \u062A\u0642\u062F\u064A\u0645 \u062A\u062C\u0627\u0631\u0628 \u0631\u0642\u0645\u064A\u0629 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u0629. \u0645\u0646 \u0634\u0631\u0643\u0627\u062A \u0641\u0648\u0631\u062A\u064A\u0648\u0646 500 \u0625\u0644\u0649 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0627\u0634\u0626\u0629 \u0627\u0644\u0637\u0645\u0648\u062D\u0629\u060C \u064A\u0642\u0631\u0623 \u0645\u0644\u0641 \u0623\u0639\u0645\u0627\u0644\u0647 \u0643\u0642\u0627\u0626\u0645\u0629 \u0644\u0623\u0628\u0631\u0632 \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0627\u0644\u0645\u0628\u062A\u0643\u0631\u0629. \u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0645\u062A\u062C\u0627\u0648\u0628\u0629 \u0648\u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 \u0648\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u060C \u064A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u062E\u0628\u0631\u0629 \u0627\u0644\u062A\u0642\u0646\u064A\u0629 \u0648\u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u0641\u0646\u064A\u0629 \u0644\u062A\u062C\u0627\u0648\u0632 \u062A\u0648\u0642\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0628\u0627\u0633\u062A\u0645\u0631\u0627\u0631.",
    servicesTitle: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0642\u062F\u0645\u0629",
    services: [
      { name: "\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0645\u0648\u0627\u0642\u0639", desc: "\u0645\u0648\u0627\u0642\u0639 \u0645\u062A\u062C\u0627\u0648\u0628\u0629 \u0645\u062E\u0635\u0635\u0629 \u062A\u0628\u062F\u0623 \u0645\u0646 5,000$" },
      { name: "\u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629", desc: "\u062D\u0632\u0645 \u0647\u0648\u064A\u0629 \u0643\u0627\u0645\u0644\u0629 \u062A\u0628\u062F\u0623 \u0645\u0646 3,000$" },
      { name: "\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u062A\u062C\u0631\u0628\u0629", desc: "\u062A\u062D\u0633\u064A\u0646 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u062A\u0628\u062F\u0623 \u0645\u0646 4,000$" },
      { name: "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A", desc: "\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0631\u0642\u0645\u064A\u0629 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0628\u0633\u0639\u0631 200$/\u0633\u0627\u0639\u0629" },
    ],
    testimonialsTitle: "\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
    quote:
      "\u201C\u0627\u0644\u0639\u0645\u0644 \u0645\u0639 \u062C\u0648\u0631\u062F\u0627\u0646 \u0643\u0627\u0646 \u0646\u0642\u0644\u0629 \u0646\u0648\u0639\u064A\u0629 \u0644\u0639\u0644\u0627\u0645\u062A\u0646\u0627 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629. \u0646\u0648\u0635\u064A \u0628\u0647 \u0628\u0634\u062F\u0629!\u201D",
    quoteAuthor: "\u2014 \u0627\u0644\u0631\u0626\u064A\u0633 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u060C \u062A\u064A\u0643 \u0641\u064A\u0646\u062A\u0634\u0631",
    contactTitle: "\u062A\u0648\u0627\u0635\u0644",
    contactEmail: "jordan@blakedesign.co",
    contactAvail: "\u0645\u062A\u0627\u062D \u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u062C\u062F\u064A\u062F\u0629 \u0627\u0628\u062A\u062F\u0627\u0621\u064B \u0645\u0646 \u0645\u0627\u0631\u0633 2024",
    classified: "\u0625\u0639\u0644\u0627\u0646: \u0648\u0638\u0651\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062A\u0642\u0644 \u0627\u0644\u0622\u0646",
    cta1: "\u0627\u0633\u062A\u0641\u0633\u0631 \u0627\u0644\u0622\u0646",
    cta2: "\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644",
    copyright: "\u00A9 2024 \u062C\u0631\u064A\u062F\u0629 \u0627\u0644\u0645\u0633\u062A\u0642\u0644. \u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u0631\u0635 \u062D\u0642\u064A\u0642\u064A\u0629.",
  },
};

export function Hero14({ language }: { language: "en" | "ar" }) {
  const t = content[language === "ar" ? "ar" : "en"];
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

      // Unfold animation for the main wrapper
      gsap.from(".hero14-unfold", {
        scaleY: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        transformOrigin: "top center",
      });

      // Print press shake on masthead
      const tl = gsap.timeline({ delay: 0.2 });
      tl.to(".hero14-print", { y: -2, duration: 0.06, ease: "power1.out" })
        .to(".hero14-print", { y: 1, duration: 0.06, ease: "power1.out" })
        .to(".hero14-print", { y: -1, duration: 0.06, ease: "power1.out" })
        .to(".hero14-print", { y: 0.5, duration: 0.06, ease: "power1.out" })
        .to(".hero14-print", { y: 0, duration: 0.06, ease: "power1.out" });

      // Headline reveal with clip-path
      const clipFrom = isAr ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)";
      gsap.fromTo(
        ".hero14-headline-reveal",
        { clipPath: clipFrom },
        {
          clipPath: "inset(0 0 0 0)",
          duration: 1,
          ease: "power3.out",
          delay: 0.4,
        }
      );

      // Staggered fade-in for content sections
      gsap.from(".hero14-fade-1", {
        y: 12,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.6,
      });

      gsap.from(".hero14-fade-2", {
        y: 12,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.8,
      });

      gsap.from(".hero14-fade-3", {
        y: 12,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 1.0,
      });

      gsap.from(".hero14-fade-4", {
        y: 12,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 1.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen"
      dir={isAr ? "rtl" : "ltr"}
      style={{
        background: "#f5f0e6",
        color: "#1a1a1a",
        fontFamily: fontBody,
      }}
    >
      {/* Particles background */}
      <Particles
        id="hero14-particles"
        className="absolute inset-0 pointer-events-none"
        style={{ position: "absolute", zIndex: 0 }}
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 30, density: { enable: true } },
            color: { value: ["#1a1a1a", "#2a2a2a", "#444444", "#666666"] },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.03, max: 0.1 },
              animation: { enable: true, speed: 0.3, sync: false },
            },
            size: {
              value: { min: 1, max: 3 },
              animation: { enable: true, speed: 0.5, sync: false },
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none" as const,
              outModes: { default: "out" as const },
              drift: 0.1,
            },
          },
          detectRetina: true,
        }}
      />

      <style>{`
        .hero14-cta:hover {
          background: #1a1a1a !important;
          color: #f5f0e6 !important;
        }

        .hero14-cta-outline:hover {
          background: #2a2a2a !important;
          color: #f5f0e6 !important;
        }
      `}</style>

      <div
        className="hero14-unfold relative"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 24px 32px",
          zIndex: 1,
        }}
      >
        {/* === MASTHEAD === */}
        <div className="hero14-print" style={{ textAlign: "center" }}>
          {/* Top double rule */}
          <div
            style={{
              borderTop: "4px solid #2a2a2a",
              borderBottom: "1px solid #2a2a2a",
              height: "8px",
              marginBottom: "20px",
            }}
          />

          {/* Masthead title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <Newspaper
              size={28}
              style={{ color: "#8b0000", flexShrink: 0 }}
            />
            <h1
              style={{
                fontFamily: fontHeading,
                fontWeight: 900,
                fontSize: "clamp(28px, 5vw, 48px)",
                letterSpacing: isAr ? "0" : "0.12em",
                lineHeight: 1.1,
                color: "#000000",
                margin: 0,
              }}
            >
              {t.masthead}
            </h1>
            <Newspaper
              size={28}
              style={{ color: "#8b0000", flexShrink: 0 }}
            />
          </div>

          {/* Sub info */}
          <p
            style={{
              fontFamily: fontBody,
              fontSize: "13px",
              color: "#555",
              letterSpacing: isAr ? "0" : "0.08em",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            {t.mastheadSub}
          </p>

          {/* Bottom double rule */}
          <div
            style={{
              borderTop: "1px solid #2a2a2a",
              borderBottom: "4px solid #2a2a2a",
              height: "8px",
            }}
          />
        </div>

        {/* === MAIN HEADLINE === */}
        <div style={{ marginTop: "32px" }}>
          <h2
            className="hero14-headline-reveal"
            style={{
              fontFamily: fontHeading,
              fontWeight: 900,
              fontSize: "clamp(24px, 4.5vw, 42px)",
              lineHeight: 1.15,
              color: "#000000",
              letterSpacing: isAr ? "0" : "0.02em",
              margin: "0 0 12px 0",
            }}
          >
            {t.headline}
          </h2>

          <p
            className="hero14-fade-1"
            style={{
              fontFamily: fontBody,
              fontSize: "15px",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#444",
              margin: "0 0 8px 0",
            }}
          >
            {t.byline}
          </p>

          {/* Thin rule */}
          <div
            className="hero14-fade-1"
            style={{
              borderBottom: "1px solid #2a2a2a",
              margin: "16px 0",
            }}
          />

          {/* Article in 2 columns */}
          <div
            className="hero14-fade-2"
            style={{
              fontFamily: fontBody,
              fontSize: "15px",
              lineHeight: 1.75,
              color: "#333",
              columnCount: 2,
              columnGap: "32px",
              columnRule: "1px solid #ccc",
              textAlign: "justify",
            }}
          >
            <style>{`
              @media (max-width: 640px) {
                .hero14-article-cols {
                  column-count: 1 !important;
                }
              }
            `}</style>
            <p className="hero14-article-cols" style={{ margin: 0 }} ref={(el) => {
              if (el) {
                const parent = el.parentElement;
                if (parent && window.innerWidth <= 640) {
                  parent.style.columnCount = "1";
                }
              }
            }}>
              {t.article}
            </p>
          </div>
        </div>

        {/* Thin rule */}
        <div
          className="hero14-fade-2"
          style={{
            borderBottom: "1px solid #2a2a2a",
            margin: "28px 0",
          }}
        />

        {/* === TWO COLUMN SECTION === */}
        <div
          className="hero14-fade-3"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .hero14-two-cols {
                grid-template-columns: 3fr 2fr !important;
              }
            }
          `}</style>
          <div
            className="hero14-two-cols"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "32px",
            }}
          >
            {/* Left Column — Services */}
            <div>
              <h3
                style={{
                  fontFamily: fontHeading,
                  fontWeight: 800,
                  fontSize: "18px",
                  letterSpacing: isAr ? "0" : "0.1em",
                  color: "#000",
                  margin: "0 0 8px 0",
                  textTransform: isAr ? "none" : "uppercase",
                }}
              >
                {t.servicesTitle}
              </h3>
              <div
                style={{
                  borderBottom: "2px solid #2a2a2a",
                  marginBottom: "16px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {t.services.map((service, i) => (
                  <div
                    key={i}
                    style={{
                      paddingBottom: "14px",
                      borderBottom:
                        i < t.services.length - 1
                          ? "1px dashed #ccc"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fontHeading,
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#000",
                      }}
                    >
                      {service.name}
                    </span>
                    <span
                      style={{
                        fontFamily: fontBody,
                        fontSize: "14px",
                        color: "#555",
                      }}
                    >
                      {" — "}
                      {service.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — Testimonials + Contact */}
            <div>
              <h3
                style={{
                  fontFamily: fontHeading,
                  fontWeight: 800,
                  fontSize: "18px",
                  letterSpacing: isAr ? "0" : "0.1em",
                  color: "#000",
                  margin: "0 0 8px 0",
                  textTransform: isAr ? "none" : "uppercase",
                }}
              >
                {t.testimonialsTitle}
              </h3>
              <div
                style={{
                  borderBottom: "2px solid #2a2a2a",
                  marginBottom: "16px",
                }}
              />

              {/* Pull quote */}
              <div
                style={{
                  background: "#efe8d8",
                  border: "1px solid #2a2a2a",
                  padding: "20px",
                  marginBottom: "20px",
                }}
              >
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: "16px",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    color: "#1a1a1a",
                    margin: "0 0 8px 0",
                  }}
                >
                  {t.quote}
                </p>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: "13px",
                    color: "#666",
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  {t.quoteAuthor}
                </p>
              </div>

              {/* Contact box */}
              <div
                style={{
                  border: "1px solid #2a2a2a",
                  padding: "16px",
                }}
              >
                <h4
                  style={{
                    fontFamily: fontHeading,
                    fontWeight: 800,
                    fontSize: "15px",
                    letterSpacing: isAr ? "0" : "0.08em",
                    color: "#000",
                    margin: "0 0 10px 0",
                    textTransform: isAr ? "none" : "uppercase",
                  }}
                >
                  {t.contactTitle}
                </h4>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: "14px",
                    color: "#333",
                    margin: "0 0 4px 0",
                  }}
                >
                  {t.contactEmail}
                </p>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: "13px",
                    color: "#666",
                    margin: 0,
                  }}
                >
                  {t.contactAvail}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === BOTTOM BAR === */}
        <div className="hero14-fade-4" style={{ marginTop: "32px" }}>
          {/* Classified banner */}
          <div
            style={{
              background: "#8b0000",
              color: "#f5f0e6",
              textAlign: "center",
              padding: "12px 16px",
              fontFamily: fontHeading,
              fontWeight: 800,
              fontSize: "clamp(14px, 2.5vw, 18px)",
              letterSpacing: isAr ? "0" : "0.08em",
              textTransform: isAr ? "none" : "uppercase",
            }}
          >
            {t.classified}
          </div>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              className="hero14-cta cursor-pointer"
              style={{
                fontFamily: fontHeading,
                fontWeight: 700,
                fontSize: "15px",
                padding: "12px 32px",
                background: "#000",
                color: "#f5f0e6",
                border: "2px solid #000",
                cursor: "pointer",
                letterSpacing: isAr ? "0" : "0.04em",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.2s ease",
              }}
            >
              {t.cta1}
              <ArrowRight
                size={16}
                style={{
                  transform: isAr ? "scaleX(-1)" : "none",
                }}
              />
            </button>
            <button
              className="hero14-cta-outline cursor-pointer"
              style={{
                fontFamily: fontHeading,
                fontWeight: 700,
                fontSize: "15px",
                padding: "12px 32px",
                background: "transparent",
                color: "#1a1a1a",
                border: "2px solid #2a2a2a",
                cursor: "pointer",
                letterSpacing: isAr ? "0" : "0.04em",
                transition: "all 0.2s ease",
              }}
            >
              {t.cta2}
            </button>
          </div>

          {/* Bottom rule + copyright */}
          <div
            style={{
              borderTop: "1px solid #2a2a2a",
              marginTop: "24px",
              paddingTop: "12px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: fontBody,
                fontSize: "12px",
                color: "#888",
                margin: 0,
              }}
            >
              {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
