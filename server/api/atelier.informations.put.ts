import { db } from '../db/index'
import { ateliers } from '../db/schema'
import { eq } from 'drizzle-orm'
import { atelierUpdateSchema } from '~~/shared/validators'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = atelierUpdateSchema.safeParse(body)

  if (!parsed.success) {
    throw createError({ statusCode: 400, message: parsed.error.issues[0]?.message ?? 'Données invalides' })
  }

  const { id, ...fields } = parsed.data

  const result = await db.update(ateliers)
    .set(fields)
    .where(eq(ateliers.id, id))
    .returning()

  return { success: true, atelier: result[0] }
})
