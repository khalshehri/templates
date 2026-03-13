"use client";

import { useState, useEffect } from "react";
import { Compass, ArrowRight, ArrowLeft } from "lucide-react";

const content = {
  en: {
    label: "ARCHITECTURE & DESIGN",
    heading: "Spaces that speak in silence",
    sub: "Award-winning studio crafting timeless environments where light, material, and purpose converge.",
    cta: "Explore Portfolio",
    filters: ["Residential", "Commercial", "Cultural"] as const,
    projects: {
      Residential: [
        { name: "The Glass House", location: "Riyadh" },
        { name: "Dune Residence", location: "NEOM" },
        { name: "Cedar Villa", location: "Beirut" },
      ],
      Commercial: [
        { name: "Apex Tower", location: "Jeddah" },
        { name: "Nova Hub", location: "Cairo" },
        { name: "Prism Center", location: "Doha" },
      ],
      Cultural: [
        { name: "Heritage Museum", location: "Diriyah" },
        { name: "Art Pavilion", location: "Sharjah" },
        { name: "Light Library", location: "Amman" },
      ],
    },
  },
  ar: {
    label: "العمارة والتصميم",
    heading: "مساحات تتحدث بصمت",
    sub: "استوديو حائز على جوائز يصنع بيئات خالدة حيث يتلاقى الضوء والمادة والغرض.",
    cta: "استكشف الأعمال",
    filters: ["سكني", "تجاري", "ثقافي"] as const,
    projects: {
      "سكني": [
        { name: "البيت الزجاجي", location: "الرياض" },
        { name: "مسكن الكثبان", location: "نيوم" },
        { name: "فيلا الأرز", location: "بيروت" },
      ],
      "تجاري": [
        { name: "برج أبكس", location: "جدة" },
        { name: "مركز نوفا", location: "القاهرة" },
        { name: "مركز بريزم", location: "الدوحة" },
      ],
      "ثقافي": [
        { name: "متحف التراث", location: "الدرعية" },
        { name: "جناح الفن", location: "الشارقة" },
        { name: "مكتبة النور", location: "عمّان" },
      ],
    },
  },
};

const cardGradients = [
  ["#d4c5a9", "#e8dcc8", "#c9b896"],
  ["#b8c4c0", "#cdd6d3", "#a8b5b0"],
  ["#c4b8a8", "#d8ccbc", "#b0a494"],
  ["#a8b0b8", "#bcc4cc", "#949ca4"],
  ["#c0b8b0", "#d4ccc4", "#aca49c"],
  ["#b0b8a8", "#c4ccbc", "#9ca494"],
  ["#c8c0b4", "#dcd4c8", "#b4aca0"],
  ["#b4b8c0", "#c8ccd4", "#a0a4ac"],
  ["#bcc0b8", "#d0d4cc", "#a8aca4"],
];

