"use client";

/**
 * Schedule/Agenda Hero
 * Schedule grid layout as hero with sessions highlighted.
 * Time-block layout showing multiple tracks and sessions.
 * Conference agenda feel with time indicators and session types.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Full Agenda",
    heading: "Packed",
    headingHighlight: "Schedule",
    subheading:
      "Three days of inspiring content. Multiple tracks. 50+ sessions. Find the sessions that matter to you most.",
    ctaPrimary: "Register Now",
    ctaSecondary: "Download PDF",
    dayTabs: ["Day 1 — Mar 15", "Day 2 — Mar 16", "Day 3 — Mar 17"],
    tracks: ["Main Stage", "Workshop", "Lightning"],
    sessions: [
      { time: "9:00", title: "Opening Keynote", speaker: "Sarah Chen", track: 0, duration: 2, type: "keynote" },
      { time: "9:00", title: "React Masterclass", speaker: "John Doe", track: 1, duration: 2, type: "workshop" },
      { time: "9:00", title: "5-Min Pitches", speaker: "Various", track: 2, duration: 1, type: "lightning" },
      { time: "10:00", title: "AI Panel", speaker: "Panel", track: 2, duration: 1, type: "panel" },
      { time: "11:00", title: "Scaling Infrastructure", speaker: "Ahmad H.", track: 0, duration: 1, type: "talk" },
      { time: "11:00", title: "Design Systems", speaker: "Maria S.", track: 1, duration: 1, type: "workshop" },
      { time: "11:00", title: "Open Source Stories", speaker: "Various", track: 2, duration: 1, type: "lightning" },
      { time: "12:00", title: "Lunch & Networking", speaker: "", track: -1, duration: 1, type: "break" },
    ],
    nowLabel: "NOW",
    seeAll: "See Full Agenda",
  },
  ar: {
    badge: "الأجندة الكاملة",
    heading: "جدول",
    headingHighlight: "مليء بالفعاليات",
    subheading:
      "ثلاثة أيام من المحتوى الملهم. مسارات متعددة. +50 جلسة. اعثر على الجلسات الأهم لك.",
    ctaPrimary: "سجّل الآن",
    ctaSecondary: "تحميل PDF",
    dayTabs: ["اليوم 1 — 15 مارس", "اليوم 2 — 16 مارس", "اليوم 3 — 17 مارس"],
    tracks: ["المسرح الرئيسي", "ورشة عمل", "محادثات سريعة"],
    sessions: [
      { time: "9:00", title: "الكلمة الافتتاحية", speaker: "سارة تشن", track: 0, duration: 2, type: "keynote" },
      { time: "9:00", title: "ماستر كلاس React", speaker: "جون دو", track: 1, duration: 2, type: "workshop" },
      { time: "9:00", title: "عروض 5 دقائق", speaker: "متنوع", track: 2, duration: 1, type: "lightning" },
      { time: "10:00", title: "حلقة نقاش AI", speaker: "حلقة نقاش", track: 2, duration: 1, type: "panel" },
      { time: "11:00", title: "توسيع البنية التحتية", speaker: "أحمد ح.", track: 0, duration: 1, type: "talk" },
      { time: "11:00", title: "أنظمة التصميم", speaker: "ماريا س.", track: 1, duration: 1, type: "workshop" },
      { time: "11:00", title: "قصص مفتوحة المصدر", speaker: "متنوع", track: 2, duration: 1, type: "lightning" },
      { time: "12:00", title: "غداء وتواصل", speaker: "", track: -1, duration: 1, type: "break" },
    ],
    nowLabel: "الآن",
    seeAll: "عرض الأجندة الكاملة",
  },
};

const typeColors: Record<string, string> = {
  keynote: "border-red-500/30 bg-red-500/10",
  workshop: "border-orange-500/30 bg-orange-500/10",
  lightning: "border-amber-500/30 bg-amber-500/10",
  panel: "border-pink-500/30 bg-pink-500/10",
  talk: "border-red-400/30 bg-red-400/10",
  break: "border-white/10 bg-white/[0.03]",
};

export function EventSchedule({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sessionPop {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes nowPulse {
          0%, 100% { opacity: 0.6; width: 100%; }
          50% { opacity: 1; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0505]">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(rgba(239,68,68,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
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

          {/* Day tabs */}
          <div className="fade-up flex items-center justify-center gap-2 mb-6"
            style={{ animationDelay: "0.5s" }}>
            {t.dayTabs.map((day, i) => (
              <button key={i} className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${i === 0 ? "bg-red-600/20 text-red-300 border border-red-500/25" : "text-white/25 hover:text-white/40 border border-transparent"}`}>
                {day}
              </button>
            ))}
          </div>

          {/* Schedule grid */}
          <div className="fade-up max-w-4xl mx-auto" style={{ animationDelay: "0.6s" }}>
            {/* Track headers */}
            <div className="grid grid-cols-[60px_1fr_1fr_1fr] gap-2 mb-3">
              <div />
              {t.tracks.map((track, i) => (
                <div key={i} className="text-[10px] text-white/20 uppercase tracking-wider font-bold text-center py-1">
                  {track}
                </div>
              ))}
            </div>

            {/* Time rows */}
            {["9:00", "10:00", "11:00", "12:00"].map((time, ti) => {
              const rowSessions = t.sessions.filter(s => s.time === time);
              return (
                <div key={ti} className="grid grid-cols-[60px_1fr_1fr_1fr] gap-2 mb-2">
                  {/* Time label */}
                  <div className="relative flex items-start justify-end pr-2 pt-2">
                    <span className="text-xs text-white/15 font-mono">{time}</span>
                    {ti === 1 && (
                      <div className="absolute top-0 right-0 bottom-0 w-0.5 bg-red-500/30"
                        style={{ animation: "nowPulse 2s ease-in-out infinite" }}>
                        <span className="absolute -top-3 -left-5 text-[8px] text-red-400 font-bold uppercase">{t.nowLabel}</span>
                      </div>
                    )}
                  </div>

                  {/* Session cells */}
                  {[0, 1, 2].map((trackIdx) => {
                    const session = rowSessions.find(s => s.track === trackIdx);
                    const breakSession = rowSessions.find(s => s.track === -1);

                    if (breakSession && trackIdx === 0) {
                      return (
                        <div key={trackIdx} className="col-span-3 p-3 rounded-lg border border-dashed border-white/[0.06] bg-white/[0.01] text-center"
                          style={{ animation: `sessionPop 0.5s ease-out ${0.7 + ti * 0.1}s both` }}>
                          <span className="text-xs text-white/20">{breakSession.title}</span>
                        </div>
                      );
                    }

                    if (breakSession) return null;

                    // Check if the cell above spans into this row
                    const prevSessions = t.sessions.filter(s => {
                      const prevTimeIdx = ["9:00", "10:00", "11:00", "12:00"].indexOf(s.time);
                      return s.track === trackIdx && prevTimeIdx < ti && prevTimeIdx + s.duration > ti;
                    });

                    if (prevSessions.length > 0) return <div key={trackIdx} />;

                    if (!session) {
                      return <div key={trackIdx} className="p-2 rounded-lg border border-dashed border-white/[0.03] min-h-[60px]" />;
                    }

                    return (
                      <div key={trackIdx}
                        className={`p-3 rounded-lg border ${typeColors[session.type]} cursor-pointer hover:scale-[1.02] transition-transform`}
                        style={{
                          animation: `sessionPop 0.5s ease-out ${0.7 + ti * 0.1 + trackIdx * 0.05}s both`,
                          gridRow: session.duration > 1 ? `span ${session.duration}` : undefined,
                          minHeight: `${session.duration * 68}px`,
                        }}>
                        <div className="text-xs font-semibold text-white/60">{session.title}</div>
                        {session.speaker && <div className="text-[10px] text-white/20 mt-1">{session.speaker}</div>}
                        <div className="mt-1 inline-flex px-1.5 py-0.5 rounded text-[8px] font-bold uppercase text-white/15 bg-white/[0.05]">
                          {session.type}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* See all link */}
          <div className="fade-up text-center mt-6" style={{ animationDelay: "1s" }}>
            <a href="#" className="text-sm text-red-400/40 hover:text-red-400/60 transition-colors">
              {t.seeAll} →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
