# Déploiement — VPS (Node.js + PM2)

## Prérequis sur le serveur

- Node.js 20+
- pnpm (`npm install -g pnpm`)
- PM2 (`npm install -g pm2`)
- Un reverse proxy (Nginx recommandé)

---

## 1. Préparer le build en local

```bash
pnpm nuxt build
```

Le build produit un dossier `.output/` autonome (server + assets).

---

## 2. Corriger le chemin SQLite pour la production

Le chemin actuel dans `server/db/index.ts` est relatif (`file:./sqlite.db`).
En production, utiliser un chemin absolu via une variable d'environnement :

```ts
// server/db/index.ts
const dbUrl = process.env.DATABASE_URL ?? 'file:./sqlite.db'
const client = createClient({ url: dbUrl })
```

Puis définir `DATABASE_URL` dans les variables d'environnement du serveur (voir étape 4).

---

## 3. Transférer les fichiers sur le serveur

```bash
# Depuis la machine locale
rsync -avz .output/ user@mon-serveur:/var/www/edulab/.output/
```

> Ne pas transférer `node_modules`, `.env`, `sqlite.db` — ils ne font pas partie du build.

Si c'est le premier déploiement, copier aussi la base de données :

```bash
scp sqlite.db user@mon-serveur:/var/www/edulab/sqlite.db
```

---

## 4. Configurer les variables d'environnement

Créer un fichier `ecosystem.config.cjs` sur le serveur dans `/var/www/edulab/` :

```js
module.exports = {
  apps: [
    {
      name: 'edulab',
      script: '.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        DB_FILE_NAME: 'file:/var/www/edulab/sqlite.db',
        NUXT_SESSION_PASSWORD: 'une-chaine-aleatoire-de-32-caracteres-minimum',
        SMTP_USER: 'votre_user_smtp',
        SMTP_PASS: 'votre_pass_smtp',
      },
    },
  ],
}
```

> ⚠️ `NUXT_SESSION_PASSWORD` doit faire au moins 32 caractères.
> ⚠️ Ne pas commiter ce fichier — il contient des secrets.

---

## 5. Démarrer avec PM2

```bash
cd /var/www/edulab
pm2 start ecosystem.config.cjs
pm2 save                          # persiste la liste des process
pm2 startup                       # relance PM2 au redémarrage du serveur
```

Vérifier que le serveur tourne :

```bash
pm2 status
pm2 logs edulab
```

---

## 6. Configurer Nginx comme reverse proxy

```nginx
server {
    listen 80;
    server_name mon-domaine.fr;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Activer HTTPS avec Certbot :

```bash
certbot --nginx -d mon-domaine.fr
```

---

## 7. Mettre à jour l'application

```bash
# En local
pnpm nuxt build
rsync -avz .output/ user@mon-serveur:/var/www/edulab/.output/

# Sur le serveur
pm2 restart edulab
```

---

## Récapitulatif des variables d'environnement

| Variable | Description | Exemple |
|---|---|---|
| `DB_FILE_NAME` | Chemin absolu vers sqlite.db | `file:/var/www/edulab/sqlite.db` |
| `NUXT_SESSION_PASSWORD` | Clé de chiffrement des sessions (32+ chars) | `super-secret-...` |
| `SMTP_USER` | Identifiant SMTP | `bb6df844b48365` |
| `SMTP_PASS` | Mot de passe SMTP | `534d02c2aeea22` |
| `PORT` | Port d'écoute du serveur | `3000` |

---

## Points d'attention

- **`.env` n'est pas lu après le build** — toutes les variables passent par `ecosystem.config.cjs` ou l'environnement système.
- **SQLite** est un fichier local — pas de réplication, sauvegarder régulièrement `/var/www/edulab/sqlite.db`.
- **`setTimeout` pour les emails** — le plugin `mail-scheduler.ts` replanifie les invitations au démarrage. Un redémarrage PM2 ne fera pas perdre les emails en attente.
