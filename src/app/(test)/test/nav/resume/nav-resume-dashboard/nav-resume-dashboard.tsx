"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Alex Morgan",
    links: ["Experience", "Skills", "Education", "Projects"],
    cta: "Hire Me",
    skills: [
      { name: "React", pct: 95 },
      { name: "Node", pct: 88 },
      { name: "Design", pct: 75 },
    ],
  },
  ar: {
    name: "أليكس مورغان",
    links: ["الخبرة", "المهارات", "التعليم", "المشاريع"],
    cta: "وظفني",
    skills: [
      { name: "ريأكت", pct: 95 },
      { name: "نود", pct: 88 },
      { name: "تصميم", pct: 75 },
    ],
  },
};

export function NavResumeDashboard({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-slate-900 border-b border-slate-700">
      <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="text-white font-bold">{t.name}</span>

        {/* Skill bars */}
        <div className={`hidden lg:flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.skills.map((skill) => (
            <div key={skill.name} className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
              <span className="text-xs text-slate-400 w-12 text-right">{skill.name}</span>
              <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{ width: `${skill.pct}%` }}
                />
              </div>
              <span className="text-xs text-slate-500 w-8">{skill.pct}%</span>
            </div>
          ))}
        </div>

        <div className={`hidden md:flex items-center gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm text-slate-400 hover:text-cyan-400 font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 text-sm font-bold px-5 py-2 rounded-md transition-colors">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
