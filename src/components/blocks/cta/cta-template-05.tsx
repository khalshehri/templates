"use client";

/**
 * CTA Template 05 — Newsletter Style
 * Email input field + submit button layout. Heading, description, then inline form.
 * Visual only (no actual form submit), creates newsletter feel.
 */

import { Mail, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { CtaConfig } from "./types";

export function CtaTemplate05({ config, language }: BlockProps) {
  const c = config as CtaConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
            }}
          >
            <Mail size={24} style={{ color: "var(--theme-primary)" }} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            {isAr ? c.descriptionAr : c.description}
          </p>

          {/* Newsletter Form */}
          <div
            className={`mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto ${
              isAr ? "sm:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 relative">
              <Mail
                size={18}
                className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${
                  isAr ? "right-4" : "left-4"
                }`}
              />
              <input
                type="email"
                readOnly
                placeholder={
                  isAr ? "أدخل بريدك الإلكتروني" : "Enter your email"
                }
                className={`w-full px-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent ${
                  isAr ? "pr-12 text-right" : "pl-12"
                }`}
                style={
                  { "--tw-ring-color": "var(--theme-primary)" } as React.CSSProperties
                }
              />
            </div>
            <a
              href={c.buttonUrl}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold hover:opacity-90 hover:shadow-lg transition-all duration-200 whitespace-nowrap ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              {isAr ? c.buttonTextAr : c.buttonText}
              <ArrowRight
                size={18}
                className={isAr ? "rotate-180" : ""}
              />
            </a>
          </div>

          {/* Secondary link */}
          {c.secondaryButtonText && (
            <p className="mt-4 text-sm text-gray-400">
              <a
                href={c.secondaryButtonUrl || "#"}
                className="underline hover:text-gray-600 transition-colors"
              >
                {isAr
                  ? c.secondaryButtonTextAr || c.secondaryButtonText
                  : c.secondaryButtonText}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
