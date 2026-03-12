"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Alex Morgan",
    title: "Full-Stack Developer",
    links: ["Experience", "Skills", "Education", "Projects"],
    cta: "Get in Touch",
  },
  ar: {
    name: "أليكس مورغان",
    title: "مطور متكامل",
    links: ["الخبرة", "المهارات", "التعليم", "المشاريع"],
    cta: "تواصل معي",
  },
};

export function NavResumeMinimal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className={`max-w-5xl mx-auto px-6 py-5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`${isAr ? "text-right" : ""}`}>
          <div className="text-lg font-bold text-gray-900 leading-tight">{t.name}</div>
          <div className="text-xs text-gray-400 mt-0.5">{t.title}</div>
        </div>

        <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={link} href="#" className={`text-sm transition-colors ${i === 0 ? "text-gray-900 font-semibold" : "text-gray-400 hover:text-gray-700"}`}>
              {link}
            </a>
          ))}
        </div>

        <a href="#" className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-colors">
          {t.cta}
        </a>
      </div>
    </nav>
  );
}
