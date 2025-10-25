"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCallback, useMemo, useState } from "react";

export function ContactDialog({
  triggerLabel,
  note,
  consentLabel,
  submitLabel,
  companyLabel,
  toEmail = "contact@vndefi.asia",
}: {
  triggerLabel: string;
  note: string;
  consentLabel: string;
  submitLabel: string;
  companyLabel: string;
  toEmail?: string;
}) {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState("");
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
        <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 transition">
          {triggerLabel}
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{triggerLabel}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="dlg-company">{companyLabel}</Label>
            <Input id="dlg-company" type="text" placeholder="Mon Café" value={company} onChange={(e) => setCompany(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dlg-email">Email</Label>
            <Input id="dlg-email" type="email" inputMode="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dlg-wa">WhatsApp (optionnel)</Label>
            <Input id="dlg-wa" type="tel" inputMode="tel" placeholder="+84 ..." value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
          </div>
          <div className="flex items-center gap-2">
            <input id="dlg-consent" type="checkbox" className="h-4 w-4" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            <Label htmlFor="dlg-consent" className="text-sm">{consentLabel}</Label>
          </div>
          <p className="text-xs text-muted-foreground">{note}</p>
          <div>
            <button
              type="button"
              onClick={onSubmit}
              disabled={!isValid}
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 transition disabled:opacity-60"
            >
              {submitLabel}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
