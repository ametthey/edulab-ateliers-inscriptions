# Edulab Formulaire — Documentation fonctionnelle

## Présentation générale

Application web de gestion des ateliers d'Edulab Pasteur. Elle permet à l'équipe d'**administrer des ateliers** (créer, modifier, supprimer) et de **gérer les inscriptions** des participants, tout en proposant un **formulaire public** accessible à chaque inscrit.

---

## Côté administration

### Page d'administration (`/admin`)
Point d'entrée pour l'équipe. Elle présente :
- Un rappel du rôle de l'outil (CTA)
- La liste de tous les ateliers actifs avec leur nombre de places disponibles
- Des actions rapides : modifier ou supprimer un atelier
- Un bouton pour créer un nouvel atelier

### Créer un atelier (`/createatelier`)
Formulaire de création d'un atelier. Champs requis :
- **Titre** de l'atelier
- **Date**
- **Horaires**
- **Description**
- **Nombre de places** disponibles

### Modifier un atelier (`/editatelier/[id]`)
Même formulaire que la création, pré-rempli avec les données existantes de l'atelier.

### Gestion des inscriptions (`/gestion`)
Vue détaillée par atelier. Pour chaque atelier, un tableau liste les inscrits avec :
- Numéro de place attribué
- Prénom & Nom
- Email
- Téléphone
- Âge
- Statut des emails (confirmation, invitation)
- Possibilité de supprimer une inscription

---

## Côté public

### Liste des ateliers (`/ateliers`)
Page publique affichant toutes les ateliers disponibles sous forme de cartes. Chaque carte indique :
- Le titre de l'atelier
- La date et les horaires
- Le nombre de places restantes
- Un bouton **S'inscrire**

### Formulaire d'inscription (`/ateliers/atelier-[id]`)
Page dédiée à l'inscription pour un atelier spécifique. Elle affiche les informations de l'atelier, puis un formulaire demandant :
- **Prénom & Nom**
- **Email**
- **Téléphone**
- **Âge**

Après soumission, une modale de confirmation s'affiche.

---

## Base de données

Deux tables SQLite gérées avec Drizzle ORM :

| Table | Champs |
|-------|--------|
| `ateliers` | id, titre, date, horaires, description, nb_places |
| `inscriptions` | id, atelier_id, prenom, email, telephone, age |

---

## Textes suggérés pour le CTA (Admin)

> **Titre :** Gérez vos ateliers en toute simplicité
>
> **Description :** Créez des ateliers, suivez les inscriptions en temps réel et envoyez des confirmations à vos participants — tout depuis une interface centralisée.

---

## Navigation

| URL | Accès | Description |
|-----|-------|-------------|
| `/admin` | Admin | Vue d'ensemble + gestion des ateliers |
| `/createatelier` | Admin | Création d'un nouvel atelier |
| `/editatelier/[id]` | Admin | Modification d'un atelier existant |
| `/gestion` | Admin | Gestion détaillée des inscriptions |
| `/ateliers` | Public | Liste des ateliers disponibles |
| `/ateliers/atelier-[id]` | Public | Formulaire d'inscription à un atelier |
