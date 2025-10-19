import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type EventType = "page_view" | "click_app_store" | "click_google_play" | "click_learn_more"

export async function POST(request: Request) {
  try {
    const { shopId, event } = (await request.json()) as { shopId?: string; event?: EventType }
    if (!shopId || !event) return NextResponse.json({ ok: false, error: "Missing shopId or event" }, { status: 400 })

    await prisma.shopStat.upsert({
      where: { shopId },
      create: {
        shopId,
        pageViews: event === "page_view" ? 1 : 0,
        clicksAppStore: event === "click_app_store" ? 1 : 0,
        clicksGooglePlay: event === "click_google_play" ? 1 : 0,
        clicksLearnMore: event === "click_learn_more" ? 1 : 0,
      },
      update: {
        pageViews: { increment: event === "page_view" ? 1 : 0 },
        clicksAppStore: { increment: event === "click_app_store" ? 1 : 0 },
        clicksGooglePlay: { increment: event === "click_google_play" ? 1 : 0 },
        clicksLearnMore: { increment: event === "click_learn_more" ? 1 : 0 },
      },
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 })
  }
}


