import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const ateliers = sqliteTable('ateliers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  titre: text('titre').notNull(),
  horaires: text('horaires').notNull(),
  date: text('date').notNull(),
  description: text('description').notNull(),
  nb_places: text('nb_places').notNull(),
  // createdAt: text('created_at').default(new Date().toISOString())
})
