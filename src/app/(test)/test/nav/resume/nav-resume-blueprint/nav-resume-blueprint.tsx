"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "ALEX MORGAN",
    title: "ARCHITECT / ENGINEER",
    links: ["Experience", "Skills", "Education", "Projects"],
    cta: "Contact",
  },
  ar: {
    name: "أليكس مورغان",
    title: "مهندس / معماري",
    links: ["الخبرة", "المهارات", "التعليم", "المشاريع"],
    cta: "تواصل",
  },
};

export function NavResumeBlueprint({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-blueprint-bg {
          background-color: #1e3a5f;
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
      <nav className="nav-blueprint-bg border-b border-sky-400/20">
        <div className={`max-w-6xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`${isAr ? "text-right" : ""}`}>
            <div className="text-white font-bold text-sm tracking-[0.2em]" style={{ fontFamily: "'Courier New', monospace" }}>{t.name}</div>
            <div className="text-sky-300/60 text-[10px] tracking-[0.15em] mt-0.5" style={{ fontFamily: "'Courier New', monospace" }}>{t.title}</div>
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-sm text-sky-200/70 hover:text-white font-medium transition-colors tracking-wide" style={{ fontFamily: "'Courier New', monospace" }}>
                {link}
              </a>
            ))}
          </div>

          <button className="border border-sky-300/40 text-sky-200 hover:bg-sky-300/10 text-sm px-5 py-2 transition-colors tracking-wider" style={{ fontFamily: "'Courier New', monospace" }}>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
