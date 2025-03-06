import { LayoutAuth } from '@/components/layout/LayoutAuth'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/auth')({
  component: LayoutAuth,
  loader: loaderParams => {
    if (loaderParams.location.pathname === '/auth') {
      throw redirect({ to: '/auth/login' })
    }
  }
})
