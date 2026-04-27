import { z } from 'zod'

export const atelierSchema = z.object({
  titre: z.string().min(1, 'Le titre est requis').max(200),
  horaires: z.string().min(1, 'Les horaires sont requis').max(100),
  date: z.string().min(1, 'La date est requise').max(50),
  description: z.string().min(1, 'La description est requise').max(2000),
  nb_places: z.coerce.number().int().min(1, 'Le nombre de places doit être au moins 1').max(500),
})

export const atelierUpdateSchema = atelierSchema.extend({
  id: z.number().int().positive(),
})

export const inscriptionSchema = z.object({
  atelier_id: z.number().int().positive('L\'identifiant de l\'atelier est requis'),
  prenom: z.string().min(1, 'Le prénom est requis').max(100),
  email: z.string().email('L\'email n\'est pas valide').max(200),
  telephone: z.string().min(1, 'Le téléphone est requis').max(20),
  age: z.coerce.number().int().min(1).max(120),
})
