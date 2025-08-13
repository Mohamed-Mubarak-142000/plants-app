/*
  Warnings:

  - Added the required column `descriptionAr` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionEn` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Category" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "descriptionAr" TEXT NOT NULL,
ADD COLUMN     "descriptionEn" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
