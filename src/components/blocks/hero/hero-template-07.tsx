"use client";

/**
 * Hero Template 07 — Personal Intro / Resume
 * Best for: Freelancer, Personal brand, Portfolio, Resume/CV
 * Features: Personal photo, animated role text (typed effect via CSS),
 *           social links, greeting text, download CV button
 */

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

function SocialIcon({ platform }: { platform: string }) {
  const icons: Record<string, React.ReactNode> = {
    github: <Github size={18} />,
    linkedin: <Linkedin size={18} />,
    mail: <Mail size={18} />,
    twitter: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    instagram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  };
  return <>{icons[platform] || <Mail size={18} />}</>;
}

export function HeroTemplate07({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  const roles = isAr ? c.typedTextsAr : c.typedTexts;
  const displayRole = roles && roles.length > 0 ? roles[0] : (isAr ? "مطور ويب" : "Web Developer");

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[150px] opacity-10"
          style={{ backgroundColor: "var(--theme-primary)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full blur-[120px] opacity-10"
          style={{ backgroundColor: "var(--theme-secondary, #7C3AED)" }}
        />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className={`grid lg:grid-cols-5 gap-16 items-center ${isAr ? "" : ""}`}>
          {/* Text content — larger area */}
          <div className={`lg:col-span-3 ${isAr ? "lg:order-2 text-right" : ""}`}>
            {/* Greeting */}
            <div className={`flex items-center gap-3 mb-6 ${isAr ? "flex-row-reverse" : ""}`}>
              <span className="text-2xl">👋</span>
              <span className="text-white/60 text-lg">
                {isAr ? "مرحباً، أنا" : "Hey there, I'm"}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
              {isAr ? c.headingAr : c.heading}
            </h1>

            {/* Role with accent color */}
            <div className={`mt-4 flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="w-8 h-1 rounded-full" style={{ backgroundColor: "var(--theme-primary)" }} />
              <span
                className="text-xl sm:text-2xl font-semibold"
                style={{ color: "var(--theme-primary)" }}
              >
                {displayRole}
              </span>
            </div>

            {/* Multiple roles display */}
            {roles && roles.length > 1 && (
              <div className={`mt-3 flex flex-wrap gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                {roles.slice(1).map((role, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm border border-white/10 text-white/50"
                  >
                    {role}
                  </span>
                ))}
              </div>
            )}

            {/* Bio */}
            <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-xl">
              {isAr ? c.subheadingAr : c.subheading}
            </p>

            {/* CTAs */}
            {(c.ctaPrimary || c.ctaSecondary) && (
              <div className={`mt-10 flex flex-wrap gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
                {c.ctaPrimary && (
                  <a
                    href={c.ctaPrimary.url || "#"}
                    className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5 ${
                      isAr ? "flex-row-reverse" : ""
                    }`}
                    style={{ backgroundColor: "var(--theme-primary)" }}
                  >
                    {isAr ? c.ctaPrimary.textAr : c.ctaPrimary.text}
                    <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                  </a>
                )}
                {c.ctaSecondary && (
                  <a
                    href={c.ctaSecondary.url || "#"}
                    className={`inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white/70 rounded-xl border border-white/15 hover:bg-white/5 transition-all ${
                      isAr ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Download size={16} />
                    {isAr ? c.ctaSecondary.textAr : c.ctaSecondary.text}
                  </a>
                )}
              </div>
            )}

            {/* Social links */}
            {c.socials && c.socials.length > 0 && (
              <div className={`mt-10 flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
                <span className="text-xs uppercase tracking-widest text-white/30">
                  {isAr ? "تابعني" : "Follow me"}
                </span>
                <div className="w-8 h-px bg-white/10" />
                {c.socials.map((social, i) => (
                  social && (
                    <a
                      key={i}
                      href={social.url || "#"}
                      className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                    >
                      <SocialIcon platform={social.platform || ""} />
                    </a>
                  )
                ))}
              </div>
            )}
          </div>

          {/* Photo side */}
          <div className={`lg:col-span-2 ${isAr ? "lg:order-1" : ""}`}>
            <div className="relative mx-auto max-w-sm">
              {/* Gradient ring behind photo */}
              <div
                className="absolute -inset-2 rounded-3xl blur-lg opacity-30"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, #7C3AED))`,
                }}
              />

              {/* Photo */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-white/10">
                {c.personalPhoto ? (
                  <img
                    src={c.personalPhoto}
                    alt={isAr ? c.headingAr : c.heading}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, var(--theme-primary) 30%, #1e293b), #1e293b)`,
                    }}
                  >
                    <div className="text-center">
                      <div className="text-8xl font-bold text-white/10">
                        {(isAr ? c.headingAr : c.heading).charAt(0)}
                      </div>
                      <p className="text-white/20 text-sm mt-2">{isAr ? "صورتك هنا" : "Your photo"}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-3 -left-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-white font-bold text-lg">{c.stats?.[0]?.value || "5+"}</p>
                <p className="text-white/50 text-xs">{isAr ? (c.stats?.[0]?.labelAr || "سنوات خبرة") : (c.stats?.[0]?.label || "Years Exp.")}</p>
              </div>

              {/* Projects badge */}
              {c.stats && c.stats.length > 1 && (
                <div className="absolute -top-3 -right-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
                  <p className="text-white font-bold text-lg">{c.stats[1].value}</p>
                  <p className="text-white/50 text-xs">{isAr ? c.stats[1].labelAr : c.stats[1].label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
