"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Ascend",
    links: ["Programs", "Faculty", "Research", "Apply"],
    cta: "Apply Now",
  },
  ar: {
    brand: "أسيند",
    links: ["البرامج", "هيئة التدريس", "البحث العلمي", "التقديم"],
    cta: "قدّم الآن",
  },
};

export function NavEduMinimal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-edu-minimal-link {
          color: #6b7280;
          transition: color 0.2s;
          font-size: 14px;
          font-weight: 500;
        }
        .nav-edu-minimal-link:hover {
          color: #2563eb;
        }
      `}</style>
      <nav className={`bg-white px-8 py-5 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <span className="text-gray-900 font-bold text-xl tracking-tight">{t.brand}</span>
        <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-edu-minimal-link">{link}</a>
          ))}
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
