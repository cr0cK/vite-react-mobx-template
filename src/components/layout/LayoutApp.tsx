import { Outlet } from '@tanstack/react-router'
import MainNavigation from '../navigation/MainNavigation'

/**
 * Layout for app pages.
 */
export default function LayoutApp() {
  return (
    <div>
      <MainNavigation />
      <hr />
      <Outlet />
    </div>
  )
}
