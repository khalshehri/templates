"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Alex Morgan",
    links: ["About", "Work", "Blog", "Contact"],
    cta: "Hire Me",
  },
  ar: {
    brand: "أليكس مورغان",
    links: ["عني", "أعمالي", "المدونة", "تواصل"],
    cta: "وظفني",
  },
};

export function NavFreelancerSimple({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className={`max-w-5xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="text-xl font-semibold text-gray-900 tracking-tight">{t.brand}</span>

        <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-sm font-medium transition-colors ${i === 0 ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}
            >
              {link}
            </a>
          ))}
        </div>

        <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
