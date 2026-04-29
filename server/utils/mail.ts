// Calcule le délai en ms avant d'envoyer l'invitation, 1 semaine avant atelier.date
// Format attendu : "DD/MM/YY" (ex: "23/04/25")
export function getInvitationDelay(atelierDate: string): number {
  const [day, month, year] = atelierDate.split('/')
  const fullYear = 2000 + parseInt(year)
  const date = new Date(fullYear, parseInt(month) - 1, parseInt(day))

  const sendDate = new Date(date)
  sendDate.setDate(sendDate.getDate() - 7)

  const delay = sendDate.getTime() - Date.now()
  return delay
}
