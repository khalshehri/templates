"use client";

/**
 * Luxury Editorial Hero — "Magazine Spread"
 *
 * Full-screen hero that looks like a high-fashion magazine cover/spread.
 * Large image placeholder area with a sophisticated overlay. Magazine-style
 * typography: large serif heading at an angle, small-caps category label,
 * issue number, editorial tagline, thin vertical divider, page number.
 * Feels like opening Vogue or Architectural Digest.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    category: "HAUTE COUTURE",
    volume: "VOL. XII",
    year: "MMXXVI",
    pageNum: "01",
    heading: "The Art of\nElegance",
    tagline: "Where timeless beauty meets modern audacity",
    cta: "Read the Feature",
    photographer: "Photography by Atelier Lumière",
  },
  ar: {
    category: "أزياء راقية",
    volume: "العدد ١٢",
    year: "٢٠٢٦",
    pageNum: "٠١",
    heading: "فنّ\nالأناقة",
    tagline: "حيث يلتقي الجمال الخالد بالجرأة المعاصرة",
    cta: "اقرأ المقال",
    photographer: "تصوير أتيليه لوميير",
  },
};

export function LuxuryEditorial({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        /* ── Vertical divider line growth ───────────────────── */
        @keyframes lineGrow {
          0% {
            transform: scaleY(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        /* ── Horizontal rule grow ──────────────────────────── */
        @keyframes hrGrow {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }

        /* ── Magazine heading slide + rotate ────────────────── */
        @keyframes headingSlide {
          0% {
            opacity: 0;
            transform: rotate(-2deg) translateY(60px);
            clip-path: inset(100% 0 0 0);
          }
          100% {
            opacity: 1;
            transform: rotate(-2deg) translateY(0);
            clip-path: inset(0 0 0 0);
          }
        }
        @keyframes headingSlideRTL {
          0% {
            opacity: 0;
            transform: rotate(2deg) translateY(60px);
            clip-path: inset(100% 0 0 0);
          }
          100% {
            opacity: 1;
            transform: rotate(2deg) translateY(0);
            clip-path: inset(0 0 0 0);
          }
        }

        /* ── Content reveals ───────────────────────────────── */
        @keyframes editFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes editSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes editSlideLeft {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes editSlideRight {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        /* ── CTA underline expand ──────────────────────────── */
        @keyframes underlineExpand {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        /* ── Page number counting feel ─────────────────────── */
        @keyframes pageNumReveal {
          0% { opacity: 0; transform: translateY(10px) scale(0.8); }
          100% { opacity: 0.12; transform: translateY(0) scale(1); }
        }

        /* ── Subtle overlay pattern (dot grid) ─────────────── */
        @keyframes overlayFade {
          0% { opacity: 0; }
          100% { opacity: 0.03; }
        }

        .edit-fade-in { animation: editFadeIn 1s ease both; }
        .edit-slide-up { animation: editSlideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }

        .edit-cta-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }
        .edit-cta-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: rgba(127,29,29,0.6);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .edit-cta-link:hover::after {
          transform: scaleX(1);
        }
        .edit-cta-link-rtl::after {
          transform-origin: right;
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden flex items-end">
        {/* ── Full-screen image placeholder ─────────────────── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a1a1a 0%, #2d2926 30%, #1c1917 60%, #0f0f0f 100%)",
          }}
        />

        {/* Subtle image texture hint (crosshatch pattern) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0M-10 10L10 -10M30 50L50 30' stroke='%23ffffff' stroke-width='0.3' opacity='0.04'/%3E%3C/svg%3E")`,
            animation: "overlayFade 2s ease 0.5s both",
          }}
        />

        {/* ── Bottom gradient overlay (magazine-style fade) ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          }}
        />

        {/* ── Left edge gradient for depth ─────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isAr
              ? "linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 40%)"
              : "linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 40%)",
          }}
        />

        {/* ── Thin vertical divider line ───────────────────── */}
        <div
          className="absolute hidden lg:block"
          style={{
            [isAr ? "right" : "left"]: "8%",
            top: "10%",
            width: "1px",
            height: "80%",
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent)",
            transformOrigin: "top",
            animation: "lineGrow 2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
          }}
        />

        {/* ── Large page number (corner) ───────────────────── */}
        <div
          className={`absolute top-[12%] ${isAr ? "left-[6%]" : "right-[6%]"}`}
          style={{
            animation: "pageNumReveal 1.5s ease 1s both",
          }}
        >
          <span
            className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-extralight leading-none select-none"
            style={{
              color: "rgba(255,255,255,0.04)",
              fontFamily: "var(--font-amiri), Georgia, serif",
            }}
          >
            {t.pageNum}
          </span>
        </div>

        {/* ── Volume / Issue number (top) ──────────────────── */}
        <div
          className={`absolute top-8 sm:top-12 ${
            isAr ? "right-[12%] text-right" : "left-[12%] text-left"
          }`}
        >
          <p
            className="edit-fade-in text-[10px] uppercase tracking-[0.5em]"
            style={{
              color: "rgba(255,255,255,0.25)",
              animationDelay: "0.8s",
              fontFamily: "var(--font-amiri), Georgia, serif",
            }}
          >
            {t.volume} — {t.year}
          </p>
        </div>

        {/* ── Category label (small caps, top area) ────────── */}
        <div
          className={`absolute top-24 sm:top-28 ${
            isAr ? "right-[12%] text-right" : "left-[12%] text-left"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className="h-px"
              style={{
                width: "40px",
                background: "rgba(127,29,29,0.5)",
                animation: "hrGrow 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both",
                transformOrigin: isAr ? "right" : "left",
              }}
            />
            <p
              className="edit-fade-in text-[11px] uppercase tracking-[0.4em] font-light"
              style={{
                color: "rgba(127,29,29,0.7)",
                animationDelay: "1.4s",
              }}
            >
              {t.category}
            </p>
          </div>
        </div>

        {/* ── Main content area (bottom section) ───────────── */}
        <div
          className={`relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20 lg:pb-28 ${
            isAr ? "text-right" : "text-left"
          }`}
        >
          {/* Large serif heading — angled */}
          <div className="mb-8 sm:mb-12">
            <h1
              className="text-5xl sm:text-7xl lg:text-8xl xl:text-[7rem] font-extralight leading-[0.95] whitespace-pre-line"
              style={{
                fontFamily: "var(--font-amiri), var(--font-el-messiri), Georgia, serif",
                fontStyle: "italic",
                color: "#ffffff",
                animation: `${isAr ? "headingSlideRTL" : "headingSlide"} 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both`,
              }}
            >
              {t.heading}
            </h1>
          </div>

          {/* Horizontal rule */}
          <div
            className="h-px mb-6 sm:mb-8"
            style={{
              width: "60px",
              background: "rgba(255,255,255,0.2)",
              animation: "hrGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.8s both",
              transformOrigin: isAr ? "right" : "left",
              marginLeft: isAr ? "auto" : undefined,
            }}
          />

          {/* Editorial tagline — italic */}
          <p
            className="edit-slide-up text-base sm:text-lg lg:text-xl font-light max-w-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-amiri), var(--font-el-messiri), Georgia, serif",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.45)",
              animationDelay: "2s",
              marginLeft: isAr ? "auto" : undefined,
            }}
          >
            {t.tagline}
          </p>

          {/* CTA — minimal text link with underline animation */}
          <div
            className="edit-slide-up mt-10 sm:mt-14"
            style={{ animationDelay: "2.4s" }}
          >
            <a
              href="#"
              className={`edit-cta-link ${isAr ? "edit-cta-link-rtl flex-row-reverse" : ""} text-xs uppercase tracking-[0.3em] font-light transition-colors duration-300`}
              style={{ color: "rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.85)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              {t.cta}
              <ArrowRight
                size={12}
                className={`transition-transform duration-500 group-hover:translate-x-1 ${
                  isAr ? "rotate-180" : ""
                }`}
                style={{ opacity: 0.5 }}
              />
            </a>
          </div>

          {/* Photographer credit — bottom */}
          <p
            className="edit-fade-in mt-16 sm:mt-20 text-[10px] uppercase tracking-[0.3em]"
            style={{
              color: "rgba(255,255,255,0.12)",
              animationDelay: "2.8s",
            }}
          >
            {t.photographer}
          </p>
        </div>

        {/* ── Right-side vertical text (magazine spine feel) ─ */}
        <div
          className={`absolute bottom-20 hidden lg:block ${
            isAr ? "left-8" : "right-8"
          }`}
          style={{
            writingMode: "vertical-rl",
            animation: "editFadeIn 1.2s ease 2.5s both",
          }}
        >
          <span
            className="text-[10px] uppercase tracking-[0.5em] font-light"
            style={{ color: "rgba(255,255,255,0.1)" }}
          >
            {isAr ? "مجلة أزياء" : "Fashion Editorial"}
          </span>
        </div>
      </section>
    </>
  );
}
