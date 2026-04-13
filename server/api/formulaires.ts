// Stockage en mémoire (sera réinitialisé au redémarrage du serveur)
// Note : Les données ne persisteront pas entre les redémarrages
let formulairesStockes: any[] = []
let compteurId = 0

// Crée un gestionnaire d'événement pour l'endpoint API /api/formulaires
export default defineEventHandler(async (event) => {
  // Variable pour gérer l'ID auto-incrémenté des formulaires
  // Attention : elle est réinitialisée à chaque requête GET, ce qui peut causer des doublons d'ID

  // ====== REQUÊTE GET ======
  // Récupère et retourne la liste complète de tous les formulaires stockés en mémoire
  if (event.node.req.method === 'GET') {
    return formulairesStockes
  }

  // ====== REQUÊTE POST ======
  // Ajoute un nouveau formulaire à la base de données en mémoire
  if (event.node.req.method === 'POST') {
    // Récupère les données envoyées dans le corps de la requête (ex: nom, email, message, etc.)
    const body = await readBody(event)
    // Incrémente le compteur pour générer un ID unique
    compteurId++

    // Crée l'objet formulaire avec :
    // - Un ID numérique
    // - Les champs du formulaire (...body)
    // - La date de création au format français (jj/mm/aaaa)
    const formulaire = {
      id: compteurId,
      ...body,
      dateCreation: new Date().toLocaleDateString('fr-FR')
    }

    // Ajoute le formulaire à l'array de stockage
    formulairesStockes.push(formulaire)

    // Retourne une réponse de succès avec les données du formulaire créé
    return {
      success: true,
      message: 'Formulaire ajouté avec succès',
      data: formulaire
    }
  }

  // ====== REQUÊTE DELETE ======
  // Supprime un formulaire spécifique identifié par son ID
  if (event.node.req.method === 'DELETE') {
    // Récupère l'ID depuis l'URL ou le corps
    let id
    const body = await readBody(event).catch(() => null)

    if (body?.id) {
      id = body.id
    } else {
      // L'ID est dans l'URL : /api/formulaires/123
      const urlParts = event.node.req.url?.split('/') || []
      id = parseInt(urlParts[urlParts.length - 1])
    }

    const index = formulairesStockes.findIndex(f => f.id === id)
    if (index === -1) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Formulaire non trouvé'
      })
    }

    formulairesStockes.splice(index, 1)

    // Retourne une réponse de succès
    return {
      success: true,
      message: 'Formulaire supprimé'
    }
  }
})
