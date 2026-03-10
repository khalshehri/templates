"use client";

/**
 * LawBrief — Document-Focused Hero
 *
 * Legal brief/case file with tabs and documents stacked.
 * Document-focused. Paper layering with amber/burgundy palette.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "CASE FILE READY",
    heading: ["Every Case", "Meticulously", "Prepared"],
    sub: "Our legal briefs are legendary for their thoroughness. Layer by layer, we build an unassailable case strategy that leaves nothing to chance.",
    cta: "File Your Case",
    cta2: "Review Process",
    tabs: ["Criminal", "Corporate", "Civil", "Family", "IP"],
    docStats: [
      { label: "Pages Reviewed", value: "2M+" },
      { label: "Active Cases", value: "340" },
      { label: "Filing Rate", value: "99.2%" },
    ],
  },
  ar: {
    badge: "ملف القضية جاهز",
    heading: ["كل قضية", "مُعدّة", "بدقة متناهية"],
    sub: "مذكراتنا القانونية مشهورة بدقتها. طبقة بطبقة، نبني استراتيجية قضية لا تُقهر لا تترك شيئًا للصدفة.",
    cta: "قدّم قضيتك",
    cta2: "عملية المراجعة",
    tabs: ["جنائي", "شركات", "مدني", "أسرة", "ملكية فكرية"],
    docStats: [
      { label: "صفحة مراجعة", value: "+٢ مليون" },
      { label: "قضية نشطة", value: "٣٤٠" },
      { label: "نسبة التقديم", value: "٩٩.٢٪" },
    ],
  },
};

export function LawBrief({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes stackSlide {
          from { transform: translateY(40px) rotate(var(--stack-rot)); opacity: 0; }
          to { transform: translateY(0) rotate(var(--stack-rot)); opacity: 1; }
        }
        @keyframes tabHighlight {
          0%, 100% { background: rgba(180,140,60,0.06); }
          50% { background: rgba(180,140,60,0.15); }
        }
        @keyframes paperRuffle {
          0%, 100% { transform: translateY(0) rotate(var(--stack-rot)); }
          50% { transform: translateY(-3px) rotate(var(--stack-rot)); }
        }
        @keyframes stampAppear {
          0%, 70% { transform: scale(0) rotate(-20deg); opacity: 0; }
          85% { transform: scale(1.2) rotate(5deg); opacity: 1; }
          100% { transform: scale(1) rotate(-3deg); opacity: 0.8; }
        }
        @keyframes clipGlint {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f0a14 0%, #16101e 40%, #0f0a14 100%)" }}>

        {/* Subtle paper texture overlay */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 55% 50%, rgba(180,140,60,0.03) 0%, transparent 50%)",
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className={`flex flex-col lg:flex-row items-center gap-16 ${isAr ? "lg:flex-row-reverse" : ""}`}>
            {/* Text content */}
            <div className={`flex-1 ${isAr ? "text-right" : ""}`}>
              <div className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/10 bg-amber-400/[0.04] mb-6 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.3s" }}>
                <span className="text-sm font-medium text-amber-300/60 tracking-widest">{t.badge}</span>
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.45s" }}>
                <span className="block text-white/90">{t.heading[0]}</span>
                <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">{t.heading[1]}</span>
                <span className="block text-white/70">{t.heading[2]}</span>
              </h1>

              <p className="fade-up mt-5 text-base text-amber-100/25 leading-relaxed max-w-md"
                style={{ animationDelay: "0.6s" }}>{t.sub}</p>

              {/* Doc stats */}
              <div className={`fade-up mt-8 flex gap-6 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.7s" }}>
                {t.docStats.map((s, i) => (
                  <div key={i}>
                    <div className="text-xl font-black text-amber-300/70">{s.value}</div>
                    <div className="text-xs text-amber-200/20 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.85s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #92400e, #d97706, #f59e0b)" }}>
                  {t.cta}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-6 py-3 text-sm font-semibold text-amber-200/30 border border-amber-300/10 rounded-lg hover:bg-amber-300/[0.04] transition-all">
                  {t.cta2}
                </a>
              </div>
            </div>

            {/* Stacked documents illustration */}
            <div className="flex-1 flex justify-center">
              <div className="relative" style={{ width: 300, height: 380 }}>
                {/* File folder tab strip */}
                <div className={`absolute top-0 flex gap-1 ${isAr ? "right-4" : "left-4"}`} style={{ zIndex: 10 }}>
                  {t.tabs.map((tab, i) => (
                    <div key={i} className="px-3 py-1.5 rounded-t-md text-[10px] font-bold"
                      style={{
                        background: i === 0 ? "rgba(180,140,60,0.12)" : "rgba(180,140,60,0.04)",
                        border: "1px solid rgba(180,140,60,0.1)",
                        borderBottom: "none",
                        color: i === 0 ? "rgba(180,140,60,0.6)" : "rgba(180,140,60,0.25)",
                        animation: i === 0 ? "tabHighlight 4s ease-in-out infinite" : "none",
                      }}>
                      {tab}
                    </div>
                  ))}
                </div>

                {/* Stacked papers */}
                {[
                  { rot: -2, offset: 12, delay: 0.3, bg: "rgba(245,240,230,0.04)" },
                  { rot: 1.5, offset: 8, delay: 0.5, bg: "rgba(245,240,230,0.05)" },
                  { rot: -0.5, offset: 4, delay: 0.7, bg: "rgba(245,240,230,0.06)" },
                  { rot: 0, offset: 0, delay: 0.9, bg: "rgba(245,240,230,0.07)" },
                ].map((paper, i) => (
                  <div key={i} className="absolute" style={{
                    top: 28 + paper.offset, left: 10 + paper.offset, right: 10 - paper.offset,
                    height: 320,
                    background: paper.bg,
                    border: "1px solid rgba(180,140,60,0.08)",
                    borderRadius: 4,
                    ["--stack-rot" as string]: `${paper.rot}deg`,
                    animation: `stackSlide 0.6s ease ${paper.delay}s both, paperRuffle ${6 + i}s ease-in-out ${2 + i * 0.5}s infinite`,
                  }}>
                    {/* Content lines on top paper */}
                    {i === 3 && (
                      <>
                        {/* Title */}
                        <div className="mx-6 mt-6 h-3 rounded" style={{ width: "40%", background: "rgba(180,140,60,0.08)" }} />
                        <div className="mx-6 mt-2 h-1 rounded" style={{ width: "60%", background: "rgba(180,140,60,0.04)" }} />
                        {/* Body lines */}
                        {[40, 52, 64, 76, 96, 108, 120, 140, 152, 164, 184, 196, 208].map((top, j) => (
                          <div key={j} className="absolute" style={{
                            top, left: 24, right: j % 4 === 3 ? 80 : j % 3 === 0 ? 40 : 24,
                            height: 2,
                            background: `rgba(180,140,60,${0.03 + (j % 3) * 0.01})`,
                            borderRadius: 1,
                          }} />
                        ))}
                        {/* Signature area */}
                        <div className="absolute bottom-16 left-6" style={{
                          width: 80, height: 1,
                          background: "rgba(180,140,60,0.06)",
                        }} />
                        {/* Stamp */}
                        <div className="absolute bottom-10 right-6 w-14 h-14 rounded-full border-2"
                          style={{
                            borderColor: "rgba(168,32,48,0.2)",
                            animation: "stampAppear 4s ease infinite",
                          }}>
                          <div className="absolute inset-2 rounded-full border" style={{ borderColor: "rgba(168,32,48,0.1)" }} />
                        </div>
                      </>
                    )}
                  </div>
                ))}

                {/* Paper clip */}
                <div className="absolute top-6 right-8" style={{ zIndex: 15 }}>
                  <svg width="20" height="50" viewBox="0 0 20 50">
                    <path d="M10 0 L10 8 Q10 14 4 14 L4 40 Q4 48 12 48 L12 12 Q12 6 10 0"
                      fill="none" stroke="rgba(180,180,190,0.25)" strokeWidth="1.5"
                      style={{ animation: "clipGlint 4s ease-in-out infinite" }} />
                  </svg>
                </div>

                {/* Sticky note */}
                <div className="absolute -bottom-2 -right-2 p-2 rounded" style={{
                  width: 70, height: 60,
                  background: "rgba(250,204,21,0.08)",
                  border: "1px solid rgba(250,204,21,0.12)",
                  transform: "rotate(5deg)",
                  zIndex: 15,
                }}>
                  <div className="w-8 h-1 rounded bg-amber-400/10 mb-1" />
                  <div className="w-10 h-1 rounded bg-amber-400/[0.06] mb-1" />
                  <div className="w-6 h-1 rounded bg-amber-400/[0.06]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
