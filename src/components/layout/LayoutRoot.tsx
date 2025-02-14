import { Outlet } from '@tanstack/react-router'
import ContextRenderQuery from '../helpers/RenderQuery/RenderQueryContext'
import MainNavigation from '../navigation/MainNavigation'

/**
 * Root layout wrapping the whole app.
 */
export default function LayoutRoot() {
  return (
    <ContextRenderQuery.Provider
      value={{
        renderLoading: () => <div>LOADING</div>,
        renderError: err => <div>An error has occurred: {err.message}</div>
      }}
    >
      <MainNavigation />
      <hr />
      <Outlet />
    </ContextRenderQuery.Provider>
  )
}
