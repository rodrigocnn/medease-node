/*
  Warnings:

  - You are about to alter the column `deletedAt` on the `role` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `patient` ADD COLUMN `deletedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `role` MODIFY `deletedAt` DATETIME NULL;
