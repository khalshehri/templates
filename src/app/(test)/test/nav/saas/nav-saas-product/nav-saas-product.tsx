"use client";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    brand: "Stackly",
    links: ["Features", "Pricing", "Docs", "Blog"],
    cta: "Start Free",
    badge: "New",
    features: ["Analytics", "Automation", "Integrations", "Security"],
  },
  ar: {
    brand: "ستاكلي",
    links: ["المميزات", "الأسعار", "التوثيق", "المدونة"],
    cta: "ابدأ مجاناً",
    badge: "جديد",
    features: ["التحليلات", "الأتمتة", "التكاملات", "الأمان"],
  },
};

export function NavSaasProduct({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  return (
    <>
      <style>{`
        .features-dropdown { display: none; }
        .features-trigger:hover .features-dropdown { display: block; }
      `}</style>
      <nav className="bg-white border-b border-gray-200">
        <div className={`max-w-7xl mx-auto px-6 h-16 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-gray-900 font-bold text-xl">{t.brand}</span>
          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="relative features-trigger">
              <a href="#" className={`text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.links[0]} <span className="text-[10px]">▼</span>
              </a>
              <div className={`features-dropdown absolute top-full ${isAr ? "right-0" : "left-0"} mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-4 w-48 z-50`}>
                {t.features.map((f, i) => (
                  <a key={i} href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">{f}</a>
                ))}
              </div>
            </div>
            {t.links.slice(1).map((link, i) => (
              <a key={i} href="#" className={`text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1.5 ${isAr ? "flex-row-reverse" : ""}`}>
                {link}
                {i === 1 && <span className="text-[10px] px-1.5 py-0.5 bg-violet-100 text-violet-600 rounded-full font-semibold">{t.badge}</span>}
              </a>
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
