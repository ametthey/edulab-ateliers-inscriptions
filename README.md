# Application web pour la gestion des inscriptions à des ateliers


## TODO

### Pages

- [x] les scripts des pages ont la même structure avec useMeta defineMeta et useSEOMeta
- [x] script - index
- [x] script - createAtelier
- [x] script - ateliers
- [x] script - admin
- [x] script - slug
- [x] Avoir les mêmes commentaires dans script et se baser sur ```CreateAtelier.vue```
- [x] Supprimer les pages ```_Liste.vue``` ```_Projets.vue``` et leurs dépendances
- [ ] Trouver comment renommer les posts en atelier-{{titre}} ```atelier-[slug].vue```
- [x] Ranger les scripts avec cette ordre : META, FORMULAIRE, FONCTION
- [x] Quand je sélectionne une lettre sur le front, la souris est mode blinking...
- [x] Créer de sous page /edition/atelier-[slug] ou je peux modifier le formulaire de chaque atelier.
- [ ] Ajouter 'ans' dans la colonne Âge du tableau ```Gestion.vue```
- [ ] Mise en page des informations d'ateliers dans le tableau ```Gestion.vue```
- [ ] Validation du numéro de téléphone et du mail dans le formulaire ```atelier-[slug].vue```

### Components

- [x] ```AppHeader.vue``` - Renommer les labels des pages

### Server
- [x] lecture de la documentation sur data-fetching https://nuxt.com/docs/4.x/getting-started/data-fetching
- [x] api + files : documentation
- [x] data + files : documentation
- [x] db + files : documentation
- [x] drizzle.config.ts

### Config files

- [ ] a quoi sert ```eslint.config.mjs```


Cette application servira pour l'équipe de l'édulab Pasteur pour créer et gérer les inscriptions à des initiations

## Méthodologie

### Les pages
**Page d'accueil**
```Home.vue```
> Cette page servira à décrire les différentes pages du site

**Page d'administration**
```Admin.vue```
> Cette page servira à afficher les différentes informations des ateliers, un tableau général avec tout les ateliers et voir encore quoi ?

- [ ] Décrire le process

**Page de création d'atelier**
```CreateAtelier.vue```
> Cette page servira à créer un nouvel atelier

- [ ] Décrire le process

**Page de tout les ateliers**
```Ateliers.vue```
> Cette page affichera des cartes avec les informations de chaques ateliers

- [ ] Décrire le process

**Page d'inscription à un atelier**
```atelier-[slug].vue```
> Cette page affichera le formulaire d'inscription d'un atelier

### Les configurations

#### Configuration du formulaire
**Informations du formulaire**
- titre
- date
- horaire
- description
- nombre de places disponibles

**Champ du formulaire**
- Prénom & Nom
- Email
- Téléphone
- Âge

#### Configuration du tableau
**Header du tableau**
- Titre
- Date
- Horaire
- Description
- Nombre de places disponibles

**Tableau**

informations du formulaire
- ID
- Confirmation de l'inscription
- Prénom & Nom
- Email
- Téléphone
- Âge

informations pour le facilitateur
- Email de confirmation - état (à envoyé, envoyé)
- Email de rappel - état (à envoyé, envoyé)

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
