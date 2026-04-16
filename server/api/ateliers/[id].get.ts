import { db } from '../../db/index'
import { ateliers, inscriptions } from '../../db/schema'
import { eq, count } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  // Récupère l'id depuis l'URL (ex: /api/ateliers/3 → id = 3)
  const id = Number(getRouterParam(event, 'id'))

  // Cherche l'atelier correspondant dans la base de données
  // .get() retourne un seul résultat (ou undefined) au lieu d'un tableau
  const atelier = await db.select().from(ateliers).where(eq(ateliers.id, id)).get()

  // Si aucun atelier trouvé, renvoie une erreur 404
  if (!atelier) {
    throw createError({ statusCode: 404, message: 'Atelier introuvable' })
  }

  // Compte le nombre d'inscriptions pour cet atelier directement en base
  // Évite de charger toutes les inscriptions côté client pour les filtrer
  const [{ nombreInscriptions }] = await db
    .select({ nombreInscriptions: count() })
    .from(inscriptions)
    .where(eq(inscriptions.atelier_id, id))

  return { ...atelier, nombreInscriptions }
})
