-- CreateTable
CREATE TABLE `Agents` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `mdp` VARCHAR(191) NOT NULL,
    `id_fonction` VARCHAR(191) NOT NULL,
    `statut` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Agents_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roles` (
    `id` VARCHAR(191) NOT NULL,
    `initule` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fonctions` (
    `id` VARCHAR(191) NOT NULL,
    `initule` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Menus` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FonctionMenu` (
    `id` VARCHAR(191) NOT NULL,
    `idmenu` VARCHAR(191) NOT NULL,
    `idfonction` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Modules` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `id_menu` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModulesPrivilege` (
    `id` VARCHAR(191) NOT NULL,
    `id_module` VARCHAR(191) NOT NULL,
    `id_privilege` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agendas` (
    `id` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `id_postect` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `start` VARCHAR(191) NOT NULL,
    `end` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypeProduits` (
    `id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Capamgnes` (
    `id` VARCHAR(191) NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `id_produit` VARCHAR(191) NOT NULL,
    `statut` VARCHAR(191) NOT NULL,
    `nouveau` VARCHAR(191) NOT NULL,
    `nrp` VARCHAR(191) NOT NULL,
    `rdv` VARCHAR(191) NOT NULL,
    `nonvalide` VARCHAR(191) NOT NULL,
    `nrptermine` VARCHAR(191) NOT NULL,
    `total` VARCHAR(191) NOT NULL,
    `distribue` VARCHAR(191) NOT NULL,
    `restant` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appels` (
    `id` VARCHAR(191) NOT NULL,
    `id_capamgne` VARCHAR(191) NOT NULL,
    `direction` VARCHAR(191) NOT NULL,
    `statut` VARCHAR(191) NOT NULL,
    `dure` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Raisons` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Scripts` (
    `id` VARCHAR(191) NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `contenue` TEXT NOT NULL,
    `position` VARCHAR(191) NOT NULL,
    `campagne` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Provenances` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cartes` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Configurations` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dossiers` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `surface` VARCHAR(191) NOT NULL,
    `chauffage` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Villes` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Archivages` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypeChauffages` (
    `id` VARCHAR(191) NOT NULL,
    `intitule` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypeRevenus` (
    `id` VARCHAR(191) NOT NULL,
    `intitule` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Commentaires` (
    `id` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `id_prospect` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Presentations` (
    `id` VARCHAR(191) NOT NULL,
    `conteneu` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Questions` (
    `id` VARCHAR(191) NOT NULL,
    `conteneu` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Conclusions` (
    `id` VARCHAR(191) NOT NULL,
    `conteneu` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Status` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Directions` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Installateurs` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Invalidites` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Applications` (
    `id` VARCHAR(191) NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `lien` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Accesapplications` (
    `id` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `id_application` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prospects` (
    `id` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `codepostal` VARCHAR(191) NOT NULL,
    `surface` VARCHAR(191) NOT NULL,
    `id_typechauffage` VARCHAR(191) NOT NULL,
    `id_typerevenu` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pospects` (
    `id` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `codepostal` VARCHAR(191) NOT NULL,
    `surface` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `statusdossier` VARCHAR(191) NOT NULL,
    `id_typechauffage` VARCHAR(191) NOT NULL,
    `id_typerevenu` VARCHAR(191) NOT NULL,
    `id_campagne` VARCHAR(191) NOT NULL,
    `id_produit` VARCHAR(191) NOT NULL,
    `typelead` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Modelmail` (
    `id` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `bccexp` VARCHAR(191) NOT NULL,
    `ccexp` VARCHAR(191) NOT NULL,
    `contenue` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `disnataireexp` VARCHAR(191) NOT NULL,
    `emailexp` VARCHAR(191) NOT NULL,
    `fichier` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `nomexp` VARCHAR(191) NOT NULL,
    `id_campagne` VARCHAR(191) NOT NULL,
    `id_fonction` VARCHAR(191) NOT NULL,
    `sujet` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PieceJoits` (
    `id` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `id_prospect` VARCHAR(191) NOT NULL,
    `file` TEXT NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notifications` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` VARCHAR(191) NOT NULL,
    `agentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Logdata` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `action` VARCHAR(191) NOT NULL,
    `endpoint` VARCHAR(191) NOT NULL,
    `user` VARCHAR(191) NOT NULL,
    `processingTime` INTEGER NOT NULL,
    `ip` VARCHAR(191) NULL,
    `userAgent` VARCHAR(191) NULL,
    `os` VARCHAR(191) NULL,
    `browser` VARCHAR(191) NULL,
    `isp` VARCHAR(191) NULL,
    `pays` VARCHAR(191) NULL,
    `latitude` DOUBLE NULL,
    `longitude` DOUBLE NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoriqueAffiches` (
    `id` VARCHAR(191) NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `userProspect` VARCHAR(191) NOT NULL,
    `userAgent` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FonctionsToMenus` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_FonctionsToMenus_AB_unique`(`A`, `B`),
    INDEX `_FonctionsToMenus_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Agents` ADD CONSTRAINT `Agents_id_fonction_fkey` FOREIGN KEY (`id_fonction`) REFERENCES `Fonctions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FonctionMenu` ADD CONSTRAINT `FonctionMenu_idfonction_fkey` FOREIGN KEY (`idfonction`) REFERENCES `Fonctions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FonctionMenu` ADD CONSTRAINT `FonctionMenu_idmenu_fkey` FOREIGN KEY (`idmenu`) REFERENCES `Menus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modules` ADD CONSTRAINT `Modules_id_menu_fkey` FOREIGN KEY (`id_menu`) REFERENCES `Menus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModulesPrivilege` ADD CONSTRAINT `ModulesPrivilege_id_module_fkey` FOREIGN KEY (`id_module`) REFERENCES `Modules`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModulesPrivilege` ADD CONSTRAINT `ModulesPrivilege_id_privilege_fkey` FOREIGN KEY (`id_privilege`) REFERENCES `Roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendas` ADD CONSTRAINT `Agendas_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Agents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendas` ADD CONSTRAINT `Agendas_id_postect_fkey` FOREIGN KEY (`id_postect`) REFERENCES `Pospects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Capamgnes` ADD CONSTRAINT `Capamgnes_id_produit_fkey` FOREIGN KEY (`id_produit`) REFERENCES `TypeProduits`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appels` ADD CONSTRAINT `Appels_id_fkey` FOREIGN KEY (`id`) REFERENCES `Agents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Scripts` ADD CONSTRAINT `Scripts_position_fkey` FOREIGN KEY (`position`) REFERENCES `TypeProduits`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Scripts` ADD CONSTRAINT `Scripts_campagne_fkey` FOREIGN KEY (`campagne`) REFERENCES `Capamgnes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dossiers` ADD CONSTRAINT `Dossiers_id_fkey` FOREIGN KEY (`id`) REFERENCES `Agents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commentaires` ADD CONSTRAINT `Commentaires_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Agents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commentaires` ADD CONSTRAINT `Commentaires_id_prospect_fkey` FOREIGN KEY (`id_prospect`) REFERENCES `Pospects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accesapplications` ADD CONSTRAINT `Accesapplications_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Fonctions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accesapplications` ADD CONSTRAINT `Accesapplications_id_application_fkey` FOREIGN KEY (`id_application`) REFERENCES `Applications`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prospects` ADD CONSTRAINT `Prospects_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Agents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prospects` ADD CONSTRAINT `Prospects_id_typechauffage_fkey` FOREIGN KEY (`id_typechauffage`) REFERENCES `TypeChauffages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prospects` ADD CONSTRAINT `Prospects_id_typerevenu_fkey` FOREIGN KEY (`id_typerevenu`) REFERENCES `TypeRevenus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pospects` ADD CONSTRAINT `Pospects_id_campagne_fkey` FOREIGN KEY (`id_campagne`) REFERENCES `Capamgnes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pospects` ADD CONSTRAINT `Pospects_id_produit_fkey` FOREIGN KEY (`id_produit`) REFERENCES `TypeProduits`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pospects` ADD CONSTRAINT `Pospects_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Agents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modelmail` ADD CONSTRAINT `Modelmail_id_campagne_fkey` FOREIGN KEY (`id_campagne`) REFERENCES `Capamgnes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modelmail` ADD CONSTRAINT `Modelmail_id_fonction_fkey` FOREIGN KEY (`id_fonction`) REFERENCES `Fonctions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notifications` ADD CONSTRAINT `Notifications_agentId_fkey` FOREIGN KEY (`agentId`) REFERENCES `Agents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoriqueAffiches` ADD CONSTRAINT `HistoriqueAffiches_userAgent_fkey` FOREIGN KEY (`userAgent`) REFERENCES `Agents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoriqueAffiches` ADD CONSTRAINT `HistoriqueAffiches_userProspect_fkey` FOREIGN KEY (`userProspect`) REFERENCES `Pospects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FonctionsToMenus` ADD CONSTRAINT `_FonctionsToMenus_A_fkey` FOREIGN KEY (`A`) REFERENCES `Fonctions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FonctionsToMenus` ADD CONSTRAINT `_FonctionsToMenus_B_fkey` FOREIGN KEY (`B`) REFERENCES `Menus`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
