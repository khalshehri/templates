"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Alex Morgan",
    title: "Curriculum Vitae",
    links: ["Experience", "Skills", "Education", "Projects"],
    cta: "Inquire",
  },
  ar: {
    name: "أليكس مورغان",
    title: "السيرة الذاتية",
    links: ["الخبرة", "المهارات", "التعليم", "المشاريع"],
    cta: "استفسر",
  },
};

export function NavResumeScroll({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-scroll-bg {
          background-color: #f4edd8;
          background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.05'/%3E%3C/svg%3E");
        }
      `}</style>
      <nav className="nav-scroll-bg border-b-2" style={{ borderColor: "#c4a882" }}>
        <div className={`max-w-4xl mx-auto px-8 py-5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`${isAr ? "text-right" : ""}`}>
            <div className="text-xl font-bold" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#4a3728" }}>
              {t.name}
            </div>
            <div className="text-xs italic mt-0.5" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#8b7355" }}>
              {t.title}
            </div>
          </div>

          {/* Decorative separator */}
          <div className="hidden md:block text-center" style={{ color: "#c4a882" }}>
            &#8226; &#8212; &#8226;
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-sm hover:underline underline-offset-4 transition-colors" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#6b5744" }}>
                {link}
              </a>
            ))}
          </div>

          <button className="text-sm font-medium px-5 py-2 rounded border-2 transition-colors" style={{ fontFamily: "Georgia, 'Times New Roman', serif", borderColor: "#8b7355", color: "#4a3728", backgroundColor: "transparent" }}>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
