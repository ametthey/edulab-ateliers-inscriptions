import { db } from '../../db/index'
import { ateliers, inscriptions } from '../../db/schema'
import { eq, count } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  // Récupère le slug depuis l'URL (ex: /api/ateliers/introduction-a-la-peinture)
  const slug = getRouterParam(event, 'slug')

  // Cherche l'atelier par son slug textuel
  const atelier = await db.select().from(ateliers).where(eq(ateliers.slug, slug!)).get()

  if (!atelier) {
    throw createError({ statusCode: 404, message: 'Atelier introuvable' })
  }

  // Compte les inscriptions en utilisant l'id récupéré depuis l'atelier trouvé
  const [{ nombreInscriptions }] = await db
    .select({ nombreInscriptions: count() })
    .from(inscriptions)
    .where(eq(inscriptions.atelier_id, atelier.id))

  return { ...atelier, nombreInscriptions }
})
