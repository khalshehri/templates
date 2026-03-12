"use client";

import { useState } from "react";
import { Building } from "lucide-react";

interface Hero10Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "ZENITH PROPERTIES",
    heading: "Discover Your",
    accent: "Perfect Space",
    sub: "Premier real estate firm specializing in luxury residential and commercial properties across the Middle East.",
    cta1: "Browse Properties",
    cta2: "Book Viewing",
    tabs: ["Residential", "Commercial", "Luxury", "Industrial"],
    properties: {
      Residential: [
        { name: "Marina Residence", location: "Dubai, UAE", price: "$1.2M", gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)" },
        { name: "Palm Gardens", location: "Riyadh, KSA", price: "$890K", gradient: "linear-gradient(135deg, #059669, #34d399)" },
        { name: "Coral Bay Villa", location: "Jeddah, KSA", price: "$2.1M", gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)" },
      ],
      Commercial: [
        { name: "Apex Business Tower", location: "DIFC, Dubai", price: "$4.5M", gradient: "linear-gradient(135deg, #1a1a2e, #4a4a6e)" },
        { name: "Innovation Hub", location: "KAFD, Riyadh", price: "$3.8M", gradient: "linear-gradient(135deg, #6366f1, #818cf8)" },
        { name: "Trade Center Office", location: "Doha, Qatar", price: "$2.9M", gradient: "linear-gradient(135deg, #0891b2, #67e8f9)" },
      ],
      Luxury: [
        { name: "Royal Penthouse", location: "Palm Jumeirah", price: "$12M", gradient: "linear-gradient(135deg, #b45309, #d4a853)" },
        { name: "The Crown Estate", location: "Al Olaya, Riyadh", price: "$8.5M", gradient: "linear-gradient(135deg, #7c3aed, #a78bfa)" },
        { name: "Pearl Island Villa", location: "Bahrain", price: "$6.2M", gradient: "linear-gradient(135deg, #e11d48, #fb7185)" },
      ],
      Industrial: [
        { name: "Logistics Park A", location: "Jebel Ali, Dubai", price: "$5.8M", gradient: "linear-gradient(135deg, #374151, #6b7280)" },
        { name: "Manufacturing Hub", location: "Jubail, KSA", price: "$3.2M", gradient: "linear-gradient(135deg, #1e3a5f, #3b82f6)" },
        { name: "Warehouse Complex", location: "Dammam, KSA", price: "$1.9M", gradient: "linear-gradient(135deg, #44403c, #78716c)" },
      ],
    },
  },
  ar: {
    badge: "زينيث العقارية",
    heading: "اكتشف",
    accent: "مساحتك المثالية",
    sub: "شركة عقارات رائدة متخصصة في العقارات السكنية والتجارية الفاخرة في جميع أنحاء الشرق الأوسط.",
    cta1: "تصفح العقارات",
    cta2: "احجز معاينة",
    tabs: ["سكني", "تجاري", "فاخر", "صناعي"],
    properties: {
      "سكني": [
        { name: "مارينا ريزيدنس", location: "دبي، الإمارات", price: "$1.2M", gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)" },
        { name: "بالم غاردنز", location: "الرياض، السعودية", price: "$890K", gradient: "linear-gradient(135deg, #059669, #34d399)" },
        { name: "فيلا كورال باي", location: "جدة، السعودية", price: "$2.1M", gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)" },
      ],
      "تجاري": [
        { name: "برج أبكس للأعمال", location: "مركز دبي المالي", price: "$4.5M", gradient: "linear-gradient(135deg, #1a1a2e, #4a4a6e)" },
        { name: "مركز الابتكار", location: "كافد، الرياض", price: "$3.8M", gradient: "linear-gradient(135deg, #6366f1, #818cf8)" },
        { name: "مكتب المركز التجاري", location: "الدوحة، قطر", price: "$2.9M", gradient: "linear-gradient(135deg, #0891b2, #67e8f9)" },
      ],
      "فاخر": [
        { name: "البنتهاوس الملكي", location: "نخلة جميرا", price: "$12M", gradient: "linear-gradient(135deg, #b45309, #d4a853)" },
        { name: "ذا كراون إستيت", location: "العليا، الرياض", price: "$8.5M", gradient: "linear-gradient(135deg, #7c3aed, #a78bfa)" },
        { name: "فيلا جزيرة اللؤلؤ", location: "البحرين", price: "$6.2M", gradient: "linear-gradient(135deg, #e11d48, #fb7185)" },
      ],
      "صناعي": [
        { name: "المنطقة اللوجستية أ", location: "جبل علي، دبي", price: "$5.8M", gradient: "linear-gradient(135deg, #374151, #6b7280)" },
        { name: "مركز التصنيع", location: "الجبيل، السعودية", price: "$3.2M", gradient: "linear-gradient(135deg, #1e3a5f, #3b82f6)" },
        { name: "مجمع المستودعات", location: "الدمام، السعودية", price: "$1.9M", gradient: "linear-gradient(135deg, #44403c, #78716c)" },
      ],
    },
  },
};

