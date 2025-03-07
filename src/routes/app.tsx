import { LayoutApp } from '@/components/layout/LayoutApp'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({
  component: LayoutApp
  // loader: loaderParams => {
  //   if (loaderParams.location.pathname === '/app') {
  //     throw redirect({ to: '/app/home' })
  //   }
  // }
})
