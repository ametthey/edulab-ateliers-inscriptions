const PUBLIC_ROUTES = [
  '/api/_auth/',
  '/api/auth/login',
  '/api/auth/register',
  '/api/inscription',
  '/api/ateliers/',
]

export default defineEventHandler(async (event) => {
  const path = getRequestPath(event)

  if (!path.startsWith('/api/')) return

  const isPublic = PUBLIC_ROUTES.some(route => path.startsWith(route))
  if (isPublic) return

  const session = await getUserSession(event)
  if (!session?.user) {
    throw createError({ statusCode: 401, message: 'Non autorisé' })
  }
})
