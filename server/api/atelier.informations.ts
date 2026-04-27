import { db } from '../db/index'
import { ateliers } from '../db/schema'
import { atelierSchema } from '~~/shared/validators'

export default defineEventHandler(async (event) => {
  assertMethod(event, 'POST')
  const body = await readBody(event)
  const parsed = atelierSchema.safeParse(body)

  if (!parsed.success) {
    throw createError({ statusCode: 400, message: parsed.error.issues[0]?.message ?? 'Données invalides' })
  }

  const result = await db.insert(ateliers).values(parsed.data).returning()

  return { success: true, atelier: result[0] }
})
