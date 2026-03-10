"use client";

/**
 * Service Testimonial Hero
 * Full-screen testimonial card as main hero, with business info overlaid.
 * Quote-first layout. Large quotation marks, testimonial dominates viewport.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    businessName: "Al Noor Clinic",
    businessTagline: "Trusted Healthcare Since 2010",
    quote: "They didn't just treat my symptoms — they treated me like family. I walked in worried and walked out smiling. This is what healthcare should feel like.",
    author: "Sarah Al-Rashidi",
    role: "Patient for 5 years",
    rating: 5,
    cta: "Experience the Difference",
    ctaSecondary: "Read More Stories",
    stats: [
      { value: "2,400+", label: "Happy Patients" },
      { value: "4.9", label: "Google Rating" },
      { value: "14", label: "Years of Trust" },
    ],
    moreQuotes: [
      { text: "Best clinic in Riyadh, hands down.", author: "Ahmed M." },
      { text: "Professional, caring, and always on time.", author: "Noura K." },
    ],
  },
  ar: {
    businessName: "عيادة النور",
    businessTagline: "رعاية صحية موثوقة منذ ٢٠١٠",
    quote: "لم يعالجوا أعراضي فقط — بل عاملوني كأنني من العائلة. دخلت قلقاً وخرجت مبتسماً. هكذا يجب أن تكون الرعاية الصحية.",
    author: "سارة الرشيدي",
    role: "مريضة منذ ٥ سنوات",
    rating: 5,
    cta: "جرّب الفرق بنفسك",
    ctaSecondary: "اقرأ المزيد من القصص",
    stats: [
      { value: "+٢٤٠٠", label: "مريض سعيد" },
      { value: "٤.٩", label: "تقييم جوجل" },
      { value: "١٤", label: "عام من الثقة" },
    ],
    moreQuotes: [
      { text: "أفضل عيادة في الرياض، بلا منافس.", author: "أحمد م." },
      { text: "احترافية ورعاية ودقة في المواعيد.", author: "نورة ك." },
    ],
  },
};

export function ServiceTestimonial({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes quoteReveal {
          from { opacity: 0; transform: translateY(40px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes quoteMarkFloat {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(0deg); }
        }
        @keyframes starPop {
          0% { transform: scale(0) rotate(-30deg); }
          60% { transform: scale(1.15) rotate(3deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes miniCardSlide {
          from { opacity: 0; transform: translateX(${isAr ? "-20px" : "20px"}); }
          to { opacity: 1; transform: translateX(0); }
        }
        .quote-reveal { animation: quoteReveal 1s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .fade-in { animation: fadeIn 0.8s ease both; }
        .slide-up { animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .star-pop { animation: starPop 0.4s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .mini-card-slide { animation: miniCardSlide 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(165deg, #fff9f0 0%, #fff5eb 40%, #fef7ed 100%)" }}
      >
        {/* Large quotation mark background */}
        <div
          className={`absolute ${isAr ? "right-[5%]" : "left-[5%]"} top-[8%] text-[20rem] sm:text-[28rem] leading-none font-serif select-none pointer-events-none`}
          style={{
            color: "rgba(249, 115, 22, 0.04)",
            animation: "quoteMarkFloat 6s ease-in-out infinite",
          }}
        >
          {isAr ? "\u201D" : "\u201C"}
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Main testimonial (takes 3 cols) */}
            <div className={`lg:col-span-3 ${isAr ? "lg:order-2 text-right" : ""}`}>
              {/* Business badge */}
              <div
                className={`fade-in inline-flex items-center gap-3 mb-10 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
                >
                  {isAr ? "ن" : "N"}
                </div>
                <div className={isAr ? "text-right" : ""}>
                  <p className="font-bold text-gray-900">{t.businessName}</p>
                  <p className="text-xs text-gray-400">{t.businessTagline}</p>
                </div>
              </div>

              {/* Stars */}
              <div className={`flex gap-1.5 mb-6 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <div key={i} className="star-pop" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="quote-reveal text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug"
                style={{ animationDelay: "0.4s" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className={`slide-up mt-8 flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.7s" }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-orange-700"
                  style={{ background: "linear-gradient(135deg, #fed7aa, #fdba74)" }}
                >
                  {t.author.split(" ").map(w => w[0]).join("")}
                </div>
                <div className={isAr ? "text-right" : ""}>
                  <p className="font-bold text-gray-800">{t.author}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className={`slide-up mt-10 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.85s" }}>
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-2xl transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    boxShadow: "0 8px 24px rgba(249, 115, 22, 0.3)",
                  }}
                >
                  {t.cta}
                  <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-gray-500 rounded-2xl border border-gray-200 bg-white/60 hover:border-gray-400 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Side panel: stats + more quotes (2 cols) */}
            <div className={`lg:col-span-2 space-y-6 ${isAr ? "lg:order-1" : ""}`}>
              {/* Stats cards */}
              {t.stats.map((stat, i) => (
                <div
                  key={i}
                  className="slide-up px-6 py-5 rounded-2xl"
                  style={{
                    animationDelay: `${0.6 + i * 0.1}s`,
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                    border: "1px solid rgba(249, 115, 22, 0.06)",
                  }}
                >
                  <div className={`flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
                    <span className="text-sm text-gray-500">{stat.label}</span>
                    <span
                      className="text-2xl font-black"
                      style={{
                        background: "linear-gradient(135deg, #f97316, #ea580c)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}

              {/* Mini testimonial cards */}
              {t.moreQuotes.map((mq, i) => (
                <div
                  key={i}
                  className={`mini-card-slide px-5 py-4 rounded-2xl ${isAr ? "text-right" : ""}`}
                  style={{
                    animationDelay: `${1.0 + i * 0.15}s`,
                    background: "rgba(249, 115, 22, 0.04)",
                    border: "1px solid rgba(249, 115, 22, 0.08)",
                  }}
                >
                  <p className="text-sm text-gray-600 italic">&ldquo;{mq.text}&rdquo;</p>
                  <p className="text-xs text-gray-400 mt-2 font-semibold">— {mq.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
