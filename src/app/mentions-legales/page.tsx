import type { Metadata } from "next";
import { Suspense } from "react";
import { MentionsContent } from "./sections";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de VNDefi.asia – projet pilote indépendant initié par Baptiste Gresse pour évaluer l'adoption des paiements crypto au Vietnam.",
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-10 sm:py-14">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">🧾 Mentions légales / Legal</h1>
      <Suspense>
        <MentionsContent />
      </Suspense>
    </main>
  );
}


