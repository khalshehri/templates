"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, ImageIcon, Upload, X, Loader2 } from "lucide-react";
import { useDebouncedCallback } from "@/hooks/use-debounced-callback";
import type { FieldDescriptor } from "@/lib/schema-introspect";

interface Props {
  field: FieldDescriptor;
  value: string;
  onChange: (value: string) => void;
}

const IMAGE_KEYS = [
  "image",
  "photo",
  "logo",
  "avatar",
  "backgroundimage",
  "coverimage",
  "thumbnail",
  "personalphoto",
  "icon",
  "banner",
  "picture",
];

export function UrlField({ field, value, onChange }: Props) {
  const [local, setLocal] = useState(value ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isImage = IMAGE_KEYS.some((k) =>
    field.key.toLowerCase().includes(k)
  );

  useEffect(() => {
    setLocal(value ?? "");
  }, [value]);

  const debouncedChange = useDebouncedCallback((v: string) => {
    onChange(v);
  }, 300);

  const handleFileUpload = async (file: File) => {
    setError(null);
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Upload failed");
        return;
      }

      setLocal(data.url);
      onChange(data.url);
    } catch {
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const clearValue = () => {
    setLocal("");
    onChange("");
    setError(null);
  };

  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium text-gray-500">
        {field.label}
      </Label>

      {/* URL Input */}
      <div className="relative">
        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
          {isImage ? <ImageIcon size={14} /> : <Link size={14} />}
        </div>
        <Input
          value={local}
          onChange={(e) => {
            setLocal(e.target.value);
            debouncedChange(e.target.value);
            setError(null);
          }}
          placeholder={isImage ? "Image URL or upload below..." : "https://..."}
          className="h-9 text-sm pl-8 pr-8"
        />
        {local && (
          <button
            onClick={clearValue}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Upload Area (for image fields) */}
      {isImage && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="relative border-2 border-dashed border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer"
        >
          {/* Image Preview */}
          {local && !uploading ? (
            <div className="relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={local}
                alt="Preview"
                className="w-full h-24 object-cover rounded-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="px-2.5 py-1 text-[11px] font-medium bg-white text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Replace
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    clearValue();
                  }}
                  className="px-2.5 py-1 text-[11px] font-medium bg-white text-red-600 rounded-md hover:bg-red-50 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="w-full py-4 flex flex-col items-center gap-1.5"
            >
              {uploading ? (
                <Loader2 size={18} className="text-blue-500 animate-spin" />
              ) : (
                <Upload size={18} className="text-gray-400" />
              )}
              <span className="text-[11px] text-gray-400">
                {uploading
                  ? "Uploading..."
                  : "Drop image here or click to upload"}
              </span>
              <span className="text-[10px] text-gray-300">
                JPEG, PNG, WebP, GIF, SVG up to 5MB
              </span>
            </button>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/gif,image/webp,image/svg+xml,image/avif"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileUpload(file);
              e.target.value = "";
            }}
            className="hidden"
          />
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-[11px] text-red-500">{error}</p>
      )}
    </div>
  );
}
