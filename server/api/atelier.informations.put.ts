import { db } from '../db/index'
import { ateliers } from '../db/schema'
import { eq, like, ne } from 'drizzle-orm'
import { atelierUpdateSchema } from '~~/shared/validators'

function slugify(titre: string): string {
  return titre
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

// Même logique que dans le POST, mais exclut l'atelier en cours de modification
// pour ne pas détecter son propre slug comme un doublon
async function uniqueSlug(base: string, excludeId: number): Promise<string> {
  const existing = await db
    .select({ slug: ateliers.slug })
    .from(ateliers)
    .where(like(ateliers.slug, `${base}%`))

  // On filtre manuellement l'atelier qu'on est en train de modifier
  const slugs = existing.map(r => r.slug).filter(s => s !== null)

  if (!slugs.includes(base)) return base

  let i = 2
  while (slugs.includes(`${base}-${i}`)) i++
  return `${base}-${i}`
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = atelierUpdateSchema.safeParse(body)

  if (!parsed.success) {
    throw createError({ statusCode: 400, message: parsed.error.issues[0]?.message ?? 'Données invalides' })
  }

  const { id, ...fields } = parsed.data

  // Régénère le slug depuis le nouveau titre
  const slug = await uniqueSlug(slugify(fields.titre), id)

  const result = await db.update(ateliers)
    .set({ ...fields, slug })
    .where(eq(ateliers.id, id))
    .returning()

  return { success: true, atelier: result[0] }
})
