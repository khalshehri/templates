/**
 * FreelancerBadge — 3D floating business card / ID badge
 *
 * Oversized business card with CSS 3D perspective tilt,
 * floating animation, and a holographic shimmer.
 *
 * @module freelancer-badge
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Open to Opportunities",
    title: "Your Next",
    titleAccent: "Favorite Freelancer",
    description:
      "I wear my skills on my sleeve. UI/UX designer, front-end developer, and brand strategist rolled into one. Let's make something remarkable.",
    cta: "Get in Touch",
    secondary: "Download CV",
    cardName: "Sarah Mitchell",
    cardRole: "UI/UX Designer & Developer",
    cardEmail: "sarah@example.com",
    cardPhone: "+1 (555) 123-4567",
    cardLocation: "Remote / Worldwide",
    cardSkill1: "UI/UX",
    cardSkill2: "React",
    cardSkill3: "Figma",
  },
  ar: {
    badge: "متاحة للفرص",
    title: "مستقلتك",
    titleAccent: "المفضلة القادمة",
    description:
      "أحمل مهاراتي بفخر. مصممة واجهات، مطورة فرونت إند، واستراتيجية علامات تجارية في شخص واحد. لنصنع شيئًا استثنائيًا.",
    cta: "تواصل معي",
    secondary: "تحميل السيرة",
    cardName: "سارة ميتشل",
    cardRole: "مصممة واجهات ومطورة",
    cardEmail: "sarah@example.com",
    cardPhone: "+1 (555) 123-4567",
    cardLocation: "عن بُعد / عالميًا",
    cardSkill1: "UI/UX",
    cardSkill2: "React",
    cardSkill3: "Figma",
  },
};

export function FreelancerBadge({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}
    >
      {/* Ambient glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }} />

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center gap-20 ${isAr ? "lg:flex-row-reverse" : ""}`}>
        {/* Text */}
        <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {t.badge}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
            {t.title}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            {t.titleAccent}
          </h1>

          <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
            {t.description}
          </p>

          <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
            <button className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", boxShadow: "0 0 30px rgba(99,102,241,0.3)" }}>
              {isAr ? (
                <>
                  <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  {t.cta}
                </>
              ) : (
                <>
                  {t.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            <button className="px-7 py-3.5 rounded-xl font-semibold text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/10 transition-colors">
              {t.secondary}
            </button>
          </div>
        </div>

        {/* 3D Business Card */}
        <div className="flex-1 flex items-center justify-center" style={{ perspective: 800 }}>
          <div
            className="relative"
            style={{
              width: 360,
              height: 220,
              animation: "card-float 6s ease-in-out infinite",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Card */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1e1b4b, #312e81, #1e1b4b)",
                border: "1px solid rgba(99,102,241,0.3)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.15)",
                transform: "rotateY(-8deg) rotateX(5deg)",
                animation: "card-tilt 6s ease-in-out infinite",
              }}
            >
              {/* Holographic shimmer */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 55%, transparent 70%)",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              />

              {/* Card content */}
              <div className={`relative z-10 p-6 h-full flex flex-col justify-between ${isAr ? "text-right" : "text-left"}`}>
                <div>
                  {/* Avatar circle */}
                  <div className={`flex items-center gap-3 mb-4 ${isAr ? "flex-row-reverse" : ""}`}>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                      style={{
                        background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                        color: "white",
                      }}
                    >
                      {t.cardName.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">{t.cardName}</div>
                      <div className="text-indigo-300 text-sm">{t.cardRole}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className={`flex items-center gap-2 text-sm text-gray-400 ${isAr ? "flex-row-reverse" : ""}`}>
                    <span style={{ color: "#818cf8" }}>@</span>
                    <span>{t.cardEmail}</span>
                  </div>
                  <div className={`flex items-center gap-2 text-sm text-gray-400 ${isAr ? "flex-row-reverse" : ""}`}>
                    <span style={{ color: "#818cf8" }}>#</span>
                    <span>{t.cardPhone}</span>
                  </div>
                  <div className={`flex items-center gap-2 text-sm text-gray-400 ${isAr ? "flex-row-reverse" : ""}`}>
                    <span style={{ color: "#818cf8" }}>~</span>
                    <span>{t.cardLocation}</span>
                  </div>
                </div>

                {/* Skill tags */}
                <div className={`flex gap-2 mt-3 ${isAr ? "flex-row-reverse" : ""}`}>
                  {[t.cardSkill1, t.cardSkill2, t.cardSkill3].map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Shadow card behind */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "rgba(99,102,241,0.05)",
                border: "1px solid rgba(99,102,241,0.1)",
                transform: "rotateY(-8deg) rotateX(5deg) translateZ(-20px) translateX(15px) translateY(10px)",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes card-tilt {
          0%, 100% { transform: rotateY(-8deg) rotateX(5deg); }
          25% { transform: rotateY(-3deg) rotateX(8deg); }
          50% { transform: rotateY(4deg) rotateX(3deg); }
          75% { transform: rotateY(-5deg) rotateX(6deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
