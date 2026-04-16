import { db } from '../db/index'
import { inscriptions } from '../db/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = await db.insert(inscriptions).values({
    atelier_id: body.atelier_id,
    prenom: body.prenom,
    email: body.email,
    telephone: body.telephone,
    age: body.age,
  }).returning()

  return { success: true, inscription: result[0] }
})
