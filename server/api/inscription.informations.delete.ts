import { db } from '../db/index'
import { inscriptions } from '../db/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event)
  await db.delete(inscriptions).where(eq(inscriptions.id, id))
  return { success: true }
})
