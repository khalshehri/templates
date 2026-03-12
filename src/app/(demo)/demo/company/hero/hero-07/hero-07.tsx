"use client";

import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";

interface Hero07Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "VERTEX CAPITAL",
    heading: "Where Wealth",
    accent: "Finds Direction",
    sub: "Boutique investment management combining quantitative precision with strategic foresight. Your portfolio, our expertise.",
    cta1: "Start Investing",
    cta2: "View Performance",
    stats: [
      { label: "Assets Under Management", value: 4.2, suffix: "B", prefix: "$", decimals: 1 },
      { label: "Annual Returns", value: 18.7, suffix: "%", prefix: "", decimals: 1 },
      { label: "Active Clients", value: 2400, suffix: "+", prefix: "", decimals: 0 },
    ],
    plans: [
      { name: "Growth", desc: "Aggressive growth targeting 20%+ returns. High equity allocation, emerging markets exposure.", returns: "20%+", risk: "High" },
      { name: "Balanced", desc: "Steady growth with managed risk. Diversified across asset classes for consistent returns.", returns: "12-15%", risk: "Medium" },
      { name: "Conservative", desc: "Capital preservation focus. Fixed income heavy with minimal volatility exposure.", returns: "6-8%", risk: "Low" },
    ],
    donutTitle: "Portfolio Allocation",
    donutLabels: ["Equities", "Bonds", "Real Estate", "Alternatives"],
  },
  ar: {
    badge: "فيرتكس كابيتال",
    heading: "حيث تجد الثروة",
    accent: "اتجاهها",
    sub: "إدارة استثمار متخصصة تجمع بين الدقة الكمية والرؤية الاستراتيجية. محفظتك، خبرتنا.",
    cta1: "ابدأ الاستثمار",
    cta2: "عرض الأداء",
    stats: [
      { label: "الأصول المُدارة", value: 4.2, suffix: "B", prefix: "$", decimals: 1 },
      { label: "العوائد السنوية", value: 18.7, suffix: "%", prefix: "", decimals: 1 },
      { label: "العملاء النشطون", value: 2400, suffix: "+", prefix: "", decimals: 0 },
    ],
    plans: [
      { name: "النمو", desc: "نمو قوي يستهدف عوائد 20%+. تخصيص عالي للأسهم وتعرض للأسواق الناشئة.", returns: "+20%", risk: "عالي" },
      { name: "المتوازن", desc: "نمو ثابت مع إدارة المخاطر. متنوع عبر فئات الأصول لعوائد مستقرة.", returns: "12-15%", risk: "متوسط" },
      { name: "المحافظ", desc: "التركيز على الحفاظ على رأس المال. ثقل الدخل الثابت مع تقلبات محدودة.", returns: "6-8%", risk: "منخفض" },
    ],
    donutTitle: "توزيع المحفظة",
    donutLabels: ["الأسهم", "السندات", "العقارات", "البدائل"],
  },
};

const donutSegments = [
  { percent: 40, color: "#d4a853" },
  { percent: 25, color: "#64748b" },
  { percent: 20, color: "#a78bfa" },
  { percent: 15, color: "#38bdf8" },
];

