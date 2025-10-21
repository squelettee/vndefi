-- CreateTable
CREATE TABLE "ShopStat" (
    "shopId" TEXT NOT NULL,
    "pageViews" INTEGER NOT NULL DEFAULT 0,
    "clicksAppStore" INTEGER NOT NULL DEFAULT 0,
    "clicksGooglePlay" INTEGER NOT NULL DEFAULT 0,
    "clicksLearnMore" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopStat_pkey" PRIMARY KEY ("shopId")
);
