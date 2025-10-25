"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCallback, useState } from "react";

type Lang = "fr" | "en" | "vi";

export function ContactForm({
  shopId,
  shopName,
  lang,
  emailLabel,
  whatsappLabel,
  note,
  submitLabel,
  toEmail = "contact@vndefi.asia",
}: {
  shopId?: string;
  shopName?: string;
  lang: Lang;
  emailLabel: string;
  whatsappLabel: string;
  note: string;
  submitLabel: string;
  toEmail?: string;
}) {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const onSubmit = useCallback(() => {
    // Track intent
    if (shopId) {
      try {
        fetch("/api/track", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ shopId, event: "click_learn_more" }),
          keepalive: true,
        }).catch(() => { });
      } catch { }
    }

    const subject = encodeURIComponent(`[Partner Contact] ${shopName ?? shopId ?? "New partner"}`);
    const lines = [
      `Hello,`,
      ``,
      `I would like to join the local partners program and leave my contact to receive quarterly updates.`,
      email ? `Email: ${email}` : undefined,
      whatsapp ? `WhatsApp: ${whatsapp}` : undefined,
      shopName ? `Business name: ${shopName}` : undefined,
      shopId ? `Shop ID: ${shopId}` : undefined,
      `Preferred language: ${lang.toUpperCase()}`,
      ``,
      `Please keep me updated each quarter: number of affiliated users and potential cashout.`,
    ].filter(Boolean).join("%0D%0A");

    const href = `mailto:${toEmail}?subject=${subject}&body=${lines}`;
    window.location.href = href;
  }, [email, whatsapp, shopId, shopName, lang, toEmail]);

  return (
    <div className="space-y-3">
      <div className="grid gap-2">
        <Label htmlFor="partner-email">{emailLabel}</Label>
        <Input id="partner-email" type="email" inputMode="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="partner-wa">{whatsappLabel}</Label>
        <Input id="partner-wa" type="tel" inputMode="tel" placeholder="+84 ..." value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
      </div>
      <p className="text-xs text-muted-foreground">{note}</p>
      <div>
        <button type="button" onClick={onSubmit} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 transition">
          {submitLabel}
        </button>
      </div>
    </div>
  );
}
