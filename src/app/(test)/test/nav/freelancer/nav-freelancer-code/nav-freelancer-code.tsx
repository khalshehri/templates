"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "dev.alex",
    links: ["About", "Work", "Blog", "Contact"],
    cta: "Hire Me",
    comment: "// navigate",
  },
  ar: {
    brand: "dev.أليكس",
    links: ["عني", "أعمالي", "المدونة", "تواصل"],
    cta: "وظفني",
    comment: "// تنقل",
  },
};

const linkColors = ["text-green-400", "text-orange-400", "text-blue-400", "text-pink-400"];

export function NavFreelancerCode({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav style={{ backgroundColor: "#1e1e1e", fontFamily: "'Courier New', Consolas, monospace" }}>
      <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-purple-400 text-sm">const</span>
          <span className="text-yellow-300 text-sm font-bold">{t.brand}</span>
          <span className="text-gray-500 text-sm">=</span>
          <span className="text-green-400 text-sm">{`()`}</span>
        </div>

        <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-gray-600 text-xs">{t.comment}</span>
          <span className="text-gray-500 mx-2">{'['}</span>
          {t.links.map((link, i) => (
            <span key={link} className="flex items-center">
              <a href="#" className={`text-sm ${linkColors[i]} hover:underline transition-colors`}>
                &quot;{link}&quot;
              </a>
              {i < t.links.length - 1 && <span className="text-gray-600 mx-1">,</span>}
            </span>
          ))}
          <span className="text-gray-500">{']'}</span>
        </div>

        <button className="border border-green-500/50 text-green-400 hover:bg-green-500/10 text-sm px-4 py-1.5 rounded transition-colors font-mono">
          {`> ${t.cta}`}
        </button>
      </div>
    </nav>
  );
}
