"use client";

/**
 * Event Ticket Hero
 * Large event ticket stub with perforated tear line.
 * Ticket-as-hero design with event details printed on it.
 * Vintage ticket aesthetic with modern styling.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Tickets Available",
    heading: "Get Your",
    headingHighlight: "Ticket Now",
    subheading:
      "Limited tickets available. Secure your spot at the most anticipated event. Early bird pricing ends soon.",
    ctaPrimary: "Buy Tickets",
    ctaSecondary: "Group Discounts",
    ticket: {
      eventName: "TECH SUMMIT",
      year: "2025",
      date: "MAR 15",
      time: "9:00 AM",
      venue: "Riyadh Convention Center",
      section: "SECTION A",
      row: "ROW 12",
      seat: "SEAT 45",
      price: "$299",
      type: "VIP PASS",
      barcode: "TS2025-VIP-0045",
    },
    tiers: [
      { name: "General", price: "$99", status: "Available" },
      { name: "VIP", price: "$299", status: "Selling Fast" },
      { name: "Premium", price: "$499", status: "Few Left" },
    ],
  },
  ar: {
    badge: "التذاكر متاحة",
    heading: "احصل على",
    headingHighlight: "تذكرتك الآن",
    subheading:
      "تذاكر محدودة متاحة. احجز مقعدك في أكثر الأحداث ترقباً. أسعار الحجز المبكر تنتهي قريباً.",
    ctaPrimary: "شراء التذاكر",
    ctaSecondary: "خصومات المجموعات",
    ticket: {
      eventName: "قمة التقنية",
      year: "2025",
      date: "15 مارس",
      time: "9:00 صباحاً",
      venue: "مركز الرياض للمؤتمرات",
      section: "القسم أ",
      row: "الصف 12",
      seat: "المقعد 45",
      price: "$299",
      type: "تذكرة VIP",
      barcode: "TS2025-VIP-0045",
    },
    tiers: [
      { name: "عام", price: "$99", status: "متاح" },
      { name: "VIP", price: "$299", status: "يباع بسرعة" },
      { name: "بريميوم", price: "$499", status: "كمية قليلة" },
    ],
  },
};

export function EventTicket({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ticketSlide {
          from { opacity: 0; transform: translateY(40px) rotate(2deg); }
          to { opacity: 1; transform: translateY(0) rotate(0deg); }
        }
        @keyframes stubSeparate {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        @keyframes barcodeReveal {
          from { opacity: 0; transform: scaleX(0); }
          to { opacity: 1; transform: scaleX(1); }
        }
        @keyframes stampPress {
          0% { transform: scale(2) rotate(-20deg); opacity: 0; }
          100% { transform: scale(1) rotate(-15deg); opacity: 0.15; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0505]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, rgba(239,68,68,0.12) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              {t.badge}
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}>
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            <p className="fade-up mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.3s" }}>
              {t.subheading}
            </p>

            <div className="fade-up mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.4s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Ticket visualization */}
          <div className="max-w-2xl mx-auto" style={{ animation: "ticketSlide 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both" }}>
            <div className="flex flex-col sm:flex-row">
              {/* Main ticket body */}
              <div className="flex-1 relative bg-white/[0.04] border border-red-500/15 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none p-6 sm:p-8"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
                {/* SOLD OUT stamp (subtle overlay) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-black text-red-500 uppercase tracking-widest border-4 border-red-500 px-4 py-1 rounded-lg pointer-events-none"
                  style={{ animation: "stampPress 0.5s ease-out 1.2s both" }}>
                  SOLD
                </div>

                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-xs text-red-400/40 uppercase tracking-[0.2em] font-bold">{t.ticket.type}</div>
                    <div className="text-2xl sm:text-3xl font-black text-white/80 mt-1">{t.ticket.eventName}</div>
                    <div className="text-4xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">{t.ticket.year}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-300">{t.ticket.price}</div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <div className="text-[9px] text-white/15 uppercase tracking-wider">Date</div>
                    <div className="text-sm text-white/50 font-semibold">{t.ticket.date}</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-white/15 uppercase tracking-wider">Time</div>
                    <div className="text-sm text-white/50 font-semibold">{t.ticket.time}</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-white/15 uppercase tracking-wider">Venue</div>
                    <div className="text-sm text-white/50 font-semibold">{t.ticket.venue}</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-white/15 uppercase tracking-wider">Location</div>
                    <div className="text-sm text-white/50 font-semibold">{t.ticket.section} / {t.ticket.row}</div>
                  </div>
                </div>

                {/* Barcode */}
                <div className="flex items-center gap-0.5 justify-center mt-4" style={{ animation: "barcodeReveal 1s ease-out 0.8s both" }}>
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="bg-white/20 rounded-[0.5px]"
                      style={{ width: `${1 + (i % 3)}px`, height: `${24 + (i % 4) * 4}px` }} />
                  ))}
                </div>
                <div className="text-center text-[9px] text-white/10 font-mono mt-1">{t.ticket.barcode}</div>
              </div>

              {/* Perforation line + stub */}
              <div className="relative flex sm:flex-col items-center justify-center">
                {/* Perforation circles */}
                <div className="hidden sm:flex flex-col gap-1.5 absolute -left-[5px] top-0 bottom-0 items-center justify-center">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#0f0505]" />
                  ))}
                </div>
                <div className="sm:hidden flex gap-1.5 absolute -top-[5px] left-0 right-0 items-center justify-center">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#0f0505]" />
                  ))}
                </div>
              </div>

              {/* Ticket stub */}
              <div className="w-full sm:w-32 bg-white/[0.03] border border-red-500/10 rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none p-4 flex flex-row sm:flex-col items-center justify-center gap-3"
                style={{ animation: "stubSeparate 3s ease-in-out 1.5s infinite" }}>
                <div className="text-center">
                  <div className="text-lg font-bold text-white/50">{t.ticket.seat}</div>
                  <div className="text-[9px] text-white/15 uppercase">{t.ticket.row}</div>
                </div>
                <div className="w-px h-6 sm:w-6 sm:h-px bg-white/10" />
                <div className="text-center">
                  <div className="text-xs font-bold text-red-400/50">{t.ticket.date}</div>
                  <div className="text-[9px] text-white/15">{t.ticket.time}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tier options */}
          <div className="fade-up mt-10 grid grid-cols-3 gap-3 max-w-lg mx-auto"
            style={{ animationDelay: "0.9s" }}>
            {t.tiers.map((tier, i) => (
              <div key={i} className={`text-center p-3 rounded-xl border ${i === 1 ? "border-red-500/25 bg-red-500/5" : "border-white/[0.06] bg-white/[0.02]"}`}>
                <div className="text-xs font-semibold text-white/50">{tier.name}</div>
                <div className="text-lg font-bold text-white/70 mt-0.5">{tier.price}</div>
                <div className={`text-[9px] mt-1 ${i === 2 ? "text-red-400/60" : i === 1 ? "text-orange-400/60" : "text-white/20"}`}>
                  {tier.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
