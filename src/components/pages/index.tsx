import { useStores } from '@/hooks/useStores'
import { Navigate } from '@tanstack/react-router'

/**
 * Redirect to the Login page if not authed, otherwise redirect to the App pages.
 */
export function IndexPage() {
  const { storeAuthentication } = useStores()

  if (!storeAuthentication.isAuthenticated) {
    return <Navigate to="/auth/login" />
  }

  return <Navigate to="/app" />
}
