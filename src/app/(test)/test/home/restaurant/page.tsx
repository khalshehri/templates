"use client";
import Link from "next/link";

const templates = [
  { id: "kitchen-flame", name: "Kitchen Flame", description: "Cooking fire + steam with warm appetizing tones" },
  { id: "restaurant-chef", name: "Restaurant Chef", description: "Chef silhouette with kitchen backdrop and culinary tools." },
  { id: "restaurant-menu", name: "Restaurant Menu", description: "Elegant menu card with handwritten-style typography" },
  { id: "restaurant-oven", name: "Restaurant Oven", description: "Brick oven with warm glow and baking ambiance." },
  { id: "restaurant-plate", name: "Restaurant Plate", description: "Minimalist plate presentation with garnish details" },
  { id: "restaurant-spice", name: "Restaurant Spice", description: "Scattered spices and herbs with aromatic visual feel" },
  { id: "restaurant-table", name: "Restaurant Table", description: "Overhead table setting with plates, cutlery, and ambiance" },
  { id: "restaurant-wine", name: "Restaurant Wine", description: "Wine glass with swirling liquid and vineyard atmosphere." },
  { id: "restaurant-sushi", name: "Restaurant Sushi", description: "Japanese sushi platter with chopsticks and bamboo mat." },
  { id: "restaurant-garden", name: "Restaurant Garden", description: "Outdoor garden dining with string lights and greenery." },
];

export default function RestaurantCategory() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back to Home Experiments</Link>
        <h1 className="text-2xl font-bold mt-4 mb-6">Restaurant & Food</h1>
        <div className="grid gap-3">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/restaurant/${t.id}`} className="bg-gray-900 border border-orange-500/30 hover:border-orange-500/60 rounded-xl p-4 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
