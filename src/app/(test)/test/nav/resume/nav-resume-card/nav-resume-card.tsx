"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Alex Morgan",
    title: "Product Designer",
    email: "alex@example.com",
    links: ["Experience", "Skills", "Education", "Projects"],
  },
  ar: {
    name: "أليكس مورغان",
    title: "مصمم منتجات",
    email: "alex@example.com",
    links: ["الخبرة", "المهارات", "التعليم", "المشاريع"],
  },
};

export function NavResumeCard({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-gray-50 py-4 px-6">
      <div className={`max-w-4xl mx-auto bg-white rounded-xl shadow-md border border-gray-100 px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        {/* Card-style left section */}
        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
            AM
          </div>
          <div className={`${isAr ? "text-right" : ""}`}>
            <div className="font-bold text-gray-900 text-sm">{t.name}</div>
            <div className="text-xs text-gray-500">{t.title}</div>
            <div className="text-xs text-blue-500">{t.email}</div>
          </div>
          <div className={`h-8 w-px bg-gray-200 mx-2`} />
        </div>

        {/* Links */}
        <div className={`hidden md:flex items-center gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Print/download icon */}
        <button className="w-9 h-9 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 flex items-center justify-center transition-colors text-gray-400 hover:text-blue-600">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6V1h8v5M4 11h8M12 6h2v7H2V6h2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            <rect x="4" y="10" width="8" height="5" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}
