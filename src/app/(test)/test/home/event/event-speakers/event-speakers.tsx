"use client";

import { ArrowRight, MapPin, Calendar } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Design Conference",
    headingLine2: "Riyadh 2026",
    subheading: "The region's premier design event. Learn from the best, connect with peers.",
    ctaPrimary: "Register Now",
    ctaSecondary: "Learn More",
    date: "November 20–22, 2026",
    venue: "King Abdullah Financial District",
    speakers: [
      { name: "Ahmed Al-Rashid", role: "CEO, TechVision", initials: "AR" },
      { name: "Sarah Johnson", role: "VP Design, Google", initials: "SJ" },
      { name: "Khalid Mansour", role: "Founder, Pixel Lab", initials: "KM" },
      { name: "Lina Haddad", role: "Creative Director", initials: "LH" },
      { name: "Omar Farouk", role: "CTO, DesignCo", initials: "OF" },
    ],
    speakersLabel: "Featured Speakers",
    stats: [
      { value: "50+", label: "Speakers" },
      { value: "3", label: "Days" },
      { value: "5K+", label: "Attendees" },
    ],
  },
  ar: {
    heading: "مؤتمر التصميم",
    headingLine2: "الرياض 2026",
    subheading: "الحدث الأبرز للتصميم في المنطقة. تعلّم من الأفضل وتواصل مع أقرانك.",
    ctaPrimary: "سجّل الآن",
    ctaSecondary: "اعرف المزيد",
    date: "20–22 نوفمبر 2026",
    venue: "حي الملك عبدالله المالي",
    speakers: [
      { name: "أحمد الراشد", role: "الرئيس التنفيذي، تك فيجن", initials: "أر" },
      { name: "سارة جونسون", role: "نائبة رئيس التصميم، جوجل", initials: "سج" },
      { name: "خالد منصور", role: "مؤسس بيكسل لاب", initials: "خم" },
      { name: "لينا حداد", role: "المديرة الإبداعية", initials: "لح" },
      { name: "عمر فاروق", role: "المدير التقني", initials: "عف" },
    ],
    speakersLabel: "المتحدثون المميزون",
    stats: [
      { value: "+50", label: "متحدث" },
      { value: "3", label: "أيام" },
      { value: "+5K", label: "حاضر" },
    ],
  },
};

const avatarColors = ["bg-indigo-500", "bg-pink-500", "bg-emerald-500", "bg-amber-500", "bg-violet-500"];

export function EventSpeakers({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Radial bg */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-50 rounded-full blur-[120px] opacity-50" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className="text-center">
            <h1
              className="fade-up text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.05]"
              style={{ animationDelay: "0.1s" }}
            >
              {t.heading}
              <br />
              <span className="text-indigo-600">{t.headingLine2}</span>
            </h1>

            {/* Date & venue strip */}
            <div
              className="fade-up mt-6 flex items-center justify-center gap-4 text-sm text-gray-500"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-indigo-500" />
                {t.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-indigo-500" />
                {t.venue}
              </span>
            </div>

            <p
              className="fade-up mt-4 text-lg text-gray-500 max-w-lg mx-auto"
              style={{ animationDelay: "0.25s" }}
            >
              {t.subheading}
            </p>

            {/* CTAs */}
            <div
              className="fade-up mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25 ${isAr ? "flex-row-reverse" : ""}`}
              >
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:border-gray-400 transition-all">
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Speakers row */}
          <div className="fade-up mt-16" style={{ animationDelay: "0.4s" }}>
            <p className="text-xs text-gray-400 text-center uppercase tracking-widest mb-6">
              {t.speakersLabel}
            </p>
            <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
              {t.speakers.map((speaker, i) => (
                <div
                  key={i}
                  className="fade-up text-center group"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${avatarColors[i]} flex items-center justify-center text-white font-bold text-lg mx-auto mb-2 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    {speaker.initials}
                  </div>
                  <div className="text-sm font-semibold text-gray-900">{speaker.name}</div>
                  <div className="text-xs text-gray-400">{speaker.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats strip */}
          <div
            className="fade-up mt-14 flex items-center justify-center gap-12 pt-8 border-t border-gray-100"
            style={{ animationDelay: "0.7s" }}
          >
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
