"use client";

interface Hero06Props {
  language: "en" | "ar";
}

const content = {
  en: {
    eyebrow: "PLATFORM",
    heading: "The operating system for\nmodern enterprises",
    body: "One unified platform to manage operations, analytics, and compliance — built for teams that move fast.",
    cta: "Book a demo",
    trust: "Trusted by ARAMCO, STC, and SABIC",
  },
  ar: {
    eyebrow: "المنصة",
    heading: "نظام التشغيل\nللمؤسسات الحديثة",
    body: "منصة موحدة لإدارة العمليات والتحليلات والامتثال — مصممة للفرق سريعة الحركة.",
    cta: "احجز عرضاً",
    trust: "موثوق من أرامكو، STC، وسابك",
  },
};

const sidebarItems = {
  en: ["Dashboard", "Analytics", "Reports", "Settings"],
  ar: ["لوحة التحكم", "التحليلات", "التقارير", "الإعدادات"],
};

export function Hero06({ language }: Hero06Props) {
  const isAr = language === "ar";
  const t = content[language];
  const navItems = sidebarItems[language];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#eef2f7" }}
    >
      <style>{`
        @keyframes hero06CardIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero06Float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .hero06-card {
          animation: hero06CardIn 0.8s ease-out forwards, hero06Float 6s ease-in-out 0.8s infinite;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero06-card {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
        {/* Text section */}
        <div className="text-center mb-14">
          <p
            className={`text-xs tracking-[0.2em] text-blue-600/70 uppercase font-medium mb-5 ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.eyebrow}
          </p>
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 whitespace-pre-line mb-5 ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.heading}
          </h1>
          <p
            className={`text-gray-500 text-lg max-w-xl mx-auto mb-8 ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.body}
          </p>
          <button
            className={`bg-blue-600 text-white px-7 py-3.5 rounded-xl hover:bg-blue-700 shadow-sm cursor-pointer transition-all duration-300 font-medium ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.cta}
          </button>
        </div>

        {/* Card section */}
        <div
          className="hero06-card max-w-4xl w-full mx-auto aspect-[16/9] bg-white rounded-2xl overflow-hidden border border-gray-200/60 relative"
          style={{
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06), 0 24px 48px rgba(0,0,0,0.06)",
          }}
        >
          {/* Top bar */}
          <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#ff5f57" }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#febc2e" }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#28c840" }}
              />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-48 h-5 bg-gray-200/60 rounded-md" />
            </div>
          </div>

          {/* Below top bar */}
          <div className="flex flex-1 h-[calc(100%-2.5rem)]">
            {/* Left sidebar */}
            <div
              className={`w-40 bg-gray-50/50 p-3 flex flex-col gap-3 ${
                isAr ? "border-l border-gray-100" : "border-r border-gray-100"
              }`}
            >
              {navItems.map((item, i) => (
                <div
                  key={i}
                  className={`text-[10px] text-gray-400 px-2 py-1 ${
                    isAr
                      ? "font-[family-name:var(--font-tajawal)] text-right"
                      : "font-[family-name:var(--font-inter)]"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-5 flex flex-col gap-5">
              {/* Bars */}
              <div className="flex flex-col gap-3">
                <div className="w-[70%] h-3 bg-blue-500 rounded-full" />
                <div className="w-[45%] h-3 bg-blue-300 rounded-full" />
              </div>

              {/* Metric boxes */}
              <div className="grid grid-cols-3 gap-3 mt-2">
                <div className="h-16 bg-gray-50 rounded-lg border border-gray-100" />
                <div className="h-16 bg-gray-50 rounded-lg border border-gray-100" />
                <div className="h-16 bg-gray-50 rounded-lg border border-gray-100" />
              </div>
            </div>
          </div>

          {/* Bottom gradient overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, white 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Trust line */}
        <p
          className={`text-sm text-gray-400 text-center mt-10 ${
            isAr
              ? "font-[family-name:var(--font-tajawal)]"
              : "font-[family-name:var(--font-inter)]"
          }`}
        >
          {t.trust}
        </p>
      </div>
    </section>
  );
}
