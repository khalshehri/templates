"use client";

/**
 * Clients Template 09 — Fading Scroll
 * Horizontal scrollable row with gradient fade on edges and hidden scrollbar
 */

import type { BlockProps } from "@/types/blocks";
import type { ClientsConfig } from "./types";

export function ClientsTemplate09({ config, language }: BlockProps) {
  const c = config as ClientsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-16 sm:py-20">
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
      </div>

      {/* Scrollable row with fading edges */}
      <div className="relative">
        {/* Left gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        {/* Right gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div
          className="overflow-x-auto flex items-center gap-10 sm:gap-16 px-16 sm:px-32 py-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {c.items.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 sm:h-10 object-contain opacity-50 hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="text-lg sm:text-xl font-bold text-gray-300 hover:text-gray-700 transition-colors whitespace-nowrap">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
