"use client";

/**
 * Floating Booking Hero
 * A warm, inviting hero with a 3D floating appointment card that hovers
 * and rotates slightly on load. Realistic shadow, clean booking UI inside.
 * Warm abstract blob shapes drift slowly behind. Soft light rays from above.
 */

import { ArrowRight, Calendar, Clock, Star, ChevronDown, Check } from "lucide-react";

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
      timeSlots: ["9:00", "10:30", "2:00", "4:30"],
      selectService: "Select Service",
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
      timeSlots: ["9:00", "10:30", "2:00", "4:30"],
      selectService: "اختر الخدمة",
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
        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: perspective(1200px) rotateY(${isAr ? "8deg" : "-8deg"}) rotateX(6deg) translateY(60px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: perspective(1200px) rotateY(${isAr ? "-3deg" : "3deg"}) rotateX(2deg) translateY(0) scale(1);
          }
        }
        @keyframes cardFloat {
          0%, 100% {
            transform: perspective(1200px) rotateY(${isAr ? "-3deg" : "3deg"}) rotateX(2deg) translateY(0);
          }
          33% {
            transform: perspective(1200px) rotateY(${isAr ? "-1deg" : "1deg"}) rotateX(3deg) translateY(-14px);
          }
          66% {
            transform: perspective(1200px) rotateY(${isAr ? "-4deg" : "4deg"}) rotateX(1deg) translateY(-6px);
          }
        }
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(40px); filter: blur(8px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes blobDrift1 {
          0%, 100% { transform: translate(0, 0) scale(1); border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; }
          33% { transform: translate(40px, -30px) scale(1.1); border-radius: 55% 45% 40% 60% / 45% 55% 45% 55%; }
          66% { transform: translate(-20px, 25px) scale(0.95); border-radius: 45% 55% 60% 40% / 60% 45% 55% 40%; }
        }
        @keyframes blobDrift2 {
          0%, 100% { transform: translate(0, 0) scale(1); border-radius: 55% 45% 45% 55% / 45% 55% 55% 45%; }
          50% { transform: translate(-35px, 40px) scale(1.15); border-radius: 42% 58% 52% 48% / 58% 42% 48% 52%; }
        }
        @keyframes blobDrift3 {
          0%, 100% { transform: translate(0, 0) scale(1); border-radius: 48% 52% 58% 42% / 52% 48% 42% 58%; }
          40% { transform: translate(30px, 20px) scale(1.08); border-radius: 58% 42% 42% 58% / 42% 58% 58% 42%; }
          80% { transform: translate(-15px, -20px) scale(0.92); border-radius: 42% 58% 48% 52% / 55% 45% 52% 48%; }
        }
        @keyframes lightRay {
          0%, 100% { opacity: 0.04; }
          50% { opacity: 0.08; }
        }
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        @keyframes pulseDot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5); }
          50% { box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
        }
        @keyframes slotHighlight {
          0%, 100% { background-color: rgba(249, 115, 22, 0.06); }
          50% { background-color: rgba(249, 115, 22, 0.15); }
        }
        .card-entrance {
          animation: cardEntrance 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both,
                     cardFloat 7s ease-in-out 1.4s infinite;
        }
        .float-in { animation: floatIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .blob-drift { will-change: transform, border-radius; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(165deg, #fff9f0 0%, #fff5eb 30%, #fef3c7 70%, #fde9d0 100%)" }}
      >
        {/* Warm drifting blobs */}
        <div
          className="blob-drift absolute w-[420px] h-[420px] opacity-40"
          style={{
            top: "8%",
            right: isAr ? "auto" : "15%",
            left: isAr ? "15%" : "auto",
            background: "radial-gradient(circle, #fdba74 0%, #fed7aa 50%, transparent 70%)",
            filter: "blur(60px)",
            animation: "blobDrift1 20s ease-in-out infinite",
          }}
        />
        <div
          className="blob-drift absolute w-[380px] h-[380px] opacity-35"
          style={{
            bottom: "5%",
            left: isAr ? "auto" : "5%",
            right: isAr ? "5%" : "auto",
            background: "radial-gradient(circle, #fca5a5 0%, #fecdd3 50%, transparent 70%)",
            filter: "blur(70px)",
            animation: "blobDrift2 16s ease-in-out infinite",
          }}
        />
        <div
          className="blob-drift absolute w-[300px] h-[300px] opacity-30"
          style={{
            top: "40%",
            left: "35%",
            background: "radial-gradient(circle, #fde68a 0%, #fef9c3 50%, transparent 70%)",
            filter: "blur(50px)",
            animation: "blobDrift3 18s ease-in-out infinite",
          }}
        />

        {/* Soft light rays from above */}
        {[15, 35, 55, 72, 88].map((left, i) => (
          <div
            key={i}
            className="absolute top-0 w-px"
            style={{
              left: `${left}%`,
              height: `${50 + i * 8}%`,
              background: `linear-gradient(180deg, rgba(251, 146, 60, 0.12), transparent)`,
              transform: `rotate(${-5 + i * 2.5}deg)`,
              transformOrigin: "top center",
              animation: `lightRay ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}

        {/* Thin accent rays */}
        {[22, 45, 65, 80].map((left, i) => (
          <div
            key={`thin-${i}`}
            className="absolute top-0"
            style={{
              left: `${left}%`,
              width: "2px",
              height: `${35 + i * 10}%`,
              background: `linear-gradient(180deg, rgba(245, 158, 11, 0.08), transparent)`,
              transform: `rotate(${-3 + i * 2}deg)`,
              transformOrigin: "top center",
              animation: `lightRay ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 1.2 + 0.5}s`,
            }}
          />
        ))}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
            {/* Text side */}
            <div className={isAr ? "lg:order-2 text-right" : ""}>
              <div
                className={`float-in inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-sm font-semibold mb-8 ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  animationDelay: "0.1s",
                  background: "linear-gradient(135deg, rgba(249, 115, 22, 0.12), rgba(245, 158, 11, 0.08))",
                  color: "#c2410c",
                  border: "1px solid rgba(249, 115, 22, 0.15)",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-orange-500" style={{ animation: "pulseDot 2s ease-in-out infinite" }} />
                {t.badge}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black tracking-tight leading-[1.05]">
                <span
                  className="float-in block text-gray-900"
                  style={{ animationDelay: "0.2s" }}
                >
                  {t.heading}
                </span>
                <span
                  className="float-in block"
                  style={{
                    animationDelay: "0.35s",
                    background: "linear-gradient(135deg, #f97316, #ea580c, #f59e0b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t.headingLine2}
                </span>
              </h1>

              <p
                className="float-in mt-7 text-[1.1rem] text-gray-400 leading-relaxed max-w-md"
                style={{ animationDelay: "0.5s" }}
              >
                {t.subheading}
              </p>

              <div
                className={`float-in mt-9 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.65s" }}
              >
                <a
                  href="#"
                  className={`group relative inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-2xl transition-all hover:-translate-y-1 overflow-hidden ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    boxShadow: "0 8px 32px rgba(249, 115, 22, 0.35), 0 2px 8px rgba(249, 115, 22, 0.2)",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t.ctaPrimary}
                    <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                  </span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "linear-gradient(135deg, #ea580c, #dc2626)" }}
                  />
                </a>
                <a
                  href="#"
                  className="px-8 py-4 text-sm font-semibold text-gray-500 rounded-2xl transition-all hover:bg-white/60 hover:-translate-y-0.5"
                  style={{
                    border: "1px solid rgba(0,0,0,0.08)",
                    backdropFilter: "blur(8px)",
                    background: "rgba(255,255,255,0.4)",
                  }}
                >
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Stats */}
              <div
                className={`float-in mt-12 flex gap-10 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.8s" }}
              >
                {t.stats.map((stat, i) => (
                  <div key={i} className={isAr ? "text-right" : ""}>
                    <div className={`flex items-center gap-1.5 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                      {i === 1 && <Star size={16} className="text-amber-400 fill-amber-400" />}
                      <span
                        className="text-2xl font-black"
                        style={{
                          background: "linear-gradient(135deg, #1f2937, #374151)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium mt-1 block">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Floating Booking Card */}
            <div className={`relative flex items-center justify-center ${isAr ? "lg:order-1" : ""}`} style={{ perspective: "1200px" }}>
              {/* Card glow underneath */}
              <div
                className="absolute w-[85%] h-24 bottom-0 rounded-full"
                style={{
                  background: "radial-gradient(ellipse, rgba(249, 115, 22, 0.15), transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              <div
                className="card-entrance w-full max-w-[380px] rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(165deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
                  backdropFilter: "blur(20px)",
                  boxShadow: `
                    0 40px 80px rgba(249, 115, 22, 0.12),
                    0 20px 40px rgba(0, 0, 0, 0.06),
                    0 4px 12px rgba(0, 0, 0, 0.04),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8)
                  `,
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                }}
              >
                {/* Card header */}
                <div
                  className="px-6 pt-6 pb-4 flex items-center justify-between"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}
                >
                  <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #f97316, #f59e0b)" }}
                    >
                      <Calendar size={18} className="text-white" />
                    </div>
                    <div className={isAr ? "text-right" : ""}>
                      <h3 className="font-bold text-gray-900 text-sm">{t.card.title}</h3>
                      <p className="text-[10px] text-gray-400 font-medium">{t.card.duration}</p>
                    </div>
                  </div>
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-emerald-400"
                    style={{ animation: "pulseDot 2s ease-in-out infinite" }}
                  />
                </div>

                <div className="px-6 py-5 space-y-4">
                  {/* Date picker row */}
                  <div
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl ${isAr ? "flex-row-reverse" : ""}`}
                    style={{
                      background: "linear-gradient(135deg, rgba(249, 115, 22, 0.06), rgba(245, 158, 11, 0.04))",
                      border: "1px solid rgba(249, 115, 22, 0.1)",
                    }}
                  >
                    <Calendar size={15} className="text-orange-500 shrink-0" />
                    <span className="text-sm font-semibold text-gray-700 flex-1">{t.card.date}</span>
                    <ChevronDown size={14} className="text-gray-300" />
                  </div>

                  {/* Time slots grid */}
                  <div className="grid grid-cols-4 gap-2">
                    {t.card.timeSlots.map((slot, i) => (
                      <div
                        key={i}
                        className="relative text-center py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                        style={{
                          background: i === 1
                            ? "linear-gradient(135deg, #f97316, #ea580c)"
                            : "rgba(0,0,0,0.02)",
                          color: i === 1 ? "white" : "#6b7280",
                          border: i === 1 ? "none" : "1px solid rgba(0,0,0,0.04)",
                          boxShadow: i === 1 ? "0 4px 12px rgba(249, 115, 22, 0.3)" : "none",
                          animation: i === 1 ? "none" : `slotHighlight ${4 + i}s ease-in-out infinite ${i * 1.5}s`,
                        }}
                      >
                        {slot}
                        {i === 1 && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-sm">
                            <Check size={10} className="text-orange-500" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Service selector */}
                  <div
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl cursor-pointer ${isAr ? "flex-row-reverse" : ""}`}
                    style={{
                      background: "rgba(0,0,0,0.015)",
                      border: "1px solid rgba(0,0,0,0.04)",
                    }}
                  >
                    <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <div className={isAr ? "text-right" : ""}>
                        <div className="text-[10px] text-gray-400 font-medium">{t.card.selectService}</div>
                        <div className="text-sm font-semibold text-gray-800">{t.card.service}</div>
                      </div>
                    </div>
                    <ChevronDown size={14} className="text-gray-300" />
                  </div>

                  {/* Doctor row */}
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl ${isAr ? "flex-row-reverse" : ""}`}
                    style={{
                      background: "rgba(0,0,0,0.015)",
                      border: "1px solid rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black text-orange-700 shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #fed7aa, #fdba74)",
                      }}
                    >
                      SA
                    </div>
                    <div className={`flex-1 ${isAr ? "text-right" : ""}`}>
                      <div className="text-sm font-bold text-gray-800">{t.card.doctor}</div>
                      <div className={`flex items-center gap-1 mt-0.5 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                        <Clock size={10} className="text-gray-300" />
                        <span className="text-[10px] text-gray-400">{t.card.duration}</span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} size={10} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Book button */}
                <div className="px-6 pb-6">
                  <button
                    className="relative w-full py-4 text-white text-sm font-bold rounded-2xl overflow-hidden transition-all hover:shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #f97316, #ea580c)",
                      boxShadow: "0 6px 20px rgba(249, 115, 22, 0.35)",
                    }}
                  >
                    <span className="relative z-10">{t.card.bookBtn}</span>
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                        animation: "shimmer 3s ease-in-out infinite",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
