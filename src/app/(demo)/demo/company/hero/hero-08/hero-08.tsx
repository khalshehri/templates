"use client";

import { useState, useEffect } from "react";
import { MapPin, Star, Wifi, Coffee, Car, Utensils, Hotel, ArrowRight } from "lucide-react";

const content = {
  en: {
    location: "RIYADH, KINGDOM OF SAUDI ARABIA",
    rating: "4.9 · 2,400+ Reviews",
    heading: "Where every moment",
    accent: "becomes a memory",
    sub: "World-class hospitality in the heart of the city. Luxurious rooms, exquisite dining, and experiences that linger long after you leave.",
    cta1: "Reserve Your Stay",
    cta2: "Virtual Tour",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Coffee, label: "Fine Dining" },
      { icon: Car, label: "Valet Parking" },
      { icon: Utensils, label: "Room Service" },
    ],
  },
  ar: {
    location: "الرياض، المملكة العربية السعودية",
    rating: "4.9 · +2,400 تقييم",
    heading: "حيث تصبح كل لحظة",
    accent: "ذكرى",
    sub: "ضيافة عالمية في قلب المدينة. غرف فاخرة ومطاعم راقية وتجارب تبقى طويلاً بعد المغادرة.",
    cta1: "احجز إقامتك",
    cta2: "جولة افتراضية",
    amenities: [
      { icon: Wifi, label: "واي فاي" },
      { icon: Coffee, label: "مطاعم راقية" },
      { icon: Car, label: "صف السيارات" },
      { icon: Utensils, label: "خدمة الغرف" },
    ],
  },
};

