import { db } from '../db/index'
import { ateliers } from '../db/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = await db.insert(ateliers).values({
    titre: body.titre,
    horaires: body.horaires,
    date: body.date,
    description: body.description,
    nb_places: body.nb_places,

  }).returning()

  return { success: true, atelier: result[0] }
})