"use client";

/**
 * Clients Template 11 — Dark Banner
 * Dark background with white client names/logos, full-width, generous spacing
 */

import type { BlockProps } from "@/types/blocks";
import type { ClientsConfig } from "./types";

export function ClientsTemplate11({ config, language }: BlockProps) {
  const c = config as ClientsConfig;
  const isAr = language === "ar";

  return (
    <div
      className="py-16 sm:py-20"
      style={{ backgroundColor: "var(--theme-foreground, #111)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-white/50 uppercase tracking-widest">
            {isAr ? c.headingAr : c.heading}
          </p>
          {(c.subheading || c.subheadingAr) && (
            <p className="mt-1 text-sm text-white/40">
              {isAr ? c.subheadingAr : c.subheading}
            </p>
          )}
        </div>

        {/* Client row */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-16 lg:gap-x-20 gap-y-8">
          {c.items.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 sm:h-10 object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="text-lg sm:text-xl font-bold text-white/50 hover:text-white transition-colors">
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
