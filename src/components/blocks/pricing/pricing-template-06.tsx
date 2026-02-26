"use client";

/**
 * Pricing Template 06 — Minimal Flat
 * Ultra-flat design. No shadows, no rounded corners. Thin borders only.
 * Price in large mono font. Features as a clean list. Minimal color, just primary for CTA.
 */

import { Check } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { PricingConfig } from "./types";

export function PricingTemplate06({ config, language }: BlockProps) {
  const c = config as PricingConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mb-16 ${isAr ? "text-right mr-0 ml-auto" : ""}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-0">
          {c.plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 border border-gray-200 ${
                i > 0 ? "md:border-l-0" : ""
              } ${plan.highlighted ? "bg-gray-50" : "bg-white"}`}
            >
              {/* Badge */}
              {plan.badge && (
                <span
                  className="text-xs font-semibold uppercase tracking-wider mb-4 inline-block"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {isAr ? plan.badgeAr || plan.badge : plan.badge}
                </span>
              )}

              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {isAr ? plan.nameAr : plan.name}
              </h3>
              {plan.description && (
                <p className="mt-1 text-sm text-gray-400">
                  {isAr
                    ? plan.descriptionAr || plan.description
                    : plan.description}
                </p>
              )}

              <div className="mt-6 mb-8">
                <span className="text-5xl font-bold text-gray-900 font-mono tracking-tighter">
                  {plan.priceMonthly === 0
                    ? isAr
                      ? "مجاني"
                      : "Free"
                    : plan.priceMonthly}
                </span>
                {plan.priceMonthly > 0 && (
                  <span className="text-sm text-gray-400 font-mono">
                    {" "}
                    {isAr ? c.currencyAr : c.currency}/{isAr ? "شهر" : "mo"}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {(isAr ? plan.featuresAr : plan.features).map((feature, fi) => (
                  <li
                    key={fi}
                    className={`flex items-start gap-2.5 ${
                      isAr ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <Check
                      size={16}
                      className="shrink-0 mt-0.5 text-gray-400"
                    />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="w-full py-3 px-6 font-medium text-sm text-white transition-opacity duration-200 hover:opacity-90"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {isAr ? plan.ctaAr : plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
