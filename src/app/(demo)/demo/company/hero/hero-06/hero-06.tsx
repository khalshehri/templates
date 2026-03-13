"use client";

import { useState, useEffect } from "react";
import { Star, MapPin, Wifi, Coffee, Car, Utensils, Hotel } from "lucide-react";

interface Hero06Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Luxury Hospitality",
    location: "Riyadh, Kingdom of Saudi Arabia",
    headingLine1: "Where Every Moment",
    headingAccent: "Becomes a Memory",
    subtitle:
      "Experience world-class hospitality in the heart of the city. Luxurious rooms, exquisite dining, and unforgettable experiences await.",
    cta1: "Book Your Stay",
    cta2: "Take a Virtual Tour",
    rating: "4.9 out of 5",
    reviews: "2,400+ guest reviews",
    amenities: [
      { icon: "wifi", label: "Free WiFi" },
      { icon: "coffee", label: "Fine Dining" },
      { icon: "car", label: "Valet Parking" },
      { icon: "utensils", label: "Room Service" },
    ],
  },
  ar: {
    badge: "ضيافة فاخرة",
    location: "الرياض، المملكة العربية السعودية",
    headingLine1: "حيث تصبح كل لحظة",
    headingAccent: "ذكرى",
    subtitle:
      "عش تجربة ضيافة عالمية في قلب المدينة. غرف فاخرة ومطاعم راقية وتجارب لا تُنسى بانتظارك.",
    cta1: "احجز إقامتك",
    cta2: "جولة افتراضية",
    rating: "4.9 من 5",
    reviews: "أكثر من 2,400 تقييم",
    amenities: [
      { icon: "wifi", label: "واي فاي مجاني" },
      { icon: "coffee", label: "مطاعم راقية" },
      { icon: "car", label: "خدمة صف السيارات" },
      { icon: "utensils", label: "خدمة الغرف" },
    ],
  },
};

const iconMap: Record<string, typeof Wifi> = {
  wifi: Wifi,
  coffee: Coffee,
  car: Car,
  utensils: Utensils,
};

