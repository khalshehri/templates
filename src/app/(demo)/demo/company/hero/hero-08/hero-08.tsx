"use client";

/**
 * Blueprint Layers Hero
 * Enterprise software / B2B platform aesthetic.
 * Background: #08090e. Accent: blue-400 / indigo-300.
 * Split layout with 3D stacked translucent cards containing wireframe UI patterns.
 */

import { ArrowRight, Layers, Check } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "ENTERPRISE PLATFORM",
    heading: "Software",
    headingAccent: "That Scales",
    headingSuffix: "With Your Business",
    sub: "Modular architecture, API-first design, and enterprise-grade reliability. Build, integrate, and deploy at the speed of your ambition.",
    cta1: "Request Demo",
    cta2: "Documentation",
    features: ["Modular Architecture", "API-First Design", "99.99% Uptime SLA"],
    layers: [
      { title: "Presentation", items: 4 },
      { title: "Business Logic", items: 3 },
      { title: "Data Layer", items: 5 },
      { title: "Infrastructure", items: 3 },
    ],
  },
  ar: {
    badge: "منصة المؤسسات",
    heading: "برمجيات",
    headingAccent: "تتوسع",
    headingSuffix: "مع أعمالك",
    sub: "بنية معيارية، تصميم API أولاً، وموثوقية بمستوى المؤسسات. ابنِ وادمج وانشر بسرعة طموحك.",
    cta1: "اطلب عرضاً",
    cta2: "التوثيق",
    features: ["بنية معيارية", "تصميم API أولاً", "99.99% وقت تشغيل"],
    layers: [
      { title: "العرض", items: 4 },
      { title: "منطق الأعمال", items: 3 },
      { title: "طبقة البيانات", items: 5 },
      { title: "البنية التحتية", items: 3 },
    ],
  },
};

export function Hero08({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#08090e" }}>
      {/* Subtle glow */}
      <div className="absolute w-[500px] h-[300px] rounded-full opacity-[0.05] blur-[100px] pointer-events-none"
        style={{ background: "#60a5fa", top: "30%", right: "15%" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isAr ? "" : ""}`}>
          {/* Text side */}
          <div className={`${isAr ? "text-right lg:order-2" : ""}`} style={{ animation: "fadeUp 0.6s ease-out both" }}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8 ${isAr ? "flex-row-reverse" : ""}`}>
              <Layers className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono font-bold text-blue-300 tracking-[0.15em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(40px, 7vw, 84px)" }}>
              {t.heading}<br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #60a5fa, #a5b4fc)" }}>{t.headingAccent}</span><br />
              <span className="text-gray-500" style={{ fontSize: "0.6em" }}>{t.headingSuffix}</span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">{t.sub}</p>

            {/* Feature checklist */}
            <div className={`space-y-3 mb-10 ${isAr ? "" : ""}`} style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>
              {t.features.map((f, i) => (
                <div key={i} className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="w-5 h-5 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-sm text-gray-300">{f}</span>
                </div>
              ))}
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 ${isAr ? "sm:flex-row-reverse" : ""}`}
              style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(96,165,250,0.25)]">
                {t.cta1}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </button>
              <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>

          {/* 3D Layered cards */}
          <div className={`relative h-[400px] ${isAr ? "lg:order-1" : ""}`} style={{ perspective: "800px", animation: "fadeUp 0.6s ease-out 0.2s both" }}>
            {t.layers.map((layer, i) => (
              <div key={i}
                className="absolute rounded-xl border border-blue-500/[0.08] bg-blue-500/[0.02] backdrop-blur-sm overflow-hidden"
                style={{
                  width: "85%",
                  height: "100px",
                  left: `${7 + i * 3}%`,
                  top: `${i * 22}%`,
                  transform: `rotateX(8deg) rotateY(${isAr ? "5" : "-5"}deg) translateZ(${(3 - i) * 15}px)`,
                  animation: `layerFloat${i} 4s ease-in-out ${i * 0.3}s infinite, layerReveal 0.6s ease-out ${0.3 + i * 0.12}s both`,
                  zIndex: 4 - i,
                }}>
                {/* Wireframe pattern */}
                <div className="p-4">
                  <div className="text-xs font-mono text-blue-400/40 mb-2">{layer.title}</div>
                  <div className="flex gap-2 flex-wrap">
                    {Array.from({ length: layer.items }).map((_, j) => (
                      <div key={j} className="h-2 rounded-full bg-blue-500/[0.08]"
                        style={{ width: `${20 + ((j * 17 + i * 13) % 40)}px` }} />
                    ))}
                  </div>
                  {/* Dots pattern */}
                  <div className="flex gap-3 mt-3">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <div key={j} className="w-1.5 h-1.5 rounded-full bg-blue-500/10" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes layerReveal { from{opacity:0;transform:rotateX(8deg) rotateY(-5deg) translateZ(0px) translateX(40px)} to{opacity:1} }
        @keyframes layerFloat0 { 0%,100%{transform:rotateX(8deg) rotateY(-5deg) translateZ(45px) translateY(0)} 50%{transform:rotateX(8deg) rotateY(-5deg) translateZ(45px) translateY(-5px)} }
        @keyframes layerFloat1 { 0%,100%{transform:rotateX(8deg) rotateY(-5deg) translateZ(30px) translateY(0)} 50%{transform:rotateX(8deg) rotateY(-5deg) translateZ(30px) translateY(-4px)} }
        @keyframes layerFloat2 { 0%,100%{transform:rotateX(8deg) rotateY(-5deg) translateZ(15px) translateY(0)} 50%{transform:rotateX(8deg) rotateY(-5deg) translateZ(15px) translateY(-3px)} }
        @keyframes layerFloat3 { 0%,100%{transform:rotateX(8deg) rotateY(-5deg) translateZ(0px) translateY(0)} 50%{transform:rotateX(8deg) rotateY(-5deg) translateZ(0px) translateY(-2px)} }
      `}</style>
    </section>
  );
}
