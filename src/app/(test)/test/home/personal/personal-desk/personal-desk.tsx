"use client";

/**
 * Personal Desk Hero
 * Bird's eye view desk illustration (CSS shapes: laptop, coffee, notebook),
 * content below desk. Blue/cyan palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Welcome to My Workspace",
    name: "Ali Al-Qahtani",
    title: "Product Designer & Developer",
    bio: "I turn coffee into code and ideas into interfaces. Currently designing the future of fintech in the Middle East.",
    cta: "Start a Project",
    ctaSecondary: "About Me",
    deskItems: {
      laptop: "VS Code",
      coffee: "3rd cup today",
      notebook: "Ideas & sketches",
      phone: "Spotify playing",
      plant: "Alive (barely)",
    },
  },
  ar: {
    heading: "مرحباً بك في مساحة عملي",
    name: "علي القحطاني",
    title: "مصمم منتجات ومطور",
    bio: "أحوّل القهوة إلى كود والأفكار إلى واجهات. حالياً أصمم مستقبل التقنية المالية في الشرق الأوسط.",
    cta: "ابدأ مشروعاً",
    ctaSecondary: "عنّي",
    deskItems: {
      laptop: "VS Code",
      coffee: "الكوب الثالث اليوم",
      notebook: "أفكار ورسومات",
      phone: "سبوتيفاي يعمل",
      plant: "حيّة (بالكاد)",
    },
  },
};

export function PersonalDesk({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes deskAppear {
          from { opacity: 0; transform: perspective(800px) rotateX(30deg) scale(0.9); }
          to { opacity: 1; transform: perspective(800px) rotateX(0deg) scale(1); }
        }
        @keyframes screenGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(6, 182, 212, 0.15); }
          50% { box-shadow: 0 0 25px rgba(6, 182, 212, 0.25); }
        }
        @keyframes steamFloat {
          0%, 100% { opacity: 0; transform: translateY(0) scale(1); }
          50% { opacity: 0.5; transform: translateY(-15px) scale(1.2); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes itemLabel {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .desk-appear { animation: deskAppear 1s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .item-label { animation: itemLabel 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section
        className="relative min-h-screen flex flex-col items-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #f8fafc 0%, #e0f2fe 50%, #ecfeff 100%)" }}
      >
        {/* Desk illustration - top half */}
        <div className="desk-appear relative w-full max-w-2xl mx-auto px-4 pt-24 pb-8" style={{ animationDelay: "0.2s" }}>
          {/* Desk surface */}
          <div
            className="relative rounded-3xl p-8 sm:p-12"
            style={{
              background: "linear-gradient(135deg, #d4a574, #c9976a, #b8885c)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            {/* Wood grain lines */}
            {[20, 40, 60, 80].map((top, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 h-px opacity-10"
                style={{ top: `${top}%`, background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.15), transparent)" }}
              />
            ))}

            {/* Desk items arranged in bird's eye view */}
            <div className="relative flex flex-wrap items-start justify-center gap-6 sm:gap-8">
              {/* Laptop */}
              <div className="relative group">
                <div
                  className="w-40 sm:w-52 h-28 sm:h-36 rounded-lg overflow-hidden"
                  style={{
                    background: "#1e1e1e",
                    border: "3px solid #333",
                    animation: "screenGlow 3s ease-in-out infinite",
                  }}
                >
                  {/* Screen content - code editor */}
                  <div className="p-2 h-full flex flex-col">
                    <div className="flex gap-1 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex gap-1">
                        <div className="w-6 h-1.5 rounded-sm bg-purple-400/60" />
                        <div className="w-10 h-1.5 rounded-sm bg-cyan-400/50" />
                      </div>
                      <div className="flex gap-1 pl-3">
                        <div className="w-8 h-1.5 rounded-sm bg-blue-400/40" />
                        <div className="w-14 h-1.5 rounded-sm bg-green-400/40" />
                      </div>
                      <div className="flex gap-1 pl-3">
                        <div className="w-12 h-1.5 rounded-sm bg-yellow-400/40" />
                        <div className="w-6 h-1.5 rounded-sm bg-orange-400/40" />
                      </div>
                      <div className="flex gap-1 pl-3">
                        <div className="w-4 h-1.5 rounded-sm bg-cyan-400/40" />
                        <div
                          className="w-0.5 h-3 bg-cyan-400"
                          style={{ animation: "cursorBlink 1s step-end infinite" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Keyboard below screen */}
                <div
                  className="w-40 sm:w-52 h-4 rounded-b-lg mx-auto"
                  style={{ background: "linear-gradient(180deg, #444, #333)", border: "2px solid #555", borderTop: "none" }}
                />
                {/* Label */}
                <div className="item-label absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-white shadow-sm text-[9px] font-semibold text-gray-500 whitespace-nowrap" style={{ animationDelay: "0.8s" }}>
                  {t.deskItems.laptop}
                </div>
              </div>

              {/* Right side items */}
              <div className="flex flex-col gap-4">
                {/* Coffee mug */}
                <div className="relative group">
                  <div className="w-12 h-14 rounded-lg relative" style={{ background: "linear-gradient(180deg, #f5f5f5, #e5e5e5)", border: "2px solid #d4d4d4" }}>
                    {/* Handle */}
                    <div className="absolute top-2 -right-2 w-3 h-6 rounded-r-full border-2 border-l-0 border-d4d4d4" style={{ borderColor: "#d4d4d4" }} />
                    {/* Coffee inside */}
                    <div className="absolute bottom-1 left-1 right-1 h-8 rounded-b-md" style={{ background: "#6b4226" }} />
                    {/* Steam */}
                    {[0, 1, 2].map((s) => (
                      <div
                        key={s}
                        className="absolute -top-4 rounded-full bg-gray-400/20"
                        style={{
                          left: `${25 + s * 20}%`,
                          width: "4px",
                          height: "8px",
                          animation: `steamFloat ${2 + s * 0.5}s ease-in-out ${s * 0.3}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="item-label absolute -bottom-4 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-white shadow-sm text-[9px] font-semibold text-gray-500 whitespace-nowrap" style={{ animationDelay: "0.9s" }}>
                    {t.deskItems.coffee}
                  </div>
                </div>

                {/* Small plant */}
                <div className="relative group">
                  <div className="w-10 h-8 rounded-b-lg mx-auto" style={{ background: "linear-gradient(180deg, #d97706, #b45309)" }} />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-5 rounded-t-full bg-green-500" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 translate-x-1 w-2 h-4 rounded-t-full bg-green-400 rotate-12" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-x-1 w-2 h-3 rounded-t-full bg-green-600 -rotate-12" />
                  <div className="item-label absolute -bottom-4 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-white shadow-sm text-[9px] font-semibold text-gray-500 whitespace-nowrap" style={{ animationDelay: "1.1s" }}>
                    {t.deskItems.plant}
                  </div>
                </div>
              </div>

              {/* Left items */}
              <div className="flex flex-col gap-4 order-first sm:order-none">
                {/* Notebook */}
                <div className="relative group">
                  <div className="w-20 h-28 rounded-lg relative" style={{ background: "linear-gradient(135deg, #dbeafe, #bfdbfe)", border: "1px solid #93c5fd" }}>
                    {/* Lines */}
                    {[25, 40, 55, 70, 85].map((top) => (
                      <div key={top} className="absolute left-3 right-3 h-px bg-blue-200/50" style={{ top: `${top}%` }} />
                    ))}
                    {/* Pen marks */}
                    <div className="absolute top-[26%] left-4 w-10 h-1 rounded bg-blue-400/30" />
                    <div className="absolute top-[41%] left-4 w-8 h-1 rounded bg-blue-400/20" />
                    {/* Spiral binding */}
                    <div className="absolute top-0 bottom-0 left-1 w-1 flex flex-col justify-around">
                      {[0, 1, 2, 3, 4].map((r) => (
                        <div key={r} className="w-1.5 h-1.5 rounded-full border border-gray-400 bg-white -ml-0.5" />
                      ))}
                    </div>
                  </div>
                  <div className="item-label absolute -bottom-4 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-white shadow-sm text-[9px] font-semibold text-gray-500 whitespace-nowrap" style={{ animationDelay: "1s" }}>
                    {t.deskItems.notebook}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content below desk */}
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 pb-20 text-center">
          <h1 className="fade-up text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight" style={{ animationDelay: "0.5s" }}>
            {t.heading}
          </h1>

          <p
            className="fade-up mt-3 text-lg font-medium"
            style={{
              animationDelay: "0.6s",
              background: "linear-gradient(135deg, #0891b2, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.name} — {t.title}
          </p>

          <p className="fade-up mt-4 text-gray-500 max-w-md mx-auto leading-relaxed" style={{ animationDelay: "0.7s" }}>
            {t.bio}
          </p>

          <div className={`fade-up mt-8 flex gap-4 justify-center ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.8s" }}>
            <a
              href="#"
              className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ background: "linear-gradient(135deg, #0891b2, #06b6d4)" }}
            >
              {t.cta}
              <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
            </a>
            <a href="#" className="px-7 py-3.5 text-sm font-semibold text-gray-500 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-all">
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
