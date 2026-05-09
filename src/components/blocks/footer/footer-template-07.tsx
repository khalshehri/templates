"use client";

import type { BlockProps } from "@/types/blocks";
import type { FooterConfig } from "./types";

const platformLabels: Record<string, { en: string; ar: string }> = {
  twitter: { en: "Twitter", ar: "تويتر" },
  instagram: { en: "Instagram", ar: "انستغرام" },
  linkedin: { en: "LinkedIn", ar: "لينكدإن" },
  facebook: { en: "Facebook", ar: "فيسبوك" },
  youtube: { en: "YouTube", ar: "يوتيوب" },
  tiktok: { en: "TikTok", ar: "تيك توك" },
  github: { en: "GitHub", ar: "جيت هاب" },
};

export function FooterTemplate07({ config, language }: BlockProps) {
  const c = config as FooterConfig;
  const isAr = language === "ar";

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Social Focus Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10">
          <h3 className="text-lg font-semibold text-gray-900">
            {isAr ? "تابعنا على" : "Follow us on"}
          </h3>
        </div>

        {/* Large Social Icons Grid */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          {c.socials.map((social, i) => (
            social && (
              <a
                key={i}
                href={social.url || "#"}
                className="group flex flex-col items-center gap-2"
                aria-label={social.platform}
              >
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold uppercase transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {social.platform?.[0] || ""}
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-900 transition-colors capitalize">
                  {isAr
                    ? platformLabels[social.platform]?.ar || social.platform
                    : platformLabels[social.platform]?.en || social.platform}
                </span>
              </a>
            )
          ))}
        </div>
      </div>

      {/* Columns + Links */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-${Math.max(c.columns.length, 3)} gap-8 ${isAr ? "text-right" : ""}`}
          >
            {c.columns.map((col, i) => (
              <div key={i}>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {isAr ? col.titleAr : col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link, j) => (
                    link && (
                      <li key={j}>
                        <a
                          href={link.url || "#"}
                          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                          {isAr ? link.labelAr : link.label}
                        </a>
                      </li>
                    )
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-gray-400 text-center">
            {isAr ? c.copyrightAr : c.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
