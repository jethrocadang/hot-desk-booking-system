/*
  Warnings:

  - You are about to drop the column `end_time` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `start_time` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `bookings` table. All the data in the column will be lost.
  - Added the required column `date` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_userId_fkey";

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "end_time",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "start_time",
DROP COLUMN "userId",
ADD COLUMN     "date" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_emailName_fkey" FOREIGN KEY ("emailName") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