export function Hero05({ language }: { language: "en" | "ar" }) {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState(0);
  const [cardKey, setCardKey] = useState(0);
  const t = content[language];
  const isAr = language === "ar";
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFilterChange = (index: number) => {
    setActiveFilter(index);
    setCardKey((prev) => prev + 1);
  };

  const filterKeys = t.filters;
  const currentProjects =
    t.projects[filterKeys[activeFilter] as keyof typeof t.projects];
  const gradientSet = [
    cardGradients[activeFilter * 3],
    cardGradients[activeFilter * 3 + 1],
    cardGradients[activeFilter * 3 + 2],
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#fafaf9",
        fontFamily: isAr
          ? "var(--font-almarai), sans-serif"
          : "var(--font-inter), sans-serif",
      }}
    >
      <style>{`
        @keyframes hero05LineExtend {
          from { width: 0; opacity: 0; }
          to { width: 120px; opacity: 1; }
        }
        @keyframes hero05FadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero05TrackingIn {
          from { letter-spacing: 0.08em; opacity: 0; }
          to { letter-spacing: 0.05em; opacity: 1; }
        }
        @keyframes hero05CardReveal {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero05-animated { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero05-gold-line { animation: none !important; width: 120px !important; opacity: 1 !important; }
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 lg:py-40">
        {/* Label */}
        <div
          className="hero05-animated flex items-center gap-3 mb-8"
          style={{
            animation: mounted ? "hero05FadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards" : "none",
            opacity: mounted ? undefined : 0,
          }}
        >
          <Compass
            size={18}
            strokeWidth={1.5}
            style={{ color: "#c9a96e" }}
          />
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{
              color: "#737373",
              fontFamily: isAr
                ? "var(--font-el-messiri), sans-serif"
                : "var(--font-inter), sans-serif",
            }}
          >
            {t.label}
          </span>
        </div>

        {/* Heading */}
        <h1
          className="hero05-animated"
          style={{
            fontFamily: "var(--font-el-messiri), serif",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.1,
            color: "#1a1a1a",
            animation: mounted
              ? "hero05TrackingIn 1s cubic-bezier(0.16,1,0.3,1) 0.15s forwards"
              : "none",
            opacity: mounted ? undefined : 0,
            letterSpacing: "0.05em",
            maxWidth: "700px",
          }}
        >
          {t.heading}
        </h1>

        {/* Gold line */}
        <div
          className="hero05-gold-line my-8"
          style={{
            height: "1px",
            backgroundColor: "#c9a96e",
            animation: mounted
              ? "hero05LineExtend 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards"
              : "none",
            width: mounted ? undefined : 0,
            opacity: mounted ? undefined : 0,
          }}
        />

        {/* Subtitle */}
        <p
          className="hero05-animated max-w-lg"
          style={{
            color: "#737373",
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            lineHeight: 1.7,
            fontWeight: 300,
            animation: mounted
              ? "hero05FadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s forwards"
              : "none",
            opacity: mounted ? undefined : 0,
          }}
        >
          {t.sub}
        </p>

        {/* CTA */}
        <a
          href="#"
          className="hero05-animated inline-flex items-center gap-2 mt-8 group cursor-pointer"
          style={{
            color: "#1a1a1a",
            fontSize: "0.9375rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
            animation: mounted
              ? "hero05FadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s forwards"
              : "none",
            opacity: mounted ? undefined : 0,
            textDecoration: "none",
          }}
        >
          <span className="relative">
            {t.cta}
            <span
              className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-500"
              style={{ backgroundColor: "#1a1a1a" }}
            />
          </span>
          <Arrow
            size={16}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
          />
        </a>

        {/* Filters */}
        <div
          className="hero05-animated flex flex-wrap gap-3 mt-16 mb-10"
          style={{
            animation: mounted
              ? "hero05FadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.85s forwards"
              : "none",
            opacity: mounted ? undefined : 0,
          }}
        >
          {filterKeys.map((filter, index) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(index)}
              className="cursor-pointer px-5 py-2 rounded-full text-sm transition-all duration-300"
              style={{
                backgroundColor:
                  activeFilter === index ? "#1a1a1a" : "transparent",
                color: activeFilter === index ? "#fafaf9" : "#737373",
                border:
                  activeFilter === index
                    ? "1px solid #1a1a1a"
                    : "1px solid #d4d4d4",
                fontWeight: activeFilter === index ? 500 : 400,
                minHeight: "44px",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={`${cardKey}-${index}`}
              className="hero05-animated group cursor-pointer"
              style={{
                animation: mounted
                  ? `hero05CardReveal 0.7s cubic-bezier(0.16,1,0.3,1) ${0.95 + index * 0.05}s forwards`
                  : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              <div
                className="rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  aspectRatio: "3/4",
                  background: `linear-gradient(135deg, ${gradientSet[index][0]}, ${gradientSet[index][1]}, ${gradientSet[index][2]})`,
                }}
              />
              <div className="mt-4">
                <p
                  className="text-xs tracking-[0.15em] uppercase"
                  style={{
                    color: "#737373",
                    fontFamily: isAr
                      ? "var(--font-el-messiri), sans-serif"
                      : "var(--font-inter), sans-serif",
                  }}
                >
                  {project.name}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "#a3a3a3" }}
                >
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
