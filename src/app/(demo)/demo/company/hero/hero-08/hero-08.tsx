"use client";

import { useState } from "react";
import { Palette } from "lucide-react";

interface Hero08Props {
  language: "en" | "ar";
}

const projects = {
  en: {
    Branding: [
      { name: "Noor Rebrand", gradient: "linear-gradient(135deg, #d4622b, #f59e0b)" },
      { name: "Atlas Identity", gradient: "linear-gradient(135deg, #2a2a2a, #64748b)" },
      { name: "Peak Visual System", gradient: "linear-gradient(135deg, #7c3aed, #a78bfa)" },
      { name: "Oasis Brand Book", gradient: "linear-gradient(135deg, #059669, #6ee7b7)" },
    ],
    Web: [
      { name: "FinFlow Dashboard", gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)" },
      { name: "EcoTrack Platform", gradient: "linear-gradient(135deg, #16a34a, #86efac)" },
      { name: "Luxe E-Commerce", gradient: "linear-gradient(135deg, #d4622b, #fbbf24)" },
      { name: "MedConnect Portal", gradient: "linear-gradient(135deg, #6366f1, #a5b4fc)" },
    ],
    Motion: [
      { name: "Annual Reel 2024", gradient: "linear-gradient(135deg, #e11d48, #fb7185)" },
      { name: "Product Launch Film", gradient: "linear-gradient(135deg, #f59e0b, #fde68a)" },
      { name: "Brand Anthem", gradient: "linear-gradient(135deg, #8b5cf6, #c4b5fd)" },
      { name: "Event Highlights", gradient: "linear-gradient(135deg, #0891b2, #67e8f9)" },
    ],
    Print: [
      { name: "Corporate Annual Report", gradient: "linear-gradient(135deg, #2a2a2a, #525252)" },
      { name: "Luxury Catalog", gradient: "linear-gradient(135deg, #b45309, #fbbf24)" },
      { name: "Exhibition Posters", gradient: "linear-gradient(135deg, #dc2626, #f87171)" },
      { name: "Editorial Magazine", gradient: "linear-gradient(135deg, #4f46e5, #818cf8)" },
    ],
  },
  ar: {
    "العلامة التجارية": [
      { name: "إعادة هوية نور", gradient: "linear-gradient(135deg, #d4622b, #f59e0b)" },
      { name: "هوية أطلس", gradient: "linear-gradient(135deg, #2a2a2a, #64748b)" },
      { name: "نظام بيك البصري", gradient: "linear-gradient(135deg, #7c3aed, #a78bfa)" },
      { name: "دليل علامة واحة", gradient: "linear-gradient(135deg, #059669, #6ee7b7)" },
    ],
    "الويب": [
      { name: "لوحة فين فلو", gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)" },
      { name: "منصة إيكو تراك", gradient: "linear-gradient(135deg, #16a34a, #86efac)" },
      { name: "متجر لوكس", gradient: "linear-gradient(135deg, #d4622b, #fbbf24)" },
      { name: "بوابة ميد كونكت", gradient: "linear-gradient(135deg, #6366f1, #a5b4fc)" },
    ],
    "الموشن": [
      { name: "شريط 2024", gradient: "linear-gradient(135deg, #e11d48, #fb7185)" },
      { name: "فيلم إطلاق المنتج", gradient: "linear-gradient(135deg, #f59e0b, #fde68a)" },
      { name: "نشيد العلامة", gradient: "linear-gradient(135deg, #8b5cf6, #c4b5fd)" },
      { name: "أبرز الفعاليات", gradient: "linear-gradient(135deg, #0891b2, #67e8f9)" },
    ],
    "الطباعة": [
      { name: "التقرير السنوي", gradient: "linear-gradient(135deg, #2a2a2a, #525252)" },
      { name: "كتالوج فاخر", gradient: "linear-gradient(135deg, #b45309, #fbbf24)" },
      { name: "ملصقات المعرض", gradient: "linear-gradient(135deg, #dc2626, #f87171)" },
      { name: "مجلة تحريرية", gradient: "linear-gradient(135deg, #4f46e5, #818cf8)" },
    ],
  },
};

const content = {
  en: {
    badge: "FORGE STUDIOS",
    heading: "We Craft",
    accent: "Bold Experiences",
    sub: "A multidisciplinary creative studio turning bold visions into unforgettable brand experiences across digital and physical spaces.",
    cta1: "See Our Work",
    cta2: "Start a Project",
  },
  ar: {
    badge: "فورج ستوديوز",
    heading: "نصنع",
    accent: "تجارب جريئة",
    sub: "استوديو إبداعي متعدد التخصصات يحول الرؤى الجريئة إلى تجارب علامة تجارية لا تُنسى عبر المساحات الرقمية والمادية.",
    cta1: "شاهد أعمالنا",
    cta2: "ابدأ مشروعاً",
  },
};

