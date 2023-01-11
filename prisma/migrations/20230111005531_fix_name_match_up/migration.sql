/*
  Warnings:

  - You are about to drop the column `matchup` on the `BuildOrder` table. All the data in the column will be lost.
  - Added the required column `matchUp` to the `BuildOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BuildOrder" DROP COLUMN "matchup",
ADD COLUMN     "matchUp" TEXT NOT NULL;
