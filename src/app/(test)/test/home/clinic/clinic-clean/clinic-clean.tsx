"use client";

/**
 * ClinicClean — Sterile Minimalist Hero
 *
 * Ultra-clean white space with subtle grid dots, sterile minimalist feel.
 * White-dominant layout. Clean and professional.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "PURE CLINICAL EXCELLENCE",
    heading: ["Clean.", "Precise.", "Trusted."],
    sub: "A sterile environment for your peace of mind. Our facilities maintain the highest standards of cleanliness and medical precision.",
    cta: "Tour Our Facility",
    cta2: "Safety Standards",
    features: [
      { label: "ISO Certified", desc: "Class 7 Clean Room" },
      { label: "Sterilization", desc: "99.999% Pathogen Free" },
      { label: "Air Quality", desc: "HEPA Filtered" },
      { label: "Compliance", desc: "JCI Accredited" },
    ],
  },
  ar: {
    badge: "تميّز سريري نقي",
    heading: ["نظافة.", "دقّة.", "ثقة."],
    sub: "بيئة معقّمة لراحة بالك. مرافقنا تحافظ على أعلى معايير النظافة والدقة الطبية.",
    cta: "جولة في مرافقنا",
    cta2: "معايير السلامة",
    features: [
      { label: "شهادة آيزو", desc: "غرفة نظيفة فئة ٧" },
      { label: "التعقيم", desc: "خالية من الجراثيم ٩٩.٩٩٩٪" },
      { label: "جودة الهواء", desc: "فلتر HEPA" },
      { label: "الامتثال", desc: "اعتماد JCI" },
    ],
  },
};

export function ClinicClean({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }
        @keyframes lineReveal {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes featureSlide {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes cleanSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #f0fdfa 0%, #f8fffe 30%, #ffffff 60%, #f0fdfa 100%)" }}>

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, rgba(13,148,136,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

        {/* Subtle horizontal lines */}
        {[20, 40, 60, 80].map((top, i) => (
          <div key={i} className="absolute w-full" style={{
            top: `${top}%`, height: "1px",
            background: "rgba(13,148,136,0.04)",
          }} />
        ))}

        {/* Clean sweep animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: "30%", height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
            animation: "cleanSweep 8s ease-in-out infinite",
          }} />
        </div>

        {/* Floating plus signs */}
        {[
          { x: 8, y: 15, size: 16, delay: 0 },
          { x: 88, y: 25, size: 12, delay: 1.5 },
          { x: 75, y: 70, size: 14, delay: 3 },
          { x: 15, y: 75, size: 10, delay: 2 },
          { x: 92, y: 85, size: 11, delay: 4 },
        ].map((p, i) => (
          <div key={i} className="absolute pointer-events-none" style={{
            left: `${p.x}%`, top: `${p.y}%`,
            animation: `floatUp ${5 + i}s ease-in-out ${p.delay}s infinite`,
          }}>
            <svg width={p.size} height={p.size} viewBox="0 0 16 16">
              <line x1="8" y1="2" x2="8" y2="14" stroke="rgba(13,148,136,0.12)" strokeWidth="1.5" />
              <line x1="2" y1="8" x2="14" y2="8" stroke="rgba(13,148,136,0.12)" strokeWidth="1.5" />
            </svg>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className={`flex flex-col lg:flex-row items-center gap-16 ${isAr ? "lg:flex-row-reverse" : ""}`}>
            {/* Text side */}
            <div className={`flex-1 ${isAr ? "text-right" : ""}`}>
              <div className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/15 bg-teal-50 mb-6 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.3s" }}>
                <span className="text-sm font-medium text-teal-600/60 tracking-widest">{t.badge}</span>
              </div>

              <h1 className="fade-up text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
                style={{ animationDelay: "0.45s" }}>
                <span className="block text-gray-900">{t.heading[0]}</span>
                <span className="block text-teal-600">{t.heading[1]}</span>
                <span className="block text-gray-400">{t.heading[2]}</span>
              </h1>

              <p className="fade-up mt-5 text-base text-gray-400 leading-relaxed max-w-md"
                style={{ animationDelay: "0.6s" }}>{t.sub}</p>

              <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.75s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6)" }}>
                  {t.cta}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-6 py-3 text-sm font-semibold text-teal-600/50 border border-teal-200 rounded-lg hover:bg-teal-50 transition-all">
                  {t.cta2}
                </a>
              </div>
            </div>

            {/* Feature cards - right side */}
            <div className="flex-1 w-full max-w-md">
              <div className="grid grid-cols-2 gap-4">
                {t.features.map((f, i) => (
                  <div key={i} className="p-5 rounded-xl border border-teal-100 bg-white/80 backdrop-blur-sm"
                    style={{
                      animation: `featureSlide 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + i * 0.12}s both`,
                      boxShadow: "0 1px 3px rgba(13,148,136,0.04)",
                    }}>
                    <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mb-3">
                      <svg width="14" height="14" viewBox="0 0 16 16">
                        <path d="M4 8L7 11L12 5" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="text-sm font-bold text-gray-800">{f.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{f.desc}</div>
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