export function Hero08({ language }: Hero08Props) {
  const t = content[language];
  const isAr = language === "ar";
  const projectData = projects[language];
  const categories = Object.keys(projectData);
  const [activeCategory, setActiveCategory] = useState(0);

  const currentProjects = projectData[categories[activeCategory] as keyof typeof projectData];

  return (
    <section
      style={{
        background: "#fdf6ec",
        fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @keyframes hero08FadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero08SlideIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .hero08-fadeup { animation: hero08FadeUp 0.7s ease-out both; }
        .hero08-fadeup-1 { animation-delay: 0.1s; }
        .hero08-fadeup-2 { animation-delay: 0.2s; }
        .hero08-fadeup-3 { animation-delay: 0.3s; }
        .hero08-fadeup-4 { animation-delay: 0.4s; }
        .hero08-fadeup-5 { animation-delay: 0.5s; }
        .hero08-card {
          animation: hero08SlideIn 0.4s ease-out both;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hero08-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(42,42,42,0.15);
        }
        .hero08-card:nth-child(1) { animation-delay: 0.05s; }
        .hero08-card:nth-child(2) { animation-delay: 0.1s; }
        .hero08-card:nth-child(3) { animation-delay: 0.15s; }
        .hero08-card:nth-child(4) { animation-delay: 0.2s; }
        .hero08-pill {
          transition: all 0.3s ease;
        }
        .hero08-pill:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 60px" }}>
        {/* Badge */}
        <div className="hero08-fadeup hero08-fadeup-1" style={{ marginBottom: "24px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "9999px",
              border: "1px solid rgba(212,98,43,0.3)",
              background: "rgba(212,98,43,0.08)",
              color: "#d4622b",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: isAr ? "0" : "0.1em",
            }}
          >
            <Palette size={16} />
            {t.badge}
          </span>
        </div>

        {/* Oversized Heading */}
        <h1
          className="hero08-fadeup hero08-fadeup-2"
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#2a2a2a",
            marginBottom: "24px",
            fontFamily: isAr ? "var(--font-el-messiri)" : "var(--font-inter)",
          }}
        >
          {t.heading}
          <br />
          <span style={{ color: "#d4622b" }}>{t.accent}</span>
        </h1>

        {/* Subheading */}
        <p
          className="hero08-fadeup hero08-fadeup-3"
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#64748b",
            maxWidth: "560px",
            marginBottom: "48px",
          }}
        >
          {t.sub}
        </p>

        {/* Category Filter Pills */}
        <div
          className="hero08-fadeup hero08-fadeup-4"
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "36px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              className="hero08-pill"
              onClick={() => setActiveCategory(i)}
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                background: activeCategory === i ? "#d4622b" : "rgba(42,42,42,0.08)",
                color: activeCategory === i ? "#ffffff" : "#2a2a2a",
                fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards 2x2 Grid */}
        <div
          key={activeCategory}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "56px",
          }}
        >
          {currentProjects.map((project, i) => (
            <div
              key={`${activeCategory}-${i}`}
              className="hero08-card"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                background: "#ffffff",
                border: "1px solid rgba(42,42,42,0.08)",
              }}
            >
              {/* Gradient Thumbnail */}
              <div
                style={{
                  height: "200px",
                  background: project.gradient,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "20px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#ffffff",
                    fontFamily: isAr ? "var(--font-el-messiri)" : "var(--font-inter)",
                  }}
                >
                  {project.name}
                </span>
              </div>
              {/* Card Footer */}
              <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#d4622b",
                    textTransform: isAr ? "none" : "uppercase",
                    letterSpacing: isAr ? "0" : "0.05em",
                  }}
                >
                  {categories[activeCategory]}
                </span>
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                  {isAr ? "عرض المشروع" : "View Project"} →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="hero08-fadeup hero08-fadeup-5"
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "14px 32px",
              borderRadius: "9999px",
              background: "#d4622b",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "15px",
              border: "none",
              cursor: "pointer",
              fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)",
            }}
          >
            {t.cta1}
          </button>
          <button
            style={{
              padding: "14px 32px",
              borderRadius: "9999px",
              background: "transparent",
              color: "#2a2a2a",
              fontWeight: 600,
              fontSize: "15px",
              border: "2px solid #2a2a2a",
              cursor: "pointer",
              fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)",
            }}
          >
            {t.cta2}
          </button>
        </div>
      </div>
    </section>
  );
}
