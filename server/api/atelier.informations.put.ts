import { db } from '../db/index'
import { ateliers } from '../db/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = await db.update(ateliers)
    .set({
      titre: body.titre,
      horaires: body.horaires,
      date: body.date,
      description: body.description,
      nb_places: body.nb_places,
    })
    .where(eq(ateliers.id, body.id))
    .returning()

  return { success: true, atelier: result[0] }
})
