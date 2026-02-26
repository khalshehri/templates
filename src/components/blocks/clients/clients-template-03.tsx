"use client";

/**
 * Clients Template 03 — Modern Grid Cards
 * Clean grid of branded cards with subtle hover lift
 */

import type { BlockProps } from "@/types/blocks";
import type { ClientsConfig } from "./types";

export function ClientsTemplate03({ config, language }: BlockProps) {
  const c = config as ClientsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {c.items.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:shadow-gray-100/50 hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-7 sm:h-8 object-contain"
                />
              ) : (
                <span className="text-base font-bold text-gray-400 hover:text-gray-900 transition-colors text-center">
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
