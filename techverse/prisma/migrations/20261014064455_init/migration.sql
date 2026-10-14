-- CreateEnum
CREATE TYPE "ValidationStatus" AS ENUM ('confirmed', 'reported', 'unverified');

-- CreateEnum
CREATE TYPE "LifecycleStatus" AS ENUM ('current', 'discontinued', 'announced');

-- CreateTable
CREATE TABLE "ProductFamily" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "lines" JSONB NOT NULL,
    "sources" JSONB NOT NULL,
    "gaps" TEXT[],

    CONSTRAINT "ProductFamily_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductGeneration" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "familyId" TEXT NOT NULL,
    "line" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "ProductGeneration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductModel" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "familyId" TEXT NOT NULL,
    "generationId" TEXT NOT NULL,
    "line" TEXT NOT NULL,
    "aliases" TEXT[],
    "announced" TEXT,
    "released" TEXT,
    "discontinued" TEXT,
    "status" "LifecycleStatus" NOT NULL,
    "statusNote" TEXT,
    "summary" TEXT NOT NULL,
    "highlights" TEXT[],
    "identifiers" TEXT[],
    "storageGB" INTEGER[],
    "ramGB" INTEGER[],
    "chips" TEXT[],
    "screenInches" DOUBLE PRECISION,
    "sizes" TEXT[],
    "connectivity" TEXT[],
    "connector" TEXT,
    "os" TEXT,
    "dimensions" JSONB NOT NULL,
    "visual" JSONB NOT NULL,
    "validationStatus" "ValidationStatus" NOT NULL DEFAULT 'unverified',
    "reviewedAt" TEXT,
    "validationNotes" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "modelNumber" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "region" TEXT,
    "connectivity" TEXT,
    "note" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSpecification" (
    "id" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "groupLabel" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "status" "ValidationStatus",
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ProductSpecification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductColor" (
    "id" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameFr" TEXT,
    "hex" TEXT NOT NULL,
    "finish" TEXT,
    "material" TEXT,
    "note" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ProductColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "license" TEXT NOT NULL,
    "credit" TEXT NOT NULL,
    "colorName" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductAsset3D" (
    "id" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "license" TEXT NOT NULL,
    "credit" TEXT NOT NULL,
    "isExact" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,

    CONSTRAINT "ProductAsset3D_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCompatibility" (
    "id" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "targetSlug" TEXT NOT NULL,
    "note" TEXT,

    CONSTRAINT "ProductCompatibility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductPrice" (
    "id" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "market" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "config" TEXT,
    "date" TEXT NOT NULL,
    "status" "ValidationStatus" NOT NULL DEFAULT 'unverified',
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ProductPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSource" (
    "id" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "checkedAt" TEXT,
    "status" "ValidationStatus" NOT NULL DEFAULT 'unverified',
    "note" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ProductSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PendingProduct" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "sources" JSONB NOT NULL,

    CONSTRAINT "PendingProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actor" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "details" JSONB,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductFamily_slug_key" ON "ProductFamily"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProductGeneration_slug_key" ON "ProductGeneration"("slug");

-- CreateIndex
CREATE INDEX "ProductGeneration_familyId_year_idx" ON "ProductGeneration"("familyId", "year");

-- CreateIndex
CREATE UNIQUE INDEX "ProductModel_slug_key" ON "ProductModel"("slug");

-- CreateIndex
CREATE INDEX "ProductModel_familyId_idx" ON "ProductModel"("familyId");

-- CreateIndex
CREATE INDEX "ProductModel_generationId_idx" ON "ProductModel"("generationId");

-- CreateIndex
CREATE INDEX "ProductModel_status_idx" ON "ProductModel"("status");

-- CreateIndex
CREATE INDEX "ProductVariant_modelNumber_idx" ON "ProductVariant"("modelNumber");

-- CreateIndex
CREATE INDEX "ProductVariant_modelId_idx" ON "ProductVariant"("modelId");

-- CreateIndex
CREATE INDEX "ProductSpecification_modelId_group_idx" ON "ProductSpecification"("modelId", "group");

-- CreateIndex
CREATE INDEX "ProductColor_modelId_idx" ON "ProductColor"("modelId");

-- CreateIndex
CREATE INDEX "ProductCompatibility_targetSlug_idx" ON "ProductCompatibility"("targetSlug");

-- CreateIndex
CREATE INDEX "AuditLog_entity_entityId_idx" ON "AuditLog"("entity", "entityId");

-- CreateIndex
CREATE INDEX "AuditLog_at_idx" ON "AuditLog"("at");

-- AddForeignKey
ALTER TABLE "ProductGeneration" ADD CONSTRAINT "ProductGeneration_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "ProductFamily"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductModel" ADD CONSTRAINT "ProductModel_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "ProductFamily"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductModel" ADD CONSTRAINT "ProductModel_generationId_fkey" FOREIGN KEY ("generationId") REFERENCES "ProductGeneration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "ProductModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSpecification" ADD CONSTRAINT "ProductSpecification_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "ProductModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductColor" ADD CONSTRAINT "ProductColor_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "ProductModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "ProductModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAsset3D" ADD CONSTRAINT "ProductAsset3D_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "ProductModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCompatibility" ADD CONSTRAINT "ProductCompatibility_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "ProductModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPrice" ADD CONSTRAINT "ProductPrice_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "ProductModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSource" ADD CONSTRAINT "ProductSource_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "ProductModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
