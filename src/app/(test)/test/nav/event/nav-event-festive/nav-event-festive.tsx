"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "PartyTime",
    links: ["About", "Program", "RSVP", "Gallery"],
    cta: "Join the Party",
  },
  ar: {
    brand: "وقت الحفل",
    links: ["عن الحفل", "البرنامج", "تأكيد الحضور", "المعرض"],
    cta: "انضم للحفل",
  },
};

export function NavEventFestive({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes confetti1 { 0%,100%{transform:translateY(0) rotate(0deg);opacity:0.7} 50%{transform:translateY(-8px) rotate(180deg);opacity:1} }
        @keyframes confetti2 { 0%,100%{transform:translateY(0) rotate(0deg);opacity:0.5} 50%{transform:translateY(-12px) rotate(-180deg);opacity:0.9} }
        @keyframes confetti3 { 0%,100%{transform:translateY(0) rotate(0deg);opacity:0.6} 50%{transform:translateY(-6px) rotate(90deg);opacity:1} }
        .confetti-dot { position:absolute; width:6px; height:6px; border-radius:50%; }
        .c1{animation:confetti1 3s ease infinite;background:#f472b6}
        .c2{animation:confetti2 2.5s ease infinite 0.3s;background:#60a5fa}
        .c3{animation:confetti3 2.8s ease infinite 0.7s;background:#fbbf24}
        .c4{animation:confetti1 3.2s ease infinite 1s;background:#34d399}
        .c5{animation:confetti2 2.7s ease infinite 0.5s;background:#a78bfa}
        .c6{animation:confetti3 3s ease infinite 1.2s;background:#fb923c}
      `}</style>
      <nav className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 overflow-hidden">
        {/* Confetti dots */}
        <div className="confetti-dot c1" style={{ top: "8px", left: "10%" }} />
        <div className="confetti-dot c2" style={{ top: "20px", left: "25%" }} />
        <div className="confetti-dot c3" style={{ top: "5px", left: "40%" }} />
        <div className="confetti-dot c4" style={{ top: "18px", left: "55%" }} />
        <div className="confetti-dot c5" style={{ top: "10px", left: "70%" }} />
        <div className="confetti-dot c6" style={{ top: "22px", left: "85%" }} />
        <div className="confetti-dot c3" style={{ top: "15px", left: "95%" }} />
        <div className="confetti-dot c1" style={{ top: "25px", left: "5%" }} />
        <div className="confetti-dot c5" style={{ top: "3px", left: "50%" }} />
        <div className="confetti-dot c2" style={{ top: "12px", left: "78%" }} />

        <div className={`max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative z-10 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="font-extrabold text-white text-xl drop-shadow-sm">{t.brand} 🎉</span>

          <div className={`hidden md:flex items-center gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-white text-purple-600 font-bold px-6 py-2.5 rounded-full text-sm hover:scale-105 transition-all shadow-lg">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
