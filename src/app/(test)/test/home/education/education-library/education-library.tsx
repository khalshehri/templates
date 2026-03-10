"use client";

/**
 * Education Library -- Education Hero Template
 *
 * Bookshelf rows perspective with content appearing as if on an open book.
 * Knowledge/reading feel with wooden shelves and colorful book spines.
 *
 * @category Education
 * @palette emerald (#059669), wood (#8B6914), cream (#FFF8E7), forest (#064E3B)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Knowledge Awaits",
    heading: "Open the Book of Possibilities",
    subheading:
      "Every page turns into a new chapter of growth. Discover courses crafted to expand your horizons and deepen your expertise.",
    cta: "Start Reading",
    secondary: "Browse Library",
    shelf1: ["Mathematics", "Physics", "History", "Biology", "Art"],
    shelf2: ["Literature", "Chemistry", "Philosophy", "Music", "Code"],
    shelf3: ["Design", "Language", "Science", "Poetry", "Logic"],
  },
  ar: {
    badge: "المعرفة بانتظارك",
    heading: "افتح كتاب الإمكانيات",
    subheading:
      "كل صفحة تتحول إلى فصل جديد من النمو. اكتشف دورات مصمّمة لتوسيع آفاقك وتعميق خبراتك.",
    cta: "ابدأ القراءة",
    secondary: "تصفّح المكتبة",
    shelf1: ["رياضيات", "فيزياء", "تاريخ", "أحياء", "فن"],
    shelf2: ["أدب", "كيمياء", "فلسفة", "موسيقى", "برمجة"],
    shelf3: ["تصميم", "لغات", "علوم", "شعر", "منطق"],
  },
};

const bookColors = [
  "#059669", "#10B981", "#6EE7B7", "#065F46", "#047857",
  "#34D399", "#0D9488", "#14B8A6", "#0F766E", "#115E59",
  "#A7F3D0", "#6EE7B7", "#2DD4BF", "#5EEAD4", "#99F6E4",
];

function BookSpine({ color, height, label }: { color: string; height: number; label: string }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-sm cursor-default transition-transform duration-300 hover:-translate-y-2"
      style={{
        backgroundColor: color,
        width: "38px",
        height: `${height}px`,
        boxShadow: `inset -3px 0 6px rgba(0,0,0,0.3), 2px 2px 4px rgba(0,0,0,0.2)`,
        borderLeft: `2px solid ${color}`,
        borderRight: `1px solid rgba(0,0,0,0.2)`,
      }}
    >
      <span
        className="text-[9px] font-bold tracking-wider text-white/90"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          textShadow: "0 1px 2px rgba(0,0,0,0.4)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Shelf({ books, shelfIndex }: { books: string[]; shelfIndex: number }) {
  return (
    <div className="relative">
      <div className="flex items-end gap-[3px] px-4" style={{ minHeight: "90px" }}>
        {books.map((label, i) => (
          <BookSpine
            key={i}
            color={bookColors[(shelfIndex * 5 + i) % bookColors.length]}
            height={65 + ((i * 17 + shelfIndex * 11) % 30)}
            label={label}
          />
        ))}
      </div>
      {/* Shelf plank */}
      <div
        className="w-full h-3 rounded-b-sm"
        style={{
          background: "linear-gradient(180deg, #A0845C 0%, #8B6914 50%, #705610 100%)",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
}

export function EducationLibrary({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0A1F17" }}
    >
      {/* Warm ambient light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(139,105,20,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Left bookshelf */}
      <div
        className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-6 opacity-80"
        style={{ [isRTL ? "right" : "left"]: "3%", width: "220px" }}
      >
        <Shelf books={t.shelf1} shelfIndex={0} />
        <Shelf books={t.shelf2} shelfIndex={1} />
        <Shelf books={t.shelf3} shelfIndex={2} />
      </div>

      {/* Right bookshelf (mirrored) */}
      <div
        className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-6 opacity-60 hidden lg:flex"
        style={{ [isRTL ? "left" : "right"]: "3%", width: "220px" }}
      >
        <Shelf books={[...t.shelf3].reverse()} shelfIndex={3} />
        <Shelf books={[...t.shelf1].reverse()} shelfIndex={4} />
        <Shelf books={[...t.shelf2].reverse()} shelfIndex={5} />
      </div>

      {/* Open book center content */}
      <div className="relative z-10 max-w-2xl mx-auto px-8">
        {/* Open book shape */}
        <div
          className="relative rounded-lg p-8 sm:p-12"
          style={{
            background: "linear-gradient(135deg, #FFF8E7 0%, #F5E6C8 100%)",
            boxShadow:
              "0 20px 60px rgba(0,0,0,0.5), inset 0 0 80px rgba(139,105,20,0.1)",
          }}
        >
          {/* Book spine shadow */}
          <div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px]"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(139,105,20,0.3), transparent)",
            }}
          />

          {/* Page lines */}
          <div className="absolute inset-8 opacity-[0.08] pointer-events-none">
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className="w-full border-b"
                style={{
                  borderColor: "#8B6914",
                  height: "28px",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <div
              className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold tracking-wide"
              style={{
                backgroundColor: "rgba(5,150,105,0.1)",
                color: "#059669",
                border: "1px solid rgba(5,150,105,0.3)",
              }}
            >
              {t.badge}
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{
                color: "#064E3B",
                fontFamily: "Georgia, serif",
              }}
            >
              {t.heading}
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto"
              style={{ color: "#4A5E52" }}
            >
              {t.subheading}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                className="group flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#059669",
                  boxShadow: "0 4px 14px rgba(5,150,105,0.4)",
                }}
              >
                {t.cta}
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
                />
              </button>
              <button
                className="px-7 py-3 rounded-lg text-sm font-semibold transition-colors duration-300"
                style={{
                  color: "#059669",
                  border: "1px solid rgba(5,150,105,0.4)",
                }}
              >
                {t.secondary}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating dust particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${15 + (i * 37) % 70}%`,
            top: `${20 + (i * 23) % 60}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            backgroundColor: "rgba(253,230,138,0.4)",
            animation: `libraryDust ${3 + (i % 3)}s ease-in-out ${i * 0.5}s infinite alternate`,
          }}
        />
      ))}

      <style>{`
        @keyframes libraryDust {
          0% { transform: translateY(0) translateX(0); opacity: 0.2; }
          100% { transform: translateY(-15px) translateX(5px); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
