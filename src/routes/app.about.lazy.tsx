import { createLazyFileRoute } from '@tanstack/react-router'
import AboutPage from '../components/pages/AboutPage'

export const Route = createLazyFileRoute('/app/about')({
  component: AboutPage
})
