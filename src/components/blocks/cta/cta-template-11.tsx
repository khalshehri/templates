"use client";

/**
 * CTA Template 11 — Stats + CTA
 * Stats row at top (3-4 impressive numbers) then heading, description, and CTA button below.
 * Combines social proof with call-to-action.
 */

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { CtaConfig } from "./types";

export function CtaTemplate11({ config, language }: BlockProps) {
  const c = config as CtaConfig;
  const isAr = language === "ar";

  const stats = isAr
    ? [
        { value: "+10,000", label: "عميل نشط" },
        { value: "99.9%", label: "وقت التشغيل" },
        { value: "+50", label: "دولة" },
        { value: "24/7", label: "دعم فني" },
      ]
    : [
        { value: "10,000+", label: "Active Clients" },
        { value: "99.9%", label: "Uptime" },
        { value: "50+", label: "Countries" },
        { value: "24/7", label: "Support" },
      ];

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ${
            isAr ? "text-right" : ""
          }`}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--theme-primary)" }}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-16" />

        {/* CTA Content */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            {isAr ? c.descriptionAr : c.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={c.buttonUrl}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg hover:opacity-90 hover:shadow-lg transition-all duration-200 ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              {isAr ? c.buttonTextAr : c.buttonText}
              <ArrowRight
                size={20}
                className={isAr ? "rotate-180" : ""}
              />
            </a>

            {c.secondaryButtonText && (
              <a
                href={c.secondaryButtonUrl || "#"}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 font-semibold text-lg hover:shadow-md transition-all duration-200"
                style={{
                  borderColor: "var(--theme-primary)",
                  color: "var(--theme-primary)",
                }}
              >
                {isAr
                  ? c.secondaryButtonTextAr || c.secondaryButtonText
                  : c.secondaryButtonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
