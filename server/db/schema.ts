import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const ateliers = sqliteTable('ateliers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  titre: text('titre').notNull(),
  horaires: text('horaires').notNull(),
  date: text('date').notNull(),
  description: text('description').notNull(),
  nb_places: integer('nb_places').notNull(),
  outil: text('outil').notNull(),
  referent: text('referent').notNull(),
  slug: text('slug').unique(),
})

export const inscriptions = sqliteTable('inscriptions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  atelier_id: integer('atelier_id').notNull().references(() => ateliers.id),
  prenom: text('prenom').notNull(),
  email: text('email').notNull(),
  telephone: text('telephone').notNull(),
  age: integer('age').notNull(),
  mail_confirmation: integer('mail_confirmation', { mode: 'boolean' }).notNull().default(false),
  mail_invitation: integer('mail_invitation', { mode: 'boolean' }).notNull().default(false),
})
