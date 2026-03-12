"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    event: "DevConf 2026",
    links: ["Schedule", "Speakers", "Workshops", "Networking"],
    attendee: "Welcome, Attendee",
    badge: "VIP Pass",
  },
  ar: {
    event: "مؤتمر المطورين ٢٠٢٦",
    links: ["الجدول", "المتحدثون", "ورش العمل", "التواصل"],
    attendee: "مرحباً، حضور",
    badge: "تذكرة VIP",
  },
};

export function NavEventBadge({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-slate-900 border-b border-slate-700">
      <div className={`max-w-7xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-xs">DC</span>
          </div>
          <div className={isAr ? "text-right" : ""}>
            <span className="text-white font-bold block leading-tight">{t.event}</span>
            <span className="text-slate-400 text-xs">{t.attendee}</span>
          </div>
        </div>

        <div className={`hidden md:flex items-center gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className={`flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg ${isAr ? "flex-row-reverse" : ""}`}>
          <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-white text-sm font-semibold">{t.badge}</span>
        </div>
      </div>
    </nav>
  );
}
