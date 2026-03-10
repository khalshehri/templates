"use client";

/**
 * Service Phone Hero
 * Phone/mobile device mockup on one side showing booking UI, content on other side.
 * Device mockup layout with warm orange palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Book from Your Phone",
    heading: "Your Appointment,",
    headingLine2: "In Your Pocket",
    subheading: "Download our app or book online. It takes less than 30 seconds to secure your slot.",
    cta: "Book Online",
    ctaSecondary: "Download App",
    phone: {
      time: "10:30",
      greeting: "Good Morning!",
      nextAppt: "Next Appointment",
      doctor: "Dr. Khalid Ahmed",
      specialty: "Dermatology",
      dateTime: "Today, 2:30 PM",
      quickActions: ["Book", "History", "Chat", "Profile"],
      notification: "Reminder: Appointment in 2 hours",
    },
  },
  ar: {
    badge: "احجز من هاتفك",
    heading: "موعدك،",
    headingLine2: "في جيبك",
    subheading: "حمّل تطبيقنا أو احجز عبر الإنترنت. يستغرق الأمر أقل من ٣٠ ثانية لتأمين موعدك.",
    cta: "احجز الآن",
    ctaSecondary: "حمّل التطبيق",
    phone: {
      time: "١٠:٣٠",
      greeting: "صباح الخير!",
      nextAppt: "الموعد القادم",
      doctor: "د. خالد أحمد",
      specialty: "الأمراض الجلدية",
      dateTime: "اليوم، ٢:٣٠ م",
      quickActions: ["حجز", "السجل", "دردشة", "الملف"],
      notification: "تذكير: موعدك بعد ساعتين",
    },
  },
};

export function ServicePhone({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes phoneSlideIn {
          from { opacity: 0; transform: translateY(60px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes notifSlide {
          0% { opacity: 0; transform: translateY(-20px) scale(0.95); }
          10% { opacity: 1; transform: translateY(0) scale(1); }
          90% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-10px) scale(0.98); }
        }
        @keyframes screenGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(249, 115, 22, 0.1); }
          50% { box-shadow: 0 0 50px rgba(249, 115, 22, 0.2); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .phone-entrance { animation: phoneSlideIn 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both; }
        .phone-float { animation: phoneFloat 5s ease-in-out infinite; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(165deg, #fffbf5 0%, #fff7ed 40%, #fef3c7 100%)" }}
      >
        {/* Background blobs */}
        <div
          className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(251, 146, 60, 0.4), transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute bottom-[15%] left-[5%] w-[250px] h-[250px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(253, 186, 116, 0.4), transparent 70%)", filter: "blur(50px)" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
            {/* Text side */}
            <div className={isAr ? "lg:order-2 text-right" : ""}>
              <div
                className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  animationDelay: "0.1s",
                  background: "rgba(249, 115, 22, 0.1)",
                  color: "#c2410c",
                  border: "1px solid rgba(249, 115, 22, 0.15)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
                {t.badge}
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]" style={{ animationDelay: "0.2s" }}>
                <span className="block text-gray-900">{t.heading}</span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t.headingLine2}
                </span>
              </h1>

              <p className="fade-up mt-6 text-gray-500 leading-relaxed max-w-md" style={{ animationDelay: "0.35s" }}>
                {t.subheading}
              </p>

              <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.5s" }}>
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-2xl transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    boxShadow: "0 8px 24px rgba(249, 115, 22, 0.3)",
                  }}
                >
                  {t.cta}
                  <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-gray-500 rounded-2xl border border-gray-200 bg-white/60 hover:border-gray-400 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>

              {/* App store badges (CSS only) */}
              <div className={`fade-up mt-8 flex gap-3 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.65s" }}>
                {["App Store", "Google Play"].map((store, i) => (
                  <div
                    key={i}
                    className="px-5 py-3 rounded-xl text-xs font-semibold text-gray-600"
                    style={{
                      background: "rgba(0,0,0,0.04)",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    {store}
                  </div>
                ))}
              </div>
            </div>

            {/* Phone mockup */}
            <div className={`flex justify-center ${isAr ? "lg:order-1" : ""}`}>
              <div className="phone-entrance phone-float relative">
                {/* Floating notification */}
                <div
                  className={`absolute -top-4 ${isAr ? "-left-4 sm:-left-20" : "-right-4 sm:-right-20"} z-20 max-w-[220px]`}
                  style={{ animation: "notifSlide 6s ease-in-out infinite" }}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl text-xs ${isAr ? "text-right" : ""}`}
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                      border: "1px solid rgba(249, 115, 22, 0.1)",
                    }}
                  >
                    <div className={`flex items-center gap-2 mb-1 ${isAr ? "flex-row-reverse" : ""}`}>
                      <div className="w-4 h-4 rounded-md bg-orange-500" />
                      <span className="font-bold text-gray-800">{t.phone.nextAppt}</span>
                    </div>
                    <p className="text-gray-500">{t.phone.notification}</p>
                  </div>
                </div>

                {/* Phone frame */}
                <div
                  className="relative w-[280px] sm:w-[300px] rounded-[3rem] overflow-hidden"
                  style={{
                    background: "#1a1a1a",
                    padding: "12px",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1) inset",
                    animation: "screenGlow 4s ease-in-out infinite",
                  }}
                >
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1a1a1a] rounded-full z-20" />

                  {/* Screen */}
                  <div
                    className="rounded-[2.4rem] overflow-hidden"
                    style={{ background: "linear-gradient(180deg, #fff7ed, #ffffff)" }}
                  >
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-8 pt-4 pb-2">
                      <span className="text-xs font-bold text-gray-800">{t.phone.time}</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 rounded-sm bg-gray-300" />
                        <div className="w-4 h-2 rounded-sm bg-gray-300" />
                        <div className="w-6 h-2 rounded-sm bg-green-400" />
                      </div>
                    </div>

                    {/* App content */}
                    <div className={`px-5 pt-4 pb-6 ${isAr ? "text-right" : ""}`}>
                      <p className="text-lg font-bold text-gray-900">{t.phone.greeting}</p>

                      {/* Next appointment card */}
                      <div
                        className="mt-4 p-4 rounded-2xl"
                        style={{
                          background: "linear-gradient(135deg, #f97316, #ea580c)",
                          boxShadow: "0 8px 20px rgba(249, 115, 22, 0.3)",
                        }}
                      >
                        <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider">{t.phone.nextAppt}</p>
                        <p className="text-white font-bold mt-1">{t.phone.doctor}</p>
                        <p className="text-white/80 text-xs">{t.phone.specialty}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-white/90 text-xs font-medium">{t.phone.dateTime}</span>
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <ArrowRight size={14} className={`text-white ${isAr ? "rotate-180" : ""}`} />
                          </div>
                        </div>
                      </div>

                      {/* Quick actions grid */}
                      <div className="mt-5 grid grid-cols-4 gap-3">
                        {t.phone.quickActions.map((action, i) => (
                          <div key={i} className="flex flex-col items-center gap-1.5">
                            <div
                              className="w-12 h-12 rounded-2xl flex items-center justify-center"
                              style={{
                                background: i === 0
                                  ? "linear-gradient(135deg, rgba(249, 115, 22, 0.12), rgba(249, 115, 22, 0.06))"
                                  : "rgba(0,0,0,0.03)",
                                border: i === 0 ? "1px solid rgba(249, 115, 22, 0.15)" : "1px solid rgba(0,0,0,0.04)",
                              }}
                            >
                              <div
                                className="w-5 h-5 rounded-md"
                                style={{ background: i === 0 ? "#f97316" : "#d1d5db" }}
                              />
                            </div>
                            <span className="text-[10px] text-gray-500 font-medium">{action}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom bar */}
                      <div className="mt-6 flex justify-center">
                        <div className="w-32 h-1 rounded-full bg-gray-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
