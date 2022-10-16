-- CreateTable
CREATE TABLE "Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "urlHash" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Job_urlHash_key" ON "Job"("urlHash");
