"use client";

/**
 * Clients Template 06 — Featured Partners
 * Large cards for each client with border, name prominent, hover primary border
 */

import type { BlockProps } from "@/types/blocks";
import type { ClientsConfig } from "./types";

export function ClientsTemplate06({ config, language }: BlockProps) {
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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {c.items.map((client, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center p-8 sm:p-10 rounded-2xl border-2 border-gray-100 hover:border-transparent transition-all duration-300 cursor-default"
              style={{
                // TypeScript-safe hover border via group
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--theme-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
              }}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 sm:h-14 object-contain mb-4"
                />
              ) : null}
              <span className="text-lg sm:text-xl font-bold text-gray-900 text-center">
                {client.name}
              </span>
              {client.url && (
                <a
                  href={client.url}
                  className="mt-2 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {isAr ? "زيارة" : "Visit"}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
