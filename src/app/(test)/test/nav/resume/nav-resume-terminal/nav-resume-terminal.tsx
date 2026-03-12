"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    prompt: "alex@portfolio:~$",
    links: ["Experience", "Skills", "Education", "Projects"],
    cta: "contact --me",
    hint: "Type a section to navigate",
  },
  ar: {
    prompt: "أليكس@المعرض:~$",
    links: ["الخبرة", "المهارات", "التعليم", "المشاريع"],
    cta: "تواصل --معي",
    hint: "اختر قسماً للتنقل",
  },
};

export function NavResumeTerminal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav style={{ backgroundColor: "#0d1117", fontFamily: "'Courier New', Consolas, monospace" }} className="border-b border-gray-800">
      <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-green-500 text-sm font-bold">{t.prompt}</span>
          <span className="w-2 h-4 bg-green-500 animate-pulse" />
        </div>

        <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-400 hover:text-green-400 px-3 py-1 rounded hover:bg-green-500/10 transition-colors"
            >
              <span className="text-gray-600">{i + 1}.</span> {link}
            </a>
          ))}
        </div>

        <button className="border border-green-500/40 text-green-400 hover:bg-green-500/10 text-sm px-4 py-1.5 rounded transition-colors">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
