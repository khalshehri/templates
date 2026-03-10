"use client";

/**
 * Pricing Tier Hero
 * Three pricing tier cards as the hero element. Conversion-focused layout
 * with the middle tier highlighted/elevated. Feature checkmarks, price
 * display, and prominent CTAs. Clean comparison layout.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Simple Pricing",
    heading: "Choose Your",
    headingHighlight: "Perfect Plan",
    subheading:
      "No hidden fees. No surprise charges. Start free and scale as you grow.",
    toggle: { monthly: "Monthly", annual: "Annual", save: "Save 20%" },
    tiers: [
      {
        name: "Starter",
        price: "$0",
        period: "/month",
        description: "For individuals and side projects",
        features: ["5 Projects", "10K API calls/mo", "Community support", "Basic analytics"],
        cta: "Get Started Free",
        popular: false,
      },
      {
        name: "Pro",
        price: "$49",
        period: "/month",
        description: "For growing teams and businesses",
        features: ["Unlimited projects", "1M API calls/mo", "Priority support", "Advanced analytics", "Custom domains", "Team collaboration"],
        cta: "Start Pro Trial",
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$199",
        period: "/month",
        description: "For large-scale operations",
        features: ["Everything in Pro", "Unlimited API calls", "24/7 dedicated support", "Custom SLA", "SOC 2 compliance", "SSO & SAML"],
        cta: "Contact Sales",
        popular: false,
      },
    ],
    trustedBy: "Trusted by 10,000+ companies worldwide",
  },
  ar: {
    badge: "أسعار بسيطة",
    heading: "اختر خطتك",
    headingHighlight: "المثالية",
    subheading:
      "بدون رسوم خفية. بدون مفاجآت. ابدأ مجاناً وتوسّع مع نموك.",
    toggle: { monthly: "شهري", annual: "سنوي", save: "وفّر 20%" },
    tiers: [
      {
        name: "مبتدئ",
        price: "$0",
        period: "/شهر",
        description: "للأفراد والمشاريع الجانبية",
        features: ["5 مشاريع", "10K استدعاء/شهر", "دعم المجتمع", "تحليلات أساسية"],
        cta: "ابدأ مجاناً",
        popular: false,
      },
      {
        name: "احترافي",
        price: "$49",
        period: "/شهر",
        description: "للفرق والأعمال النامية",
        features: ["مشاريع غير محدودة", "1M استدعاء/شهر", "دعم ذو أولوية", "تحليلات متقدمة", "نطاقات مخصصة", "تعاون الفريق"],
        cta: "ابدأ تجربة Pro",
        popular: true,
      },
      {
        name: "مؤسسي",
        price: "$199",
        period: "/شهر",
        description: "للعمليات واسعة النطاق",
        features: ["كل شيء في Pro", "استدعاءات غير محدودة", "دعم مخصص 24/7", "SLA مخصص", "امتثال SOC 2", "SSO و SAML"],
        cta: "تواصل مع المبيعات",
        popular: false,
      },
    ],
    trustedBy: "موثوق من قبل +10,000 شركة حول العالم",
  },
};

export function SaasPricing({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardSlide {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes popularGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(139,92,246,0.15), 0 20px 60px rgba(139,92,246,0.1); }
          50% { box-shadow: 0 0 50px rgba(139,92,246,0.25), 0 20px 80px rgba(139,92,246,0.15); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .card-slide { animation: cardSlide 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#08061a]">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)" }} />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              {t.badge}
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}>
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            <p className="fade-up mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.3s" }}>
              {t.subheading}
            </p>

            {/* Billing toggle */}
            <div className="fade-up mt-8 inline-flex items-center gap-1 p-1 rounded-full bg-white/[0.04] border border-white/[0.06]"
              style={{ animationDelay: "0.4s" }}>
              <span className="px-4 py-2 rounded-full bg-violet-600/40 text-white text-sm font-medium">{t.toggle.monthly}</span>
              <span className="px-4 py-2 rounded-full text-white/30 text-sm font-medium hover:text-white/50 cursor-pointer transition-colors">
                {t.toggle.annual}
                <span className="ml-1.5 text-[10px] text-emerald-400">{t.toggle.save}</span>
              </span>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto items-start">
            {t.tiers.map((tier, i) => (
              <div key={i}
                className={`card-slide relative rounded-2xl border p-6 sm:p-7 ${
                  tier.popular
                    ? "bg-gradient-to-b from-violet-500/[0.08] to-purple-900/[0.04] border-violet-500/30 md:-mt-4 md:mb-0"
                    : "bg-white/[0.02] border-white/[0.06]"
                }`}
                style={{
                  animationDelay: `${0.5 + i * 0.15}s`,
                  ...(tier.popular ? { animation: `cardSlide 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${0.5 + i * 0.15}s both, popularGlow 4s ease-in-out infinite` } : {}),
                }}>
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      background: "linear-gradient(90deg, #7c3aed, #a855f7, #7c3aed)",
                      backgroundSize: "200% auto",
                      animation: "shimmer 3s linear infinite",
                      color: "white",
                    }}>
                    Most Popular
                  </div>
                )}

                <div className="text-sm font-semibold text-white/60 mb-1">{tier.name}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-sm text-white/25">{tier.period}</span>
                </div>
                <p className="text-xs text-white/25 mb-6">{tier.description}</p>

                {/* CTA */}
                <a href="#"
                  className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg transition-all hover:-translate-y-0.5 mb-6 ${
                    tier.popular
                      ? "text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:shadow-lg hover:shadow-violet-500/25"
                      : "text-white/60 border border-white/10 hover:bg-white/5"
                  } ${isAr ? "flex-row-reverse" : ""}`}>
                  {tier.cta}
                  <ArrowRight size={14} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>

                {/* Features */}
                <div className="space-y-2.5">
                  {tier.features.map((feat, fi) => (
                    <div key={fi} className={`flex items-center gap-2.5 text-sm text-white/35 ${isAr ? "flex-row-reverse" : ""}`}>
                      <svg className="w-4 h-4 flex-shrink-0 text-violet-400/60" viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Trust line */}
          <p className="fade-up text-center text-xs text-white/15 mt-10" style={{ animationDelay: "1s" }}>
            {t.trustedBy}
          </p>
        </div>
      </section>
    </>
  );
}
