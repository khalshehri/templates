"use client";

import { ArrowRight, Star, Quote } from "lucide-react";

const content = {
  en: {
    rating: "5.0",
    reviewCount: "(120+ reviews)",
    heading: ["Clients Love", "Working With Me"],
    featuredQuote:
      "Working with this freelancer was the best decision we made. The attention to detail and creative thinking transformed our entire brand presence.",
    featuredAuthor: "Lisa Chen",
    featuredRole: "VP Marketing at TechFlow",
    cta1: "Hire Me",
    cta2: "Read All Reviews",
    clients: ["Google", "Stripe", "Notion", "Linear"],
    trustedBy: "Trusted by teams at",
  },
  ar: {
    rating: "5.0",
    reviewCount: "(120+ تقييم)",
    heading: ["العملاء يحبون", "العمل معي"],
    featuredQuote:
      "العمل مع هذا المستقل كان أفضل قرار اتخذناه. الاهتمام بالتفاصيل والتفكير الإبداعي حوّل حضور علامتنا التجارية بالكامل.",
    featuredAuthor: "ليزا تشين",
    featuredRole: "نائبة رئيس التسويق في تيك فلو",
    cta1: "وظّفني",
    cta2: "اقرأ جميع التقييمات",
    clients: ["Google", "Stripe", "Notion", "Linear"],
    trustedBy: "موثوق من فرق في",
  },
};

interface TestimonialCard {
  quote: { en: string; ar: string };
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  top: number;
  left: number;
  rotation: number;
  opacity: number;
  width: number;
  duration: number;
  delay: number;
  mobileVisible: boolean;
}

const testimonials: TestimonialCard[] = [
  {
    quote: { en: "Incredible work!", ar: "عمل مذهل!" },
    name: { en: "James R.", ar: "جيمس ر." },
    role: { en: "CEO, StartupX", ar: "مدير تنفيذي، ستارتب إكس" },
    top: 5,
    left: 3,
    rotation: -4,
    opacity: 0.35,
    width: 220,
    duration: 28,
    delay: 0,
    mobileVisible: true,
  },
  {
    quote: { en: "Exceeded all expectations", ar: "تجاوز كل التوقعات" },
    name: { en: "Sarah M.", ar: "سارة م." },
    role: { en: "Founder, Bloom", ar: "مؤسسة، بلوم" },
    top: 15,
    left: 72,
    rotation: 3,
    opacity: 0.4,
    width: 240,
    duration: 34,
    delay: 2,
    mobileVisible: true,
  },
  {
    quote: {
      en: "Delivered ahead of schedule",
      ar: "سلّم قبل الموعد المحدد",
    },
    name: { en: "Tom K.", ar: "توم ك." },
    role: { en: "CTO, DevLabs", ar: "مدير تقني، ديف لابز" },
    top: 35,
    left: -2,
    rotation: 2,
    opacity: 0.3,
    width: 210,
    duration: 24,
    delay: 5,
    mobileVisible: false,
  },
  {
    quote: { en: "A true professional", ar: "محترف حقيقي" },
    name: { en: "Anna W.", ar: "آنا و." },
    role: { en: "PM, Nexus", ar: "مديرة مشروع، نيكسوس" },
    top: 55,
    left: 78,
    rotation: -3,
    opacity: 0.45,
    width: 200,
    duration: 30,
    delay: 1,
    mobileVisible: true,
  },
  {
    quote: {
      en: "Best designer I've worked with",
      ar: "أفضل مصمم عملت معه",
    },
    name: { en: "Mark L.", ar: "مارك ل." },
    role: { en: "Director, Craft Co", ar: "مدير، كرافت" },
    top: 70,
    left: 5,
    rotation: 5,
    opacity: 0.5,
    width: 250,
    duration: 36,
    delay: 3,
    mobileVisible: true,
  },
  {
    quote: { en: "Highly recommend!", ar: "أنصح به بشدة!" },
    name: { en: "Elena V.", ar: "إيلينا ف." },
    role: { en: "Head of Design", ar: "رئيسة التصميم" },
    top: 8,
    left: 38,
    rotation: -2,
    opacity: 0.35,
    width: 205,
    duration: 26,
    delay: 7,
    mobileVisible: false,
  },
  {
    quote: { en: "Outstanding quality", ar: "جودة استثنائية" },
    name: { en: "David P.", ar: "ديفيد ب." },
    role: { en: "VP Eng, Relay", ar: "نائب رئيس الهندسة" },
    top: 45,
    left: 80,
    rotation: 4,
    opacity: 0.3,
    width: 215,
    duration: 22,
    delay: 4,
    mobileVisible: false,
  },
  {
    quote: { en: "Game-changing results", ar: "نتائج غيّرت قواعد اللعبة" },
    name: { en: "Priya S.", ar: "بريا س." },
    role: { en: "Marketing Lead", ar: "مديرة التسويق" },
    top: 75,
    left: 70,
    rotation: -5,
    opacity: 0.4,
    width: 230,
    duration: 32,
    delay: 6,
    mobileVisible: false,
  },
  {
    quote: { en: "Will hire again", ar: "سأوظفه مجدداً" },
    name: { en: "Chris B.", ar: "كريس ب." },
    role: { en: "Founder, Arc", ar: "مؤسس، آرك" },
    top: 60,
    left: -3,
    rotation: 3,
    opacity: 0.35,
    width: 200,
    duration: 38,
    delay: 8,
    mobileVisible: true,
  },
  {
    quote: { en: "Worth every penny", ar: "يستحق كل قرش" },
    name: { en: "Nina T.", ar: "نينا ت." },
    role: { en: "CEO, Forma", ar: "مديرة تنفيذية، فورما" },
    top: 25,
    left: 82,
    rotation: -1,
    opacity: 0.45,
    width: 210,
    duration: 20,
    delay: 3,
    mobileVisible: false,
  },
];

