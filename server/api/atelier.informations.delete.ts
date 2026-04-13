import { db } from '../db/index'
import { ateliers } from '../db/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event)

  await db.delete(ateliers).where(eq(ateliers.id, id))

  return { success: true }
})
