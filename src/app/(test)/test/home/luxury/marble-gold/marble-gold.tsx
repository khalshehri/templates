"use client";

/**
 * Marble & Gold — Luxury Hero Template
 *
 * Luxurious marble surface texture with animated gold veining that spreads
 * across the surface. Gold veins draw themselves like cracks forming in marble.
 * Central gold-framed content area with corner ornaments. Premium, architectural,
 * timeless elegance.
 *
 * @category Luxury
 * @palette marble white (#f5f3f0), gold (#d4a853), dark charcoal (#1a1a1a)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Timeless Luxury",
    heading: "Where Elegance Meets Perfection",
    subheading:
      "Exquisite craftsmanship rooted in heritage, designed for those who appreciate the finer details of uncompromising quality.",
    cta: "Discover Our Collection",
    secondary: "Our Heritage",
  },
  ar: {
    badge: "فخامة خالدة",
    heading: "حيث تلتقي الأناقة بالكمال",
    subheading:
      "حرفية رفيعة متجذرة في التراث، صُممت لمن يقدّرون أدق تفاصيل الجودة التي لا تقبل المساومة.",
    cta: "اكتشف مجموعتنا",
    secondary: "إرثنا",
  },
};

export function MarbleGold({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#f5f3f0" }}
    >
      {/* --- Marble texture (layered CSS gradients) --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "linear-gradient(135deg, rgba(200,195,188,0.08) 0%, transparent 50%)",
            "linear-gradient(225deg, rgba(180,175,168,0.06) 10%, transparent 60%)",
            "linear-gradient(45deg, rgba(210,205,198,0.07) 5%, transparent 55%)",
            "linear-gradient(315deg, rgba(190,185,178,0.05) 15%, transparent 65%)",
            "linear-gradient(170deg, rgba(160,155,148,0.04) 0%, transparent 40%)",
            "linear-gradient(80deg, rgba(220,215,208,0.06) 0%, transparent 45%)",
          ].join(", "),
          boxShadow: "inset 0 2px 80px rgba(0,0,0,0.06)",
        }}
      />

      {/* --- Gold veining SVG --- */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="gold-glow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="3"
              floodColor="#d4a853"
              floodOpacity="0.5"
            />
          </filter>
        </defs>

        {/* Vein 1 — sweeps top-left to centre-right */}
        <path
          d="M-20 120 C200 180, 400 80, 620 260 S900 200, 1100 340"
          stroke="#d4a853"
          strokeWidth="1.2"
          strokeLinecap="round"
          filter="url(#gold-glow)"
          style={{
            strokeDasharray: 1800,
            strokeDashoffset: 1800,
            animation: "drawVein 4s ease forwards 0.2s",
          }}
        />

        {/* Vein 2 — top-right descending */}
        <path
          d="M1460 60 C1200 140, 1000 50, 820 220 S600 180, 440 300"
          stroke="#d4a853"
          strokeWidth="0.9"
          strokeLinecap="round"
          filter="url(#gold-glow)"
          style={{
            strokeDasharray: 1600,
            strokeDashoffset: 1600,
            animation: "drawVein 4.5s ease forwards 0.6s",
          }}
        />

        {/* Vein 3 — bottom-left rising */}
        <path
          d="M-10 780 C180 700, 360 760, 540 620 S780 680, 960 560"
          stroke="#d4a853"
          strokeWidth="1"
          strokeLinecap="round"
          filter="url(#gold-glow)"
          style={{
            strokeDasharray: 1500,
            strokeDashoffset: 1500,
            animation: "drawVein 4s ease forwards 1s",
          }}
        />

        {/* Vein 4 — bottom-right */}
        <path
          d="M1460 820 C1280 740, 1080 800, 900 660 S680 720, 500 600"
          stroke="#d4a853"
          strokeWidth="0.8"
          strokeLinecap="round"
          filter="url(#gold-glow)"
          style={{
            strokeDasharray: 1500,
            strokeDashoffset: 1500,
            animation: "drawVein 4.2s ease forwards 1.3s",
          }}
        />

        {/* Vein 5 — subtle centre horizontal */}
        <path
          d="M200 450 C400 420, 600 480, 800 440 S1050 470, 1240 430"
          stroke="#d4a853"
          strokeWidth="0.6"
          strokeLinecap="round"
          filter="url(#gold-glow)"
          style={{
            strokeDasharray: 1400,
            strokeDashoffset: 1400,
            animation: "drawVein 5s ease forwards 1.6s",
          }}
        />

        {/* Vein 6 — delicate diagonal */}
        <path
          d="M100 30 C300 200, 500 100, 720 350 S1000 250, 1350 500"
          stroke="#d4a853"
          strokeWidth="0.5"
          strokeLinecap="round"
          filter="url(#gold-glow)"
          style={{
            opacity: 0.7,
            strokeDasharray: 2000,
            strokeDashoffset: 2000,
            animation: "drawVein 5.5s ease forwards 1.8s",
          }}
        />
      </svg>

      {/* --- Central gold frame --- */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20 sm:px-12 sm:py-28">
        {/* Animated gold border */}
        <div className="absolute inset-0">
          {/* Top border */}
          <span
            className="absolute top-0 left-0 h-[1px]"
            style={{
              backgroundColor: "#d4a853",
              animation: "expandWidth 1.2s ease forwards 2.2s",
              width: 0,
            }}
          />
          {/* Bottom border */}
          <span
            className="absolute bottom-0 right-0 h-[1px]"
            style={{
              backgroundColor: "#d4a853",
              animation: "expandWidth 1.2s ease forwards 2.2s",
              width: 0,
            }}
          />
          {/* Left border */}
          <span
            className="absolute top-0 left-0 w-[1px]"
            style={{
              backgroundColor: "#d4a853",
              animation: "expandHeight 1.2s ease forwards 2.4s",
              height: 0,
            }}
          />
          {/* Right border */}
          <span
            className="absolute bottom-0 right-0 w-[1px]"
            style={{
              backgroundColor: "#d4a853",
              animation: "expandHeight 1.2s ease forwards 2.4s",
              height: 0,
            }}
          />

          {/* Corner ornaments — top-left */}
          <span
            className="absolute -top-2 -left-2 w-5 h-5 opacity-0"
            style={{ animation: "fadeIn 0.6s ease forwards 3.4s" }}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
              <path d="M0 20 L0 6 Q0 0 6 0 L20 0" stroke="#d4a853" strokeWidth="1.5" fill="none" />
              <circle cx="3" cy="3" r="1.5" fill="#d4a853" />
            </svg>
          </span>
          {/* Corner ornaments — top-right */}
          <span
            className="absolute -top-2 -right-2 w-5 h-5 opacity-0"
            style={{ animation: "fadeIn 0.6s ease forwards 3.5s" }}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
              <path d="M20 20 L20 6 Q20 0 14 0 L0 0" stroke="#d4a853" strokeWidth="1.5" fill="none" />
              <circle cx="17" cy="3" r="1.5" fill="#d4a853" />
            </svg>
          </span>
          {/* Corner ornaments — bottom-left */}
          <span
            className="absolute -bottom-2 -left-2 w-5 h-5 opacity-0"
            style={{ animation: "fadeIn 0.6s ease forwards 3.6s" }}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
              <path d="M0 0 L0 14 Q0 20 6 20 L20 20" stroke="#d4a853" strokeWidth="1.5" fill="none" />
              <circle cx="3" cy="17" r="1.5" fill="#d4a853" />
            </svg>
          </span>
          {/* Corner ornaments — bottom-right */}
          <span
            className="absolute -bottom-2 -right-2 w-5 h-5 opacity-0"
            style={{ animation: "fadeIn 0.6s ease forwards 3.7s" }}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
              <path d="M20 0 L20 14 Q20 20 14 20 L0 20" stroke="#d4a853" strokeWidth="1.5" fill="none" />
              <circle cx="17" cy="17" r="1.5" fill="#d4a853" />
            </svg>
          </span>
        </div>

        {/* --- Content --- */}
        <div className="relative text-center flex flex-col items-center gap-8">
          {/* Badge */}
          <span
            className="inline-block text-xs tracking-[0.3em] uppercase opacity-0"
            style={{
              color: "#d4a853",
              fontFamily: "serif",
              animation: "fadeIn 0.8s ease forwards 2.8s",
            }}
          >
            {t.badge}
          </span>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight opacity-0"
            style={{
              color: "#1a1a1a",
              fontFamily: "serif",
              letterSpacing: "0.02em",
              animation: "fadeSlideUp 1s ease forwards 3s",
            }}
          >
            {t.heading}
          </h1>

          {/* Gold divider */}
          <span
            className="block h-[1px] opacity-0"
            style={{
              backgroundColor: "#d4a853",
              width: "80px",
              animation: "fadeIn 0.8s ease forwards 3.4s",
            }}
          />

          {/* Subheading */}
          <p
            className="text-base sm:text-lg leading-relaxed max-w-xl opacity-0"
            style={{
              color: "#5a5550",
              fontFamily: "serif",
              letterSpacing: "0.01em",
              animation: "fadeSlideUp 1s ease forwards 3.5s",
            }}
          >
            {t.subheading}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 mt-4 opacity-0 ${isRTL ? "sm:flex-row-reverse" : ""}`}
            style={{ animation: "fadeSlideUp 1s ease forwards 3.8s" }}
          >
            <button
              className="group flex items-center gap-2 px-8 py-3 text-sm tracking-[0.15em] uppercase transition-all duration-300"
              style={{
                backgroundColor: "#d4a853",
                color: "#fff",
                fontFamily: "serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#c49843";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d4a853";
              }}
            >
              {t.cta}
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`}
              />
            </button>

            <button
              className="px-8 py-3 text-sm tracking-[0.15em] uppercase transition-colors duration-300"
              style={{
                color: "#1a1a1a",
                border: "1px solid #d4a853",
                fontFamily: "serif",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(212,168,83,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              }}
            >
              {t.secondary}
            </button>
          </div>
        </div>
      </div>

      {/* --- Keyframes --- */}
      <style>{`
        @keyframes drawVein {
          to { stroke-dashoffset: 0; }
        }
        @keyframes expandWidth {
          to { width: 100%; }
        }
        @keyframes expandHeight {
          to { height: 100%; }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
