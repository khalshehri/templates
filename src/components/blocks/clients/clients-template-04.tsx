"use client";

/**
 * Clients Template 04 — Marquee Scroll
 * Auto-scrolling horizontal marquee with CSS animation and gradient fade edges
 */

import type { BlockProps } from "@/types/blocks";
import type { ClientsConfig } from "./types";

export function ClientsTemplate04({ config, language }: BlockProps) {
  const c = config as ClientsConfig;
  const isAr = language === "ar";

  // Duplicate items for seamless loop
  const duplicatedItems = [...c.items, ...c.items];

  return (
    <div className="bg-white py-16 sm:py-20 overflow-hidden">
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

      {/* Marquee container */}
      <div className="relative">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex animate-[marquee_30s_linear_infinite]">
          {duplicatedItems.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-8 sm:px-12"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 sm:h-10 object-contain opacity-50 hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="text-xl sm:text-2xl font-bold text-gray-300 hover:text-gray-600 transition-colors whitespace-nowrap">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
