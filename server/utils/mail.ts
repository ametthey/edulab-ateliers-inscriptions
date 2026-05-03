import nodemailer from 'nodemailer'
import { db } from '../db/index'
import { inscriptions } from '../db/schema'
import { eq } from 'drizzle-orm'

export function getInvitationDelay(atelierDate: string): number {
  const [day, month, year] = atelierDate.split('/')
  const fullYear = 2000 + parseInt(year)
  const date = new Date(fullYear, parseInt(month) - 1, parseInt(day))

  const sendDate = new Date(date)
  sendDate.setDate(sendDate.getDate() - 7)

  return sendDate.getTime() - Date.now()
}

export async function scheduleInvitation(params: {
  inscriptionId: number
  prenom: string
  email: string
  atelierTitre: string
  atelierDate: string
  atelierHoraires: string
  delay: number
}) {
  const config = useRuntimeConfig() as any
  const transport = nodemailer.createTransport(config.mail.smtp)
  const from: string = config.mail.message.from

  setTimeout(async () => {
    try {
      const html = await renderEmailComponent('Invitation', {
        prenom: params.prenom,
        atelierTitre: params.atelierTitre,
        date: params.atelierDate,
        horaires: params.atelierHoraires,
      })

      await transport.sendMail({
        from,
        to: params.email,
        subject: `Invitation confirmée : ${params.atelierTitre}`,
        html: html as string,
      })

      await db.update(inscriptions)
        .set({ mail_invitation: true })
        .where(eq(inscriptions.id, params.inscriptionId))
    } catch (err) {
      console.error('[mail] Échec envoi invitation:', err)
    }
  }, params.delay)
}
