import { db } from '../db/index'
import { inscriptions } from '../db/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  if (getMethod(event) === 'DELETE') {
    const body = await readBody(event)
    await db.delete(inscriptions).where(eq(inscriptions.id, body.id))
    return { success: true }
  }

  const result = await db.select().from(inscriptions)
  return result
})