export function Hero08({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <section
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#0c0c0c", fontFamily: fontBody }}
      dir={isAr ? "rtl" : "ltr"}
    >
      <style>{`
        @keyframes driftUp0 { 0%, 100% { transform: translateY(0) rotate(var(--card-rot)); } 50% { transform: translateY(-60px) rotate(var(--card-rot)); } }
        @keyframes driftUp1 { 0%, 100% { transform: translateY(0) rotate(var(--card-rot)); } 50% { transform: translateY(-45px) rotate(var(--card-rot)); } }
        @keyframes driftUp2 { 0%, 100% { transform: translateY(0) rotate(var(--card-rot)); } 50% { transform: translateY(-55px) rotate(var(--card-rot)); } }
        @keyframes driftUp3 { 0%, 100% { transform: translateY(0) rotate(var(--card-rot)); } 50% { transform: translateY(-40px) rotate(var(--card-rot)); } }
        @keyframes driftUp4 { 0%, 100% { transform: translateY(0) rotate(var(--card-rot)); } 50% { transform: translateY(-50px) rotate(var(--card-rot)); } }
        @keyframes panelFadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes starPop {
          0% { transform: scale(0); }
          60% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes quoteGlow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        .hero08-panel {
          animation: panelFadeIn 0.8s ease-out both;
        }
        .hero08-star {
          animation: starPop 0.4s ease-out both;
        }
        .hero08-quote-glow {
          animation: quoteGlow 3s ease-in-out infinite;
        }
        .hero08-card {
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        .hero08-card-0 { animation-name: driftUp0; }
        .hero08-card-1 { animation-name: driftUp1; }
        .hero08-card-2 { animation-name: driftUp2; }
        .hero08-card-3 { animation-name: driftUp3; }
        .hero08-card-4 { animation-name: driftUp4; }
        @media (prefers-reduced-motion: reduce) {
          .hero08-panel,
          .hero08-star,
          .hero08-quote-glow,
          .hero08-card {
            animation: none !important;
          }
          .hero08-panel {
            opacity: 1;
            transform: scale(1);
          }
          .hero08-star {
            transform: scale(1);
          }
        }
      `}</style>

      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(16,185,129,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Floating testimonial cards */}
      {testimonials.map((card, i) => (
        <div
          key={i}
          className={`hero08-card hero08-card-${i % 5} absolute rounded-xl ${
            card.mobileVisible ? "block" : "hidden lg:block"
          }`}
          style={{
            top: `${card.top}%`,
            [isAr ? "right" : "left"]: `${card.left}%`,
            width: `${card.width}px`,
            opacity: card.opacity,
            ["--card-rot" as string]: `${card.rotation}deg`,
            transform: `rotate(${card.rotation}deg)`,
            animationDuration: `${card.duration}s`,
            animationDelay: `${card.delay}s`,
            background:
              card.opacity > 0.4
                ? "rgba(255,255,255,0.08)"
                : "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(8px)",
            padding: "16px",
            zIndex: 1,
          }}
        >
          {/* Stars */}
          <div className="flex gap-0.5 mb-2">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star
                key={s}
                className="w-3 h-3"
                fill="#fbbf24"
                stroke="#fbbf24"
                strokeWidth={0}
              />
            ))}
          </div>
          {/* Quote */}
          <p
            className="text-white/60 text-xs leading-relaxed mb-3"
            style={{ fontFamily: fontBody }}
          >
            &ldquo;{card.quote[language]}&rdquo;
          </p>
          {/* Author */}
          <div>
            <p
              className="text-white/70 text-xs font-medium"
              style={{ fontFamily: fontBody }}
            >
              {card.name[language]}
            </p>
            <p
              className="text-white/40 text-[10px]"
              style={{ fontFamily: fontBody }}
            >
              {card.role[language]}
            </p>
          </div>
        </div>
      ))}

      {/* Center glass content panel */}
      <div
        className="hero08-panel relative z-10 w-full max-w-xl mx-4 rounded-2xl px-8 py-10 sm:px-10 sm:py-12 text-center"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          boxShadow:
            "0 0 80px rgba(16,185,129,0.05), 0 25px 50px rgba(0,0,0,0.5)",
        }}
      >
        {/* Decorative quote mark */}
        <div className="relative flex justify-center mb-4">
          <Quote
            className="hero08-quote-glow w-12 h-12"
            style={{ color: "rgba(16,185,129,0.15)" }}
            strokeWidth={1.5}
          />
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span
            className="text-white text-2xl font-bold"
            style={{ fontFamily: fontHeading }}
          >
            {t.rating}
          </span>
          <div className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star
                key={s}
                className="hero08-star w-5 h-5"
                fill="#fbbf24"
                stroke="#fbbf24"
                strokeWidth={0}
                style={{ animationDelay: `${0.3 + s * 0.1}s` }}
              />
            ))}
          </div>
          <span
            className="text-white/40 text-sm"
            style={{ fontFamily: fontBody }}
          >
            {t.reviewCount}
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
          style={{ fontFamily: fontHeading }}
        >
          <span className="text-white block">{t.heading[0]}</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #10b981, #34d399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.heading[1]}
          </span>
        </h1>

        {/* Featured testimonial */}
        <div
          className="mb-8 rounded-xl px-6 py-5"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            className="text-white/70 text-sm sm:text-base leading-relaxed mb-4 italic"
            style={{ fontFamily: fontBody }}
          >
            &ldquo;{t.featuredQuote}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: "#10b981" }}
            >
              {isAr ? "ل" : "L"}
            </div>
            <div className={isAr ? "text-right" : "text-left"}>
              <p
                className="text-white text-sm font-medium"
                style={{ fontFamily: fontBody }}
              >
                {t.featuredAuthor}
              </p>
              <p
                className="text-white/40 text-xs"
                style={{ fontFamily: fontBody }}
              >
                {t.featuredRole}
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <button
            className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: "#10b981",
              fontFamily: fontBody,
              boxShadow: "0 0 30px rgba(16,185,129,0.25)",
            }}
          >
            {t.cta1}
            <ArrowRight
              className="w-4 h-4"
              style={{
                transform: isAr ? "scaleX(-1)" : undefined,
              }}
            />
          </button>
          <button
            className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-white/70 font-medium text-sm transition-all duration-300 hover:text-white hover:bg-white/[0.06]"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              fontFamily: fontBody,
            }}
          >
            {t.cta2}
          </button>
        </div>

        {/* Client logos */}
        <div>
          <p
            className="text-white/30 text-xs mb-3 uppercase tracking-widest"
            style={{ fontFamily: fontBody }}
          >
            {t.trustedBy}
          </p>
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            {t.clients.map((client) => (
              <span
                key={client}
                className="text-white/20 text-sm font-semibold tracking-wide hover:text-white/40 transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
