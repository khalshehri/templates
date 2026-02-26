"use client";

import { Smartphone } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { FooterConfig } from "./types";

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case "twitter":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    default:
      return <span className="text-xs font-medium uppercase">{platform[0]}</span>;
  }
}

export function FooterTemplate10({ config, language }: BlockProps) {
  const c = config as FooterConfig;
  const isAr = language === "ar";

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* App Download Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
          <div
            className={`flex flex-col md:flex-row items-center gap-8 ${isAr ? "md:flex-row-reverse" : ""}`}
          >
            <div className={`flex-1 ${isAr ? "text-right" : ""}`}>
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white">
                  {isAr ? "حمّل التطبيق" : "Get the App"}
                </h3>
              </div>
              <p className="text-sm text-gray-400 max-w-sm">
                {isAr
                  ? "حمّل تطبيقنا على هاتفك واستمتع بتجربة أفضل"
                  : "Download our app for a better mobile experience"}
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-3 ${isAr ? "sm:flex-row-reverse" : ""}`}>
              {/* App Store Button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-xl hover:bg-gray-100 transition-colors"
              >
                <svg className="w-7 h-7 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 leading-tight">
                    {isAr ? "حمّل من" : "Download on the"}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 leading-tight">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-xl hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4" />
                  <path d="M17.556 8.235L5.178.773a1.001 1.001 0 00-1.07.02l9.684 9.684 3.764-2.242z" fill="#34A853" />
                  <path d="M17.556 15.765l-3.764-2.242-9.684 9.684a1.001 1.001 0 001.07.02l12.378-7.462z" fill="#FBBC04" />
                  <path d="M20.778 12c0-.378-.135-.756-.406-1.078L17.556 8.235 13.792 12l3.764 3.765 2.816-2.687c.271-.322.406-.7.406-1.078z" fill="#EA4335" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 leading-tight">
                    {isAr ? "احصل عليه من" : "Get it on"}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 leading-tight">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Columns + Socials */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-${1 + c.columns.length} gap-8 lg:gap-12 ${isAr ? "text-right" : ""}`}
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="text-lg font-bold text-white">
              {isAr ? c.logoAr : c.logo}
            </a>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              {isAr ? c.descriptionAr : c.description}
            </p>
            <div className={`flex items-center gap-3 mt-5 ${isAr ? "flex-row-reverse" : ""}`}>
              {c.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label={social.platform}
                >
                  <SocialIcon platform={social.platform} />
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
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {isAr ? link.labelAr : link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-600 text-center">
            {isAr ? c.copyrightAr : c.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
