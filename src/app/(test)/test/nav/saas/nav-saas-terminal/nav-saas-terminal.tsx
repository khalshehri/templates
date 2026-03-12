"use client";

interface Props { language: "en" | "ar"; }

const content = {
  en: { brand: "$ devstack", links: ["features", "pricing", "docs", "changelog"], cta: "deploy →" },
  ar: { brand: "$ ديف ستاك", links: ["المميزات", "الأسعار", "التوثيق", "التغييرات"], cta: "نشر ←" },
};

export function NavSaasTerminal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  return (
    <>
      <style>{`
        @keyframes blink { 0%,50% { opacity: 1; } 51%,100% { opacity: 0; } }
        .cursor-blink { animation: blink 1s step-end infinite; }
      `}</style>
      <nav className="bg-[#0d1117] border-b border-green-500/20 font-mono">
        <div className={`max-w-7xl mx-auto px-6 h-14 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-green-400 font-bold text-sm">
            {t.brand}<span className="cursor-blink text-green-300">_</span>
          </span>
          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className={`text-sm transition-colors ${i === 0 ? "text-green-400" : "text-gray-500 hover:text-green-400"}`}>
                {link}
              </a>
            ))}
          </div>
          <a href="#" className="px-4 py-1.5 text-sm font-bold text-black bg-green-400 rounded hover:bg-green-300 transition-colors">
            {t.cta}
          </a>
        </div>
      </nav>
    </>
  );
}
