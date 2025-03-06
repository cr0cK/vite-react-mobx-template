import { IndexPage } from '@/components/pages'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/app/')({
  component: IndexPage
})
