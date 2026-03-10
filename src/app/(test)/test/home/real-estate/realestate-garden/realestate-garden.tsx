"use client";

/**
 * Garden/Landscape Hero
 * Lush garden with parallax depth layers. Outdoor living visualization
 * with layered greenery, pathway, and ambient nature feel.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Outdoor Living",
    heading: "Your Private",
    headingHighlight: "Garden Oasis",
    subheading:
      "Landscaped gardens, private terraces, and lush green spaces. Where urban living meets natural serenity.",
    ctaPrimary: "Explore Residences",
    ctaSecondary: "Virtual Tour",
    layers: ["Mature Trees", "Flower Gardens", "Stone Pathway", "Water Feature"],
    amenities: [
      { name: "Private Garden", size: "200 m²" },
      { name: "Rooftop Terrace", size: "80 m²" },
      { name: "Infinity Pool", size: "25 m" },
      { name: "Walking Trails", size: "1.2 km" },
    ],
  },
  ar: {
    badge: "حياة في الهواء الطلق",
    heading: "واحتك",
    headingHighlight: "الخضراء الخاصة",
    subheading:
      "حدائق مُنسّقة، شرفات خاصة، ومساحات خضراء وارفة. حيث تلتقي الحياة الحضرية بسكينة الطبيعة.",
    ctaPrimary: "استكشف المساكن",
    ctaSecondary: "جولة افتراضية",
    layers: ["أشجار ناضجة", "حدائق زهور", "ممر حجري", "نافورة مائية"],
    amenities: [
      { name: "حديقة خاصة", size: "200 م²" },
      { name: "شرفة علوية", size: "80 م²" },
      { name: "مسبح إنفينيتي", size: "25 م" },
      { name: "مسارات المشي", size: "1.2 كم" },
    ],
  },
};

export function RealestateGarden({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes layerParallax1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes layerParallax2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes layerParallax3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        @keyframes leafSway {
          0%, 100% { transform: rotate(-2deg) translateX(0); }
          50% { transform: rotate(2deg) translateX(3px); }
        }
        @keyframes waterRipple {
          0% { transform: scaleX(1); opacity: 0.2; }
          50% { transform: scaleX(1.1); opacity: 0.4; }
          100% { transform: scaleX(1); opacity: 0.2; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060d08]">
        {/* Nature ambient glow */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-emerald-950/20 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.1) 0%, rgba(245,158,11,0.05) 50%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className={isAr ? "lg:order-2 text-right" : "lg:order-1"}>
              <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-sm font-medium mb-8"
                style={{ animationDelay: "0.1s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.badge}
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s" }}>
                {t.heading}
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  {t.headingHighlight}
                </span>
              </h1>

              <p className="fade-up mt-6 text-lg text-white/35 max-w-md leading-relaxed"
                style={{ animationDelay: "0.3s" }}>
                {t.subheading}
              </p>

              <div className={`fade-up mt-8 flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.4s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-yellow-400 rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Amenities */}
              <div className="fade-up mt-10 grid grid-cols-2 gap-3"
                style={{ animationDelay: "0.5s" }}>
                {t.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-emerald-500/10">
                    <span className="text-xs text-white/40">{amenity.name}</span>
                    <span className="text-xs text-amber-400/50 font-mono">{amenity.size}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Garden layers */}
            <div className={`relative ${isAr ? "lg:order-1" : "lg:order-2"}`}>
              <div className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-2xl overflow-hidden border border-emerald-500/10"
                style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
                {/* Sky layer */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-indigo-950/80 via-purple-950/30 to-transparent" />

                {/* Background trees layer */}
                <div className="absolute bottom-0 left-0 right-0 h-4/5" style={{ animation: "layerParallax1 6s ease-in-out infinite" }}>
                  <svg viewBox="0 0 300 200" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
                    {/* Tree canopies (back) */}
                    <ellipse cx="60" cy="60" rx="50" ry="40" fill="rgba(22,101,52,0.3)" style={{ animation: "leafSway 4s ease-in-out infinite" } as React.CSSProperties} />
                    <ellipse cx="180" cy="50" rx="60" ry="45" fill="rgba(21,128,61,0.25)" style={{ animation: "leafSway 5s ease-in-out 0.5s infinite" } as React.CSSProperties} />
                    <ellipse cx="280" cy="65" rx="45" ry="35" fill="rgba(22,101,52,0.2)" style={{ animation: "leafSway 4.5s ease-in-out 1s infinite" } as React.CSSProperties} />
                    {/* Trunks */}
                    <rect x="55" y="80" width="6" height="40" rx="3" fill="rgba(120,53,15,0.2)" />
                    <rect x="175" y="75" width="7" height="50" rx="3" fill="rgba(120,53,15,0.15)" />
                  </svg>
                </div>

                {/* Mid bushes/flowers layer */}
                <div className="absolute bottom-0 left-0 right-0 h-3/5" style={{ animation: "layerParallax2 5s ease-in-out infinite" }}>
                  <svg viewBox="0 0 300 150" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
                    {/* Flower beds */}
                    <ellipse cx="40" cy="80" rx="35" ry="20" fill="rgba(34,197,94,0.15)" />
                    <ellipse cx="140" cy="85" rx="40" ry="18" fill="rgba(74,222,128,0.1)" />
                    <ellipse cx="240" cy="78" rx="30" ry="22" fill="rgba(34,197,94,0.12)" />
                    {/* Flower dots */}
                    {Array.from({ length: 15 }).map((_, i) => (
                      <circle key={i}
                        cx={20 + (i * 43) % 260}
                        cy={70 + (i * 17) % 30}
                        r={2 + i % 2}
                        fill={i % 3 === 0 ? "rgba(251,191,36,0.2)" : i % 3 === 1 ? "rgba(248,113,113,0.15)" : "rgba(196,181,253,0.15)"}
                      />
                    ))}
                  </svg>
                </div>

                {/* Foreground / pathway layer */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5" style={{ animation: "layerParallax3 7s ease-in-out infinite" }}>
                  <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
                    {/* Ground */}
                    <rect x="0" y="40" width="300" height="60" fill="rgba(22,101,52,0.1)" />
                    {/* Stone path */}
                    <path d="M120,100 Q130,80 150,70 Q170,60 160,40" fill="none" stroke="rgba(245,158,11,0.1)" strokeWidth="15" strokeLinecap="round" />
                    {/* Water feature */}
                    <ellipse cx="220" cy="65" rx="25" ry="10" fill="rgba(59,130,246,0.08)"
                      style={{ animation: "waterRipple 3s ease-in-out infinite" } as React.CSSProperties} />
                    <ellipse cx="220" cy="65" rx="15" ry="6" fill="rgba(96,165,250,0.06)" />
                  </svg>
                </div>

                {/* Ambient light overlay */}
                <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-amber-500/[0.03] to-transparent" />
              </div>

              {/* Layer labels */}
              <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
                {t.layers.map((layer, i) => (
                  <span key={i} className="text-[10px] text-white/15 flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-green-700/40" : i === 1 ? "bg-pink-400/20" : i === 2 ? "bg-amber-500/20" : "bg-blue-400/20"}`} />
                    {layer}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
