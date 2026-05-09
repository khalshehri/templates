"use client";

import type { BlockProps } from "@/types/blocks";
import type { FooterConfig } from "./types";

export function FooterTemplate02({ config, language }: BlockProps) {
  const c = config as FooterConfig;
  const isAr = language === "ar";
  const logoText = isAr ? c.logoAr : c.logo;
  const isLogoImage = logoText.startsWith("/") || logoText.startsWith("http");

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* CTA Band */}
      <div
        className="py-12"
        style={{ backgroundColor: "var(--theme-primary)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {isAr ? "جاهز للبدء؟" : "Ready to get started?"}
          </h3>
          <p className="mt-2 text-white/80 text-lg">
            {isAr
              ? "ابنِ موقعك الآن مجاناً"
              : "Build your website now for free"}
          </p>
          <a
            href="#"
            className="inline-flex items-center mt-6 px-8 py-3.5 bg-white rounded-full text-sm font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
            style={{ color: "var(--theme-primary)" }}
          >
            {isAr ? "ابدأ مجاناً" : "Start Free"}
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {isLogoImage ? (
              <img src={logoText} alt="" className="h-8 object-contain" />
            ) : (
              <span
                className="text-lg font-bold"
                style={{ color: "var(--theme-primary)" }}
              >
                {logoText}
              </span>
            )}
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">
              {isAr ? c.descriptionAr : c.description}
            </span>
          </div>

          <div className="flex items-center gap-6">
            {c.columns.flatMap((col) =>
              col.links.slice(0, 2).map((link, j) => (
                link && (
                  <a
                    key={`${col.title}-${j}`}
                    href={link.url || "#"}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {isAr ? link.labelAr : link.label}
                  </a>
                )
              ))
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-400">
            {isAr ? c.copyrightAr : c.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
