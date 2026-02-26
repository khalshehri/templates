"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { industryTemplates } from "@/config/industry-templates";
import {
  ArrowLeft,
  ArrowRight,
  Loader2,
  Building2,
  Palette,
  User,
  FileText,
  UtensilsCrossed,
  HeartPulse,
  Home,
  Rocket,
  ShoppingCart,
  Calendar,
  Camera,
  Scale,
  Dumbbell,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "building-2": Building2,
  palette: Palette,
  user: User,
  "file-text": FileText,
  utensils: UtensilsCrossed,
  "heart-pulse": HeartPulse,
  home: Home,
  rocket: Rocket,
  "shopping-cart": ShoppingCart,
  calendar: Calendar,
  camera: Camera,
  scale: Scale,
  dumbbell: Dumbbell,
};

export default function NewSitePage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("en");
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");

  const handleCreate = async (industryId: string) => {
    if (!name.trim()) {
      setError("Please enter a site name");
      setStep(1);
      return;
    }

    setCreating(true);
    setError("");

    try {
      const res = await fetch("/api/sites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), industry: industryId, language }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to create site");
        setCreating(false);
        return;
      }

      router.push(`/dashboard/${data.site.id}/editor`);
    } catch {
      setError("Something went wrong");
      setCreating(false);
    }
  };

  return (
    <>
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          <ArrowLeft size={14} />
          Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Create New Site</h1>
        <p className="text-sm text-gray-500 mt-1">
          {step === 1
            ? "Step 1: Enter your site details"
            : "Step 2: Choose an industry template"}
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 text-sm rounded-lg px-4 py-3 mb-6">
          {error}
        </div>
      )}

      {step === 1 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-6 max-w-lg">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="siteName">Site Name</Label>
              <Input
                id="siteName"
                placeholder="My Awesome Website"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </div>

            <div className="space-y-2">
              <Label>Language</Label>
              <div className="flex gap-2">
                {[
                  { value: "en", label: "English" },
                  { value: "ar", label: "العربية" },
                ].map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => setLanguage(lang.value)}
                    className={`flex-1 py-2.5 px-4 rounded-lg border text-sm font-medium transition-all ${
                      language === lang.value
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={() => {
                if (!name.trim()) {
                  setError("Please enter a site name");
                  return;
                }
                setError("");
                setStep(2);
              }}
              className="w-full gap-1.5"
            >
              Continue
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      ) : (
        <>
          {creating && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-700">
                  Creating your site...
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryTemplates.map((template) => {
              const Icon = iconMap[template.icon] || Building2;
              return (
                <button
                  key={template.id}
                  onClick={() => handleCreate(template.id)}
                  disabled={creating}
                  className="bg-white rounded-xl border border-gray-100 p-5 text-left hover:shadow-md hover:border-blue-200 transition-all group disabled:opacity-50"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors"
                    style={{
                      backgroundColor: `${template.defaultTheme.colors.primary}15`,
                      color: template.defaultTheme.colors.primary,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-0.5">
                    {template.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">{template.nameAr}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {template.description}
                  </p>
                  <Badge variant="outline" className="mt-3 text-[10px]">
                    {template.sections.length} sections
                  </Badge>
                </button>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
