import { db } from '../db/index'
import { ateliers } from '../db/schema'

export default defineEventHandler(async () => {
  const result = await db.select().from(ateliers)
  return result.map(a => ({ ...a, nb_places: parseInt(a.nb_places) }))
})
