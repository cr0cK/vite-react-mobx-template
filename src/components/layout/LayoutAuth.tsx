import { Outlet } from '@tanstack/react-router'
import { ContainerFlex } from '../common/Containers/ContainerFlex'

export interface ILayoutAuthProps {}

/**
 * Layout for the auth pages.
 */
export function LayoutAuth(props: ILayoutAuthProps) {
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
