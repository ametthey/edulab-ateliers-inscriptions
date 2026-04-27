import { db } from '../db/index'
import { inscriptions } from '../db/schema'
import { inscriptionSchema } from '~~/shared/validators'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = inscriptionSchema.safeParse(body)

  if (!parsed.success) {
    throw createError({ statusCode: 400, message: parsed.error.issues[0]?.message ?? 'Données invalides' })
  }

  const result = await db.insert(inscriptions).values(parsed.data).returning()

  return { success: true, inscription: result[0] }
})
