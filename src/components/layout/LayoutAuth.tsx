import { useStores } from '@/hooks/useStores'
import { Outlet } from '@tanstack/react-router'
import { ContainerFlex } from '../common/Containers/ContainerFlex'

export interface ILayoutAuthProps {}

/**
 * Layout for the auth pages.
 */
export function LayoutAuth(props: ILayoutAuthProps) {
  const { storeAuthentication } = useStores()

  if (storeAuthentication.isAuthenticated) {
    return null
  }

  return (
    <ContainerFlex
      name="LayoutAuth"
      direction="column"
      height="100vh"
      justifyContent="center"
    >
      <ContainerFlex name="LayoutAuthSecondary" justifyContent="center">
        <Outlet />
      </ContainerFlex>
    </ContainerFlex>
  )
}
