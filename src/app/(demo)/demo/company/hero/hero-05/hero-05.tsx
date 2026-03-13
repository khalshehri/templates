"use client";

interface Hero05Props {
  language: "en" | "ar";
}

const content = {
  en: {
    eyebrow: "PLATFORM",
    heading: "The operating system for modern enterprises",
    sub: "One platform to manage operations, analytics, and compliance — built for teams that move fast.",
    cta: "Book a demo",
    logos: ["ARAMCO", "STC", "SABIC"],
    dashNav: ["Overview", "Analytics", "Settings"],
    dashSidebar: ["Dashboard", "Reports", "Users", "Billing"],
    dashTable: ["Project Alpha", "Q4 Revenue", "Compliance Audit", "Onboarding"],
  },
  ar: {
    eyebrow: "المنصة",
    heading: "نظام التشغيل للمؤسسات الحديثة",
    sub: "منصة واحدة لإدارة العمليات والتحليلات والامتثال — مصممة للفرق سريعة الحركة.",
    cta: "احجز عرضاً توضيحياً",
    logos: ["ARAMCO", "STC", "SABIC"],
    dashNav: ["نظرة عامة", "التحليلات", "الإعدادات"],
    dashSidebar: ["لوحة التحكم", "التقارير", "المستخدمون", "الفواتير"],
    dashTable: ["مشروع ألفا", "إيرادات الربع", "تدقيق الامتثال", "التأهيل"],
  },
};

export function Hero05({ language }: Hero05Props) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr
    ? "font-[family-name:var(--font-changa)]"
    : "font-[family-name:var(--font-inter)]";
  const fontBody = isAr
    ? "font-[family-name:var(--font-tajawal)]"
    : "font-[family-name:var(--font-inter)]";

  const barHeights = [65, 40, 85, 55, 72];

  return (
    <>
      <style>{`
        @keyframes hero05FadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero05SlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero05-text {
          animation: hero05FadeIn 0.7s ease-out both;
        }
        .hero05-browser {
          animation: hero05SlideUp 0.8s ease-out 0.3s both;
        }
        .hero05-logos {
          animation: hero05FadeIn 0.6s ease-out 0.7s both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero05-text,
          .hero05-browser,
          .hero05-logos {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <section
        className={`min-h-screen ${fontBody}`}
        style={{ backgroundColor: "#f8f9fa" }}
      >
        {/* Text content */}
        <div className="hero05-text pt-20 pb-8 px-6 md:px-8 text-center max-w-3xl mx-auto">
          <span
            className={`inline-block text-xs font-semibold tracking-[0.2em] text-gray-500 mb-4 ${fontBody}`}
          >
            {t.eyebrow}
          </span>
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4 ${fontHeading}`}
          >
            {t.heading}
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
            {t.sub}
          </p>
          <button
            className="cursor-pointer bg-gray-900 text-white px-7 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-md"
          >
            {t.cta}
          </button>
        </div>

        {/* Browser mockup */}
        <div className="hero05-browser px-4 md:px-8 lg:px-16 max-w-5xl mx-auto pb-6">
          <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            {/* Browser chrome bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-3">
                <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 max-w-xs mx-auto text-center">
                  app.platform.io/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard body */}
            <div className="flex min-h-[280px] md:min-h-[340px]">
              {/* Sidebar */}
              <div
                className={`hidden md:flex flex-col w-44 bg-gray-50 border-gray-200 py-4 px-3 gap-1 ${isAr ? "border-l" : "border-r"}`}
              >
                {t.dashSidebar.map((item, i) => (
                  <div
                    key={i}
                    className={`text-xs px-3 py-2 rounded-md ${
                      i === 0
                        ? "bg-gray-900 text-white font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 md:p-5">
                {/* Top nav row */}
                <div className="flex items-center gap-4 mb-5 border-b border-gray-100 pb-3">
                  {t.dashNav.map((item, i) => (
                    <span
                      key={i}
                      className={`text-xs ${
                        i === 0
                          ? "text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
                          : "text-gray-400"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Chart bars */}
                <div className="flex items-end gap-3 mb-5 h-24">
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 2 ? "#3b82f6" : "#e5e7eb",
                      }}
                    />
                  ))}
                </div>

                {/* Table outline */}
                <div className="border border-gray-100 rounded-md overflow-hidden">
                  <div className="grid grid-cols-3 text-[10px] text-gray-400 bg-gray-50 px-3 py-1.5 border-b border-gray-100">
                    <span>{isAr ? "الاسم" : "Name"}</span>
                    <span>{isAr ? "الحالة" : "Status"}</span>
                    <span>{isAr ? "التاريخ" : "Date"}</span>
                  </div>
                  {t.dashTable.map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-3 text-[10px] px-3 py-1.5 ${
                        i < t.dashTable.length - 1
                          ? "border-b border-gray-50"
                          : ""
                      }`}
                    >
                      <span className="text-gray-700">{row}</span>
                      <span className="text-gray-400">
                        {i % 2 === 0 ? (isAr ? "نشط" : "Active") : (isAr ? "معلق" : "Pending")}
                      </span>
                      <span className="text-gray-400">
                        {isAr ? "مارس 2026" : "Mar 2026"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fade overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #f8f9fa)",
              }}
            />
          </div>
        </div>

        {/* Client logos */}
        <div className="hero05-logos flex items-center justify-center gap-8 md:gap-12 pb-16 pt-4">
          {t.logos.map((logo) => (
            <span
              key={logo}
              className="text-xs tracking-[0.15em] text-gray-400 font-semibold uppercase"
            >
              {logo}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
