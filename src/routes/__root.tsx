import { LayoutRoot } from '@/components/layout/LayoutRoot'
import { createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => <LayoutRoot />
})
