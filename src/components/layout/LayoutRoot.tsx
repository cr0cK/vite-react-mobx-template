import { useAuthRedirections } from '@/hooks/useAuthRedirections'
import { Outlet } from '@tanstack/react-router'
import { observer } from 'mobx-react-lite'
import ContextRenderQuery from '../common/Renderers/RenderQuery/RenderQueryContext'
import { Toaster } from '../ui/sonner'

/**
 * Root layout wrapping the whole app.
 */
function LayoutRoot_() {
  useAuthRedirections()

  return (
    <ContextRenderQuery.Provider
      value={{
        renderLoading: () => <div>LOADING</div>,
        renderError: err => <div>An error has occurred: {err.message}</div>
      }}
    >
      <Toaster />
      <Outlet />
    </ContextRenderQuery.Provider>
  )
}

export const LayoutRoot = observer(LayoutRoot_)
