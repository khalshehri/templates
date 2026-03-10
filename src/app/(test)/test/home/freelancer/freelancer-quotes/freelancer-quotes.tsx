"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Freelancer",
    title: "Trusted by Many",
    description:
      "Don't just take my word for it. Here's what clients say about working together — real feedback, real results.",
    cta: "Hire Me",
    secondary: "View Portfolio",
    testimonials: [
      { name: "Sarah K.", role: "CEO, TechStart", text: "Exceptional quality and delivered ahead of schedule.", stars: 5 },
      { name: "Ahmed M.", role: "Marketing Director", text: "Transformed our entire digital presence. Highly recommend!", stars: 5 },
      { name: "Lisa J.", role: "Founder, DesignCo", text: "Creative, professional, and a pleasure to work with.", stars: 5 },
      { name: "Omar B.", role: "Product Manager", text: "Best freelancer I've worked with. Period.", stars: 5 },
    ],
  },
  ar: {
    badge: "مستقل",
    title: "موثوق من الكثيرين",
    description:
      "لا تأخذ كلامي فقط. إليك ما يقوله العملاء عن العمل معاً — تقييمات حقيقية، نتائج حقيقية.",
    cta: "وظّفني",
    secondary: "عرض الأعمال",
    testimonials: [
      { name: "سارة ك.", role: "مديرة تنفيذية", text: "جودة استثنائية وتسليم قبل الموعد المحدد.", stars: 5 },
      { name: "أحمد م.", role: "مدير التسويق", text: "حوّل وجودنا الرقمي بالكامل. أنصح به بشدة!", stars: 5 },
      { name: "ليزا ج.", role: "مؤسسة DesignCo", text: "مبدع ومحترف ومتعة في العمل معه.", stars: 5 },
      { name: "عمر ب.", role: "مدير المنتج", text: "أفضل مستقل عملت معه. نقطة.", stars: 5 },
    ],
  },
};

export function FreelancerQuotes({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const cardPositions = [
    { x: "5%", y: "8%", rotate: -5, scale: 0.9 },
    { x: "55%", y: "5%", rotate: 3, scale: 0.95 },
    { x: "10%", y: "55%", rotate: 4, scale: 0.88 },
    { x: "58%", y: "52%", rotate: -3, scale: 0.92 },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Floating testimonial cards */}
      {t.testimonials.map((testimonial, i) => {
        const pos = cardPositions[i];
        return (
          <div
            key={i}
            className="absolute fq-card-float pointer-events-none"
            style={{
              left: pos.x,
              top: pos.y,
              width: "38%",
              maxWidth: 340,
              transform: `rotate(${pos.rotate}deg) scale(${pos.scale})`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(6,182,212,0.04)",
                border: "1px solid rgba(6,182,212,0.12)",
                backdropFilter: "blur(4px)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.stars }).map((_, s) => (
                  <span key={s} style={{ color: "#06b6d4", fontSize: 14 }}>★</span>
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm text-gray-400 mb-3 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "rgba(6,182,212,0.15)",
                    color: "#06b6d4",
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-300">{testimonial.name}</div>
                  <div className="text-xs text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Large quote marks in background */}
      <div
        className="absolute pointer-events-none fq-quote-fade"
        style={{
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 200,
          lineHeight: 1,
          color: "rgba(6,182,212,0.03)",
          fontFamily: "Georgia, serif",
        }}
      >
        &ldquo;
      </div>

      {/* Aggregate rating */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <div className="flex items-center justify-center gap-1 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="fq-star-pop" style={{ color: "#06b6d4", fontSize: 24, animationDelay: `${i * 0.15}s` }}>★</span>
          ))}
        </div>
        <div className="text-3xl font-bold" style={{ color: "#06b6d4" }}>5.0</div>
        <div className="text-xs text-gray-600 mt-1">
          {language === "en" ? "50+ Reviews" : "٥٠+ تقييم"}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-[200px]">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
          style={{
            color: "#06b6d4",
            borderColor: "rgba(6,182,212,0.3)",
            background: "rgba(6,182,212,0.08)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-extrabold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            background: "linear-gradient(135deg, #06b6d4, #14b8a6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t.title}
        </h1>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-400">
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #14b8a6)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(6,182,212,0.4)",
            }}
          >
            {isAr ? (
              <>
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                {t.cta}
              </>
            ) : (
              <>
                {t.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          <button
            className="px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(20,184,166,0.4)",
              color: "#2dd4bf",
              background: "rgba(20,184,166,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .fq-card-float {
          animation: fqFloat 5s ease-in-out infinite;
        }
        @keyframes fqFloat {
          0%, 100% { transform: rotate(var(--r, -3deg)) translateY(0); }
          50% { transform: rotate(var(--r, -3deg)) translateY(-8px); }
        }
        .fq-star-pop {
          animation: fqStar 0.5s ease-out forwards;
          opacity: 0;
          transform: scale(0);
        }
        @keyframes fqStar {
          0% { opacity: 0; transform: scale(0); }
          70% { transform: scale(1.3); }
          100% { opacity: 1; transform: scale(1); }
        }
        .fq-quote-fade {
          animation: fqQuote 4s ease-in-out infinite;
        }
        @keyframes fqQuote {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
