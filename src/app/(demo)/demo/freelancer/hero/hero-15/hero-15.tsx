"use client";

import { ArrowRight, Layers, Palette, Code, Globe, Megaphone } from "lucide-react";

const content = {
  en: {
    badge: "Full Service Freelancer",
    headingLine1: "Five Layers",
    headingLine2: "of Expertise",
    sub: "A comprehensive stack of services designed to elevate your brand, build your product, and grow your audience — all from one freelancer.",
    cards: [
      { title: "Brand Design", desc: "Visual identity, logos, brand guidelines" },
      { title: "Web Development", desc: "React, Next.js, full-stack applications" },
      { title: "SEO & Growth", desc: "Search optimization, analytics, strategy" },
      { title: "Marketing", desc: "Social media, content, campaigns" },
      { title: "Consulting", desc: "Technical strategy, architecture reviews" },
    ],
    cta1: "Stack Up Your Project",
    cta2: "View All Services",
    footer: "Pick one layer or stack them all — your project, your choice.",
  },
  ar: {
    badge: "مستقل متكامل الخدمات",
    headingLine1: "خمس طبقات",
    headingLine2: "من الخبرة",
    sub: "مجموعة شاملة من الخدمات مصممة لرفع مستوى علامتك التجارية وبناء منتجك وتنمية جمهورك — كل ذلك من مستقل واحد.",
    cards: [
      { title: "تصميم العلامة", desc: "الهوية البصرية، الشعارات، إرشادات العلامة التجارية" },
      { title: "تطوير الويب", desc: "React، Next.js، تطبيقات متكاملة" },
      { title: "SEO والنمو", desc: "تحسين محركات البحث، التحليلات، الاستراتيجية" },
      { title: "التسويق", desc: "وسائل التواصل، المحتوى، الحملات" },
      { title: "الاستشارات", desc: "الاستراتيجية التقنية، مراجعات البنية" },
    ],
    cta1: "ابنِ مشروعك",
    cta2: "عرض جميع الخدمات",
    footer: "اختر طبقة واحدة أو اجمعها كلها — مشروعك، خيارك.",
  },
};

const cardIcons = [Palette, Code, Globe, Megaphone, Layers];

const cardGradients = [
  { from: "#7c3aed", to: "#6d28d9" },
  { from: "#2563eb", to: "#1d4ed8" },
  { from: "#059669", to: "#047857" },
  { from: "#d97706", to: "#b45309" },
  { from: "#dc2626", to: "#b91c1c" },
];

const glowColors = [
  "rgba(124, 58, 237, 0.4)",
  "rgba(37, 99, 235, 0.4)",
  "rgba(5, 150, 105, 0.4)",
  "rgba(217, 119, 6, 0.4)",
  "rgba(220, 38, 38, 0.4)",
];

