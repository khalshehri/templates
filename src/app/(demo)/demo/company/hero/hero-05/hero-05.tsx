"use client";

import { useState } from "react";
import { Heart, Leaf, Dumbbell, Sparkles } from "lucide-react";

interface Hero05Props {
  language: "en" | "ar";
}

const tabIcons = [Heart, Leaf, Dumbbell, Sparkles];

const content = {
  en: {
    badge: "SAKURA WELLNESS",
    heading: "Nurture Your",
    accent: "Complete Well-being",
    sub: "A holistic wellness center combining modern science with ancient wisdom to restore balance in body, mind, and spirit.",
    cta1: "Book a Session",
    cta2: "Explore Programs",
    tabs: [
      {
        label: "Therapy",
        description:
          "Individual and group therapy sessions led by certified professionals for mental health and emotional resilience.",
      },
      {
        label: "Nutrition",
        description:
          "Personalized nutrition plans and dietary guidance from expert nutritionists for optimal health.",
      },
      {
        label: "Fitness",
        description:
          "Tailored fitness programs combining yoga, pilates, and strength training for physical vitality.",
      },
      {
        label: "Mindfulness",
        description:
          "Meditation, breathwork, and mindfulness practices for inner peace and stress management.",
      },
    ],
  },
  ar: {
    badge: "ساكورا للعافية",
    heading: "اعتنِ",
    accent: "بعافيتك الشاملة",
    sub: "مركز عافية شامل يجمع بين العلم الحديث والحكمة القديمة لاستعادة التوازن في الجسم والعقل والروح.",
    cta1: "احجز جلسة",
    cta2: "استكشف البرامج",
    tabs: [
      {
        label: "العلاج",
        description:
          "جلسات علاج فردية وجماعية يقودها متخصصون معتمدون للصحة النفسية والمرونة العاطفية.",
      },
      {
        label: "التغذية",
        description:
          "خطط تغذية مخصصة وإرشادات غذائية من خبراء التغذية للصحة المثلى.",
      },
      {
        label: "اللياقة",
        description:
          "برامج لياقة مصممة تجمع بين اليوغا والبيلاتس وتدريب القوة للحيوية البدنية.",
      },
      {
        label: "اليقظة",
        description:
          "التأمل وتمارين التنفس وممارسات اليقظة الذهنية للسلام الداخلي وإدارة التوتر.",
      },
    ],
  },
};

const tabColors = ["#6b4c9a", "#a8c5a0", "#d4a0d4", "#8ab4c9"];

