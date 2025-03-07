import { useMatchRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useLogger } from './useLogger'
import { useStores } from './useStores'

/**
 * Handle redirections between auth and app pages.
 */
export function useAuthRedirections() {
  const { storeAuthentication } = useStores()
  const logger = useLogger()
  const navigate = useNavigate()
  const matchRoute = useMatchRoute()

  const rootRootRouteMatcher = matchRoute({ to: '.', fuzzy: true })
  const indexRouteMatcher = matchRoute({ to: '/', fuzzy: true })
  const authRouteMatcher = matchRoute({ to: '/auth', fuzzy: true })
  const appRouteMatcher = matchRoute({ to: '/app', fuzzy: true })

  function redirectToAuth() {
    logger.info('Redirect to /auth/login')
    navigate({ to: '/auth/login' })
  }

  function redirectToApp() {
    logger.info('Redirect to /app/home')
    navigate({ to: '/app/home' })
  }

  useEffect(() => {
    const isIndex =
      rootRootRouteMatcher !== false || indexRouteMatcher !== false

    const isAuth = authRouteMatcher !== false

    const isApp = appRouteMatcher !== false

    if (isIndex) {
      storeAuthentication.isAuthenticated ? redirectToApp() : redirectToAuth()
    }

    if (isAuth && storeAuthentication.isAuthenticated) {
      redirectToApp()
    }

    if (isApp && !storeAuthentication.isAuthenticated) {
      redirectToAuth()
    }
  }, [storeAuthentication.isAuthenticated])
}
