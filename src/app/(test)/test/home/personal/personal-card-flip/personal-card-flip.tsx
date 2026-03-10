"use client";

/**
 * Personal Card Flip Hero
 * Business card that appears to float with 3D tilt, front shows name/role,
 * "flip to learn more" CTA. Blue/cyan palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Lina Al-Harbi",
    title: "UX Designer",
    company: "Freelance",
    email: "lina@design.sa",
    phone: "+966 55 123 4567",
    website: "lina.design",
    tagline: "Designing interfaces that feel like a conversation, not a puzzle.",
    cta: "Get in Touch",
    ctaSecondary: "View Portfolio",
    flipHint: "Hover the card",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
  },
  ar: {
    name: "لينا الحربي",
    title: "مصممة تجربة المستخدم",
    company: "عمل حر",
    email: "lina@design.sa",
    phone: "+966 55 123 4567",
    website: "lina.design",
    tagline: "أصمم واجهات تشبه المحادثة، لا الألغاز.",
    cta: "تواصل معي",
    ctaSecondary: "شاهد الأعمال",
    flipHint: "مرر فوق البطاقة",
    skills: ["فيجما", "النماذج الأولية", "بحث المستخدم", "أنظمة التصميم"],
  },
};

export function PersonalCardFlip({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes cardFloat {
          0%, 100% { transform: perspective(1000px) rotateY(0deg) rotateX(2deg) translateY(0); }
          25% { transform: perspective(1000px) rotateY(3deg) rotateX(0deg) translateY(-8px); }
          50% { transform: perspective(1000px) rotateY(0deg) rotateX(-2deg) translateY(-4px); }
          75% { transform: perspective(1000px) rotateY(-3deg) rotateX(1deg) translateY(-10px); }
        }
        @keyframes cardEntrance {
          from { opacity: 0; transform: perspective(1000px) rotateY(-15deg) rotateX(10deg) translateY(80px) scale(0.8); }
          to { opacity: 1; transform: perspective(1000px) rotateY(0deg) rotateX(2deg) translateY(0) scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        .card-3d {
          animation: cardEntrance 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
          transform-style: preserve-3d;
        }
        .card-3d:hover {
          animation: none;
          transform: perspective(1000px) rotateY(180deg);
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .card-front, .card-back {
          backface-visibility: hidden;
        }
        .card-back {
          transform: rotateY(180deg);
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(165deg, #f0f9ff 0%, #e0f2fe 40%, #ecfeff 100%)" }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #0891b2 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
            {/* Card */}
            <div className={`flex justify-center ${isAr ? "lg:order-2" : ""}`} style={{ perspective: "1200px" }}>
              <div className="relative">
                {/* Card shadow */}
                <div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-8 rounded-full"
                  style={{ background: "radial-gradient(ellipse, rgba(6, 182, 212, 0.15), transparent 70%)", filter: "blur(10px)" }}
                />

                <div
                  className="card-3d relative w-[340px] sm:w-[380px] h-[220px] sm:h-[240px] cursor-pointer"
                >
                  {/* Front of card */}
                  <div
                    className="card-front absolute inset-0 rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
                    style={{
                      background: "linear-gradient(135deg, #0e7490, #0891b2, #06b6d4)",
                      boxShadow: "0 20px 60px rgba(6, 182, 212, 0.2), 0 8px 20px rgba(0,0,0,0.1)",
                    }}
                  >
                    {/* Shimmer */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                          animation: "shimmer 4s ease-in-out infinite",
                        }}
                      />
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-white/10" />
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/5" />

                    <div className={isAr ? "text-right" : ""}>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">{t.name}</h2>
                      <p className="text-cyan-100/70 text-sm mt-1">{t.title}</p>
                      <p className="text-cyan-200/50 text-xs mt-0.5">{t.company}</p>
                    </div>

                    <div className={`flex items-end justify-between ${isAr ? "flex-row-reverse" : ""}`}>
                      <div className={`space-y-1 ${isAr ? "text-right" : ""}`}>
                        <p className="text-cyan-100/60 text-[11px]">{t.email}</p>
                        <p className="text-cyan-100/60 text-[11px]">{t.website}</p>
                      </div>
                      <p className="text-cyan-100/30 text-[10px]">{t.flipHint}</p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className="card-back absolute inset-0 rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
                    style={{
                      background: "linear-gradient(135deg, #ffffff, #f0f9ff)",
                      boxShadow: "0 20px 60px rgba(6, 182, 212, 0.15), 0 8px 20px rgba(0,0,0,0.08)",
                      border: "1px solid rgba(6, 182, 212, 0.1)",
                    }}
                  >
                    <div className={isAr ? "text-right" : ""}>
                      <p className="text-xs text-cyan-600 font-semibold uppercase tracking-wider">{t.title}</p>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">{t.tagline}</p>
                    </div>

                    <div>
                      <div className={`flex flex-wrap gap-2 mb-4 ${isAr ? "justify-end" : ""}`}>
                        {t.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                            style={{
                              background: "rgba(6, 182, 212, 0.08)",
                              color: "#0891b2",
                              border: "1px solid rgba(6, 182, 212, 0.1)",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className={`flex items-center gap-3 text-xs text-gray-400 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                        <span>{t.phone}</span>
                        <span>|</span>
                        <span>{t.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className={isAr ? "lg:order-1 text-right" : ""}>
              <h1
                className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.3s" }}
              >
                {t.name}
              </h1>

              <p
                className="fade-up mt-3 text-base sm:text-lg font-medium"
                style={{
                  animationDelay: "0.4s",
                  background: "linear-gradient(135deg, #0891b2, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t.title} · {t.company}
              </p>

              <div
                className={`fade-up mt-5 h-1 w-16 rounded-full ${isAr ? "ml-auto" : ""}`}
                style={{ animationDelay: "0.45s", background: "linear-gradient(90deg, #06b6d4, #22d3ee)" }}
              />

              <p className="fade-up mt-5 text-gray-500 leading-relaxed max-w-md" style={{ animationDelay: "0.5s" }}>
                {t.tagline}
              </p>

              <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.6s" }}>
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #0891b2, #06b6d4)" }}
                >
                  {t.cta}
                  <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-gray-500 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
