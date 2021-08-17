/*
  Warnings:

  - You are about to drop the `Menager` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Menager" DROP CONSTRAINT "Menager_teamId_fkey";

-- AlterTable
ALTER TABLE "Fixture" ADD COLUMN     "result" TEXT;

-- DropTable
DROP TABLE "Menager";

-- CreateTable
CREATE TABLE "Manager" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "previousTeams" TEXT[],
    "imageUrl" TEXT NOT NULL,
    "teamId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Manager_teamId_unique" ON "Manager"("teamId");

-- AddForeignKey
ALTER TABLE "Manager" ADD FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
