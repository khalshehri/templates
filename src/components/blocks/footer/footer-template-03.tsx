"use client";

/**
 * Footer Template 03 — Modern Minimal with Newsletter
 * Clean centered layout with newsletter input and minimal links
 */

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { FooterConfig } from "./types";

function SocialIcon({ platform }: { platform: string }) {
  const icons: Record<string, React.ReactNode> = {
    twitter: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    instagram: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    linkedin: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    ),
  };
  return <>{icons[platform] || null}</>;
}

export function FooterTemplate03({ config, language }: BlockProps) {
  const c = config as FooterConfig;
  const isAr = language === "ar";
  const logoText = isAr ? c.logoAr : c.logo;
  const isLogoImage = logoText.startsWith("/") || logoText.startsWith("http");

  return (
    <footer className="bg-gray-950">
      {/* Newsletter section */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              {isAr ? "ابق على اطلاع" : "Stay in the loop"}
            </h3>
            <p className="text-white/40 mb-8">
              {isAr
                ? "اشترك في نشرتنا البريدية للحصول على آخر الأخبار والتحديثات."
                : "Subscribe to our newsletter for the latest news and updates."}
            </p>
            <div className={`flex gap-3 max-w-md mx-auto ${isAr ? "flex-row-reverse" : ""}`}>
              <input
                type="email"
                placeholder={isAr ? "بريدك الإلكتروني" : "Enter your email"}
                className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors"
                dir={isAr ? "rtl" : "ltr"}
              />
              <button
                className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 shrink-0"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                <ArrowRight size={18} className={isAr ? "rotate-180" : ""} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid sm:grid-cols-2 lg:grid-cols-${2 + c.columns.length} gap-10 ${isAr ? "text-right" : ""}`}>
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a
              href="/"
              className="text-xl font-bold text-white"
            >
              {isLogoImage ? (
                <img src={logoText} alt="" className="h-8 object-contain" />
              ) : (
                logoText
              )}
            </a>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xs">
              {isAr ? c.descriptionAr : c.description}
            </p>

            {/* Socials */}
            {c.socials && c.socials.length > 0 && (
              <div className={`flex gap-3 mt-6 ${isAr ? "flex-row-reverse" : ""}`}>
                {c.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link columns */}
          {c.columns.map((col, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                {isAr ? col.titleAr : col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, li) => (
                  <li key={li}>
                    <a
                      href={link.url}
                      className="text-sm text-white/35 hover:text-white transition-colors"
                    >
                      {isAr ? link.labelAr : link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-white/25">
            {isAr ? c.copyrightAr : c.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
