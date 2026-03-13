"use client";

interface Hero05Props {
  language: "en" | "ar";
}

const content = {
  en: {
    eyebrow: "PLATFORM",
    heading: "The operating system for modern enterprises",
    body: "One unified platform to manage operations, analytics, and compliance — built for teams that move fast.",
    cta: "Book a demo",
    trust: "Trusted by ARAMCO, STC, and SABIC",
  },
  ar: {
    eyebrow: "المنصة",
    heading: "نظام التشغيل للمؤسسات الحديثة",
    body: "منصة موحدة لإدارة العمليات والتحليلات والامتثال — مصممة للفرق سريعة الحركة.",
    cta: "احجز عرضاً",
    trust: "موثوق من أرامكو، STC، وسابك",
  },
};

const navItems = {
  en: ["Dashboard", "Analytics", "Reports", "Settings"],
  ar: ["لوحة التحكم", "التحليلات", "التقارير", "الإعدادات"],
};

export function Hero05({ language }: Hero05Props) {
  const isAr = language === "ar";
  const t = content[language];
  const nav = navItems[language];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#f0f4f8" }}
    >
      <style>{`
        @keyframes hero05FadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero05CardEntry {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero05Float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes hero05TrustFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .hero05-eyebrow {
          animation: hero05FadeUp 0.7s ease-out both;
          animation-delay: 0.1s;
        }
        .hero05-heading {
          animation: hero05FadeUp 0.7s ease-out both;
          animation-delay: 0.2s;
        }
        .hero05-body {
          animation: hero05FadeUp 0.7s ease-out both;
          animation-delay: 0.35s;
        }
        .hero05-cta {
          animation: hero05FadeUp 0.7s ease-out both;
          animation-delay: 0.5s;
        }
        .hero05-card {
          animation: hero05CardEntry 0.8s ease-out both 0.6s, hero05Float 6s ease-in-out infinite 1.4s;
        }
        .hero05-trust {
          animation: hero05TrustFade 0.8s ease-out both;
          animation-delay: 1.2s;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero05-eyebrow,
          .hero05-heading,
          .hero05-body,
          .hero05-cta,
          .hero05-card,
          .hero05-trust {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="relative z-10 px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Text Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p
            className={`hero05-eyebrow text-xs tracking-[0.2em] text-blue-600/70 uppercase font-medium mb-4 ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.eyebrow}
          </p>
          <h1
            className={`hero05-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-5 leading-tight ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.heading}
          </h1>
          <p
            className={`hero05-body text-gray-500 text-lg max-w-xl mx-auto mb-8 leading-relaxed ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.body}
          </p>
          <button
            className={`hero05-cta bg-blue-600 text-white px-7 py-3.5 rounded-xl hover:bg-blue-700 transition-all duration-300 cursor-pointer font-medium text-sm ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.cta}
          </button>
        </div>

        {/* Floating Card */}
        <div className="hero05-card max-w-4xl mx-auto">
          <div
            className="bg-white rounded-2xl overflow-hidden border border-gray-200/60"
            style={{
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06), 0 24px 48px rgba(0,0,0,0.06)",
            }}
          >
            {/* Browser Chrome Top Bar */}
            <div className="h-10 bg-gray-50 border-b border-gray-200/80 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-300/80" />
              <div className="w-3 h-3 rounded-full bg-gray-300/80" />
              <div className="w-3 h-3 rounded-full bg-gray-300/80" />
            </div>

            {/* Dashboard Body */}
            <div className="flex" style={{ minHeight: "280px" }}>
              {/* Sidebar */}
              <div
                className={`w-36 md:w-48 bg-gray-50/50 border-gray-200/60 shrink-0 p-4 pt-5 hidden sm:block ${
                  isAr ? "border-l" : "border-r"
                }`}
              >
                {nav.map((item, i) => (
                  <div
                    key={i}
                    className={`text-xs text-gray-400 py-2 px-3 rounded-md mb-1 ${
                      i === 0 ? "bg-blue-50 text-blue-600 font-medium" : ""
                    } ${
                      isAr
                        ? "font-[family-name:var(--font-tajawal)] text-right"
                        : "font-[family-name:var(--font-inter)]"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-5 md:p-7">
                {/* Bar Charts */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div
                      className={`text-[10px] text-gray-400 mb-1.5 ${
                        isAr
                          ? "font-[family-name:var(--font-tajawal)]"
                          : "font-[family-name:var(--font-inter)]"
                      }`}
                    >
                      {isAr ? "الإيرادات" : "Revenue"}
                    </div>
                    <div className="h-5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: "75%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className={`text-[10px] text-gray-400 mb-1.5 ${
                        isAr
                          ? "font-[family-name:var(--font-tajawal)]"
                          : "font-[family-name:var(--font-inter)]"
                      }`}
                    >
                      {isAr ? "النمو" : "Growth"}
                    </div>
                    <div className="h-5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-400 rounded-full"
                        style={{ width: "45%" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Metric Boxes */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "2.4K", label: isAr ? "المستخدمون" : "Users" },
                    { val: "98%", label: isAr ? "وقت التشغيل" : "Uptime" },
                    { val: "340", label: isAr ? "التقارير" : "Reports" },
                  ].map((m, i) => (
                    <div
                      key={i}
                      className="bg-gray-50/80 rounded-lg p-3 text-center border border-gray-100"
                    >
                      <div
                        className={`text-lg font-semibold text-gray-800 ${
                          isAr
                            ? "font-[family-name:var(--font-changa)]"
                            : "font-[family-name:var(--font-inter)]"
                        }`}
                      >
                        {m.val}
                      </div>
                      <div
                        className={`text-[10px] text-gray-400 mt-0.5 ${
                          isAr
                            ? "font-[family-name:var(--font-tajawal)]"
                            : "font-[family-name:var(--font-inter)]"
                        }`}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Line */}
        <p
          className={`hero05-trust text-center text-sm text-gray-400 mt-10 md:mt-14 ${
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
