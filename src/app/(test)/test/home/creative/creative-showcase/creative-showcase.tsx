"use client";

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "We Design Experiences",
    headingLine2: "People Remember",
    subheading: "Award-winning creative agency crafting digital experiences that move people.",
    ctaPrimary: "See Our Work",
    ctaSecondary: "Contact Us",
    projects: ["Brand Identity", "Web Platform", "Mobile App", "Campaign", "Packaging", "Motion Design", "3D Visual", "UI System"],
  },
  ar: {
    heading: "نصمم تجارب",
    headingLine2: "لا تُنسى",
    subheading: "وكالة إبداعية حائزة على جوائز تصنع تجارب رقمية تحرك المشاعر.",
    ctaPrimary: "شاهد أعمالنا",
    ctaSecondary: "تواصل معنا",
    projects: ["هوية بصرية", "منصة ويب", "تطبيق جوال", "حملة إعلانية", "تغليف", "موشن جرافيك", "تصميم ثلاثي", "نظام واجهات"],
  },
};

const ribbonColors = [
  "from-pink-500/20 to-purple-500/20",
  "from-blue-500/20 to-cyan-500/20",
  "from-amber-500/20 to-orange-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-violet-500/20 to-fuchsia-500/20",
  "from-rose-500/20 to-red-500/20",
  "from-indigo-500/20 to-blue-500/20",
  "from-lime-500/20 to-green-500/20",
];

export function CreativeShowcase({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scroll-left { animation: scrollLeft 30s linear infinite; }
        .scroll-right { animation: scrollRight 30s linear infinite; }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* Ribbon row 1 — scrolling left */}
        <div className="absolute top-[15%] left-0 right-0 overflow-hidden opacity-60">
          <div className="scroll-left flex gap-4 w-max">
            {[...t.projects, ...t.projects].map((proj, i) => (
              <div
                key={i}
                className={`shrink-0 w-56 h-36 rounded-2xl bg-gradient-to-br ${ribbonColors[i % ribbonColors.length]} border border-white/5 flex items-center justify-center`}
              >
                <span className="text-white/40 text-sm font-medium">{proj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon row 2 — scrolling right */}
        <div className="absolute bottom-[15%] left-0 right-0 overflow-hidden opacity-40">
          <div className="scroll-right flex gap-4 w-max">
            {[...t.projects, ...t.projects].reverse().map((proj, i) => (
              <div
                key={i}
                className={`shrink-0 w-48 h-32 rounded-2xl bg-gradient-to-br ${ribbonColors[(i + 3) % ribbonColors.length]} border border-white/5 flex items-center justify-center`}
              >
                <span className="text-white/30 text-sm font-medium">{proj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center frosted glass panel */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gray-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 sm:p-14 text-center">
            {/* Heading */}
            <h1
              className="fade-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.05]"
              style={{ animationDelay: "0.2s" }}
            >
              {t.heading}
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {t.headingLine2}
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="fade-up mt-6 text-lg text-white/40 max-w-md mx-auto leading-relaxed"
              style={{ animationDelay: "0.35s" }}
            >
              {t.subheading}
            </p>

            {/* CTAs */}
            <div
              className="fade-up mt-10 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:shadow-xl hover:shadow-purple-500/25 hover:-translate-y-0.5 transition-all ${isAr ? "flex-row-reverse" : ""}`}
              >
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a
                href="#"
                className="px-7 py-3.5 text-sm font-semibold text-white/50 border border-white/15 rounded-full hover:bg-white/5 transition-all"
              >
                {t.ctaSecondary}
              </a>
            </div>

            {/* Project count */}
            <div
              className="fade-up mt-8 flex items-center justify-center gap-6 text-sm text-white/30"
              style={{ animationDelay: "0.6s" }}
            >
              <span>200+ Projects</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>15 Awards</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>8 Years</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
