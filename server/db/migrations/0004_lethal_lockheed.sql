CREATE TABLE `inscriptions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`atelier_id` integer NOT NULL,
	`prenom` text NOT NULL,
	`email` text NOT NULL,
	`telephone` text NOT NULL,
	`age` integer NOT NULL,
	FOREIGN KEY (`atelier_id`) REFERENCES `ateliers`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
ALTER TABLE `ateliers` DROP COLUMN `prenom`;--> statement-breakpoint
ALTER TABLE `ateliers` DROP COLUMN `email`;--> statement-breakpoint
ALTER TABLE `ateliers` DROP COLUMN `telephone`;--> statement-breakpoint
ALTER TABLE `ateliers` DROP COLUMN `age`;