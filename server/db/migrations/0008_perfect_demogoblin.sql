PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_ateliers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`titre` text NOT NULL,
	`horaires` text NOT NULL,
	`date` text NOT NULL,
	`description` text NOT NULL,
	`nb_places` integer NOT NULL,
	`slug` text
);
--> statement-breakpoint
INSERT INTO `__new_ateliers`("id", "titre", "horaires", "date", "description", "nb_places", "slug") SELECT "id", "titre", "horaires", "date", "description", "nb_places", NULL FROM `ateliers`;--> statement-breakpoint
DROP TABLE `ateliers`;--> statement-breakpoint
ALTER TABLE `__new_ateliers` RENAME TO `ateliers`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `ateliers_slug_unique` ON `ateliers` (`slug`);