export function Hero08({ language }: { language: "en" | "ar" }) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hero08FadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero08Twinkle0 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes hero08Twinkle1 {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes hero08Twinkle2 {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 0.55; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero08-animate { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero08-twinkle { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#fdfaf5" }}
      >
        {/* Warm ambient radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(180, 83, 9, 0.06) 0%, transparent 70%)",
          }}
        />

        {/* Decorative picture frame */}
        <div className="relative w-full max-w-6xl mx-auto px-6 py-24 sm:py-32 lg:py-40">
          {/* Outer frame */}
          <div
            className="relative rounded-[2px]"
            style={{
              border: "1px solid rgba(212, 160, 83, 0.2)",
              padding: "24px",
            }}
          >
            {/* Inner frame */}
            <div
              className="relative rounded-[2px]"
              style={{
                border: "1px solid rgba(212, 160, 83, 0.1)",
                padding: "clamp(32px, 6vw, 80px) clamp(24px, 4vw, 64px)",
              }}
            >
              {/* Content */}
              <div className="flex flex-col items-center text-center">
                {/* Hotel icon */}
                <div
                  className="hero08-animate"
                  style={{
                    animation: mounted ? "hero08FadeUp 700ms cubic-bezier(0.16,1,0.3,1) forwards" : "none",
                    opacity: mounted ? undefined : 0,
                  }}
                >
                  <Hotel
                    className="mx-auto mb-6"
                    size={28}
                    strokeWidth={1.2}
                    style={{ color: "#d4a053" }}
                  />
                </div>

                {/* Location */}
                <div
                  className="hero08-animate flex items-center gap-2 mb-5"
                  style={{
                    animation: mounted ? "hero08FadeUp 700ms cubic-bezier(0.16,1,0.3,1) 100ms both" : "none",
                    opacity: mounted ? undefined : 0,
                  }}
                >
                  <MapPin size={14} strokeWidth={1.5} style={{ color: "#d4a053" }} />
                  <span
                    className={`text-xs tracking-[0.2em] font-medium ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
                    style={{ color: "#d4a053", letterSpacing: isAr ? "0.05em" : "0.2em" }}
                  >
                    {t.location}
                  </span>
                </div>

                {/* Stars + Rating */}
                <div
                  className="hero08-animate flex items-center gap-3 mb-8"
                  style={{
                    animation: mounted ? "hero08FadeUp 700ms cubic-bezier(0.16,1,0.3,1) 200ms both" : "none",
                    opacity: mounted ? undefined : 0,
                  }}
                >
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="#d4a053"
                        strokeWidth={0}
                        className="hero08-twinkle"
                        style={{
                          color: "#d4a053",
                          animation: mounted
                            ? `hero08Twinkle${i % 3} ${2 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`
                            : "none",
                        }}
                      />
                    ))}
                  </div>
                  <span
                    className={`text-sm ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
                    style={{ color: "#78716c" }}
                  >
                    {t.rating}
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="hero08-animate"
                  style={{
                    animation: mounted ? "hero08FadeUp 700ms cubic-bezier(0.16,1,0.3,1) 300ms both" : "none",
                    opacity: mounted ? undefined : 0,
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    fontWeight: 400,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    color: "#1c1917",
                    marginBottom: "4px",
                    fontFamily: isAr ? "var(--font-el-messiri)" : "var(--font-inter)",
                  }}
                >
                  {t.heading}
                </h1>
                <h1
                  className="hero08-animate"
                  style={{
                    animation: mounted ? "hero08FadeUp 700ms cubic-bezier(0.16,1,0.3,1) 400ms both" : "none",
                    opacity: mounted ? undefined : 0,
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    fontWeight: 400,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    color: "#b45309",
                    fontFamily: isAr ? "var(--font-el-messiri)" : "var(--font-inter)",
                    fontStyle: isAr ? "normal" : "italic",
                  }}
                >
                  {t.accent}
                </h1>

                {/* Subtitle */}
                <p
                  className={`hero08-animate max-w-xl mx-auto mt-6 mb-10 leading-relaxed ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
                  style={{
                    animation: mounted ? "hero08FadeUp 700ms cubic-bezier(0.16,1,0.3,1) 500ms both" : "none",
                    opacity: mounted ? undefined : 0,
                    fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)",
                    color: "#78716c",
                    fontWeight: 300,
                  }}
                >
                  {t.sub}
                </p>

                {/* CTAs */}
                <div
                  className="hero08-animate flex flex-wrap items-center justify-center gap-4 mb-14"
                  style={{
                    animation: mounted ? "hero08FadeUp 700ms cubic-bezier(0.16,1,0.3,1) 600ms both" : "none",
                    opacity: mounted ? undefined : 0,
                  }}
                >
                  <button
                    className={`cursor-pointer px-8 py-3.5 rounded-xl text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/20 hover:scale-[1.02] active:scale-[0.98] ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
                    style={{
                      backgroundColor: "#b45309",
                      minHeight: "44px",
                    }}
                  >
                    {t.cta1}
                  </button>
                  <button
                    className={`cursor-pointer flex items-center gap-2 px-4 py-3.5 text-sm font-medium transition-all duration-300 hover:opacity-70 ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
                    style={{
                      color: "#b45309",
                      minHeight: "44px",
                    }}
                  >
                    {t.cta2}
                    <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
                  </button>
                </div>

                {/* Gold divider line */}
                <div
                  className="hero08-animate w-16 mx-auto mb-10"
                  style={{
                    height: "1px",
                    backgroundColor: "rgba(212, 160, 83, 0.3)",
                    animation: mounted ? "hero08FadeUp 700ms cubic-bezier(0.16,1,0.3,1) 650ms both" : "none",
                    opacity: mounted ? undefined : 0,
                  }}
                />

                {/* Amenities */}
                <div
                  className="hero08-animate flex flex-wrap items-center justify-center gap-8 sm:gap-12"
                  style={{
                    animation: mounted ? "hero08FadeUp 700ms cubic-bezier(0.16,1,0.3,1) 750ms both" : "none",
                    opacity: mounted ? undefined : 0,
                  }}
                >
                  {t.amenities.map((amenity, i) => (
                    <div key={i} className="flex flex-col items-center gap-2.5">
                      <div
                        className="flex items-center justify-center w-14 h-14 rounded-full"
                        style={{
                          border: "1px solid rgba(212, 160, 83, 0.3)",
                          backgroundColor: "rgba(212, 160, 83, 0.04)",
                        }}
                      >
                        <amenity.icon size={20} strokeWidth={1.3} style={{ color: "#d4a053" }} />
                      </div>
                      <span
                        className={`text-xs ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
                        style={{ color: "#78716c", fontWeight: 400 }}
                      >
                        {amenity.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
