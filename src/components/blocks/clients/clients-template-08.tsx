"use client";

/**
 * Clients Template 08 — Glass Tiles
 * Glass-effect tiles in a grid with hover lift and shadow
 */

import type { BlockProps } from "@/types/blocks";
import type { ClientsConfig } from "./types";

export function ClientsTemplate08({ config, language }: BlockProps) {
  const c = config as ClientsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
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

        {/* Glass tiles grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {c.items.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-6 sm:p-8 rounded-xl bg-white/50 backdrop-blur border border-white/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 cursor-default"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-7 sm:h-9 object-contain"
                />
              ) : (
                <span className="text-sm sm:text-base font-bold text-gray-600 text-center">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
