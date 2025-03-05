import { createLazyFileRoute } from '@tanstack/react-router'
import IndexPage from '../components/pages/IndexPage'

export const Route = createLazyFileRoute('/app/')({
  component: IndexPage
})