export function Hero05({ language }: Hero05Props) {
  const t = content[language];
  const isAr = language === "ar";
  const fontFamily = isAr
    ? "var(--font-noto-sans-arabic)"
    : "var(--font-readex-pro)";

  const [activeTab, setActiveTab] = useState(0);
  const ActiveIcon = tabIcons[activeTab];

  return (
    <section
      style={{
        fontFamily,
        background: "#f8f5ff",
        color: "#2d2246",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <style>{`
        @keyframes blobMorph1 {
          0%, 100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; transform: translate(0, 0) scale(1); }
          25% { border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%; transform: translate(10px, -15px) scale(1.03); }
          50% { border-radius: 30% 70% 40% 60% / 55% 30% 70% 45%; transform: translate(-8px, 10px) scale(0.97); }
          75% { border-radius: 55% 45% 60% 40% / 40% 70% 30% 60%; transform: translate(12px, 5px) scale(1.02); }
        }
        @keyframes blobMorph2 {
          0%, 100% { border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%; transform: translate(0, 0) scale(1); }
          33% { border-radius: 40% 60% 70% 30% / 60% 30% 70% 40%; transform: translate(-12px, 8px) scale(1.04); }
          66% { border-radius: 50% 50% 40% 60% / 35% 55% 45% 65%; transform: translate(8px, -10px) scale(0.98); }
        }
        @keyframes blobMorph3 {
          0%, 100% { border-radius: 35% 65% 55% 45% / 60% 40% 60% 40%; transform: translate(0, 0) scale(1); }
          50% { border-radius: 65% 35% 45% 55% / 40% 60% 40% 60%; transform: translate(15px, 12px) scale(1.05); }
        }
        @keyframes blobMorph4 {
          0%, 100% { border-radius: 50% 50% 40% 60% / 55% 45% 55% 45%; transform: translate(0, 0); }
          33% { border-radius: 40% 60% 60% 40% / 45% 55% 45% 55%; transform: translate(-10px, -8px); }
          66% { border-radius: 60% 40% 45% 55% / 50% 50% 50% 50%; transform: translate(6px, 10px); }
        }
        @keyframes fadeInUp05 {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tabContentIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .sw-fade-in { animation: fadeInUp05 0.7s ease-out forwards; opacity: 0; }
        .sw-fade-1 { animation-delay: 0.1s; }
        .sw-fade-2 { animation-delay: 0.25s; }
        .sw-fade-3 { animation-delay: 0.4s; }
        .sw-fade-4 { animation-delay: 0.55s; }
        .sw-fade-5 { animation-delay: 0.7s; }
        .sw-tab-content { animation: tabContentIn 0.4s ease-out; }
      `}</style>

      {/* Floating blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "10%",
            width: "350px",
            height: "350px",
            background: "linear-gradient(135deg, rgba(107,76,154,0.12), rgba(168,197,160,0.1))",
            animation: "blobMorph1 12s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "55%",
            right: "5%",
            width: "280px",
            height: "280px",
            background: "linear-gradient(135deg, rgba(240,228,247,0.5), rgba(168,197,160,0.2))",
            animation: "blobMorph2 10s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "25%",
            width: "220px",
            height: "220px",
            background: "linear-gradient(135deg, rgba(168,197,160,0.2), rgba(107,76,154,0.08))",
            animation: "blobMorph3 14s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "20%",
            width: "180px",
            height: "180px",
            background: "linear-gradient(135deg, rgba(240,228,247,0.35), rgba(107,76,154,0.1))",
            animation: "blobMorph4 11s ease-in-out infinite",
          }}
        />
      </div>

      {/* Content — Centered */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "100px 24px",
          textAlign: "center",
          direction: isAr ? "rtl" : "ltr",
        }}
      >
        {/* Badge */}
        <div className="sw-fade-in sw-fade-1" style={{ marginBottom: "24px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              background: "rgba(107,76,154,0.08)",
              border: "1px solid rgba(107,76,154,0.2)",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#6b4c9a",
              textTransform: "uppercase",
            }}
          >
            <Heart size={14} />
            {t.badge}
          </span>
        </div>

        {/* Heading */}
        <div className="sw-fade-in sw-fade-2">
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              margin: "0 0 4px 0",
              color: "#2d2246",
            }}
          >
            {t.heading}
          </h1>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              margin: "0 0 20px 0",
              color: "#6b4c9a",
            }}
          >
            {t.accent}
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="sw-fade-in sw-fade-3"
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#6b6080",
            maxWidth: "600px",
            margin: "0 auto 40px auto",
          }}
        >
          {t.sub}
        </p>

        {/* Service Tabs */}
        <div className="sw-fade-in sw-fade-4" style={{ marginBottom: "24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "24px",
            }}
          >
            {t.tabs.map((tab, i) => {
              const Icon = tabIcons[i];
              const isActive = activeTab === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    background: isActive ? tabColors[i] : "rgba(107,76,154,0.06)",
                    color: isActive ? "#ffffff" : "#6b6080",
                    border: isActive ? "none" : "1px solid rgba(107,76,154,0.15)",
                    borderRadius: "999px",
                    fontSize: "0.9rem",
                    fontWeight: isActive ? 600 : 500,
                    fontFamily,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div
            key={activeTab}
            className="sw-tab-content"
            style={{
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(12px)",
              borderRadius: "20px",
              padding: "32px",
              border: "1px solid rgba(107,76,154,0.1)",
              boxShadow: "0 4px 24px rgba(107,76,154,0.06)",
              minHeight: "120px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <ActiveIcon size={36} color={tabColors[activeTab]} strokeWidth={1.5} />
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#4a3d66",
                maxWidth: "520px",
                margin: 0,
              }}
            >
              {t.tabs[activeTab].description}
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div
          className="sw-fade-in sw-fade-5"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginTop: "36px",
          }}
        >
          <button
            style={{
              padding: "14px 36px",
              background: "#6b4c9a",
              color: "#ffffff",
              border: "none",
              borderRadius: "999px",
              fontSize: "0.95rem",
              fontWeight: 600,
              fontFamily,
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(107,76,154,0.25)",
            }}
          >
            {t.cta1}
          </button>
          <button
            style={{
              padding: "14px 36px",
              background: "transparent",
              color: "#6b4c9a",
              border: "1.5px solid rgba(107,76,154,0.3)",
              borderRadius: "999px",
              fontSize: "0.95rem",
              fontWeight: 600,
              fontFamily,
              cursor: "pointer",
            }}
          >
            {t.cta2}
          </button>
        </div>
      </div>
    </section>
  );
}
