import { useStores } from '@/hooks/useStores'
import { buildVariants, styled } from '@/init/styles/buildVariants'
import { Outlet } from '@tanstack/react-router'
import { MainNavigation } from '../navigation/MainNavigation'

const Div = styled.div(props => {
  return buildVariants(props)
    .css({
      padding: 10
    })
    .end()
})

const Hr = styled.hr(props => {
  return buildVariants(props)
    .css({
      margin: '10px 0'
    })
    .end()
})

/**
 * Layout for app pages.
 */
export function LayoutApp() {
  const { storeAuthentication } = useStores()

  if (!storeAuthentication.isAuthenticated) {
    return null
  }

  return (
    <Div>
      <MainNavigation />
      <Hr />
      <Outlet />
    </Div>
  )
}
