"use client";

/**
 * Clients Template 10 — Two-Row Grid
 * Two rows of clients — top row scrolls left, bottom row scrolls right
 */

import type { BlockProps } from "@/types/blocks";
import type { ClientsConfig } from "./types";

export function ClientsTemplate10({ config, language }: BlockProps) {
  const c = config as ClientsConfig;
  const isAr = language === "ar";

  // Split items into two rows; duplicate each for seamless loop
  const halfIdx = Math.ceil(c.items.length / 2);
  const topRow = c.items.slice(0, halfIdx);
  const bottomRow = c.items.slice(halfIdx);
  const topDuplicated = [...topRow, ...topRow];
  const bottomDuplicated = [...bottomRow, ...bottomRow];

  return (
    <div className="bg-white py-16 sm:py-24 overflow-hidden">
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

      {/* Top row — scrolls left */}
      <div className="relative mb-4 sm:mb-6">
        <div className="flex animate-[scrollLeft_25s_linear_infinite]">
          {topDuplicated.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-8 sm:px-12 py-4"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 sm:h-10 object-contain opacity-40 hover:opacity-100 transition-opacity"
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

      {/* Bottom row — scrolls right */}
      <div className="relative">
        <div className="flex animate-[scrollRight_25s_linear_infinite]">
          {bottomDuplicated.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-8 sm:px-12 py-4"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 sm:h-10 object-contain opacity-40 hover:opacity-100 transition-opacity"
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
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
