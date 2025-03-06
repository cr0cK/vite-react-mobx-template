import { AboutPage } from '@/components/pages/App/AboutPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/app/about')({
  component: AboutPage
})
