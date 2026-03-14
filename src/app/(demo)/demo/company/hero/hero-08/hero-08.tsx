"use client";

import { useState, useEffect } from "react";
import { Shield, Zap, TrendingUp, ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: "Transforming Industries Through Innovation",
    sub: "We partner with forward-thinking organizations to unlock new possibilities, blending deep expertise with cutting-edge technology to drive lasting change.",
    cta: "Get Started",
    cards: [
      {
        icon: "shield",
        title: "Strategic Advisory",
        desc: "Data-driven strategies that align vision with execution.",
      },
      {
        icon: "zap",
        title: "Digital Transformation",
        desc: "End-to-end modernization of legacy systems and workflows.",
      },
      {
        icon: "trending",
        title: "Growth Acceleration",
        desc: "Scalable frameworks that compound results quarter over quarter.",
      },
    ],
  },
  ar: {
    heading: "تحويل الصناعات من خلال الابتكار",
    sub: "نتشارك مع المنظمات ذات الرؤية المستقبلية لفتح آفاق جديدة، نمزج بين الخبرة العميقة والتكنولوجيا المتطورة لدفع التغيير الدائم.",
    cta: "ابدأ الآن",
    cards: [
      {
        icon: "shield",
        title: "الاستشارات الاستراتيجية",
        desc: "استراتيجيات مبنية على البيانات تربط الرؤية بالتنفيذ.",
      },
      {
        icon: "zap",
        title: "التحول الرقمي",
        desc: "تحديث شامل للأنظمة القديمة وسير العمل.",
      },
      {
        icon: "trending",
        title: "تسريع النمو",
        desc: "أطر عمل قابلة للتوسع تضاعف النتائج كل ربع سنة.",
      },
    ],
  },
};

const particles = Array.from({ length: 15 }, (_, i) => ({
  left: `${(i * 7.3 + 3) % 100}%`,
  top: `${(i * 11.7 + 8) % 100}%`,
  size: 2 + (i % 3),
  duration: 12 + (i % 5) * 4,
  delay: (i * 1.3) % 8,
}));

const IconMap = {
  shield: Shield,
  zap: Zap,
  trending: TrendingUp,
};

export function Hero08({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const headingFont = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const bodyFont = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, [language]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1a1025] overflow-hidden flex flex-col items-center justify-center px-6 py-20">
      <style>{`
        @keyframes orbDrift1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(80px, 60px); }
          66% { transform: translate(40px, -30px); }
        }

        @keyframes orbDrift2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-70px, -50px); }
          66% { transform: translate(-30px, 40px); }
        }

        @keyframes orbDrift3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(50px, -70px); }
          66% { transform: translate(-60px, -20px); }
        }

        @keyframes particleFloat {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-120px); opacity: 0; }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes cardSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contentFadeIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero08-gradient-text {
          background: linear-gradient(135deg, #8b5cf6, #d946ef, #ffffff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 6s ease infinite;
        }

        .hero08-content {
          animation: contentFadeIn 0.8s ease-out both;
        }

        .hero08-content-delay {
          animation: contentFadeIn 0.8s ease-out 0.2s both;
        }

        .hero08-card {
          animation: cardSlideUp 0.7s ease-out both;
        }

        .hero08-card-0 { animation-delay: 0.4s; }
        .hero08-card-1 { animation-delay: 0.55s; }
        .hero08-card-2 { animation-delay: 0.7s; }

        .hero08-glow-btn {
          box-shadow: 0 0 0px rgba(139, 92, 246, 0);
          transition: all 0.3s ease;
        }

        .hero08-glow-btn:hover {
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(217, 70, 239, 0.2);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero08-gradient-text,
          .hero08-content,
          .hero08-content-delay,
          .hero08-card {
            animation: none;
            opacity: 1;
          }
          .hero08-orb,
          .hero08-particle {
            animation: none !important;
          }
        }
      `}</style>

      {/* Orbs */}
      <div
        className="hero08-orb absolute bg-violet-600/20 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{
          top: "8%",
          left: "5%",
          animation: "orbDrift1 20s ease-in-out infinite",
        }}
      />
      <div
        className="hero08-orb absolute bg-fuchsia-600/15 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full blur-[100px] pointer-events-none"
        style={{
          top: "30%",
          right: "8%",
          animation: "orbDrift2 25s ease-in-out infinite",
        }}
      />
      <div
        className="hero08-orb absolute bg-indigo-600/15 w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full blur-[140px] pointer-events-none"
        style={{
          bottom: "5%",
          left: "30%",
          animation: "orbDrift3 30s ease-in-out infinite",
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="hero08-particle absolute rounded-full bg-white/20 pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center" dir={isAr ? "rtl" : "ltr"}>
        {visible && (
          <>
            <h1
              className="hero08-content hero08-gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ fontFamily: headingFont }}
            >
              {t.heading}
            </h1>

            <p
              className="hero08-content-delay mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: bodyFont }}
            >
              {t.sub}
            </p>

            <div className="hero08-content-delay mt-8">
              <button
                className="hero08-glow-btn cursor-pointer transition-all duration-300 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold text-sm px-8 py-3.5 rounded-full inline-flex items-center gap-2 group"
                style={{ fontFamily: bodyFont }}
              >
                {t.cta}
                <ArrowRight
                  className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                    isAr ? "rotate-180 group-hover:-translate-x-1" : ""
                  }`}
                />
              </button>
            </div>

            {/* Glass Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {t.cards.map((card, i) => {
                const Icon = IconMap[card.icon as keyof typeof IconMap];
                const offsets = [0, -20, 0];
                return (
                  <div
                    key={i}
                    className={`hero08-card hero08-card-${i} backdrop-blur-xl bg-white/[0.05] border border-white/[0.08] rounded-2xl p-6 text-start cursor-pointer transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.15]`}
                    style={{
                      transform: `translateY(${offsets[i]}px)`,
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-violet-400" />
                    </div>
                    <h3
                      className="text-white font-semibold text-base"
                      style={{ fontFamily: headingFont }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="mt-2 text-gray-400 text-sm leading-relaxed"
                      style={{ fontFamily: bodyFont }}
                    >
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