export function Hero06({ language }: Hero06Props) {
  const [mounted, setMounted] = useState(false);
  const isAr = language === "ar";
  const t = content[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  const fontHeading = isAr ? "var(--font-amiri)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes hero06FadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero06FadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .hero06-fadeUp {
          opacity: 0;
          animation: hero06FadeUp 0.4s ease-out forwards;
        }
        .hero06-fadeIn {
          opacity: 0;
          animation: hero06FadeIn 0.4s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero06-fadeUp,
          .hero06-fadeIn {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        style={{
          fontFamily: fontBody,
          background: `radial-gradient(ellipse at center, rgba(254,243,199,0.25) 0%, #fffbeb 70%)`,
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Faint diamond pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 28px,
                rgba(217,119,6,0.03) 28px,
                rgba(217,119,6,0.03) 29px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 28px,
                rgba(217,119,6,0.03) 28px,
                rgba(217,119,6,0.03) 29px
              )
            `,
            pointerEvents: "none",
          }}
        />

        {/* Content with decorative frame */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 800,
            margin: "0 auto",
            padding: "80px 24px",
          }}
        >
          {/* Gold border frame */}
          <div
            className={mounted ? "hero06-fadeIn" : ""}
            style={{
              animationDelay: "0ms",
              position: "relative",
              border: "1px solid rgba(217,119,6,0.3)",
              borderRadius: 4,
              padding: "clamp(32px, 6vw, 64px)",
            }}
          >
            {/* Corner ornaments — top-left */}
            <div
              style={{
                position: "absolute",
                top: -5,
                left: -5,
                width: 10,
                height: 10,
                background: "#d97706",
                borderRadius: 1,
              }}
            />
            {/* top-right */}
            <div
              style={{
                position: "absolute",
                top: -5,
                right: -5,
                width: 10,
                height: 10,
                background: "#d97706",
                borderRadius: 1,
              }}
            />
            {/* bottom-left */}
            <div
              style={{
                position: "absolute",
                bottom: -5,
                left: -5,
                width: 10,
                height: 10,
                background: "#d97706",
                borderRadius: 1,
              }}
            />
            {/* bottom-right */}
            <div
              style={{
                position: "absolute",
                bottom: -5,
                right: -5,
                width: 10,
                height: 10,
                background: "#d97706",
                borderRadius: 1,
              }}
            />

            <div style={{ textAlign: "center" }}>
              {/* Stars */}
              <div
                className={mounted ? "hero06-fadeUp" : ""}
                style={{
                  animationDelay: "50ms",
                  display: "flex",
                  justifyContent: "center",
                  gap: 4,
                  marginBottom: 16,
                }}
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    size={20}
                    fill="#d97706"
                    color="#d97706"
                    style={{ flexShrink: 0 }}
                  />
                ))}
              </div>

              {/* Badge */}
              <div
                className={mounted ? "hero06-fadeUp" : ""}
                style={{ animationDelay: "90ms", marginBottom: 12 }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#92400e",
                    fontFamily: fontBody,
                  }}
                >
                  <Hotel size={15} />
                  {t.badge}
                </span>
              </div>

              {/* Location */}
              <div
                className={mounted ? "hero06-fadeUp" : ""}
                style={{ animationDelay: "130ms", marginBottom: 24 }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: "#92400e",
                    fontFamily: fontBody,
                  }}
                >
                  <MapPin size={14} />
                  {t.location}
                </span>
              </div>

              {/* Heading */}
              <h1
                className={mounted ? "hero06-fadeUp" : ""}
                style={{
                  animationDelay: "170ms",
                  fontFamily: fontHeading,
                  fontWeight: 700,
                  fontSize: "clamp(30px, 5vw, 52px)",
                  lineHeight: 1.2,
                  color: "#1c1917",
                  margin: "0 0 24px 0",
                }}
              >
                {t.headingLine1}
                <br />
                <span style={{ color: "#d97706" }}>{t.headingAccent}</span>
              </h1>

              {/* Subtitle */}
              <p
                className={mounted ? "hero06-fadeUp" : ""}
                style={{
                  animationDelay: "210ms",
                  fontFamily: fontBody,
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "#57534e",
                  margin: "0 auto 20px auto",
                  maxWidth: 540,
                }}
              >
                {t.subtitle}
              </p>

              {/* Rating */}
              <div
                className={mounted ? "hero06-fadeUp" : ""}
                style={{
                  animationDelay: "250ms",
                  marginBottom: 32,
                  fontSize: 14,
                  color: "#78716c",
                  fontFamily: fontBody,
                }}
              >
                <span style={{ fontWeight: 600, color: "#92400e" }}>
                  {t.rating}
                </span>
                {" · "}
                {t.reviews}
              </div>

              {/* CTAs */}
              <div
                className={mounted ? "hero06-fadeUp" : ""}
                style={{
                  animationDelay: "290ms",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 40,
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    background: "#d97706",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    padding: "14px 36px",
                    fontSize: 16,
                    fontWeight: 600,
                    fontFamily: fontBody,
                    minHeight: 48,
                    minWidth: 44,
                    transition:
                      "opacity 0.2s ease-out, transform 0.2s ease-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {t.cta1}
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    padding: "8px 16px",
                    fontSize: 15,
                    fontWeight: 500,
                    fontFamily: fontBody,
                    color: "#92400e",
                    minHeight: 44,
                    minWidth: 44,
                    transition: "color 0.2s ease-out",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#d97706";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#92400e";
                  }}
                >
                  {t.cta2}{" "}
                  <span
                    style={{
                      display: "inline-block",
                      transform: isAr ? "scaleX(-1)" : undefined,
                    }}
                  >
                    &rarr;
                  </span>
                </button>
              </div>

              {/* Amenities */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "clamp(16px, 4vw, 32px)",
                }}
              >
                {t.amenities.map((amenity, i) => {
                  const Icon = iconMap[amenity.icon];
                  return (
                    <div
                      key={i}
                      className={mounted ? "hero06-fadeUp" : ""}
                      style={{
                        animationDelay: `${330 + i * 40}ms`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          border: "1px solid rgba(217,119,6,0.3)",
                          background: "rgba(217,119,6,0.06)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={20} color="#d97706" />
                      </div>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: "#78716c",
                          fontFamily: fontBody,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {amenity.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
