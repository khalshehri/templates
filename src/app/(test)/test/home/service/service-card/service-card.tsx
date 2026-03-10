"use client";

import { ArrowRight, Calendar, Clock, Star, Heart } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Book Your Appointment",
    heading: "Your Health,",
    headingLine2: "Our Priority",
    subheading: "Experience world-class care with our team of specialists. Book online in seconds — no calls, no waiting.",
    ctaPrimary: "Book Now",
    ctaSecondary: "Our Services",
    card: {
      title: "Quick Booking",
      date: "Mar 15, 2026",
      time: "10:30 AM",
      service: "General Checkup",
      doctor: "Dr. Sarah Ahmed",
      duration: "30 min",
      bookBtn: "Confirm Booking",
    },
    stats: [
      { value: "15K+", label: "Happy Patients" },
      { value: "4.9", label: "Rating" },
      { value: "12", label: "Specialists" },
    ],
  },
  ar: {
    badge: "احجز موعدك",
    heading: "صحتك،",
    headingLine2: "أولويتنا",
    subheading: "استمتع برعاية عالمية المستوى مع فريقنا من المتخصصين. احجز عبر الإنترنت في ثوانٍ — بدون اتصال، بدون انتظار.",
    ctaPrimary: "احجز الآن",
    ctaSecondary: "خدماتنا",
    card: {
      title: "حجز سريع",
      date: "15 مارس 2026",
      time: "10:30 صباحاً",
      service: "فحص عام",
      doctor: "د. سارة أحمد",
      duration: "30 دقيقة",
      bookBtn: "تأكيد الحجز",
    },
    stats: [
      { value: "+15K", label: "مريض سعيد" },
      { value: "4.9", label: "تقييم" },
      { value: "12", label: "متخصص" },
    ],
  },
};

export function ServiceCard({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .card-float { animation: cardFloat 5s ease-in-out infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50/30">
        {/* Soft blobs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-amber-200/20 rounded-full blur-[80px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isAr ? "direction-rtl" : ""}`}>
            {/* Text side */}
            <div className={isAr ? "lg:order-2 text-right" : ""}>
              <div
                className={`fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-8 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                <Heart size={14} />
                {t.badge}
              </div>

              <h1
                className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s" }}
              >
                {t.heading}
                <br />
                <span className="text-orange-500">{t.headingLine2}</span>
              </h1>

              <p
                className="fade-up mt-6 text-lg text-gray-500 leading-relaxed max-w-md"
                style={{ animationDelay: "0.3s" }}
              >
                {t.subheading}
              </p>

              <div
                className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25 ${isAr ? "flex-row-reverse" : ""}`}
                >
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:border-gray-400 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Stats */}
              <div
                className={`fade-up mt-10 flex gap-8 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.5s" }}
              >
                {t.stats.map((stat, i) => (
                  <div key={i} className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                    {i === 1 && <Star size={14} className="text-amber-400 fill-amber-400" />}
                    <span className="text-xl font-bold text-gray-900">{stat.value}</span>
                    <span className="text-sm text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking card side */}
            <div className={`relative flex items-center justify-center ${isAr ? "lg:order-1" : ""}`}>
              <div className="card-float w-full max-w-sm bg-white rounded-2xl shadow-xl shadow-orange-500/10 border border-orange-100/50 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">{t.card.title}</h3>
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 rounded-lg border border-gray-100">
                    <Calendar size={14} className="text-orange-500" />
                    <span className="text-sm text-gray-700">{t.card.date}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 rounded-lg border border-gray-100">
                    <Clock size={14} className="text-orange-500" />
                    <span className="text-sm text-gray-700">{t.card.time}</span>
                  </div>
                </div>

                {/* Service */}
                <div className="px-3 py-2.5 bg-orange-50 rounded-lg border border-orange-100 mb-4">
                  <div className="text-xs text-orange-500 font-medium mb-0.5">{isAr ? "الخدمة" : "Service"}</div>
                  <div className="text-sm font-semibold text-gray-900">{t.card.service}</div>
                </div>

                {/* Doctor */}
                <div className="flex items-center gap-3 mb-4 px-3 py-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xs font-bold">
                    SA
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.card.doctor}</div>
                    <div className="text-xs text-gray-400">{t.card.duration}</div>
                  </div>
                </div>

                {/* Book button */}
                <button className="w-full py-3 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors">
                  {t.card.bookBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
