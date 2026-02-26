"use client";

/**
 * Clients Template 05 — Logo Cloud
 * Scattered cloud layout with varied sizes creating an organic cloud feel
 */

import type { BlockProps } from "@/types/blocks";
import type { ClientsConfig } from "./types";

export function ClientsTemplate05({ config, language }: BlockProps) {
  const c = config as ClientsConfig;
  const isAr = language === "ar";

  // Cycle through sizes for organic feel
  const sizes = ["text-lg", "text-2xl", "text-xl", "text-3xl", "text-lg", "text-xl"];
  const imgSizes = ["h-6", "h-10", "h-8", "h-12", "h-6", "h-8"];

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

        {/* Cloud layout */}
        <div className="mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 sm:gap-y-8">
          {c.items.map((client, i) => {
            const sizeIdx = i % sizes.length;
            return (
              <div
                key={i}
                className="flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`${imgSizes[sizeIdx]} object-contain`}
                  />
                ) : (
                  <span
                    className={`${sizes[sizeIdx]} font-bold text-gray-900 tracking-tight`}
                  >
                    {client.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
