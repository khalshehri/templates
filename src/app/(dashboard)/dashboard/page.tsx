"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Pencil,
  Trash2,
  Globe,
  Loader2,
  LayoutDashboard,
} from "lucide-react";

interface Site {
  id: string;
  name: string;
  slug: string;
  industry: string;
  language: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default function DashboardPage() {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchSites = async () => {
    const res = await fetch("/api/sites");
    const data = await res.json();
    setSites(data.sites || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchSites();
  }, []);

  const handleDelete = async (siteId: string) => {
    if (!confirm("Are you sure you want to delete this site?")) return;

    setDeleting(siteId);
    await fetch(`/api/sites/${siteId}`, { method: "DELETE" });
    setSites((prev) => prev.filter((s) => s.id !== siteId));
    setDeleting(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Sites</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and edit your websites
          </p>
        </div>
        <Link href="/dashboard/new">
          <Button className="gap-1.5">
            <Plus size={16} />
            Create New Site
          </Button>
        </Link>
      </div>

      {sites.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
          <LayoutDashboard className="mx-auto h-12 w-12 text-gray-300 mb-4" />
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            No sites yet
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Create your first website by picking an industry template.
          </p>
          <Link href="/dashboard/new">
            <Button className="gap-1.5">
              <Plus size={16} />
              Create Your First Site
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sites.map((site) => (
            <div
              key={site.id}
              className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{site.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{site.slug}</p>
                </div>
                <Badge
                  variant={
                    site.status === "published" ? "default" : "secondary"
                  }
                  className="text-[10px]"
                >
                  {site.status}
                </Badge>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="text-[10px]">
                  {site.industry}
                </Badge>
                <Badge variant="outline" className="text-[10px]">
                  <Globe size={10} className="mr-1" />
                  {site.language.toUpperCase()}
                </Badge>
              </div>

              <p className="text-xs text-gray-400 mb-4">
                Updated{" "}
                {new Date(site.updatedAt).toLocaleDateString()}
              </p>

              <div className="flex items-center gap-2">
                <Link href={`/dashboard/${site.id}/editor`} className="flex-1">
                  <Button variant="default" size="sm" className="w-full gap-1">
                    <Pencil size={14} />
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(site.id)}
                  disabled={deleting === site.id}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  {deleting === site.id ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Trash2 size={14} />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
