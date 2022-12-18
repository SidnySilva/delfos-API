-- CreateTable
CREATE TABLE "data" (
    "id" TEXT NOT NULL,
    "title" JSONB,
    "series" JSONB[],

    CONSTRAINT "data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "data_id_key" ON "data"("id");
