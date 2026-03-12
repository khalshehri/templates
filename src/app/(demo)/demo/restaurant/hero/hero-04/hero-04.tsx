"use client";

/**
 * Coffee House Hero
 * Artisan coffee shop aesthetic.
 * Background: #0c0a06. Accent: warm brown #92400e.
 */

import { ArrowRight, Coffee } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "SPECIALTY COFFEE",
    heading: "Brewed",
    headingAccent: "With Soul",
    sub: "Single-origin beans. Precision roasting. Every cup is a journey from farm to cup, crafted by award-winning baristas.",
    cta1: "Order Now",
    cta2: "Our Beans",
    menu: [
      { name: "Pour Over", price: "$6" },
      { name: "Flat White", price: "$5" },
      { name: "Cold Brew", price: "$7" },
    ],
  },
  ar: {
    badge: "قهوة مختصة",
    heading: "مُحضّرة",
    headingAccent: "بروح",
    sub: "حبوب أحادية المصدر. تحميص دقيق. كل كوب رحلة من المزرعة إلى الفنجان بأيدي باريستا حائزين على جوائز.",
    cta1: "اطلب الآن",
    cta2: "حبوبنا",
    menu: [
      { name: "بور أوفر", price: "22 ر.س" },
      { name: "فلات وايت", price: "18 ر.س" },
      { name: "كولد برو", price: "25 ر.س" },
    ],
  },
};

export function Hero04({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0c0a06" }}>
      {/* Coffee steam SVG */}
      <svg className="absolute opacity-[0.05] pointer-events-none" style={{ top: "5%", right: "20%", width: 150, height: 400 }} viewBox="0 0 150 400">
        {[40, 75, 110].map((x, i) => (
          <path key={i} d={`M${x},400 C${x - 30},300 ${x + 30},200 ${x},50`}
            fill="none" stroke="#92400e" strokeWidth="2" opacity="0.5">
            <animate attributeName="d"
              values={`M${x},400 C${x - 30},300 ${x + 30},200 ${x},50;M${x},400 C${x + 30},300 ${x - 30},200 ${x},50;M${x},400 C${x - 30},300 ${x + 30},200 ${x},50`}
              dur={`${5 + i}s`} repeatCount="indefinite" />
          </path>
        ))}
      </svg>

      {/* Warm glow */}
      <div className="absolute w-[400px] h-[300px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: "#92400e", top: "40%", left: "30%" }} />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.6s ease-out both" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-800/30 bg-amber-800/10 mb-8">
              <Coffee className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-bold text-amber-500 tracking-[0.2em] uppercase">{t.badge}</span>
            </div>

            <h1 className="leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(48px, 9vw, 96px)", fontFamily: "Georgia, serif" }}>
              <span className="text-white font-light">{t.heading}</span><br />
              <span className="font-bold italic" style={{ color: "#b45309" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-500 text-lg mb-10 leading-relaxed">{t.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(146,64,14,0.3)]"
                style={{ background: "linear-gradient(135deg, #78350f, #92400e)" }}>
                {t.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </button>
              <button className="px-7 py-3.5 text-gray-500 hover:text-white font-medium rounded-lg border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>

          {/* Menu card */}
          <div className="p-6 rounded-2xl border border-amber-900/20 bg-amber-900/[0.05]"
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
            <h3 className="text-xs font-bold text-amber-600 tracking-[0.2em] uppercase mb-4">Popular</h3>
            <div className="space-y-4">
              {t.menu.map((m, i) => (
                <div key={i} className="flex items-center justify-between pb-3 border-b border-amber-900/10 last:border-0">
                  <span className="text-white font-medium">{m.name}</span>
                  <span className="text-amber-500 font-mono text-sm">{m.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
