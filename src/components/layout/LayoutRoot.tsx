import { Outlet } from '@tanstack/react-router'
import ContextRenderQuery from '../common/Renderers/RenderQuery/RenderQueryContext'
import { Toaster } from '../ui/sonner'

/**
 * Root layout wrapping the whole app.
 */
export function LayoutRoot() {
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
