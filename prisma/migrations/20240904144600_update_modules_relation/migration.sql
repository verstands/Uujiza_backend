/*
  Warnings:

  - You are about to drop the column `id_menu` on the `Modules` table. All the data in the column will be lost.
  - Added the required column `id_fonction` to the `Modules` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Modules` DROP FOREIGN KEY `Modules_id_menu_fkey`;

-- AlterTable
ALTER TABLE `Modules` DROP COLUMN `id_menu`,
    ADD COLUMN `id_fonction` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Modules` ADD CONSTRAINT `Modules_id_fonction_fkey` FOREIGN KEY (`id_fonction`) REFERENCES `Fonctions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
