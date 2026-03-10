"use client";

/**
 * Product Stage Hero
 * Dramatic spotlight effect with a product on a reflective dark surface.
 * Volumetric light beams, orbiting badges, floating dust motes,
 * and a glassmorphism info panel. Premium luxury feeling.
 */

import { ArrowRight, ShoppingBag, Star, Truck, Shield, Sparkles } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Exclusive Collection",
    heading: "Crafted for",
    headingHighlight: "Perfection",
    subheading: "Where artistry meets precision. Each piece tells a story of uncompromising luxury.",
    ctaPrimary: "Shop Now",
    ctaSecondary: "View Collection",
    product: {
      name: "Premium Leather Bag",
      price: "$249",
      originalPrice: "$349",
      rating: "4.9",
      reviews: "2.3K",
      tag: "Bestseller",
      material: "Italian Leather",
      edition: "Limited Edition",
    },
    perks: [
      { icon: "truck", label: "Free Shipping" },
      { icon: "shield", label: "2-Year Warranty" },
    ],
    brands: ["Zara", "H&M", "Nike", "Adidas", "Gucci"],
  },
  ar: {
    badge: "مجموعة حصرية",
    heading: "صُنعت من أجل",
    headingHighlight: "الكمال",
    subheading: "حيث يلتقي الفن بالدقة. كل قطعة تحكي قصة فخامة لا هوادة فيها.",
    ctaPrimary: "تسوق الآن",
    ctaSecondary: "تصفح المجموعة",
    product: {
      name: "حقيبة جلدية فاخرة",
      price: "$249",
      originalPrice: "$349",
      rating: "4.9",
      reviews: "2.3K",
      tag: "الأكثر مبيعاً",
      material: "جلد إيطالي",
      edition: "إصدار محدود",
    },
    perks: [
      { icon: "truck", label: "شحن مجاني" },
      { icon: "shield", label: "ضمان سنتين" },
    ],
    brands: ["زارا", "اتش اند ام", "نايك", "أديداس", "غوتشي"],
  },
};

const perkIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  truck: Truck,
  shield: Shield,
};

// Dust motes — tiny bright particles drifting upward
const DUST_MOTES = Array.from({ length: 14 }, (_, i) => ({
  x: 10 + Math.random() * 80,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 8,
  size: 1.5 + Math.random() * 2.5,
  opacity: 0.15 + Math.random() * 0.35,
  drift: -20 + Math.random() * 40,
}));

