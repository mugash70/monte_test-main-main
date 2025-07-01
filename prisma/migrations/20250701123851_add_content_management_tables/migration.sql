-- CreateTable
CREATE TABLE "Translation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "locale" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "JoinUs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "content" TEXT,
    "type" TEXT NOT NULL,
    "category" TEXT,
    "location" TEXT,
    "salary" TEXT,
    "contact" TEXT,
    "contactNumber" TEXT,
    "requirements" TEXT,
    "responsibilities" TEXT,
    "image" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "PartyBuilding" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "content" TEXT,
    "mainImage" TEXT,
    "contentImages" TEXT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "source" TEXT,
    "views" INTEGER NOT NULL DEFAULT 0,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "DevelopmentHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "achievements" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "CollaborativeProject" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "content" TEXT,
    "type" TEXT NOT NULL,
    "image" TEXT,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "contactName" TEXT,
    "address" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Translation_locale_key_key" ON "Translation"("locale", "key");

-- CreateIndex
CREATE UNIQUE INDEX "JoinUs_slug_key" ON "JoinUs"("slug");

-- CreateIndex
CREATE INDEX "JoinUs_type_idx" ON "JoinUs"("type");

-- CreateIndex
CREATE INDEX "JoinUs_locale_idx" ON "JoinUs"("locale");

-- CreateIndex
CREATE INDEX "JoinUs_published_idx" ON "JoinUs"("published");

-- CreateIndex
CREATE INDEX "JoinUs_slug_idx" ON "JoinUs"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PartyBuilding_slug_key" ON "PartyBuilding"("slug");

-- CreateIndex
CREATE INDEX "PartyBuilding_slug_idx" ON "PartyBuilding"("slug");

-- CreateIndex
CREATE INDEX "PartyBuilding_locale_idx" ON "PartyBuilding"("locale");

-- CreateIndex
CREATE INDEX "PartyBuilding_published_idx" ON "PartyBuilding"("published");

-- CreateIndex
CREATE INDEX "PartyBuilding_date_idx" ON "PartyBuilding"("date");

-- CreateIndex
CREATE INDEX "DevelopmentHistory_year_idx" ON "DevelopmentHistory"("year");

-- CreateIndex
CREATE INDEX "DevelopmentHistory_locale_idx" ON "DevelopmentHistory"("locale");

-- CreateIndex
CREATE INDEX "DevelopmentHistory_published_idx" ON "DevelopmentHistory"("published");

-- CreateIndex
CREATE UNIQUE INDEX "DevelopmentHistory_year_locale_key" ON "DevelopmentHistory"("year", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "CollaborativeProject_slug_key" ON "CollaborativeProject"("slug");

-- CreateIndex
CREATE INDEX "CollaborativeProject_type_idx" ON "CollaborativeProject"("type");

-- CreateIndex
CREATE INDEX "CollaborativeProject_locale_idx" ON "CollaborativeProject"("locale");

-- CreateIndex
CREATE INDEX "CollaborativeProject_published_idx" ON "CollaborativeProject"("published");

-- CreateIndex
CREATE INDEX "CollaborativeProject_slug_idx" ON "CollaborativeProject"("slug");

-- RedefineIndex
DROP INDEX "sqlite_autoindex_News_1";
CREATE UNIQUE INDEX "News_slug_key" ON "News"("slug");
