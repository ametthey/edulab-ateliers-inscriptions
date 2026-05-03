import { db } from '../db/index'
import { inscriptions, ateliers } from '../db/schema'
import { eq } from 'drizzle-orm'
import { getInvitationDelay, scheduleInvitation } from '../utils/mail'

export default defineNitroPlugin(async () => {
  const pending = await db
    .select({
      id: inscriptions.id,
      prenom: inscriptions.prenom,
      email: inscriptions.email,
      atelier_titre: ateliers.titre,
      atelier_date: ateliers.date,
      atelier_horaires: ateliers.horaires,
    })
    .from(inscriptions)
    .innerJoin(ateliers, eq(inscriptions.atelier_id, ateliers.id))
    .where(eq(inscriptions.mail_invitation, false))

  for (const row of pending) {
    const delay = getInvitationDelay(row.atelier_date)
    if (delay > 0) {
      await scheduleInvitation({
        inscriptionId: row.id,
        prenom: row.prenom,
        email: row.email,
        atelierTitre: row.atelier_titre,
        atelierDate: row.atelier_date,
        atelierHoraires: row.atelier_horaires,
        delay,
      })
    }
  }
})
