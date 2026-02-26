"use client";

import type { BlockProps } from "@/types/blocks";
import type { FooterConfig } from "./types";

const platformColors: Record<string, string> = {
  twitter: "#1DA1F2",
  instagram: "#E4405F",
  linkedin: "#0A66C2",
  facebook: "#1877F2",
  youtube: "#FF0000",
  tiktok: "#000000",
  github: "#333333",
};

export function FooterTemplate05({ config, language }: BlockProps) {
  const c = config as FooterConfig;
  const isAr = language === "ar";

  return (
    <footer
      className="text-white"
      style={{
        background: "linear-gradient(to bottom, #111827, #030712)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top Section: Logo + Description + Columns */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${1 + c.columns.length} gap-10 lg:gap-12 ${isAr ? "text-right" : ""}`}
        >
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" className="text-2xl font-bold text-white">
              {isAr ? c.logoAr : c.logo}
            </a>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
              {isAr ? c.descriptionAr : c.description}
            </p>

            {/* Socials - Colorful Circles */}
            <div className={`flex items-center gap-3 mt-8 ${isAr ? "flex-row-reverse" : ""}`}>
              {c.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold uppercase transition-transform hover:scale-110"
                  style={{
                    backgroundColor:
                      platformColors[social.platform] || "var(--theme-primary)",
                  }}
                  aria-label={social.platform}
                >
                  {social.platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {c.columns.map((col, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {isAr ? col.titleAr : col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.url}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {isAr ? link.labelAr : link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500 text-center">
            {isAr ? c.copyrightAr : c.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
