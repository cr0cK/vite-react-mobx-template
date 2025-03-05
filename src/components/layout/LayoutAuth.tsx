import { Outlet } from '@tanstack/react-router'

export interface ILayoutAuthProps {}

/**
 * Layout for the auth pages.
 */
export default function LayoutAuth(props: ILayoutAuthProps) {
  return (
    <div>
      <h3>Layout: LayoutAuth</h3>
      <Outlet />
    </div>
  )
}
