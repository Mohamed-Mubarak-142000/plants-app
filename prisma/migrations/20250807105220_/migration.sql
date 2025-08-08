/*
  Warnings:

  - You are about to drop the column `name_ar` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `name_en` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `description_ar` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `description_en` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name_ar` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name_en` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `description_ar` on the `Stand` table. All the data in the column will be lost.
  - You are about to drop the column `description_en` on the `Stand` table. All the data in the column will be lost.
  - You are about to drop the column `name_ar` on the `Stand` table. All the data in the column will be lost.
  - You are about to drop the column `name_en` on the `Stand` table. All the data in the column will be lost.
  - You are about to drop the column `name_Ar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name_En` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_OrderToOrderQuantity` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nameAr` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameEn` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `orderId` to the `OrderQuantity` table without a default value. This is not possible if the table is not empty.
  - Made the column `productId` on table `OrderQuantity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `OrderQuantity` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `descriptionAr` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionEn` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameAr` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameEn` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionAr` to the `Stand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionEn` to the `Stand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameAr` to the `Stand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameEn` to the `Stand` table without a default value. This is not possible if the table is not empty.
  - Made the column `productId` on table `Stand` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `nameAr` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameEn` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `role` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('ADMIN', 'CUSTOMER', 'SELLER');

-- DropForeignKey
ALTER TABLE "public"."Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."OrderQuantity" DROP CONSTRAINT "OrderQuantity_productId_fkey";

-- DropForeignKey
ALTER TABLE "public"."OrderQuantity" DROP CONSTRAINT "OrderQuantity_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Stand" DROP CONSTRAINT "Stand_productId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_OrderToOrderQuantity" DROP CONSTRAINT "_OrderToOrderQuantity_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_OrderToOrderQuantity" DROP CONSTRAINT "_OrderToOrderQuantity_B_fkey";

-- AlterTable
ALTER TABLE "public"."Category" DROP COLUMN "name_ar",
DROP COLUMN "name_en",
ADD COLUMN     "nameAr" TEXT NOT NULL,
ADD COLUMN     "nameEn" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Order" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."OrderQuantity" ADD COLUMN     "orderId" TEXT NOT NULL,
ALTER COLUMN "productId" SET NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "description_ar",
DROP COLUMN "description_en",
DROP COLUMN "name_ar",
DROP COLUMN "name_en",
ADD COLUMN     "descriptionAr" TEXT NOT NULL,
ADD COLUMN     "descriptionEn" TEXT NOT NULL,
ADD COLUMN     "nameAr" TEXT NOT NULL,
ADD COLUMN     "nameEn" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Stand" DROP COLUMN "description_ar",
DROP COLUMN "description_en",
DROP COLUMN "name_ar",
DROP COLUMN "name_en",
ADD COLUMN     "descriptionAr" TEXT NOT NULL,
ADD COLUMN     "descriptionEn" TEXT NOT NULL,
ADD COLUMN     "nameAr" TEXT NOT NULL,
ADD COLUMN     "nameEn" TEXT NOT NULL,
ALTER COLUMN "productId" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "name_Ar",
DROP COLUMN "name_En",
ADD COLUMN     "nameAr" TEXT NOT NULL,
ADD COLUMN     "nameEn" TEXT NOT NULL,
ALTER COLUMN "phone" SET DEFAULT '',
ALTER COLUMN "lang" SET DEFAULT 'ar',
ALTER COLUMN "lat" SET DEFAULT '',
DROP COLUMN "role",
ADD COLUMN     "role" "public"."UserRole" NOT NULL;

-- DropTable
DROP TABLE "public"."_OrderToOrderQuantity";

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderQuantity" ADD CONSTRAINT "OrderQuantity_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderQuantity" ADD CONSTRAINT "OrderQuantity_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderQuantity" ADD CONSTRAINT "OrderQuantity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Stand" ADD CONSTRAINT "Stand_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
