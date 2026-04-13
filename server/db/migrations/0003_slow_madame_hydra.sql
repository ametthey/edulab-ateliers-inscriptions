ALTER TABLE `ateliers` ADD `prenom` text NOT NULL;--> statement-breakpoint
ALTER TABLE `ateliers` ADD `email` text NOT NULL;--> statement-breakpoint
ALTER TABLE `ateliers` ADD `telephone` text NOT NULL;--> statement-breakpoint
ALTER TABLE `ateliers` ADD `age` text NOT NULL;--> statement-breakpoint
ALTER TABLE `ateliers` DROP COLUMN `created_at`;