/*
  Warnings:

  - You are about to drop the column `verified` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "verified",
ADD COLUMN     "email_verified" TIMESTAMP(3),
ALTER COLUMN "email" DROP NOT NULL;
