/*
  Warnings:

  - You are about to alter the column `deletedAt` on the `patient` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deletedAt` on the `professional` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deletedAt` on the `role` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deletedAt` on the `service` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Service` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `patient` MODIFY `deletedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `professional` MODIFY `deletedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `role` MODIFY `deletedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `service` MODIFY `deletedAt` DATETIME NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Role_name_key` ON `Role`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Service_name_key` ON `Service`(`name`);
