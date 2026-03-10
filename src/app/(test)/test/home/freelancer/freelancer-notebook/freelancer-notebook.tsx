/**
 * FreelancerNotebook — Hand-drawn notebook aesthetic hero
 *
 * Sketchy borders, notebook paper lines, hand-drawn doodles,
 * pencil-style typography. Warm, creative, personal feel.
 *
 * @module freelancer-notebook
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Creative Freelancer",
    title: "Every Great Project",
    titleAccent: "Starts with a Sketch",
    description:
      "I'm a freelancer who believes in starting rough and finishing polished. From napkin ideas to launched products, I bring your concepts to life.",
    cta: "Let's Sketch Together",
    secondary: "My Sketchbook",
    doodle1: "IDEAS!",
    doodle2: "TODO:",
    doodle3: "Draft #1",
    note1: "Design",
    note2: "Develop",
    note3: "Deploy",
  },
  ar: {
    badge: "مبدع مستقل",
    title: "كل مشروع عظيم",
    titleAccent: "يبدأ برسمة",
    description:
      "أنا مستقل يؤمن بالبداية الخام والنهاية المصقولة. من أفكار المنديل إلى منتجات جاهزة، أحوّل مفاهيمك إلى حقيقة.",
    cta: "لنرسم معًا",
    secondary: "دفتر أعمالي",
    doodle1: "أفكار!",
    doodle2: "المهام:",
    doodle3: "مسودة #١",
    note1: "تصميم",
    note2: "تطوير",
    note3: "إطلاق",
  },
};

export function FreelancerNotebook({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#fef9ef" }}
    >
      {/* Notebook lines */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{
              top: i * 32 + 16,
              height: 1,
              background: "rgba(59,130,246,0.08)",
            }}
          />
        ))}
        {/* Red margin line */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            [isAr ? "right" : "left"]: 80,
            width: 2,
            background: "rgba(239,68,68,0.15)",
          }}
        />
      </div>

      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.02'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className={`relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 py-20 flex flex-col lg:flex-row items-center gap-16 ${isAr ? "lg:flex-row-reverse" : ""}`}>
        {/* Text content */}
        <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
          <span
            className="inline-block px-4 py-1.5 rounded text-xs font-medium mb-6"
            style={{
              background: "rgba(251,191,36,0.15)",
              color: "#92400e",
              border: "1.5px dashed #d97706",
              transform: "rotate(-1deg)",
            }}
          >
            {t.badge}
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2"
            style={{ color: "#1c1917", fontFamily: "Georgia, serif" }}
          >
            {t.title}
          </h1>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{
              color: "#0891b2",
              fontFamily: "Georgia, serif",
              textDecoration: "underline",
              textDecorationStyle: "wavy",
              textDecorationColor: "rgba(8,145,178,0.3)",
              textUnderlineOffset: 8,
            }}
          >
            {t.titleAccent}
          </h1>

          <p className="text-lg max-w-lg mb-10 leading-relaxed" style={{ color: "#57534e", fontFamily: "Georgia, serif" }}>
            {t.description}
          </p>

          <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
            <button
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "#0891b2",
                color: "white",
                border: "2px solid #0e7490",
                boxShadow: "3px 3px 0 #0e7490",
                fontFamily: "Georgia, serif",
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
              className="px-7 py-3.5 rounded-lg font-semibold transition-colors"
              style={{
                color: "#0891b2",
                border: "2px dashed #0891b2",
                fontFamily: "Georgia, serif",
              }}
            >
              {t.secondary}
            </button>
          </div>
        </div>

        {/* Notebook Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative" style={{ width: 340, height: 420 }}>
            {/* Main notebook page */}
            <div
              style={{
                width: 300,
                height: 380,
                background: "#fffef5",
                border: "2px solid #d6d3d1",
                borderRadius: 4,
                position: "relative",
                boxShadow: "4px 4px 0 #e7e5e4, 8px 8px 0 #f5f5f4",
                transform: "rotate(2deg)",
              }}
            >
              {/* Spiral binding */}
              <div className="absolute top-0 bottom-0" style={{ [isAr ? "right" : "left"]: -12, width: 24 }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      top: 20 + i * 30,
                      [isAr ? "right" : "left"]: 0,
                      width: 20,
                      height: 16,
                      border: "2.5px solid #a8a29e",
                      borderRadius: "50%",
                      background: "transparent",
                    }}
                  />
                ))}
              </div>

              {/* Notebook content - sketchy doodles */}
              <div className="p-8" style={{ marginLeft: isAr ? 0 : 16, marginRight: isAr ? 16 : 0 }}>
                {/* Doodle: lightbulb */}
                <div style={{ animation: "doodle-appear 0.5s ease-out 0.5s both" }}>
                  <svg width="40" height="50" viewBox="0 0 40 50" fill="none" style={{ opacity: 0.6 }}>
                    <path d="M20 5 C10 5 5 12 5 20 C5 28 12 30 14 35 L26 35 C28 30 35 28 35 20 C35 12 30 5 20 5Z" stroke="#d97706" strokeWidth="2" fill="none" strokeDasharray="3 2" />
                    <line x1="14" y1="38" x2="26" y2="38" stroke="#d97706" strokeWidth="2" />
                    <line x1="16" y1="42" x2="24" y2="42" stroke="#d97706" strokeWidth="2" />
                    <line x1="20" y1="0" x2="20" y2="3" stroke="#d97706" strokeWidth="1.5" />
                    <line x1="8" y1="8" x2="5" y2="5" stroke="#d97706" strokeWidth="1.5" />
                    <line x1="32" y1="8" x2="35" y2="5" stroke="#d97706" strokeWidth="1.5" />
                  </svg>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: 12, color: "#92400e", marginLeft: 8 }}>{t.doodle1}</span>
                </div>

                {/* Checklist */}
                <div className="mt-6 space-y-3" style={{ animation: "doodle-appear 0.5s ease-out 1s both" }}>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#78716c", textDecoration: "underline" }}>{t.doodle2}</span>
                  {[t.note1, t.note2, t.note3].map((item, i) => (
                    <div key={i} className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                      <div style={{ width: 16, height: 16, border: "2px solid #a8a29e", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {i < 2 && <span style={{ color: "#0891b2", fontSize: 12, fontWeight: "bold" }}>x</span>}
                      </div>
                      <span style={{ fontFamily: "Georgia, serif", fontSize: 13, color: i < 2 ? "#a8a29e" : "#44403c", textDecoration: i < 2 ? "line-through" : "none" }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow doodle */}
                <div className="mt-8" style={{ animation: "doodle-appear 0.5s ease-out 1.5s both" }}>
                  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" style={{ opacity: 0.4 }}>
                    <path d="M5 30 C20 30 30 10 50 15 C70 20 80 5 100 10" stroke="#0891b2" strokeWidth="2" fill="none" strokeDasharray="4 3" />
                    <path d="M95 5 L103 10 L95 15" stroke="#0891b2" strokeWidth="2" fill="none" />
                  </svg>
                </div>

                {/* Draft label */}
                <div
                  className="mt-4 inline-block px-3 py-1 rounded"
                  style={{
                    border: "1.5px dashed #0891b2",
                    color: "#0891b2",
                    fontSize: 11,
                    fontFamily: "Georgia, serif",
                    transform: "rotate(-3deg)",
                    animation: "doodle-appear 0.5s ease-out 2s both",
                  }}
                >
                  {t.doodle3}
                </div>
              </div>
            </div>

            {/* Pencil */}
            <div
              className="absolute"
              style={{
                bottom: -10,
                right: isAr ? undefined : -20,
                left: isAr ? -20 : undefined,
                transform: "rotate(135deg)",
                animation: "pencil-wiggle 4s ease-in-out infinite",
              }}
            >
              <div style={{ width: 8, height: 80, background: "linear-gradient(to bottom, #fbbf24, #f59e0b)", borderRadius: "2px 2px 0 0", position: "relative" }}>
                <div style={{ position: "absolute", bottom: -10, left: 0, width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "10px solid #78716c" }} />
                <div style={{ position: "absolute", top: 0, left: 0, width: 8, height: 12, background: "#ec4899", borderRadius: "2px 2px 0 0" }} />
              </div>
            </div>

            {/* Coffee stain ring */}
            <div
              className="absolute"
              style={{
                top: -15,
                right: isAr ? undefined : -10,
                left: isAr ? -10 : undefined,
                width: 50,
                height: 50,
                border: "3px solid rgba(180,130,80,0.15)",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes doodle-appear {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pencil-wiggle {
          0%, 100% { transform: rotate(135deg) translateX(0); }
          25% { transform: rotate(137deg) translateX(2px); }
          75% { transform: rotate(133deg) translateX(-2px); }
        }
      `}</style>
    </section>
  );
}
