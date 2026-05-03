import { db } from '../db/index'
import { inscriptions, ateliers } from '../db/schema'
import { inscriptionSchema } from '~~/shared/validators'
import { eq, count } from 'drizzle-orm'
import nodemailer from 'nodemailer'
import { getInvitationDelay, scheduleInvitation } from '../utils/mail'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = inscriptionSchema.safeParse(body)

  if (!parsed.success) {
    throw createError({ statusCode: 400, message: parsed.error.issues[0]?.message ?? 'Données invalides' })
  }

  const result = await db.insert(inscriptions).values(parsed.data).returning()
  const inscription = result[0]

  const atelier = await db.select().from(ateliers).where(eq(ateliers.id, parsed.data.atelier_id)).get()

  if (atelier) {
    try {
      const [{ total }] = await db
        .select({ total: count() })
        .from(inscriptions)
        .where(eq(inscriptions.atelier_id, parsed.data.atelier_id))

      const isConfirme = total <= atelier.nb_places

      const config = useRuntimeConfig() as any
      const transport = nodemailer.createTransport(config.mail.smtp)
      const from: string = config.mail.message.from

      const htmlInscription = await renderEmailComponent('InscriptionConfirmation', {
        prenom: parsed.data.prenom,
        atelierTitre: atelier.titre,
        date: atelier.date,
        horaires: atelier.horaires,
      })

      await transport.sendMail({
        from,
        to: parsed.data.email,
        subject: `Inscription : ${atelier.titre}`,
        html: htmlInscription as string,
      })

      await db.update(inscriptions)
        .set({ mail_confirmation: true })
        .where(eq(inscriptions.id, inscription.id))

      if (isConfirme) {
        const delay = getInvitationDelay(atelier.date)
        if (delay > 0) {
          await scheduleInvitation({
            inscriptionId: inscription.id,
            prenom: parsed.data.prenom,
            email: parsed.data.email,
            atelierTitre: atelier.titre,
            atelierDate: atelier.date,
            atelierHoraires: atelier.horaires,
            delay,
          })
        }
      }
    } catch (emailError) {
      console.error('[mail] Échec envoi email:', emailError)
    }
  }

  return { success: true, inscription: result[0] }
})
