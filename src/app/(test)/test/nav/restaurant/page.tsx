"use client";
import Link from "next/link";

const templates = [
  { id: "nav-restaurant-menu", name: "Menu Focused", description: "\"Our Menu\" as prominent link/CTA. Warm colors, food categories visible." },
  { id: "nav-restaurant-chef", name: "Chef Hat", description: "Chef hat CSS icon near logo. Warm cream bg, dark brown text, rustic serif font." },
  { id: "nav-restaurant-elegant", name: "Fine Dining", description: "Fine dining style: thin serif, dark bg, gold accents, minimal links." },
  { id: "nav-restaurant-rustic", name: "Rustic Farmhouse", description: "Brown/earth tones, wooden texture CSS gradient bg, thick borders." },
  { id: "nav-restaurant-modern", name: "Modern Bistro", description: "Clean white, black text, one accent color (teal), minimal. Contemporary." },
  { id: "nav-restaurant-sushi", name: "Japanese Sushi", description: "Japanese-inspired minimal: clean, lots of whitespace, thin lines, zen aesthetic." },
  { id: "nav-restaurant-pizza", name: "Italian Pizza", description: "Italian themed: warm red/green accents on cream bg. Playful, family-friendly." },
  { id: "nav-restaurant-cafe", name: "Coffee Shop", description: "Brown/cream palette, coffee bean icon, cozy warm feel." },
  { id: "nav-restaurant-bar", name: "Bar & Lounge", description: "Dark bg, amber/whiskey colors, moody lighting feel. Sophisticated." },
  { id: "nav-restaurant-reserve", name: "Reservation CTA", description: "\"Reserve a Table\" as large prominent CTA button. Booking-focused." },
];

export default function RestaurantNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          &larr; Back
        </Link>
        <h1 className="text-2xl font-bold mt-4">Restaurant &amp; Food Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">
          Warm, inviting navbars for restaurants, cafes, and food businesses.
        </p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/restaurant/${t.id}`}
              className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-orange-500/50 transition-colors"
            >
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
