"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Structural Excellence",
    heading: ["Foundation of", "Innovation"],
    sub: "Built on pillars of integrity, expertise, and forward-thinking strategy. We elevate businesses through unwavering commitment to excellence.",
    cta: "Get Started",
    cta2: "Learn More",
    stats: [
      { value: "150+", label: "Global Partners" },
      { value: "99.7%", label: "Uptime SLA" },
      { value: "$2.4B", label: "Managed Assets" },
      { value: "40+", label: "Countries" },
    ],
  },
  ar: {
    badge: "التميز الهيكلي",
    heading: ["أساس", "الابتكار"],
    sub: "مبنية على ركائز النزاهة والخبرة والاستراتيجية المستقبلية. نرتقي بالأعمال من خلال التزام راسخ بالتميز.",
    cta: "ابدأ الآن",
    cta2: "اعرف المزيد",
    stats: [
      { value: "+150", label: "شريك عالمي" },
      { value: "99.7%", label: "ضمان التشغيل" },
      { value: "$2.4B", label: "أصول مُدارة" },
      { value: "+40", label: "دولة" },
    ],
  },
};

export function CorporatePillars({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes pillarRise {
          from { transform: scaleY(0); opacity: 0; }
          to { transform: scaleY(1); opacity: 1; }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerPillar {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 200%; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .pillar-rise { animation: pillarRise 1.2s cubic-bezier(0.22, 1, 0.36, 1) both; transform-origin: bottom center; }
        .fade-down { animation: fadeDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "#060e1a" }}>
        {/* Background subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(148,196,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,196,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Floating heading above pillars */}
        <div className="relative z-20 text-center pt-24 pb-8 px-4">
          <div className="fade-down inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/10 bg-blue-400/5 mb-6" style={{ animationDelay: "0.2s" }}>
            <span className="text-xs font-medium text-blue-300/60 tracking-widest uppercase">{t.badge}</span>
          </div>
          <h1 className="fade-down text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight" style={{ animationDelay: "0.4s" }}>
            <span className="block text-white/90">{t.heading[0]}</span>
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">{t.heading[1]}</span>
          </h1>
        </div>

        {/* Pillars section - three tall columns with content between */}
        <div className="relative z-10 flex-1 flex items-stretch px-4 sm:px-8 lg:px-16">
          <div className="w-full max-w-6xl mx-auto flex items-stretch gap-0">
            {/* Pillar 1 */}
            <div className="pillar-rise flex-shrink-0 w-16 sm:w-20 lg:w-24 relative" style={{ animationDelay: "0.3s" }}>
              <div className="absolute inset-0 rounded-t-sm" style={{
                background: "linear-gradient(180deg, rgba(37,99,235,0.3) 0%, rgba(15,35,64,0.8) 40%, rgba(10,20,40,0.95) 100%)",
                backgroundSize: "100% 200%",
                animation: "shimmerPillar 8s linear infinite",
                boxShadow: "0 0 30px rgba(37,99,235,0.1), inset 0 0 20px rgba(37,99,235,0.05)",
              }}>
                {/* Pillar edge highlights */}
                <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-blue-400/20 via-blue-400/5 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-blue-400/30" />
                {/* Horizontal grooves */}
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="absolute left-0 right-0 h-[1px] bg-blue-300/5" style={{ top: `${(i + 1) * 8}%` }} />
                ))}
              </div>
            </div>

            {/* Content between pillar 1 and 2 */}
            <div className={`flex-1 flex flex-col justify-center px-6 sm:px-10 py-16 ${isAr ? "text-right" : "text-left"}`}>
              <p className="fade-up text-base sm:text-lg text-blue-100/30 leading-relaxed max-w-md" style={{ animationDelay: "0.8s" }}>
                {t.sub}
              </p>
              <div className={`fade-up mt-8 flex gap-4 flex-wrap ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "1s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #1e3a5f, #2563eb)" }}>
                  {t.cta}
                  <ArrowRight size={15} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-6 py-3 text-sm font-semibold text-blue-200/30 border border-blue-300/10 rounded-lg hover:bg-blue-300/5 transition-all">
                  {t.cta2}
                </a>
              </div>
            </div>

            {/* Pillar 2 (center, tallest) */}
            <div className="pillar-rise flex-shrink-0 w-20 sm:w-28 lg:w-32 relative" style={{ animationDelay: "0.5s" }}>
              <div className="absolute inset-0 rounded-t-sm" style={{
                background: "linear-gradient(180deg, rgba(59,130,246,0.35) 0%, rgba(20,45,80,0.85) 30%, rgba(10,22,45,0.95) 100%)",
                backgroundSize: "100% 200%",
                animation: "shimmerPillar 10s linear infinite",
                boxShadow: "0 0 50px rgba(59,130,246,0.12), inset 0 0 25px rgba(59,130,246,0.06)",
              }}>
                <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-blue-400/25 via-blue-400/5 to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-blue-400/25 via-blue-400/5 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-blue-400/40" />
                {/* Capital detail at top */}
                <div className="absolute top-0 -left-2 -right-2 h-4 border-b border-blue-400/15" style={{
                  background: "linear-gradient(180deg, rgba(59,130,246,0.2), transparent)",
                }} />
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i} className="absolute left-0 right-0 h-[1px] bg-blue-300/5" style={{ top: `${(i + 1) * 6.25}%` }} />
                ))}
              </div>
            </div>

            {/* Content between pillar 2 and 3 - hidden on mobile */}
            <div className="hidden lg:flex flex-1 flex-col justify-center px-10 py-16">
              {/* Trust markers */}
              <div className="space-y-6">
                {["ISO 27001", "SOC 2 Type II", "GDPR"].map((cert, i) => (
                  <div key={cert} className="fade-up flex items-center gap-3" style={{ animationDelay: `${1.2 + i * 0.15}s` }}>
                    <div className="w-8 h-8 rounded border border-blue-400/15 bg-blue-400/5 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full border border-blue-400/30" style={{ animation: `pulseGlow 3s ease-in-out ${i * 0.5}s infinite` }} />
                    </div>
                    <span className="text-sm text-blue-200/25 font-medium tracking-wide">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-rise flex-shrink-0 w-16 sm:w-20 lg:w-24 relative" style={{ animationDelay: "0.7s" }}>
              <div className="absolute inset-0 rounded-t-sm" style={{
                background: "linear-gradient(180deg, rgba(30,80,160,0.25) 0%, rgba(12,30,55,0.8) 50%, rgba(8,18,35,0.95) 100%)",
                backgroundSize: "100% 200%",
                animation: "shimmerPillar 9s linear 2s infinite",
                boxShadow: "0 0 30px rgba(37,99,235,0.08), inset 0 0 15px rgba(37,99,235,0.04)",
              }}>
                <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-blue-400/15 via-blue-400/5 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-blue-400/25" />
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="absolute left-0 right-0 h-[1px] bg-blue-300/5" style={{ top: `${(i + 1) * 8}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats at base of pillars */}
        <div className="relative z-20 border-t border-blue-400/10 bg-[#050c16]/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {t.stats.map((stat, i) => (
                <div key={i} className={`fade-up ${isAr ? "text-right" : "text-left"}`} style={{ animationDelay: `${1.4 + i * 0.1}s` }}>
                  <div className="text-2xl sm:text-3xl font-black text-blue-200/80">{stat.value}</div>
                  <div className="text-xs text-blue-300/25 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
