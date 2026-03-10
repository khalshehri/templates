"use client";

import Link from "next/link";

const templates = [
  { id: "saas-terminal", name: "Developer Terminal", description: "Fake terminal window with deploy animation. Integration logo pills below." },
  { id: "saas-orbit", name: "Product Orbit", description: "Centered icon with orbiting feature planets. Gradient highlight heading." },
  { id: "neural-network", name: "Neural Network", description: "Animated neural network with data pulses flowing through connected nodes." },
  { id: "saas-dashboard", name: "Dashboard", description: "Product dashboard mockup with animated charts and data widgets." },
  { id: "saas-pipeline", name: "CI/CD Pipeline", description: "Animated deployment pipeline with stages flowing left to right." },
  { id: "saas-api", name: "API Explorer", description: "Interactive API endpoint explorer with request/response code blocks." },
  { id: "saas-cloud", name: "Cloud Infrastructure", description: "Cloud architecture diagram with connected services and data flow." },
  { id: "saas-metrics", name: "SaaS Metrics", description: "Key SaaS metrics dashboard with MRR, churn, and growth indicators." },
  { id: "saas-integration", name: "Integrations Hub", description: "Connected integration logos with data sync animation between services." },
  { id: "saas-pricing", name: "Pricing Table", description: "Interactive pricing tier comparison with feature highlights and toggle." },
];

export default function SaasIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back</Link>
        <h1 className="text-2xl font-bold mt-4">SaaS & Product</h1>
        <p className="text-gray-400 text-sm mt-1">Modern, technical, product-forward. For software products, AI tools, dev tools.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/saas/${t.id}`} className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-violet-500/50 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
