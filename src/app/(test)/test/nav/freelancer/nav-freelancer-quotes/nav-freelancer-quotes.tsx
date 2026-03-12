"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Alex Morgan",
    links: ["About", "Work", "Blog", "Contact"],
    cta: "Hire Me",
    quotes: [
      "\"Alex delivered beyond expectations!\" — Sarah K.",
      "\"Best freelancer I've worked with.\" — Mike T.",
      "\"Incredible attention to detail.\" — Lisa R.",
      "\"Transformed our brand completely.\" — David W.",
    ],
  },
  ar: {
    brand: "أليكس مورغان",
    links: ["عني", "أعمالي", "المدونة", "تواصل"],
    cta: "وظفني",
    quotes: [
      "\"أليكس تجاوز توقعاتنا!\" — سارة ك.",
      "\"أفضل مستقل عملت معه.\" — محمد ت.",
      "\"اهتمام مذهل بالتفاصيل.\" — ليلى ر.",
      "\"غير علامتنا التجارية تماماً.\" — داوود و.",
    ],
  },
};

export function NavFreelancerQuotes({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes nav-quotes-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .nav-quotes-ticker {
          animation: nav-quotes-scroll 20s linear infinite;
        }
        [dir="rtl"] .nav-quotes-ticker {
          animation: nav-quotes-scroll 20s linear infinite reverse;
        }
      `}</style>
      <nav className="bg-white border-b border-gray-200">
        {/* Quote ticker strip */}
        <div className="bg-amber-50 border-b border-amber-100 overflow-hidden">
          <div className="nav-quotes-ticker flex whitespace-nowrap py-1.5">
            {[...t.quotes, ...t.quotes].map((quote, i) => (
              <span key={i} className="text-xs text-amber-700 mx-8 italic">
                {quote}
              </span>
            ))}
          </div>
        </div>

        <div className={`max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-amber-500">
              <path d="M3 10V7c0-2.2 1.8-4 4-4h.5V5H7c-1.1 0-2 .9-2 2v1h2.5v4H3zm7 0V7c0-2.2 1.8-4 4-4h.5V5H14c-1.1 0-2 .9-2 2v1h2.5v4H10z" fill="currentColor"/>
            </svg>
            <span className="font-bold text-gray-900">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-sm text-gray-500 hover:text-amber-600 font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
