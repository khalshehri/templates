"use client";

/**
 * Personal Handwave Hero
 * Large waving hand CSS illustration, "Hey there!" intro, casual asymmetric layout.
 * Friendly, approachable. Blue/cyan palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    greeting: "Hey there!",
    name: "I'm Omar",
    title: "Full-Stack Developer & Open Source Enthusiast",
    bio: "I build things on the web that people actually enjoy using. Currently crafting products at a startup in Riyadh and contributing to OSS on weekends.",
    cta: "Let's Work Together",
    ctaSecondary: "See My Work",
    funFacts: [
      "500+ commits this year",
      "Coffee-powered",
      "Night owl coder",
    ],
  },
  ar: {
    greeting: "أهلاً!",
    name: "أنا عمر",
    title: "مطور ويب شامل ومساهم في المصادر المفتوحة",
    bio: "أبني أشياء على الويب يستمتع الناس باستخدامها فعلاً. حالياً أصنع منتجات في شركة ناشئة بالرياض وأساهم في المصادر المفتوحة في عطلة نهاية الأسبوع.",
    cta: "لنعمل معاً",
    ctaSecondary: "شاهد أعمالي",
    funFacts: [
      "٥٠٠+ التزام هذا العام",
      "يعمل بالقهوة",
      "بومة ليلية للبرمجة",
    ],
  },
};

export function PersonalHandwave({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(${isAr ? "-40px" : "40px"}); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatBubble {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes handAppear {
          from { opacity: 0; transform: scale(0.3) rotate(-30deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .slide-in-right { animation: slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .float-bubble { animation: floatBubble 3s ease-in-out infinite; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(165deg, #f0f9ff 0%, #e0f2fe 30%, #ecfeff 70%, #f0fdfa 100%)" }}
      >
        {/* Decorative dots */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle, #06b6d4 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Color blobs */}
        <div
          className="absolute top-[15%] right-[20%] w-[250px] h-[250px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute bottom-[20%] left-[10%] w-[200px] h-[200px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)", filter: "blur(40px)" }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`grid lg:grid-cols-5 gap-12 lg:gap-16 items-center`}>
            {/* Hand illustration (2 cols) */}
            <div className={`lg:col-span-2 flex justify-center ${isAr ? "lg:order-2" : ""}`}>
              <div className="relative">
                {/* Waving hand */}
                <div
                  className="relative"
                  style={{
                    animation: "handAppear 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both",
                  }}
                >
                  <div
                    className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 relative"
                    style={{
                      transformOrigin: "70% 80%",
                      animation: "wave 2.5s ease-in-out 1s infinite",
                    }}
                  >
                    {/* Palm */}
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[55%] rounded-[40%]"
                      style={{ background: "linear-gradient(135deg, #fbbf24, #f59e0b)" }}
                    />
                    {/* Thumb */}
                    <div
                      className="absolute bottom-[30%] left-[5%] w-[22%] h-[35%] rounded-full"
                      style={{ background: "linear-gradient(135deg, #fcd34d, #fbbf24)", transform: "rotate(-30deg)" }}
                    />
                    {/* Fingers */}
                    {[
                      { left: "20%", bottom: "50%", h: "40%", w: "16%", rot: "-5deg" },
                      { left: "35%", bottom: "52%", h: "45%", w: "16%", rot: "-2deg" },
                      { left: "50%", bottom: "50%", h: "42%", w: "16%", rot: "2deg" },
                      { left: "65%", bottom: "45%", h: "35%", w: "15%", rot: "5deg" },
                    ].map((f, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          left: f.left,
                          bottom: f.bottom,
                          width: f.w,
                          height: f.h,
                          background: "linear-gradient(180deg, #fcd34d, #fbbf24)",
                          transform: `rotate(${f.rot})`,
                        }}
                      />
                    ))}
                    {/* Wrist */}
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[20%] rounded-b-xl"
                      style={{ background: "linear-gradient(180deg, #f59e0b, #d97706)" }}
                    />
                  </div>

                  {/* Shadow below hand */}
                  <div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 rounded-full opacity-20"
                    style={{ background: "radial-gradient(ellipse, #06b6d4, transparent 70%)", filter: "blur(8px)" }}
                  />
                </div>

                {/* Floating fun fact bubbles */}
                {t.funFacts.map((fact, i) => {
                  const positions = [
                    { top: "-20px", right: "-40px" },
                    { bottom: "30px", left: "-50px" },
                    { top: "40px", left: "-30px" },
                  ];
                  return (
                    <div
                      key={i}
                      className="slide-in-right absolute hidden sm:block"
                      style={{
                        ...positions[i],
                        animationDelay: `${0.8 + i * 0.15}s`,
                        animation: `slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${0.8 + i * 0.15}s both, floatBubble ${3 + i}s ease-in-out ${1.5 + i * 0.5}s infinite`,
                      } as React.CSSProperties}
                    >
                      <div
                        className="px-3 py-2 rounded-xl text-[10px] font-semibold text-cyan-700 whitespace-nowrap"
                        style={{
                          background: "rgba(255,255,255,0.85)",
                          boxShadow: "0 4px 12px rgba(6, 182, 212, 0.1)",
                          border: "1px solid rgba(6, 182, 212, 0.1)",
                        }}
                      >
                        {fact}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Text content (3 cols) */}
            <div className={`lg:col-span-3 ${isAr ? "lg:order-1 text-right" : ""}`}>
              <h2
                className="fade-up text-2xl sm:text-3xl font-bold text-cyan-600"
                style={{ animationDelay: "0.3s" }}
              >
                {t.greeting}
              </h2>

              <h1
                className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mt-2"
                style={{ animationDelay: "0.4s" }}
              >
                {t.name}
              </h1>

              <p
                className="fade-up mt-3 text-base sm:text-lg font-medium"
                style={{
                  animationDelay: "0.5s",
                  background: "linear-gradient(135deg, #0891b2, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t.title}
              </p>

              <div
                className={`fade-up mt-5 h-1 w-16 rounded-full ${isAr ? "ml-auto" : ""}`}
                style={{ animationDelay: "0.55s", background: "linear-gradient(90deg, #06b6d4, #22d3ee)" }}
              />

              <p className="fade-up mt-5 text-gray-500 leading-relaxed max-w-lg" style={{ animationDelay: "0.6s" }}>
                {t.bio}
              </p>

              <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.7s" }}>
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #0891b2, #06b6d4)" }}
                >
                  {t.cta}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-gray-500 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
