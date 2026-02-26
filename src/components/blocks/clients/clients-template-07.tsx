"use client";

/**
 * Clients Template 07 — Minimal Dots
 * Client names in a single line separated by bullet dots, clean minimal style
 */

import type { BlockProps } from "@/types/blocks";
import type { ClientsConfig } from "./types";

export function ClientsTemplate07({ config, language }: BlockProps) {
  const c = config as ClientsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
            {isAr ? c.headingAr : c.heading}
          </p>
          {(c.subheading || c.subheadingAr) && (
            <p className="mt-1 text-sm text-gray-400">
              {isAr ? c.subheadingAr : c.subheading}
            </p>
          )}
        </div>

        {/* Dot-separated names */}
        <div className="flex flex-wrap items-center justify-center gap-y-3">
          {c.items.map((client, i) => (
            <span key={i} className="flex items-center">
              {client.url ? (
                <a
                  href={client.url}
                  className="text-base sm:text-lg font-medium text-gray-400 hover:text-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {client.name}
                </a>
              ) : (
                <span className="text-base sm:text-lg font-medium text-gray-400">
                  {client.name}
                </span>
              )}
              {i < c.items.length - 1 && (
                <span className="mx-3 sm:mx-4 text-gray-300 text-lg select-none">&middot;</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
