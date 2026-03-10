"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Career Journey",
    heading: "A Decade of",
    headingAccent: "Impact & Growth",
    subheading: "From junior developer to engineering leader — every milestone shaped my approach to building great products.",
    cta: "View Full Resume",
    ctaSecondary: "Contact Me",
    milestones: [
      { year: "2024", title: "VP of Engineering", company: "ScaleUp Corp", desc: "Leading 60+ engineers across 8 product teams, driving platform reliability to 99.99%.", color: "from-violet-500 to-purple-600" },
      { year: "2021", title: "Engineering Director", company: "CloudNova", desc: "Scaled the team from 12 to 45 engineers. Launched microservices architecture.", color: "from-purple-500 to-fuchsia-600" },
      { year: "2019", title: "Senior Engineer", company: "DataStream Inc.", desc: "Architected real-time data pipeline processing 2M+ events per second.", color: "from-fuchsia-500 to-pink-600" },
      { year: "2016", title: "Software Engineer", company: "TechStart", desc: "Built core API platform from scratch, serving 500K daily active users.", color: "from-pink-500 to-rose-600" },
      { year: "2014", title: "Junior Developer", company: "WebCraft Agency", desc: "Started my journey building responsive websites and learning the craft.", color: "from-rose-500 to-orange-600" },
    ],
  },
  ar: {
    badge: "المسيرة المهنية",
    heading: "عقد من",
    headingAccent: "التأثير والنمو",
    subheading: "من مطور مبتدئ إلى قائد هندسي — كل إنجاز شكّل نهجي في بناء منتجات رائعة.",
    cta: "عرض السيرة الكاملة",
    ctaSecondary: "تواصل معي",
    milestones: [
      { year: "2024", title: "نائب رئيس الهندسة", company: "سكيل أب", desc: "قيادة أكثر من 60 مهندساً عبر 8 فرق منتجات، مع موثوقية 99.99%.", color: "from-violet-500 to-purple-600" },
      { year: "2021", title: "مدير الهندسة", company: "كلاود نوفا", desc: "توسيع الفريق من 12 إلى 45 مهندساً. إطلاق بنية الخدمات المصغرة.", color: "from-purple-500 to-fuchsia-600" },
      { year: "2019", title: "مهندس أول", company: "داتا ستريم", desc: "تصميم خط بيانات يعالج أكثر من 2 مليون حدث في الثانية.", color: "from-fuchsia-500 to-pink-600" },
      { year: "2016", title: "مهندس برمجيات", company: "تك ستارت", desc: "بناء منصة API الأساسية من الصفر لخدمة 500 ألف مستخدم يومياً.", color: "from-pink-500 to-rose-600" },
      { year: "2014", title: "مطور مبتدئ", company: "ويب كرافت", desc: "بداية الرحلة في بناء مواقع متجاوبة وتعلم الحرفة.", color: "from-rose-500 to-orange-600" },
    ],
  },
};

export function ResumeTimeline({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes lineGrow {
          from { height: 0; }
          to { height: 100%; }
        }
        @keyframes nodeAppear {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes cardSlideInRtl {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes nodePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.4); }
          50% { box-shadow: 0 0 0 8px rgba(139,92,246,0); }
        }
        @keyframes glowLine {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .card-slide { animation: cardSlideIn 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .card-slide-rtl { animation: cardSlideInRtl 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .node-appear { animation: nodeAppear 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* Background gradient */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(139,92,246,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.04) 0%, transparent 60%)",
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isAr ? "direction-rtl" : ""}`}>
            {/* Text side */}
            <div className={isAr ? "lg:order-2 text-right" : ""}>
              <div className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 mb-6 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.2s" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span className="text-sm text-violet-300/80">{t.badge}</span>
              </div>

              <h1 className="fade-up text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight" style={{ animationDelay: "0.35s" }}>
                <span className="block text-white">{t.heading}</span>
                <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{t.headingAccent}</span>
              </h1>

              <p className="fade-up mt-6 text-lg text-gray-400 leading-relaxed max-w-lg" style={{ animationDelay: "0.5s" }}>
                {t.subheading}
              </p>

              <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.65s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/25 ${isAr ? "flex-row-reverse" : ""}`}>
                  {t.cta}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-violet-300/60 border border-violet-500/15 rounded-xl hover:bg-violet-500/5 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Timeline side */}
            <div className={`relative ${isAr ? "lg:order-1" : ""}`}>
              {/* Vertical line */}
              <div className={`absolute top-0 bottom-0 w-[2px] ${isAr ? "right-6" : "left-6"}`} style={{
                background: "linear-gradient(180deg, transparent, rgba(139,92,246,0.3) 10%, rgba(139,92,246,0.3) 90%, transparent)",
                animation: "lineGrow 1.5s ease-out both",
                animationDelay: "0.5s",
                transformOrigin: "top",
              }} />

              <div className="space-y-6">
                {t.milestones.map((m, i) => (
                  <div key={i} className={`relative flex items-start gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
                    {/* Node */}
                    <div className="node-appear relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 border-2 border-violet-500/30 flex items-center justify-center" style={{
                      animationDelay: `${0.7 + i * 0.2}s`,
                      animation: `nodeAppear 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.7 + i * 0.2}s both${i === 0 ? ", nodePulse 3s ease-in-out infinite" : ""}`,
                    }}>
                      <span className="text-xs font-bold text-violet-300">{m.year}</span>
                    </div>

                    {/* Card */}
                    <div className={`flex-1 ${isAr ? "card-slide-rtl" : "card-slide"}`} style={{ animationDelay: `${0.8 + i * 0.2}s` }}>
                      <div className="relative bg-gray-900/80 border border-gray-800 rounded-xl p-5 backdrop-blur-sm hover:border-violet-500/30 transition-colors group">
                        <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r ${m.color} opacity-40 group-hover:opacity-70 transition-opacity`} />
                        <h3 className="text-white font-bold">{m.title}</h3>
                        <p className="text-violet-400/70 text-sm mt-0.5">{m.company}</p>
                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
