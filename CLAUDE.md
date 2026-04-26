# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Web application for the Edulab Pasteur team to manage workshop (atelier) registrations. Facilitators create workshops; the public signs up via a form. Built as a SPA (SSR disabled).

## Commands

```bash
# Development
pnpm dev

# Build & Preview
pnpm nuxt build
pnpm nuxt preview

# Type checking & Linting
pnpm nuxt typecheck
pnpm eslint .

# Database
pnpm drizzle-kit generate   # generate migration from schema changes
pnpm drizzle-kit migrate    # apply migrations to sqlite.db
pnpm drizzle-kit studio     # open Drizzle Studio GUI
```

## Tech Stack

- **Nuxt 4** (SPA mode, `ssr: false`), Vue 3
- **Nuxt UI v4** + TailwindCSS v4 for UI components
- **Drizzle ORM** + SQLite (`./sqlite.db` via `@libsql/client`)
- **nuxt-auth-utils** for session-based auth (cookie sessions, password hashing via built-in utilities)
- **Zod** for validation (shared schemas in `shared/validators.ts`)
- **pnpm** as package manager

## Architecture

### Directory layout

```
app/
  components/     # Reusable Vue components
  pages/          # File-based routing
  layouts/        # default.vue, page-public.vue
  middleware/     # auth.ts — protects routes, redirects to /connexion
  assets/css/     # main.css (Tailwind + custom vars)
server/
  api/            # Nitro API handlers (one file = one endpoint)
    auth/         # login.post.ts, register.post.ts, auth.d.ts
  db/
    schema.ts     # Drizzle table definitions
    index.ts      # Drizzle client instance
    migrations/   # Generated SQL migrations
shared/
  validators.ts   # Zod schemas shared between client and server
public/           # Static assets
```

### Database schema

Two tables defined in `server/db/schema.ts`:

- **ateliers**: `id`, `titre`, `horaires`, `date`, `description`, `nb_places`
- **inscriptions**: `id`, `atelier_id` (FK → ateliers), `prenom`, `email`, `telephone`, `age`

Import the db instance from `server/db/index.ts` in API handlers.

### API routes (Nitro)

File naming convention: `server/api/<resource>.<verb>.ts`

- Workshop CRUD: `atelier.informations.ts` (POST), `atelier.informations.get.ts`, `atelier.informations.put.ts`, `atelier.informations.delete.ts`
- Single workshop: `ateliers/[id].get.ts` (includes inscription count)
- Registrations: `inscription.post.ts`, `inscription.informations.get.ts`, `inscription.informations.delete.ts`
- Auth: `auth/login.post.ts`, `auth/register.post.ts`

All handlers use `defineEventHandler()`. Auth routes use `nuxt-auth-utils` helpers: `setUserSession()`, `getUserSession()`, `clearUserSession()`.

### Authentication

- nuxt-auth-utils stores sessions in signed cookies
- User data (name, email, createdAt) lives in Nitro KV storage (`useStorage('data')`)
- Client composable: `useUserSession()` — `loggedIn`, `user`, `fetch()`, `clear()`
- Route protection: add `definePageMeta({ middleware: 'auth' })` to any page

### UI conventions

- Theme: primary `green`, neutral `slate`, dark mode disabled — set in `app.config.ts`
- Icon set: Lucide (via `@iconify-json/lucide`)
- Container max-width controlled via CSS variable in `main.css`
- Form components (`FormInput`, `FormSelect`, `FormTextarea`) wrap Nuxt UI with project-specific defaults
