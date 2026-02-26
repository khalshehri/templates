"use client";

/**
 * Clients Template 12 — Bordered Grid
 * Strong bordered grid with thick left border in primary color, client name in bold
 */

import type { BlockProps } from "@/types/blocks";
import type { ClientsConfig } from "./types";

export function ClientsTemplate12({ config, language }: BlockProps) {
  const c = config as ClientsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          {(c.subheading || c.subheadingAr) && (
            <p className="mt-2 text-gray-500">
              {isAr ? c.subheadingAr : c.subheading}
            </p>
          )}
        </div>

        {/* Bordered grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {c.items.map((client, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-5 sm:p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors ${
                isAr ? "border-r-4" : "border-l-4"
              }`}
              style={{
                borderColor: "var(--theme-primary)",
              }}
            >
              {client.logo && (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 sm:h-10 object-contain shrink-0"
                />
              )}
              <span className="text-base sm:text-lg font-bold text-gray-900">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
