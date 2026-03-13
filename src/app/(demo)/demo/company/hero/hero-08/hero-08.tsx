"use client";

import { useEffect, useState } from "react";
import { Shield, Zap, Globe } from "lucide-react";

interface Hero08Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Enterprise solutions\nbuilt for the future",
    body: "Where artificial intelligence meets institutional expertise. We build the systems that will define the next decade.",
    cta: "See the platform",
    cards: [
      {
        icon: "shield",
        title: "Security First",
        description: "Zero-trust architecture with military-grade encryption",
      },
      {
        icon: "zap",
        title: "Lightning Fast",
        description: "Sub-millisecond response times at global scale",
      },
      {
        icon: "globe",
        title: "Global Scale",
        description: "Deploy across 47 markets with one-click provisioning",
      },
    ],
  },
  ar: {
    heading: "حلول مؤسسية\nمبنية للمستقبل",
    body: "حيث يلتقي الذكاء الاصطناعي بالخبرة المؤسسية. نبني الأنظمة التي ستحدد العقد القادم.",
    cta: "شاهد المنصة",
    cards: [
      {
        icon: "shield",
        title: "الأمان أولاً",
        description: "بنية ثقة صفرية مع تشفير بمستوى عسكري",
      },
      {
        icon: "zap",
        title: "سرعة فائقة",
        description: "أوقات استجابة أقل من ميلي ثانية على نطاق عالمي",
      },
      {
        icon: "globe",
        title: "نطاق عالمي",
        description: "انشر عبر 47 سوقاً بنقرة واحدة",
      },
    ],
  },
};

const iconMap: Record<string, typeof Shield> = {
  shield: Shield,
  zap: Zap,
  globe: Globe,
};

// Fixed particle positions to avoid Math.random()
const particles = [
  { top: "12%", left: "8%", size: 2, color: "rgba(139,92,246,0.15)", delay: 0, duration: 12 },
  { top: "25%", left: "85%", size: 2, color: "rgba(59,130,246,0.12)", delay: 2, duration: 15 },
  { top: "45%", left: "15%", size: 2, color: "rgba(255,255,255,0.08)", delay: 4, duration: 18 },
  { top: "60%", left: "90%", size: 2, color: "rgba(139,92,246,0.10)", delay: 1, duration: 14 },
  { top: "78%", left: "25%", size: 2, color: "rgba(59,130,246,0.15)", delay: 3, duration: 16 },
  { top: "35%", left: "70%", size: 2, color: "rgba(255,255,255,0.10)", delay: 5, duration: 13 },
  { top: "88%", left: "55%", size: 2, color: "rgba(139,92,246,0.12)", delay: 2.5, duration: 17 },
  { top: "15%", left: "50%", size: 2, color: "rgba(59,130,246,0.10)", delay: 4.5, duration: 11 },
];

