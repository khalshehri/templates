"use client";

import { ArrowRight, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Lina Al-Farsi",
    title: "Product Designer & Creative Technologist",
    tagline: "I turn complex problems into simple, beautiful digital products.",
    cta: "Hire Me",
    ctaSecondary: "Download CV",
    stack: [
      { label: "React", color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20" },
      { label: "TypeScript", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
      { label: "Figma", color: "bg-violet-500/10 text-violet-600 border-violet-500/20" },
      { label: "Next.js", color: "bg-gray-500/10 text-gray-700 border-gray-500/20" },
      { label: "Tailwind", color: "bg-teal-500/10 text-teal-600 border-teal-500/20" },
      { label: "Node.js", color: "bg-green-500/10 text-green-600 border-green-500/20" },
      { label: "Python", color: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20" },
      { label: "PostgreSQL", color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20" },
      { label: "Docker", color: "bg-sky-500/10 text-sky-600 border-sky-500/20" },
      { label: "AWS", color: "bg-orange-500/10 text-orange-600 border-orange-500/20" },
      { label: "Framer Motion", color: "bg-pink-500/10 text-pink-600 border-pink-500/20" },
      { label: "GraphQL", color: "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/20" },
    ],
    projects: [
      { name: "FinDash", desc: "Financial dashboard", link: "#" },
      { name: "ArtFlow", desc: "AI design tool", link: "#" },
      { name: "Mawj", desc: "Arabic podcast platform", link: "#" },
    ],
    socials: [
      { platform: "github", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" },
    ],
  },
  ar: {
    name: "لينا الفارسي",
    title: "مصممة منتجات وتقنية إبداعية",
    tagline: "أحوّل المشكلات المعقدة إلى منتجات رقمية بسيطة وجميلة.",
    cta: "وظفني",
    ctaSecondary: "تحميل السيرة الذاتية",
    stack: [
      { label: "React", color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20" },
      { label: "TypeScript", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
      { label: "Figma", color: "bg-violet-500/10 text-violet-600 border-violet-500/20" },
      { label: "Next.js", color: "bg-gray-500/10 text-gray-700 border-gray-500/20" },
      { label: "Tailwind", color: "bg-teal-500/10 text-teal-600 border-teal-500/20" },
      { label: "Node.js", color: "bg-green-500/10 text-green-600 border-green-500/20" },
      { label: "Python", color: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20" },
      { label: "PostgreSQL", color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20" },
      { label: "Docker", color: "bg-sky-500/10 text-sky-600 border-sky-500/20" },
      { label: "AWS", color: "bg-orange-500/10 text-orange-600 border-orange-500/20" },
      { label: "Framer Motion", color: "bg-pink-500/10 text-pink-600 border-pink-500/20" },
      { label: "GraphQL", color: "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/20" },
    ],
    projects: [
      { name: "فن داش", desc: "لوحة بيانات مالية", link: "#" },
      { name: "آرت فلو", desc: "أداة تصميم بالذكاء", link: "#" },
      { name: "موج", desc: "منصة بودكاست عربية", link: "#" },
    ],
    socials: [
      { platform: "github", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" },
    ],
  },
};

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: Github, linkedin: Linkedin, twitter: Twitter,
};

export function PersonalStack({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollStack {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .scroll-stack { animation: scrollStack 25s linear infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Subtle bg */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-50 rounded-full blur-[120px] opacity-50" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Avatar + Name */}
          <div className="fade-up text-center" style={{ animationDelay: "0.1s" }}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg shadow-cyan-500/20">
              {isAr ? "ل" : "L"}
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">{t.name}</h1>
            <p className="text-gray-500 mt-1">{t.title}</p>
          </div>

          {/* Tagline */}
          <p
            className="fade-up mt-6 text-center text-lg text-gray-400 max-w-md mx-auto"
            style={{ animationDelay: "0.2s" }}
          >
            {t.tagline}
          </p>

          {/* Social links */}
          <div
            className="fade-up mt-5 flex items-center justify-center gap-3"
            style={{ animationDelay: "0.25s" }}
          >
            {t.socials.map((s, i) => {
              const Icon = socialIcons[s.platform] || Github;
              return (
                <a
                  key={i}
                  href={s.url}
                  className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-700 transition-colors"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          {/* CTAs */}
          <div
            className="fade-up mt-6 flex items-center justify-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#"
              className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
            >
              {t.cta}
              <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
            </a>
            <a href="#" className="px-6 py-3 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:border-gray-400 transition-all">
              {t.ctaSecondary}
            </a>
          </div>

          {/* Scrolling skill stack */}
          <div
            className="fade-up mt-12 overflow-hidden"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-xs text-gray-400 text-center uppercase tracking-widest mb-4">
              {isAr ? "المهارات والأدوات" : "Skills & Tools"}
            </p>
            <div className="overflow-hidden">
              <div className="scroll-stack flex gap-3 w-max">
                {[...t.stack, ...t.stack].map((skill, i) => (
                  <span
                    key={i}
                    className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border ${skill.color}`}
                  >
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Featured projects */}
          <div
            className="fade-up mt-12"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-xs text-gray-400 text-center uppercase tracking-widest mb-4">
              {isAr ? "مشاريع مميزة" : "Featured Projects"}
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {t.projects.map((proj, i) => (
                <a
                  key={i}
                  href={proj.link}
                  className="group flex items-center justify-between px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <div>
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                      {proj.name}
                    </div>
                    <div className="text-xs text-gray-400">{proj.desc}</div>
                  </div>
                  <ExternalLink size={14} className="text-gray-300 group-hover:text-cyan-500 transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
