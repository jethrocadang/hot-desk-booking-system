/*
  Warnings:

  - Added the required column `emailName` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookings" ADD COLUMN     "emailName" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ALTER COLUMN "start_time" SET DATA TYPE TEXT,
ALTER COLUMN "end_time" SET DATA TYPE TEXT;
