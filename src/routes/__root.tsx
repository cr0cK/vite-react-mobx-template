import { createRootRoute } from '@tanstack/react-router'
import LayoutRoot from '../components/layout/LayoutRoot'

export const Route = createRootRoute({
  component: () => <LayoutRoot />
})
