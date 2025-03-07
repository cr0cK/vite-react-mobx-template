import { useStores } from '@/hooks/useStores'
import { buildVariants, styled } from '@/init/styles/buildVariants'
import { getRoutePathname } from '@/lib/router/getRoutePathname'
import { Link as LinkRouter, useMatchRoute } from '@tanstack/react-router'
import { LogOut } from 'lucide-react'
import { ContainerFlex } from '../common/Containers/ContainerFlex'
import { handleLogoutOnPress } from '../pages/Auth/LoginPage/handlers'

const StyledLinRouter = styled(LinkRouter)(props => {
  const matchRoute = useMatchRoute()
  const isActive = matchRoute({ to: props.to, fuzzy: true })

  return buildVariants(props)
    .if(isActive !== false, {
      fontWeight: 600
    })
    .end()
})

export function MainNavigation() {
  const { storeAuthentication } = useStores()

  return (
    <ContainerFlex name="MainNavigation" justifyContent="space-between">
      <ContainerFlex name="MainNavigationLinks" gap={20}>
        <StyledLinRouter to={getRoutePathname('/app/home')}>
          Home
        </StyledLinRouter>

        <StyledLinRouter to={getRoutePathname('/app/users-management')}>
          Users Management
        </StyledLinRouter>

        <StyledLinRouter to={getRoutePathname('/app/about')}>
          About
        </StyledLinRouter>
      </ContainerFlex>

      <ContainerFlex name="Accoung" alignItems="center" gap={20}>
        <div>Welcome {storeAuthentication.authedUser?.fullName}</div>
        <LogOut size="20" onClick={handleLogoutOnPress(storeAuthentication)} />
      </ContainerFlex>
    </ContainerFlex>
  )
}