function useCountUp(target: number, decimals: number, duration: number = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setValue(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();
}

export function Hero07({ language }: Hero07Props) {
  const t = content[language];
  const isAr = language === "ar";
  const [selectedPlan, setSelectedPlan] = useState(0);

  const stat0 = useCountUp(t.stats[0].value, t.stats[0].decimals);
  const stat1 = useCountUp(t.stats[1].value, t.stats[1].decimals);
  const stat2 = useCountUp(t.stats[2].value, t.stats[2].decimals);
  const statValues = [stat0, stat1, stat2];

  const conicGradient = (() => {
    let acc = 0;
    const stops: string[] = [];
    donutSegments.forEach((seg) => {
      stops.push(`${seg.color} ${acc}deg ${acc + seg.percent * 3.6}deg`);
      acc += seg.percent * 3.6;
    });
    return `conic-gradient(${stops.join(", ")})`;
  })();

  return (
    <section
      style={{
        background: "#0f0f14",
        fontFamily: isAr ? "var(--font-cairo)" : "var(--font-inter)",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @keyframes hero07FadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero07GoldShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes hero07PulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(212,168,83,0.15); }
          50% { box-shadow: 0 0 40px rgba(212,168,83,0.3); }
        }
        .hero07-fadeup { animation: hero07FadeUp 0.8s ease-out both; }
        .hero07-fadeup-1 { animation-delay: 0.1s; }
        .hero07-fadeup-2 { animation-delay: 0.2s; }
        .hero07-fadeup-3 { animation-delay: 0.3s; }
        .hero07-fadeup-4 { animation-delay: 0.4s; }
        .hero07-fadeup-5 { animation-delay: 0.5s; }
        .hero07-fadeup-6 { animation-delay: 0.6s; }
        .hero07-gold-shimmer {
          background: linear-gradient(90deg, #d4a853 0%, #f5deb3 40%, #d4a853 60%, #f5deb3 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: hero07GoldShimmer 4s linear infinite;
        }
        .hero07-plan-card {
          transition: all 0.3s ease;
        }
        .hero07-plan-card:hover {
          transform: translateY(-4px);
        }
        .hero07-plan-active {
          border-color: #d4a853 !important;
          animation: hero07PulseGlow 2s ease-in-out infinite;
        }
        .hero07-donut {
          animation: hero07FadeUp 0.8s ease-out 0.7s both;
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 60px" }}>
        {/* Badge */}
        <div className="hero07-fadeup hero07-fadeup-1" style={{ textAlign: "center", marginBottom: "24px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "9999px",
              border: "1px solid rgba(212,168,83,0.3)",
              background: "rgba(212,168,83,0.08)",
              color: "#d4a853",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: isAr ? "0" : "0.1em",
              fontFamily: isAr ? "var(--font-cairo)" : "var(--font-inter)",
            }}
          >
            <TrendingUp size={16} />
            {t.badge}
          </span>
        </div>

        {/* Heading */}
        <h1
          className="hero07-fadeup hero07-fadeup-2"
          style={{
            textAlign: "center",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ffffff",
            marginBottom: "20px",
            fontFamily: isAr ? "var(--font-amiri)" : "var(--font-inter)",
          }}
        >
          {t.heading}{" "}
          <span className="hero07-gold-shimmer">{t.accent}</span>
        </h1>

        {/* Subheading */}
        <p
          className="hero07-fadeup hero07-fadeup-3"
          style={{
            textAlign: "center",
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#94a3b8",
            maxWidth: "640px",
            margin: "0 auto 48px",
            fontFamily: isAr ? "var(--font-cairo)" : "var(--font-inter)",
          }}
        >
          {t.sub}
        </p>

        {/* CTAs */}
        <div
          className="hero07-fadeup hero07-fadeup-3"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "56px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "14px 32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #d4a853, #b8922e)",
              color: "#0f0f14",
              fontWeight: 600,
              fontSize: "15px",
              border: "none",
              cursor: "pointer",
              fontFamily: isAr ? "var(--font-cairo)" : "var(--font-inter)",
            }}
          >
            {t.cta1}
          </button>
          <button
            style={{
              padding: "14px 32px",
              borderRadius: "8px",
              background: "transparent",
              color: "#d4a853",
              fontWeight: 600,
              fontSize: "15px",
              border: "1px solid rgba(212,168,83,0.4)",
              cursor: "pointer",
              fontFamily: isAr ? "var(--font-cairo)" : "var(--font-inter)",
            }}
          >
            {t.cta2}
          </button>
        </div>

        {/* Stats Row */}
        <div
          className="hero07-fadeup hero07-fadeup-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginBottom: "56px",
            maxWidth: "720px",
            margin: "0 auto 56px",
          }}
        >
          {t.stats.map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "24px 16px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#d4a853",
                  fontFamily: "var(--font-inter)",
                  marginBottom: "4px",
                }}
              >
                {stat.prefix}{statValues[i]}{stat.suffix}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#64748b",
                  fontFamily: isAr ? "var(--font-cairo)" : "var(--font-inter)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Plan Selector */}
        <div className="hero07-fadeup hero07-fadeup-5" style={{ marginBottom: "56px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              maxWidth: "960px",
              margin: "0 auto",
            }}
          >
            {t.plans.map((plan, i) => (
              <div
                key={i}
                className={`hero07-plan-card ${selectedPlan === i ? "hero07-plan-active" : ""}`}
                onClick={() => setSelectedPlan(i)}
                style={{
                  padding: "28px 24px",
                  borderRadius: "16px",
                  background: selectedPlan === i
                    ? "linear-gradient(135deg, rgba(212,168,83,0.12), rgba(212,168,83,0.04))"
                    : "rgba(255,255,255,0.02)",
                  border: selectedPlan === i
                    ? "1px solid #d4a853"
                    : "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                  textAlign: isAr ? "right" : "left",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: selectedPlan === i ? "#d4a853" : "#ffffff",
                      fontFamily: isAr ? "var(--font-amiri)" : "var(--font-inter)",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <span
                    style={{
                      fontSize: "12px",
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      background: selectedPlan === i ? "rgba(212,168,83,0.2)" : "rgba(100,116,139,0.2)",
                      color: selectedPlan === i ? "#d4a853" : "#64748b",
                      fontFamily: isAr ? "var(--font-cairo)" : "var(--font-inter)",
                    }}
                  >
                    {plan.risk}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#94a3b8",
                    marginBottom: "16px",
                    fontFamily: isAr ? "var(--font-cairo)" : "var(--font-inter)",
                  }}
                >
                  {plan.desc}
                </p>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: selectedPlan === i ? "#d4a853" : "#64748b",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {plan.returns}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#64748b",
                    fontFamily: isAr ? "var(--font-cairo)" : "var(--font-inter)",
                  }}
                >
                  {isAr ? "العوائد المتوقعة" : "Expected Returns"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Donut Chart */}
        <div className="hero07-donut" style={{ maxWidth: "400px", margin: "0 auto" }}>
          <h3
            style={{
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "24px",
              fontFamily: isAr ? "var(--font-amiri)" : "var(--font-inter)",
            }}
          >
            {t.donutTitle}
          </h3>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
            {/* Chart */}
            <div
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                background: conicGradient,
                position: "relative",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background: "#0f0f14",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TrendingUp size={24} color="#d4a853" />
              </div>
            </div>
            {/* Legend */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {donutSegments.map((seg, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "3px",
                      background: seg.color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#94a3b8",
                      fontFamily: isAr ? "var(--font-cairo)" : "var(--font-inter)",
                    }}
                  >
                    {t.donutLabels[i]} ({seg.percent}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
