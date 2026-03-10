"use client";

/**
 * Event Badge Hero
 * Event badge/lanyard hanging with attendee name visible.
 * Conference registration feel with badge card swinging.
 * Includes QR code placeholder and event branding.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Register Now",
    heading: "Your Badge",
    headingHighlight: "Awaits",
    subheading:
      "Join 5,000+ industry leaders at the biggest tech conference of the year. Network, learn, and grow.",
    ctaPrimary: "Get Your Badge",
    ctaSecondary: "View Agenda",
    badgeCard: {
      eventName: "TECH SUMMIT 2025",
      attendeeName: "Your Name Here",
      role: "VIP ATTENDEE",
      date: "Mar 15-17, 2025",
      location: "Riyadh Convention Center",
      badgeId: "#TS2025-0001",
    },
    perks: ["Keynote Access", "VIP Lounge", "Workshop Pass", "Networking Events"],
    earlyBird: "Early Bird: Save 40% — Ends Soon",
  },
  ar: {
    badge: "سجّل الآن",
    heading: "شارتك",
    headingHighlight: "بانتظارك",
    subheading:
      "انضم إلى +5,000 من قادة الصناعة في أكبر مؤتمر تقني لهذا العام. تواصل، تعلم، وانمو.",
    ctaPrimary: "احصل على شارتك",
    ctaSecondary: "عرض الأجندة",
    badgeCard: {
      eventName: "قمة التقنية 2025",
      attendeeName: "اسمك هنا",
      role: "حضور VIP",
      date: "15-17 مارس 2025",
      location: "مركز الرياض للمؤتمرات",
      badgeId: "#TS2025-0001",
    },
    perks: ["حضور الكلمات الرئيسية", "صالة VIP", "تذكرة ورشة عمل", "فعاليات تواصل"],
    earlyBird: "حجز مبكر: وفّر 40% — ينتهي قريباً",
  },
};

export function EventBadge({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgeSwing {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes badgeDrop {
          0% { opacity: 0; transform: translateY(-80px) rotate(-10deg); }
          60% { transform: translateY(8px) rotate(1deg); }
          100% { opacity: 1; transform: translateY(0) rotate(-2deg); }
        }
        @keyframes lanyardDangle {
          0%, 100% { d: path("M100,0 Q105,40 100,80"); }
          50% { d: path("M100,0 Q95,40 100,80"); }
        }
        @keyframes qrScan {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0505]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(rgba(239,68,68,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, rgba(239,68,68,0.15) 0%, rgba(249,115,22,0.08) 50%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className={isAr ? "lg:order-2 text-right" : "lg:order-1"}>
              <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-300 text-sm font-medium mb-8"
                style={{ animationDelay: "0.1s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                {t.badge}
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s" }}>
                {t.heading}
                <br />
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  {t.headingHighlight}
                </span>
              </h1>

              <p className="fade-up mt-6 text-lg text-white/35 max-w-md leading-relaxed"
                style={{ animationDelay: "0.3s" }}>
                {t.subheading}
              </p>

              <div className={`fade-up mt-8 flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.4s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Perks */}
              <div className={`fade-up mt-10 grid grid-cols-2 gap-3 ${isAr ? "text-right" : ""}`}
                style={{ animationDelay: "0.5s" }}>
                {t.perks.map((perk, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm text-white/25 ${isAr ? "flex-row-reverse" : ""}`}>
                    <span className="w-1 h-1 rounded-full bg-red-500/50" />
                    {perk}
                  </div>
                ))}
              </div>

              <div className="fade-up mt-6 px-4 py-2.5 rounded-lg border border-orange-500/15 bg-orange-500/5 inline-block"
                style={{ animationDelay: "0.6s" }}>
                <span className="text-xs text-orange-300/60">{t.earlyBird}</span>
              </div>
            </div>

            {/* Badge visualization */}
            <div className={`relative flex justify-center ${isAr ? "lg:order-1" : "lg:order-2"}`}>
              {/* Lanyard */}
              <svg className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-20 z-10" viewBox="0 0 200 100">
                <path d="M100,0 Q105,40 100,80" fill="none" stroke="rgba(239,68,68,0.3)" strokeWidth="6" strokeLinecap="round" />
                <circle cx="100" cy="5" r="8" fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth="3" />
              </svg>

              <div style={{ animation: "badgeDrop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both" }}>
                <div style={{ transformOrigin: "top center", animation: "badgeSwing 4s ease-in-out infinite" }}>
                  {/* Badge card */}
                  <div className="relative w-60 sm:w-72 bg-white/[0.04] border-2 border-red-500/20 rounded-2xl overflow-hidden"
                    style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}>
                    {/* Top color strip */}
                    <div className="h-2 bg-gradient-to-r from-red-600 to-orange-500" />

                    {/* Clip hole */}
                    <div className="flex justify-center pt-3">
                      <div className="w-8 h-4 rounded-b-full border-2 border-t-0 border-white/10 bg-[#0f0505]" />
                    </div>

                    <div className="px-6 pt-4 pb-6 text-center">
                      <div className="text-[10px] text-red-400/50 uppercase tracking-[0.2em] font-bold mb-4">{t.badgeCard.eventName}</div>

                      {/* Attendee photo placeholder */}
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/15 flex items-center justify-center mb-4">
                        <span className="text-2xl text-white/10">?</span>
                      </div>

                      <div className="text-lg font-bold text-white/70 mb-1">{t.badgeCard.attendeeName}</div>
                      <div className="inline-flex px-3 py-1 rounded-full bg-red-500/15 border border-red-500/20 text-[10px] font-bold text-red-300/70 uppercase tracking-wider mb-4">
                        {t.badgeCard.role}
                      </div>

                      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

                      <div className="text-xs text-white/25 mb-1">{t.badgeCard.date}</div>
                      <div className="text-xs text-white/20 mb-4">{t.badgeCard.location}</div>

                      {/* QR code placeholder */}
                      <div className="w-16 h-16 mx-auto rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center"
                        style={{ animation: "qrScan 3s ease-in-out infinite" }}>
                        <div className="grid grid-cols-4 gap-0.5">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className={`w-2.5 h-2.5 rounded-[1px] ${i % 3 === 0 || i % 5 === 0 ? "bg-white/20" : "bg-white/5"}`} />
                          ))}
                        </div>
                      </div>

                      <div className="text-[9px] text-white/10 mt-2 font-mono">{t.badgeCard.badgeId}</div>
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
