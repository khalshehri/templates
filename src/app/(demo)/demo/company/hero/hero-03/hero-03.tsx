"use client";

/**
 * Metric Tower Hero
 * Fintech / financial services aesthetic.
 * Background: #080b14. Accent: amber-400 / yellow-300.
 * Split layout with animated bar chart + scan-line.
 */

import { ArrowRight, TrendingUp } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "FINANCIAL TECHNOLOGY",
    heading: "Smart",
    headingAccent: "Financial Solutions",
    headingSuffix: "For Tomorrow",
    sub: "Real-time payments, intelligent risk analysis, and seamless compliance. Built for the speed of modern finance.",
    cta1: "Get Started",
    cta2: "See Pricing",
    trust: ["Regulated by CMA", "PCI DSS Certified", "Bank-Grade Security"],
  },
  ar: {
    badge: "التقنية المالية",
    heading: "حلول",
    headingAccent: "مالية ذكية",
    headingSuffix: "للمستقبل",
    sub: "مدفوعات فورية، تحليل مخاطر ذكي، وامتثال سلس. مبني لسرعة التمويل الحديث.",
    cta1: "ابدأ الآن",
    cta2: "الأسعار",
    trust: ["مرخص من هيئة السوق", "PCI DSS معتمد", "أمان بمستوى البنوك"],
  },
};

const bars = [
  { h: 45, delay: 0 }, { h: 72, delay: 0.15 }, { h: 58, delay: 0.3 },
  { h: 90, delay: 0.45 }, { h: 65, delay: 0.6 }, { h: 82, delay: 0.75 },
  { h: 48, delay: 0.9 }, { h: 95, delay: 1.05 },
];

export function Hero03({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#080b14" }}>
      {/* Amber glow */}
      <div className="absolute w-[400px] h-[300px] rounded-full opacity-[0.06] blur-[100px] pointer-events-none"
        style={{ background: "#fbbf24", top: "30%", right: "20%" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className={`grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center ${isAr ? "direction-rtl" : ""}`}>
          {/* Text side */}
          <div className={`${isAr ? "text-right lg:order-2" : ""}`} style={{ animation: "fadeUp 0.6s ease-out both" }}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 mb-8 ${isAr ? "flex-row-reverse" : ""}`}>
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-300 tracking-[0.15em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(40px, 7vw, 84px)" }}>
              {t.heading}<br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #fbbf24, #fde047)" }}>{t.headingAccent}</span><br />
              <span className="text-gray-500" style={{ fontSize: "0.65em" }}>{t.headingSuffix}</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">{t.sub}</p>

            <div className={`flex flex-col sm:flex-row gap-4 mb-10 ${isAr ? "sm:flex-row-reverse" : ""}`}>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(251,191,36,0.25)]">
                {t.cta1}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </button>
              <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>

            {/* Trust strip */}
            <div className={`flex flex-wrap gap-4 ${isAr ? "justify-end" : ""}`}
              style={{ animation: "fadeUp 0.6s ease-out 0.4s both" }}>
              {t.trust.map((item, i) => (
                <span key={i} className="text-xs text-amber-400/40 font-mono">{item}</span>
              ))}
            </div>
          </div>

          {/* Chart side */}
          <div className={`relative ${isAr ? "lg:order-1" : ""}`} style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>
            <div className="relative h-[350px] flex items-end justify-center gap-3 p-6 rounded-2xl border border-amber-500/10 bg-amber-500/[0.02]">
              {/* Scan line */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute w-full h-[2px] opacity-30"
                  style={{ background: "linear-gradient(90deg, transparent, #fbbf24, transparent)", animation: "scanLine 3s ease-in-out infinite" }} />
              </div>

              {/* Bars */}
              {bars.map((b, i) => (
                <div key={i} className="relative flex-1 max-w-[40px] rounded-t-md overflow-hidden"
                  style={{
                    height: `${b.h}%`,
                    animation: `barGrow 0.8s cubic-bezier(0.16,1,0.3,1) ${b.delay}s both`,
                  }}>
                  <div className="absolute inset-0 rounded-t-md"
                    style={{ background: `linear-gradient(to top, rgba(251,191,36,${0.15 + (i % 3) * 0.1}), rgba(253,224,71,${0.3 + (i % 3) * 0.1}))` }} />
                </div>
              ))}

              {/* Baseline */}
              <div className="absolute bottom-6 left-6 right-6 h-px bg-amber-500/10" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes barGrow { from{height:0%} }
        @keyframes scanLine { 0%{top:-2px} 100%{top:100%} }
      `}</style>
    </section>
  );
}
