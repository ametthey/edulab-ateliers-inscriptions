import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const ateliers = sqliteTable("ateliers", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	titre: text().notNull(),
	horaires: text().notNull(),
	date: text().notNull(),
	description: text().notNull(),
	nbPlaces: text("nb_places").notNull(),
	createdAt: text("created_at").default("2026-04-11T21:43:17.970Z"),
});

export const inscriptions = sqliteTable("inscriptions", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	atelierId: integer("atelier_id").notNull().references(() => ateliers.id),
	prenom: text().notNull(),
	email: text().notNull(),
	telephone: text().notNull(),
	age: integer().notNull(),
});

