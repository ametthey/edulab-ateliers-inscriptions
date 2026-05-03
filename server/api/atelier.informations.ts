import { db } from '../db/index'
import { ateliers } from '../db/schema'
import { atelierSchema } from '~~/shared/validators'
import { like } from 'drizzle-orm'

// Génère un slug unique en ajoutant -2, -3... si le slug de base existe déjà
async function uniqueSlug(base: string): Promise<string> {
  // Cherche tous les slugs qui commencent par la même base (ex: "mon-atelier", "mon-atelier-2")
  const existing = await db
    .select({ slug: ateliers.slug })
    .from(ateliers)
    .where(like(ateliers.slug, `${base}%`))

  const slugs = existing.map(r => r.slug)

  // Si le slug de base est libre, on le prend directement
  if (!slugs.includes(base)) return base

  // Sinon on cherche le premier suffixe disponible (-2, -3, -4...)
  let i = 2
  while (slugs.includes(`${base}-${i}`)) i++
  return `${base}-${i}`
}

export default defineEventHandler(async (event) => {
  assertMethod(event, 'POST')
  const body = await readBody(event)
  const parsed = atelierSchema.safeParse(body)

  if (!parsed.success) {
    throw createError({ statusCode: 400, message: parsed.error.issues[0]?.message ?? 'Données invalides' })
  }

  // Génère le slug depuis le titre, en garantissant son unicité
  const slug = await uniqueSlug(slugify(parsed.data.titre))

  const result = await db.insert(ateliers).values({ ...parsed.data, slug }).returning()

  return { success: true, atelier: result[0] }
})
