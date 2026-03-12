"use client";

/**
 * Silk Waves Hero
 * Flowing organic silk wave ribbons with soft rose/pink gradients.
 * Background: warm dark (#0a0608). Accent: rose (#f43f5e) + soft pink.
 * Signature: CSS animated sine-wave ribbons layered at different speeds.
 */

import { ArrowRight, Heart } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "Human-Centered Design",
    heading: "Elegance in",
    headingAccent: "Every Detail",
    sub: "We craft digital experiences with the care and precision of haute couture — where every pixel, every interaction, every moment is intentional.",
    cta1: "Begin Your Journey",
    cta2: "View Portfolio",
    testimonial: { quote: "They transformed our brand into something extraordinary.", author: "Sarah Chen", role: "CEO, Lumina Inc." },
    numbers: [
      { value: "98%", label: "Client Satisfaction" },
      { value: "250+", label: "Brands Elevated" },
      { value: "15", label: "Design Awards" },
    ],
  },
  ar: {
    badge: "تصميم يركز على الإنسان",
    heading: "أناقة في",
    headingAccent: "كل تفصيل",
    sub: "نصنع تجارب رقمية بعناية ودقة الأزياء الراقية — حيث كل بكسل وكل تفاعل وكل لحظة مقصودة.",
    cta1: "ابدأ رحلتك",
    cta2: "شاهد الأعمال",
    testimonial: { quote: "حوّلوا علامتنا التجارية إلى شيء استثنائي.", author: "سارة تشين", role: "CEO، لومينا" },
    numbers: [
      { value: "98%", label: "رضا العملاء" },
      { value: "+250", label: "علامة تجارية ارتقت" },
      { value: "15", label: "جائزة تصميم" },
    ],
  },
};

// Wave ribbon configs
const WAVES = [
  { y: 60, amplitude: 12, frequency: 1.2, speed: 8, opacity: 0.08, color: "#f43f5e" },
  { y: 55, amplitude: 15, frequency: 0.8, speed: 12, opacity: 0.06, color: "#fb7185" },
  { y: 65, amplitude: 10, frequency: 1.5, speed: 10, opacity: 0.05, color: "#fda4af" },
  { y: 70, amplitude: 18, frequency: 0.6, speed: 15, opacity: 0.04, color: "#fecdd3" },
];

export function Hero03({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0a0608" }}>
      {/* Rose glow */}
      <div className="absolute w-[600px] h-[400px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #f43f5e, transparent 70%)", top: "30%", right: "-10%" }} />

      {/* Silk wave ribbons */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {WAVES.map((w, i) => {
          const points = Array.from({ length: 101 }, (_, x) => {
            const y = w.y + Math.sin((x / 100) * Math.PI * 2 * w.frequency) * w.amplitude;
            return `${x},${y}`;
          }).join(" ");
          return (
            <g key={i}>
              <polyline points={points} fill="none" stroke={w.color} strokeWidth="0.4" opacity={w.opacity}>
                <animateTransform attributeName="transform" type="translate" from="-20,0" to="20,0" dur={`${w.speed}s`} repeatCount="indefinite" />
              </polyline>
              <polyline points={points} fill="none" stroke={w.color} strokeWidth="0.2" opacity={w.opacity * 0.5}>
                <animateTransform attributeName="transform" type="translate" from="20,0" to="-20,0" dur={`${w.speed * 1.3}s`} repeatCount="indefinite" />
              </polyline>
            </g>
          );
        })}
      </svg>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/10 mb-8">
            <Heart className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-medium text-rose-300">{t.badge}</span>
          </div>

          <h1 className="font-bold text-white leading-[0.9] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(44px, 8vw, 96px)", fontFamily: "Georgia, 'Times New Roman', serif" }}>
            {t.heading}<br />
            <span className="italic" style={{ color: "#f43f5e" }}>{t.headingAccent}</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">{t.sub}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_0_40px_rgba(244,63,94,0.3)]">
              {t.cta1}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </button>
            <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-200">{t.cta2}</button>
          </div>

          {/* Testimonial */}
          <div className="rounded-2xl border border-rose-500/10 bg-rose-500/[0.03] backdrop-blur p-6 mb-12 max-w-lg"
            style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
            <p className="text-gray-300 text-sm italic mb-3">&ldquo;{t.testimonial.quote}&rdquo;</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">{t.testimonial.author[0]}</div>
              <div>
                <span className="text-xs font-semibold text-white">{t.testimonial.author}</span>
                <span className="text-xs text-gray-500 block">{t.testimonial.role}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-10" style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
            {t.numbers.map((n, i) => (
              <div key={i}>
                <span className="text-3xl font-bold text-white">{n.value}</span>
                <span className="block text-xs text-gray-500 mt-1">{n.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
