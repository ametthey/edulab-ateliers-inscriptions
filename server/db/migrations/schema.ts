import { sqliteTable, AnySQLiteColumn, foreignKey, integer, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const inscriptions = sqliteTable("inscriptions", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	atelierId: integer("atelier_id").notNull().references(() => ateliers.id),
	prenom: text().notNull(),
	email: text().notNull(),
	telephone: text().notNull(),
	age: integer().notNull(),
});

export const ateliers = sqliteTable("ateliers", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	titre: text().notNull(),
	horaires: text().notNull(),
	date: text().notNull(),
	description: text().notNull(),
	nbPlaces: integer("nb_places").notNull(),
});

