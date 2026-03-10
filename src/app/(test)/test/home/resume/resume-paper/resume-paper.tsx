"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Professional Resume",
    name: "Sarah Mitchell",
    title: "Senior Product Designer",
    summary: "Crafting intuitive digital experiences with 8+ years of expertise in user-centered design, design systems, and cross-functional leadership.",
    experience: "Experience",
    exp1Title: "Senior Product Designer",
    exp1Company: "TechFlow Inc. — 2021–Present",
    exp1Desc: "Led design system overhaul serving 2M+ users",
    exp2Title: "UX Designer",
    exp2Company: "DigitalCraft — 2018–2021",
    exp2Desc: "Redesigned onboarding, improving retention by 34%",
    skills: "Skills",
    skillList: ["Figma", "Design Systems", "User Research", "Prototyping", "Leadership"],
    cta: "Download Full CV",
    ctaSecondary: "Get in Touch",
  },
  ar: {
    badge: "السيرة الذاتية",
    name: "سارة ميتشل",
    title: "مصممة منتجات أولى",
    summary: "صياغة تجارب رقمية بديهية مع أكثر من 8 سنوات من الخبرة في التصميم المتمحور حول المستخدم وأنظمة التصميم والقيادة.",
    experience: "الخبرات",
    exp1Title: "مصممة منتجات أولى",
    exp1Company: "تك فلو — 2021–الحالي",
    exp1Desc: "قيادة إعادة تصميم النظام لأكثر من 2 مليون مستخدم",
    exp2Title: "مصممة تجربة المستخدم",
    exp2Company: "ديجيتال كرافت — 2018–2021",
    exp2Desc: "إعادة تصميم تجربة التسجيل مع تحسين بنسبة 34%",
    skills: "المهارات",
    skillList: ["فيجما", "أنظمة التصميم", "بحث المستخدم", "النماذج الأولية", "القيادة"],
    cta: "تحميل السيرة الكاملة",
    ctaSecondary: "تواصل معي",
  },
};

export function ResumePaper({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes paperFloat {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-16px) rotate(1deg); }
        }
        @keyframes paperReveal {
          from { opacity: 0; transform: translateY(60px) rotate(-4deg) scale(0.9); }
          to { opacity: 1; transform: translateY(0) rotate(-1deg) scale(1); }
        }
        @keyframes typeIn {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes shadowPulse {
          0%, 100% { box-shadow: 0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(139,92,246,0.05); }
          50% { box-shadow: 0 35px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.1); }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        .paper-float { animation: paperFloat 6s ease-in-out infinite; }
        .paper-reveal { animation: paperReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade-slide-up { animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .type-line {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid rgba(139,92,246,0.5);
          animation: typeIn 1.5s steps(30) both, cursorBlink 0.8s step-end infinite;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
        {/* Background grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(rgba(139,92,246,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

        {/* Violet ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full" style={{
          background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)",
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-8 items-center ${isAr ? "direction-rtl" : ""}`}>
            {/* Text side */}
            <div className={isAr ? "lg:order-2 text-right" : ""}>
              <div className={`fade-slide-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 mb-6 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.2s" }}>
                <div className="w-2 h-2 rounded-full bg-violet-400" style={{ animation: "dotPulse 2s ease-in-out infinite" }} />
                <span className="text-sm text-violet-300/80">{t.badge}</span>
              </div>

              <h1 className="fade-slide-up text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight" style={{ animationDelay: "0.35s" }}>
                <span className="block text-white">{t.name}</span>
                <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">{t.title}</span>
              </h1>

              <p className="fade-slide-up mt-6 text-lg text-gray-400 leading-relaxed max-w-lg" style={{ animationDelay: "0.5s" }}>
                {t.summary}
              </p>

              <div className={`fade-slide-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.65s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/25 ${isAr ? "flex-row-reverse" : ""}`}>
                  {t.cta}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-violet-300/60 border border-violet-500/15 rounded-xl hover:bg-violet-500/5 hover:border-violet-500/30 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Paper side */}
            <div className={`relative flex items-center justify-center ${isAr ? "lg:order-1" : ""}`}>
              <div className="paper-reveal paper-float" style={{ animationDelay: "0.4s", animation: "paperReveal 1.2s cubic-bezier(0.16,1,0.3,1) both, paperFloat 6s ease-in-out 1.5s infinite, shadowPulse 6s ease-in-out infinite" }}>
                {/* A4 Paper */}
                <div className="relative w-[300px] sm:w-[340px] bg-white rounded-sm p-8 sm:p-10" style={{
                  aspectRatio: "210/297",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(139,92,246,0.05)",
                }}>
                  {/* Paper texture lines */}
                  <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03 }}>
                    {Array.from({ length: 40 }, (_, i) => (
                      <div key={i} className="w-full border-b border-gray-400" style={{ height: "24px" }} />
                    ))}
                  </div>

                  {/* Header */}
                  <div className={`relative ${isAr ? "text-right" : ""}`}>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 mb-3 flex items-center justify-center text-white font-bold text-xl" style={{ marginLeft: isAr ? "auto" : undefined }}>
                      {isAr ? "س" : "S"}
                    </div>
                    <h2 className="text-gray-900 font-bold text-lg">{t.name}</h2>
                    <p className="text-violet-600 text-sm font-medium">{t.title}</p>
                    <div className="mt-2 h-[2px] w-full bg-gradient-to-r from-violet-500 to-transparent" />
                  </div>

                  {/* Experience section */}
                  <div className={`relative mt-5 ${isAr ? "text-right" : ""}`}>
                    <h3 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-2">{t.experience}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-gray-800 text-xs font-semibold">{t.exp1Title}</p>
                        <p className="text-gray-500 text-[10px]">{t.exp1Company}</p>
                        <p className="text-gray-600 text-[10px] mt-0.5">{t.exp1Desc}</p>
                      </div>
                      <div>
                        <p className="text-gray-800 text-xs font-semibold">{t.exp2Title}</p>
                        <p className="text-gray-500 text-[10px]">{t.exp2Company}</p>
                        <p className="text-gray-600 text-[10px] mt-0.5">{t.exp2Desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className={`relative mt-5 ${isAr ? "text-right" : ""}`}>
                    <h3 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-2">{t.skills}</h3>
                    <div className={`flex flex-wrap gap-1.5 ${isAr ? "justify-end" : ""}`}>
                      {t.skillList.map((skill, i) => (
                        <span key={i} className="px-2 py-0.5 bg-violet-50 text-violet-700 text-[10px] rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Corner fold */}
                  <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gray-950 rotate-45 translate-x-6 -translate-y-6" />
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gray-100 border-b border-l border-gray-200" style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} />
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-violet-500/10 rounded-xl" style={{ animation: "paperFloat 8s ease-in-out 1s infinite" }} />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 border border-purple-500/10 rounded-full" style={{ animation: "paperFloat 7s ease-in-out 2s infinite" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