export function EcommerceShowcase({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes dustRise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: var(--mote-opacity); }
          90% { opacity: var(--mote-opacity); }
          100% { transform: translateY(-100vh) translateX(var(--mote-drift)); opacity: 0; }
        }
        @keyframes orbitPrice {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(12px, -18px) rotate(2deg); }
          50% { transform: translate(0, -24px) rotate(0deg); }
          75% { transform: translate(-12px, -18px) rotate(-2deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes orbitRating {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-14px, 12px) rotate(-2deg); }
          50% { transform: translate(0, 20px) rotate(0deg); }
          75% { transform: translate(14px, 12px) rotate(2deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes panelSlide {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes panelSlideRtl {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spotlightPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .fade-in { animation: fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .orbit-price { animation: orbitPrice 6s ease-in-out infinite; }
        .orbit-rating { animation: orbitRating 7s ease-in-out infinite; }
        .panel-slide { animation: panelSlide 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .panel-slide-rtl { animation: panelSlideRtl 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .scroll-x { animation: scrollX 20s linear infinite; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#0c0c0c" }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Spotlight cone from above */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80vw",
            height: "120vh",
            background: "conic-gradient(from 0deg at 50% 0%, transparent 30%, rgba(212,168,83,0.06) 40%, rgba(212,168,83,0.12) 50%, rgba(212,168,83,0.06) 60%, transparent 70%)",
            animation: "spotlightPulse 6s ease-in-out infinite",
          }}
        />

        {/* Volumetric light beams */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0, right: "15%", width: "2px", height: "70vh",
            background: "linear-gradient(180deg, rgba(212,168,83,0.2), transparent)",
            transform: "rotate(12deg)",
            transformOrigin: "top center",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0, left: "20%", width: "3px", height: "60vh",
            background: "linear-gradient(180deg, rgba(212,168,83,0.1), transparent)",
            transform: "rotate(-8deg)",
            transformOrigin: "top center",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0, right: "35%", width: "1.5px", height: "50vh",
            background: "linear-gradient(180deg, rgba(232,160,160,0.12), transparent)",
            transform: "rotate(5deg)",
            transformOrigin: "top center",
          }}
        />

        {/* Dust motes */}
        {DUST_MOTES.map((mote, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${mote.x}%`,
              bottom: "5%",
              width: mote.size,
              height: mote.size,
              background: `radial-gradient(circle, rgba(212,168,83,${mote.opacity}), transparent)`,
              boxShadow: `0 0 ${mote.size * 2}px rgba(212,168,83,${mote.opacity * 0.5})`,
              ["--mote-opacity" as string]: mote.opacity,
              ["--mote-drift" as string]: `${mote.drift}px`,
              animation: `dustRise ${mote.duration}s linear infinite`,
              animationDelay: `${mote.delay}s`,
            }}
          />
        ))}

        {/* Floor reflection gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(212,168,83,0.03), transparent)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(212,168,83,0.15), transparent)" }} />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text side */}
            <div className={isAr ? "lg:order-2" : ""}>
              {/* Badge */}
              <div
                className="fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
                style={{
                  animationDelay: "0.1s",
                  background: "rgba(212,168,83,0.08)",
                  border: "1px solid rgba(212,168,83,0.15)",
                  color: "#d4a853",
                }}
              >
                <Sparkles size={14} />
                {t.badge}
              </div>

              <h1
                className="fade-in text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="text-white/80">{t.heading}</span>
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #d4a853, #e8a0a0, #d4a853)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "shimmer 4s linear infinite",
                  }}
                >
                  {t.headingHighlight}
                </span>
              </h1>

              <p
                className="fade-in mt-6 text-lg leading-relaxed max-w-md"
                style={{ animationDelay: "0.3s", color: "rgba(255,255,255,0.3)" }}
              >
                {t.subheading}
              </p>

              {/* CTAs */}
              <div
                className="fade-in mt-8 flex gap-4"
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl transition-all hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #d4a853, #c4943f)",
                    color: "#0c0c0c",
                    boxShadow: "0 4px 20px rgba(212,168,83,0.25)",
                  }}
                >
                  <ShoppingBag size={16} />
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a
                  href="#"
                  className="px-7 py-3.5 text-sm font-semibold rounded-xl transition-all hover:bg-white/[0.06]"
                  style={{ color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Perks */}
              <div
                className="fade-in mt-8 flex gap-6"
                style={{ animationDelay: "0.5s" }}
              >
                {t.perks.map((perk, i) => {
                  const Icon = perkIcons[perk.icon] || Truck;
                  return (
                    <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>
                      <Icon size={16} className="text-[#d4a853]" />
                      {perk.label}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Product Stage side */}
            <div className={`relative flex items-center justify-center ${isAr ? "lg:order-1" : ""}`}>
              {/* Product area with reflection */}
              <div className="fade-in relative" style={{ animationDelay: "0.3s" }}>
                {/* Main product placeholder */}
                <div
                  className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, rgba(212,168,83,0.08), rgba(30,30,30,0.9))",
                    border: "1px solid rgba(212,168,83,0.12)",
                    boxShadow: "0 0 60px rgba(212,168,83,0.08), 0 20px 60px rgba(0,0,0,0.5)",
                  }}
                >
                  <ShoppingBag size={48} style={{ color: "rgba(212,168,83,0.2)" }} />
                  {/* Inner glow at top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, rgba(212,168,83,0.06), transparent)" }}
                  />
                </div>

                {/* Reflection (mirrored product) */}
                <div
                  className="w-72 h-32 sm:w-80 sm:h-40 rounded-2xl overflow-hidden pointer-events-none"
                  style={{
                    transform: "scaleY(-1)",
                    background: "linear-gradient(145deg, rgba(212,168,83,0.03), rgba(20,20,20,0.3))",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)",
                    opacity: 0.4,
                    marginTop: "2px",
                  }}
                />

                {/* Bestseller tag */}
                <div
                  className="absolute top-4 rounded-full text-xs font-bold px-3 py-1"
                  style={{
                    [isAr ? "right" : "left"]: "16px",
                    background: "linear-gradient(135deg, #d4a853, #c4943f)",
                    color: "#0c0c0c",
                  }}
                >
                  {t.product.tag}
                </div>

                {/* Orbiting price badge */}
                <div
                  className="orbit-price absolute -top-4 rounded-xl px-4 py-2.5"
                  style={{
                    [isAr ? "left" : "right"]: "-16px",
                    background: "rgba(20,20,20,0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(212,168,83,0.2)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  }}
                >
                  <span className="text-lg font-bold" style={{ color: "#d4a853" }}>{t.product.price}</span>
                  <span className="text-sm line-through" style={{ color: "rgba(255,255,255,0.2)", marginInlineStart: "8px" }}>{t.product.originalPrice}</span>
                </div>

                {/* Orbiting rating badge */}
                <div
                  className="orbit-rating absolute rounded-xl px-4 py-2.5 flex items-center gap-1.5"
                  style={{
                    bottom: "35%",
                    [isAr ? "right" : "left"]: "-24px",
                    background: "rgba(20,20,20,0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(212,168,83,0.2)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  }}
                >
                  <Star size={14} style={{ color: "#d4a853", fill: "#d4a853" }} />
                  <span className="text-sm font-bold text-white">{t.product.rating}</span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>({t.product.reviews})</span>
                </div>

                {/* Glassmorphism info panel */}
                <div
                  className={isAr ? "panel-slide-rtl" : "panel-slide"}
                  style={{
                    position: "absolute",
                    bottom: "38%",
                    [isAr ? "left" : "right"]: "-110px",
                    animationDelay: "0.8s",
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    padding: "20px",
                    width: "180px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#d4a853" }}>
                    {t.product.material}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{t.product.name}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{t.product.edition}</div>
                  {/* Tiny gold line */}
                  <div className="mt-3 h-px w-full" style={{ background: "linear-gradient(90deg, #d4a853, transparent)" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Brand logos scroll */}
          <div className="fade-in mt-20 overflow-hidden" style={{ animationDelay: "0.6s" }}>
            <p className="text-xs text-center uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.15)" }}>
              {isAr ? "علامات تجارية مميزة" : "Featured Brands"}
            </p>
            <div className="overflow-hidden">
              <div className="scroll-x flex gap-12 w-max" style={{ direction: "ltr" }}>
                {[...t.brands, ...t.brands, ...t.brands].map((brand, i) => (
                  <div key={i} className="text-lg font-bold whitespace-nowrap" style={{ color: "rgba(212,168,83,0.1)" }}>
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
