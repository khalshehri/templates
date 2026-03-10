"use client";

import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Find Us Near You",
    subheading: "Conveniently located in the heart of the city. Visit us today or give us a call.",
    ctaPrimary: "Get Directions",
    ctaSecondary: "Call Now",
    address: "King Fahd Road, Riyadh 12271",
    phone: "+966 11 234 5678",
    hours: "Sun–Thu: 8AM – 10PM",
    pin: "We're Here",
  },
  ar: {
    heading: "اعثر علينا بالقرب منك",
    subheading: "موقع مناسب في قلب المدينة. زرنا اليوم أو اتصل بنا.",
    ctaPrimary: "احصل على الاتجاهات",
    ctaSecondary: "اتصل الآن",
    address: "طريق الملك فهد، الرياض 12271",
    phone: "+966 11 234 5678",
    hours: "الأحد–الخميس: 8ص – 10م",
    pin: "نحن هنا",
  },
};

// Generate a CSS city grid
const GRID_SIZE = 8;
const cityGrid: number[][] = [];
for (let r = 0; r < GRID_SIZE; r++) {
  const row: number[] = [];
  for (let c = 0; c < GRID_SIZE; c++) {
    row.push(Math.random() > 0.3 ? Math.floor(Math.random() * 3) + 1 : 0);
  }
  cityGrid.push(row);
}
// Place the pin at center-ish
const PIN_ROW = 3;
const PIN_COL = 4;

export function ServiceLocation({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pinBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pinPulse {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(3); opacity: 0; }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .pin-bounce { animation: pinBounce 2s ease-in-out infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-orange-50/30">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            {/* Text side */}
            <div className={isAr ? "lg:order-2 text-right" : ""}>
              <h1
                className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.1s" }}
              >
                {t.heading}
              </h1>

              <p
                className="fade-up mt-6 text-lg text-gray-500 leading-relaxed max-w-md"
                style={{ animationDelay: "0.2s" }}
              >
                {t.subheading}
              </p>

              {/* Info cards */}
              <div className="fade-up mt-8 space-y-3" style={{ animationDelay: "0.3s" }}>
                <div className={`flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-100 shadow-sm ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-orange-500" />
                  </div>
                  <span className="text-sm text-gray-700">{t.address}</span>
                </div>
                <div className={`flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-100 shadow-sm ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-orange-500" />
                  </div>
                  <span className="text-sm text-gray-700" dir="ltr">{t.phone}</span>
                </div>
                <div className={`flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-100 shadow-sm ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-orange-500" />
                  </div>
                  <span className="text-sm text-gray-700">{t.hours}</span>
                </div>
              </div>

              {/* CTAs */}
              <div
                className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
                >
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className={`inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:border-gray-400 transition-all ${isAr ? "flex-row-reverse" : ""}`}>
                  <Phone size={14} />
                  {t.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Map illustration side */}
            <div className={`relative ${isAr ? "lg:order-1" : ""}`}>
              <div className="fade-up bg-white rounded-2xl border border-gray-100 shadow-lg p-6" style={{ animationDelay: "0.3s" }}>
                <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}>
                  {cityGrid.map((row, r) =>
                    row.map((cell, c) => (
                      <div key={`${r}-${c}`} className="relative aspect-square">
                        <div
                          className="w-full h-full rounded-md"
                          style={{
                            backgroundColor:
                              cell === 0
                                ? "#f9fafb"
                                : cell === 1
                                ? "#fed7aa"
                                : cell === 2
                                ? "#fdba74"
                                : "#fb923c",
                            opacity: cell === 0 ? 1 : 0.3 + cell * 0.15,
                          }}
                        />
                        {/* Pin */}
                        {r === PIN_ROW && c === PIN_COL && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            {/* Pulse ring */}
                            <div
                              className="absolute w-4 h-4 rounded-full bg-orange-500"
                              style={{ animation: "pinPulse 2s ease-out infinite" }}
                            />
                            <div className="pin-bounce relative z-10">
                              <MapPin size={24} className="text-orange-600 fill-orange-500 drop-shadow-md" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
                {/* Pin label */}
                <div className="mt-4 text-center">
                  <span className="text-xs text-orange-500 font-medium">{t.pin}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