export function Hero08({ language }: Hero08Props) {
  const [visible, setVisible] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hero08OrbDrift1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(25px, -15px);
          }
          50% {
            transform: translate(-10px, 25px);
          }
          75% {
            transform: translate(-25px, -10px);
          }
        }

        @keyframes hero08OrbDrift2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-20px, 20px);
          }
          50% {
            transform: translate(15px, -25px);
          }
          75% {
            transform: translate(25px, 10px);
          }
        }

        @keyframes hero08ParticleFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          33% {
            transform: translateY(-15px) translateX(8px);
            opacity: 1;
          }
          66% {
            transform: translateY(10px) translateX(-5px);
            opacity: 0.6;
          }
        }

        @keyframes hero08FadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero08-orb-1 {
          animation: hero08OrbDrift1 20s ease-in-out infinite;
        }

        .hero08-orb-2 {
          animation: hero08OrbDrift2 25s ease-in-out infinite;
        }

        .hero08-particle {
          animation: hero08ParticleFloat var(--particle-duration) ease-in-out infinite;
          animation-delay: var(--particle-delay);
        }

        .hero08-card {
          opacity: 0;
        }

        .hero08-card.hero08-visible {
          animation: hero08FadeUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .hero08-card-0 { animation-delay: 0ms; }
        .hero08-card-1 { animation-delay: 150ms; }
        .hero08-card-2 { animation-delay: 300ms; }

        .hero08-heading {
          opacity: 0;
        }

        .hero08-heading.hero08-visible {
          animation: hero08FadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .hero08-body {
          opacity: 0;
        }

        .hero08-body.hero08-visible {
          animation: hero08FadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.15s forwards;
        }

        .hero08-cta-wrap {
          opacity: 0;
        }

        .hero08-cta-wrap.hero08-visible {
          animation: hero08FadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.3s forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero08-orb-1,
          .hero08-orb-2 {
            animation: none;
          }
          .hero08-particle {
            animation: none;
            opacity: 0.5;
          }
          .hero08-card,
          .hero08-heading,
          .hero08-body,
          .hero08-cta-wrap {
            opacity: 1;
            transform: none;
          }
          .hero08-card.hero08-visible,
          .hero08-heading.hero08-visible,
          .hero08-body.hero08-visible,
          .hero08-cta-wrap.hero08-visible {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      <section
        className={`min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 py-20 md:py-28 ${
          isAr
            ? "font-[family-name:var(--font-tajawal)]"
            : "font-[family-name:var(--font-inter)]"
        }`}
        style={{
          background:
            "linear-gradient(135deg, #0f0f1a 0%, #1a1025 50%, #0f0f1a 100%)",
        }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Orb 1 */}
        <div
          className="hero08-orb-1 absolute pointer-events-none"
          style={{
            top: "10%",
            left: "5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(139,92,246,0.12)",
            filter: "blur(100px)",
          }}
        />

        {/* Orb 2 */}
        <div
          className="hero08-orb-2 absolute pointer-events-none"
          style={{
            bottom: "5%",
            right: "5%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(59,130,246,0.08)",
            filter: "blur(100px)",
          }}
        />

        {/* Particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="hero08-particle absolute pointer-events-none rounded-full"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              background: p.color,
              "--particle-delay": `${p.delay}s`,
              "--particle-duration": `${p.duration}s`,
            } as React.CSSProperties}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h1
            className={`hero08-heading ${visible ? "hero08-visible" : ""} text-4xl md:text-5xl lg:text-6xl font-bold text-white whitespace-pre-line leading-tight ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.heading}
          </h1>

          {/* Body */}
          <p
            className={`hero08-body ${visible ? "hero08-visible" : ""} text-white/50 text-lg max-w-xl mx-auto mt-6 leading-relaxed ${
              isAr ? "font-[family-name:var(--font-tajawal)]" : ""
            }`}
          >
            {t.body}
          </p>

          {/* CTA */}
          <div
            className={`hero08-cta-wrap ${visible ? "hero08-visible" : ""} mt-8`}
          >
            <button className="bg-violet-600 text-white px-7 py-3.5 rounded-xl hover:bg-violet-500 cursor-pointer transition-all duration-300 text-base font-medium">
              {t.cta}
            </button>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-violet-500/30 mx-auto my-10 md:my-12" />

          {/* Cards */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {t.cards.map((card, i) => {
              const IconComp = iconMap[card.icon];
              return (
                <div
                  key={i}
                  className={`hero08-card hero08-card-${i} ${
                    visible ? "hero08-visible" : ""
                  } flex-1 backdrop-blur-xl bg-white/[0.05] border border-white/[0.08] rounded-2xl p-6 md:p-8 text-${
                    isAr ? "right" : "left"
                  } hover:bg-white/[0.08] transition-all duration-300`}
                >
                  <IconComp size={24} className="text-violet-400" />
                  <h3
                    className={`text-white font-semibold mt-3 text-lg ${
                      isAr
                        ? "font-[family-name:var(--font-changa)]"
                        : "font-[family-name:var(--font-inter)]"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-white/40 text-sm mt-2 leading-relaxed ${
                      isAr ? "font-[family-name:var(--font-tajawal)]" : ""
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom subtle branding */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <span className="text-[10px] tracking-[0.2em] text-white/10 uppercase">
            {isAr ? "مبني للمستقبل" : "Built for the future"}
          </span>
        </div>
      </section>
    </>
  );
}
