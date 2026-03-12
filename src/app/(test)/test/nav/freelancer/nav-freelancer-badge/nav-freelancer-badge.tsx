"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Alex Morgan",
    title: "UI/UX Designer",
    links: ["About", "Work", "Blog", "Contact"],
    cta: "Hire Me",
  },
  ar: {
    name: "أليكس مورغان",
    title: "مصمم واجهات",
    links: ["عني", "أعمالي", "المدونة", "تواصل"],
    cta: "وظفني",
  },
};

export function NavFreelancerBadge({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        {/* Badge-like layout */}
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              AM
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
          </div>
          <div className={`border-l border-gray-200 pl-3 ${isAr ? "border-l-0 border-r border-gray-200 pr-3 pl-0 text-right" : ""}`}>
            <div className="font-bold text-gray-900 text-sm leading-tight">{t.name}</div>
            <div className="text-xs text-indigo-500">{t.title}</div>
          </div>
        </div>

        {/* Links */}
        <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-500 hover:text-indigo-600 font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors shadow-sm">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
