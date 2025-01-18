import { Outlet } from '@tanstack/react-router'
import MainNavigation from '../navigation/MainNavigation'

/**
 * Root layout wrapping the whole app.
 */
export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <hr />
      <Outlet />
    </>
  )
}
