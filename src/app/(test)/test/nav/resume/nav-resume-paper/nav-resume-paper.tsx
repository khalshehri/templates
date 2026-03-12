"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Alex Morgan",
    title: "Senior Software Engineer",
    links: ["Experience", "Skills", "Education", "Projects"],
    cta: "Download CV",
  },
  ar: {
    name: "أليكس مورغان",
    title: "مهندس برمجيات أول",
    links: ["الخبرة", "المهارات", "التعليم", "المشاريع"],
    cta: "تحميل السيرة",
  },
};

export function NavResumePaper({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-resume-paper-bg {
          background-color: #fafaf8;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
        }
      `}</style>
      <nav className="nav-resume-paper-bg border-b border-gray-200 shadow-sm">
        <div className={`max-w-4xl mx-auto px-8 py-5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`${isAr ? "text-right" : ""}`}>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'Courier New', Courier, monospace" }}>{t.name}</h1>
            <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "'Courier New', Courier, monospace" }}>{t.title}</p>
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                {link}
              </a>
            ))}
          </div>

          <button className="border border-gray-400 hover:border-gray-600 text-gray-700 hover:text-gray-900 text-sm font-medium px-4 py-2 transition-colors" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
