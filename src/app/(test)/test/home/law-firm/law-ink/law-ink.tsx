"use client";

/**
 * LawInk — Signature/Contract Hero
 *
 * Fountain pen signing with ink flowing across page.
 * Signature/contract moment. Amber/burgundy palette.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "SIGNED & SEALED",
    heading: ["Every Signature", "Tells a", "Story"],
    sub: "From contract drafting to final signature, we ensure every legal document protects your future with precision and authority.",
    cta: "Draft Your Contract",
    cta2: "Document Services",
    services: [
      { title: "Contract Drafting", desc: "Bulletproof agreements" },
      { title: "Legal Review", desc: "Line-by-line analysis" },
      { title: "Negotiation", desc: "Strategic terms" },
    ],
  },
  ar: {
    badge: "موقّع ومختوم",
    heading: ["كل توقيع", "يروي", "قصة"],
    sub: "من صياغة العقود إلى التوقيع النهائي، نضمن أن كل وثيقة قانونية تحمي مستقبلك بدقة وسلطة.",
    cta: "صِغ عقدك",
    cta2: "خدمات الوثائق",
    services: [
      { title: "صياغة العقود", desc: "اتفاقيات محكمة" },
      { title: "المراجعة القانونية", desc: "تحليل سطرًا بسطر" },
      { title: "التفاوض", desc: "شروط استراتيجية" },
    ],
  },
};

export function LawInk({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes penWrite {
          0% { transform: translate(0, 0) rotate(-45deg); }
          20% { transform: translate(40px, 2px) rotate(-45deg); }
          40% { transform: translate(80px, -1px) rotate(-44deg); }
          60% { transform: translate(120px, 3px) rotate(-46deg); }
          80% { transform: translate(160px, 0px) rotate(-45deg); }
          100% { transform: translate(180px, 1px) rotate(-45deg); }
        }
        @keyframes inkFlow {
          0% { width: 0; }
          100% { width: 180px; }
        }
        @keyframes inkDrip {
          0% { height: 0; opacity: 0; }
          30% { opacity: 0.6; }
          100% { height: 40px; opacity: 0; }
        }
        @keyframes inkSplatter {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes pageFloat {
          0%, 100% { transform: rotate(-2deg) translateY(0); }
          50% { transform: rotate(-2deg) translateY(-8px); }
        }
        @keyframes lineAppear {
          from { width: 0; }
          to { width: 100%; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0f0a14 0%, #14101e 50%, #0f0a14 100%)" }}>

        {/* Background texture */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 60% 55%, rgba(180,140,60,0.03) 0%, transparent 50%)",
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

              {/* Services */}
              <div className={`fade-up mt-8 space-y-3 ${isAr ? "" : ""}`}
                style={{ animationDelay: "0.7s" }}>
                {t.services.map((s, i) => (
                  <div key={i} className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400/40" />
                    <span className="text-sm font-semibold text-amber-200/40">{s.title}</span>
                    <span className="text-xs text-amber-200/15">— {s.desc}</span>
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

            {/* Pen + paper illustration */}
            <div className="flex-1 flex justify-center">
              <div className="relative" style={{ width: 320, height: 360 }}>
                {/* Paper/page */}
                <div className="absolute" style={{
                  top: 40, left: 30, width: 240, height: 300,
                  background: "linear-gradient(135deg, rgba(245,240,230,0.06), rgba(240,235,220,0.03))",
                  border: "1px solid rgba(180,140,60,0.1)",
                  borderRadius: 4,
                  animation: "pageFloat 6s ease-in-out infinite",
                  transformOrigin: "center center",
                }}>
                  {/* Text lines on page */}
                  {[30, 50, 70, 90, 120, 140, 160].map((top, i) => (
                    <div key={i} className="absolute" style={{
                      top, left: 20, height: 2,
                      background: `rgba(180,140,60,${0.04 + (i % 3) * 0.02})`,
                      borderRadius: 1,
                      animation: `lineAppear 0.6s ease ${0.3 + i * 0.1}s both`,
                      maxWidth: i === 6 ? "50%" : i % 2 === 0 ? "85%" : "75%",
                      width: "100%",
                    }} />
                  ))}

                  {/* Signature area */}
                  <div className="absolute" style={{
                    bottom: 50, left: 20, width: 120, height: 1,
                    background: "rgba(180,140,60,0.08)",
                  }} />

                  {/* Ink signature line */}
                  <div className="absolute overflow-hidden" style={{
                    bottom: 52, left: 20, height: 3,
                    animation: "inkFlow 3s ease 1.5s both",
                  }}>
                    <svg width="180" height="20" viewBox="0 0 180 20">
                      <path d="M0 10 Q20 4 40 10 Q50 14 60 8 Q80 2 100 12 Q120 18 140 6 Q160 0 180 10"
                        stroke="rgba(120,53,15,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Fountain pen */}
                <div className="absolute" style={{
                  bottom: 90, left: 50,
                  animation: "penWrite 4s ease-in-out infinite",
                  transformOrigin: "top right",
                }}>
                  {/* Pen body */}
                  <div style={{
                    width: 6, height: 80,
                    background: "linear-gradient(180deg, rgba(60,30,15,0.6), rgba(40,20,10,0.8))",
                    borderRadius: "3px 3px 1px 1px",
                    transform: "rotate(-45deg)",
                    transformOrigin: "bottom center",
                  }} />
                  {/* Pen nib */}
                  <div className="absolute" style={{
                    bottom: -2, left: 0, width: 6, height: 12,
                    background: "linear-gradient(180deg, rgba(180,140,60,0.5), rgba(180,140,60,0.3))",
                    clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                    transform: "rotate(-45deg)",
                    transformOrigin: "top center",
                  }} />
                </div>

                {/* Ink drips */}
                {[0, 1, 2].map((i) => (
                  <div key={i} className="absolute rounded-full"
                    style={{
                      left: 80 + i * 50, bottom: 85,
                      width: 3, height: 0,
                      background: "rgba(120,53,15,0.3)",
                      animation: `inkDrip 3s ease ${2 + i * 0.8}s infinite`,
                    }} />
                ))}

                {/* Ink splatters */}
                {[0, 1].map((i) => (
                  <div key={`s${i}`} className="absolute rounded-full"
                    style={{
                      left: 100 + i * 80, bottom: 80,
                      width: 6, height: 6,
                      background: "rgba(120,53,15,0.15)",
                      animation: `inkSplatter 4s ease ${3 + i * 1.5}s infinite`,
                    }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
