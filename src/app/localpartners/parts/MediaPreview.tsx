"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

type MediaPreviewProps = {
  type: "image" | "video";
  src: string;
  thumbnailSrc?: string;
  label?: string;
  className?: string;
};

export function MediaPreview({ type, src, thumbnailSrc, label, className }: MediaPreviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className={`group w-full text-left ${className ?? ""}`} aria-label={label ?? "Preview"}>
          <AspectRatio ratio={type === "image" ? 4 / 3 : 16 / 9}>
            {type === "image" ? (
              <div className="relative h-full w-full overflow-hidden rounded-md border border-border">
                <img
                  src={src}
                  alt={label ?? "Image"}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ) : (
              <div className="relative h-full w-full overflow-hidden rounded-md border border-border">
                <video
                  src={src}
                  poster={thumbnailSrc}
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            )}
          </AspectRatio>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl p-0">
        <DialogTitle className="sr-only">{label ?? (type === "image" ? "Image preview" : "Video preview")}</DialogTitle>
        {type === "image" ? (
          <div className="max-h-[80vh] w-full overflow-auto">
            <img src={src} alt={label ?? "Image"} className="h-auto w-full" />
          </div>
        ) : (
          <AspectRatio ratio={16 / 9}>
            <video src={src} controls playsInline className="h-full w-full rounded-b-md object-cover" />
          </AspectRatio>
        )}
      </DialogContent>
    </Dialog>
  );
}
