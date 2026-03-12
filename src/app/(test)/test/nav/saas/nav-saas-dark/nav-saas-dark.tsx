"use client";

interface Props { language: "en" | "ar"; }

const content = {
  en: { brand: "NeuralAPI", links: ["Platform", "Solutions", "Developers", "Enterprise"], cta: "Get API Key" },
  ar: { brand: "نيورال API", links: ["المنصة", "الحلول", "المطورون", "المؤسسات"], cta: "احصل على مفتاح" },
};

export function NavSaasDark({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  return (
    <>
      <style>{`
        .dot-grid-bg {
          background-image: radial-gradient(circle, rgba(139,92,246,0.15) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
      <nav className="bg-gray-950 border-b border-gray-800 dot-grid-bg">
        <div className={`max-w-7xl mx-auto px-6 h-16 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-white font-bold text-lg tracking-tight">{t.brand}</span>
          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className="text-sm text-gray-400 hover:text-violet-400 transition-colors">{link}</a>
            ))}
          </div>
          <a href="#" className="px-5 py-2 text-sm font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-colors">
            {t.cta}
          </a>
        </div>
      </nav>
    </>
  );
}
