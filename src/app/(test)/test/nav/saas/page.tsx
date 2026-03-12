"use client";
import Link from "next/link";
const templates = [
  { id: "nav-saas-modern", name: "Modern Pill", description: "Clean nav with pill-shaped active link indicator, gradient CTA." },
  { id: "nav-saas-terminal", name: "Terminal Style", description: "Terminal/code-style with monospace font, green-on-black text." },
  { id: "nav-saas-dark", name: "Dark Grid", description: "Dark theme with subtle dot-grid background pattern." },
  { id: "nav-saas-glass", name: "Floating Glass", description: "Floating glass bar centered with glassmorphism effect." },
  { id: "nav-saas-gradient", name: "Gradient Accent", description: "Clean bar with gradient accent line at bottom." },
  { id: "nav-saas-command", name: "Command Palette", description: "Nav with ⌘K command palette hint button." },
  { id: "nav-saas-product", name: "Product Nav", description: "Product-focused with features dropdown on hover." },
  { id: "nav-saas-api", name: "API Docs", description: "Developer docs style with version badge." },
  { id: "nav-saas-dashboard", name: "Dashboard Bar", description: "Dashboard-like top bar with breadcrumb nav." },
  { id: "nav-saas-minimal", name: "Super Minimal", description: "Super minimal: logo + 3 links + sign in text." },
];
export default function SaasNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">← Back</Link>
        <h1 className="text-2xl font-bold mt-4">SaaS & Product Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">Modern, technical, product-forward navbar designs.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/nav/saas/${t.id}`} className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-violet-500/50 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
