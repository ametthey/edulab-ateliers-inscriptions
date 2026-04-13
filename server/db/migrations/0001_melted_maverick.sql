PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_ateliers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`titre` text NOT NULL,
	`created_at` text DEFAULT '2026-04-11T21:23:58.194Z'
);
--> statement-breakpoint
INSERT INTO `__new_ateliers`("id", "titre", "created_at") SELECT "id", "titre", "created_at" FROM `ateliers`;--> statement-breakpoint
DROP TABLE `ateliers`;--> statement-breakpoint
ALTER TABLE `__new_ateliers` RENAME TO `ateliers`;--> statement-breakpoint
PRAGMA foreign_keys=ON;