/*
  Warnings:

  - Added the required column `order` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Stand` table without a default value. This is not possible if the table is not empty.
  - Made the column `phone` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Category" ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Stand" ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "phone" DROP DEFAULT;
