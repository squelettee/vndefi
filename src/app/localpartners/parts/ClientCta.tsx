"use client";

import { useCallback, useEffect } from "react";

export function ClientCta({ href, label, shopId }: { href: string; label: string; shopId?: string }) {
  useEffect(() => {
    if (!shopId) return;
    try {
      fetch("/api/track", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ shopId, event: "page_view" }),
        keepalive: true,
      }).catch(() => { });
    } catch { }
  }, [shopId]);

  const onClick = useCallback(() => {
    if (!shopId) return;
    try {
      fetch("/api/track", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ shopId, event: "click_learn_more" }),
        keepalive: true,
      }).catch(() => { });
    } catch { }
  }, [shopId]);

  return (
    <a
      href={href}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 transition"
    >
      {label}
    </a>
  );
}
