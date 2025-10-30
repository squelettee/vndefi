"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useCallback, useMemo, useState } from "react";

export function ContactDialog({
  triggerLabel,
  title,
  note,
  consentLabel,
  submitLabel,
  companyLabel,
  addressLabel,
  emailLabel,
  whatsappLabel,
  toEmail = "contact@vndefi.asia",
}: {
  triggerLabel: string;
  title?: string;
  note: string;
  consentLabel: string;
  submitLabel: string;
  companyLabel: string;
  addressLabel?: string;
  emailLabel?: string;
  whatsappLabel?: string;
  toEmail?: string;
}) {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consent, setConsent] = useState(false);

  const isValid = useMemo(() => company.trim().length > 1 && email.trim().length > 3 && consent, [company, email, consent]);

  const onSubmit = useCallback(() => {
    if (!isValid) return;
    const subject = encodeURIComponent(`[Partner Contact] ${company}`);
    const lines = [
      `Hello,`,
      ``,
      `I confirm I accept receiving the QR flyer and wish to join the program.`,
      `Business name: ${company}`,
      address ? `Business address: ${address}` : undefined,
      `Email: ${email}`,
      whatsapp ? `WhatsApp: ${whatsapp}` : undefined,
    ].filter(Boolean).join("%0D%0A");

    const href = `mailto:${toEmail}?subject=${subject}&body=${lines}`;
    window.location.href = href;
    setOpen(false);
  }, [company, email, whatsapp, isValid, toEmail]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title ?? triggerLabel}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="dlg-company">{companyLabel}</Label>
            <Input id="dlg-company" type="text" placeholder="Mon Café" value={company} onChange={(e) => setCompany(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dlg-address">{addressLabel ?? "Business Address"}</Label>
            <Input id="dlg-address" type="text" placeholder="123 Lê Lợi, Đà Nẵng" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dlg-email">{emailLabel ?? "Email"}</Label>
            <Input id="dlg-email" type="email" inputMode="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dlg-wa">{whatsappLabel ?? "WhatsApp / Zalo (optional)"}</Label>
            <Input id="dlg-wa" type="tel" inputMode="tel" placeholder="+84 ..." value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="dlg-consent" checked={consent} onCheckedChange={(v) => setConsent(Boolean(v))} />
            <Label htmlFor="dlg-consent" className="text-sm">{consentLabel}</Label>
          </div>
          <p className="text-xs text-muted-foreground">{note}</p>
          <div>
            <Button type="button" onClick={onSubmit} disabled={!isValid}>
              {submitLabel}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
