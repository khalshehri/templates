"use client";

/**
 * Personal Timeline Hero
 * Vertical timeline of life/career milestones, heading at top, scrolls down through events.
 * Blue/cyan palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "My Journey",
    subheading: "From curious kid to passionate developer — every milestone shaped who I am today.",
    cta: "Work With Me",
    milestones: [
      { year: "2015", title: "First Line of Code", desc: "Wrote my first Hello World in Python. Got instantly hooked.", icon: "code" },
      { year: "2017", title: "CS Degree Started", desc: "King Saud University, Computer Science. Late nights and too much coffee.", icon: "grad" },
      { year: "2019", title: "First Internship", desc: "Built internal tools at a fintech startup. Discovered I love React.", icon: "work" },
      { year: "2021", title: "Graduated & First Job", desc: "Full-stack developer at a SaaS company. Shipped my first production app.", icon: "rocket" },
      { year: "2023", title: "Went Freelance", desc: "Took the leap. 20+ clients served across MENA. Never looked back.", icon: "star" },
      { year: "2026", title: "Today", desc: "Building products, mentoring juniors, and still writing code every day.", icon: "now" },
    ],
  },
  ar: {
    heading: "رحلتي",
    subheading: "من طفل فضولي إلى مطور شغوف — كل محطة شكّلت من أنا اليوم.",
    cta: "اعمل معي",
    milestones: [
      { year: "٢٠١٥", title: "أول سطر كود", desc: "كتبت أول Hello World بلغة بايثون. وقعت في الحب فوراً.", icon: "code" },
      { year: "٢٠١٧", title: "بداية الجامعة", desc: "جامعة الملك سعود، علوم حاسب. ليالٍ طويلة وقهوة كثيرة.", icon: "grad" },
      { year: "٢٠١٩", title: "أول تدريب", desc: "بنيت أدوات داخلية في شركة تقنية مالية. اكتشفت حبي لـ React.", icon: "work" },
      { year: "٢٠٢١", title: "التخرج والوظيفة الأولى", desc: "مطور شامل في شركة SaaS. أطلقت أول تطبيق إنتاجي.", icon: "rocket" },
      { year: "٢٠٢٣", title: "العمل الحر", desc: "قررت الاستقلال. خدمت أكثر من ٢٠ عميلاً في المنطقة. لم أندم أبداً.", icon: "star" },
      { year: "٢٠٢٦", title: "اليوم", desc: "أبني منتجات، أرشد المبتدئين، وما زلت أكتب الكود كل يوم.", icon: "now" },
    ],
  },
};

export function PersonalTimeline({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  const iconMap: Record<string, React.ReactNode> = {
    code: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    grad: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5" /></svg>,
    work: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>,
    rocket: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /></svg>,
    star: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
    now: <div className="w-3 h-3 rounded-full bg-current" />,
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { height: 0; }
          to { height: 100%; }
        }
        @keyframes nodePop {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        @keyframes cardSlide {
          from { opacity: 0; transform: translateX(${isAr ? "-30px" : "30px"}); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes nowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(6, 182, 212, 0); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .node-pop { animation: nodePop 0.4s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .card-slide { animation: cardSlide 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden"
        style={{ background: "linear-gradient(180deg, #f0f9ff 0%, #ecfeff 50%, #f0fdfa 100%)" }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, #0891b2 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight" style={{ animationDelay: "0.1s" }}>
              {t.heading}
            </h1>
            <p className="fade-up mt-4 text-gray-500 max-w-lg mx-auto" style={{ animationDelay: "0.2s" }}>
              {t.subheading}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className={`absolute ${isAr ? "right-6 sm:right-8" : "left-6 sm:left-8"} top-0 bottom-0 w-0.5`}
              style={{
                background: "linear-gradient(180deg, #06b6d4, #22d3ee, #67e8f9)",
                animation: "lineGrow 2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both",
                transformOrigin: "top",
              }}
            />

            {/* Milestone items */}
            <div className="space-y-10">
              {t.milestones.map((ms, i) => (
                <div key={i} className={`relative ${isAr ? "pr-16 sm:pr-20" : "pl-16 sm:pl-20"}`}>
                  {/* Node on timeline */}
                  <div
                    className={`node-pop absolute ${isAr ? "right-3.5 sm:right-5.5" : "left-3.5 sm:left-5.5"} top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center z-10`}
                    style={{
                      animationDelay: `${0.5 + i * 0.15}s`,
                      background: i === t.milestones.length - 1 ? "#06b6d4" : "white",
                      border: `2px solid ${i === t.milestones.length - 1 ? "#06b6d4" : "#67e8f9"}`,
                      boxShadow: i === t.milestones.length - 1 ? "0 0 0 0 rgba(6, 182, 212, 0.4)" : "0 2px 8px rgba(0,0,0,0.06)",
                      animation: i === t.milestones.length - 1
                        ? `nodePop 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${0.5 + i * 0.15}s both, nowPulse 2s ease-in-out infinite ${1 + i * 0.15}s`
                        : undefined,
                    }}
                  />

                  {/* Content card */}
                  <div
                    className={`card-slide rounded-2xl p-5 ${isAr ? "text-right" : ""}`}
                    style={{
                      animationDelay: `${0.6 + i * 0.15}s`,
                      background: "rgba(255,255,255,0.7)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                      border: "1px solid rgba(6, 182, 212, 0.08)",
                    }}
                  >
                    <div className={`flex items-center gap-3 mb-2 ${isAr ? "flex-row-reverse" : ""}`}>
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{
                          background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(34, 211, 238, 0.05))",
                          color: "#0891b2",
                        }}
                      >
                        {ms.year}
                      </span>
                      <span className="text-cyan-500">{iconMap[ms.icon]}</span>
                    </div>
                    <h3 className="font-bold text-gray-900">{ms.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{ms.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA at bottom */}
          <div className="fade-up text-center mt-16" style={{ animationDelay: "1.5s" }}>
            <a
              href="#"
              className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ background: "linear-gradient(135deg, #0891b2, #06b6d4)" }}
            >
              {t.cta}
              <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
