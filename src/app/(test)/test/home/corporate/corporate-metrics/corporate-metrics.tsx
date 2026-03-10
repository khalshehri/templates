"use client";

import { ArrowRight, TrendingUp, Target, Handshake } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Proven Track Record",
    heading: "Numbers That Speak",
    headingHighlight: "Louder Than Words",
    subheading:
      "Our results-driven approach has helped hundreds of enterprises achieve their strategic goals.",
    ctaPrimary: "Get Started",
    ctaSecondary: "View Case Studies",
    stats: [
      { value: "$2.4B", label: "Revenue Generated" },
      { value: "340+", label: "Projects Delivered" },
      { value: "15", label: "Countries Served" },
      { value: "99.7%", label: "Uptime Guaranteed" },
    ],
    cards: [
      { icon: "trending", title: "Growth Strategy", desc: "Data-backed strategies that scale with your ambition." },
      { icon: "target", title: "Precision Execution", desc: "Every milestone delivered on time, every time." },
      { icon: "handshake", title: "Long-Term Partnership", desc: "We grow with you — not just for a project, but for the journey." },
    ],
  },
  ar: {
    badge: "سجل حافل بالإنجازات",
    heading: "أرقام تتحدث",
    headingHighlight: "بصوت أعلى من الكلمات",
    subheading:
      "ساعد نهجنا القائم على النتائج مئات المؤسسات في تحقيق أهدافها الاستراتيجية.",
    ctaPrimary: "ابدأ الآن",
    ctaSecondary: "عرض دراسات الحالة",
    stats: [
      { value: "$2.4B", label: "إيرادات محققة" },
      { value: "+340", label: "مشروع منجز" },
      { value: "15", label: "دولة مخدومة" },
      { value: "99.7%", label: "وقت تشغيل مضمون" },
    ],
    cards: [
      { icon: "trending", title: "استراتيجية النمو", desc: "استراتيجيات مبنية على البيانات تتوسع مع طموحك." },
      { icon: "target", title: "تنفيذ دقيق", desc: "كل مرحلة يتم تسليمها في الوقت المحدد، في كل مرة." },
      { icon: "handshake", title: "شراكة طويلة الأمد", desc: "ننمو معك — ليس فقط لمشروع، بل للرحلة كاملة." },
    ],
  },
};

const iconMap = { trending: TrendingUp, target: Target, handshake: Handshake };

export function CorporateMetrics({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes topoMove {
          from { background-position: 0 0; }
          to { background-position: 60px 60px; }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .count-pop { animation: countUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Topographic pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q45 15 30 30 Q15 45 30 55' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3Cpath d='M10 10 Q25 25 40 10' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3Cpath d='M5 40 Q20 30 35 40 Q50 50 55 35' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
            animation: "topoMove 20s linear infinite",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div
              className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/80 text-blue-600 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              {t.badge}
            </div>

            <h1
              className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}
            >
              {t.heading}
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            <p
              className="fade-up mt-6 text-lg text-gray-500 leading-relaxed max-w-xl mx-auto"
              style={{ animationDelay: "0.3s" }}
            >
              {t.subheading}
            </p>

            {/* CTAs */}
            <div
              className="fade-up mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 ${isAr ? "flex-row-reverse" : ""}`}
              >
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors">
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div
            className="fade-up mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            {t.stats.map((stat, i) => (
              <div
                key={i}
                className="count-pop text-center py-6 px-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Value proposition cards */}
          <div
            className="fade-up mt-10 grid sm:grid-cols-3 gap-4"
            style={{ animationDelay: "0.7s" }}
          >
            {t.cards.map((card, i) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap] || TrendingUp;
              return (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-blue-100 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Icon size={18} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{card.title}</h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
