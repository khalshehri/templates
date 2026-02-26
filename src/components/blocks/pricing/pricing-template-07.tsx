"use client";

/**
 * Pricing Template 07 — Tabs Layout
 * Each plan as a tab. Click to switch between plans. Only one plan visible at a time.
 * Large card with all details. Uses useState for active tab.
 */

import { useState } from "react";
import { Check } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { PricingConfig } from "./types";

export function PricingTemplate07({ config, language }: BlockProps) {
  const c = config as PricingConfig;
  const isAr = language === "ar";
  const defaultIndex = c.plans.findIndex((p) => p.highlighted);
  const [activeTab, setActiveTab] = useState(
    defaultIndex >= 0 ? defaultIndex : 0
  );

  const activePlan = c.plans[activeTab];
  if (!activePlan) return null;

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Tabs */}
        <div
          className={`flex justify-center gap-1 p-1 rounded-xl bg-gray-100 mb-10 ${
            isAr ? "flex-row-reverse" : ""
          }`}
        >
          {c.plans.map((plan, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === i
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {isAr ? plan.nameAr : plan.name}
            </button>
          ))}
        </div>

        {/* Active Plan Card */}
        <div
          className="rounded-2xl border-2 p-8 sm:p-12 transition-all duration-300"
          style={
            activePlan.highlighted
              ? { borderColor: "var(--theme-primary)" }
              : { borderColor: "#e5e7eb" }
          }
        >
          {/* Badge */}
          {activePlan.badge && (
            <div className="mb-4">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {isAr
                  ? activePlan.badgeAr || activePlan.badge
                  : activePlan.badge}
              </span>
            </div>
          )}

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              {isAr ? activePlan.nameAr : activePlan.name}
            </h3>
            {activePlan.description && (
              <p className="mt-2 text-gray-500">
                {isAr
                  ? activePlan.descriptionAr || activePlan.description
                  : activePlan.description}
              </p>
            )}

            <div className="mt-6">
              <span className="text-6xl font-bold text-gray-900">
                {activePlan.priceMonthly === 0
                  ? isAr
                    ? "مجاني"
                    : "Free"
                  : activePlan.priceMonthly}
              </span>
              {activePlan.priceMonthly > 0 && (
                <span className="text-lg text-gray-400">
                  {" "}
                  {isAr ? c.currencyAr : c.currency}/{isAr ? "شهر" : "mo"}
                </span>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {(isAr ? activePlan.featuresAr : activePlan.features).map(
              (feature, fi) => (
                <div
                  key={fi}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    isAr ? "flex-row-reverse text-right" : ""
                  }`}
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--theme-primary) 5%, transparent)",
                  }}
                >
                  <Check
                    size={18}
                    className="shrink-0"
                    style={{ color: "var(--theme-primary)" }}
                  />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              )
            )}
          </div>

          {/* CTA */}
          <button
            className="w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: "var(--theme-primary)" }}
          >
            {isAr ? activePlan.ctaAr : activePlan.cta}
          </button>
        </div>
      </div>
    </div>
  );
}
