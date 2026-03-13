"use client";

interface Hero08Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Twenty years of building what lasts",
    sub: "From a two-person advisory to a regional institution — every milestone earned, never given.",
    milestones: [
      { year: "2003", desc: "Founded in Riyadh with a focus on strategic advisory" },
      { year: "2011", desc: "Expanded across GCC with offices in Dubai and Doha" },
      { year: "2019", desc: "Launched digital transformation practice" },
      { year: "2024", desc: "Surpassed 500 enterprise clients across 12 markets" },
    ],
    bottom: "Our story is still being written. We're looking for partners who want to write the next chapter with us.",
    cta: "Join us →",
  },
  ar: {
    heading: "عشرون عاماً من بناء ما يدوم",
    sub: "من شركة استشارية بشخصين إلى مؤسسة إقليمية — كل إنجاز مُستحق، لم يُمنح.",
    milestones: [
      { year: "٢٠٠٣", desc: "تأسست في الرياض بالتركيز على الاستشارات الاستراتيجية" },
      { year: "٢٠١١", desc: "توسعنا في دول الخليج مع مكاتب في دبي والدوحة" },
      { year: "٢٠١٩", desc: "أطلقنا ممارسة التحول الرقمي" },
      { year: "٢٠٢٤", desc: "تجاوزنا 500 عميل مؤسسي في 12 سوقاً" },
    ],
    bottom: "قصتنا لا تزال تُكتب. نبحث عن شركاء يريدون كتابة الفصل التالي معنا.",
    cta: "انضم إلينا ←",
  },
};

export function Hero08({ language }: Hero08Props) {
  const t = content[language];
  const isAr = language === "ar";
  const headingFont = isAr
    ? "font-[family-name:var(--font-changa)]"
    : "font-[family-name:var(--font-inter)]";
  const bodyFont = isAr
    ? "font-[family-name:var(--font-tajawal)]"
    : "font-[family-name:var(--font-inter)]";

  return (
    <>
      <style>{`
        @keyframes hero08DrawLine {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes hero08FadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero08PopIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        .hero08-line {
          animation: hero08DrawLine 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hero08-fade-up {
          opacity: 0;
          animation: hero08FadeUp 0.7s ease-out forwards;
        }
        .hero08-milestone {
          opacity: 0;
          animation: hero08PopIn 0.4s ease-out forwards;
        }
        .hero08-milestone-0 { animation-delay: 0.4s; }
        .hero08-milestone-1 { animation-delay: 0.7s; }
        .hero08-milestone-2 { animation-delay: 1.0s; }
        .hero08-milestone-3 { animation-delay: 1.3s; }
        .hero08-delay-1 { animation-delay: 0.15s; }
        .hero08-delay-2 { animation-delay: 1.5s; }
        .hero08-delay-3 { animation-delay: 1.7s; }
        @media (prefers-reduced-motion: reduce) {
          .hero08-line,
          .hero08-fade-up,
          .hero08-milestone {
            animation: none;
            opacity: 1;
            transform: none;
            width: 100%;
          }
        }
      `}</style>

      <section className={`relative w-full overflow-hidden ${bodyFont}`}>
        {/* White top half */}
        <div className="bg-white pt-20 pb-32 md:pt-28 md:pb-40">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1
              className={`hero08-fade-up text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight ${headingFont}`}
            >
              {t.heading}
            </h1>
            <p className="hero08-fade-up hero08-delay-1 mt-5 text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {t.sub}
            </p>
          </div>
        </div>

        {/* Timeline strip at boundary */}
        <div className="relative -mt-16 md:-mt-20 z-10">
          <div className="overflow-x-auto px-6 scrollbar-hide">
            <div className="relative min-w-[640px] max-w-4xl mx-auto py-8">
              {/* Timeline line track */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2">
                {/* Background track */}
                <div className="absolute inset-0 bg-gray-200" />
                {/* Animated fill */}
                <div className="absolute inset-y-0 left-0 bg-gray-400 hero08-line" />
              </div>

              {/* Milestones */}
              <div className="relative flex justify-between items-center">
                {t.milestones.map((m, i) => (
                  <div
                    key={i}
                    className={`hero08-milestone hero08-milestone-${i} flex flex-col items-center w-1/4`}
                  >
                    <span
                      className={`text-sm font-semibold mb-3 ${
                        i < 2 ? "text-gray-700" : "text-gray-300"
                      } ${headingFont}`}
                    >
                      {m.year}
                    </span>
                    <div
                      className={`w-3 h-3 rounded-full border-2 ${
                        i < 2
                          ? "bg-white border-gray-400"
                          : "bg-slate-700 border-gray-500"
                      } relative z-10`}
                    />
                    <span
                      className={`text-xs mt-3 text-center max-w-[150px] leading-relaxed ${
                        i < 2 ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {m.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dark bottom half */}
        <div className="bg-[#1e293b] pt-16 pb-20 md:pt-20 md:pb-28 -mt-8">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="hero08-fade-up hero08-delay-2 text-gray-300 text-base sm:text-lg leading-relaxed">
              {t.bottom}
            </p>
            <div className="mt-8 hero08-fade-up hero08-delay-3">
              <button
                className="cursor-pointer px-8 py-3 text-white text-sm font-medium border border-white/20 rounded-lg bg-transparent transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                {t.cta}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