export function Hero10({ language }: Hero10Props) {
  const t = content[language];
  const isAr = language === "ar";
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = t.tabs[activeTab];
  const currentProperties = t.properties[currentTab as keyof typeof t.properties] || [];

  return (
    <section
      style={{
        fontFamily: isAr ? "var(--font-almarai)" : "var(--font-readex-pro)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes hero10FadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero10SlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero10SlideInRtl {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .hero10-fadeup { animation: hero10FadeUp 0.7s ease-out both; }
        .hero10-fadeup-1 { animation-delay: 0.1s; }
        .hero10-fadeup-2 { animation-delay: 0.2s; }
        .hero10-fadeup-3 { animation-delay: 0.3s; }
        .hero10-fadeup-4 { animation-delay: 0.4s; }
        .hero10-fadeup-5 { animation-delay: 0.5s; }
        .hero10-card-enter {
          animation: hero10SlideIn 0.4s ease-out both;
        }
        .hero10-card-enter-rtl {
          animation: hero10SlideInRtl 0.4s ease-out both;
        }
        .hero10-card-enter:nth-child(1), .hero10-card-enter-rtl:nth-child(1) { animation-delay: 0.05s; }
        .hero10-card-enter:nth-child(2), .hero10-card-enter-rtl:nth-child(2) { animation-delay: 0.1s; }
        .hero10-card-enter:nth-child(3), .hero10-card-enter-rtl:nth-child(3) { animation-delay: 0.15s; }
        .hero10-prop-card {
          transition: all 0.3s ease;
        }
        .hero10-prop-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
        .hero10-tab {
          transition: all 0.3s ease;
        }
        @media (max-width: 768px) {
          .hero10-split {
            flex-direction: column !important;
          }
          .hero10-left, .hero10-right {
            width: 100% !important;
            min-height: auto !important;
            padding: 60px 24px !important;
          }
          .hero10-divider {
            display: none !important;
          }
        }
      `}</style>

      <div className="hero10-split" style={{ display: "flex", minHeight: "100vh", flexDirection: isAr ? "row-reverse" : "row" }}>
        {/* Dark Side - Text Content */}
        <div
          className="hero10-left"
          style={{
            width: "50%",
            background: "#1a1a2e",
            padding: "80px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            minHeight: "100vh",
          }}
        >
          {/* Badge */}
          <div className="hero10-fadeup hero10-fadeup-1" style={{ marginBottom: "28px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 20px",
                borderRadius: "9999px",
                border: "1px solid rgba(14,165,233,0.3)",
                background: "rgba(14,165,233,0.08)",
                color: "#0ea5e9",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: isAr ? "0" : "0.1em",
              }}
            >
              <Building size={16} />
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hero10-fadeup hero10-fadeup-2"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            {t.heading}
            <br />
            <span style={{ color: "#0ea5e9" }}>{t.accent}</span>
          </h1>

          {/* Sub */}
          <p
            className="hero10-fadeup hero10-fadeup-3"
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#94a3b8",
              maxWidth: "480px",
              marginBottom: "40px",
            }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div
            className="hero10-fadeup hero10-fadeup-4"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <button
              style={{
                padding: "14px 32px",
                borderRadius: "10px",
                background: "#0ea5e9",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "15px",
                border: "none",
                cursor: "pointer",
                fontFamily: isAr ? "var(--font-almarai)" : "var(--font-readex-pro)",
              }}
            >
              {t.cta1}
            </button>
            <button
              style={{
                padding: "14px 32px",
                borderRadius: "10px",
                background: "transparent",
                color: "#0ea5e9",
                fontWeight: 600,
                fontSize: "15px",
                border: "1px solid rgba(14,165,233,0.4)",
                cursor: "pointer",
                fontFamily: isAr ? "var(--font-almarai)" : "var(--font-readex-pro)",
              }}
            >
              {t.cta2}
            </button>
          </div>
        </div>

        {/* Diagonal SVG Divider */}
        <div
          className="hero10-divider"
          style={{
            position: "absolute",
            top: 0,
            left: isAr ? undefined : "50%",
            right: isAr ? "50%" : undefined,
            width: "80px",
            height: "100%",
            zIndex: 10,
            transform: `translateX(${isAr ? "50%" : "-50%"})`,
          }}
        >
          <svg
            width="80"
            height="100%"
            viewBox="0 0 80 100"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            <polygon
              points={isAr ? "80,0 0,0 80,100" : "0,0 80,0 0,100"}
              fill="#f8f8f8"
            />
            <polygon
              points={isAr ? "0,100 80,100 0,0" : "80,100 0,100 80,0"}
              fill="#1a1a2e"
            />
          </svg>
        </div>

        {/* Light Side - Properties */}
        <div
          className="hero10-right"
          style={{
            width: "50%",
            background: "#f8f8f8",
            padding: "80px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            minHeight: "100vh",
          }}
        >
          {/* Filter Tabs */}
          <div
            className="hero10-fadeup hero10-fadeup-3"
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            {t.tabs.map((tab, i) => (
              <button
                key={tab}
                className="hero10-tab"
                onClick={() => setActiveTab(i)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  background: activeTab === i ? "#0ea5e9" : "#e2e8f0",
                  color: activeTab === i ? "#ffffff" : "#475569",
                  fontFamily: isAr ? "var(--font-almarai)" : "var(--font-readex-pro)",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Property Cards */}
          <div
            key={activeTab}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {currentProperties.map((prop, i) => (
              <div
                key={`${activeTab}-${i}`}
                className={`hero10-prop-card ${isAr ? "hero10-card-enter-rtl" : "hero10-card-enter"}`}
                style={{
                  display: "flex",
                  flexDirection: isAr ? "row-reverse" : "row",
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                }}
              >
                {/* Gradient Image Placeholder */}
                <div
                  style={{
                    width: "140px",
                    minHeight: "120px",
                    background: prop.gradient,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Building size={28} color="rgba(255,255,255,0.5)" />
                </div>
                {/* Property Info */}
                <div
                  style={{
                    padding: "16px 20px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#1a1a2e",
                      marginBottom: "4px",
                    }}
                  >
                    {prop.name}
                  </h4>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      marginBottom: "8px",
                    }}
                  >
                    {prop.location}
                  </p>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#0ea5e9",
                      fontFamily: "var(--font-inter, var(--font-readex-pro))",
                    }}
                  >
                    {prop.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