export function Hero15({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes stackSpread0 {
          0% { transform: translateY(0px) scale(0.98); opacity: 0.6; }
          100% { transform: translateY(0px) scale(1); opacity: 1; }
        }
        @keyframes stackSpread1 {
          0% { transform: translateY(0px) scale(0.98); opacity: 0.6; }
          100% { transform: translateY(120px) scale(1); opacity: 1; }
        }
        @keyframes stackSpread2 {
          0% { transform: translateY(0px) scale(0.98); opacity: 0.6; }
          100% { transform: translateY(240px) scale(1); opacity: 1; }
        }
        @keyframes stackSpread3 {
          0% { transform: translateY(0px) scale(0.98); opacity: 0.6; }
          100% { transform: translateY(360px) scale(1); opacity: 1; }
        }
        @keyframes stackSpread4 {
          0% { transform: translateY(0px) scale(0.98); opacity: 0.6; }
          100% { transform: translateY(480px) scale(1); opacity: 1; }
        }

        @keyframes cardGlow0 {
          0%, 100% { box-shadow: 0 4px 20px ${glowColors[0]}; }
          50% { box-shadow: 0 4px 35px ${glowColors[0]}, 0 0 60px ${glowColors[0]}; }
        }
        @keyframes cardGlow1 {
          0%, 100% { box-shadow: 0 4px 20px ${glowColors[1]}; }
          50% { box-shadow: 0 4px 35px ${glowColors[1]}, 0 0 60px ${glowColors[1]}; }
        }
        @keyframes cardGlow2 {
          0%, 100% { box-shadow: 0 4px 20px ${glowColors[2]}; }
          50% { box-shadow: 0 4px 35px ${glowColors[2]}, 0 0 60px ${glowColors[2]}; }
        }
        @keyframes cardGlow3 {
          0%, 100% { box-shadow: 0 4px 20px ${glowColors[3]}; }
          50% { box-shadow: 0 4px 35px ${glowColors[3]}, 0 0 60px ${glowColors[3]}; }
        }
        @keyframes cardGlow4 {
          0%, 100% { box-shadow: 0 4px 20px ${glowColors[4]}; }
          50% { box-shadow: 0 4px 35px ${glowColors[4]}, 0 0 60px ${glowColors[4]}; }
        }

        @keyframes contentFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes iconSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes gradientCycle {
          0%, 100% { color: #7c3aed; }
          20% { color: #2563eb; }
          40% { color: #059669; }
          60% { color: #d97706; }
          80% { color: #dc2626; }
        }

        .hero15-card-0 {
          animation: stackSpread0 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both,
                     cardGlow0 3s ease-in-out 1.1s infinite;
        }
        .hero15-card-1 {
          animation: stackSpread1 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both,
                     cardGlow1 3s ease-in-out 1.3s infinite;
        }
        .hero15-card-2 {
          animation: stackSpread2 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s both,
                     cardGlow2 3s ease-in-out 1.5s infinite;
        }
        .hero15-card-3 {
          animation: stackSpread3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s both,
                     cardGlow3 3s ease-in-out 1.7s infinite;
        }
        .hero15-card-4 {
          animation: stackSpread4 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1.1s both,
                     cardGlow4 3s ease-in-out 1.9s infinite;
        }

        .hero15-icon-0 { animation: iconSpin 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both; }
        .hero15-icon-1 { animation: iconSpin 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both; }
        .hero15-icon-2 { animation: iconSpin 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s both; }
        .hero15-icon-3 { animation: iconSpin 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s both; }
        .hero15-icon-4 { animation: iconSpin 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 1.1s both; }

        .hero15-content-fade {
          animation: contentFade 0.8s ease-out 0.1s both;
        }

        .hero15-gradient-text {
          animation: gradientCycle 5s ease-in-out infinite;
        }

        .hero15-card-hover {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .hero15-card-hover:hover {
          transform: translateY(-4px) !important;
          filter: brightness(1.1);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero15-card-0, .hero15-card-1, .hero15-card-2,
          .hero15-card-3, .hero15-card-4 {
            animation: none !important;
            opacity: 1;
          }
          .hero15-card-0 { transform: translateY(0px); }
          .hero15-card-1 { transform: translateY(120px); }
          .hero15-card-2 { transform: translateY(240px); }
          .hero15-card-3 { transform: translateY(360px); }
          .hero15-card-4 { transform: translateY(480px); }

          .hero15-icon-0, .hero15-icon-1, .hero15-icon-2,
          .hero15-icon-3, .hero15-icon-4 {
            animation: none !important;
          }
          .hero15-content-fade {
            animation: none !important;
            opacity: 1;
          }
          .hero15-gradient-text {
            animation: none !important;
            color: #7c3aed;
          }
          .hero15-card-hover:hover {
            transform: none !important;
          }
        }
      `}</style>

      <section
        dir={isAr ? "rtl" : "ltr"}
        className="min-h-screen relative overflow-hidden"
        style={{
          backgroundColor: "#0a0a0f",
          fontFamily: isAr ? "var(--font-tajawal), sans-serif" : "var(--font-inter), sans-serif",
        }}
      >
        {/* Top Content */}
        <div className="hero15-content-fade relative z-10 pt-20 pb-8 text-center px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <Layers className="w-4 h-4 text-violet-400" />
            <span
              className="text-sm text-violet-300"
              style={{
                fontFamily: isAr ? "var(--font-tajawal), sans-serif" : "var(--font-inter), sans-serif",
              }}
            >
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            style={{
              fontFamily: isAr ? "var(--font-changa), sans-serif" : "var(--font-inter), sans-serif",
            }}
          >
            {t.headingLine1}
            <br />
            <span className="hero15-gradient-text">{t.headingLine2}</span>
          </h1>

          {/* Sub */}
          <p
            className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
            style={{
              fontFamily: isAr ? "var(--font-tajawal), sans-serif" : "var(--font-inter), sans-serif",
            }}
          >
            {t.sub}
          </p>
        </div>

        {/* Card Stack */}
        <div className="relative z-10 flex justify-center px-4 pb-8">
          <div className="relative w-full max-w-lg" style={{ height: "580px" }}>
            {t.cards.map((card, i) => {
              const Icon = cardIcons[i];
              const grad = cardGradients[i];
              return (
                <div
                  key={i}
                  className={`hero15-card-${i} hero15-card-hover absolute top-0 ${isAr ? "right-0" : "left-0"} w-full cursor-pointer`}
                  style={{
                    borderRadius: "16px",
                    background: `linear-gradient(135deg, ${grad.from}, ${grad.to})`,
                    opacity: 0,
                  }}
                >
                  <div
                    className={`flex items-center gap-4 px-5 py-6 sm:px-6 ${isAr ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {/* Icon */}
                    <div
                      className={`hero15-icon-${i} flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Text */}
                    <div className={`flex-1 min-w-0 ${isAr ? "text-right" : "text-left"}`}>
                      <h3
                        className="text-white font-semibold text-lg"
                        style={{
                          fontFamily: isAr
                            ? "var(--font-changa), sans-serif"
                            : "var(--font-inter), sans-serif",
                        }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="text-white/70 text-sm mt-0.5"
                        style={{
                          fontFamily: isAr
                            ? "var(--font-tajawal), sans-serif"
                            : "var(--font-inter), sans-serif",
                        }}
                      >
                        {card.desc}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0">
                      <ArrowRight
                        className={`w-5 h-5 text-white/60 ${isAr ? "rotate-180" : ""}`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="hero15-content-fade relative z-10 pb-20 text-center px-4" style={{ animationDelay: "1.3s" }}>
          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-6`}>
            <button
              className="cursor-pointer px-8 py-3.5 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                fontFamily: isAr
                  ? "var(--font-tajawal), sans-serif"
                  : "var(--font-inter), sans-serif",
              }}
            >
              {t.cta1}
            </button>
            <button
              className="cursor-pointer px-8 py-3.5 rounded-xl text-white font-semibold text-base border border-white/20 bg-white/5 transition-all duration-300 hover:bg-white/10"
              style={{
                fontFamily: isAr
                  ? "var(--font-tajawal), sans-serif"
                  : "var(--font-inter), sans-serif",
              }}
            >
              {t.cta2}
            </button>
          </div>

          {/* Footer text */}
          <p
            className="text-gray-500 text-sm"
            style={{
              fontFamily: isAr
                ? "var(--font-tajawal), sans-serif"
                : "var(--font-inter), sans-serif",
            }}
          >
            {t.footer}
          </p>
        </div>
      </section>
    </>
  );
}
