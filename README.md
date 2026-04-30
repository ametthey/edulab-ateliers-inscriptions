# Application web pour la gestion des inscriptions à des ateliers


## TODO

#### Mail

- [ ] Réécrire les 2 templates de mail, ```Invitation.vue``` et ```InscriptionConfirmation.vue``` .
- [ ] Changer la date d'envoi du mail ```Invitation.vue``` en fonction de la date de l'atelier

### Pages

- [ ] Validation du numéro de téléphone et du mail dans le formulaire ```atelier-[slug].vue```

---
### Les actions
*Privé*
#### Un facilitateur ajoute un atelier
1. le facilitateur ouvre la page de création d'atelier
2. le facilitateur écrit les informations de l'atelier et créé un nouvel atelier
3. Un nouveau formulaire d'atelier est créé
4. Un nouveau tableau est créé du formulaire


*Public*
#### Une personne s'inscrit à un atelier
1. la personne remplit le formulaire
2. la personne reçoit un email de confirmation à l'inscription
3. les informations de la personne est ajouté dans le tableau de l'atelier
4. {x} jours avant l'atelier, la personne reçoit un email de rappel avec les informations d'accès et les informations de l'atelier



---
### Explications

#### Création des informations d'un nouvel atelier
La page ```CreateAtelier.vue``` permet au facilitateur d'ajouter les informations d'un nouvel atelier
