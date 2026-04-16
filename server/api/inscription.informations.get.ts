import { db } from '../db/index'
import { inscriptions } from '../db/schema'

export default defineEventHandler(async () => {
  const result = await db.select().from(inscriptions)
  return result
})
