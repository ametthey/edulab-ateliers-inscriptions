import { z } from 'zod'

export const OUTILS = ['RISO', 'Broderie numérique'] as const
export const REFERENTS = ['Alma', 'Marie', 'Albin', 'Lydie'] as const

export const atelierSchema = z.object({
  titre: z.string().min(1, 'Le titre est requis').max(200),
  horaires: z.string().min(1, 'Les horaires sont requis').max(100),
  date: z.string().min(1, 'La date est requise').max(50),
  description: z.string().min(1, 'La description est requise').max(2000),
  nb_places: z.coerce.number().int().min(1, 'Le nombre de places doit être au moins 1').max(500),
  outil: z.enum(OUTILS, { error: 'Outil invalide' }),
  referent: z.enum(REFERENTS, { error: 'Référent invalide' }),
})

export const atelierUpdateSchema = atelierSchema.extend({
  id: z.number().int().positive(),
})

export const inscriptionSchema = z.object({
  atelier_id: z.number().int().positive('L\'identifiant de l\'atelier est requis'),
  prenom: z.string().min(1, 'Le prénom est requis').max(100),
  email: z.string().email('L\'email n\'est pas valide').max(200),
  telephone: z.string()
    .transform(v => v.replace(/[\s.\-]/g, ''))
    .pipe(z.string().regex(/^0\d{9}$/, 'Le téléphone doit comporter 10 chiffres et commencer par 0')),
  age: z.coerce.number().int().min(5, 'L\'âge doit être plus grand que 5 ans').max(120),
})
